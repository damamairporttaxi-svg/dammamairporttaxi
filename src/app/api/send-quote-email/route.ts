import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL } from "@/lib/resend";
import { quoteEmail } from "@/lib/email-templates";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { booking_id } = await req.json();
  const { data: b } = await supabaseAdmin.from("bookings").select("*").eq("id", booking_id).single();
  if (!b) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  const res = await resend.emails.send({
    from: FROM_EMAIL,
    to: b.email,
    subject: `Your Quote ${b.ref} | Dammam Airport Taxi`,
    html: quoteEmail(b),
  });
  return NextResponse.json({ email: res });
}
