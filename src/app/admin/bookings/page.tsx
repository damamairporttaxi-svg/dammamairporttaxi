"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const STATUS_OPTIONS = ["all","pending","confirmed","driver_assigned","in_progress","completed","cancelled"];
const statusColor: Record<string,string> = {
  pending:"#e65100",confirmed:"#1565c0",driver_assigned:"#7b1fa2",
  in_progress:"#00695c",completed:"#2e7d32",cancelled:"#c62828"
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/bookings-list");
    const d = await res.json();
    setBookings(d.bookings ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = bookings
    .filter(b => filter === "all" || b.status === filter)
    .filter(b => !search || b.name?.toLowerCase().includes(search.toLowerCase()) || b.ref?.includes(search.toUpperCase()) || b.phone?.includes(search));

  const gold = "#f5c518";
  const input = { background: "#0c0c0c", border: "1px solid #333", borderRadius: 6, padding: "0.6rem 0.9rem", color: "#fff", fontSize: "0.85rem" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", gap: "1rem", flexWrap: "wrap" }}>
        <h1 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>All Bookings</h1>
        <Link href="/booking" target="_blank" style={{ background: gold, color: "#000", padding: "0.6rem 1.2rem", borderRadius: 6, textDecoration: "none", fontWeight: 700, fontSize: "0.85rem" }}>
          + New Booking
        </Link>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, ref, phone..." style={{ ...input, flex: 1, minWidth: 200 }} />
        <select value={filter} onChange={e => setFilter(e.target.value)} style={input}>
          {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s === "all" ? "All Statuses" : s.replace("_"," ").toUpperCase()}</option>)}
        </select>
        <button onClick={load} style={{ background: "#222", color: "#888", border: "1px solid #333", borderRadius: 6, padding: "0.6rem 0.9rem", cursor: "pointer", fontSize: "0.85rem" }}>Refresh</button>
      </div>

      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e1e1e" }}>
                {["Ref","Name","Phone","Pickup","Dropoff","Date","Time","Vehicle","Total","Status",""].map(h => (
                  <th key={h} style={{ padding: "0.65rem 0.9rem", color: "#555", textAlign: "left", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={11} style={{ padding: "2rem", textAlign: "center", color: "#555" }}>Loading...</td></tr>}
              {!loading && filtered.length === 0 && <tr><td colSpan={11} style={{ padding: "2rem", textAlign: "center", color: "#555" }}>No bookings found</td></tr>}
              {filtered.map(b => (
                <tr key={b.id} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "0.6rem 0.9rem", color: gold, fontFamily: "monospace", whiteSpace: "nowrap" }}>{b.ref}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: "#fff", whiteSpace: "nowrap" }}>{b.name}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: "#aaa" }}>{b.phone}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: "#aaa", maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.pickup_location}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: "#aaa", maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.dropoff_location}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: "#aaa", whiteSpace: "nowrap" }}>{b.pickup_date}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: "#aaa" }}>{b.pickup_time}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: "#aaa", textTransform: "uppercase" }}>{b.vehicle_type}</td>
                  <td style={{ padding: "0.6rem 0.9rem", color: gold, fontWeight: 700, whiteSpace: "nowrap" }}>{b.final_price} SAR</td>
                  <td style={{ padding: "0.6rem 0.9rem" }}>
                    <span style={{ background: statusColor[b.status] ?? "#333", color: "#fff", padding: "2px 7px", borderRadius: 4, fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap" }}>
                      {b.status?.replace("_"," ").toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: "0.6rem 0.9rem", whiteSpace: "nowrap" }}>
                    <Link href={`/admin/bookings/${b.id}`} style={{ color: gold, textDecoration: "none", fontSize: "0.8rem", marginRight: 8 }}>Edit</Link>
                    <a href={`https://wa.me/${b.phone?.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" style={{ color: "#25d366", textDecoration: "none", fontSize: "0.8rem" }}>WA</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "0.78rem", marginTop: "0.75rem" }}>{filtered.length} booking(s) shown</p>
    </div>
  );
}
