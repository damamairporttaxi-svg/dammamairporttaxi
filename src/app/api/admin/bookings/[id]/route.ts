import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

// GET single booking
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json({ booking: data });
}

// PATCH — update status, assign driver, add admin notes
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();

  const allowed = ["status", "driver_name", "driver_phone", "driver_plate", "admin_notes", "price", "final_price"];
  const update: Record<string, unknown> = {};
  for (const key of allowed) {
    if (body[key] !== undefined) update[key] = body[key];
  }

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  // Log action
  await supabaseAdmin.from("audit_log").insert({
    admin_email: body.admin_email ?? "admin",
    action: "UPDATE_BOOKING",
    entity: "bookings",
    entity_id: id,
    details: update,
  });

  return NextResponse.json({ booking: data });
}
