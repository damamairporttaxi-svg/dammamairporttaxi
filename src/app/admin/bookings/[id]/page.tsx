"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const STATUSES = ["pending","confirmed","driver_assigned","in_progress","completed","cancelled"];
const statusColor: Record<string,string> = {
  pending:"#e65100",confirmed:"#1565c0",driver_assigned:"#7b1fa2",
  in_progress:"#00695c",completed:"#2e7d32",cancelled:"#c62828"
};

export default function AdminBookingDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [b, setB] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    status: "", driver_name: "", driver_phone: "", driver_plate: "", admin_notes: ""
  });

  useEffect(() => {
    fetch(`/api/admin/bookings/${id}`)
      .then(r => r.json())
      .then(d => {
        setB(d.booking);
        setForm({
          status: d.booking?.status ?? "",
          driver_name: d.booking?.driver_name ?? "",
          driver_phone: d.booking?.driver_phone ?? "",
          driver_plate: d.booking?.driver_plate ?? "",
          admin_notes: d.booking?.admin_notes ?? "",
        });
      });
  }, [id]);

  async function save() {
    setSaving(true);
    const res = await fetch(`/api/admin/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, admin_email: "admin" }),
    });
    const d = await res.json();
    setSaving(false);
    if (d.booking) { setB(d.booking); setMsg("Saved!"); setTimeout(() => setMsg(""), 3000); }
  }

  async function sendEmail(type: string) {
    await fetch(`/api/${type}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ booking_id: id, status: form.status }) });
    setMsg(`${type} sent!`); setTimeout(() => setMsg(""), 3000);
  }

  async function sendDriverAssignment() {
    const res = await fetch("/api/send-driver-assignment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ booking_id: id }) });
    const d = await res.json();
    setMsg("Driver notified! WhatsApp link copied.");
    if (d.whatsapp_link) window.open(d.whatsapp_link, "_blank");
    setTimeout(() => setMsg(""), 4000);
  }

  const gold = "#f5c518";
  const input = { width: "100%", background: "#0c0c0c", border: "1px solid #333", borderRadius: 6, padding: "0.7rem 0.9rem", color: "#fff", fontSize: "0.88rem", boxSizing: "border-box" as const };
  const label = { display: "block" as const, color: "#888", fontSize: "0.75rem", fontWeight: 600, marginBottom: 4, textTransform: "uppercase" as const };
  const card = { background: "#141414", border: "1px solid #222", borderRadius: 10, padding: "1.5rem", marginBottom: "1.25rem" };

  if (!b) return <p style={{ color: "#555", padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <button onClick={() => router.back()} style={{ background: "#222", color: "#888", border: "1px solid #333", borderRadius: 6, padding: "0.5rem 0.9rem", cursor: "pointer", fontSize: "0.82rem" }}>← Back</button>
        <h1 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>{b.ref}</h1>
        <span style={{ background: statusColor[b.status] ?? "#333", color: "#fff", padding: "3px 10px", borderRadius: 4, fontSize: "0.78rem", fontWeight: 700 }}>
          {b.status?.replace("_"," ").toUpperCase()}
        </span>
        {msg && <span style={{ color: gold, fontWeight: 600, fontSize: "0.85rem" }}>{msg}</span>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "1.25rem" }}>
        {/* Left */}
        <div>
          {/* Booking info */}
          <div style={card}>
            <h3 style={{ color: gold, fontSize: "0.9rem", marginBottom: "1rem" }}>Trip Details</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", fontSize: "0.82rem" }}>
              {[["Name",b.name],["Phone",b.phone],["Email",b.email],["Pickup",b.pickup_location],
                ["Dropoff",b.dropoff_location],["Date",b.pickup_date],["Time",b.pickup_time],
                ["Vehicle",b.vehicle_type],["Passengers",b.passengers],["Luggage",b.luggage],
                ...(b.flight_number?[["Flight",b.flight_number]]:[]),
                ...(b.promo_code?[["Promo",b.promo_code]]:[]),
              ].map(([l,v]) => (
                <div key={String(l)}>
                  <div style={{ color: "#555", fontSize: "0.7rem", textTransform: "uppercase", marginBottom: 2 }}>{l}</div>
                  <div style={{ color: "#fff", fontWeight: 500 }}>{String(v ?? "-")}</div>
                </div>
              ))}
            </div>
            {b.special_notes && (
              <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#0c0c0c", borderRadius: 6, color: "#aaa", fontSize: "0.82rem" }}>
                <span style={{ color: "#555", display: "block", marginBottom: 4, fontSize: "0.72rem", textTransform: "uppercase" }}>Notes</span>
                {b.special_notes}
              </div>
            )}
          </div>

          {/* Admin controls */}
          <div style={card}>
            <h3 style={{ color: gold, fontSize: "0.9rem", marginBottom: "1rem" }}>Update Booking</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div>
                <label style={label}>Status</label>
                <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))} style={input}>
                  {STATUSES.map(s => <option key={s} value={s}>{s.replace("_"," ").toUpperCase()}</option>)}
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <label style={label}>Driver Name</label>
                  <input value={form.driver_name} onChange={e => setForm(p => ({ ...p, driver_name: e.target.value }))} style={input} placeholder="Driver name" />
                </div>
                <div>
                  <label style={label}>Driver Phone</label>
                  <input value={form.driver_phone} onChange={e => setForm(p => ({ ...p, driver_phone: e.target.value }))} style={input} placeholder="+966..." />
                </div>
                <div>
                  <label style={label}>Plate Number</label>
                  <input value={form.driver_plate} onChange={e => setForm(p => ({ ...p, driver_plate: e.target.value }))} style={input} placeholder="ABC 1234" />
                </div>
              </div>
              <div>
                <label style={label}>Admin Notes</label>
                <textarea value={form.admin_notes} onChange={e => setForm(p => ({ ...p, admin_notes: e.target.value }))} style={{ ...input, minHeight: 80, resize: "vertical" }} placeholder="Internal notes..." />
              </div>
              <button onClick={save} disabled={saving} style={{ background: gold, color: "#000", border: "none", borderRadius: 6, padding: "0.75rem", fontWeight: 700, cursor: "pointer" }}>
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          {/* Pricing */}
          <div style={card}>
            <h3 style={{ color: gold, fontSize: "0.9rem", marginBottom: "1rem" }}>Pricing</h3>
            {[["Base Price",`${b.price} SAR`],["Discount",`-${b.discount_amount ?? 0} SAR`],["Final",`${b.final_price} SAR`]].map(([l,v]) => (
              <div key={String(l)} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #1a1a1a", fontSize: "0.85rem" }}>
                <span style={{ color: "#888" }}>{l}</span>
                <span style={{ color: l === "Final" ? gold : "#fff", fontWeight: l === "Final" ? 700 : 500 }}>{String(v)}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={card}>
            <h3 style={{ color: gold, fontSize: "0.9rem", marginBottom: "1rem" }}>Quick Actions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <button onClick={() => sendEmail("send-status-email")} style={{ background: "#1565c0", color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem", cursor: "pointer", fontSize: "0.82rem", fontWeight: 600 }}>
                Send Status Email
              </button>
              <button onClick={sendDriverAssignment} style={{ background: "#25d366", color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem", cursor: "pointer", fontSize: "0.82rem", fontWeight: 600 }}>
                Notify Driver (WA + Email)
              </button>
              <button onClick={() => sendEmail("send-invoice-email")} style={{ background: "#7b1fa2", color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem", cursor: "pointer", fontSize: "0.82rem", fontWeight: 600 }}>
                Send Invoice Email
              </button>
              <button onClick={() => sendEmail("send-receipt-email")} style={{ background: "#2e7d32", color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem", cursor: "pointer", fontSize: "0.82rem", fontWeight: 600 }}>
                Send Receipt Email
              </button>
              <Link href={`/admin/bookings/${id}/invoice`} style={{ display: "block", textAlign: "center", background: "#222", color: gold, border: "1px solid #333", borderRadius: 6, padding: "0.65rem", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600 }}>
                View Invoice
              </Link>
              <a href={`https://wa.me/${b.phone?.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center", background: "#222", color: "#25d366", border: "1px solid #333", borderRadius: 6, padding: "0.65rem", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600 }}>
                WhatsApp Customer
              </a>
            </div>
          </div>

          {/* Meta */}
          <div style={{ ...card, fontSize: "0.78rem" }}>
            <div style={{ color: "#555", marginBottom: 4 }}>Booking ID</div>
            <div style={{ color: "#444", fontFamily: "monospace", wordBreak: "break-all", marginBottom: "0.75rem" }}>{b.id}</div>
            <div style={{ color: "#555", marginBottom: 4 }}>Created</div>
            <div style={{ color: "#666" }}>{new Date(b.created_at).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
