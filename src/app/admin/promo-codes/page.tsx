"use client";
import React, { useEffect, useState } from "react";

export default function AdminPromoCodes() {
  const [codes, setCodes] = useState<any[]>([]);
  const [form, setForm] = useState({ code: "", discount_type: "percentage", discount_value: "", min_order: "", max_uses: "", expires_at: "" });
  const [msg, setMsg] = useState("");

  const load = () => fetch("/api/admin/promo-codes").then(r => r.json()).then(d => setCodes(d.promo_codes ?? []));
  useEffect(() => { load(); }, []);

  async function create() {
    if (!form.code || !form.discount_value) return;
    await fetch("/api/admin/promo-codes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setForm({ code: "", discount_type: "percentage", discount_value: "", min_order: "", max_uses: "", expires_at: "" });
    load(); setMsg("Created!"); setTimeout(() => setMsg(""), 2000);
  }

  async function toggle(id: string, active: boolean) {
    await fetch("/api/admin/promo-codes", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, active: !active }) });
    load();
  }

  async function del(id: string) {
    if (!confirm("Delete this promo code?")) return;
    await fetch(`/api/admin/promo-codes?id=${id}`, { method: "DELETE" });
    load();
  }

  const gold = "#f5c518";
  const inp = { background: "#0c0c0c", border: "1px solid #333", borderRadius: 6, padding: "0.65rem 0.85rem", color: "var(--text-primary)", fontSize: "0.85rem" };

  return (
    <div>
      <h1 style={{ color: "var(--text-primary)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Promo Codes {msg && <span style={{ color: gold, fontSize: "0.85rem", marginLeft: 10 }}>{msg}</span>}</h1>

      {/* Create form */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: gold, fontSize: "0.9rem", marginBottom: "1rem" }}>Create New Code</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
          <input {...{style: inp, value: form.code, onChange: e => setForm(p => ({...p, code: e.target.value.toUpperCase()})), placeholder: "CODE"}} />
          <select {...{style: inp, value: form.discount_type, onChange: e => setForm(p => ({...p, discount_type: e.target.value}))}}>
            <option value="percentage">Percentage %</option>
            <option value="fixed">Fixed SAR</option>
          </select>
          <input {...{style: inp, type: "number", value: form.discount_value, onChange: e => setForm(p => ({...p, discount_value: e.target.value})), placeholder: "Value"}} />
          <input {...{style: inp, type: "number", value: form.min_order, onChange: e => setForm(p => ({...p, min_order: e.target.value})), placeholder: "Min Order SAR"}} />
          <input {...{style: inp, type: "number", value: form.max_uses, onChange: e => setForm(p => ({...p, max_uses: e.target.value})), placeholder: "Max Uses"}} />
          <input {...{style: inp, type: "date", value: form.expires_at, onChange: e => setForm(p => ({...p, expires_at: e.target.value}))}} />
        </div>
        <button onClick={create} style={{ background: gold, color: "#000", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Create Code</button>
      </div>

      {/* Table */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.83rem" }}>
            <thead><tr style={{ borderBottom: "1px solid #1e1e1e" }}>
              {["Code","Type","Value","Min Order","Used/Max","Expires","Status",""].map(h => <th key={h} style={{ padding: "0.65rem 1rem", color: "#555", textAlign: "left", fontWeight: 600 }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {codes.map(c => (
                <tr key={c.id} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "0.6rem 1rem", color: gold, fontFamily: "monospace", fontWeight: 700 }}>{c.code}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa" }}>{c.discount_type}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "var(--text-primary)", fontWeight: 600 }}>{c.discount_value}{c.discount_type === "percentage" ? "%" : " SAR"}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa" }}>{c.min_order ?? "-"}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa" }}>{c.used_count}/{c.max_uses ?? "∞"}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa" }}>{c.expires_at?.split("T")[0] ?? "Never"}</td>
                  <td style={{ padding: "0.6rem 1rem" }}>
                    <span style={{ background: c.active ? "#2e7d32" : "#555", color: "var(--text-primary)", padding: "2px 8px", borderRadius: 4, fontSize: "0.72rem", fontWeight: 700 }}>
                      {c.active ? "ACTIVE" : "OFF"}
                    </span>
                  </td>
                  <td style={{ padding: "0.6rem 1rem" }}>
                    <button onClick={() => toggle(c.id, c.active)} style={{ background: "#222", color: "#aaa", border: "none", borderRadius: 4, padding: "3px 8px", cursor: "pointer", fontSize: "0.75rem", marginRight: 6 }}>
                      {c.active ? "Disable" : "Enable"}
                    </button>
                    <button onClick={() => del(c.id)} style={{ background: "#3d0000", color: "#e53e3e", border: "none", borderRadius: 4, padding: "3px 8px", cursor: "pointer", fontSize: "0.75rem" }}>Del</button>
                  </td>
                </tr>
              ))}
              {codes.length === 0 && <tr><td colSpan={8} style={{ padding: "2rem", textAlign: "center", color: "#555" }}>No promo codes yet</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
