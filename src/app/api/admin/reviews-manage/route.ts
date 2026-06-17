import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const { data } = await supabaseAdmin.from("reviews").select("*").order("created_at", { ascending: false });
  return NextResponse.json({ reviews: data ?? [] });
}

export async function PATCH(req: NextRequest) {
  const { id, ...updates } = await req.json();
  const { data, error } = await supabaseAdmin.from("reviews").update(updates).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ review: data });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  await supabaseAdmin.from("reviews").delete().eq("id", searchParams.get("id") ?? "");
  return NextResponse.json({ success: true });
}
