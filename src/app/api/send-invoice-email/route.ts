import { requireAdmin } from "@/lib/admin-auth";
import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL } from "@/lib/resend";
import { invoiceEmail } from "@/lib/email-templates";
import { buildInvoicePlan } from "@/lib/invoice-plan";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req); if (denied) return denied;
  const { booking_id, options } = await req.json();
  const { data: b } = await supabaseAdmin.from("bookings").select("*").eq("id", booking_id).single();
  if (!b) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  let plan, returnDate = "";
  if (options?.roundTrip || Number(options?.paid) > 0) {
    returnDate = typeof options.returnDate === "string" ? options.returnDate.slice(0, 20) : "";
    const scope = ["full", "outbound", "return"].includes(options.scope) ? options.scope : "full";
    plan = buildInvoicePlan(Number(b.final_price), String(b.pickup_date ?? ""), {
      roundTrip: !!options.roundTrip, returnDate, scope, paid: Number(options.paid) || 0,
    });
  }

  const res = await resend.emails.send({
    from: FROM_EMAIL,
    to: b.email,
    subject: `Invoice ${b.ref}${plan ? ` – ${plan.invoiceLabel}` : ""} | Dammam Airport Taxi`,
    html: invoiceEmail(b, plan, returnDate),
  });
  return NextResponse.json({ email: res });
}
