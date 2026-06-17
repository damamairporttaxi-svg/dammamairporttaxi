import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const { data } = await supabaseAdmin.from("support_tickets").select("*").order("created_at", { ascending: false });
  return NextResponse.json({ tickets: data ?? [] });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { data, error } = await supabaseAdmin.from("support_tickets").insert(body).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ticket: data });
}

export async function PATCH(req: NextRequest) {
  const { id, ...updates } = await req.json();
  const { data, error } = await supabaseAdmin.from("support_tickets").update(updates).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ticket: data });
}
