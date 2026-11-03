import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { createBooking } from "@/lib/bookings";

// Admin-only: manual booking creation (any status / custom pricing).
export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req); if (denied) return denied;
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const r = await createBooking(body, { admin: true });
  if (r.error) return NextResponse.json({ error: r.error }, { status: r.status ?? 400 });
  return NextResponse.json({ booking: r.booking });
}
