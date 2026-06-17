import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL } from "@/lib/resend";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { booking_id, driver_email } = await req.json();
  const { data: b } = await supabaseAdmin.from("bookings").select("*").eq("id", booking_id).single();
  if (!b) return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  if (!driver_email) return NextResponse.json({ error: "driver_email required" }, { status: 400 });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;padding:20px;">
      <h2 style="color:#f5c518;">New Trip Assignment — Dammam Airport Taxi</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px;color:#555;">Booking Ref</td><td style="padding:6px;font-weight:bold;">${b.ref}</td></tr>
        <tr><td style="padding:6px;color:#555;">Passenger</td><td style="padding:6px;">${b.name}</td></tr>
        <tr><td style="padding:6px;color:#555;">Phone</td><td style="padding:6px;">${b.phone}</td></tr>
        <tr><td style="padding:6px;color:#555;">Pickup</td><td style="padding:6px;">${b.pickup_location}</td></tr>
        <tr><td style="padding:6px;color:#555;">Drop-off</td><td style="padding:6px;">${b.dropoff_location}</td></tr>
        <tr><td style="padding:6px;color:#555;">Date & Time</td><td style="padding:6px;font-weight:bold;">${b.pickup_date} at ${b.pickup_time}</td></tr>
        <tr><td style="padding:6px;color:#555;">Vehicle</td><td style="padding:6px;">${b.vehicle_type?.toUpperCase()}</td></tr>
        <tr><td style="padding:6px;color:#555;">Passengers</td><td style="padding:6px;">${b.passengers}</td></tr>
        ${b.flight_number ? `<tr><td style="padding:6px;color:#555;">Flight</td><td style="padding:6px;">${b.flight_number}</td></tr>` : ""}
        ${b.special_notes ? `<tr><td style="padding:6px;color:#555;">Notes</td><td style="padding:6px;">${b.special_notes}</td></tr>` : ""}
      </table>
      <p style="color:#888;font-size:12px;margin-top:20px;">Dammam Airport Taxi · +966 56 948 7569</p>
    </div>`;

  const res = await resend.emails.send({
    from: FROM_EMAIL,
    to: driver_email,
    subject: `Trip Assignment ${b.ref} — ${b.pickup_date} at ${b.pickup_time}`,
    html,
  });
  return NextResponse.json({ email: res });
}
