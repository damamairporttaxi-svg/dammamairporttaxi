"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StickyCTA } from "../../components/StickyCTA";

export default function TermsPage() {
  const { locale } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Terms of Service" : "شروط الخدمة"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en" ? "Last updated: May 24, 2026" : "آخر تحديث: ٢٤ مايو ٢٠٢٦"}
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container" style={styles.container}>
          <div style={styles.content}>
            <h2>{locale === "en" ? "1. Agreement to Terms" : "١. الموافقة على الشروط"}</h2>
            <p>
              {locale === "en"
                ? "By accessing our website and using our taxi booking services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our services."
                : "من خلال الوصول إلى موقعنا الإلكتروني واستخدام خدمات حجز التاكسي لدينا، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق عليها، يرجى الامتناع عن استخدام خدماتنا."}
            </p>

            <h2>{locale === "en" ? "2. Bookings & Confirmations" : "٢. الحجوزات والتأكيدات"}</h2>
            <p>
              {locale === "en"
                ? "All bookings made via our website form or WhatsApp are subject to availability. A booking is only considered confirmed once you receive a confirmation message from our dispatch team via WhatsApp or telephone."
                : "تخضع جميع الحجوزات التي تتم عبر نموذج الموقع الإلكتروني أو الواتساب لمدى توفر السيارات. ولا يعتبر الحجز مؤكداً إلا بعد تلقيك رسالة تأكيد من فريق العمليات لدينا عبر الواتساب أو الهاتف."}
            </p>

            <h2>{locale === "en" ? "3. Pricing & Tolls" : "٣. الأسعار ورسوم الطرق"}</h2>
            <p>
              {locale === "en"
                ? "Pricing estimates are provided based on standard routes and vehicle classes. Highway toll gates within Saudi Arabia are included. For Bahrain causeway bookings, causeway crossing bridge tolls are included, but passengers are responsible for visa fees, border custom taxes, and passenger insurance charges at passport controls."
                : "يتم توفير تقديرات الأسعار بناءً على المسارات القياسية وفئة السيارة المطلوبة. رسوم بوابات الطرق السريعة داخل المملكة مشمولة. بالنسبة لحجوزات جسر البحرين، فإن رسوم عبور الجسر مشمولة، ولكن يتحمل الركاب مسؤولية رسوم تأشيرات الدخول، والضرائب الجمركية، ورسوم التأمين الشخصي عند معابر الجوازات."}
            </p>

            <h2>{locale === "en" ? "4. Cancellation & Delay Policies" : "٤. سياسات الإلغاء والتأخير"}</h2>
            <p>
              {locale === "en"
                ? "Cancellations made up to 12 hours before the scheduled transfer are free of charge. For airport pickups, we track your flight status. We provide a complimentary waiting time of 60 minutes from actual landing. For standard pickups, the complimentary waiting time is 15 minutes."
                : "تعتبر الإلغاءات التي تتم قبل 12 ساعة من موعد التوصيل المحدد مجانية تماماً. بالنسبة للاستلام من المطار، نقوم بتتبع حالة رحلتك الجوية ونوفر فترة انتظار مجانية مدتها 60 دقيقة من وقت الهبوط الفعلي. بالنسبة لعمليات الاستلام العادية، تبلغ فترة الانتظار المجانية 15 دقيقة."}
            </p>

            <h2>{locale === "en" ? "5. Passenger Conduct" : "٥. سلوك الركاب"}</h2>
            <p>
              {locale === "en"
                ? "We reserve the right to refuse service to any passenger who is under the influence, displays aggressive behavior, or requests illegal routes or activities. Smoking and eating hot food are strictly prohibited inside our fleet vehicles."
                : "نحتفظ بالحق في رفض تقديم الخدمة لأي راكب يبدي سلوكاً عدوانياً أو يطلب مسارات أو أنشطة غير قانونية. يمنع منعاً باتاً التدخين وتناول الأطعمة الساخنة داخل سيارات الأسطول لضمان نظافتها."}
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

