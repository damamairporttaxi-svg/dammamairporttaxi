"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import Link from "next/link";

export function AboutPageClient() {
  const { t, locale } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Header */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <span className="badge-gold">{t("navAbout")}</span>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "About Dammam Airport Taxi" : "عن تاكسي مطار الدمام"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en"
              ? "Providing luxury, secure, and reliable airport transfers & GCC cross-border travel for over a decade."
              : "نقدم خدمات توصيل المطارات والسفر عبر حدود دول الخليج بفخامة وأمان وموثوقية لأكثر من عشر سنوات."}
          </p>
        </div>
      </section>

      {/* About Main Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container about-grid" style={styles.contentGrid}>
          {/* Main Info */}
          <div style={styles.textBlock}>
            <h2 style={styles.heading}>
              {locale === "en" ? "Who We Are" : "من نحن"}
            </h2>
            <p style={styles.paragraph}>
              {locale === "en"
                ? "Dammam Airport Taxi is the premier transportation service provider in the Eastern Province of Saudi Arabia. Based at King Fahd International Airport (DMM), we specialize in local airport transfers, intercity travel to Riyadh and other provinces, and luxury cross-border transfers to Bahrain, Kuwait, UAE, and Qatar."
                : "تعد شركة تاكسي مطار الدمام المزود الرائد لخدمات النقل والمواصلات الفاخرة في المنطقة الشرقية بالمملكة العربية السعودية. يقع مقرنا الرئيسي في مطار الملك فهد الدولي (DMM)، ونتميز بتقديم خدمات التوصيل المحلي للمطارات، السفر بين المدن إلى الرياض والمحافظات الأخرى، وخدمات النقل البري الدولي الفاخرة إلى البحرين، الكويت، الإمارات، وقطر."}
            </p>
            <p style={styles.paragraph}>
              {locale === "en"
                ? "Our focus is strictly on punctuality, safety, and passenger luxury. We maintain a fleet of modern, meticulously clean, and fully-insured vehicles. Driven by English and Arabic speaking professional chauffeurs, we ensure your journey is comfortable, professional, and entirely stress-free."
                : "ينصب تركيزنا بشكل كامل على دقة المواعيد، وسلامة الركاب، ورفاهيتهم. نحن نحافظ على أسطول سيارات حديث، نظيف ومعقم بالكامل، ومؤمن تأميناً شاملاً. نقوم بتشغيل رحلاتنا بواسطة سائقين محترفين يتحدثون العربية والإنجليزية لضمان رحلة مريحة ومهنية وخالية تماماً من المتاعب."}
            </p>
          </div>

          {/* Details Sidebar / Highlights */}
          <div className="glass-card" style={styles.infoCard}>
            <h3 style={{ ...styles.cardHeading, color: "var(--accent-gold)" }}>
              {locale === "en" ? "Our Core Values" : "قيمنا الأساسية"}
            </h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>✨ {locale === "en" ? "Luxury & Cleanliness" : "الفخامة والنظافة"}:</strong>{" "}
                {locale === "en" ? "Sanitized premium vehicles for executive class travel." : "سيارات فاخرة ومعقمة بالكامل لرحلات تليق بك."}
              </li>
              <li style={styles.listItem}>
                <strong>🕒 {locale === "en" ? "Punctuality" : "الالتزام بالوقت"}:</strong>{" "}
                {locale === "en" ? "Active flight tracking and strictly punctual pickups." : "متابعة مباشرة للرحلات الجوية والتزام تام بالمواعيد."}
              </li>
              <li style={styles.listItem}>
                <strong>🛂 {locale === "en" ? "GCC Border Experts" : "خبراء حدود الخليج"}:</strong>{" "}
                {locale === "en" ? "Fully permitted drivers for quick customs clearance." : "سائقون ذوو خبرة وتصاريح كاملة للتخليص الجمركي السريع."}
              </li>
              <li style={styles.listItem}>
                <strong>💳 {locale === "en" ? "Corporate Support" : "دعم الشركات والأعمال"}:</strong>{" "}
                {locale === "en" ? "Invoice systems and corporate transfers." : "أنظمة فوترة مرنة وتوصيل تنفيذي مخصص للشركات."}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container text-center">
          <h2 className="title-accent" style={{ display: "block" }}>
            {locale === "en" ? "Our Commitment to Safety" : "التزامنا التام بالسلامة والأمان"}
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            {locale === "en"
              ? "Your safety is our absolute priority. From vehicle maintenance to driver screening, we leave nothing to chance."
              : "سلامتكم هي أولويتنا المطلقة. من صيانة السيارات الدورية إلى فحص وتدريب السائقين، نحن لا نترك أي شيء للصدفة."}
          </p>

          <div style={styles.safetyGrid}>
            <div style={styles.safetyItem}>
              <div style={styles.safetyIcon}>🛡️</div>
              <h3>{locale === "en" ? "Comprehensive Insurance" : "تأمين شامل بالكامل"}</h3>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                {locale === "en" ? "Every trip is backed by full Saudi and GCC liability coverage." : "كل رحلة مغطاة بتأمين مسؤولية مدنية كامل في المملكة والخليج."}
              </p>
            </div>
            <div style={styles.safetyItem}>
              <div style={styles.safetyIcon}>🔧</div>
              <h3>{locale === "en" ? "Rigid Maintenance" : "صيانة دورية صارمة"}</h3>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                {locale === "en" ? "Weekly multi-point checks on brakes, tires, and cooling systems." : "فحوصات أسبوعية متعددة النقاط للمكابح، الإطارات، وأنظمة التبريد."}
              </p>
            </div>
            <div style={styles.safetyItem}>
              <div style={styles.safetyIcon}>👨‍✈️</div>
              <h3>{locale === "en" ? "Vetted Chauffeurs" : "سائقون معتمدون وفحص دقيق"}</h3>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                {locale === "en" ? "Background verified drivers with clean record history." : "سائقون معتمدون ومفحوصو السيرة والسلوك مع سجل قيادة نظيف."}
              </p>
            </div>
          </div>

          <div style={{ marginTop: "4rem" }}>
            <Link href="/#booking" className="btn btn-primary">
              {t("bookNow")}
            </Link>
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
    background: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.98)), url('/hero-bg.jpg') center/cover no-repeat",
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
    color: "#ffffff",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "var(--text-secondary)",
    maxWidth: "600px",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1.2fr",
    gap: "3rem",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#ffffff",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "var(--text-secondary)",
  },
  infoCard: {
    padding: "2.5rem 2rem",
    alignSelf: "start",
  },
  cardHeading: {
    fontSize: "1.3rem",
    marginBottom: "1.5rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  listItem: {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    lineHeight: "1.5",
  },
  safetyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2.5rem",
    marginTop: "3rem",
  },
  safetyItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  safetyIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
};

