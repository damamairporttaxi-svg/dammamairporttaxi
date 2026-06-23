"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import { FleetShowcase } from "./FleetShowcase";

export function FleetPageClient() {
  const { t, locale } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Header */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <span className="badge-gold">{t("navFleet")}</span>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Our Fleet & Chauffeurs" : "أسطول سياراتنا الفاخرة وسائقينا"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en"
              ? "Select from standard business sedans to elite luxury VIP SUVs and family class multi-purpose vans."
              : "اختر من بين سيارات السيدان القياسية للأعمال، وسيارات الدفع الرباعي الفاخرة، وسيارات الفان العائلية متعددة الأغراض."}
          </p>
        </div>
      </section>

      {/* Fleet Showcase Embedded */}
      <FleetShowcase />

      {/* professional Comfort & Service Standard */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container text-center">
          <span className="badge-gold" style={{ marginBottom: "1rem" }}>{locale === "en" ? "Extra Comfort" : "رفاهية إضافية"}</span>
          <h2 className="title-accent" style={{ display: "block" }}>
            {locale === "en" ? "Our Quality & Sanitization Standard" : "معايير الجودة والتعقيم والرفاهية"}
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            {locale === "en"
              ? "We believe the journey is as important as the destination. Every car is detailed before pickup."
              : "نحن نؤمن بأن تفاصيل الرحلة لا تقل أهمية عن الوجهة المقصودة. يتم غسيل وتعقيم وتجهيز كل سيارة بالكامل قبل الاستلام."}
          </p>

          <div style={styles.comfortGrid}>
            <div className="glass-card" style={styles.comfortCard}>
              <h3>{locale === "en" ? "Child & Baby Seats" : "مقاعد للأطفال والرضع"}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                {locale === "en" ? "Complimentary child safety seat upon advance booking request." : "نقدم مقاعد أمان مجانية للأطفال عند طلبها مسبقاً أثناء الحجز."}
              </p>
            </div>

            <div className="glass-card" style={styles.comfortCard}>
              <h3>{locale === "en" ? "Refreshments & Wipes" : "مرطبات ومناديل مبللة"}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                {locale === "en" ? "Chilled mineral water bottles and sanitized towels in every ride." : "مياه معدنية مبردة ومناديل معقمة متوفرة في كل رحلة."}
              </p>
            </div>

            <div className="glass-card" style={styles.comfortCard}>
              <h3>{locale === "en" ? "USB Charging Ports" : "منافذ شحن USB"}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                {locale === "en" ? "High-speed multi-socket device chargers for all passengers." : "شواحن سريعة متعددة المقابس لجميع الأجهزة الذكية."}
              </p>
            </div>

            <div className="glass-card" style={styles.comfortCard}>
              <h3>{locale === "en" ? "In-Car Wi-Fi Hotspot" : "إنترنت لاسلكي داخل السيارة"}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                {locale === "en" ? "High speed internet connectivity for business travelers." : "اتصال إنترنت عالي السرعة لرجال الأعمال والمسافرين."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <StickyCTA />
      <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "#ffffff",
    padding: "5rem 0",
    borderBottom: "1px solid var(--border-color)",
    textAlign: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  heroTitle: {
    fontSize: "2.5rem",
    color: "#000000",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "#333333",
    maxWidth: "600px",
  },
  comfortGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  comfortCard: {
    padding: "2rem 1.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  comfortIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
};

