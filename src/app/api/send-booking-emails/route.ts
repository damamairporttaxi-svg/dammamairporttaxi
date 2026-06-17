import { NextRequest, NextResponse } from "next/server";
import { resend, ADMIN_EMAIL, FROM_EMAIL } from "@/lib/resend";
import { bookingConfirmationCustomer, bookingNotificationAdmin } from "@/lib/email-templates";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { booking_id } = await req.json();
  if (!booking_id) return NextResponse.json({ error: "booking_id required" }, { status: 400 });

  const { data: b, error } = await supabaseAdmin.from("bookings").select("*").eq("id", booking_id).single();
  if (error || !b) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  const [customerRes, adminRes] = await Promise.all([
    resend.emails.send({
      from: FROM_EMAIL,
      to: b.email,
      subject: `Booking Confirmed — ${b.ref} | Dammam Airport Taxi`,
      html: bookingConfirmationCustomer(b),
    }),
    resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `🆕 New Booking ${b.ref} — ${b.name}`,
      html: bookingNotificationAdmin(b),
    }),
  ]);

  return NextResponse.json({ customer: customerRes, admin: adminRes });
}
