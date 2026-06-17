import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const [all, todayB, revenue] = await Promise.all([
    supabaseAdmin.from("bookings").select("status"),
    supabaseAdmin.from("bookings").select("id").eq("pickup_date", today),
    supabaseAdmin.from("bookings").select("final_price").eq("status", "completed"),
  ]);

  const bookings = all.data ?? [];
  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === "pending").length,
    confirmed: bookings.filter(b => b.status === "confirmed").length,
    completed: bookings.filter(b => b.status === "completed").length,
    today: todayB.data?.length ?? 0,
    revenue: (revenue.data ?? []).reduce((s, b) => s + (b.final_price ?? 0), 0),
  };

  const { data: recent } = await supabaseAdmin
    .from("bookings")
    .select("id,ref,name,pickup_location,pickup_date,vehicle_type,final_price,status")
    .order("created_at", { ascending: false })
    .limit(10);

  return NextResponse.json({ stats, recent: recent ?? [] });
}
