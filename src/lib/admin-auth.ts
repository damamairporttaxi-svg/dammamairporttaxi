import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

/**
 * Verifies the Supabase access token sent as "Authorization: Bearer <token>".
 * Optionally restrict to specific emails with ADMIN_EMAILS="a@x.com,b@y.com".
 * Returns a NextResponse (401/403) when not allowed, or null when OK.
 */
export async function requireAdmin(req: NextRequest): Promise<NextResponse | null> {
  const token = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const allowed = (process.env.ADMIN_EMAILS ?? "")
    .split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  if (allowed.length && !allowed.includes((data.user.email ?? "").toLowerCase())) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}
