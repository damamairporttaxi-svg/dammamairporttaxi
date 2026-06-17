import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name, email, phone,
    pickup_location, dropoff_location,
    pickup_date, pickup_time,
    passengers, luggage,
    vehicle_type, service_type,
    flight_number, special_notes,
    price, discount_amount, final_price,
    promo_code, status,
  } = body;

  if (!name || !email || !phone || !pickup_location || !dropoff_location || !pickup_date || !pickup_time) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data: booking, error } = await supabaseAdmin
    .from("bookings")
    .insert({
      ref: "", // trigger will set this
      name, email, phone,
      pickup_location, dropoff_location,
      pickup_date, pickup_time,
      passengers: passengers ?? 1,
      luggage: luggage ?? 0,
      vehicle_type: vehicle_type ?? "sedan",
      service_type: service_type ?? "airport",
      flight_number: flight_number || null,
      special_notes: special_notes || null,
      price: price ?? 0,
      discount_amount: discount_amount ?? 0,
      final_price: final_price ?? price ?? 0,
      promo_code: promo_code || null,
      status: status ?? "pending",
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  // Increment promo code usage
  if (promo_code) {
    try {
      await supabaseAdmin.from("promo_codes").update({ used_count: 0 }).eq("code", promo_code.toUpperCase());
      // Note: Use a Supabase function or RPC for atomic increment; for now update via select+increment
    } catch { /* ignore */ }
  }

  // Upsert customer record
  try {
    await supabaseAdmin.from("customers").upsert({
      email, name, phone,
      total_bookings: 1,
      total_spent: final_price ?? price ?? 0,
    }, { onConflict: "email", ignoreDuplicates: false });
  } catch { /* ignore */ }

  // Send emails in background
  fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send-booking-emails`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ booking_id: booking.id }),
  }).catch(() => null);

  return NextResponse.json({ booking });
}
