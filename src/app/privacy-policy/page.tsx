"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StickyCTA } from "../../components/StickyCTA";

export default function PrivacyPolicyPage() {
  const { locale } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en" ? "Last updated: May 24, 2026" : "آخر تحديث: ٢٤ مايو ٢٠٢٦"}
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container" style={styles.container}>
          <div style={styles.content}>
            <h2>{locale === "en" ? "1. Information We Collect" : "١. المعلومات التي نجمعها"}</h2>
            <p>
              {locale === "en"
                ? "We collect information you provide directly to us when booking a taxi transfer. This includes your name, phone number, pickup and dropoff locations, travel date, time, passenger and luggage counts, and any special requests."
                : "نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند حجز خدمة التوصيل. يتضمن ذلك اسمك، ورقم هاتفك، ومواقع الاستلام والتوصيل، وتاريخ ووقت السفر، وعدد الركاب والحقائب، وأي طلبات خاصة."}
            </p>

            <h2>{locale === "en" ? "2. How We Use Your Information" : "٢. كيف نستخدم معلوماتك"}</h2>
            <p>
              {locale === "en"
                ? "We use the collected information solely to process, manage, and coordinate your taxi bookings. Your phone number is used to contact you via WhatsApp or voice calls to confirm pickup details, share driver contact information, and coordinates."
                : "نستخدم المعلومات التي نجمعها فقط لمعالجة حجوزات التاكسي وإدارتها وتنسيقها. يتم استخدام رقم هاتفك للتواصل معك عبر الواتساب أو المكالمات الصوتية لتأكيد تفاصيل الاستلام ومشاركة معلومات السائق والإحداثيات."}
            </p>

            <h2>{locale === "en" ? "3. Data Sharing & Security" : "٣. مشاركة البيانات وأمنها"}</h2>
            <p>
              {locale === "en"
                ? "We do not sell, trade, or rent your personal information to third parties. We share booking information only with our dispatched drivers to execute the transport service. All data is protected with industry-standard secure transfer protocols."
                : "نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. نشارك معلومات الحجز فقط مع سائقينا لتنفيذ خدمة النقل. جميع البيانات محمية ببروتوكولات نقل آمنة قياسية في الصناعة."}
            </p>

            <h2>{locale === "en" ? "4. Cookies Policy" : "٤. سياسة ملفات تعريف الارتباط"}</h2>
            <p>
              {locale === "en"
                ? "We use minor browser cookies to remember your language preferences (English or Arabic) for a better user experience on future visits."
                : "نستخدم ملفات تعريف الارتباط البسيطة في المتصفح لتذكر لغتك المفضلة (العربية أو الإنجليزية) لتقديم تجربة مستخدم أفضل في الزيارات المستقبلية."}
            </p>

            <h2>{locale === "en" ? "5. Contact Us" : "٥. اتصل بنا"}</h2>
            <p>
              {locale === "en"
                ? "If you have any questions about this Privacy Policy, please contact us at info@dammamairporttaxi.com."
                : "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر البريد الإلكتروني info@dammamairporttaxi.com."}
            </p>
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
    padding: "4rem 0",
    borderBottom: "1px solid var(--border-color)",
    textAlign: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  heroTitle: {
    fontSize: "2.2rem",
    color: "#ffffff",
  },
  heroSub: {
    fontSize: "0.95rem",
    color: "var(--text-muted)",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    color: "var(--text-secondary)",
    lineHeight: "1.7",
  },
};

