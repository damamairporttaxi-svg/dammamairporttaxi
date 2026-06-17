import { NextRequest, NextResponse } from "next/server";
import { resend, ADMIN_EMAIL, FROM_EMAIL } from "@/lib/resend";
import { contactFormEmail } from "@/lib/email-templates";

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "name, email, and message required" }, { status: 400 });
  }

  const res = await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `Contact Form: ${name} — Dammam Airport Taxi`,
    html: contactFormEmail(name, email, phone ?? "-", message),
  });
  return NextResponse.json({ success: true, email: res });
}
