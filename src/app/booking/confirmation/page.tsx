"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Booking } from "@/types/database";

function ConfirmationContent() {
  const params = useSearchParams();
  const ref = params.get("ref");
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ref) return;
    fetch(`/api/track-booking?ref=${ref}`)
      .then(r => r.json())
      .then(d => { setBooking(d.booking); setLoading(false); })
      .catch(() => setLoading(false));
  }, [ref]);

  const gold = "var(--accent-gold)";
  const s = {
    page: { minHeight: "100vh", display: "flex", flexDirection: "column" as const },
    hero: { background: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.98))", padding: "4rem 0 3rem", borderBottom: "1px solid #222", textAlign: "center" as const },
    card: { background: "#141414", border: "1px solid #222", borderRadius: 12, padding: "2rem", marginBottom: "1.5rem" },
    row: { display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #1a1a1a" as const },
  };

  const waMsg = booking ? encodeURIComponent(`Hi! I just booked a taxi. Ref: ${booking.ref} — ${booking.pickup_date} at ${booking.pickup_time}. From: ${booking.pickup_location}`) : "";

  return (
    <div style={s.page}>
      <Navbar />
      <section style={s.hero}>
        <div className="container">
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
          <h1 style={{ color: gold, fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 800, margin: "0 0 0.5rem" }}>Booking Confirmed!</h1>
          <p style={{ color: "#aaa" }}>Your transfer has been received. Confirmation sent to your email.</p>
          {ref && <p style={{ color: gold, fontWeight: 700, fontSize: "1.1rem", marginTop: 8 }}>Ref: {ref}</p>}
        </div>
      </section>

      <main style={{ flex: 1, padding: "3rem 0", background: "#0c0c0c" }}>
        <div className="container" style={{ maxWidth: 680 }}>

          {loading && <p style={{ color: "#aaa", textAlign: "center" }}>Loading booking details...</p>}

          {booking && (
            <div style={s.card}>
              <h2 style={{ color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Booking Summary</h2>
              {[
                ["Reference", booking.ref],
                ["Passenger", booking.name],
                ["Pickup", booking.pickup_location],
                ["Drop-off", booking.dropoff_location],
                ["Date", booking.pickup_date],
                ["Time", booking.pickup_time],
                ["Vehicle", booking.vehicle_type?.toUpperCase()],
                ["Passengers", String(booking.passengers)],
                ...(booking.flight_number ? [["Flight", booking.flight_number]] : []),
                ["Total", `${booking.final_price} SAR`],
                ["Status", booking.status?.toUpperCase()],
              ].map(([l, v]) => (
                <div key={l} style={s.row}>
                  <span style={{ color: "#777", fontSize: "0.85rem" }}>{l}</span>
                  <span style={{ color: l === "Total" ? gold : "#fff", fontWeight: l === "Total" || l === "Status" ? 700 : 500, fontSize: "0.85rem" }}>{v}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link
              href={`https://wa.me/966569487569?text=${waMsg}`}
              target="_blank"
              className="btn btn-whatsapp"
              style={{ textAlign: "center", textDecoration: "none", padding: "1rem" }}
            >
              Message Us on WhatsApp
            </Link>
            <Link
              href={`/track-booking?ref=${ref}`}
              style={{ textAlign: "center", border: "1px solid #333", borderRadius: 6, padding: "0.9rem", color: "var(--text-primary)", textDecoration: "none", fontWeight: 600 }}
            >
              Track Booking Status
            </Link>
            <Link href="/" style={{ textAlign: "center", color: "#777", textDecoration: "none", fontSize: "0.85rem", padding: "0.5rem" }}>
              ← Back to Home
            </Link>
          </div>

          <div style={{ ...s.card, marginTop: "1.5rem", background: "rgba(245,197,24,0.04)", border: "1px solid rgba(245,197,24,0.2)" }}>
            <h3 style={{ color: gold, fontSize: "0.95rem", marginBottom: "0.75rem" }}>What happens next?</h3>
            <ul style={{ color: "#aaa", fontSize: "0.85rem", paddingLeft: "1.2rem", lineHeight: 2 }}>
              <li>You'll receive a confirmation email with trip details</li>
              <li>Our team will confirm your booking within 30 minutes</li>
              <li>2 hours before pickup, your driver details will be sent</li>
              <li>Driver meets you at arrivals with a name board</li>
              <li>Payment on completion of journey</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", background:"#0c0c0c", display:"flex", alignItems:"center", justifyContent:"center" }}><p style={{ color:"#555" }}>Loading...</p></div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
