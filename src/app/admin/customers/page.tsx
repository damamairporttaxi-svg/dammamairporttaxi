"use client";
import React, { useEffect, useState } from "react";

export default function AdminCustomers() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/customers-list").then(r => r.json()).then(d => setCustomers(d.customers ?? []));
  }, []);

  const filtered = customers.filter(c =>
    !search || c.name?.toLowerCase().includes(search.toLowerCase()) || c.email?.includes(search) || c.phone?.includes(search)
  );

  const gold = "#f5c518";
  return (
    <div>
      <h1 style={{ color: "var(--text-primary)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.25rem" }}>Customers ({customers.length})</h1>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, phone..."
        style={{ background: "#0c0c0c", border: "1px solid #333", borderRadius: 6, padding: "0.65rem 0.9rem", color: "var(--text-primary)", fontSize: "0.85rem", width: "100%", boxSizing: "border-box", marginBottom: "1rem" }} />
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.83rem" }}>
            <thead><tr style={{ borderBottom: "1px solid #1e1e1e" }}>
              {["Name","Email","Phone","Total Bookings","Total Spent","Since"].map(h => <th key={h} style={{ padding: "0.65rem 1rem", color: "#555", textAlign: "left", fontWeight: 600 }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "0.6rem 1rem", color: "var(--text-primary)", fontWeight: 600 }}>{c.name}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa" }}>{c.email}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa" }}>{c.phone ?? "-"}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "var(--text-primary)", textAlign: "center" }}>{c.total_bookings}</td>
                  <td style={{ padding: "0.6rem 1rem", color: gold, fontWeight: 700 }}>{c.total_spent} SAR</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#555" }}>{c.created_at?.split("T")[0]}</td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan={6} style={{ padding: "2rem", textAlign: "center", color: "#555" }}>No customers found</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
