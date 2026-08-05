"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import { routesData, RouteDetail } from "../data/routesData";
import { BookingForm } from "./BookingForm";

interface RoutePageClientProps {
  slug: string;
}

export const RoutePageClient: React.FC<RoutePageClientProps> = ({ slug }) => {
  const { t, locale, isRtl } = useLanguage();
  const [route, setRoute] = useState<RouteDetail | null>(null);

  useEffect(() => {
    const foundRoute = routesData.find((r) => r.slug === slug);
    if (foundRoute) {
      setRoute(foundRoute);
    }
  }, [slug]);

  if (!route) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "4rem" }}>
          <h2>Route not found / الوجهة غير موجودة</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const routeName = locale === "en" ? route.name.en : route.name.ar;
  const routeIntro = locale === "en" ? route.intro.en : route.intro.ar;
  const distance = locale === "en" ? route.distance.en : route.distance.ar;
  const duration = locale === "en" ? route.duration.en : route.duration.ar;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Header */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <span className="badge-gold">{t("navRoutes")}</span>
          <h1 style={styles.heroTitle}>
            {locale === "en"
              ? `Private Taxi: ${routeName} — Fixed Rate, Licensed Driver`
              : `تاكسي خاص: ${routeName} — سعر ثابت، سائق مرخص`}
          </h1>
          <p style={styles.heroSub}>{routeIntro}</p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container route-grid" style={styles.mainGrid}>
          {/* Left Column: Route Details, Pricing, Description, FAQs */}
          <div style={styles.contentCol}>
            {/* Route Stats */}
            <div style={styles.statsPanel}>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>{t("distanceLabel")}</span>
                <strong style={styles.statValue}>{distance}</strong>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>{t("travelTime")}</span>
                <strong style={styles.statValue}>{duration}</strong>
              </div>
            </div>

            {/* SEO Content Sections */}
            {route.contentSections.map((sec, idx) => (
              <div key={idx} style={styles.seoSection}>
                <h2 style={styles.seoSecTitle}>{locale === "en" ? sec.title.en : sec.title.ar}</h2>
                { (locale === "en" ? sec.body.en : sec.body.ar).map((pText, pIdx) => (
                  <p key={pIdx} style={styles.seoText}>
                    {pText}
                  </p>
                )) }
              </div>
            ))}

            {/* Route Map Embed */}
            <div className="glass-card" style={styles.mapCard}>
              <h2 style={{ ...styles.seoSecTitle, marginBottom: "1rem" }}>
                {locale === "en" ? `${routeName} — Interactive Route Map` : `خريطة مسار ${routeName} التفاعلية`}
              </h2>
              <div style={styles.mapContainer}>
                <iframe
                  src={route.mapUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: "6px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Route Map"
                ></iframe>
              </div>
            </div>

            {/* Route Specific FAQs */}
            <div style={styles.faqSection}>
              <h2 style={styles.sectionTitle}>{t("faqTitle")}</h2>
              <div style={styles.faqList}>
                {(locale === "en" ? route.faqs.en : route.faqs.ar).map((faq, idx) => (
                  <div key={idx} style={styles.faqItem}>
                    <h4 style={styles.faqQ}>{faq.q}</h4>
                    <p style={styles.faqA}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Form */}
          <div style={styles.formCol}>
            <div style={styles.stickyFormWrapper}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <StickyCTA />
      <Footer />
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "#ffffff",
    padding: "5rem 0 4rem",
    borderBottom: "4px solid #0C58D1",
    textAlign: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.2rem",
  },
  heroTitle: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
    color: "#000000",
    maxWidth: "800px",
    lineHeight: 1.25,
  },
  heroSub: {
    fontSize: "1.1rem",
    color: "#333333",
    maxWidth: "700px",
    lineHeight: "1.6",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.8fr 1.2fr",
    gap: "3rem",
  },
  contentCol: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  },
  statsPanel: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderTop: "4px solid #0C58D1",
    padding: "0",
    borderRadius: "8px",
    textAlign: "center",
    overflow: "hidden",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    padding: "1.5rem",
    borderRight: "1px solid #e5e7eb",
  },
  statLabel: {
    fontSize: "0.72rem",
    textTransform: "uppercase",
    color: "#64748B",
    letterSpacing: "0.06em",
    fontWeight: 600,
  },
  statValue: {
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#000000",
  },
  tableCard: {
    padding: "2rem",
  },
  sectionTitle: {
    fontSize: "1.3rem",
    color: "#000000",
    marginBottom: "1.2rem",
    fontWeight: 700,
    borderLeft: "4px solid #0C58D1",
    paddingLeft: "0.75rem",
  },
  pricingTable: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
  tableRowHeader: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid var(--border-color)",
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    fontWeight: "700",
  },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "0.92rem",
    background: "#ffffff",
    borderRadius: "6px",
    marginBottom: "0.4rem",
    border: "1px solid #e5e7eb",
  },
  seoSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  seoSecTitle: {
    fontSize: "1.3rem",
    color: "var(--text-primary)",
  },
  seoText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "var(--text-secondary)",
  },
  mapCard: {
    padding: "2rem",
  },
  mapContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    overflow: "hidden",
  },
  faqSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  faqItem: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderLeft: "3px solid #0C58D1",
    padding: "1.25rem 1.5rem",
    borderRadius: "6px",
  },
  faqQ: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "0.5rem",
    fontWeight: 600,
  },
  faqA: {
    fontSize: "0.92rem",
    color: "#333333",
    lineHeight: "1.6",
  },
  formCol: {
    position: "relative",
  },
  stickyFormWrapper: {
    position: "sticky",
    top: "100px",
  },
};

// We can add media queries for mainGrid layout in globals.css as well!
// Specifically: @media (max-width: 991px) { .route-grid { grid-template-columns: 1fr !important; } }

