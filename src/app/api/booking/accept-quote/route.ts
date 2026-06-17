import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { ref } = await req.json();
  if (!ref) return NextResponse.json({ error: "ref required" }, { status: 400 });

  const { data: b, error } = await supabaseAdmin
    .from("bookings")
    .update({ status: "confirmed" })
    .eq("ref", ref)
    .eq("status", "pending")
    .select()
    .single();

  if (error || !b) {
    return NextResponse.json({ error: "Booking not found or already confirmed" }, { status: 404 });
  }
  return NextResponse.json({ booking: b });
}
