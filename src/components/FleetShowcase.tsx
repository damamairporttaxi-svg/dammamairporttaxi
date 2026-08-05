"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface FleetShowcaseProps {
  showPrices?: boolean;
}

const VEHICLES = [
  {
    id: "sedan",
    badge: "Standard",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    fallback: "linear-gradient(135deg,#1a1500,#0d0d00)",
    passengers: 4,
    luggage: 3,
  },
  {
    id: "suv",
    badge: "VIP SUV",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
    fallback: "linear-gradient(135deg,#001530,#000818)",
    passengers: 6,
    luggage: 5,
  },
  {
    id: "van",
    badge: "Family Van",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    fallback: "linear-gradient(135deg,#001e00,#001000)",
    passengers: 8,
    luggage: 7,
  },
  {
    id: "luxury",
    badge: "First Class",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    fallback: "linear-gradient(135deg,#200015,#0f0008)",
    passengers: 3,
    luggage: 2,
  },
];

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ showPrices: _showPrices = true }) => {
  const { t } = useLanguage();

  const handleSelectVehicle = (id: string) => {
    const formEl = document.getElementById("booking");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
      const selects = formEl.getElementsByTagName("select");
      for (let i = 0; i < selects.length; i++) {
        const v = selects[i].value;
        if (v === "sedan" || v === "suv" || v === "van" || v === "luxury") {
          selects[i].value = id;
          selects[i].dispatchEvent(new Event("change", { bubbles: true }));
          break;
        }
      }
    }
  };

  const names = {
    sedan: t("camryName"), suv: t("yukonName"), van: t("stariaName"), luxury: t("luxuryName"),
  } as Record<string, string>;

  const descs = {
    sedan: t("camryDesc"), suv: t("yukonDesc"), van: t("stariaDesc"), luxury: t("luxuryDesc"),
  } as Record<string, string>;

  const features = [t("featureAC"), t("featureWifi"), t("featureWater"), t("featureBorder")];

  return (
    <section style={s.section} className="section-padding">
      <div className="container text-center">
        <span className="badge-gold" style={{ marginBottom: "1rem" }}>{t("navFleet")}</span>
        <h2 className="title-accent" style={{ display: "block" }}>{t("fleetTitle")}</h2>
        <p style={s.sub}>{t("fleetSub")}</p>

        <div style={s.grid}>
          {VEHICLES.map(v => (
            <VehicleCard
              key={v.id}
              vehicle={v}
              name={names[v.id]}
              desc={descs[v.id]}
              features={features}
              passLabel={t("maxPassengers")}
              lugLabel={t("maxLuggage")}
              bookLabel={t("bookNow")}
              onBook={() => handleSelectVehicle(v.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Single vehicle card ────────────────────────────────────────── */
function VehicleCard({
  vehicle, name, desc, features,
  passLabel, lugLabel, bookLabel, onBook,
}: {
  vehicle: typeof VEHICLES[0];
  name: string; desc: string;
  features: string[];
  passLabel: string; lugLabel: string;
  bookLabel: string; onBook: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...s.card,
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(12,88,209,0.25)"
          : "var(--shadow-md)",
        transform: hovered ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)",
      }}
    >
      {/* ── Photo header ─────────────────────────────────────── */}
      <div
        style={{
          ...s.imgWrap,
          background: imgFailed ? vehicle.fallback : undefined,
        }}
      >
        {!imgFailed && (
          <img
            src={vehicle.img}
            alt={name}
            onError={() => setImgFailed(true)}
            style={s.img}
          />
        )}
        {/* dark overlay so text is always readable */}
        <div style={s.imgOverlay} />

        {/* badge */}
        <span style={s.badge}>{vehicle.badge}</span>

        {/* bottom gradient fade */}
        <div style={s.imgFade} />
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div style={s.body}>
        <h3 style={s.title}>{name}</h3>
        <p style={s.desc}>{desc}</p>

        <div style={s.specs}>
          <div style={s.spec}>
            <span style={s.specLbl}>{passLabel}</span>
            <span style={s.specVal}>{vehicle.passengers}</span>
          </div>
          <div style={s.spec}>
            <span style={s.specLbl}>{lugLabel}</span>
            <span style={s.specVal}>{vehicle.luggage}</span>
          </div>
        </div>

        <ul style={s.feats}>
          {features.map((f, i) => (
            <li key={i} style={s.feat}>
              <span style={s.check}>✓</span> {f}
            </li>
          ))}
        </ul>

        <button
          onClick={onBook}
          style={{
            ...s.btn,
            background: hovered ? "#0C58D1" : "transparent",
            color: hovered ? "#000" : "#0C58D1",
          }}
        >
          {bookLabel}
        </button>
      </div>
    </div>
  );
}

/* ── Styles ──────────────────────────────────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "var(--bg-secondary)" },
  sub:     { maxWidth: "700px", margin: "0 auto 4rem auto" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: "1.75rem",
    marginTop: "2rem",
  },
  card: {
    backgroundColor: "var(--bg-tertiary)",
    border: "1px solid var(--border-color)",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  imgWrap: {
    position: "relative",
    height: "210px",
    flexShrink: 0,
    overflow: "hidden",
    backgroundColor: "#111",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s ease",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    pointerEvents: "none",
  },
  imgFade: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "70px",
    background: "linear-gradient(to top, var(--bg-tertiary), transparent)",
    pointerEvents: "none",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    backgroundColor: "rgba(0,0,0,0.70)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#ffffff",
    padding: "0.25rem 0.65rem",
    borderRadius: "20px",
    fontSize: "0.72rem",
    fontWeight: 700,
    backdropFilter: "blur(6px)",
    letterSpacing: "0.04em",
  },
  priceTag: {
    position: "absolute",
    top: "14px",
    right: "14px",
    backgroundColor: "rgba(0,0,0,0.70)",
    color: "#ffffff",
    padding: "0.25rem 0.65rem",
    borderRadius: "20px",
    fontSize: "0.72rem",
    backdropFilter: "blur(6px)",
  },
  body: {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "left",
  },
  title: { fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.5rem" },
  desc:  { fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.2rem", minHeight: "48px" },
  specs: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    borderTop: "1px solid var(--border-color)",
    borderBottom: "1px solid var(--border-color)",
    padding: "0.85rem 0",
    marginBottom: "1.2rem",
  },
  spec:    { display: "flex", flexDirection: "column", gap: "0.15rem" },
  specLbl: { fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" },
  specVal: { fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)" },
  feats:   { listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 },
  feat:    { fontSize: "0.8rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem" },
  check:   { color: "#0C58D1", fontWeight: 800, fontSize: "0.85rem" },
  btn: {
    width: "100%",
    padding: "0.7rem",
    borderRadius: "8px",
    border: "1.5px solid #0C58D1",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "0.875rem",
    transition: "all 0.2s ease",
    marginTop: "auto",
  },
};

