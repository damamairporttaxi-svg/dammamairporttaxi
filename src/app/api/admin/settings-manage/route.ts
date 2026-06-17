import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const { data } = await supabaseAdmin.from("site_settings").select("*").order("key");
  return NextResponse.json({ settings: data ?? [] });
}

export async function PATCH(req: NextRequest) {
  const { key, value } = await req.json();
  const { data, error } = await supabaseAdmin
    .from("site_settings")
    .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" })
    .select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ setting: data });
}
