"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Step = 1 | 2 | 3;

const vehicles = [
  { id: "sedan",  label: "Camry Sedan",      pax: "1–4", price_key: "sedan_price",  badge: "" },
  { id: "suv",    label: "GMC Yukon SUV",    pax: "1–6", price_key: "suv_price",    badge: "Popular" },
  { id: "van",    label: "Hyundai Staria",   pax: "1–8", price_key: "van_price",    badge: "" },
  { id: "luxury", label: "VIP Luxury Class", pax: "1–3", price_key: "luxury_price", badge: "VIP" },
];

export default function BookingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [promoInput, setPromoInput] = useState("");
  const [promoResult, setPromoResult] = useState<{ discount_amount: number; final_price: number; error?: string } | null>(null);

  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    pickup_location: "", dropoff_location: "",
    pickup_date: "", pickup_time: "",
    passengers: "1", luggage: "0",
    vehicle_type: "sedan", service_type: "airport",
    flight_number: "", special_notes: "",
    price: 150, promo_code: "",
  });

  const set = (k: string, v: string | number) => setForm(p => ({ ...p, [k]: v }));

  async function applyPromo() {
    const res = await fetch("/api/validate-promo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: promoInput, order_amount: form.price }),
    });
    const data = await res.json();
    setPromoResult(data);
    if (data.valid) set("promo_code", promoInput.toUpperCase());
  }

  async function submitBooking() {
    setLoading(true);
    const finalPrice = promoResult?.final_price ?? form.price;
    const discountAmount = promoResult?.discount_amount ?? 0;

    const res = await fetch("/api/admin/bookings/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        passengers: parseInt(form.passengers),
        luggage: parseInt(form.luggage),
        final_price: finalPrice,
        discount_amount: discountAmount,
        status: "pending",
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.booking) {
      router.push(`/booking/confirmation?ref=${data.booking.ref}`);
    }
  }

  const gold = "var(--accent-gold)";
  const s = {
    hero: { background: "#ffffff", padding: "4rem 0 3rem", borderBottom: "1px solid #e5e7eb" },
    h1: { fontSize: "clamp(1.3rem,3vw,2rem)", color: "var(--text-primary)", fontWeight: 800, margin: "0.5rem 0 1rem" },
    card: { background: "#141414", border: "1px solid #222", borderRadius: 12, padding: "2rem" },
    label: { display: "block" as const, color: "#aaa", fontSize: "0.82rem", fontWeight: 600, marginBottom: 6, textTransform: "uppercase" as const },
    input: { width: "100%", background: "#0c0c0c", border: "1px solid #333", borderRadius: 6, padding: "0.75rem 1rem", color: "var(--text-primary)", fontSize: "0.95rem", boxSizing: "border-box" as const },
    btn: { background: gold, color: "#000", border: "none", borderRadius: 6, padding: "0.9rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "1rem", width: "100%" },
    grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
    step: (active: boolean) => ({
      width: 32, height: 32, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: "0.85rem",
      background: active ? gold : "#ffffff", color: active ? "#ffffff" : "#000000", border: active ? "none" : "1px solid #e5e7eb",
    }),
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <section style={s.hero}>
        <div className="container">
          <span className="badge-gold">Book Your Taxi</span>
          <h1 style={s.h1}>Dammam Airport Taxi — Instant Booking</h1>
          {/* Step indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "1.5rem" }}>
            {([1,2,3] as Step[]).map((n, i) => (
              <React.Fragment key={n}>
                <div style={s.step(step >= n)}>{n}</div>
                <span style={{ color: "#555", fontSize: "0.82rem" }}>
                  {n === 1 ? "Trip Details" : n === 2 ? "Your Info" : "Confirm"}
                </span>
                {i < 2 && <div style={{ flex: 1, height: 1, background: "#333", maxWidth: 60 }} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <main style={{ flex: 1, padding: "3rem 0", background: "#0c0c0c" }}>
        <div className="container" style={{ maxWidth: 700 }}>

          {/* Step 1 — Trip Details */}
          {step === 1 && (
            <div style={s.card}>
              <h2 style={{ color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.15rem" }}>Trip Details</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {/* Service type */}
                <div>
                  <label style={s.label}>Service Type</label>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["airport","intercity","border","vip"].map(t => (
                      <button key={t} onClick={() => set("service_type", t)} style={{
                        padding: "0.5rem 1rem", borderRadius: 6, border: "1px solid",
                        borderColor: form.service_type === t ? gold : "#333",
                        background: form.service_type === t ? gold : "transparent",
                        color: form.service_type === t ? "#000" : "#aaa",
                        fontWeight: 600, cursor: "pointer", fontSize: "0.82rem", textTransform: "capitalize",
                      }}>{t.replace("_"," ")}</button>
                    ))}
                  </div>
                </div>
                <div style={s.grid2}>
                  <div><label style={s.label}>Pickup Location *</label><input style={s.input} value={form.pickup_location} onChange={e => set("pickup_location", e.target.value)} placeholder="e.g. King Fahd Airport (DMM)" /></div>
                  <div><label style={s.label}>Drop-off Location *</label><input style={s.input} value={form.dropoff_location} onChange={e => set("dropoff_location", e.target.value)} placeholder="e.g. Al Khobar Corniche" /></div>
                </div>
                <div style={s.grid2}>
                  <div><label style={s.label}>Date *</label><input type="date" style={s.input} value={form.pickup_date} onChange={e => set("pickup_date", e.target.value)} min={new Date().toISOString().split("T")[0]} /></div>
                  <div><label style={s.label}>Time *</label><input type="time" style={s.input} value={form.pickup_time} onChange={e => set("pickup_time", e.target.value)} /></div>
                </div>
                <div style={s.grid2}>
                  <div><label style={s.label}>Passengers</label><select style={s.input} value={form.passengers} onChange={e => set("passengers", e.target.value)}>{[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}</select></div>
                  <div><label style={s.label}>Luggage</label><select style={s.input} value={form.luggage} onChange={e => set("luggage", e.target.value)}>{[0,1,2,3,4,5,6,7].map(n => <option key={n}>{n}</option>)}</select></div>
                </div>
                <div><label style={s.label}>Flight Number (for airport pickups)</label><input style={s.input} value={form.flight_number} onChange={e => set("flight_number", e.target.value)} placeholder="e.g. SV123" /></div>
                {/* Vehicle selection */}
                <div>
                  <label style={s.label}>Select Vehicle</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    {vehicles.map(v => (
                      <div key={v.id} onClick={() => set("vehicle_type", v.id)} style={{
                        border: "1px solid", borderColor: form.vehicle_type === v.id ? gold : "#333",
                        borderRadius: 8, padding: "1rem", cursor: "pointer", position: "relative",
                        background: form.vehicle_type === v.id ? "rgba(245,197,24,0.06)" : "transparent",
                      }}>
                        {v.badge && <span style={{ position: "absolute", top: 8, right: 8, background: gold, color: "#000", fontSize: "0.65rem", fontWeight: 700, padding: "2px 6px", borderRadius: 4 }}>{v.badge}</span>}
                        <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem" }}>{v.label}</div>
                        <div style={{ color: "#888", fontSize: "0.78rem", marginTop: 4 }}>{v.pax} passengers</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div><label style={s.label}>Special Notes</label><textarea style={{ ...s.input, minHeight: 80, resize: "vertical" }} value={form.special_notes} onChange={e => set("special_notes", e.target.value)} placeholder="Child seat, wheelchair, meet & greet preferences..." /></div>
                <button style={s.btn} onClick={() => { if (form.pickup_location && form.dropoff_location && form.pickup_date && form.pickup_time) setStep(2); else alert("Please fill all required fields"); }}>Continue →</button>
              </div>
            </div>
          )}

          {/* Step 2 — Contact Info */}
          {step === 2 && (
            <div style={s.card}>
              <h2 style={{ color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.15rem" }}>Your Information</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div><label style={s.label}>Full Name *</label><input style={s.input} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Enter your full name" /></div>
                <div style={s.grid2}>
                  <div><label style={s.label}>Email *</label><input type="email" style={s.input} value={form.email} onChange={e => set("email", e.target.value)} placeholder="your@email.com" /></div>
                  <div><label style={s.label}>WhatsApp / Phone *</label><input type="tel" style={s.input} value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+966 5X XXX XXXX" /></div>
                </div>
                {/* Promo code */}
                <div>
                  <label style={s.label}>Promo Code (optional)</label>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input style={{ ...s.input, flex: 1 }} value={promoInput} onChange={e => setPromoInput(e.target.value.toUpperCase())} placeholder="Enter code" />
                    <button onClick={applyPromo} style={{ ...s.btn, width: "auto", padding: "0.75rem 1.5rem", whiteSpace: "nowrap" }}>Apply</button>
                  </div>
                  {promoResult && (
                    <p style={{ color: promoResult.error ? "#e53e3e" : "#48bb78", fontSize: "0.85rem", marginTop: 6 }}>
                      {promoResult.error ?? `Discount applied: ${promoResult.discount_amount} SAR off → Final: ${promoResult.final_price} SAR`}
                    </p>
                  )}
                </div>
                {/* Price summary */}
                <div style={{ background: "#0c0c0c", border: "1px solid #333", borderRadius: 8, padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "#aaa" }}>Base fare ({form.vehicle_type})</span>
                    <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{form.price} SAR</span>
                  </div>
                  {promoResult?.discount_amount ? (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: "#48bb78" }}>Promo discount</span>
                      <span style={{ color: "#48bb78", fontWeight: 600 }}>-{promoResult.discount_amount} SAR</span>
                    </div>
                  ) : null}
                  <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #333", paddingTop: 8 }}>
                    <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>Total</span>
                    <span style={{ color: gold, fontWeight: 800, fontSize: "1.1rem" }}>{promoResult?.final_price ?? form.price} SAR</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button onClick={() => setStep(1)} style={{ ...s.btn, background: "#222", color: "var(--text-primary)", flex: 1 }}>← Back</button>
                  <button onClick={() => { if (form.name && form.email && form.phone) setStep(3); else alert("Please fill your name, email, and phone"); }} style={{ ...s.btn, flex: 2 }}>Review Booking →</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — Confirm */}
          {step === 3 && (
            <div style={s.card}>
              <h2 style={{ color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.15rem" }}>Confirm Your Booking</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                {[
                  ["Name", form.name], ["Email", form.email], ["Phone", form.phone],
                  ["Pickup", form.pickup_location], ["Drop-off", form.dropoff_location],
                  ["Date", form.pickup_date], ["Time", form.pickup_time],
                  ["Vehicle", form.vehicle_type.toUpperCase()], ["Passengers", form.passengers],
                  ...(form.flight_number ? [["Flight", form.flight_number]] : []),
                  ...(form.special_notes ? [["Notes", form.special_notes]] : []),
                ].map(([l, v]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #1a1a1a" }}>
                    <span style={{ color: "#777", fontSize: "0.85rem" }}>{l}</span>
                    <span style={{ color: "var(--text-primary)", fontSize: "0.85rem", fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{v}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderTop: "2px solid #333", marginTop: 4 }}>
                  <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>Total Payable</span>
                  <span style={{ color: gold, fontWeight: 800, fontSize: "1.2rem" }}>{promoResult?.final_price ?? form.price} SAR</span>
                </div>
              </div>
              <p style={{ color: "#888", fontSize: "0.82rem", marginBottom: "1.5rem" }}>
                Payment on arrival. By confirming you agree to our Terms of Service.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button onClick={() => setStep(2)} style={{ ...s.btn, background: "#222", color: "var(--text-primary)", flex: 1 }}>← Back</button>
                <button onClick={submitBooking} disabled={loading} style={{ ...s.btn, flex: 2, opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Confirming..." : "Confirm Booking"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
