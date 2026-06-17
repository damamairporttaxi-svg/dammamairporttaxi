"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const statusColor: Record<string,string> = {
  pending:"#e65100",confirmed:"#1565c0",driver_assigned:"#7b1fa2",
  in_progress:"#00695c",completed:"#2e7d32",cancelled:"#c62828"
};

export default function AdminCalendar() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [month, setMonth] = useState(new Date());

  useEffect(() => {
    fetch("/api/admin/bookings-list?limit=500").then(r => r.json()).then(d => setBookings(d.bookings ?? []));
  }, []);

  const year = month.getFullYear();
  const mon = month.getMonth();
  const firstDay = new Date(year, mon, 1).getDay();
  const daysInMonth = new Date(year, mon + 1, 0).getDate();

  const bookingsByDate: Record<string, any[]> = {};
  bookings.forEach(b => {
    const d = b.pickup_date;
    if (!bookingsByDate[d]) bookingsByDate[d] = [];
    bookingsByDate[d].push(b);
  });

  const pad = (n: number) => String(n).padStart(2, "0");
  const gold = "#f5c518";

  const selectedBookings = selected ? (bookingsByDate[selected] ?? []) : [];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
        <h1 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>Booking Calendar</h1>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <button onClick={() => setMonth(new Date(year, mon - 1, 1))} style={{ background: "#222", color: "#aaa", border: "1px solid #333", borderRadius: 6, padding: "0.45rem 0.85rem", cursor: "pointer" }}>‹</button>
          <span style={{ color: "#fff", fontWeight: 700, minWidth: 130, textAlign: "center" }}>
            {month.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>
          <button onClick={() => setMonth(new Date(year, mon + 1, 1))} style={{ background: "#222", color: "#aaa", border: "1px solid #333", borderRadius: 6, padding: "0.45rem 0.85rem", cursor: "pointer" }}>›</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 320px" : "1fr", gap: "1.25rem", alignItems: "start" }}>
        {/* Calendar grid */}
        <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", background: "#1a1a1a" }}>
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
              <div key={d} style={{ padding: "0.6rem", textAlign: "center", color: "#555", fontSize: "0.75rem", fontWeight: 700 }}>{d}</div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} style={{ minHeight: 80, borderBottom: "1px solid #1a1a1a", borderRight: "1px solid #1a1a1a" }} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateStr = `${year}-${pad(mon + 1)}-${pad(day)}`;
              const dayBookings = bookingsByDate[dateStr] ?? [];
              const isToday = dateStr === new Date().toISOString().split("T")[0];
              const isSelected = selected === dateStr;
              return (
                <div key={day} onClick={() => setSelected(isSelected ? null : dateStr)}
                  style={{ minHeight: 80, padding: "0.4rem", borderBottom: "1px solid #1a1a1a", borderRight: "1px solid #1a1a1a", cursor: "pointer",
                    background: isSelected ? "rgba(245,197,24,0.08)" : "transparent" }}>
                  <div style={{ color: isToday ? gold : "#fff", fontWeight: isToday ? 800 : 500, fontSize: "0.82rem", marginBottom: 4 }}>{day}</div>
                  {dayBookings.slice(0, 3).map((b: any) => (
                    <div key={b.id} style={{ background: statusColor[b.status] ?? "#333", color: "#fff", fontSize: "0.65rem", padding: "1px 5px", borderRadius: 3, marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {b.name?.split(" ")[0]} — {b.vehicle_type}
                    </div>
                  ))}
                  {dayBookings.length > 3 && <div style={{ color: "#555", fontSize: "0.65rem" }}>+{dayBookings.length - 3} more</div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Day detail */}
        {selected && (
          <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{selected}</span>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: "1.1rem" }}>×</button>
            </div>
            {selectedBookings.length === 0 && <p style={{ color: "#555", fontSize: "0.85rem" }}>No bookings on this day</p>}
            {selectedBookings.map((b: any) => (
              <Link key={b.id} href={`/admin/bookings/${b.id}`}
                style={{ display: "block", background: "#0c0c0c", border: "1px solid #222", borderRadius: 8, padding: "0.85rem", marginBottom: "0.65rem", textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ color: gold, fontFamily: "monospace", fontSize: "0.78rem" }}>{b.ref}</span>
                  <span style={{ background: statusColor[b.status] ?? "#333", color: "#fff", padding: "1px 6px", borderRadius: 3, fontSize: "0.68rem", fontWeight: 700 }}>
                    {b.status?.replace("_"," ").toUpperCase()}
                  </span>
                </div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.85rem" }}>{b.name}</div>
                <div style={{ color: "#888", fontSize: "0.78rem", marginTop: 2 }}>{b.pickup_time} · {b.vehicle_type} · {b.final_price} SAR</div>
                <div style={{ color: "#666", fontSize: "0.75rem", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.pickup_location} → {b.dropoff_location}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
