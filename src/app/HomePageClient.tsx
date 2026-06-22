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

          {/* LEFT — white text side */}
          <div style={styles.heroTextCol}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", border:"1px solid #0C58D1", borderRadius:"50px", padding:"0.35rem 1rem" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#0C58D1"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span style={{ fontSize:"0.75rem", fontWeight:700, color:"#0C58D1", letterSpacing:"0.05em", textTransform:"uppercase" }}>
                {locale === "en" ? "Top Rated KSA Transfer" : "خدمة التوصيل الأولى بالمملكة"}
              </span>
            </div>

            <h1 style={styles.heroTitle}>
              {locale === "en" ? (
                <><span style={{ color:"#0C58D1" }}>Dammam Airport</span><br /><span style={{ color:"#000000" }}>Taxi &amp; Private</span><br /><span style={{ color:"#000000" }}>Transfers</span></>
              ) : (
                <><span style={{ color:"#0C58D1" }}>تاكسي مطار الدمام</span><br /><span style={{ color:"#000000" }}>توصيل خاص ورحلات دول الخليج</span></>
              )}
            </h1>

            <p style={styles.heroSub}>{t("heroSub")}</p>

            <div style={styles.valueProps}>
              {[
                { en: "Instant WhatsApp Booking", ar: "حجز فوري بالواتساب" },
                { en: "Free Flight Tracking", ar: "تتبع مجاني للرحلات" },
                { en: "24/7 Support — No Hidden Fees", ar: "دعم ٢٤/٧ — بدون رسوم خفية" },
              ].map((v, i) => (
                <span key={i} style={styles.valueItem}>
                  <span style={{ width:"18px", height:"18px", borderRadius:"50%", background:"#0C58D1", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {locale === "en" ? v.en : v.ar}
                </span>
              ))}
            </div>

            <div style={styles.heroBtnGroup}>
              <button onClick={handleBookNowScroll} className="btn btn-primary" style={{ padding:"0.95rem 2rem", fontSize:"1rem", fontWeight:700, display:"flex", alignItems:"center", gap:"8px" }}>
                {t("heroActionBook")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <button onClick={handleFleetScroll} className="btn btn-secondary" style={{ padding:"0.95rem 2rem", fontSize:"1rem", fontWeight:600 }}>
                {t("heroActionFleet")}
              </button>
            </div>

            <div style={styles.heroStatsCard}>
              {[
                { val: t("statCompletedVal"), lbl: t("statCompleted") },
                { val: t("statDriversVal"),   lbl: t("statDrivers") },
                { val: t("statRatingVal"),     lbl: t("statRating") },
              ].map((s, i, arr) => (
                <div key={i} style={{ ...styles.heroStatItem, ...(i === arr.length - 1 ? { borderRight:"none", marginRight:0, paddingRight:0 } : {}) }}>
                  <strong style={styles.heroStatVal}>{s.val}</strong>
                  <span style={styles.heroStatLbl}>{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — booking form */}
          <div style={styles.heroFormCol}>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div style={styles.trustStrip}>
        <div className="container" style={styles.trustInner}>
          {[
            { icon: "✈", en: "Government Licensed",   ar: "مرخص رسمياً" },
            { icon: "📍", en: "Live GPS Tracking",     ar: "تتبع GPS مباشر" },
            { icon: "🤝", en: "Free Meet & Greet",     ar: "استقبال مجاني بالمطار" },
            { icon: "⏱", en: "60-Min Free Wait",       ar: "60 دقيقة انتظار مجاناً" },
            { icon: "💰", en: "Fixed Rates — No Surge", ar: "أسعار ثابتة بلا زيادة" },
          ].map((item, i) => (
            <div key={i} style={styles.trustItem}>
              <span style={{ fontSize:"1.1rem" }}>{item.icon}</span>
              <span style={styles.trustText}>{locale === "en" ? item.en : item.ar}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:"2rem", marginBottom:"3.5rem" }}>
            <div>
              <p style={{ fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#0C58D1", marginBottom:"0.6rem" }}>{locale === "en" ? "Why Choose Us" : "لماذا تختارنا"}</p>
              <h2 style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:800, color:"#000000", lineHeight:1.2, margin:0 }}>{t("whyTitle")}</h2>
            </div>
            <p style={{ maxWidth:"380px", color:"#333333", lineHeight:1.7, margin:0 }}>{t("whySub")}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.5rem" }}>
            {[
              { num:"01", title: t("whyCard1Title"), desc: t("whyCard1Desc") },
              { num:"02", title: t("whyCard2Title"), desc: t("whyCard2Desc") },
              { num:"03", title: t("whyCard3Title"), desc: t("whyCard3Desc") },
              { num:"04", title: t("whyCard4Title"), desc: t("whyCard4Desc") },
            ].map((card, idx) => (
              <div key={idx} style={{ padding:"2rem", background:"#ffffff", border:"1px solid #e5e7eb", borderTop:"4px solid #0C58D1", borderRadius:"4px" }}>
                <p style={{ fontSize:"2.5rem", fontWeight:800, color:"#f0f0f0", lineHeight:1, marginBottom:"1rem" }}>{card.num}</p>
                <h3 style={{ fontSize:"1rem", fontWeight:700, color:"#000000", marginBottom:"0.6rem" }}>{card.title}</h3>
                <p style={{ fontSize:"0.88rem", color:"#333333", lineHeight:1.65, margin:0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ background:"#0C58D1" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            <p style={{ fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", marginBottom:"0.6rem" }}>
              {locale === "en" ? "Simple Process" : "خطوات بسيطة"}
            </p>
            <h2 style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:800, color:"#ffffff", lineHeight:1.2, margin:"0 auto", maxWidth:"600px" }}>
              {locale === "en" ? "Book in Under 2 Minutes" : "احجز في أقل من دقيقتين"}
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"2px", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", overflow:"hidden" }}>
            {[
              { num:"1", en_title:"Send WhatsApp",       ar_title:"أرسل واتساب",         en_desc:"Share pickup, destination, date & vehicle class.", ar_desc:"أرسل موقع الاستلام، الوجهة، التاريخ وفئة السيارة." },
              { num:"2", en_title:"Instant Confirmation", ar_title:"تأكيد فوري",           en_desc:"Get driver name, plate & fixed fare in minutes.", ar_desc:"احصل على اسم السائق واللوحة والأجرة في دقائق." },
              { num:"3", en_title:"We Track Your Flight", ar_title:"نتابع رحلتك",          en_desc:"Delayed? Driver adjusts. 60 min free wait guaranteed.", ar_desc:"تأخر؟ السائق يتكيف. 60 دقيقة انتظار مجاناً." },
              { num:"4", en_title:"Name-Board Pickup",   ar_title:"استقبال باللافتة",     en_desc:"Exit arrivals — driver waiting with your name board.", ar_desc:"اخرج من الوصول — السائق ينتظرك بلافتة باسمك." },
            ].map((step, i) => (
              <div key={i} style={{ padding:"2.5rem 2rem", background:"#0C58D1" }}>
                <div style={{ fontSize:"3rem", fontWeight:800, color:"rgba(255,255,255,0.10)", lineHeight:1, marginBottom:"1.2rem" }}>{step.num}</div>
                <h3 style={{ fontSize:"1rem", fontWeight:700, color:"#ffffff", marginBottom:"0.6rem" }}>{locale === "en" ? step.en_title : step.ar_title}</h3>
                <p style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.65)", lineHeight:1.65, margin:0 }}>{locale === "en" ? step.en_desc : step.ar_desc}</p>
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
              {locale === "en" ? "Book Your Dammam Airport Taxi Now — WhatsApp Us" : "احجز تاكسي مطار الدمام الآن — راسلنا على واتساب"}
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
          <div className="art-hero-banner" style={art.heroBanner}>
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
              <div className="art-stats-row" style={art.statsRow}>
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

          {/* ── Complete Route & Distance Table ── */}
          <div style={art.block}>
            <h3 style={art.h3}>Dammam Airport Taxi — All Routes, Distances &amp; Fares</h3>
            <p style={art.p}>
              Every fare below is for a <strong>full private taxi</strong> (not per seat). Airport parking, road tolls, and VAT are all included. Distances are door-to-door from King Fahd International Airport (DMM) unless stated.
            </p>

            {/* Local / Airport transfers */}
            <p style={{ ...art.p, fontWeight: 700, color: "#0C58D1", marginTop: "1.5rem", marginBottom: "0.5rem", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Local Airport Transfers — Eastern Province
            </p>
            <div style={art.routeGrid}>
              {[
                { route: "Dammam Airport Taxi to Al Khobar",      dist: "60 km",    time: "45 min",     from: "150 SAR", note: "All hotels, compounds & residential districts" },
                { route: "Dammam Airport Taxi to Dhahran",         dist: "55 km",    time: "40 min",     from: "150 SAR", note: "Saudi Aramco HQ · KFUPM · all gates" },
                { route: "Dammam Airport Taxi to Dammam City",     dist: "30 km",    time: "25 min",     from: "120 SAR", note: "All city districts, hotels & government offices" },
                { route: "Dammam Airport Taxi to Jubail",          dist: "85 km",    time: "55 min",     from: "200 SAR", note: "SABIC · RCJY · Jubail Industrial City" },
                { route: "Dammam Airport Taxi to Qatif",           dist: "55 km",    time: "45 min",     from: "150 SAR", note: "Qatif city · Tarout Island" },
                { route: "Dammam Airport Taxi to Ras Tanura",      dist: "65 km",    time: "50 min",     from: "180 SAR", note: "Saudi Aramco oil terminal area" },
                { route: "Dammam Airport Taxi to Hofuf (Al-Ahsa)", dist: "160 km",   time: "1.5–2 hrs",  from: "400 SAR", note: "Al-Ahsa Oasis — UNESCO World Heritage" },
                { route: "Dammam Airport to Half Moon Bay",        dist: "88 km",    time: "60–70 min",  from: "220 SAR", note: "Eastern Province premier beach resort" },
              ].map(r => (
                <div key={r.route} style={art.routeRow}>
                  <div style={art.routeLeft}>
                    <strong style={art.routeName}>{r.route}</strong>
                    <span style={art.routeMeta}>{r.dist} &nbsp;·&nbsp; {r.time} &nbsp;·&nbsp; {r.note}</span>
                  </div>
                  <span style={art.routePrice}>from {r.from}</span>
                </div>
              ))}
            </div>

            {/* GCC cross-border */}
            <p style={{ ...art.p, fontWeight: 700, color: "#0C58D1", marginTop: "1.8rem", marginBottom: "0.5rem", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              GCC Cross-Border Taxi Routes from Dammam
            </p>
            <div style={art.routeGrid}>
              {[
                { route: "Dammam to Bahrain Taxi (King Fahd Causeway)", dist: "85 km",    time: "1.5–2 hrs",  from: "350 SAR",   note: "Causeway tolls included · door-to-door Manama" },
                { route: "Dammam to Qatar Border Taxi (Salwa)",          dist: "310 km",   time: "3 hrs",      from: "1,000 SAR", note: "Salwa–Abu Samra crossing · onward to Doha" },
                { route: "Dammam to Doha Qatar Taxi",                    dist: "400 km",   time: "5–6 hrs",    from: "1,400 SAR", note: "Full Doha city delivery available" },
                { route: "Dammam to Kuwait City Taxi (Khafji Border)",   dist: "420 km",   time: "4–4.5 hrs",  from: "1,500 SAR", note: "Khafji–Nuwaiseeb crossing · valid permits held" },
                { route: "Dammam to Dubai Taxi (UAE)",                   dist: "950 km",   time: "9–10 hrs",   from: "3,500 SAR", note: "Al Batha–Ghuwaifat border · Burj Khalifa area" },
                { route: "Dammam to Abu Dhabi Taxi",                     dist: "870 km",   time: "8.5–9.5 hrs",from: "3,200 SAR", note: "Sheikh Zayed Mosque · Yas Island" },
                { route: "Dammam to Sharjah Taxi",                       dist: "980 km",   time: "9.5–10.5 hrs",from: "3,300 SAR",note: "UAE Cultural Capital · Heritage Area" },
                { route: "Dammam to Muscat Oman Taxi",                   dist: "1,400 km", time: "14–16 hrs",  from: "On Request", note: "3-country trip · Saudi→UAE→Oman" },
              ].map(r => (
                <div key={r.route} style={art.routeRow}>
                  <div style={art.routeLeft}>
                    <strong style={art.routeName}>{r.route}</strong>
                    <span style={art.routeMeta}>{r.dist} &nbsp;·&nbsp; {r.time} &nbsp;·&nbsp; {r.note}</span>
                  </div>
                  <span style={art.routePrice}>from {r.from}</span>
                </div>
              ))}
            </div>

            {/* Saudi intercity */}
            <p style={{ ...art.p, fontWeight: 700, color: "#0C58D1", marginTop: "1.8rem", marginBottom: "0.5rem", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Saudi Intercity Taxi Routes from Dammam
            </p>
            <div style={art.routeGrid}>
              {[
                { route: "Dammam to Riyadh Taxi",         dist: "400 km",   time: "3.5–4 hrs",  from: "900 SAR",   note: "Saudi capital · King Khalid Airport (RUH)" },
                { route: "Dammam to Jeddah Taxi",         dist: "1,260 km", time: "12–13 hrs",  from: "4,500 SAR", note: "Al-Balad UNESCO · King Fahd Fountain · Red Sea" },
                { route: "Dammam to Madinah Taxi",        dist: "1,100 km", time: "10–11 hrs",  from: "4,000 SAR", note: "Prophet's Mosque · Quba · Masjid al-Qiblatayn" },
                { route: "Dammam to Mecca Taxi",          dist: "1,280 km", time: "12–13 hrs",  from: "4,800 SAR", note: "Masjid al-Haram · Umrah & Hajj transfers" },
                { route: "Dammam to Qassim Taxi",         dist: "500 km",   time: "4.5 hrs",    from: "1,800 SAR", note: "Buraydah dates capital · central Saudi" },
                { route: "Dammam to Taif Taxi",           dist: "850 km",   time: "8 hrs",      from: "3,200 SAR", note: "City of Roses · Hada Al-Sham mountain resort" },
                { route: "Dammam to Abha Taxi",           dist: "1,100 km", time: "10–11 hrs",  from: "4,000 SAR", note: "Asir mountains · Habala village" },
                { route: "Dammam to Tabuk Taxi",          dist: "1,200 km", time: "11–12 hrs",  from: "4,500 SAR", note: "NEOM region · AlUla · Red Sea coast" },
                { route: "Dammam to Yanbu Taxi",          dist: "1,400 km", time: "13–14 hrs",  from: "5,000 SAR", note: "Aramco & Royal Commission Yanbu (RCJY)" },
                { route: "Dammam to Hail Taxi",           dist: "800 km",   time: "7–8 hrs",    from: "3,000 SAR", note: "Nafud Desert · north Saudi Arabia" },
              ].map(r => (
                <div key={r.route} style={art.routeRow}>
                  <div style={art.routeLeft}>
                    <strong style={art.routeName}>{r.route}</strong>
                    <span style={art.routeMeta}>{r.dist} &nbsp;·&nbsp; {r.time} &nbsp;·&nbsp; {r.note}</span>
                  </div>
                  <span style={art.routePrice}>from {r.from}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Keyword-rich destination summaries ── */}
          <div style={art.block}>
            <h3 style={art.h3}>Most Searched Dammam Taxi Routes — Distance &amp; Travel Guide</h3>
            <p style={art.p}>
              <strong>Dammam to Bahrain taxi distance</strong> is 85 km via the King Fahd Causeway — the world-famous 25 km bridge connecting Al Khobar to Manama. Travel time is 1.5 to 2 hours under normal conditions. Our fare starts from 350 SAR for a Camry sedan and includes all causeway tolls. Bahrain is the most popular day-trip and weekend destination from the Eastern Province.
            </p>
            <p style={art.p}>
              <strong>Dammam to Riyadh taxi distance</strong> is 400 km on the E40 highway — approximately 3.5 to 4 hours non-stop. Starting from 900 SAR, this is the preferred choice for business travellers avoiding the time cost of domestic flights between DMM and RUH airports.
            </p>
            <p style={art.p}>
              <strong>Dammam to Kuwait taxi distance</strong> is 420 km via the Khafji border terminal — approximately 4 to 4.5 hours driving time, not including border clearance (20–40 minutes on normal days). Our drivers hold valid Saudi–Kuwait commercial cross-border permits.
            </p>
            <p style={art.p}>
              <strong>Dammam to Dubai taxi distance</strong> is 950 km via the Al Batha–Ghuwaifat Saudi-UAE border — a 9 to 10 hour road trip. For this journey we recommend our GMC Yukon or VIP class with reclining leather seats, Wi-Fi, and scheduled meal stops at clean highway service stations.
            </p>
            <p style={art.p}>
              <strong>Dammam to Doha taxi distance</strong> is 400 km via the Salwa–Abu Samra crossing — approximately 5 to 6 hours door-to-door. Saudi–Qatar diplomatic relations were fully restored in January 2021 and the Salwa border is now fully operational for tourist and business travel.
            </p>
            <p style={art.p}>
              <strong>Dammam to Jeddah taxi distance</strong> is 1,260 km — one of the longest Saudi intercity transfers we operate. Travel time is 12 to 13 hours with scheduled rest stops. Jeddah is famous for Al-Balad (UNESCO Historic District), the King Fahd Fountain (312 m — the world's tallest), and the Red Sea Corniche.
            </p>
            <p style={art.p}>
              <strong>Dammam to Madinah taxi</strong> covers 1,100 km in 10 to 11 hours. This is a popular route for Umrah and Ziyarah travellers visiting the Prophet's Mosque (Al-Masjid an-Nabawi), Quba Mosque, and Masjid al-Qiblatayn. We provide respectful, professional service for all religious journeys.
            </p>
            <p style={art.p}>
              <strong>Dammam Airport to Al Khobar taxi distance</strong> is 60 km — about 45 minutes from the terminal. Al Khobar is the Eastern Province's most cosmopolitan city, home to the King Fahd Causeway gateway and a large expat community. All Al Khobar hotels, residential compounds, and business districts covered.
            </p>
            <p style={art.p}>
              <strong>Dammam Airport to Jubail taxi distance</strong> is 85 km — approximately 55 minutes. Jubail Industrial City is Saudi Arabia's largest planned industrial city, home to SABIC, the Royal Commission for Jubail and Yanbu (RCJY), dozens of petrochemical plants, and thousands of international engineers and professionals.
            </p>
            <p style={art.p}>
              <strong>Dammam Airport to Dhahran taxi distance</strong> is 55 km — around 40 minutes. Dhahran is the global headquarters of Saudi Aramco, the world's most valuable company. We deliver to all Aramco visitor gates, the Saudi Aramco Exhibit, and King Fahd University of Petroleum and Minerals (KFUPM).
            </p>
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
            <div style={art.infoBox}>
              <h3 style={{ ...art.infoBoxTitle, color: "#0C58D1" }}>GCC Cross-Border Taxi</h3>
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
              <Link href="/gcc-border-crossing" style={{ ...art.infoLink, color: "#0C58D1" }}>GCC border crossing guide →</Link>
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
          <div className="art-compare-box" style={art.compareBox}>
            <div style={art.compareSide}>
              <p style={art.compareLabel}>Pre-Booked Dammam Airport Taxi</p>
              {["Fixed fare — agreed before travel", "Driver waiting at arrivals exit", "Live flight tracking & free delay buffer", "GCC cross-border licensed", "Corporate monthly invoicing", "Wi-Fi · water · USB charging onboard"].map(i => (
                <p key={i} style={art.compareItem}><span style={{ color: "#0C58D1", marginRight: "0.5rem" }}>✓</span>{i}</p>
              ))}
            </div>
            <div className="art-compare-divider" style={art.compareDivider} />
            <div style={art.compareSide}>
              <p style={art.compareLabel}>Uber / Careem / Street Taxi</p>
              {["Surge pricing at peak & Eid", "45+ min queue at busy arrivals", "No flight tracking, driver may leave", "Cannot cross GCC borders", "No corporate invoicing", "No amenities guaranteed"].map(i => (
                <p key={i} style={{ ...art.compareItem, color: "#64748B" }}><span style={{ color: "#64748B", marginRight: "0.5rem" }}>✗</span>{i}</p>
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
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: "5rem 0 5rem",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  heroTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
    alignItems: "flex-start",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 4vw, 3.2rem)",
    color: "#000000",
    lineHeight: "1.1",
    fontWeight: "800",
    letterSpacing: "-0.03em",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "#333333",
    lineHeight: "1.75",
    maxWidth: "460px",
  },
  valueProps: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.65rem",
  },
  valueItem: {
    color: "#000000",
    fontSize: "0.93rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "0.65rem",
  },
  heroBtnGroup: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  heroStatsCard: {
    display: "flex",
    gap: "0",
    marginTop: "0.5rem",
    width: "100%",
    justifyContent: "flex-start",
    borderTop: "2px solid #0C58D1",
    paddingTop: "1.6rem",
  },
  heroStatItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    paddingRight: "2.5rem",
    borderRight: "1px solid #e5e7eb",
    marginRight: "2.5rem",
  },
  heroStatVal: {
    fontSize: "1.9rem",
    color: "#0C58D1",
    fontWeight: "800",
    letterSpacing: "-0.02em",
  },
  heroStatLbl: {
    fontSize: "0.75rem",
    color: "#64748B",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "0.07em",
  },
  heroFormCol: {
    width: "100%",
  },
  /* Trust strip */
  trustStrip: {
    backgroundColor: "#ffffff",
    borderBottom: "3px solid #0C58D1",
    padding: "0",
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
    gap: "0.6rem",
    padding: "1rem 2rem",
    borderRight: "1px solid #e5e7eb",
    whiteSpace: "nowrap" as const,
    transition: "background 0.2s",
  },
  trustIcon: { fontSize: "1.1rem" },
  trustText: { fontSize: "0.85rem", fontWeight: 700, color: "#0C58D1" },
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
    color: "#0C58D1",
    letterSpacing: "0.1em",
    border: "1px solid #0C58D1",
    padding: "0.2rem 0.6rem",
    borderRadius: "20px",
  },
  stepIconCircle: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: "#ffffff",
    border: "1px solid rgba(37,99,235,0.20)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
  },
  stepTitle: { fontSize: "1.1rem", fontWeight: 700, color: "#111111" },
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
  waTitle: { fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.4rem" },
  waSub:   { color: "var(--text-secondary)", fontSize: "0.95rem" },
  waBtn: {
    padding: "0.9rem 2rem",
    fontSize: "1rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    flexShrink: 0,
    backgroundColor: "#ffffff",
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
  whyCardTitle: { fontSize: "1.15rem", color: "#000000", marginBottom: "1rem" },
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
  routeCardTitle: { fontSize: "1.2rem", color: "#000000", fontWeight: "700" },
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
  routeDetailValue: { color: "var(--text-primary)", fontWeight: "600" },
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
  stars: { color: "#0C58D1", fontSize: "1.2rem", marginBottom: "1rem", letterSpacing: "2px" },
  testText: { fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-secondary)", fontStyle: "italic", marginBottom: "1.5rem" },
  testAuthor: { fontSize: "0.85rem", color: "#000000", fontWeight: 700 },
  faqList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  faqItem: {
    backgroundColor: "#ffffff",
    border: "1px solid var(--border-color)",
    padding: "1.5rem",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  faqQ: { fontSize: "1.05rem", color: "#000000", marginBottom: "0.5rem", fontWeight: 700 },
  faqA: { fontSize: "0.95rem", color: "#333333", lineHeight: "1.5" },
};

const art: Record<string, React.CSSProperties> = {
  wrap: {
    backgroundColor: "#ffffff",
    borderTop: "1px solid var(--border-color)",
    padding: "5rem 0 4rem",
  },

  /* ── Hero Banner ── */
  heroBanner: {
    position: "relative",
    background: "#ffffff",
    border: "1px solid rgba(37,99,235,0.15)",
    borderRadius: "20px",
    padding: "3.5rem",
    marginBottom: "4rem",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(37,99,235,0.08), 0 2px 12px rgba(0,0,0,0.06)",
  },
  heroBannerGlow: {
    position: "absolute",
    top: "-80px", left: "-80px",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  heroBannerContent: { position: "relative", zIndex: 1 },
  mainTitle: {
    fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 800,
    color: "#000000", lineHeight: 1.25, margin: "0.75rem 0 1.25rem",
  },
  lead: {
    fontSize: "0.97rem", color: "#333333", lineHeight: 1.85,
    maxWidth: "820px", marginBottom: "1.25rem",
  },

  /* 3D stat cards row */
  statsRow: {
    display: "flex", flexWrap: "wrap", gap: "0.9rem", marginTop: "2rem",
  },
  statCard3d: {
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "1rem 1.4rem", gap: "0.2rem",
    background: "#0C58D1",
    border: "1px solid rgba(37,99,235,0.25)",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
    transform: "translateY(0)",
  },
  statVal: { fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" },
  statLbl: { fontSize: "0.65rem", color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap", textAlign: "center" },

  /* content blocks */
  block: { marginBottom: "3.5rem" },
  h3: {
    fontSize: "1.2rem", fontWeight: 700, color: "#000000",
    borderLeft: "4px solid #0C58D1", paddingLeft: "0.8rem",
    marginBottom: "1.2rem",
  },
  p: { fontSize: "0.95rem", color: "#333333", lineHeight: 1.85, marginBottom: "0.75rem" },

  /* feature grid — white cards with navy top border */
  featureGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "1.2rem", marginTop: "1.5rem",
  },
  featureCard: {
    background: "#ffffff",
    borderTop: "3px solid #0C58D1",
    border: "1px solid #e5e7eb",
    borderRadius: "4px", padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  featureLine: {
    width: "36px", height: "3px",
    background: "#0C58D1",
    borderRadius: "2px", marginBottom: "1rem",
  },
  featureTitle: { fontSize: "0.9rem", color: "#000000", display: "block", fontWeight: 700, marginBottom: "0.45rem" },
  featureDesc: { fontSize: "0.82rem", color: "#333333", lineHeight: 1.7 },

  /* route table — clean white rows */
  routeGrid: { display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "1.2rem" },
  routeRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderLeft: "3px solid #0C58D1",
    borderRadius: "4px",
    padding: "0.85rem 1.2rem", gap: "1rem",
  },
  routeLeft: { display: "flex", flexDirection: "column", gap: "0.15rem" },
  routeName: { fontSize: "0.88rem", color: "#000000", fontWeight: 600 },
  routeMeta: { fontSize: "0.72rem", color: "#64748B" },
  routePrice: {
    fontSize: "0.88rem", fontWeight: 800, color: "#0C58D1",
    whiteSpace: "nowrap", flexShrink: 0,
  },

  /* two col — white cards */
  twoCol: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "1.5rem", marginBottom: "3.5rem",
  },
  infoBox: {
    borderTop: "4px solid #0C58D1",
    border: "1px solid #e5e7eb",
    borderRadius: "4px", padding: "2rem",
    background: "#ffffff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  infoBoxTitle: { fontSize: "1.05rem", fontWeight: 700, color: "#000000", marginBottom: "0.9rem" },
  ul: {
    paddingLeft: "1.2rem", color: "#333333",
    fontSize: "0.87rem", lineHeight: 2.1, margin: "0.5rem 0 1rem",
  },
  infoLink: { fontSize: "0.85rem", fontWeight: 700, color: "#0C58D1", textDecoration: "underline" },

  /* booking steps — white */
  stepsRow: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "1.2rem", marginTop: "1.5rem",
  },
  step: {
    background: "#ffffff",
    borderTop: "3px solid #0C58D1",
    border: "1px solid #e5e7eb",
    borderRadius: "4px",
    padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem",
  },
  stepNum: {
    fontSize: "2rem", fontWeight: 800, color: "#0C58D1", lineHeight: 1,
  },
  stepTitle: { fontSize: "0.9rem", color: "#000000", fontWeight: 700 },
  stepDesc: { fontSize: "0.79rem", color: "#333333", lineHeight: 1.65 },

  /* compare box — split white/navy */
  compareBox: {
    display: "grid", gridTemplateColumns: "1fr auto 1fr",
    gap: 0,
    border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden",
    background: "#ffffff",
    marginBottom: "3.5rem",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  },
  compareSide: { padding: "2rem 2.2rem" },
  compareDivider: { width: "1px", backgroundColor: "#e5e7eb" },
  compareLabel: {
    fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#0C58D1", marginBottom: "1.1rem",
  },
  compareItem: { fontSize: "0.84rem", color: "#000000", marginBottom: "0.55rem", display: "flex", alignItems: "flex-start" },
};
