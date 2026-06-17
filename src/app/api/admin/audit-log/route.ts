import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") ?? "50");
  const offset = parseInt(searchParams.get("offset") ?? "0");

  const { data, error, count } = await supabaseAdmin
    .from("audit_log")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ logs: data, total: count });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { admin_email, action, entity, entity_id, details } = body;
  const { data, error } = await supabaseAdmin
    .from("audit_log")
    .insert({ admin_email, action, entity, entity_id, details: details ?? {} })
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ log: data });
}
