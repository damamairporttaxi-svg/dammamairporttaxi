import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const { data } = await supabaseAdmin.from("pricing").select("*").order("route_name");
  return NextResponse.json({ pricing: data ?? [] });
}

export async function PATCH(req: NextRequest) {
  const { id, ...updates } = await req.json();
  const { data, error } = await supabaseAdmin.from("pricing").update({ ...updates, updated_at: new Date().toISOString() }).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ pricing: data });
}
