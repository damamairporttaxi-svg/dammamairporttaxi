"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

interface Faq { q_en: string; q_ar: string; a_en: string; a_ar: string; link?: string; }

const CATEGORIES = [
  {
    id: "fares",
    title_en: "Taxi Fares & Pricing",
    title_ar: "أسعار التاكسي",
    faqs: [
      { q_en: "How much is a taxi from Dammam Airport to Khobar?", q_ar: "كم سعر التاكسي من مطار الدمام إلى الخبر؟", a_en: "A private taxi from King Fahd International Airport (DMM) to Al Khobar starts from 150 SAR for a standard Camry sedan. GMC Yukon SUV starts from 280 SAR. The journey is approximately 60 km and takes 45 minutes.", a_ar: "يبدأ سعر التاكسي الخاص من مطار الملك فهد الدولي إلى الخبر من ١٥٠ ريال للكامري، ومن ٢٨٠ ريال لSUV يوكن. المسافة حوالي ٦٠ كم وتستغرق ٤٥ دقيقة.", link: "/routes/dammam-airport-to-khobar" },
      { q_en: "What is the fare from Dammam Airport to Jubail?", q_ar: "كم أجرة التاكسي من مطار الدمام إلى الجبيل؟", a_en: "Taxi transfers from Dammam Airport to Jubail Industrial City start from 200 SAR for a sedan. The distance is approximately 85 km with a travel time of 55–70 minutes.", a_ar: "يبدأ التوصيل من مطار الدمام إلى مدينة الجبيل الصناعية من ٢٠٠ ريال للسيدان. المسافة حوالي ٨٥ كم وتستغرق ٥٥–٧٠ دقيقة.", link: "/routes/dammam-airport-to-jubail" },
      { q_en: "How much is a taxi from Dammam Airport to Dhahran?", q_ar: "كم سعر التاكسي من مطار الدمام إلى الظهران؟", a_en: "Transfers to Dhahran (including Saudi Aramco HQ) from Dammam Airport start from 150 SAR. Distance is 55 km, approximately 40 minutes.", a_ar: "يبدأ التوصيل إلى الظهران (بما في ذلك مقر أرامكو) من مطار الدمام من ١٥٠ ريال. المسافة ٥٥ كم وتستغرق ٤٠ دقيقة.", link: "/routes/dammam-airport-to-dhahran" },
      { q_en: "What is the taxi price from Dammam Airport to Riyadh?", q_ar: "كم سعر التاكسي من مطار الدمام إلى الرياض؟", a_en: "A private intercity taxi from Dammam Airport to Riyadh starts from 900 SAR for a sedan. The highway journey is 400 km, approximately 3.5–4 hours.", a_ar: "يبدأ التاكسي بين المدن من مطار الدمام إلى الرياض من ٩٠٠ ريال للسيدان. المسافة ٤٠٠ كم وتستغرق حوالي ٣.٥–٤ ساعات.", link: "/routes/dammam-to-riyadh" },
      { q_en: "How much does a taxi from Dammam to Bahrain cost?", q_ar: "كم تكلفة التاكسي من الدمام إلى البحرين؟", a_en: "A private taxi from Dammam or Dammam Airport to Bahrain (Manama) starts from 350 SAR for a sedan. This includes crossing via the King Fahd Causeway and all toll fees.", a_ar: "يبدأ التاكسي الخاص من الدمام أو مطاره إلى البحرين (المنامة) من ٣٥٠ ريال للسيدان، ويشمل العبور عبر جسر الملك فهد وجميع رسوم الجسر.", link: "/routes/dammam-to-bahrain" },
      { q_en: "What is the cheapest airport transfer in Dammam?", q_ar: "ما هو أرخص توصيل مطار في الدمام؟", a_en: "The most affordable pre-booked private airport transfer in Dammam starts from 120 SAR for local districts (e.g., Dammam city centre). We offer transparent fixed rates with no surge pricing.", a_ar: "أقل سعر للتوصيل المسبق الخاص من مطار الدمام يبدأ من ١٢٠ ريال للأحياء المحلية. نوفر أسعاراً ثابتة وشفافة بدون زيادات." },
    ] as Faq[],
  },
  {
    id: "distance",
    title_en: "Distances & Travel Times",
    title_ar: "المسافات وأوقات السفر",
    faqs: [
      { q_en: "How far is Dammam Airport from the city centre?", q_ar: "كم تبعد مطار الدمام عن مركز المدينة؟", a_en: "King Fahd International Airport is approximately 30–38 km from Dammam city centre, a drive of 25–38 minutes depending on traffic.", a_ar: "يبعد مطار الملك فهد الدولي حوالي ٣٠–٣٨ كم عن مركز مدينة الدمام، أي ٢٥–٣٨ دقيقة حسب حركة المرور." },
      { q_en: "How far is Dammam Airport from Khobar?", q_ar: "كم تبعد مطار الدمام عن الخبر؟", a_en: "Dammam Airport is 60 km from Al Khobar city centre, approximately 45 minutes by private taxi.", a_ar: "يبعد مطار الدمام ٦٠ كم عن مركز مدينة الخبر، أي حوالي ٤٥ دقيقة بالتاكسي الخاص.", link: "/routes/dammam-airport-to-khobar" },
      { q_en: "How far is it from Dammam to Bahrain?", q_ar: "كم المسافة من الدمام إلى البحرين؟", a_en: "Dammam to Bahrain (Manama) via the King Fahd Causeway is approximately 85 km door-to-door. Travel time is 1.5–2 hours including the causeway crossing.", a_ar: "من الدمام إلى البحرين (المنامة) عبر جسر الملك فهد حوالي ٨٥ كم. وقت السفر ١.٥–٢ ساعة بما في ذلك عبور الجسر.", link: "/routes/dammam-to-bahrain" },
      { q_en: "How long does it take to drive from Dammam to Kuwait?", q_ar: "كم تستغرق رحلة السيارة من الدمام إلى الكويت؟", a_en: "The drive from Dammam to Kuwait City is approximately 420 km and takes 4–4.5 hours via the Khafji border checkpoint.", a_ar: "تبلغ مسافة القيادة من الدمام إلى الكويت حوالي ٤٢٠ كم وتستغرق ٤–٤.٥ ساعات عبر منفذ الخفجي.", link: "/routes/dammam-to-kuwait" },
      { q_en: "How far is Half Moon Beach from Dammam?", q_ar: "كم تبعد شاطئ نصف القمر عن الدمام؟", a_en: "Half Moon Beach is approximately 88 km from Dammam Airport and about 55–70 minutes by private taxi.", a_ar: "يبعد شاطئ نصف القمر حوالي ٨٨ كم عن مطار الدمام وحوالي ٥٥–٧٠ دقيقة بالتاكسي الخاص.", link: "/dammam/half-moon-beach" },
    ] as Faq[],
  },
  {
    id: "booking",
    title_en: "Booking & Service Questions",
    title_ar: "أسئلة الحجز والخدمة",
    faqs: [
      { q_en: "How do I book a taxi from Dammam Airport?", q_ar: "كيف أحجز تاكسي من مطار الدمام؟", a_en: "Send us a WhatsApp message with your flight number, arrival date & time, number of passengers, destination, and preferred vehicle type. We confirm your booking with driver details within minutes.", a_ar: "أرسل لنا رسالة واتساب مع رقم رحلتك وتاريخ ووقت الوصول وعدد الركاب والوجهة ونوع السيارة المطلوب. نؤكد حجزك مع بيانات السائق في دقائق." },
      { q_en: "Is Uber available at Dammam Airport?", q_ar: "هل أوبر متاح في مطار الدمام؟", a_en: "Uber operates in Saudi Arabia and may be available at Dammam Airport. However, surge pricing during peak times can make costs unpredictable. Our pre-booked private taxi offers fixed rates guaranteed before you arrive, a named driver waiting at arrivals, and free flight delay monitoring.", a_ar: "يعمل أوبر في المملكة العربية السعودية وقد يكون متاحاً في مطار الدمام. ولكن الأسعار المتغيرة في أوقات الذروة تجعل التكاليف غير متوقعة. تاكسينا المسبق يوفر أسعاراً ثابتة مضمونة قبل وصولك وسائقاً بالاسم في صالة الوصول." },
      { q_en: "Can I book a taxi from Dammam Airport to Bahrain?", q_ar: "هل يمكنني حجز تاكسي من مطار الدمام إلى البحرين؟", a_en: "Yes. We specialise in cross-border taxi transfers from Dammam Airport to Bahrain via the King Fahd Causeway. Our drivers handle all toll fees and are experienced with the causeway border process.", a_ar: "نعم. نتخصص في التوصيل عبر الحدود من مطار الدمام إلى البحرين عبر جسر الملك فهد. سائقونا يتولون جميع رسوم الجسر ولديهم خبرة في إجراءات العبور.", link: "/routes/dammam-to-bahrain" },
      { q_en: "Do you monitor flight delays at Dammam Airport?", q_ar: "هل تتابعون تأخير الرحلات في مطار الدمام؟", a_en: "Yes. Once you provide your flight number at booking, our dispatch team tracks your flight in real time. If your flight is delayed, your driver's arrival is automatically adjusted. No extra charges for delays.", a_ar: "نعم. عند تقديم رقم رحلتك وقت الحجز، يتابع فريقنا رحلتك في الوقت الفعلي. في حال التأخير، يُعدَّل وصول سائقك تلقائياً. لا رسوم إضافية على التأخير." },
      { q_en: "How long is the free waiting time at Dammam Airport?", q_ar: "كم مدة الانتظار المجاني في مطار الدمام؟", a_en: "We offer 60 minutes of complimentary waiting time from the moment your flight lands, giving you ample time to collect luggage and clear customs without any extra charges.", a_ar: "نوفر ٦٠ دقيقة انتظار مجاناً من لحظة هبوط طائرتك، مما يمنحك وقتاً كافياً لاستلام أمتعتك وإنهاء إجراءات الجمارك دون أي رسوم إضافية." },
      { q_en: "Can I cancel or modify my Dammam airport taxi booking?", q_ar: "هل يمكنني إلغاء أو تعديل حجز التاكسي في مطار الدمام؟", a_en: "Yes. You can cancel or modify your booking free of charge up to 6 hours before the scheduled pickup time by contacting us on WhatsApp.", a_ar: "نعم. يمكنك إلغاء أو تعديل حجزك مجاناً حتى ٦ ساعات قبل موعد الاستلام المحدد عبر التواصل معنا على واتساب." },
    ] as Faq[],
  },
  {
    id: "vehicles",
    title_en: "Vehicles & Comfort",
    title_ar: "السيارات والراحة",
    faqs: [
      { q_en: "What type of taxis are available at Dammam Airport?", q_ar: "ما أنواع التاكسي المتاحة في مطار الدمام؟", a_en: "We offer four vehicle classes: Standard Sedan (Toyota Camry, 4 passengers), VIP SUV (GMC Yukon, 6 passengers), Family Van (Hyundai Staria, 8 passengers), and Luxury Class (Mercedes S-Class or similar).", a_ar: "نوفر أربع فئات: سيدان قياسية (كامري، ٤ ركاب)، SUV فاخر (يوكن، ٦ ركاب)، فان عائلي (ستاريا، ٨ ركاب)، وفئة فاخرة (مرسيدس S-Class).", link: "/fleet" },
      { q_en: "Are child safety seats available in Dammam Airport taxis?", q_ar: "هل مقاعد أمان الأطفال متاحة في تاكسي مطار الدمام؟", a_en: "Yes. We provide complimentary infant and toddler car seats upon advance request at the time of booking. Please mention your requirements in the special notes field.", a_ar: "نعم. نوفر مقاعد أمان للرضع والأطفال الصغار مجاناً عند الطلب المسبق وقت الحجز." },
      { q_en: "Is Wi-Fi available in Dammam Airport taxis?", q_ar: "هل يتوفر واي فاي في تاكسي مطار الدمام؟", a_en: "Yes. All our vehicles are equipped with in-car Wi-Fi hotspot, USB charging ports, and complimentary bottled water for passengers.", a_ar: "نعم. جميع سياراتنا مجهزة بنقطة اتصال واي فاي ومنافذ شحن USB ومياه معبأة مجانية للركاب." },
      { q_en: "Do Dammam Airport taxis have air conditioning?", q_ar: "هل سيارات تاكسي مطار الدمام مكيفة الهواء؟", a_en: "Yes. All vehicles are fully air-conditioned with multi-zone climate control, ensuring comfort even in Dammam's extreme summer heat.", a_ar: "نعم. جميع السيارات مجهزة بتكييف هواء كامل متعدد المناطق، مما يضمن الراحة حتى في حر صيف الدمام الشديد." },
    ] as Faq[],
  },
  {
    id: "gcc",
    title_en: "GCC Border Crossings",
    title_ar: "عبور حدود الخليج",
    faqs: [
      { q_en: "What documents do I need for a taxi crossing to Bahrain?", q_ar: "ما المستندات المطلوبة للتاكسي عبر الحدود إلى البحرين؟", a_en: "For Bahrain: Saudi citizens and GCC nationals need their National ID. Expats need a valid passport plus active Saudi exit/re-entry visa. Bahrain eVisa or visa on arrival required for most nationalities.", a_ar: "للبحرين: يحتاج السعوديون ومواطنو الخليج بطاقة الهوية الوطنية. المقيمون يحتاجون جواز سفر ساري وتأشيرة خروج وعودة. تأشيرة بحرين إلكترونية أو عند الوصول مطلوبة لمعظم الجنسيات.", link: "/gcc-border-crossing" },
      { q_en: "How long does crossing the King Fahd Causeway take?", q_ar: "كم تستغرق رحلة عبور جسر الملك فهد؟", a_en: "The King Fahd Causeway crossing typically takes 30–60 minutes for document checks and customs clearance. During peak weekends and holidays it can take 1–3 hours. Our drivers are experienced with all procedures.", a_ar: "يستغرق عبور جسر الملك فهد عادةً ٣٠–٦٠ دقيقة لفحص المستندات والجمارك. في أوقات الذروة والإجازات قد يصل إلى ١–٣ ساعات." },
      { q_en: "Do your drivers have GCC border crossing permits?", q_ar: "هل سائقوكم يمتلكون تصاريح عبور حدود الخليج؟", a_en: "Yes. All our cross-border drivers hold valid GCC cross-border transport permits, comprehensive border insurance, and are fully experienced with all GCC border checkpoints.", a_ar: "نعم. جميع سائقينا عبر الحدود يمتلكون تصاريح نقل خليجي سارية وتأمين حدودي شامل وخبرة كاملة بجميع منافذ الخليج." },
    ] as Faq[],
  },
];

const SCHEMA_FAQS = CATEGORIES.flatMap(cat =>
  cat.faqs.map(f => ({
    "@type": "Question",
    name: f.q_en,
    acceptedAnswer: { "@type": "Answer", text: f.a_en },
  }))
);

export function VoiceSearchFaqsClient() {
  const { locale } = useLanguage();
  const ar = locale === "ar";
  const [openIdx, setOpenIdx] = useState<string | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SCHEMA_FAQS,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)" }}>
        <Navbar />

        {/* Hero */}
        <section style={s.hero}>
          <div className="container" style={s.heroInner}>
            <span className="badge-gold">{ar ? "الأسئلة الشائعة" : "FAQ Hub"}</span>
            <h1 style={s.h1}>
              {ar
                ? "كل أسئلتك عن تاكسي مطار الدمام — مجاب عنها"
                : "Every Dammam Airport Taxi Question — Answered"}
            </h1>
            <p style={s.heroP}>
              {ar
                ? "دليلك الشامل للأسعار، المسافات، الحجز، السيارات، وعبور حدود الخليج — محسّن للبحث الصوتي ومساعدي الذكاء الاصطناعي."
                : "Your complete guide to fares, distances, booking, vehicles & GCC borders — optimised for voice search and AI assistants."}
            </p>
            <div style={s.heroStats}>
              <span style={s.heroStat}>
                <strong style={{ color: "#0C58D1" }}>{CATEGORIES.reduce((a, c) => a + c.faqs.length, 0)}+</strong>{" "}
                {ar ? "سؤال مجاب" : "Questions Answered"}
              </span>
              <span style={s.heroStat}>
                <strong style={{ color: "#0C58D1" }}>{CATEGORIES.length}</strong>{" "}
                {ar ? "فئات" : "Categories"}
              </span>
            </div>
          </div>
        </section>

        {/* Category quick-links */}
        <div style={s.catBar}>
          <div className="container" style={s.catBarInner}>
            {CATEGORIES.map(cat => (
              <a key={cat.id} href={`#${cat.id}`} style={s.catLink}>
                {ar ? cat.title_ar : cat.title_en}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ sections */}
        <main style={s.main}>
          <div className="container" style={s.mainInner}>
            {CATEGORIES.map(cat => (
              <section key={cat.id} id={cat.id} style={s.section}>
                <h2 style={s.sectionTitle}>
                  {ar ? cat.title_ar : cat.title_en}
                </h2>

                {cat.faqs.map((faq, i) => {
                  const key = `${cat.id}-${i}`;
                  const isOpen = openIdx === key;
                  return (
                    <div key={key} style={s.faqItem}>
                      <button
                        style={{ ...s.faqQ, ...(isOpen ? s.faqQOpen : {}) }}
                        onClick={() => setOpenIdx(isOpen ? null : key)}
                      >
                        <span style={{ flex: 1, textAlign: "left" }}>
                          {ar ? faq.q_ar : faq.q_en}
                        </span>
                        <span style={{ color: "#0C58D1", fontWeight: 800, marginLeft: "0.75rem", fontSize: "1.2rem" }}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div style={s.faqA}>
                          <p style={{ margin: 0, lineHeight: 1.7 }}>{ar ? faq.a_ar : faq.a_en}</p>
                          {faq.link && (
                            <Link href={faq.link} style={s.faqLink}>
                              {ar ? "اعرف المزيد ←" : "Learn more →"}
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </section>
            ))}

            {/* CTA */}
            <div style={s.cta}>
              <h2 style={s.ctaH2}>{ar ? "جاهز للحجز؟" : "Ready to Book?"}</h2>
              <p style={s.ctaP}>
                {ar
                  ? "تواصل معنا الآن عبر واتساب وسنرتب رحلتك في دقائق."
                  : "Contact us via WhatsApp and we'll arrange your transfer in minutes."}
              </p>
              <div style={s.ctaBtns}>
                <Link href="https://wa.me/966560273828" target="_blank" rel="noopener noreferrer" style={s.btnWa}>
                  {ar ? "احجز عبر واتساب" : "Book via WhatsApp"}
                </Link>
                <Link href="/routes" style={s.btnRoutes}>
                  {ar ? "عرض كل الوجهات" : "View All Routes"}
                </Link>
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

const s: Record<string, React.CSSProperties> = {
  hero: {
    background: "radial-gradient(ellipse at 50% 30%, rgba(40,30,0,0.8) 0%, #080808 65%)",
    padding: "4.5rem 0 3rem",
    borderBottom: "1px solid var(--border-color)",
  },
  heroInner: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.2rem" },
  h1: { fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2, maxWidth: "750px" },
  heroP: { fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.7 },
  heroStats: { display: "flex", gap: "2rem" },
  heroStat: { fontSize: "0.9rem", color: "var(--text-secondary)" },
  catBar: {
    backgroundColor: "var(--bg-secondary)",
    borderBottom: "1px solid var(--border-color)",
    padding: "0.9rem 0",
    position: "sticky", top: "60px", zIndex: 40,
    overflowX: "auto",
  },
  catBarInner: { display: "flex", gap: "0.5rem", flexWrap: "nowrap" },
  catLink: {
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: "0.45rem 1rem", borderRadius: "50px",
    border: "1px solid var(--border-color)",
    color: "var(--text-secondary)", textDecoration: "none",
    fontSize: "0.82rem", fontWeight: 500, whiteSpace: "nowrap",
    transition: "all 0.18s",
  },
  main: { flex: 1, padding: "3rem 0" },
  mainInner: { maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" },
  section: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  sectionTitle: {
    fontSize: "1.2rem", fontWeight: 700, color: "#0C58D1",
    marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem",
    borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem",
  },
  faqItem: { borderRadius: "8px", overflow: "hidden" },
  faqQ: {
    width: "100%", display: "flex", alignItems: "center",
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    padding: "1rem 1.25rem", cursor: "pointer",
    fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 600,
    borderRadius: "8px", textAlign: "left",
    transition: "border-color 0.2s",
  },
  faqQOpen: {
    borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
    borderColor: "#0C58D1",
  },
  faqA: {
    backgroundColor: "rgba(245,197,24,0.04)",
    border: "1px solid #0C58D1",
    borderTop: "none",
    borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px",
    padding: "1rem 1.25rem",
    fontSize: "0.9rem", color: "var(--text-secondary)",
  },
  faqLink: {
    display: "inline-block", marginTop: "0.75rem",
    color: "#0C58D1", fontWeight: 700, fontSize: "0.85rem",
    textDecoration: "none",
  },
  cta: {
    background: "#ffffff", borderTop: "1px solid #e5e7eb",
    borderRadius: "16px", padding: "2.5rem",
    textAlign: "center",
  },
  ctaH2: { fontSize: "1.5rem", fontWeight: 800, color: "#000000", marginBottom: "0.5rem" },
  ctaP: { color: "#333333", marginBottom: "1.5rem" },
  ctaBtns: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" },
  btnWa: {
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    backgroundColor: "#25d366", color: "#ffffff",
    padding: "0.8rem 1.8rem", borderRadius: "8px",
    fontWeight: 700, textDecoration: "none", fontSize: "0.95rem",
  },
  btnRoutes: {
    display: "inline-flex", alignItems: "center",
    border: "2px solid rgba(255,255,255,0.6)", color: "var(--text-primary)",
    padding: "0.8rem 1.8rem", borderRadius: "8px",
    fontWeight: 700, textDecoration: "none", fontSize: "0.95rem",
    backgroundColor: "transparent",
  },
};
