"use client";
import { adminFetch } from "@/lib/admin-fetch";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { buildInvoicePlan, type InvoiceScope } from "@/lib/invoice-plan";

export default function InvoicePage() {
  const { id } = useParams<{ id: string }>();
  const [b, setB] = useState<any>(null);
  const [roundTrip, setRoundTrip] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [scope, setScope] = useState<InvoiceScope>("full");
  const [paid, setPaid] = useState("0");

  useEffect(() => {
    adminFetch(`/api/admin/bookings/${id}`).then(r => r.json()).then(d => setB(d.booking));
  }, [id]);

  if (!b) return <p style={{ color:"#64748B", padding: "2rem" }}>Loading...</p>;

  const gold = "#0C58D1";
  const options = { roundTrip, returnDate, scope, paid: parseFloat(paid || "0") };
  const plan = buildInvoicePlan(Number(b.final_price), b.pickup_date ?? "", options);
  const showPlan = roundTrip || plan.paid > 0;
  const inp = { background:"#fff", border:"1px solid #e5e7eb", borderRadius:6, padding:"0.5rem 0.7rem", fontSize:"0.85rem" };
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
        <button onClick={() => adminFetch("/api/send-invoice-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ booking_id: id, options }) }).then(r => r.ok ? alert("Invoice emailed!") : alert("Failed to send invoice"))}
          style={{ background:"#f8f9fa", color:"#000000", border:"1px solid #e5e7eb", borderRadius: 6, padding: "0.65rem 1.25rem", cursor: "pointer", fontSize: "0.85rem" }}>
          Email Invoice
        </button>
      </div>

      {/* Payment options (admin only, not part of the invoice) */}
      <div style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius: 10, padding: "1rem", marginBottom: "1.5rem", display:"flex", gap:"1rem", flexWrap:"wrap", alignItems:"end" }}>
        <label style={{ fontSize:"0.8rem", display:"flex", gap:6, alignItems:"center" }}>
          <input type="checkbox" checked={roundTrip} onChange={e => setRoundTrip(e.target.checked)} /> Round trip (fare split 50/50)
        </label>
        {roundTrip && (
          <>
            <div><div style={{ fontSize:"0.72rem", color:"#64748B" }}>Return date</div>
              <input type="date" style={inp} value={returnDate} onChange={e => setReturnDate(e.target.value)} /></div>
            <div><div style={{ fontSize:"0.72rem", color:"#64748B" }}>Invoice for</div>
              <select style={inp} value={scope} onChange={e => setScope(e.target.value as InvoiceScope)}>
                <option value="full">Full round trip</option>
                <option value="outbound">Outbound trip only</option>
                <option value="return">Return trip only</option>
              </select></div>
          </>
        )}
        <div><div style={{ fontSize:"0.72rem", color:"#64748B" }}>Amount paid (SAR)</div>
          <input type="number" style={{ ...inp, width: 120 }} value={paid} onChange={e => setPaid(e.target.value)} /></div>
        <button type="button" onClick={() => setPaid(String(Number(b.final_price) / 2))} style={{ ...inp, cursor:"pointer" }}>50%</button>
      </div>

      <div id="invoice" style={{ background: "#fff", color: "#111", padding: "2.5rem", borderRadius: 10, fontFamily:"inherit" }}>
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
            <span>{showPlan ? "Total Trip Fare" : "Total Due"}</span><span style={{ color:"#0C58D1" }}>{b.final_price} SAR</span>
          </div>
          {showPlan && (
            <div style={{ marginTop: 12, fontSize: "0.88rem" }}>
              {roundTrip && <div style={{ fontWeight: 700, marginBottom: 6 }}>{plan.invoiceLabel}</div>}
              {plan.legs.map(l => (
                <div key={l.label} style={{ display:"flex", justifyContent:"space-between", marginBottom: 4 }}>
                  <span style={{ color:"#64748B" }}>{l.label}{l.date ? ` (${l.date})` : ""}</span>
                  <span>{l.amount} SAR · <b style={{ color: l.status === "Paid" ? "#16a34a" : l.status === "Partly paid" ? "#d97706" : "#dc2626" }}>{l.status}</b></span>
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"space-between", marginTop: 8, color:"#16a34a" }}><span>Paid</span><span>-{plan.paid} SAR</span></div>
              <div style={{ display:"flex", justifyContent:"space-between", marginTop: 4, fontWeight: 800, fontSize:"1.05rem" }}>
                <span>Balance Due{plan.balance > 0 && returnDate ? ` (on ${returnDate})` : ""}</span>
                <span style={{ color: plan.balance > 0 ? "#dc2626" : "#16a34a" }}>{plan.balance} SAR</span>
              </div>
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", color:"#64748B", fontSize: "0.78rem" }}>
          <p>Payment on completion · WhatsApp: +966 59 141 9157 · haramtaxiservice@gmail.com</p>
          <p>Dammam Airport Taxi — King Fahd International Airport, Eastern Province, Saudi Arabia</p>
        </div>
      </div>
    </div>
  );
}
