"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StickyCTA } from "../components/StickyCTA";
import { BookingForm } from "../components/BookingForm";
import { FleetShowcase } from "../components/FleetShowcase";
import { routesData } from "../data/routesData";
import { RelatedRoutes } from "../components/RelatedRoutes";
import Link from "next/link";

export function HomePageClient() {
  const { t, locale, isRtl } = useLanguage();

  const handleBookNowScroll = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleFleetScroll = () => {
    const el = document.getElementById("fleet-showcase");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container hero-grid" style={styles.heroGrid}>
          <div style={styles.heroTextCol}>
            <span className="badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              {locale === "en" ? "Top Rated KSA Transfer" : "خدمة التوصيل الأولى بالمملكة"}
            </span>
            <h1 style={styles.heroTitle}>
              {locale === "en" ? (
                <>Dammam Airport <span style={{ color: "var(--accent-gold)" }}>Transfers</span> & GCC Services</>
              ) : (
                <>خدمات <span style={{ color: "var(--accent-gold)" }}>تاكسي مطار الدمام</span> الفاخرة والنقل البري للخليج</>
              )}
            </h1>
            <p style={styles.heroSub}>{t("heroSub")}</p>

            <div style={styles.valueProps}>
              <span style={styles.valueItem}>✓ {locale === "en" ? "Instant WhatsApp Booking" : "حجز فوري بالواتساب"}</span>
              <span style={styles.valueItem}>✓ {locale === "en" ? "Free Flight Tracking" : "تتبع مجاني للرحلات"}</span>
              <span style={styles.valueItem}>✓ {locale === "en" ? "24/7 Support" : "دعم على مدار الساعة"}</span>
            </div>

            <div style={styles.heroBtnGroup}>
              <button onClick={handleBookNowScroll} className="btn btn-primary" style={{ padding: "0.9rem 1.8rem", fontSize: "1.05rem", display: "flex", alignItems: "center" }}>
                {t("heroActionBook")}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: isRtl ? "0" : "8px", marginRight: isRtl ? "8px" : "0" }}><line x1={isRtl ? "19" : "5"} y1="12" x2={isRtl ? "5" : "19"} y2="12"></line><polyline points={isRtl ? "12 5 5 12 12 19" : "12 5 19 12 12 19"}></polyline></svg>
              </button>
              <button onClick={handleFleetScroll} className="btn btn-secondary" style={{ padding: "0.9rem 1.8rem", fontSize: "1.05rem" }}>
                {t("heroActionFleet")}
              </button>
            </div>

            <div className="glass-card" style={styles.heroStatsCard}>
              <div style={styles.heroStatItem}>
                <strong style={styles.heroStatVal}>{t("statCompletedVal")}</strong>
                <span style={styles.heroStatLbl}>{t("statCompleted")}</span>
              </div>
              <div style={styles.heroStatItem}>
                <strong style={styles.heroStatVal}>{t("statDriversVal")}</strong>
                <span style={styles.heroStatLbl}>{t("statDrivers")}</span>
              </div>
              <div style={styles.heroStatItem}>
                <strong style={styles.heroStatVal}>{t("statRatingVal")}</strong>
                <span style={styles.heroStatLbl}>{t("statRating")}</span>
              </div>
            </div>
          </div>

          <div style={styles.heroFormCol}>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div style={styles.trustStrip}>
        <div className="container" style={styles.trustInner}>
          {[
            { en: "Government Licensed",   ar: "مرخص رسمياً" },
            { en: "Live GPS Tracking",      ar: "تتبع GPS مباشر" },
            { en: "Free Meet & Greet",      ar: "استقبال مجاني بالمطار" },
            { en: "60-Min Free Wait",       ar: "60 دقيقة انتظار مجاناً" },
            { en: "Fixed Rates — No Surge", ar: "أسعار ثابتة بلا زيادة" },
          ].map((item, i) => (
            <div key={i} style={styles.trustItem}>
              <span style={styles.trustText}>{locale === "en" ? item.en : item.ar}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section style={styles.whySection} className="section-padding">
        <div className="container text-center">
          <span className="badge-gold" style={{ marginBottom: "1rem" }}>{locale === "en" ? "Our Benefits" : "مميزاتنا"}</span>
          <h2 className="title-accent" style={{ display: "block" }}>{t("whyTitle")}</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 4rem auto" }}>{t("whySub")}</p>

          <div style={styles.whyGrid}>
            {[
              { title: t("whyCard1Title"), desc: t("whyCard1Desc") },
              { title: t("whyCard2Title"), desc: t("whyCard2Desc") },
              { title: t("whyCard3Title"), desc: t("whyCard3Desc") },
              { title: t("whyCard4Title"), desc: t("whyCard4Desc") },
            ].map((card, idx) => (
              <div key={idx} className="glass-card" style={styles.whyCard}>
                <h3 style={styles.whyCardTitle}>{card.title}</h3>
                <p style={styles.whyCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={styles.howSection}>
        <div className="container text-center">
          <span className="badge-gold" style={{ marginBottom: "1rem" }}>
            {locale === "en" ? "Simple Process" : "خطوات بسيطة"}
          </span>
          <h2 className="title-accent" style={{ display: "block" }}>
            {locale === "en" ? "Book in 3 Easy Steps" : "احجز بـ 3 خطوات سهلة"}
          </h2>
          <p style={{ maxWidth: "550px", margin: "0 auto 4rem auto" }}>
            {locale === "en"
              ? "No apps, no registration — just send a WhatsApp message and you're all set."
              : "لا تطبيقات، لا تسجيل — أرسل رسالة واتساب فقط وستكون جاهزاً للرحلة."}
          </p>

          <div style={styles.stepsGrid}>
            {[
              {
                num: "01",
                en_title: "Send WhatsApp",
                ar_title: "أرسل واتساب",
                en_desc: "Share your pickup point, destination, date, time & preferred vehicle class.",
                ar_desc: "أرسل موقع الاستلام، الوجهة، التاريخ، الوقت وفئة السيارة المطلوبة.",
              },
              {
                num: "02",
                en_title: "Instant Confirmation",
                ar_title: "تأكيد فوري",
                en_desc: "Receive confirmed booking with driver name, car plate & fixed fare — in minutes.",
                ar_desc: "تلقَّ تأكيداً فورياً مع اسم السائق ورقم اللوحة والأجرة الثابتة — في دقائق.",
              },
              {
                num: "03",
                en_title: "Enjoy Your Ride",
                ar_title: "استمتع برحلتك",
                en_desc: "Your driver arrives on time, greets you by name, and handles all the logistics.",
                ar_desc: "سائقك يصل في الوقت المحدد، يستقبلك باسمك، ويتولى كل الترتيبات اللوجستية.",
              },
            ].map((step, i) => (
              <div key={i} className="glass-card" style={styles.stepCard}>
                <span style={styles.stepNum}>{step.num}</span>
                <h3 style={styles.stepTitle}>{locale === "en" ? step.en_title : step.ar_title}</h3>
                <p style={styles.stepDesc}>{locale === "en" ? step.en_desc : step.ar_desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <div id="fleet-showcase">
        <FleetShowcase showPrices={false} />
      </div>

      {/* Popular Routes Section */}
      <section id="routes" className="section-padding" style={styles.routesSection}>
        <div className="container text-center">
          <span className="badge-gold" style={{ marginBottom: "1rem" }}>{locale === "en" ? "Destinations" : "الوجهات"}</span>
          <h2 className="title-accent" style={{ display: "block" }}>{t("routesTitle")}</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 4rem auto" }}>{t("routesSub")}</p>

          <div style={styles.routesGrid}>
            {routesData.slice(0, 6).map((route, idx) => {
              const rName = locale === "en" ? route.name.en : route.name.ar;
              const rDist = locale === "en" ? route.distance.en : route.distance.ar;
              const rDur  = locale === "en" ? route.duration.en : route.duration.ar;
              return (
                <div key={idx} className="glass-card" style={styles.routeCard}>
                  <h3 style={styles.routeCardTitle}>{rName}</h3>
                  <div style={styles.routeDetails}>
                    <div style={styles.routeDetailItem}>
                      <span style={styles.routeDetailLabel}>{t("distanceLabel")}:</span>
                      <span style={styles.routeDetailValue}>{rDist}</span>
                    </div>
                    <div style={styles.routeDetailItem}>
                      <span style={styles.routeDetailLabel}>{t("travelTime")}:</span>
                      <span style={styles.routeDetailValue}>{rDur}</span>
                    </div>
                  </div>
                  <Link href={`/routes/${route.slug}`} className="btn btn-secondary" style={styles.routeBtn}>
                    {t("viewRouteDetails")}
                  </Link>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {locale === "en"
                ? `+ ${routesData.length - 6} more routes available`
                : `+ ${routesData.length - 6} وجهة إضافية متاحة`}
            </p>
            <Link href="/routes" className="btn btn-primary" style={{ padding: "0.8rem 2.5rem", fontSize: "1rem" }}>
              {locale === "en" ? "View All Routes →" : "← عرض جميع الوجهات"}
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section style={styles.waBanner}>
        <div className="container" style={styles.waInner}>
          <div>
            <h2 style={styles.waTitle}>
              {locale === "en" ? "Ready to Book? Chat with Us Now" : "جاهز للحجز؟ تواصل معنا الآن"}
            </h2>
            <p style={styles.waSub}>
              {locale === "en"
                ? "Available 24/7 — average response time under 2 minutes."
                : "متاحون 24/7 — متوسط وقت الرد أقل من دقيقتين."}
            </p>
          </div>
          <Link
            href="https://wa.me/966569487569"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={styles.waBtn}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.277-1.497A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.492-5.19-1.352l-.374-.222-3.726.888.944-3.638-.244-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            {locale === "en" ? "Book on WhatsApp" : "احجز عبر واتساب"}
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={styles.testimonialsSection}>
        <div className="container text-center">
          <span className="badge-gold" style={{ marginBottom: "1rem" }}>{locale === "en" ? "Reviews" : "آراء العملاء"}</span>
          <h2 className="title-accent" style={{ display: "block" }}>{t("testTitle")}</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 4rem auto" }}>{t("testSub")}</p>

          <div style={styles.testGrid}>
            {[
              { text: t("review1"), author: t("review1Author") },
              { text: t("review2"), author: t("review2Author") },
              { text: t("review3"), author: t("review3Author") },
            ].map((rev, idx) => (
              <div key={idx} className="glass-card" style={styles.testCard}>
                <div style={styles.stars}>★★★★★</div>
                <p style={styles.testText}>&ldquo;{rev.text}&rdquo;</p>
                <strong style={styles.testAuthor}>{rev.author}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge-gold" style={{ marginBottom: "1rem" }}>FAQ</span>
            <h2 className="title-accent" style={{ display: "block" }}>{t("faqTitle")}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 4rem auto" }}>{t("faqSub")}</p>
          </div>
          <div style={styles.faqList}>
            {[
              { q: t("faq1Q"), a: t("faq1A") },
              { q: t("faq2Q"), a: t("faq2A") },
              { q: t("faq3Q"), a: t("faq3A") },
              { q: t("faq4Q"), a: t("faq4A") },
              { q: t("faq5Q"), a: t("faq5A") },
            ].map((faq, idx) => (
              <div key={idx} style={styles.faqItem}>
                <h3 style={styles.faqQ}>{faq.q}</h3>
                <p style={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article */}
      <section style={styles.articleSection}>
        <div className="container">
          <article style={styles.article}>

            <h2 style={styles.articleH2}>
              Dammam Airport Taxi — The Complete Guide to Private Transfers from King Fahd International Airport (DMM)
            </h2>
            <p style={styles.articleP}>
              King Fahd International Airport (IATA: DMM) is the gateway to Saudi Arabia's Eastern Province — the heartland of the Kingdom's oil & gas industry and home to Dammam, Al Khobar, Dhahran, Jubail, and the King Fahd Causeway to Bahrain. Whether you are a corporate traveller arriving for meetings at Saudi Aramco, an expatriate family relocating to the Eastern Province, or a tourist heading onward to Bahrain or the UAE, finding a reliable, fixed-rate private taxi from Dammam Airport is your first priority after landing. This guide covers everything you need to know about Dammam Airport taxi services, prices, routes, and how to book in minutes via WhatsApp.
            </p>

            <h2 style={styles.articleH2}>About King Fahd International Airport (DMM)</h2>
            <p style={styles.articleP}>
              King Fahd International Airport — locally known as Matar Al-Malik Fahd Al-Dawli (مطار الملك فهد الدولي) — opened on 28 November 1999 and serves as the primary commercial airport for Dammam, Al Khobar, Dhahran, Qatif, Jubail, and the broader Eastern Province. With a total land area of 780 square kilometres, DMM holds the record as the <strong>largest airport in the world by total land area</strong> — larger than the entire country of Bahrain. Despite its scale, the passenger terminals are efficient, well-signposted, and equipped with fast-track immigration lanes for Saudi citizens and GCC nationals.
            </p>
            <p style={styles.articleP}>
              The airport handles approximately 9 million passengers annually across both its domestic and international terminals. Major carriers operating at DMM include Saudia (Saudi Arabian Airlines), flynas, flyadeal, Qatar Airways, Emirates, Lufthansa, Turkish Airlines, Air Arabia, and Gulf Air. The airport is located approximately 35 km north-west of Dammam city centre and 25 km from Al Khobar — making a pre-booked private taxi the most convenient and cost-effective arrival transport option.
            </p>

            <h2 style={styles.articleH2}>Why Book a Private Taxi from Dammam Airport?</h2>
            <p style={styles.articleP}>
              Arrivals at King Fahd International Airport have several ground transport options: ride-hailing apps such as Uber or Careem, unregulated street taxis queuing outside the terminal, hotel shuttles, or a pre-booked private airport taxi. For business travellers and families with luggage, a pre-booked Dammam Airport taxi offers clear advantages that no other option can match.
            </p>
            <p style={styles.articleP}>
              <strong>Fixed, transparent pricing</strong> — Our Dammam Airport taxi fares are fixed and quoted before you travel. There are no meters, no surge pricing, and no hidden airport parking fees or VAT additions. The price you agree via WhatsApp is the total price you pay at the end of your journey.
            </p>
            <p style={styles.articleP}>
              <strong>Live flight tracking and 60-minute free waiting</strong> — Once you provide your flight number, our dispatch team tracks your flight in real time. Whether your flight lands on time, 30 minutes early, or 2 hours late — your driver adjusts automatically. We provide 60 minutes of complimentary waiting time from your actual landing time, giving you ample time to clear immigration, collect luggage, and exit the arrivals hall without any rush.
            </p>
            <p style={styles.articleP}>
              <strong>Professional meet-and-greet at DMM arrivals</strong> — Your driver waits at the public arrivals meeting zone just outside the exit gate, holding a personalised name board with your name. Two hours before landing, we send you your driver's name, photo, and direct mobile number via WhatsApp so you can contact them directly if needed.
            </p>
            <p style={styles.articleP}>
              <strong>Executive, air-conditioned fleet</strong> — Our vehicles are cleaned, sanitised, and pre-cooled before every pickup. All cars carry commercial liability insurance, GPS tracking, USB charging ports, in-car Wi-Fi hotspot, and complimentary bottled water. We offer four vehicle classes: Toyota Camry Sedan (up to 4 passengers), GMC Yukon SUV (up to 6 passengers), Hyundai Staria Family Van (up to 8 passengers), and VIP Luxury Class for delegations and senior executives.
            </p>

            <h2 style={styles.articleH2}>Dammam Airport Taxi Fares — All Routes & Prices</h2>
            <p style={styles.articleP}>
              Below is a summary of our most commonly booked routes from King Fahd International Airport (DMM). All prices are for a full private taxi — not per seat — and include airport parking fees, road tolls, and VAT.
            </p>
            <p style={styles.articleP}>
              <strong>DMM Airport to Al Khobar:</strong> 60 km · 45 minutes · from 150 SAR (Sedan). Al Khobar is the Eastern Province's most cosmopolitan city and the primary residential hub for international companies and expatriates. Our drivers are familiar with all Al Khobar hotels, business compounds, and residential districts.
            </p>
            <p style={styles.articleP}>
              <strong>DMM Airport to Jubail Industrial City:</strong> 85 km · 55 minutes · from 200 SAR (Sedan). Jubail is Saudi Arabia's largest industrial city and the home of SABIC, the Royal Commission for Jubail and Yanbu (RCJY), and dozens of petrochemical plants. We provide regular corporate transfers for Aramco contractors, SABIC employees, and international engineers arriving at DMM.
            </p>
            <p style={styles.articleP}>
              <strong>DMM Airport to Dhahran (Saudi Aramco HQ):</strong> 55 km · 40 minutes · from 150 SAR (Sedan). Dhahran is the global headquarters of Saudi Aramco — the world's most valuable company. Our drivers deliver to all designated visitor gates at the Aramco compound. We also serve King Fahd University of Petroleum and Minerals (KFUPM) directly.
            </p>
            <p style={styles.articleP}>
              <strong>DMM Airport to Dammam City Centre:</strong> 30 km · 25 minutes · from 120 SAR (Sedan). We transfer to all Dammam city districts, hotels, and government offices.
            </p>
            <p style={styles.articleP}>
              <strong>DMM Airport to Hofuf (Al-Ahsa):</strong> 160 km · 1.5–2 hours · from 400 SAR (Sedan). Hofuf is the capital of Al-Ahsa Governorate and gateway to the Al-Ahsa Oasis — a UNESCO World Heritage Site.
            </p>
            <p style={styles.articleP}>
              <strong>Dammam to Bahrain (via King Fahd Causeway):</strong> 85 km · 1.5–2 hours · from 350 SAR (Sedan). This is our most popular route. The King Fahd Causeway is a 25 km dual-carriageway bridge linking Al Khobar to Manama, Bahrain. All causeway toll fees (approximately 35 SAR) are included in our quoted price. We deliver door-to-door to any address in Bahrain — Manama, Riffa, Muharraq, Bahrain International Airport (BAH), or the Bahrain Financial Harbour.
            </p>
            <p style={styles.articleP}>
              <strong>Dammam to Riyadh:</strong> 400 km · 3.5–4 hours · from 900 SAR (Sedan). Our intercity Dammam–Riyadh highway transfer is a popular choice for corporate travellers avoiding the time cost of domestic flights. We provide vehicles with Wi-Fi, USB charging, and scheduled rest stops.
            </p>
            <p style={styles.articleP}>
              <strong>Dammam to Kuwait City (via Khafji Border):</strong> 420 km · 4–4.5 hours · from 1,500 SAR (Sedan). Our Kuwait route uses the Khafji border terminal. Drivers hold valid Saudi–Kuwait commercial transport permits. Kuwait eVisa or arrival permit is required for non-GCC nationals — check your requirements before travel.
            </p>
            <p style={styles.articleP}>
              <strong>Dammam to Dubai or Abu Dhabi (UAE):</strong> 950 km · 9–10 hours · from 3,500 SAR (Sedan). For UAE-bound travellers, we recommend the GMC Yukon or our VIP class with scheduled meal stops at highway service stations. Two border clearances are required (Saudi exit at Al Batha + UAE entry at Ghuwaifat).
            </p>
            <p style={styles.articleP}>
              <strong>Dammam to Doha, Qatar (via Salwa Border):</strong> 400 km · 5–6 hours · from 1,400 SAR (Sedan). The Salwa–Abu Samra crossing between Saudi Arabia and Qatar was restored to full operation in January 2021. We provide full-route transfers from DMM Airport to Doha city centre.
            </p>

            <h2 style={styles.articleH2}>Corporate & Executive Taxi Services from Dammam Airport</h2>
            <p style={styles.articleP}>
              Saudi Arabia's Eastern Province is the business capital of the Gulf — hosting Saudi Aramco, SABIC, Halliburton, Baker Hughes, SLB (Schlumberger), Honeywell, and hundreds of international oil & gas contractors. Dammam Airport Taxi has been the preferred ground transport provider for corporate clients in the region, offering services that meet the precise demands of business travel.
            </p>
            <p style={styles.articleP}>
              Our corporate services include: <strong>monthly consolidated invoicing</strong> (VAT-compliant for Saudi Arabia), <strong>priority dispatch</strong> for corporate accounts during peak hours, <strong>fleet-level bookings</strong> for large delegations arriving simultaneously at DMM, <strong>English and Arabic-speaking professional chauffeurs</strong>, and GPS-tracked vehicles for corporate travel desk oversight. We serve all major corporate compounds in Dhahran, Jubail, Ras Tanura, and Abqaiq.
            </p>

            <h2 style={styles.articleH2}>GCC Cross-Border Taxi from Dammam — What You Need to Know</h2>
            <p style={styles.articleP}>
              One of the most important distinctions about Dammam Airport Taxi is our full licensing for GCC cross-border transport. Many local taxis in the Eastern Province are not authorised to cross international borders. Our drivers hold valid cross-border commercial transport permits for all active Saudi land borders — the King Fahd Causeway (Bahrain), Khafji border (Kuwait), Al Batha–Ghuwaifat (UAE), and Salwa–Abu Samra (Qatar).
            </p>
            <p style={styles.articleP}>
              For Saudi residents (expatriates) travelling by land, a valid Exit and Re-Entry visa is required to leave and return to Saudi Arabia. Saudi citizens and GCC nationals travel with their national ID card. For each GCC destination, check your nationality's entry requirements: Bahrain (eVisa or VOA for most), Qatar (eVisa or Hayya card), UAE (VOA for many nationalities), and Kuwait (eVisa portal). Our team is happy to advise you on document requirements when you book via WhatsApp.
            </p>

            <h2 style={styles.articleH2}>How to Book a Dammam Airport Taxi in Minutes</h2>
            <p style={styles.articleP}>
              Booking a Dammam Airport taxi with us takes less than 2 minutes. We have deliberately kept our booking process simple — no apps to download, no accounts to create, no pre-payment required. Simply send a WhatsApp message to our dispatch number with the following details: your full name, flight number and arrival date/time, number of passengers, luggage count, your destination, and your preferred vehicle class.
            </p>
            <p style={styles.articleP}>
              You will receive a booking confirmation within minutes — including your driver's name, vehicle number plate, and the fixed fare for your journey. Two hours before your flight lands, we send you the driver's photo and direct mobile number. On arrival at DMM, your driver is waiting with your name board at the arrivals meeting point.
            </p>
            <p style={styles.articleP}>
              We are available 24 hours a day, 7 days a week, 365 days a year — including Saudi public holidays and Eid periods. Our average WhatsApp response time is under 2 minutes during all operating hours. We accept bookings up to 90 days in advance and can accommodate same-day bookings with as little as 2 hours notice for most routes.
            </p>

            <h2 style={styles.articleH2}>Dammam Airport Taxi vs. Uber & Careem</h2>
            <p style={styles.articleP}>
              Uber and Careem operate in Saudi Arabia and can be booked from King Fahd International Airport. However, for airport transfers — especially for international arrivals — a pre-booked private taxi offers significant advantages. Ride-hailing apps use dynamic surge pricing, which can make your airport fare unpredictable — particularly during Eid holidays, peak summer, or late-night arrivals. Our fares are fixed and agreed before travel.
            </p>
            <p style={styles.articleP}>
              For GCC cross-border routes, Uber and Careem do not operate. A licensed private taxi with cross-border permits is the only practical and legal road transport option for Bahrain, Kuwait, UAE, and Qatar journeys from Dammam. For corporate travellers requiring monthly invoicing, flight tracking, or meet-and-greet service, a dedicated private taxi service is the professional standard.
            </p>

            <h2 style={styles.articleH2}>Frequently Asked Questions — Dammam Airport Taxi</h2>
            <p style={styles.articleP}>
              <strong>What is the cheapest taxi from Dammam Airport?</strong> The most affordable private taxi from DMM Airport starts from 120 SAR for Dammam city districts and 150 SAR for Al Khobar or Dhahran in a Toyota Camry Sedan. All prices are fixed and include parking and VAT.
            </p>
            <p style={styles.articleP}>
              <strong>How early should I book my Dammam Airport taxi?</strong> We recommend booking at least 4 hours before your flight lands. However, we can accommodate same-day requests with as little as 2 hours' notice. For busy travel periods (Eid, summer season, major conferences), booking 24–48 hours in advance is advisable.
            </p>
            <p style={styles.articleP}>
              <strong>Can I get a taxi from Dammam Airport to Bahrain?</strong> Yes. Dammam to Bahrain via the King Fahd Causeway is our most popular route. From 350 SAR for a sedan. All causeway tolls are included. Delivery door-to-door to any Bahrain address.
            </p>
            <p style={styles.articleP}>
              <strong>Are child seats available in Dammam Airport taxis?</strong> Yes. Complimentary infant and toddler safety seats are provided upon advance request at the time of booking. Please mention this in your WhatsApp booking message.
            </p>
            <p style={styles.articleP}>
              <strong>Is Wi-Fi available in Dammam Airport taxis?</strong> Yes. All our vehicles are equipped with a high-speed mobile Wi-Fi hotspot, USB charging ports for all passengers, and complimentary chilled water.
            </p>
            <p style={styles.articleP}>
              <strong>Do you serve Ras Tanura and Qatif from Dammam Airport?</strong> Yes. We provide direct transfers from DMM Airport to Ras Tanura (Saudi Aramco oil terminal area), Qatif city, Tarout Island, and all other Eastern Province destinations. Contact us for a custom quote.
            </p>

          </article>
        </div>
      </section>

      <RelatedRoutes
        currentUrl="/"
        title={{ en: "Explore Our Services & Guides", ar: "استكشف خدماتنا وأدلتنا" }}
      />

      <StickyCTA />
      <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "radial-gradient(circle at 30% 50%, rgba(35, 28, 5, 1) 0%, rgba(10, 10, 10, 1) 60%)",
    backgroundColor: "#0c0c0c",
    padding: "6rem 0",
    borderBottom: "1px solid var(--border-color)",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "2.5rem",
    alignItems: "flex-start",
  },
  heroTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    alignItems: "flex-start",
    paddingTop: "2rem",
  },
  heroTitle: {
    fontSize: "3.6rem",
    color: "#ffffff",
    lineHeight: "1.15",
    fontWeight: "800",
    textShadow: "0 4px 20px rgba(0,0,0,0.5)",
  },
  heroSub: {
    fontSize: "1.15rem",
    color: "var(--text-secondary)",
    lineHeight: "1.7",
  },
  valueProps: {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
    marginBottom: "0.5rem",
  },
  valueItem: {
    color: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
  },
  heroBtnGroup: {
    display: "flex",
    gap: "1.2rem",
    marginTop: "0.5rem",
    flexWrap: "wrap",
  },
  heroStatsCard: {
    display: "flex",
    gap: "2.5rem",
    marginTop: "2rem",
    padding: "1.5rem 2rem",
    width: "100%",
    justifyContent: "space-between",
    borderTop: "1px solid rgba(245, 197, 24, 0.3)",
    background: "rgba(0, 0, 0, 0.4)",
  },
  heroStatItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  heroStatVal: {
    fontSize: "1.8rem",
    color: "var(--accent-gold)",
    fontWeight: "800",
  },
  heroStatLbl: {
    fontSize: "0.85rem",
    color: "#ffffff",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  heroFormCol: {
    width: "100%",
  },
  /* Trust strip */
  trustStrip: {
    backgroundColor: "var(--bg-secondary)",
    borderBottom: "1px solid var(--border-color)",
    padding: "1rem 0",
    overflowX: "auto" as const,
  },
  trustInner: {
    display: "flex",
    gap: "0",
    alignItems: "stretch",
    minWidth: "max-content",
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.6rem 1.5rem",
    borderRight: "1px solid var(--border-color)",
    whiteSpace: "nowrap" as const,
  },
  trustIcon: { fontSize: "1.1rem" },
  trustText: { fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" },
  /* How It Works */
  howSection: { backgroundColor: "var(--bg-primary)" },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2rem",
    position: "relative" as const,
  },
  stepCard: {
    padding: "2.5rem 2rem",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "1rem",
    position: "relative" as const,
  },
  stepNum: {
    fontSize: "0.75rem",
    fontWeight: 800,
    color: "var(--accent-gold)",
    letterSpacing: "0.1em",
    border: "1px solid rgba(245,197,24,0.3)",
    padding: "0.2rem 0.6rem",
    borderRadius: "20px",
  },
  stepIconCircle: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: "rgba(245,197,24,0.08)",
    border: "1px solid rgba(245,197,24,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
  },
  stepTitle: { fontSize: "1.1rem", fontWeight: 700, color: "#fff" },
  stepDesc:  { fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 },
  stepsConnector: { display: "none" },
  /* WhatsApp CTA Banner */
  waBanner: {
    background: "linear-gradient(135deg, #075e54 0%, #128c7e 50%, #075e54 100%)",
    padding: "3.5rem 0",
  },
  waInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap" as const,
  },
  waTitle: { fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "0.4rem" },
  waSub:   { color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" },
  waBtn: {
    padding: "0.9rem 2rem",
    fontSize: "1rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    flexShrink: 0,
    backgroundColor: "#fff",
    color: "#075e54",
    borderRadius: "8px",
    border: "none",
    whiteSpace: "nowrap" as const,
    textDecoration: "none",
  },
  whySection: { backgroundColor: "var(--bg-primary)" },
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "2rem",
  },
  whyCard: {
    padding: "2.5rem 2rem",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  whyCardIcon: { fontSize: "3rem", marginBottom: "1.5rem" },
  whyCardTitle: { fontSize: "1.15rem", color: "#ffffff", marginBottom: "1rem" },
  whyCardDesc: { fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" },
  routesSection: { backgroundColor: "var(--bg-primary)" },
  routesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },
  routeCard: {
    padding: "2rem",
    textAlign: "left" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  },
  routeCardTitle: { fontSize: "1.2rem", color: "#ffffff", fontWeight: "700" },
  routeDetails: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.6rem",
    borderTop: "1px solid var(--border-color)",
    borderBottom: "1px solid var(--border-color)",
    padding: "1rem 0",
  },
  routeDetailItem: { display: "flex", justifyContent: "space-between", fontSize: "0.85rem" },
  routeDetailLabel: { color: "var(--text-muted)" },
  routeDetailValue: { color: "#ffffff", fontWeight: "600" },
  routeBtn: { width: "100%" },
  testimonialsSection: {
    backgroundColor: "var(--bg-secondary)",
    borderTop: "1px solid var(--border-color)",
    borderBottom: "1px solid var(--border-color)",
  },
  testGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
  },
  testCard: { padding: "2.5rem 2rem", textAlign: "center" as const },
  stars: { color: "var(--accent-gold)", fontSize: "1.2rem", marginBottom: "1rem", letterSpacing: "2px" },
  testText: { fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-secondary)", fontStyle: "italic", marginBottom: "1.5rem" },
  testAuthor: { fontSize: "0.85rem", color: "#ffffff" },
  articleSection: {
    backgroundColor: "var(--bg-secondary)",
    borderTop: "1px solid var(--border-color)",
    padding: "5rem 0",
  },
  article: {
    maxWidth: "860px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.2rem",
  },
  articleH2: {
    fontSize: "1.45rem",
    fontWeight: 700,
    color: "#ffffff",
    marginTop: "1.5rem",
    marginBottom: "0.25rem",
    lineHeight: 1.3,
  },
  articleP: {
    fontSize: "0.96rem",
    color: "var(--text-secondary)",
    lineHeight: 1.8,
  },
  faqList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  faqItem: {
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    padding: "1.5rem",
    borderRadius: "6px",
  },
  faqQ: { fontSize: "1.05rem", color: "#ffffff", marginBottom: "0.5rem" },
  faqA: { fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" },
};
