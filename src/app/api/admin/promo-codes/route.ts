import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

// GET all promo codes
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("promo_codes")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ promo_codes: data });
}

// POST — create promo code
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { code, discount_type, discount_value, min_order, max_uses, expires_at } = body;
  if (!code || !discount_value) {
    return NextResponse.json({ error: "code and discount_value required" }, { status: 400 });
  }
  const { data, error } = await supabaseAdmin
    .from("promo_codes")
    .insert({ code: code.toUpperCase(), discount_type, discount_value, min_order, max_uses, expires_at })
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ promo_code: data });
}

// PATCH — update (toggle active, etc.)
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const { data, error } = await supabaseAdmin
    .from("promo_codes")
    .update(updates)
    .eq("id", id)
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ promo_code: data });
}

// DELETE
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const { error } = await supabaseAdmin.from("promo_codes").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}
