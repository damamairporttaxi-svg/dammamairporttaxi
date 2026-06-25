"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ReceiptPage() {
  const { id } = useParams<{ id: string }>();
  const [b, setB] = useState<any>(null);
  useEffect(() => { fetch(`/api/admin/bookings/${id}`).then(r => r.json()).then(d => setB(d.booking)); }, [id]);
  if (!b) return <p style={{ color:"#64748B", padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <button onClick={() => window.print()} style={{ background: "#f5c518", color: "#000", border: "none", borderRadius: 6, padding: "0.65rem 1.25rem", fontWeight: 700, cursor: "pointer", fontSize: "0.85rem" }}>Print Receipt</button>
        <button onClick={() => fetch("/api/send-receipt-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ booking_id: id }) }).then(() => alert("Receipt emailed!"))}
          style={{ background:"#f8f9fa", color:"#000000", border:"1px solid #e5e7eb", borderRadius: 6, padding: "0.65rem 1.25rem", cursor: "pointer", fontSize: "0.85rem" }}>Email Receipt</button>
      </div>
      <div style={{ background: "#fff", color: "#111", padding: "2rem", borderRadius: 10, textAlign: "center", fontFamily:"inherit" }}>
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✓</div>
        <h2 style={{ color: "#2e7d32", margin: "0 0 0.25rem" }}>PAYMENT RECEIPT</h2>
        <p style={{ color:"#64748B", fontSize: "0.82rem", margin: "0 0 1.5rem" }}>Dammam Airport Taxi</p>
        <div style={{ fontSize: "2rem", fontWeight: 800, color:"#0C58D1", marginBottom: "1.5rem" }}>
          {b.final_price} SAR
        </div>
        <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
          {[["Ref",b.ref],["Name",b.name],["Route",`${b.pickup_location} → ${b.dropoff_location}`],["Date",b.pickup_date],["Vehicle",b.vehicle_type?.toUpperCase()]].map(([l,v]) => (
            <div key={String(l)} style={{ display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid #f0f0f0", fontSize: "0.85rem" }}>
              <span style={{ color:"#64748B" }}>{l}</span><span style={{ fontWeight: 600 }}>{String(v)}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#f0fff0", border: "1px solid #a5d6a7", borderRadius: 8, padding: "0.75rem", color: "#2e7d32", fontWeight: 700, fontSize: "0.9rem" }}>
          PAID — Thank you!
        </div>
        <p style={{ color:"#64748B", fontSize: "0.72rem", marginTop: "1.5rem" }}>+966 56 948 7569 · haramtaxiservice@gmail.com</p>
      </div>
    </div>
  );
}
