import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/bookings";

// Public endpoint used by /booking — forces status "pending" and recalculates promo server-side.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const r = await createBooking(body, { admin: false });
  if (r.error) return NextResponse.json({ error: r.error }, { status: r.status ?? 400 });
  // Only return what the customer needs
  const { ref, id } = r.booking!;
  return NextResponse.json({ booking: { id, ref } });
}
