"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import { routesData } from "../data/routesData";

/* ─── Category definitions ─────────────────────────────────────── */
const GCC_SLUGS = [
  "dammam-to-bahrain","dammam-to-kuwait","dammam-to-uae",
  "dammam-airport-to-qatar-border","dammam-to-doha","dammam-to-abu-dhabi",
  "dammam-to-sharjah","dammam-to-muscat","dammam-airport-to-bahrain-airport",
];
const SAUDI_SLUGS = [
  "dammam-to-riyadh","dammam-to-jeddah","dammam-to-madinah",
  "dammam-to-mecca","dammam-to-qassim",
];
const AIRPORT_SLUGS = [
  "dammam-airport-to-khobar","dammam-airport-to-jubail","dammam-airport-to-dhahran",
  "dammam-airport-to-hofuf","dammam-airport-to-dammam-city","dammam-airport-to-qatif",
  "dammam-airport-to-ras-tanura","dammam-airport-to-half-moon-bay",
];

/* ─── Flag / icon per slug ──────────────────────────────────────── */
const FLAG: Record<string, string> = {
  "dammam-to-bahrain": "🇧🇭", "dammam-to-kuwait": "🇰🇼",
  "dammam-to-uae": "🇦🇪", "dammam-airport-to-qatar-border": "🇶🇦",
  "dammam-to-doha": "🇶🇦", "dammam-to-abu-dhabi": "🇦🇪",
  "dammam-to-sharjah": "🇦🇪", "dammam-to-muscat": "🇴🇲",
  "dammam-airport-to-bahrain-airport": "🇧🇭",
  "dammam-to-riyadh": "🏙️", "dammam-to-jeddah": "🌊",
  "dammam-to-madinah": "🕌", "dammam-to-mecca": "🕋",
  "dammam-to-qassim": "🌾",
};

function getCategory(slug: string): "gcc" | "saudi" | "airport" {
  if (GCC_SLUGS.includes(slug)) return "gcc";
  if (SAUDI_SLUGS.includes(slug)) return "saudi";
  return "airport";
}

const CAT_CONFIG = {
  gcc: {
    gradient: "linear-gradient(135deg, #1a1000 0%, #2d1f00 100%)",
    border: "#b8860b",
    label_en: "International GCC",
    label_ar: "دولي / خليجي",
    icon: "🌍",
  },
  saudi: {
    gradient: "linear-gradient(135deg, #001200 0%, #002800 100%)",
    border: "#1a7a1a",
    label_en: "Saudi City",
    label_ar: "مدينة سعودية",
    icon: "🕌",
  },
  airport: {
    gradient: "linear-gradient(135deg, #000a18 0%, #001030 100%)",
    border: "#1a4a8a",
    label_en: "Airport Transfer",
    label_ar: "من المطار",
    icon: "✈️",
  },
};

type Tab = "all" | "gcc" | "saudi" | "airport";

/* ══════════════════════════════════════════════════════════════════ */
export function PopularRoutesPageClient() {
  const { locale } = useLanguage();
  const isAr = locale === "ar";
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const tabDefs: { id: Tab; label_en: string; label_ar: string; count: number }[] = [
    { id: "all",     label_en: "All Routes",        label_ar: "جميع الوجهات",    count: routesData.length },
    { id: "gcc",     label_en: "International GCC", label_ar: "دول الخليج",      count: GCC_SLUGS.length },
    { id: "saudi",   label_en: "Saudi Cities",      label_ar: "المدن السعودية",  count: SAUDI_SLUGS.length },
    { id: "airport", label_en: "Airport Transfers", label_ar: "من المطار",       count: AIRPORT_SLUGS.length },
  ];

  const filtered =
    activeTab === "gcc"     ? routesData.filter(r => GCC_SLUGS.includes(r.slug)) :
    activeTab === "saudi"   ? routesData.filter(r => SAUDI_SLUGS.includes(r.slug)) :
    activeTab === "airport" ? routesData.filter(r => AIRPORT_SLUGS.includes(r.slug)) :
    routesData;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroInner}>
          <span className="badge-gold">{isAr ? "الوجهات الشائعة" : "Popular Routes"}</span>
          <h1 style={styles.heroTitle}>
            {isAr ? "جميع وجهات التاكسي من الدمام" : "All Taxi Routes from Dammam"}
          </h1>
          <p style={styles.heroSub}>
            {isAr
              ? "خدمة تاكسي خاص وفاخر إلى دول الخليج والمدن السعودية — أسعار ثابتة، سائقون محترفون، 24/7."
              : "Premium private taxi to GCC countries & Saudi cities — fixed rates, pro drivers, 24/7."}
          </p>

          {/* Stats row */}
          <div style={styles.statsRow}>
            {[
              { val: `${routesData.length}+`, lbl_en: "Routes Covered",   lbl_ar: "وجهة مغطاة" },
              { val: "4",                      lbl_en: "Vehicle Classes",  lbl_ar: "فئات سيارات" },
              { val: "24/7",                   lbl_en: "Available",        lbl_ar: "متاح دائماً" },
              { val: "100%",                   lbl_en: "Fixed Rates",      lbl_ar: "أسعار ثابتة" },
            ].map((s, i) => (
              <div key={i} style={styles.statBox}>
                <span style={styles.statVal}>{s.val}</span>
                <span style={styles.statLbl}>{isAr ? s.lbl_ar : s.lbl_en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ──────────────────────────────────────────── */}
      <div style={styles.tabsBar}>
        <div className="container" style={styles.tabsInner}>
          {tabDefs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ ...styles.tab, ...(activeTab === tab.id ? styles.tabActive : {}) }}
            >
              {isAr ? tab.label_ar : tab.label_en}
              <span style={{ ...styles.tabCount, ...(activeTab === tab.id ? styles.tabCountActive : {}) }}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Routes Grid ──────────────────────────────────────────── */}
      <section className="section-padding" style={{ flex: 1, backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          {activeTab === "all" ? (
            <>
              <RouteGroup
                title={isAr ? "دول الخليج الدولية" : "International GCC Routes"}
                catKey="gcc"
                routes={routesData.filter(r => GCC_SLUGS.includes(r.slug))}
                isAr={isAr}
              />
              <RouteGroup
                title={isAr ? "المدن السعودية" : "Saudi City Routes"}
                catKey="saudi"
                routes={routesData.filter(r => SAUDI_SLUGS.includes(r.slug))}
                isAr={isAr}
              />
              <RouteGroup
                title={isAr ? "توصيل من مطار الدمام" : "Dammam Airport Transfers"}
                catKey="airport"
                routes={routesData.filter(r => AIRPORT_SLUGS.includes(r.slug))}
                isAr={isAr}
              />
            </>
          ) : (
            <div style={styles.grid}>
              {filtered.map(r => (
                <RouteCard key={r.slug} route={r} isAr={isAr} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section style={styles.ctaSection}>
        <div className="container" style={styles.ctaInner}>
          <div>
            <h2 style={styles.ctaTitle}>
              {isAr ? "لم تجد وجهتك؟" : "Don't see your destination?"}
            </h2>
            <p style={styles.ctaSub}>
              {isAr
                ? "تواصل معنا عبر واتساب وسنرتب رحلتك فوراً."
                : "Contact us on WhatsApp and we'll arrange your trip instantly."}
            </p>
          </div>
          <Link
            href="https://wa.me/966569487569"
            target="_blank"
            className="btn btn-whatsapp"
            style={styles.ctaBtn}
          >
            {isAr ? "تواصل على واتساب" : "Chat on WhatsApp"}
          </Link>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
function RouteGroup({
  title, catKey, routes, isAr,
}: {
  title: string;
  catKey: "gcc" | "saudi" | "airport";
  routes: typeof routesData;
  isAr: boolean;
}) {
  const cfg = CAT_CONFIG[catKey];
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <div style={styles.groupHeader}>
        <span style={styles.groupIcon}>{cfg.icon}</span>
        <h2 style={styles.groupTitle}>{title}</h2>
        <span style={{ ...styles.groupCount, borderColor: cfg.border, color: cfg.border }}>
          {routes.length} {isAr ? "وجهة" : "routes"}
        </span>
      </div>
      <div style={styles.grid}>
        {routes.map(r => (
          <RouteCard key={r.slug} route={r} isAr={isAr} />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
function RouteCard({ route, isAr }: { route: (typeof routesData)[0]; isAr: boolean }) {
  const [hovered, setHovered] = useState(false);
  const cat = getCategory(route.slug);
  const cfg = CAT_CONFIG[cat];
  const flag = FLAG[route.slug] ?? "📍";
  const intro = isAr ? route.intro.ar : route.intro.en;
  const shortIntro = intro.length > 90 ? intro.slice(0, 90).trimEnd() + "…" : intro;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 12px 32px rgba(0,0,0,0.6), 0 0 0 1px ${cfg.border}40` : "var(--shadow-md)",
        borderColor: hovered ? cfg.border : "var(--border-color)",
      }}
    >
      {/* Card visual header */}
      <div style={{ ...styles.cardBanner, background: cfg.gradient, borderBottom: `2px solid ${cfg.border}` }}>
        <span style={styles.bannerFlag}>{flag}</span>
        <span style={{ ...styles.catChip, borderColor: cfg.border, color: cfg.border }}>
          {cfg.icon} {isAr ? cfg.label_ar : cfg.label_en}
        </span>
      </div>

      {/* Card body */}
      <div style={styles.cardBody}>
        <h3 style={styles.cardTitle}>
          {isAr ? route.name.ar : route.name.en}
        </h3>

        <p style={styles.cardIntro}>{shortIntro}</p>

        <div style={styles.metaRow}>
          <span style={styles.metaBadge}>📍 {isAr ? route.distance.ar : route.distance.en}</span>
          <span style={styles.metaBadge}>⏱ {isAr ? route.duration.ar : route.duration.en}</span>
        </div>

        <Link
          href={`/routes/${route.slug}`}
          style={{ ...styles.detailsBtn, backgroundColor: hovered ? cfg.border : "transparent", color: hovered ? "#000" : cfg.border, borderColor: cfg.border }}
        >
          {isAr ? "عرض التفاصيل ←" : "View Details →"}
        </Link>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "radial-gradient(ellipse at 60% 40%, rgba(35,28,5,0.9) 0%, #0c0c0c 65%)",
    padding: "5rem 0 3.5rem",
    borderBottom: "1px solid var(--border-color)",
  },
  heroInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "1.25rem",
  },
  heroTitle: {
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1.2,
  },
  heroSub: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    maxWidth: "600px",
    lineHeight: 1.7,
  },
  statsRow: {
    display: "flex",
    gap: "0",
    marginTop: "1.5rem",
    border: "1px solid var(--border-color)",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "var(--bg-secondary)",
  },
  statBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.25rem 2rem",
    borderRight: "1px solid var(--border-color)",
    gap: "0.2rem",
    flex: 1,
  },
  statVal: {
    fontSize: "1.6rem",
    fontWeight: 800,
    color: "var(--accent-gold)",
  },
  statLbl: {
    fontSize: "0.72rem",
    color: "var(--text-secondary)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
  },
  tabsBar: {
    backgroundColor: "var(--bg-secondary)",
    borderBottom: "1px solid var(--border-color)",
    padding: "1rem 0",
    position: "sticky",
    top: "60px",
    zIndex: 50,
  },
  tabsInner: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tab: {
    padding: "0.45rem 1.1rem",
    borderRadius: "50px",
    border: "1px solid var(--border-color)",
    background: "transparent",
    color: "var(--text-secondary)",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    transition: "all 0.2s",
  },
  tabActive: {
    background: "var(--accent-gold)",
    borderColor: "var(--accent-gold)",
    color: "#000",
    fontWeight: 700,
  },
  tabCount: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "var(--text-muted)",
    fontSize: "0.72rem",
    fontWeight: 700,
    padding: "0.1rem 0.45rem",
    borderRadius: "20px",
  },
  tabCountActive: {
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "#000",
  },
  groupHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1.5rem",
    paddingBottom: "0.75rem",
    borderBottom: "1px solid var(--border-color)",
  },
  groupIcon: { fontSize: "1.4rem" },
  groupTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#fff",
    flex: 1,
  },
  groupCount: {
    fontSize: "0.75rem",
    fontWeight: 700,
    border: "1px solid",
    borderRadius: "20px",
    padding: "0.15rem 0.6rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
    cursor: "pointer",
  },
  cardBanner: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1.2rem",
    flexShrink: 0,
  },
  bannerFlag: {
    fontSize: "2.2rem",
    lineHeight: 1,
  },
  catChip: {
    fontSize: "0.7rem",
    fontWeight: 700,
    border: "1px solid",
    borderRadius: "20px",
    padding: "0.2rem 0.6rem",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  cardBody: {
    padding: "1.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    flex: 1,
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.4,
  },
  cardIntro: {
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
    lineHeight: 1.6,
    margin: 0,
  },
  metaRow: {
    display: "flex",
    gap: "0.4rem",
    flexWrap: "wrap",
  },
  metaBadge: {
    fontSize: "0.75rem",
    color: "var(--text-secondary)",
    backgroundColor: "rgba(255,255,255,0.04)",
    padding: "0.2rem 0.55rem",
    borderRadius: "4px",
    border: "1px solid var(--border-color)",
  },
  detailsBtn: {
    display: "inline-block",
    marginTop: "auto",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    border: "1px solid",
    fontSize: "0.82rem",
    fontWeight: 700,
    textAlign: "center",
    transition: "all 0.2s",
    textDecoration: "none",
  },
  ctaSection: {
    backgroundColor: "var(--bg-secondary)",
    borderTop: "1px solid var(--border-color)",
    padding: "3rem 0",
  },
  ctaInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  ctaTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#fff",
    marginBottom: "0.5rem",
  },
  ctaSub: {
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
  },
  ctaBtn: {
    padding: "0.85rem 2rem",
    fontSize: "0.95rem",
    fontWeight: 700,
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
};

