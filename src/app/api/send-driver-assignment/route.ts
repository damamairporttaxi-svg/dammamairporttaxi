import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL } from "@/lib/resend";
import { driverAssignmentEmail } from "@/lib/email-templates";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { booking_id } = await req.json();
  const { data: b } = await supabaseAdmin.from("bookings").select("*").eq("id", booking_id).single();
  if (!b) return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  if (!b.driver_phone) return NextResponse.json({ error: "No driver assigned yet" }, { status: 400 });

  // Email to customer
  const res = await resend.emails.send({
    from: FROM_EMAIL,
    to: b.email,
    subject: `Driver Assigned for ${b.ref} | Dammam Airport Taxi`,
    html: driverAssignmentEmail(b),
  });

  // WhatsApp message text (customer copies / admin sends manually)
  const waMsg = encodeURIComponent(
    `Hello ${b.name}! Your Dammam Airport Taxi driver has been assigned.\n\nDriver: ${b.driver_name}\nPhone: ${b.driver_phone}\nPlate: ${b.driver_plate}\n\nPickup: ${b.pickup_date} at ${b.pickup_time}\nFrom: ${b.pickup_location}\n\nRef: ${b.ref}`
  );

  return NextResponse.json({ email: res, whatsapp_link: `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${waMsg}` });
}
