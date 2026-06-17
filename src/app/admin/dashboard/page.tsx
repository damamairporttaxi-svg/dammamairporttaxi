"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  total: number; pending: number; confirmed: number;
  completed: number; today: number; revenue: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recent, setRecent] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/stats").then(r => r.json()).then(d => {
      setStats(d.stats);
      setRecent(d.recent ?? []);
    }).catch(() => null);
  }, []);

  const gold = "#f5c518";
  const cards = stats ? [
    { label: "Total Bookings", val: stats.total, color: gold },
    { label: "Pending", val: stats.pending, color: "#e65100" },
    { label: "Confirmed", val: stats.confirmed, color: "#1565c0" },
    { label: "Today's Bookings", val: stats.today, color: "#2e7d32" },
    { label: "Completed", val: stats.completed, color: "#6a1b9a" },
    { label: "Total Revenue", val: `${stats.revenue} SAR`, color: gold },
  ] : [];

  const statusColor: Record<string, string> = {
    pending: "#e65100", confirmed: "#1565c0", driver_assigned: "#7b1fa2",
    in_progress: "#00695c", completed: "#2e7d32", cancelled: "#c62828",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 800, margin: 0 }}>Dashboard</h1>
        <Link href="/admin/bookings" style={{ background: gold, color: "#000", padding: "0.6rem 1.2rem", borderRadius: 6, textDecoration: "none", fontWeight: 700, fontSize: "0.85rem" }}>
          + New Booking
        </Link>
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {cards.map(c => (
          <div key={c.label} style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: "1.25rem" }}>
            <div style={{ color: "#888", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>{c.label}</div>
            <div style={{ color: c.color, fontSize: "1.6rem", fontWeight: 800 }}>{c.val}</div>
          </div>
        ))}
        {!stats && <p style={{ color: "#555", gridColumn: "1/-1" }}>Loading stats...</p>}
      </div>

      {/* Recent bookings */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #1e1e1e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>Recent Bookings</span>
          <Link href="/admin/bookings" style={{ color: gold, fontSize: "0.8rem", textDecoration: "none" }}>View all →</Link>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e1e1e" }}>
                {["Ref","Name","Pickup","Date","Vehicle","Total","Status",""].map(h => (
                  <th key={h} style={{ padding: "0.6rem 1rem", color: "#555", textAlign: "left", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recent.map((b: any) => (
                <tr key={b.id} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "0.6rem 1rem", color: gold, fontFamily: "monospace" }}>{b.ref}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#fff" }}>{b.name}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa", maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.pickup_location}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa" }}>{b.pickup_date}</td>
                  <td style={{ padding: "0.6rem 1rem", color: "#aaa", textTransform: "uppercase" }}>{b.vehicle_type}</td>
                  <td style={{ padding: "0.6rem 1rem", color: gold, fontWeight: 700 }}>{b.final_price} SAR</td>
                  <td style={{ padding: "0.6rem 1rem" }}>
                    <span style={{ background: statusColor[b.status] ?? "#333", color: "#fff", padding: "2px 8px", borderRadius: 4, fontSize: "0.72rem", fontWeight: 700 }}>
                      {b.status?.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: "0.6rem 1rem" }}>
                    <Link href={`/admin/bookings/${b.id}`} style={{ color: gold, textDecoration: "none", fontSize: "0.8rem" }}>Edit →</Link>
                  </td>
                </tr>
              ))}
              {recent.length === 0 && (
                <tr><td colSpan={8} style={{ padding: "1.5rem", textAlign: "center", color: "#555" }}>No bookings yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
