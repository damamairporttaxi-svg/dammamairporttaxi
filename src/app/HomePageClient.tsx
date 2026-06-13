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

      {/* SEO Article — above FAQs */}
      <section style={art.wrap}>
        <div className="container">

          {/* ── 3D Hero Intro Banner ── */}
          <div style={art.heroBanner}>
            <div style={art.heroBannerGlow} />
            <div style={art.heroBannerContent}>
              <span className="badge-gold" style={{ marginBottom: "0.75rem", display: "inline-block" }}>Eastern Province — Saudi Arabia</span>
              <h2 style={art.mainTitle}>
                Dammam Airport Taxi — Your Trusted Private Transfer from King Fahd International Airport
              </h2>
              <p style={art.lead}>
                King Fahd International Airport (IATA: DMM) handles over 9 million travellers a year — yet finding a <strong>reliable, fixed-price private taxi</strong> at arrivals remains the number-one concern for business travellers, expat families, and GCC tourists alike. We solve that problem completely. Pre-book in 2 minutes via WhatsApp, and your driver will be standing at the arrivals exit with your name board before you clear customs — fare agreed, flight tracked, 60 minutes of free waiting included. No apps. No queues. No surprises.
              </p>
              <p style={art.lead}>
                Whether you need an airport transfer to Al Khobar or Dhahran, a corporate shuttle to Jubail Industrial City, or a cross-border taxi to Bahrain, Doha, Dubai, or Kuwait — this complete guide covers every route, every fare, and everything you need to book with confidence.
              </p>
              {/* 3D stat cards */}
              <div style={art.statsRow}>
                {[
                  { val: "780 km²", lbl: "World's Largest Airport by Area" },
                  { val: "9M+",     lbl: "Annual Passengers at DMM" },
                  { val: "60 min",  lbl: "Free Waiting — Every Booking" },
                  { val: "24 / 7",  lbl: "365 Days — Always Available" },
                  { val: "4",       lbl: "GCC Borders We Cross" },
                  { val: "< 2 min", lbl: "Average WhatsApp Response" },
                ].map(s => (
                  <div key={s.val} style={art.statCard3d}>
                    <strong style={art.statVal}>{s.val}</strong>
                    <span style={art.statLbl}>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Why pre-book ── */}
          <div style={art.block}>
            <h3 style={art.h3}>Why Pre-Book a Private Taxi from Dammam Airport?</h3>
            <p style={art.p}>
              Arrivals at DMM have several options — Uber, Careem, street taxis, or hotel shuttles. But for international arrivals, business travellers, and families with luggage, a pre-booked private taxi is the only option that guarantees a fixed price, a driver waiting at arrivals before you exit customs, live flight tracking, and 60 minutes of free waiting from your actual landing time.
            </p>
            <div style={art.featureGrid}>
              {[
                { title: "Fixed Price — No Surprises",    desc: "Fare agreed before travel. No meter, no surge pricing, no hidden parking or VAT." },
                { title: "Live Flight Tracking",          desc: "We monitor your flight. Delayed 2 hours? Your driver adjusts automatically at zero extra charge." },
                { title: "Name-Board Meet & Greet",       desc: "Driver waits at the arrivals exit with your name. Photo & direct number sent 2 hrs before landing." },
                { title: "Executive Air-Con Fleet",       desc: "Camry Sedan · GMC Yukon SUV · Staria Van · VIP Class — Wi-Fi, USB charging, chilled water on board." },
                { title: "GCC Cross-Border Licensed",     desc: "Our drivers hold valid permits for Bahrain, Kuwait, UAE & Qatar crossings — most local taxis cannot cross borders." },
                { title: "Corporate Monthly Invoicing",   desc: "VAT-compliant consolidated invoices for Aramco, SABIC, RCJY & multinational corporate accounts." },
              ].map(f => (
                <div key={f.title} style={art.featureCard}>
                  <div style={art.featureLine} />
                  <strong style={art.featureTitle}>{f.title}</strong>
                  <p style={art.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Route price table ── */}
          <div style={art.block}>
            <h3 style={art.h3}>Dammam Airport Taxi Fares — All Routes &amp; Prices</h3>
            <p style={art.p}>All fares below are for a <strong>full private taxi</strong> (not per seat) and include airport parking, road tolls, and VAT.</p>
            <div style={art.routeGrid}>
              {[
                { route: "DMM Airport → Al Khobar",          dist: "60 km · 45 min",    from: "150 SAR", note: "All hotels, compounds & districts" },
                { route: "DMM Airport → Jubail Industrial",   dist: "85 km · 55 min",    from: "200 SAR", note: "SABIC, RCJY, Aramco contractors" },
                { route: "DMM Airport → Dhahran (Aramco HQ)", dist: "55 km · 40 min",    from: "150 SAR", note: "All Aramco gates + KFUPM" },
                { route: "DMM Airport → Dammam City",         dist: "30 km · 25 min",    from: "120 SAR", note: "All districts, hotels & offices" },
                { route: "DMM Airport → Hofuf (Al-Ahsa)",     dist: "160 km · 1.5 hrs",  from: "400 SAR", note: "UNESCO oasis gateway" },
                { route: "Dammam → Bahrain (Causeway)",        dist: "85 km · 1.5–2 hrs", from: "350 SAR", note: "Tolls included · door-to-door" },
                { route: "Dammam → Riyadh",                    dist: "400 km · 3.5 hrs",  from: "900 SAR", note: "Wi-Fi · rest stops included" },
                { route: "Dammam → Kuwait (Khafji Border)",    dist: "420 km · 4 hrs",    from: "1,500 SAR", note: "Cross-border permits held" },
                { route: "Dammam → Dubai / Abu Dhabi (UAE)",   dist: "950 km · 9–10 hrs", from: "3,500 SAR", note: "Al Batha–Ghuwaifat crossing" },
                { route: "Dammam → Doha, Qatar (Salwa)",       dist: "400 km · 5–6 hrs",  from: "1,400 SAR", note: "Full city delivery available" },
              ].map(r => (
                <div key={r.route} style={art.routeRow}>
                  <div style={art.routeLeft}>
                    <strong style={art.routeName}>{r.route}</strong>
                    <span style={art.routeMeta}>{r.dist} &nbsp;·&nbsp; {r.note}</span>
                  </div>
                  <span style={art.routePrice}>from {r.from}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Two-col: Corporate + GCC ── */}
          <div style={art.twoCol}>
            <div style={art.infoBox}>
              <h3 style={art.infoBoxTitle}>Corporate & Executive Service</h3>
              <p style={art.p}>
                The Eastern Province hosts Saudi Aramco, SABIC, Halliburton, Baker Hughes, SLB, and hundreds of international contractors. Our corporate service delivers:
              </p>
              <ul style={art.ul}>
                <li>Monthly VAT-compliant consolidated invoices</li>
                <li>Priority dispatch for corporate accounts</li>
                <li>Fleet-level bookings for large delegations at DMM</li>
                <li>English &amp; Arabic-speaking professional chauffeurs</li>
                <li>GPS-tracked vehicles reported to your travel desk</li>
                <li>All compounds: Dhahran, Jubail, Ras Tanura, Abqaiq</li>
              </ul>
              <Link href="/corporate-transfers" style={art.infoLink}>Set up a corporate account →</Link>
            </div>
            <div style={{ ...art.infoBox, borderColor: "rgba(58,127,212,0.4)", background: "rgba(58,127,212,0.04)" }}>
              <h3 style={{ ...art.infoBoxTitle, color: "#5ba3e8" }}>GCC Cross-Border Taxi</h3>
              <p style={art.p}>
                Most local Eastern Province taxis cannot legally cross Saudi land borders. Our drivers hold valid commercial transport permits for every active crossing:
              </p>
              <ul style={art.ul}>
                <li><strong>Bahrain</strong> — King Fahd Causeway · 85 km · tolls included</li>
                <li><strong>Kuwait</strong> — Khafji–Nuwaiseeb border · 420 km</li>
                <li><strong>UAE</strong> — Al Batha / Ghuwaifat · 950 km to Dubai</li>
                <li><strong>Qatar</strong> — Salwa–Abu Samra · 400 km to Doha</li>
              </ul>
              <p style={{ ...art.p, fontSize: "0.82rem", marginTop: "0.5rem" }}>
                Saudi residents need a valid Exit &amp; Re-Entry visa. GCC nationals travel on national ID. Our team advises on visa requirements when you book.
              </p>
              <Link href="/gcc-border-crossing" style={{ ...art.infoLink, color: "#5ba3e8" }}>GCC border crossing guide →</Link>
            </div>
          </div>

          {/* ── Booking steps ── */}
          <div style={art.block}>
            <h3 style={art.h3}>How to Book Your Dammam Airport Taxi in Under 2 Minutes</h3>
            <p style={art.p}>No app downloads. No account creation. No pre-payment. Just WhatsApp — and you're set.</p>
            <div style={art.stepsRow}>
              {[
                { n: "1", title: "Send WhatsApp",        desc: "Share your name, flight number, date & time, destination, passenger count & vehicle preference." },
                { n: "2", title: "Get Instant Confirmation", desc: "Receive driver name, plate number & fixed fare within minutes. Booking confirmed." },
                { n: "3", title: "We Track Your Flight", desc: "If delayed, your driver adjusts automatically. 60-min free wait from actual landing time." },
                { n: "4", title: "Name-Board Pickup",    desc: "Exit arrivals — your driver is there with your name board. Luggage loaded, journey starts." },
              ].map(s => (
                <div key={s.n} style={art.step}>
                  <div style={art.stepNum}>{s.n}</div>
                  <strong style={art.stepTitle}>{s.title}</strong>
                  <p style={art.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ ...art.p, marginTop: "1rem" }}>
              We are available <strong>24 / 7 / 365</strong> — including Eid and Saudi public holidays. Average WhatsApp response time: <strong>under 2 minutes</strong>. We take bookings up to 90 days ahead and same-day with as little as 2 hours' notice.
            </p>
          </div>

          {/* ── vs Uber callout ── */}
          <div style={art.compareBox}>
            <div style={art.compareSide}>
              <p style={art.compareLabel}>Pre-Booked Dammam Airport Taxi</p>
              {["Fixed fare — agreed before travel", "Driver waiting at arrivals exit", "Live flight tracking & free delay buffer", "GCC cross-border licensed", "Corporate monthly invoicing", "Wi-Fi · water · USB charging onboard"].map(i => (
                <p key={i} style={art.compareItem}><span style={{ color: "var(--accent-gold)", marginRight: "0.5rem" }}>✓</span>{i}</p>
              ))}
            </div>
            <div style={art.compareDivider} />
            <div style={art.compareSide}>
              <p style={art.compareLabel}>Uber / Careem / Street Taxi</p>
              {["Surge pricing at peak & Eid", "45+ min queue at busy arrivals", "No flight tracking, driver may leave", "Cannot cross GCC borders", "No corporate invoicing", "No amenities guaranteed"].map(i => (
                <p key={i} style={{ ...art.compareItem, color: "var(--text-muted)" }}><span style={{ color: "#555", marginRight: "0.5rem" }}>✗</span>{i}</p>
              ))}
            </div>
          </div>

          {/* ── About DMM ── */}
          <div style={art.block}>
            <h3 style={art.h3}>About King Fahd International Airport — DMM</h3>
            <p style={art.p}>
              King Fahd International Airport (مطار الملك فهد الدولي) opened 28 November 1999 and is the primary airport for Dammam, Al Khobar, Dhahran, Qatif, and Jubail. At <strong>780 square kilometres</strong>, it is the <strong>world's largest airport by land area</strong> — bigger than Bahrain itself. The airport serves ~9 million passengers annually with two terminals (domestic + international). Major carriers: Saudia, flynas, flyadeal, Qatar Airways, Emirates, Lufthansa, Turkish Airlines, Gulf Air, Air Arabia. Location: 35 km north-west of Dammam · 25 km from Al Khobar. IATA: DMM · ICAO: OEDF · Coordinates: 26.47°N, 49.80°E.
            </p>
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

const art: Record<string, React.CSSProperties> = {
  wrap: {
    backgroundColor: "var(--bg-primary)",
    borderTop: "1px solid var(--border-color)",
    padding: "5rem 0 4rem",
  },

  /* ── 3D Hero Banner ── */
  heroBanner: {
    position: "relative",
    background: "linear-gradient(135deg, rgba(20,15,0,0.95) 0%, rgba(8,8,8,1) 60%, rgba(15,10,0,0.95) 100%)",
    border: "1px solid rgba(245,197,24,0.25)",
    borderRadius: "20px",
    padding: "3.5rem",
    marginBottom: "4rem",
    overflow: "hidden",
    boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,197,24,0.1), inset 0 1px 0 rgba(245,197,24,0.15)",
  },
  heroBannerGlow: {
    position: "absolute",
    top: "-80px", left: "-80px",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  heroBannerContent: { position: "relative", zIndex: 1 },
  mainTitle: {
    fontSize: "clamp(1.5rem,3vw,2.3rem)", fontWeight: 800,
    color: "#ffffff", lineHeight: 1.2, margin: "0.75rem 0 1.25rem",
    textShadow: "0 2px 20px rgba(0,0,0,0.5)",
  },
  lead: {
    fontSize: "0.97rem", color: "var(--text-secondary)", lineHeight: 1.85,
    maxWidth: "820px", marginBottom: "1.25rem",
  },

  /* 3D stat cards row */
  statsRow: {
    display: "flex", flexWrap: "wrap", gap: "0.9rem", marginTop: "2rem",
  },
  statCard3d: {
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "1rem 1.4rem", gap: "0.2rem",
    background: "linear-gradient(145deg, rgba(40,32,0,0.9), rgba(20,15,0,0.95))",
    border: "1px solid rgba(245,197,24,0.3)",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 2px 0 rgba(245,197,24,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
    transform: "translateY(0)",
  },
  statVal: { fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-gold)" },
  statLbl: { fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap", textAlign: "center" },

  /* content blocks */
  block: { marginBottom: "3.5rem" },
  h3: {
    fontSize: "1.2rem", fontWeight: 700, color: "#fff",
    borderLeft: "3px solid var(--accent-gold)", paddingLeft: "0.8rem",
    marginBottom: "1.2rem",
  },
  p: { fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "0.75rem" },

  /* 3D feature grid */
  featureGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "1.2rem", marginTop: "1.5rem",
  },
  featureCard: {
    background: "linear-gradient(145deg, rgba(25,20,5,0.9), rgba(12,10,2,0.95))",
    border: "1px solid rgba(245,197,24,0.2)",
    borderRadius: "12px", padding: "1.5rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.45), 0 2px 0 rgba(245,197,24,0.15), inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  featureLine: {
    width: "36px", height: "3px",
    background: "linear-gradient(90deg, var(--accent-gold), rgba(245,197,24,0.3))",
    borderRadius: "2px", marginBottom: "1rem",
  },
  featureTitle: { fontSize: "0.9rem", color: "#fff", display: "block", fontWeight: 700, marginBottom: "0.45rem" },
  featureDesc: { fontSize: "0.81rem", color: "var(--text-secondary)", lineHeight: 1.65 },

  /* route table */
  routeGrid: { display: "flex", flexDirection: "column", gap: "0.55rem", marginTop: "1.2rem" },
  routeRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "linear-gradient(135deg, rgba(20,16,3,0.8), rgba(10,8,1,0.9))",
    border: "1px solid rgba(245,197,24,0.15)", borderRadius: "10px",
    padding: "0.9rem 1.3rem", gap: "1rem",
    boxShadow: "0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.03)",
  },
  routeLeft: { display: "flex", flexDirection: "column", gap: "0.2rem" },
  routeName: { fontSize: "0.9rem", color: "#fff", fontWeight: 600 },
  routeMeta: { fontSize: "0.73rem", color: "var(--text-muted)" },
  routePrice: {
    fontSize: "0.88rem", fontWeight: 800, color: "var(--accent-gold)",
    whiteSpace: "nowrap", flexShrink: 0,
    textShadow: "0 0 12px rgba(245,197,24,0.4)",
  },

  /* two col */
  twoCol: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "1.5rem", marginBottom: "3.5rem",
  },
  infoBox: {
    border: "1px solid rgba(245,197,24,0.3)", borderRadius: "14px",
    padding: "2rem",
    background: "linear-gradient(145deg, rgba(25,20,5,0.85), rgba(10,8,1,0.95))",
    boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 2px 0 rgba(245,197,24,0.2), inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  infoBoxTitle: { fontSize: "1.05rem", fontWeight: 700, color: "var(--accent-gold)", marginBottom: "0.9rem" },
  ul: {
    paddingLeft: "1.2rem", color: "var(--text-secondary)",
    fontSize: "0.87rem", lineHeight: 2.1, margin: "0.5rem 0 1rem",
  },
  infoLink: { fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-gold)", textDecoration: "none" },

  /* booking steps */
  stepsRow: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "1.2rem", marginTop: "1.5rem",
  },
  step: {
    background: "linear-gradient(145deg, rgba(22,18,4,0.9), rgba(10,8,1,0.95))",
    border: "1px solid rgba(245,197,24,0.18)", borderRadius: "12px",
    padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4), 0 2px 0 rgba(245,197,24,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  stepNum: {
    width: "40px", height: "40px", borderRadius: "50%",
    background: "linear-gradient(145deg, #f5c518, #c8920a)",
    boxShadow: "0 4px 14px rgba(245,197,24,0.45), 0 2px 0 rgba(255,255,255,0.2) inset",
    color: "#000", display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: "0.9rem",
  },
  stepTitle: { fontSize: "0.9rem", color: "#fff", fontWeight: 700 },
  stepDesc: { fontSize: "0.79rem", color: "var(--text-secondary)", lineHeight: 1.65 },

  /* compare box */
  compareBox: {
    display: "grid", gridTemplateColumns: "1fr auto 1fr",
    gap: 0,
    border: "1px solid rgba(245,197,24,0.2)", borderRadius: "14px", overflow: "hidden",
    background: "linear-gradient(145deg, rgba(18,14,3,0.95), rgba(8,8,8,0.98))",
    marginBottom: "3.5rem",
    boxShadow: "0 16px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  compareSide: { padding: "2rem 2.2rem" },
  compareDivider: { width: "1px", backgroundColor: "rgba(245,197,24,0.15)" },
  compareLabel: {
    fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "var(--accent-gold)", marginBottom: "1.1rem",
  },
  compareItem: { fontSize: "0.84rem", color: "var(--text-secondary)", marginBottom: "0.55rem", display: "flex", alignItems: "flex-start" },
};
