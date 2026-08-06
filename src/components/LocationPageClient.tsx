"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import type { LocationPage, LocationType } from "../data/locationData";

const TYPE_CONFIG: Record<LocationType, { color: string; label_en: string; label_ar: string }> = {
  district:   { color: "#c8920a", label_en: "Dammam District",     label_ar: "حي بالدمام" },
  hotel:      { color: "#3a7fd4", label_en: "Hotel Transfer",        label_ar: "توصيل فندقي" },
  hospital:   { color: "#2a9d2a", label_en: "Medical Transfer",      label_ar: "نقل طبي" },
  attraction: { color: "#9b59b6", label_en: "Tourist Attraction",   label_ar: "معلم سياحي" },
  industrial: { color: "#e67e22", label_en: "Business & Industrial", label_ar: "أعمال وصناعة" },
};

interface Props { page: LocationPage }

export function LocationPageClient({ page }: Props) {
  const { locale } = useLanguage();
  const ar = locale === "ar";
  const cfg = TYPE_CONFIG[page.type];

  const name       = ar ? page.name.ar       : page.name.en;
  const intro      = ar ? page.intro.ar      : page.intro.en;
  const highlights = ar ? page.highlights.ar : page.highlights.en;
  const faqs       = ar ? page.faqs.ar       : page.faqs.en;
  const landmark   = ar ? page.landmark.ar   : page.landmark.en;

  const waText = encodeURIComponent(
    ar
      ? `أريد حجز تاكسي إلى: ${page.name.ar}`
      : `Book taxi to: ${page.name.en}`
  );

  /* JSON-LD schema */
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `Taxi to ${page.name.en} — Dammam Airport Taxi`,
    description: page.metaDescription.en,
    provider: {
      "@type": "LocalBusiness",
      name: "Dammam Airport Taxi",
      telephone: "+966501234567",
      url: "https://www.dammamairporttaxi.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dammam",
        addressRegion: "Eastern Province",
        addressCountry: "SA",
      },
    },
    areaServed: { "@type": "Place", name: page.name.en },
    offers: {
      "@type": "Offer",
      priceCurrency: "SAR",
      price: page.startingPrice,
      description: `Starting from ${page.startingPrice} SAR`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.en.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)" }}>
        <Navbar />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section style={{ ...s.hero, background: `radial-gradient(ellipse at 60% 30%, ${cfg.color}18 0%, #080808 65%)` }}>
          <div className="container" style={s.heroInner}>
            {/* Breadcrumb */}
            <nav style={s.crumb}>
              <Link href="/" style={s.crumbLink}>{ar ? "الرئيسية" : "Home"}</Link>
              <span style={s.crumbSep}>›</span>
              <Link href="/routes" style={s.crumbLink}>{ar ? "الوجهات" : "Routes"}</Link>
              <span style={s.crumbSep}>›</span>
              <span style={{ color: cfg.color, fontWeight: 600 }}>{name}</span>
            </nav>

            {/* Type badge */}
            <span style={{ ...s.typeBadge, backgroundColor: `${cfg.color}18`, color: cfg.color, borderColor: `${cfg.color}40` }}>
              {ar ? cfg.label_ar : cfg.label_en}
            </span>

            <h1 style={s.h1}>
              {ar ? `تاكسي إلى ${name}` : `Taxi to ${name}`}
            </h1>
            <p style={s.heroP}>{intro}</p>

            {/* Quick stats */}
            <div style={s.quickStats}>
              <div style={s.qStat}>
                <div>
                  <div style={s.qStatVal}>{ar ? page.distanceFromAirport.ar : page.distanceFromAirport.en}</div>
                  <div style={s.qStatLbl}>{ar ? "من المطار" : "From Airport"}</div>
                </div>
              </div>
              <div style={s.qStatDiv} />
              <div style={s.qStat}>
                <div>
                  <div style={s.qStatVal}>{ar ? page.durationFromAirport.ar : page.durationFromAirport.en}</div>
                  <div style={s.qStatLbl}>{ar ? "مدة الرحلة" : "Travel Time"}</div>
                </div>
              </div>
              <div style={s.qStatDiv} />
              <div style={s.qStat}>
                <div>
                  <div style={{ ...s.qStatVal, color: "#0C58D1" }}>
                    {ar ? `من ${page.startingPrice} ر.س` : `From ${page.startingPrice} SAR`}
                  </div>
                  <div style={s.qStatLbl}>{ar ? "يبدأ من" : "Starting price"}</div>
                </div>
              </div>
              <div style={s.qStatDiv} />
              <div style={s.qStat}>
                <div>
                  <div style={s.qStatVal}>{landmark}</div>
                  <div style={s.qStatLbl}>{ar ? "الموقع" : "Location"}</div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={s.heroBtns}>
              <Link
                href={`https://wa.me/966560273828?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                style={s.btnWa}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.277-1.497A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.492-5.19-1.352l-.374-.222-3.726.888.944-3.638-.244-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                {ar ? "احجز عبر واتساب" : "Book via WhatsApp"}
              </Link>
              <Link href="/#booking" style={s.btnSecondary}>
                {ar ? "احجز من الموقع" : "Book Online"}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Main content ─────────────────────────────────────── */}
        <main style={s.main}>
          <div className="container" style={s.grid}>

            {/* Left: content */}
            <div style={s.contentCol}>

              {/* Highlights */}
              <div style={s.card}>
                <h2 style={{ ...s.cardTitle, borderColor: cfg.color }}>
                  {ar ? "لماذا تختار خدمتنا؟" : "Why Choose Our Service?"}
                </h2>
                <ul style={s.highlightList}>
                  {highlights.map((h, i) => (
                    <li key={i} style={s.highlightItem}>
                      <span style={{ ...s.checkIcon, color: cfg.color }}>✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How it works */}
              <div style={s.card}>
                <h2 style={{ ...s.cardTitle, borderColor: cfg.color }}>
                  {ar ? "كيف تحجز؟" : "How to Book"}
                </h2>
                <div style={s.stepsRow}>
                  {[
                    { n: "1", en: "WhatsApp us your flight details & destination", ar: "أرسل لنا رقم رحلتك ووجهتك عبر واتساب" },
                    { n: "2", en: "Receive instant confirmation with driver info", ar: "احصل على تأكيد فوري مع بيانات السائق" },
                    { n: "3", en: "Driver meets you at arrivals — no waiting", ar: "السائق يستقبلك في صالة الوصول — بلا انتظار" },
                  ].map((step, i) => (
                    <div key={i} style={s.step}>
                      <div style={{ ...s.stepNum, backgroundColor: cfg.color }}>{step.n}</div>
                      <p style={s.stepText}>{ar ? step.ar : step.en}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle options */}
              <div style={s.card}>
                <h2 style={{ ...s.cardTitle, borderColor: cfg.color }}>
                  {ar ? "خيارات السيارات المتاحة" : "Available Vehicle Options"}
                </h2>
                <div style={s.vehicleGrid}>
                  {[
                    { name_en: "Sedan (Camry)", name_ar: "سيدان (كامري)", pax: "1–4", price_en: `From ${page.startingPrice} SAR`, price_ar: `من ${page.startingPrice} ر.س` },
                    { name_en: "VIP SUV (Yukon)", name_ar: "SUV فاخر (يوكن)", pax: "1–6", price_en: `From ${Math.round(page.startingPrice * 1.9)} SAR`, price_ar: `من ${Math.round(page.startingPrice * 1.9)} ر.س` },
                    { name_en: "Family Van (Staria)", name_ar: "فان عائلي (ستاريا)", pax: "1–8", price_en: `From ${Math.round(page.startingPrice * 2.2)} SAR`, price_ar: `من ${Math.round(page.startingPrice * 2.2)} ر.س` },
                  ].map((v, i) => (
                    <div key={i} style={s.vehicleCard}>
                      <div style={s.vehicleInfo}>
                        <strong style={s.vehicleName}>{ar ? v.name_ar : v.name_en}</strong>
                        <span style={s.vehiclePax}>{v.pax} {ar ? "ركاب" : "pax"}</span>
                        <span style={{ ...s.vehiclePrice, color: cfg.color }}>{ar ? v.price_ar : v.price_en}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div style={s.card}>
                <h2 style={{ ...s.cardTitle, borderColor: cfg.color }}>
                  {ar ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
                </h2>
                <div style={s.faqList}>
                  {faqs.map((f, i) => (
                    <FaqItem key={i} q={f.q} a={f.a} color={cfg.color} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sticky booking sidebar */}
            <div style={s.sidebarCol}>
              <div style={s.sidebarCard}>
                <h3 style={s.sidebarTitle}>
                  {ar ? `احجز تاكسي إلى ${name}` : `Book Taxi to ${name}`}
                </h3>

                <div style={s.sidebarStats}>
                  <div style={s.sidebarStat}>
                    <span style={s.sidebarStatLabel}>{ar ? "المسافة" : "Distance"}</span>
                    <span style={s.sidebarStatVal}>{ar ? page.distanceFromAirport.ar : page.distanceFromAirport.en}</span>
                  </div>
                  <div style={s.sidebarStat}>
                    <span style={s.sidebarStatLabel}>{ar ? "المدة" : "Duration"}</span>
                    <span style={s.sidebarStatVal}>{ar ? page.durationFromAirport.ar : page.durationFromAirport.en}</span>
                  </div>
                  <div style={s.sidebarStat}>
                    <span style={s.sidebarStatLabel}>{ar ? "يبدأ من" : "From"}</span>
                    <span style={{ ...s.sidebarStatVal, color: "#0C58D1", fontSize: "1.3rem" }}>
                      {page.startingPrice} SAR
                    </span>
                  </div>
                </div>

                <div style={s.sidebarFeatures}>
                  {[
                    { en: "✓ Fixed price — no hidden charges", ar: "✓ سعر ثابت — بلا رسوم خفية" },
                    { en: "✓ 60-min free waiting time", ar: "✓ ساعة انتظار مجانية" },
                    { en: "✓ Flight tracking included", ar: "✓ تتبع الرحلة مشمول" },
                    { en: "✓ Driver with name sign", ar: "✓ سائق بلوحة الاسم" },
                    { en: "✓ 24/7 service", ar: "✓ خدمة 24 ساعة" },
                  ].map((f, i) => (
                    <span key={i} style={s.sidebarFeature}>{ar ? f.ar : f.en}</span>
                  ))}
                </div>

                <Link
                  href={`https://wa.me/966560273828?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={s.sidebarBtnWa}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.277-1.497A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.492-5.19-1.352l-.374-.222-3.726.888.944-3.638-.244-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  {ar ? "احجز الآن عبر واتساب" : "Book Now via WhatsApp"}
                </Link>

                <Link href="/#booking" style={s.sidebarBtnSecondary}>
                  {ar ? "احجز من الموقع" : "Book Online"}
                </Link>

                <p style={s.sidebarNote}>
                  {ar ? "متوسط وقت الرد: أقل من دقيقتين" : "Avg. response time: under 2 minutes"}
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <StickyCTA />
      </div>
    </>
  );
}

/* ── Accordion FAQ item ─────────────────────────────────────────── */
function FaqItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={s.faqItem}>
      <button
        style={{ ...s.faqQ, borderColor: open ? color : "var(--border-color)" }}
        onClick={() => setOpen(!open)}
      >
        <span style={{ flex: 1, textAlign: "left" }}>{q}</span>
        <span style={{ color, fontWeight: 700, fontSize: "1.1rem", marginLeft: "0.5rem" }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <p style={s.faqA}>{a}</p>}
    </div>
  );
}

/* ── Styles ──────────────────────────────────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  hero: { padding: "4rem 0 3rem", borderBottom: "1px solid var(--border-color)" },
  heroInner: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  crumb: { display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem" },
  crumbLink: { color: "var(--text-muted)", textDecoration: "none" },
  crumbSep: { color: "var(--text-muted)" },
  typeBadge: {
    display: "inline-flex", alignItems: "center", gap: "0.35rem",
    padding: "0.3rem 0.8rem", borderRadius: "20px",
    border: "1px solid", fontSize: "0.78rem", fontWeight: 700,
    width: "fit-content",
  },
  h1: { fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2, maxWidth: "700px" },
  heroP: { fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.7 },
  quickStats: {
    display: "flex", alignItems: "center", gap: "0",
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: "10px", overflow: "hidden",
    width: "fit-content", flexWrap: "wrap",
  },
  qStat: { display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.9rem 1.4rem" },
  qStatIcon: { fontSize: "1.2rem" },
  qStatVal: { fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" },
  qStatLbl: { fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" },
  qStatDiv: { width: "1px", height: "40px", backgroundColor: "var(--border-color)" },
  heroBtns: { display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" },
  btnWa: {
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    backgroundColor: "#25d366", color: "var(--text-primary)",
    padding: "0.8rem 1.8rem", borderRadius: "8px",
    fontWeight: 700, textDecoration: "none", fontSize: "0.95rem",
  },
  btnSecondary: {
    display: "inline-flex", alignItems: "center",
    border: "1.5px solid #0C58D1", color: "#0C58D1",
    padding: "0.8rem 1.8rem", borderRadius: "8px",
    fontWeight: 700, textDecoration: "none", fontSize: "0.95rem",
    backgroundColor: "transparent",
  },
  main: { flex: 1, padding: "3rem 0" },
  grid: { display: "grid", gridTemplateColumns: "1fr 340px", gap: "2rem", alignItems: "start" },
  contentCol: { display: "flex", flexDirection: "column", gap: "1.5rem" },
  card: {
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: "12px", padding: "1.75rem",
  },
  cardTitle: {
    fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)",
    marginBottom: "1.25rem", paddingBottom: "0.75rem",
    borderBottom: "2px solid", display: "block",
  },
  highlightList: { listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" },
  highlightItem: { display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-secondary)" },
  checkIcon: { fontWeight: 800, fontSize: "0.95rem", flexShrink: 0, marginTop: "2px" },
  stepsRow: { display: "flex", gap: "1.25rem" },
  step: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem", textAlign: "center" },
  stepNum: { width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 800, fontSize: "0.9rem", flexShrink: 0 },
  stepText: { fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 },
  vehicleGrid: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  vehicleCard: {
    display: "flex", alignItems: "center", gap: "1rem",
    padding: "0.85rem 1rem",
    backgroundColor: "var(--bg-tertiary)",
    border: "1px solid var(--border-color)",
    borderRadius: "8px",
  },
  vehicleIcon: { fontSize: "1.8rem", flexShrink: 0 },
  vehicleInfo: { display: "flex", flexDirection: "column", gap: "0.15rem" },
  vehicleName: { fontSize: "0.9rem", color: "var(--text-primary)" },
  vehiclePax: { fontSize: "0.75rem", color: "var(--text-muted)" },
  vehiclePrice: { fontSize: "0.85rem", fontWeight: 700 },
  faqList: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  faqItem: { borderRadius: "6px", overflow: "hidden" },
  faqQ: {
    width: "100%", display: "flex", alignItems: "center",
    background: "var(--bg-tertiary)",
    border: "1px solid", padding: "0.85rem 1rem",
    cursor: "pointer", fontSize: "0.9rem", color: "var(--text-primary)",
    fontWeight: 600, borderRadius: "6px", textAlign: "left",
    transition: "border-color 0.2s",
  },
  faqA: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid var(--border-color)",
    borderTop: "none", borderRadius: "0 0 6px 6px",
    padding: "0.85rem 1rem",
    fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0,
  },
  sidebarCol: { position: "sticky", top: "80px" },
  sidebarCard: {
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: "14px", padding: "1.5rem",
    display: "flex", flexDirection: "column", gap: "1rem",
  },
  sidebarTitle: { fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4 },
  sidebarStats: {
    display: "flex", flexDirection: "column", gap: "0.6rem",
    borderTop: "1px solid var(--border-color)",
    borderBottom: "1px solid var(--border-color)",
    padding: "0.9rem 0",
  },
  sidebarStat: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  sidebarStatLabel: { fontSize: "0.78rem", color: "var(--text-muted)" },
  sidebarStatVal: { fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" },
  sidebarFeatures: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  sidebarFeature: { fontSize: "0.8rem", color: "var(--text-secondary)" },
  sidebarBtnWa: {
    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
    backgroundColor: "#25d366", color: "var(--text-primary)",
    padding: "0.85rem", borderRadius: "8px",
    fontWeight: 700, textDecoration: "none", fontSize: "0.9rem",
  },
  sidebarBtnSecondary: {
    display: "flex", alignItems: "center", justifyContent: "center",
    border: "1.5px solid #0C58D1", color: "#0C58D1",
    padding: "0.7rem", borderRadius: "8px",
    fontWeight: 700, textDecoration: "none", fontSize: "0.85rem",
    backgroundColor: "transparent",
  },
  sidebarNote: { fontSize: "0.72rem", color: "var(--text-muted)", textAlign: "center", margin: 0 },
};
