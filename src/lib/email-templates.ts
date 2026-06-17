import type { Booking } from "@/types/database";

const gold = "#f5c518";
const dark = "#0c0c0c";

function baseLayout(content: string, title: string) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
        <!-- Header -->
        <tr><td style="background:${dark};padding:28px 32px;text-align:center;">
          <h1 style="margin:0;color:${gold};font-size:22px;font-weight:800;">Dammam Airport Taxi</h1>
          <p style="margin:6px 0 0;color:#aaa;font-size:13px;">King Fahd International Airport · Eastern Province · Saudi Arabia</p>
        </td></tr>
        <!-- Content -->
        <tr><td style="padding:32px;">${content}</td></tr>
        <!-- Footer -->
        <tr><td style="background:#1a1a1a;padding:20px 32px;text-align:center;">
          <p style="margin:0;color:#888;font-size:12px;">WhatsApp: +966 56 948 7569 · haramtaxiservice@gmail.com</p>
          <p style="margin:6px 0 0;color:#555;font-size:11px;">© 2026 Dammam Airport Taxi — All rights reserved</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function bookingTable(b: Partial<Booking>) {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:8px 12px;color:#555;font-size:13px;width:140px;">${label}</td>
      <td style="padding:8px 12px;color:#111;font-size:13px;font-weight:600;">${value}</td>
    </tr>`;
  return `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;margin:20px 0;">
    ${row("Booking Ref", b.ref ?? "-")}
    ${row("Passenger", b.name ?? "-")}
    ${row("Pickup", b.pickup_location ?? "-")}
    ${row("Drop-off", b.dropoff_location ?? "-")}
    ${row("Date", b.pickup_date ?? "-")}
    ${row("Time", b.pickup_time ?? "-")}
    ${row("Vehicle", (b.vehicle_type ?? "sedan").toUpperCase())}
    ${row("Passengers", String(b.passengers ?? 1))}
    ${b.flight_number ? row("Flight", b.flight_number) : ""}
    ${row("Total", `${b.final_price ?? b.price ?? 0} SAR`)}
  </table>`;
}

export function bookingConfirmationCustomer(b: Partial<Booking>) {
  return baseLayout(`
    <h2 style="color:${dark};margin:0 0 8px;">Booking Confirmed!</h2>
    <p style="color:#555;margin:0 0 20px;">Thank you <strong>${b.name}</strong>! Your transfer has been received and confirmed.</p>
    ${bookingTable(b)}
    <p style="color:#555;font-size:13px;">Your driver details will be sent 2 hours before your pickup. For any changes, WhatsApp us at <strong>+966 56 948 7569</strong>.</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="https://dammamairporttaxi.com/track-booking?ref=${b.ref}" style="background:${gold};color:#000;padding:12px 28px;border-radius:6px;font-weight:700;text-decoration:none;font-size:14px;">Track Your Booking</a>
    </div>
  `, "Booking Confirmed — Dammam Airport Taxi");
}

export function bookingNotificationAdmin(b: Partial<Booking>) {
  return baseLayout(`
    <h2 style="color:#d00;margin:0 0 8px;">🆕 New Booking Received</h2>
    <p style="color:#555;margin:0 0 20px;">A new booking has been submitted. Please confirm and assign a driver.</p>
    ${bookingTable(b)}
    <p style="color:#555;font-size:13px;">Phone: <strong>${b.phone}</strong> · Email: <strong>${b.email}</strong></p>
    <div style="text-align:center;margin:24px 0;">
      <a href="https://dammamairporttaxi.com/admin/bookings/${b.id}" style="background:${gold};color:#000;padding:12px 28px;border-radius:6px;font-weight:700;text-decoration:none;font-size:14px;">Open in Admin Panel</a>
    </div>
  `, "New Booking — Dammam Airport Taxi Admin");
}

export function driverAssignmentEmail(b: Partial<Booking>) {
  return baseLayout(`
    <h2 style="color:${dark};margin:0 0 8px;">Driver Assigned</h2>
    <p style="color:#555;margin:0 0 20px;">Your driver has been assigned for booking <strong>${b.ref}</strong>.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;margin:20px 0;">
      <tr><td style="padding:8px 12px;color:#555;width:140px;">Driver Name</td><td style="padding:8px 12px;font-weight:700;">${b.driver_name}</td></tr>
      <tr><td style="padding:8px 12px;color:#555;">Driver Phone</td><td style="padding:8px 12px;font-weight:700;">${b.driver_phone}</td></tr>
      <tr><td style="padding:8px 12px;color:#555;">Vehicle Plate</td><td style="padding:8px 12px;font-weight:700;">${b.driver_plate}</td></tr>
      <tr><td style="padding:8px 12px;color:#555;">Pickup Date</td><td style="padding:8px 12px;">${b.pickup_date} at ${b.pickup_time}</td></tr>
    </table>
    <p style="color:#555;font-size:13px;">Your driver will contact you 2 hours before pickup. For any queries, WhatsApp: <strong>+966 56 948 7569</strong></p>
  `, "Driver Assigned — Dammam Airport Taxi");
}

export function statusUpdateEmail(b: Partial<Booking>, status: string) {
  const statusMap: Record<string, { label: string; color: string }> = {
    confirmed: { label: "Confirmed", color: "#2e7d32" },
    driver_assigned: { label: "Driver Assigned", color: "#1565c0" },
    in_progress: { label: "Trip In Progress", color: "#e65100" },
    completed: { label: "Completed", color: "#2e7d32" },
    cancelled: { label: "Cancelled", color: "#c62828" },
  };
  const s = statusMap[status] ?? { label: status, color: "#333" };
  return baseLayout(`
    <h2 style="color:${dark};margin:0 0 8px;">Booking Status Update</h2>
    <p style="color:#555;margin:0 0 20px;">Your booking <strong>${b.ref}</strong> status has been updated.</p>
    <div style="text-align:center;padding:20px;background:#f9f9f9;border-radius:8px;margin-bottom:20px;">
      <span style="background:${s.color};color:#fff;padding:8px 20px;border-radius:20px;font-weight:700;font-size:16px;">${s.label}</span>
    </div>
    ${bookingTable(b)}
    <p style="color:#555;font-size:13px;">Questions? WhatsApp us: <strong>+966 56 948 7569</strong></p>
  `, `Booking ${s.label} — Dammam Airport Taxi`);
}

export function invoiceEmail(b: Partial<Booking>) {
  return baseLayout(`
    <h2 style="color:${dark};margin:0 0 8px;">Invoice — ${b.ref}</h2>
    <p style="color:#555;margin:0 0 20px;">Please find your invoice details below.</p>
    ${bookingTable(b)}
    <table width="100%" style="margin-top:16px;border-top:2px solid ${gold};padding-top:16px;">
      <tr><td style="font-size:14px;color:#555;">Subtotal</td><td align="right" style="font-weight:600;">${b.price} SAR</td></tr>
      ${b.discount_amount ? `<tr><td style="font-size:14px;color:green;">Discount (${b.promo_code})</td><td align="right" style="color:green;font-weight:600;">-${b.discount_amount} SAR</td></tr>` : ""}
      <tr><td style="font-size:16px;font-weight:800;color:${dark};padding-top:8px;">Total</td><td align="right" style="font-size:16px;font-weight:800;color:${gold};padding-top:8px;">${b.final_price} SAR</td></tr>
    </table>
  `, `Invoice ${b.ref} — Dammam Airport Taxi`);
}

export function receiptEmail(b: Partial<Booking>) {
  return baseLayout(`
    <h2 style="color:#2e7d32;margin:0 0 8px;">Payment Receipt — ${b.ref}</h2>
    <p style="color:#555;margin:0 0 20px;">Thank you! Your payment has been received.</p>
    ${bookingTable(b)}
    <div style="background:#f0fff0;border:1px solid #a5d6a7;border-radius:8px;padding:16px;text-align:center;margin-top:16px;">
      <p style="margin:0;font-size:18px;font-weight:800;color:#2e7d32;">PAID — ${b.final_price} SAR</p>
    </div>
    <p style="color:#555;font-size:13px;margin-top:16px;">Thank you for choosing Dammam Airport Taxi!</p>
  `, `Receipt ${b.ref} — Dammam Airport Taxi`);
}

export function quoteEmail(b: Partial<Booking>) {
  return baseLayout(`
    <h2 style="color:${dark};margin:0 0 8px;">Your Quote — ${b.ref}</h2>
    <p style="color:#555;margin:0 0 20px;">Here is the fare estimate for your requested journey.</p>
    ${bookingTable(b)}
    <div style="text-align:center;margin:24px 0;">
      <a href="https://dammamairporttaxi.com/booking/accept-quote?ref=${b.ref}" style="background:${gold};color:#000;padding:12px 28px;border-radius:6px;font-weight:700;text-decoration:none;font-size:14px;">Accept Quote & Confirm Booking</a>
    </div>
    <p style="color:#888;font-size:12px;text-align:center;">Quote valid for 24 hours. Questions? WhatsApp: +966 56 948 7569</p>
  `, `Quote ${b.ref} — Dammam Airport Taxi`);
}

export function contactFormEmail(name: string, email: string, phone: string, message: string) {
  return baseLayout(`
    <h2 style="color:${dark};margin:0 0 8px;">New Contact Form Submission</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;margin:20px 0;">
      <tr><td style="padding:8px 12px;color:#555;width:100px;">Name</td><td style="padding:8px 12px;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:8px 12px;color:#555;">Email</td><td style="padding:8px 12px;">${email}</td></tr>
      <tr><td style="padding:8px 12px;color:#555;">Phone</td><td style="padding:8px 12px;">${phone}</td></tr>
      <tr><td style="padding:8px 12px;color:#555;vertical-align:top;">Message</td><td style="padding:8px 12px;">${message}</td></tr>
    </table>
  `, "New Contact — Dammam Airport Taxi");
}
