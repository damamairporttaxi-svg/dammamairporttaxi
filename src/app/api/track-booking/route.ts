import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const ref = searchParams.get("ref");
  if (!ref) return NextResponse.json({ error: "ref required" }, { status: 400 });

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("id,ref,name,pickup_location,dropoff_location,pickup_date,pickup_time,vehicle_type,passengers,status,driver_name,driver_phone,driver_plate,final_price,created_at")
    .eq("ref", ref.toUpperCase())
    .single();

  if (error || !data) return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  return NextResponse.json({ booking: data });
}
