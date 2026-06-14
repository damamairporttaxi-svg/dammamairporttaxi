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
    {
      q: locale === "en" ? "What is the taxi fare from Dammam Airport to Al Khobar?" : "كم أجرة التاكسي من مطار الدمام إلى الخبر؟",
      a: locale === "en"
        ? "A private taxi from King Fahd International Airport (DMM) to Al Khobar starts from 150 SAR for a Toyota Camry Sedan. The distance is 60 km and travel time is approximately 45 minutes. The fare includes airport parking fees and VAT — no hidden charges."
        : "يبدأ سعر التاكسي الخاص من مطار الملك فهد الدولي إلى الخبر من 150 ريال للكامري. المسافة 60 كم ووقت السفر حوالي 45 دقيقة. السعر يشمل رسوم المواقف وضريبة القيمة المضافة — بدون رسوم خفية.",
    },
    {
      q: locale === "en" ? "How much is a taxi from Dammam to Bahrain?" : "كم تكلفة التاكسي من الدمام إلى البحرين؟",
      a: locale === "en"
        ? "Dammam to Bahrain (Manama) via the King Fahd Causeway starts from 350 SAR for a sedan. This includes all causeway tolls (~35 SAR). The distance is 85 km and the journey takes 1.5 to 2 hours. We deliver door-to-door to any address in Bahrain."
        : "يبدأ تاكسي الدمام إلى البحرين (المنامة) عبر جسر الملك فهد من 350 ريال للسيدان ويشمل جميع رسوم الجسر (~35 ريال). المسافة 85 كم والرحلة تستغرق 1.5 إلى 2 ساعة.",
    },
    {
      q: locale === "en" ? "How do I book a taxi from Dammam Airport?" : "كيف أحجز تاكسي من مطار الدمام؟",
      a: locale === "en"
        ? "Send us a WhatsApp message on +966 56 948 7569 with: your name, flight number, arrival date & time, destination, number of passengers, and preferred vehicle. You will receive a confirmation with driver details within minutes. No app download or registration needed."
        : "أرسل لنا رسالة واتساب على 7569 948 56 966+ مع: اسمك، رقم الرحلة، تاريخ ووقت الوصول، الوجهة، عدد الركاب، والسيارة المفضلة. ستتلقى تأكيداً مع تفاصيل السائق في دقائق. لا حاجة لتحميل تطبيق أو تسجيل.",
    },
    {
      q: locale === "en" ? "How far is Dammam Airport from Al Khobar, Dhahran, and Jubail?" : "كم تبعد مطار الدمام عن الخبر والظهران والجبيل؟",
      a: locale === "en"
        ? "Distances from King Fahd International Airport (DMM): Al Khobar — 60 km, 45 min, from 150 SAR. Dhahran (Aramco HQ) — 55 km, 40 min, from 150 SAR. Jubail Industrial City — 85 km, 55 min, from 200 SAR. Dammam City — 30 km, 25 min, from 120 SAR. All fares include parking and VAT."
        : "المسافات من مطار الملك فهد الدولي: الخبر — 60 كم، 45 دقيقة، من 150 ريال. الظهران (مقر أرامكو) — 55 كم، 40 دقيقة، من 150 ريال. الجبيل الصناعية — 85 كم، 55 دقيقة، من 200 ريال. مدينة الدمام — 30 كم، 25 دقيقة، من 120 ريال.",
    },
    {
      q: locale === "en" ? "Do you provide corporate taxi services for Saudi Aramco and SABIC?" : "هل تقدمون خدمات تاكسي مؤسسية لأرامكو السعودية وسابك؟",
      a: locale === "en"
        ? "Yes. We provide dedicated corporate accounts for Saudi Aramco, SABIC, RCJY, KFUPM, and all major Eastern Province companies. Benefits include: monthly VAT-compliant invoices, priority dispatch, English-speaking chauffeurs, GPS-tracked vehicles, and fleet-level bookings for large groups. Contact our corporate desk on WhatsApp to set up your account."
        : "نعم. نوفر حسابات مؤسسية مخصصة لأرامكو السعودية وسابك والهيئة الملكية وجامعة الملك فهد وجميع شركات المنطقة الشرقية الكبرى. المزايا: فواتير شهرية متوافقة مع ضريبة القيمة المضافة، إرسال ذو أولوية، سائقون يتحدثون الإنجليزية، سيارات مع GPS.",
    },
    {
      q: locale === "en" ? "Is Uber available at Dammam Airport and why choose a private taxi instead?" : "هل أوبر متاح في مطار الدمام ولماذا تختار التاكسي الخاص بدلاً منه؟",
      a: locale === "en"
        ? "Uber and Careem operate in Saudi Arabia but have key disadvantages for airport arrivals: surge pricing during peak hours and holidays, 45+ minute wait times at busy international arrivals, no flight tracking, no meet-and-greet service, and they cannot operate GCC cross-border routes. Our pre-booked private taxi offers a fixed fare agreed before travel, driver at arrivals with name board, live flight tracking, 60-minute free wait, and full GCC cross-border licensing."
        : "أوبر وكريم يعملان في السعودية لكن لهما عيوب رئيسية: أسعار متصاعدة خلال ساعات الذروة، أوقات انتظار 45+ دقيقة، لا تتبع للرحلات، لا استقبال. تاكسينا الخاص يوفر سعراً ثابتاً متفقاً عليه مسبقاً، سائق في صالة الوصول، تتبع الرحلة، 60 دقيقة انتظار مجانية.",
    },
    {
      q: locale === "en" ? "Do you serve Half Moon Bay, Qatif, and Ras Tanura from Dammam Airport?" : "هل تخدمون شاطئ نصف القمر والقطيف وراس تنورة من مطار الدمام؟",
      a: locale === "en"
        ? "Yes. We cover all Eastern Province destinations. Half Moon Bay: 88 km, 60–70 min, from 220 SAR. Qatif city & Tarout Island: 55 km, 45 min, from 150 SAR. Ras Tanura (Saudi Aramco terminal area): 65 km, 50 min, from 180 SAR. Contact us on WhatsApp for any destination not listed."
        : "نعم. نغطي جميع وجهات المنطقة الشرقية. شاطئ نصف القمر: 88 كم، 60-70 دقيقة، من 220 ريال. مدينة القطيف وجزيرة تاروت: 55 كم، 45 دقيقة، من 150 ريال. راس تنورة: 65 كم، 50 دقيقة، من 180 ريال.",
    },
    {
      q: locale === "en" ? "Can I take a taxi from Dammam to Riyadh, Jeddah, or Madinah?" : "هل يمكنني أخذ تاكسي من الدمام إلى الرياض وجدة والمدينة المنورة؟",
      a: locale === "en"
        ? "Yes. We operate long-distance intercity transfers across all of Saudi Arabia. Dammam to Riyadh: 400 km, 3.5–4 hrs, from 900 SAR. Dammam to Jeddah: 1,260 km, 12–13 hrs, from 4,500 SAR. Dammam to Madinah: 1,100 km, 10–11 hrs, from 4,000 SAR. Dammam to Mecca: 1,280 km, 12–13 hrs, from 4,800 SAR. All vehicles have Wi-Fi and scheduled rest stops for long journeys."
        : "نعم. نشغّل رحلات طويلة المسافة عبر المملكة. الدمام إلى الرياض: 400 كم، 3.5-4 ساعات، من 900 ريال. الدمام إلى جدة: 1,260 كم، 12-13 ساعة، من 4,500 ريال. الدمام إلى المدينة المنورة: 1,100 كم، من 4,000 ريال. الدمام إلى مكة: 1,280 كم، من 4,800 ريال.",
    },
    {
      q: locale === "en" ? "Do you offer Umrah taxi transfers from Dammam to Mecca and Madinah?" : "هل تقدمون خدمات تاكسي العمرة من الدمام إلى مكة والمدينة؟",
      a: locale === "en"
        ? "Yes. We provide dedicated Umrah and Ziyarah transfer services from Dammam to Mecca and Madinah. Our drivers are Saudi nationals who understand the spiritual importance of these journeys. No music is played unless requested. We also offer combined Mecca + Madinah packages. Book at least 48 hours in advance for religious route transfers."
        : "نعم. نقدم خدمات نقل العمرة والزيارة من الدمام إلى مكة والمدينة. سائقونا مواطنون سعوديون يدركون أهمية هذه الرحلات الروحية. لا تشغيل موسيقى إلا بطلب. نقدم أيضاً باقات مجمعة مكة + المدينة. احجز قبل 48 ساعة على الأقل.",
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

