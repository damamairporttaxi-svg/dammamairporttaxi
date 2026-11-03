import { supabaseAdmin } from "@/lib/supabase-admin";
import { resend, ADMIN_EMAIL, FROM_EMAIL } from "@/lib/resend";
import { bookingConfirmationCustomer, bookingNotificationAdmin } from "@/lib/email-templates";

export const BOOKING_STATUSES = ["pending", "confirmed", "driver_assigned", "in_progress", "completed", "cancelled"];

const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const num = (v: unknown, d = 0) => { const n = Number(v); return Number.isFinite(n) && n >= 0 ? n : d; };

type Result = { booking?: Record<string, any>; error?: string; status?: number };

/** Validates input, re-checks the promo code server-side, inserts the booking, updates customer + promo counters, sends emails. */
export async function createBooking(body: any, opts: { admin: boolean }): Promise<Result> {
  const name = str(body.name, 120), email = str(body.email, 200).toLowerCase(), phone = str(body.phone, 40);
  const pickup_location = str(body.pickup_location), dropoff_location = str(body.dropoff_location);
  const pickup_date = str(body.pickup_date, 10), pickup_time = str(body.pickup_time, 8);

  if (!name || !email || !phone || !pickup_location || !dropoff_location || !pickup_date || !pickup_time)
    return { error: "Missing required fields", status: 400 };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Invalid email", status: 400 };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(pickup_date)) return { error: "Invalid date", status: 400 };

  const price = num(body.price);
  if (!opts.admin && price <= 0) return { error: "Invalid price", status: 400 };

  // Promo: public bookings always get the discount recalculated on the server
  let discount = opts.admin ? num(body.discount_amount) : 0;
  let promo_code: string | null = null;
  if (body.promo_code) {
    const code = str(body.promo_code, 40).toUpperCase();
    const { data: p } = await supabaseAdmin.from("promo_codes").select("*").eq("code", code).eq("active", true).single();
    const valid = p
      && !(p.expires_at && new Date(p.expires_at) < new Date())
      && !(p.max_uses && p.used_count >= p.max_uses)
      && !(p.min_order && price < p.min_order);
    if (valid) {
      promo_code = code;
      const d = p.discount_type === "percentage" ? (price * p.discount_value) / 100 : p.discount_value;
      discount = Math.round(Math.min(d, price) * 100) / 100;
    }
  }
  const final_price = opts.admin && body.final_price !== undefined ? num(body.final_price, price) : Math.max(price - discount, 0);

  const status = opts.admin && BOOKING_STATUSES.includes(body.status) ? body.status : "pending";

  const { data: booking, error } = await supabaseAdmin.from("bookings").insert({
    ref: "", name, email, phone,
    pickup_location, dropoff_location, pickup_date, pickup_time,
    passengers: Math.max(1, Math.round(num(body.passengers, 1))),
    luggage: Math.round(num(body.luggage)),
    vehicle_type: str(body.vehicle_type, 30) || "sedan",
    service_type: str(body.service_type, 30) || "airport",
    flight_number: str(body.flight_number, 30) || null,
    special_notes: str(body.special_notes, 1000) || null,
    price, discount_amount: discount, final_price, promo_code, status,
  }).select().single();
  if (error || !booking) return { error: error?.message ?? "Could not create booking", status: 400 };

  // Promo usage counter (+1)
  if (promo_code) {
    try {
      const { data: p } = await supabaseAdmin.from("promo_codes").select("used_count").eq("code", promo_code).single();
      await supabaseAdmin.from("promo_codes").update({ used_count: (p?.used_count ?? 0) + 1 }).eq("code", promo_code);
    } catch { /* non-fatal */ }
  }

  // Customer record: create, or increment totals for repeat customers
  try {
    const { data: c } = await supabaseAdmin.from("customers").select("total_bookings,total_spent").eq("email", email).maybeSingle();
    await supabaseAdmin.from("customers").upsert({
      email, name, phone,
      total_bookings: (c?.total_bookings ?? 0) + 1,
      total_spent: Number(c?.total_spent ?? 0) + final_price,
    }, { onConflict: "email" });
  } catch { /* non-fatal */ }

  // Emails are awaited so serverless doesn't kill them mid-flight; they never block the booking
  try { await sendBookingEmails(booking); } catch (e) { console.error("booking email failed", e); }

  return { booking };
}

export async function sendBookingEmails(b: Record<string, any>) {
  return Promise.allSettled([
    resend.emails.send({ from: FROM_EMAIL, to: b.email, subject: `Booking Received — ${b.ref} | Dammam Airport Taxi`, html: bookingConfirmationCustomer(b as any) }),
    resend.emails.send({ from: FROM_EMAIL, to: ADMIN_EMAIL, subject: `New Booking ${b.ref} — ${b.name}`, html: bookingNotificationAdmin(b as any) }),
  ]);
}
