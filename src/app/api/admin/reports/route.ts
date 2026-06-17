import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get("days") ?? "30");
  const since = new Date(Date.now() - days * 86400000).toISOString();

  const { data: bookings } = await supabaseAdmin
    .from("bookings")
    .select("status,vehicle_type,final_price,email,created_at")
    .gte("created_at", since);

  const b = bookings ?? [];
  const completed = b.filter(x => x.status === "completed");
  const revenue = completed.reduce((s, x) => s + (x.final_price ?? 0), 0);
  const avg_order = completed.length ? Math.round(revenue / completed.length) : 0;

  const by_vehicle: Record<string, number> = {};
  const by_status: Record<string, number> = {};
  b.forEach(x => {
    by_vehicle[x.vehicle_type] = (by_vehicle[x.vehicle_type] ?? 0) + 1;
    by_status[x.status] = (by_status[x.status] ?? 0) + 1;
  });

  const { count: new_customers } = await supabaseAdmin
    .from("customers")
    .select("id", { count: "exact", head: true })
    .gte("created_at", since);

  return NextResponse.json({
    total_bookings: b.length,
    completed: completed.length,
    cancelled: b.filter(x => x.status === "cancelled").length,
    revenue: Math.round(revenue),
    avg_order,
    new_customers: new_customers ?? 0,
    by_vehicle,
    by_status,
  });
}
