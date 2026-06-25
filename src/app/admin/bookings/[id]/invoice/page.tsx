"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function InvoicePage() {
  const { id } = useParams<{ id: string }>();
  const [b, setB] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/admin/bookings/${id}`).then(r => r.json()).then(d => setB(d.booking));
  }, [id]);

  if (!b) return <p style={{ color:"#64748B", padding: "2rem" }}>Loading...</p>;

  const gold = "#0C58D1";
  const rows = [
    ["Booking Reference", b.ref],
    ["Passenger Name", b.name],
    ["Contact Phone", b.phone],
    ["Contact Email", b.email],
    ["Service Type", b.service_type?.toUpperCase()],
    ["Vehicle Class", b.vehicle_type?.toUpperCase()],
    ["Pickup Location", b.pickup_location],
    ["Drop-off Location", b.dropoff_location],
    ["Travel Date", b.pickup_date],
    ["Pickup Time", b.pickup_time],
    ...(b.flight_number ? [["Flight Number", b.flight_number]] : []),
    ["Number of Passengers", String(b.passengers)],
  ];

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <button onClick={() => window.print()} style={{ background:"#0C58D1", color: "#000", border: "none", borderRadius: 6, padding: "0.65rem 1.25rem", fontWeight: 700, cursor: "pointer", fontSize: "0.85rem" }}>
          Print / Save PDF
        </button>
        <button onClick={() => fetch("/api/send-invoice-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ booking_id: id }) }).then(() => alert("Invoice emailed!"))}
          style={{ background:"#f8f9fa", color:"#64748B", border:"1px solid #e5e7eb", borderRadius: 6, padding: "0.65rem 1.25rem", cursor: "pointer", fontSize: "0.85rem" }}>
          Email Invoice
        </button>
      </div>

      <div id="invoice" style={{ background: "#fff", color: "#111", padding: "2.5rem", borderRadius: 10, fontFamily: "Arial, sans-serif" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem", borderBottom: "2px solid #f5c518", paddingBottom: "1.5rem" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 800, color: "#111" }}>INVOICE</h1>
            <p style={{ margin: "4px 0 0", color:"#64748B", fontSize: "0.85rem" }}>Dammam Airport Taxi</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.75rem", color:"#64748B" }}>Invoice #</div>
            <div style={{ fontWeight: 700, fontFamily: "monospace" }}>{b.ref}</div>
            <div style={{ fontSize: "0.75rem", color:"#64748B", marginTop: 8 }}>Date</div>
            <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>{new Date(b.created_at).toLocaleDateString()}</div>
          </div>
        </div>

        {/* Details table */}
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem", fontSize: "0.88rem" }}>
          <tbody>
            {rows.map(([l, v]) => (
              <tr key={l} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "0.5rem 0", color:"#64748B", width: "40%" }}>{l}</td>
                <td style={{ padding: "0.5rem 0", fontWeight: 500 }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pricing */}
        <div style={{ background: "#f9f9f9", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color:"#64748B" }}>Base Fare</span><span>{b.price} SAR</span>
          </div>
          {b.discount_amount > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, color: "green" }}>
              <span>Discount ({b.promo_code})</span><span>-{b.discount_amount} SAR</span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", borderTop: "2px solid #eee", paddingTop: 8, fontWeight: 800, fontSize: "1.1rem" }}>
            <span>Total Due</span><span style={{ color:"#0C58D1" }}>{b.final_price} SAR</span>
          </div>
        </div>

        <div style={{ textAlign: "center", color:"#64748B", fontSize: "0.78rem" }}>
          <p>Payment on completion · WhatsApp: +966 56 948 7569 · haramtaxiservice@gmail.com</p>
          <p>Dammam Airport Taxi — King Fahd International Airport, Eastern Province, Saudi Arabia</p>
        </div>
      </div>
    </div>
  );
}
