"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function FAQsPageClient() {
  const { t, locale } = useLanguage();

  const generalFAQs = [
    {
      q: locale === "en" ? "How do I meet my driver at Dammam Airport (DMM)?" : "كيف ألتقي بالسائق الخاص بي في مطار الدمام (DMM)؟",
      a: locale === "en"
        ? "Your driver will monitor your flight status in real-time. Once you land, they will wait for you outside the arrival gate terminal with a nameboard. We also send the driver's contact details via WhatsApp 2 hours before pickup."
        : "سيقوم السائق بمراقبة حالة رحلتك الجوية في الوقت الفعلي. بمجرد هبوط الطائرة، سينتظرك خارج بوابة الوصول حاملاً لوحة باسمك. كما نرسل تفاصيل الاتصال بالسائق عبر الواتساب قبل ساعتين من موعد الرحلة.",
    },
    {
      q: locale === "en" ? "Are toll gates and customs border fees included in the price?" : "هل رسوم بوابات الطرق والرسوم الجمركية للحدود مشمولة في السعر؟",
      a: locale === "en"
        ? "Our pricing is transparent and flat-rate. For KSA routes, all highway tolls are included. For international cross-border routes (like Dammam to Bahrain via King Fahd Causeway), causeway bridge fees are included, but personal visa/entry fees must be paid by passengers directly."
        : "أسعارنا شفافة ومحددة. بالنسبة للمسارات داخل المملكة، فإن جميع رسوم الطرق السريعة مشمولة. بالنسبة للمسارات الدولية (مثل الدمام إلى البحرين عبر جسر الملك فهد)، فإن رسوم عبور الجسر مشمولة، ولكن يجب دفع رسوم التأشيرة/الدخول الشخصية من قبل الركاب مباشرة.",
    },
    {
      q: locale === "en" ? "How do we cross the border to Bahrain or Kuwait by taxi?" : "كيف يتم عبور الحدود إلى البحرين أو الكويت بواسطة التاكسي؟",
      a: locale === "en"
        ? "Our drivers are highly experienced with GCC border protocols. We hold all necessary commercial transport permits for Saudi and international border authorities. Your driver will guide you through the passport and custom control booths, so you stay comfortably inside the air-conditioned vehicle during inspection."
        : "سائقونا ذوو خبرة عالية ببروتوكولات حدود دول مجلس التعاون الخليجي. نحن نحمل جميع تصاريح النقل التجاري اللازمة للمملكة والحدود الدولية. سيرشدك السائق عبر كبائن مراقبة الجوازات والجمارك، لتظل مسترخياً داخل السيارة المكيفة أثناء إجراءات التفتيش والختم.",
    },
    {
      q: locale === "en" ? "What happens if my flight is delayed?" : "ماذا يحدث إذا تأخرت رحلتي الجوية؟",
      a: locale === "en"
        ? "We offer complimentary flight tracking on all airport pickup bookings. Your driver will adjust their arrival time automatically based on your actual landing status, with no extra waiting charges."
        : "نحن نوفر ميزة التتبع المجاني للرحلات الجوية في جميع حجوزات النقل من المطار. سيقوم السائق بتعديل وقت وصوله تلقائياً بناءً على موعد هبوط طائرتك الفعلي، دون أي رسوم انتظار إضافية.",
    },
    {
      q: locale === "en" ? "Can I modify or cancel my booking?" : "هل يمكنني تعديل أو إلغاء الحجز الخاص بي؟",
      a: locale === "en"
        ? "Yes. You can modify or cancel your transfer free of charge up to 12 hours before your scheduled pickup. Contact us via WhatsApp to make quick changes."
        : "نعم. يمكنك تعديل أو إلغاء الحجز مجاناً حتى 12 ساعة قبل موعد استلامك المحدد. يرجى التواصل معنا عبر الواتساب لإجراء أي تغييرات سريعة.",
    },
    {
      q: locale === "en" ? "What vehicles do you offer for family travel?" : "ما هي السيارات التي توفرونها للسفر العائلي؟",
      a: locale === "en"
        ? "For families, we recommend our VIP GMC Yukon (up to 6 passengers with 5 bags) or our Hyundai Staria Family Van (up to 8 passengers with 7 bags). Both vehicles offer spacious cargo room and tri-zone climate controls."
        : "للعائلات، نوصي بسيارة GMC Yukon VIP (حتى 6 ركاب مع 5 حقائب) أو سيارة الفان العائلية هيونداي ستاريا (حتى 8 ركاب مع 7 حقائب). توفر كلتا السيارتين مساحة تخزين واسعة للحقائب ونظام تكييف ثلاثي المناطق.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Header */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <span className="badge-gold">FAQ</span>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة والإجابات"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en"
              ? "Everything you need to know about our private airport transfers and GCC cross-border routes."
              : "كل ما تحتاج إلى معرفته حول خدمات توصيل المطارات الفاخرة ورحلات السفر عبر حدود الخليج."}
          </p>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container" style={styles.container}>
          <div style={styles.faqList}>
            {generalFAQs.map((faq, idx) => (
              <div key={idx} className="glass-card" style={styles.faqCard}>
                <h2 style={styles.faqQ}>{faq.q}</h2>
                <p style={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={styles.ctaBox} className="glass-card text-center">
            <h3 style={{ color: "var(--accent-gold)", marginBottom: "0.8rem" }}>
              {locale === "en" ? "Still have questions?" : "هل لا تزال لديك أسئلة أخرى؟"}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              {locale === "en"
                ? "Our support team is online 24/7. Ask us anything directly on WhatsApp."
                : "فريق الدعم لدينا متصل بالإنترنت ٢٤/٧. اسألنا عن أي شيء مباشرة عبر الواتساب."}
            </p>
            <a
              href="https://wa.me/966569487569"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ textDecoration: "none" }}
            >
              {t("whatsAppUs")}
            </a>
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
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url('/hero-bg.jpg') center/cover no-repeat",
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
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  faqCard: {
    padding: "2rem",
  },
  faqQ: {
    fontSize: "1.1rem",
    color: "#ffffff",
    marginBottom: "0.8rem",
    lineHeight: "1.4",
  },
  faqA: {
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
    lineHeight: "1.6",
  },
  ctaBox: {
    marginTop: "4rem",
    padding: "3rem 2rem",
    border: "1px solid rgba(245, 197, 24, 0.2)",
  },
};

