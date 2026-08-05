"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Booking } from "@/types/database";

const statusSteps = ["pending","confirmed","driver_assigned","in_progress","completed"];
const statusLabels: Record<string, string> = {
  pending: "Pending Review",
  confirmed: "Confirmed",
  driver_assigned: "Driver Assigned",
  in_progress: "Trip in Progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

export default function TrackBookingPage() {
  const [ref, setRef] = useState("");
  const [booking, setBooking] = useState<Booking | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function search() {
    if (!ref.trim()) return;
    setLoading(true); setError(""); setBooking(null);
    const res = await fetch(`/api/track-booking?ref=${ref.trim().toUpperCase()}`);
    const data = await res.json();
    setLoading(false);
    if (data.booking) setBooking(data.booking);
    else setError(data.error ?? "Booking not found");
  }

  const gold = "#0C58D1";
  const s = {
    input: { background: "#0c0c0c", border: "1px solid #333", borderRadius: 6, padding: "0.85rem 1rem", color: "var(--text-primary)", fontSize: "1rem", flex: 1, minWidth: 0 },
    card: { background: "#141414", border: "1px solid #222", borderRadius: 12, padding: "2rem", marginTop: "1.5rem" },
    row: { display: "flex" as const, justifyContent: "space-between" as const, padding: "0.6rem 0", borderBottom: "1px solid #1a1a1a" },
  };

  const currentStep = booking ? statusSteps.indexOf(booking.status) : -1;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <section style={{ background: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.98))", padding: "4rem 0 3rem", borderBottom: "1px solid #222", textAlign: "center" }}>
        <div className="container">
          <span className="badge-gold">Track Your Booking</span>
          <h1 style={{ color: "var(--text-primary)", fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 800, margin: "0.75rem 0 1rem" }}>
            Dammam Airport Taxi — Booking Tracker
          </h1>
          <p style={{ color: "#aaa" }}>Enter your booking reference number to track your transfer status in real time.</p>
        </div>
      </section>

      <main style={{ flex: 1, padding: "3rem 0", background: "#0c0c0c" }}>
        <div className="container" style={{ maxWidth: 620 }}>
          {/* Search */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <input style={s.input} value={ref} onChange={e => setRef(e.target.value.toUpperCase())} placeholder="e.g. DAT-20260614-AB12" onKeyDown={e => e.key === "Enter" && search()} />
            <button onClick={search} disabled={loading} style={{ background: gold, color: "#ffffff", border: "none", borderRadius: 6, padding: "0.85rem 1.5rem", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              {loading ? "..." : "Track"}
            </button>
          </div>

          {error && <p style={{ color: "#e53e3e", marginTop: "1rem", textAlign: "center" }}>{error}</p>}

          {booking && (
            <>
              {/* Status progress */}
              <div style={s.card}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "1.25rem", fontSize: "1rem" }}>Booking Status</h3>
                {booking.status === "cancelled" ? (
                  <div style={{ textAlign: "center", padding: "1rem", background: "rgba(229,62,62,0.1)", borderRadius: 8 }}>
                    <span style={{ color: "#e53e3e", fontWeight: 700 }}>CANCELLED</span>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                    {statusSteps.map((st, i) => (
                      <React.Fragment key={st}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "0 0 auto" }}>
                          <div style={{
                            width: 28, height: 28, borderRadius: "50%",
                            background: i <= currentStep ? gold : "#222",
                            color: i <= currentStep ? "#000" : "#555",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontWeight: 700, fontSize: "0.75rem",
                          }}>{i < currentStep ? "✓" : i + 1}</div>
                          <span style={{ color: i <= currentStep ? gold : "#555", fontSize: "0.65rem", marginTop: 4, textAlign: "center", width: 60 }}>
                            {statusLabels[st]?.split(" ")[0]}
                          </span>
                        </div>
                        {i < statusSteps.length - 1 && (
                          <div style={{ flex: 1, height: 2, background: i < currentStep ? gold : "#333", minWidth: 20 }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
                <p style={{ color: "#0C58D1", fontWeight: 700, marginTop: "1rem", textAlign: "center" }}>
                  {statusLabels[booking.status] ?? booking.status}
                </p>
              </div>

              {/* Trip details */}
              <div style={s.card}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "1.25rem", fontSize: "1rem" }}>Trip Details</h3>
                {[
                  ["Reference", booking.ref],
                  ["Name", booking.name],
                  ["Pickup", booking.pickup_location],
                  ["Drop-off", booking.dropoff_location],
                  ["Date", booking.pickup_date],
                  ["Time", booking.pickup_time],
                  ["Vehicle", booking.vehicle_type?.toUpperCase()],
                  ["Total", `${booking.final_price} SAR`],
                ].map(([l, v]) => (
                  <div key={l} style={s.row}>
                    <span style={{ color: "#777", fontSize: "0.85rem" }}>{l}</span>
                    <span style={{ color: l === "Total" ? "#0C58D1" : "#000000", fontWeight: l === "Total" ? 700 : 500, fontSize: "0.85rem" }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Driver info (when assigned) */}
              {booking.driver_name && (
                <div style={{ ...s.card, border: "1px solid rgba(12,88,209,0.25)", background: "rgba(245,197,24,0.04)" }}>
                  <h3 style={{ color: gold, marginBottom: "1rem", fontSize: "1rem" }}>Your Driver</h3>
                  {[
                    ["Driver Name", booking.driver_name],
                    ["Driver Phone", booking.driver_phone ?? "-"],
                    ["Vehicle Plate", booking.driver_plate ?? "-"],
                  ].map(([l, v]) => (
                    <div key={l} style={s.row}>
                      <span style={{ color: "#777", fontSize: "0.85rem" }}>{l}</span>
                      <span style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.85rem" }}>{v}</span>
                    </div>
                  ))}
                  {booking.driver_phone && (
                    <a href={`https://wa.me/${booking.driver_phone.replace(/\D/g,"")}`} target="_blank" rel="noreferrer"
                      style={{ display: "block", textAlign: "center", background: "#25d366", color: "var(--text-primary)", padding: "0.75rem", borderRadius: 6, textDecoration: "none", fontWeight: 700, marginTop: "1rem", fontSize: "0.9rem" }}>
                      WhatsApp Your Driver
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
