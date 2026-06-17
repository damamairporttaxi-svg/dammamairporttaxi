import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { resend, FROM_EMAIL } from "@/lib/resend";
import { statusUpdateEmail } from "@/lib/email-templates";

// Called by Vercel Cron — add to vercel.json:
// { "crons": [{ "path": "/api/cron/send-reminders", "schedule": "0 */6 * * *" }] }
export async function GET(req: NextRequest) {
  // Verify cron secret
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split("T")[0];

  const { data: bookings } = await supabaseAdmin
    .from("bookings")
    .select("*")
    .eq("pickup_date", dateStr)
    .in("status", ["confirmed", "driver_assigned"]);

  if (!bookings?.length) return NextResponse.json({ sent: 0 });

  const results = await Promise.allSettled(
    bookings.map((b) =>
      resend.emails.send({
        from: FROM_EMAIL,
        to: b.email,
        subject: `Reminder: Your taxi tomorrow — ${b.ref} | Dammam Airport Taxi`,
        html: statusUpdateEmail(b, "reminder"),
      })
    )
  );

  return NextResponse.json({ sent: results.filter((r) => r.status === "fulfilled").length });
}
