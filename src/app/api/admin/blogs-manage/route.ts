import { requireAdmin } from "@/lib/admin-auth";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(req: NextRequest) {
  const denied = await requireAdmin(req); if (denied) return denied;
  const { data } = await supabaseAdmin.from("blogs").select("*").order("created_at", { ascending: false });
  return NextResponse.json({ blogs: data ?? [] });
}

export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req); if (denied) return denied;
  const body = await req.json();
  const slug = body.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now();
  const { data, error } = await supabaseAdmin.from("blogs").insert({ ...body, slug }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ blog: data });
}

export async function PATCH(req: NextRequest) {
  const denied = await requireAdmin(req); if (denied) return denied;
  const { id, ...updates } = await req.json();
  const { data, error } = await supabaseAdmin.from("blogs").update(updates).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ blog: data });
}

export async function DELETE(req: NextRequest) {
  const denied = await requireAdmin(req); if (denied) return denied;
  const { searchParams } = new URL(req.url);
  await supabaseAdmin.from("blogs").delete().eq("id", searchParams.get("id") ?? "");
  return NextResponse.json({ success: true });
}
