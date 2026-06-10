import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "Dammam City Guide | Eastern Province Taxi, Tourism & Transfer Hub",
  description:
    "Complete guide to Dammam — capital of Saudi Arabia's Eastern Province. Taxi routes, tourist attractions (Corniche, Tarout, Half Moon Bay), business districts (Aramco, SABIC), and King Fahd International Airport (DMM).",
  alternates: { canonical: "https://dammamairporttaxi.com/dammam-guide" },
  openGraph: {
    title: "Dammam City Complete Guide | Tourist, Business & Transfer Info",
    description:
      "Everything about Dammam — Eastern Province capital. Tourist spots, Aramco, Jubail, airport guide, taxi routes to Bahrain, Riyadh, and all GCC countries.",
    url: "https://dammamairporttaxi.com/dammam-guide",
    type: "article",
  },
};

/* ── Schema ─────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
    { "@type": "ListItem", position: 2, name: "Dammam City Guide", item: "https://dammamairporttaxi.com/dammam-guide" },
  ],
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "City",
  name: "Dammam",
  alternateName: ["Ad Dammam", "الدمام"],
  description: "Dammam is the capital of Saudi Arabia's Eastern Province and the fourth-largest city in the Kingdom, home to King Fahd International Airport (DMM), Saudi Aramco headquarters area, and the Arabian Gulf Corniche.",
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Eastern Province",
    containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.4367, longitude: 50.1033 },
  url: "https://dammamairporttaxi.com/dammam-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where is Dammam located?", acceptedAnswer: { "@type": "Answer", text: "Dammam is the capital city of Saudi Arabia's Eastern Province (Al Mantiqah Al Sharqiyah), located on the western shore of the Arabian Gulf. It is the fourth-largest city in the Kingdom and part of the Dammam Metropolitan Area, which also includes Al Khobar, Dhahran, and Jubail." } },
    { "@type": "Question", name: "What is Dammam famous for?", acceptedAnswer: { "@type": "Answer", text: "Dammam is famous for being the heart of Saudi Arabia's oil and gas industry. The city is home to Saudi Aramco's operational areas, SABIC petrochemicals, and Jubail Industrial City — one of the world's largest industrial complexes. Dammam is also known for its 45 km Corniche, proximity to Bahrain via the King Fahd Causeway, and as a gateway to GCC travel." } },
    { "@type": "Question", name: "What is the airport code for Dammam Airport?", acceptedAnswer: { "@type": "Answer", text: "Dammam Airport's IATA code is DMM. The full name is King Fahd International Airport (مطار الملك فهد الدولي). It is located approximately 35 km northwest of Dammam city centre and covers 780 square kilometres — the world's largest airport by land area." } },
    { "@type": "Question", name: "What are the top tourist attractions near Dammam?", acceptedAnswer: { "@type": "Answer", text: "Top attractions near Dammam include: Dammam Corniche (45 km waterfront promenade), Al Marjan Island (beachfront leisure), Tarout Island in Qatif (6,000-year-old settlement with Tarout Castle), Half Moon Bay beach resort (35 km south of Khobar), Bahrain via King Fahd Causeway (85 km, 1.5 hours), and the Hofuf Al-Ahsa Oasis (UNESCO World Heritage, 160 km south)." } },
    { "@type": "Question", name: "How far is Dammam from Bahrain?", acceptedAnswer: { "@type": "Answer", text: "Dammam to Bahrain (Manama) is approximately 85 km via the King Fahd Causeway and takes 1.5 to 2 hours by private taxi. The causeway toll is included in our Dammam Airport Taxi fare." } },
    { "@type": "Question", name: "How far is Dammam from Riyadh?", acceptedAnswer: { "@type": "Answer", text: "Dammam to Riyadh is approximately 400 km and takes 3.5 to 4 hours by private taxi via the Dammam–Riyadh Expressway." } },
    { "@type": "Question", name: "What cities are in the Dammam Metropolitan Area?", acceptedAnswer: { "@type": "Answer", text: "The Dammam Metropolitan Area (also called the Tri-City Area) includes Dammam (capital), Al Khobar, and Dhahran as its three main cities. The broader Eastern Province also includes Jubail (industrial city), Qatif, Ras Tanura, Hofuf (Al-Ahsa), and Abqaiq." } },
  ],
};

/* ── Local routes data ─── */
const localRoutes = [
  { name: "Airport → Dammam City", dist: "25 km", time: "20–25 min", href: "/routes/dammam-airport-to-dammam-city" },
  { name: "Airport → Al Khobar", dist: "60 km", time: "45 min", href: "/routes/dammam-airport-to-khobar" },
  { name: "Airport → Dhahran (Aramco)", dist: "55 km", time: "40 min", href: "/routes/dammam-airport-to-dhahran" },
  { name: "Airport → Jubail", dist: "85 km", time: "55 min", href: "/routes/dammam-airport-to-jubail" },
  { name: "Airport → Qatif", dist: "55 km", time: "40–50 min", href: "/routes/dammam-airport-to-qatif" },
  { name: "Airport → Ras Tanura", dist: "75 km", time: "55–65 min", href: "/routes/dammam-airport-to-ras-tanura" },
  { name: "Airport → Half Moon Bay", dist: "85 km", time: "60–70 min", href: "/routes/dammam-airport-to-half-moon-bay" },
  { name: "Airport → Hofuf (Al-Ahsa)", dist: "160 km", time: "1.5–2 hrs", href: "/routes/dammam-airport-to-hofuf" },
];

const intercityRoutes = [
  { name: "Dammam → Riyadh", dist: "400 km", time: "3.5–4 hrs", href: "/routes/dammam-to-riyadh" },
  { name: "Dammam → Madinah", dist: "1,100 km", time: "10–11 hrs", href: "/routes/dammam-to-madinah" },
  { name: "Dammam → Mecca", dist: "1,280 km", time: "12–13 hrs", href: "/routes/dammam-to-mecca" },
  { name: "Dammam → Jeddah", dist: "1,260 km", time: "12–13 hrs", href: "/routes/dammam-to-jeddah" },
  { name: "Dammam → Qassim", dist: "500 km", time: "5–6 hrs", href: "/routes/dammam-to-qassim" },
];

const gccRoutes = [
  { name: "Dammam → Bahrain", dist: "85 km", time: "1.5–2 hrs", flag: "🇧🇭", href: "/routes/dammam-to-bahrain" },
  { name: "Dammam → Doha, Qatar", dist: "400 km", time: "5–6 hrs", flag: "🇶🇦", href: "/routes/dammam-to-doha" },
  { name: "Dammam → Kuwait City", dist: "420 km", time: "4–4.5 hrs", flag: "🇰🇼", href: "/routes/dammam-to-kuwait" },
  { name: "Dammam → Dubai, UAE", dist: "950 km", time: "9–10 hrs", flag: "🇦🇪", href: "/routes/dammam-to-uae" },
  { name: "Dammam → Abu Dhabi", dist: "870 km", time: "8.5–9.5 hrs", flag: "🇦🇪", href: "/routes/dammam-to-abu-dhabi" },
  { name: "Dammam → Muscat, Oman", dist: "1,400 km", time: "14–16 hrs", flag: "🇴🇲", href: "/routes/dammam-to-muscat" },
];

export default function DammamGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={s.page}>
        <Navbar />

        {/* Hero */}
        <section style={s.hero}>
          <div className="container" style={s.heroCont}>
            <nav style={s.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" style={s.breadLink}>Home</Link>
              <span style={s.breadSep}>/</span>
              <span style={s.breadCurrent}>Dammam City Guide</span>
            </nav>
            <span className="badge-gold">Dammam Eastern Province</span>
            <h1 style={s.h1}>Dammam City Guide — Taxi, Tourism & Transfers</h1>
            <p style={s.heroSub}>
              Complete guide to Dammam — capital of Saudi Arabia's Eastern Province. Discover tourist attractions, business districts, airport information, and all available taxi routes to local cities, Saudi Arabia, and the GCC.
            </p>
            <div style={s.chips}>
              {["Capital of Eastern Province", "King Fahd Airport (DMM)", "45 km Corniche", "Aramco & SABIC Hub", "85 km from Bahrain"].map(c => (
                <span key={c} style={s.chip}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        <main>
          <div className="container" style={{ padding: "4rem 0" }}>
            <div style={s.mainGrid}>
              <div style={s.contentCol}>

                {/* About Dammam */}
                <section style={s.section}>
                  <h2 style={s.h2}>About Dammam — Eastern Province Capital</h2>
                  <p style={s.p}>
                    <strong>Dammam</strong> (Arabic: الدمام) is the capital city of Saudi Arabia's <strong>Eastern Province (Al Mantiqah Al Sharqiyah)</strong> and the Kingdom's fourth-largest city, with a metropolitan population exceeding 4 million. Situated on the western coast of the <strong>Arabian Gulf</strong>, Dammam forms the core of the "Tri-City Area" alongside <strong>Al Khobar</strong> and <strong>Dhahran</strong>.
                  </p>
                  <p style={s.p}>
                    The city rose to global prominence after the discovery of commercial oil at <strong>Dammam Well No. 7</strong> (nicknamed "Prosperity Well") on March 4, 1938 — the first commercially viable oil discovery in the Arabian Peninsula. Today, the Eastern Province generates over 90% of Saudi Arabia's oil wealth and hosts the global headquarters of <strong>Saudi Aramco</strong> in Dhahran.
                  </p>

                  <div style={s.factGrid}>
                    {[
                      { label: "Official Name", val: "Dammam (Ad Dammam)" },
                      { label: "Province", val: "Eastern Province (Al Sharqiyah)" },
                      { label: "Metro Population", val: "~4 million (2024)" },
                      { label: "Coordinates", val: "26.43°N, 50.10°E" },
                      { label: "Airport", val: "King Fahd Int'l Airport (DMM)" },
                      { label: "Distance to Bahrain", val: "85 km via King Fahd Causeway" },
                      { label: "Distance to Riyadh", val: "400 km via expressway" },
                      { label: "Distance to Kuwait", val: "420 km via Khafji border" },
                      { label: "Key Industries", val: "Oil & Gas, Petrochemicals, Industrial" },
                      { label: "Major Employers", val: "Saudi Aramco, SABIC, RCJY" },
                    ].map(f => (
                      <div key={f.label} style={s.factCard}>
                        <span style={s.factLbl}>{f.label}</span>
                        <span style={s.factVal}>{f.val}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Dammam Metro Area */}
                <section style={s.section}>
                  <h2 style={s.h2}>Dammam Metropolitan Area — Cities & Districts</h2>
                  <p style={s.p}>The greater Dammam urban area encompasses several distinct cities, each with its own character and function:</p>
                  <div style={s.cityGrid}>
                    {[
                      { name: "Dammam", role: "Provincial Capital", desc: "Government, commerce, and banking hub. Home to the 45 km Corniche, Al Marjan Island, Al-Rashid Mall, and the main port (King Abdulaziz Port).", highlight: "Provincial HQ" },
                      { name: "Al Khobar", role: "Commercial & Residential", desc: "The Eastern Province's most cosmopolitan city. Home to international businesses, expat communities, high-end shopping, dining, and the King Fahd Causeway to Bahrain.", highlight: "Closest to Bahrain" },
                      { name: "Dhahran", role: "Aramco Headquarters", desc: "Home to Saudi Aramco's global headquarters (the Saudi Aramco Compound), King Fahd University of Petroleum and Minerals (KFUPM), and the King Fahd International Airport.", highlight: "Aramco HQ" },
                      { name: "Jubail", role: "Industrial City", desc: "Jubail Industrial City — one of the world's largest industrial complexes. Home to SABIC, RCJY, SIPCHEM, and hundreds of petrochemical plants.", highlight: "World's Largest Industrial City" },
                      { name: "Qatif", role: "Heritage City", desc: "One of the oldest cities in the Arabian Peninsula (6,000+ years). Tarout Island, Qatif Castle, traditional souqs, and date palm gardens.", highlight: "Historic & Cultural" },
                      { name: "Ras Tanura", role: "Oil Terminal", desc: "Saudi Aramco's primary crude oil export terminal — one of the world's largest. Also hosts a residential compound and refinery complex.", highlight: "World's Largest Oil Terminal" },
                    ].map(c => (
                      <div key={c.name} className="glass-card" style={s.cityCard}>
                        <div style={s.cityTop}>
                          <h3 style={s.cityName}>{c.name}</h3>
                          <span style={s.cityHighlight}>{c.highlight}</span>
                        </div>
                        <p style={s.cityRole}>{c.role}</p>
                        <p style={s.cityDesc}>{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tourist Attractions */}
                <section style={s.section}>
                  <h2 style={s.h2}>Dammam & Eastern Province — Top Tourist Attractions</h2>
                  <div style={s.attrList}>
                    {[
                      { icon: "🌊", name: "Dammam Corniche (45 km)", desc: "One of the longest waterfront promenades in Saudi Arabia, lined with parks, fountains, seafood restaurants, cycling tracks, and the King Fahd Fountain viewpoint." },
                      { icon: "🏝️", name: "Al Marjan Island", desc: "A popular man-made beach island in Dammam with hotels, family entertainment, beachside cafés, and open-air waterfront spaces." },
                      { icon: "🏰", name: "Tarout Island & Castle (Qatif)", desc: "A 6,000-year-old settlement on Tarout Island in Qatif with the Portuguese-era Tarout Castle, Dilmun-era burial mounds, and a traditional fishing harbour. UNESCO tentative list candidate." },
                      { icon: "🏖️", name: "Half Moon Bay Beach Resort", desc: "The Eastern Province's most popular beach destination, 35 km south of Khobar. A crescent-shaped bay with private beaches, chalets, jet skiing, kayaking, and waterfront dining." },
                      { icon: "🌴", name: "Al-Ahsa Oasis — Hofuf (UNESCO)", desc: "160 km south of Dammam, Al-Ahsa is the world's largest natural oasis (UNESCO World Heritage Site), featuring 2.5 million date palms, the historic Qasr Ibrahim, and Ibrahim's Well." },
                      { icon: "🏛️", name: "Regional Museum of Dammam", desc: "One of Saudi Arabia's premier historical museums, covering Eastern Province archaeological finds, Dilmun civilisation artefacts, and the region's oil discovery story." },
                      { icon: "🇧🇭", name: "Bahrain via King Fahd Causeway", desc: "Just 85 km from Dammam, Bahrain is the most popular weekend destination for Eastern Province residents. The 25 km causeway connects Al Khobar to Manama in 1.5–2 hours." },
                      { icon: "🔭", name: "Prince Sultan Science Oasis", desc: "A science and technology museum in Dammam with interactive exhibits, a planetarium, and STEM education programmes — popular for school and family visits." },
                    ].map(a => (
                      <div key={a.name} style={s.attrItem}>
                        <span style={s.attrIcon}>{a.icon}</span>
                        <div>
                          <h3 style={s.attrName}>{a.name}</h3>
                          <p style={s.attrDesc}>{a.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* All Routes from Dammam */}
                <section style={s.section}>
                  <h2 style={s.h2}>All Taxi Routes from Dammam — Complete List</h2>

                  <h3 style={s.h3}>Group A — DMM Airport to Eastern Province Cities</h3>
                  <div style={s.routeTable}>
                    {localRoutes.map(r => (
                      <Link key={r.href} href={r.href} style={s.routeRow}>
                        <span style={s.routeName}>{r.name}</span>
                        <span style={s.routeMeta}>{r.dist} · {r.time}</span>
                        <span style={s.routeArrow}>→</span>
                      </Link>
                    ))}
                  </div>

                  <h3 style={{ ...s.h3, marginTop: "2rem" }}>Group B — Dammam to Saudi Intercity</h3>
                  <div style={s.routeTable}>
                    {intercityRoutes.map(r => (
                      <Link key={r.href} href={r.href} style={s.routeRow}>
                        <span style={s.routeName}>{r.name}</span>
                        <span style={s.routeMeta}>{r.dist} · {r.time}</span>
                        <span style={s.routeArrow}>→</span>
                      </Link>
                    ))}
                  </div>

                  <h3 style={{ ...s.h3, marginTop: "2rem" }}>Group C — Dammam to GCC Countries</h3>
                  <div style={s.routeTable}>
                    {gccRoutes.map(r => (
                      <Link key={r.href} href={r.href} style={s.routeRow}>
                        <span style={s.routeName}>{r.flag} {r.name}</span>
                        <span style={s.routeMeta}>{r.dist} · {r.time}</span>
                        <span style={s.routeArrow}>→</span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* FAQ */}
                <section style={s.section}>
                  <h2 style={s.h2}>Frequently Asked Questions about Dammam</h2>
                  <div style={s.faqList}>
                    {[
                      { q: "Where is Dammam located?", a: "Dammam is the capital city of Saudi Arabia's Eastern Province, located on the western shore of the Arabian Gulf. It is approximately 400 km east of Riyadh, 85 km from Bahrain via the King Fahd Causeway, and part of the metropolitan area also known as the Tri-City Area (Dammam, Al Khobar, Dhahran)." },
                      { q: "What is Dammam famous for?", a: "Dammam is famous for being the heart of Saudi Arabia's oil and gas industry (Saudi Aramco, SABIC), the King Fahd International Airport (world's largest by land area), the King Fahd Causeway to Bahrain, and the 45 km Arabian Gulf Corniche. The Eastern Province produces over 90% of Saudi Arabia's oil wealth." },
                      { q: "What are the top tourist spots near Dammam?", a: "Top attractions: Dammam Corniche (45 km waterfront), Al Marjan Island (beach), Tarout Island in Qatif (6,000-year-old heritage), Half Moon Bay beach (35 km from Khobar), Al-Ahsa Oasis UNESCO World Heritage in Hofuf (160 km), and Bahrain via King Fahd Causeway (85 km)." },
                      { q: "How far is Dammam from Bahrain?", a: "85 km via the King Fahd Causeway — 1.5 to 2 hours by private taxi. The causeway toll is included in our Dammam to Bahrain taxi fare." },
                      { q: "What cities are near Dammam?", a: "Dammam's metropolitan area includes Al Khobar (20 km south), Dhahran (30 km south — Aramco HQ), Jubail (85 km north — industrial city), Qatif (35 km north — heritage city), Ras Tanura (75 km north — oil terminal), and Hofuf/Al-Ahsa (160 km south — UNESCO oasis)." },
                      { q: "How do I get from Dammam Airport to the city?", a: "King Fahd International Airport (DMM) is 25 km from Dammam city centre — approximately 20–25 minutes by private taxi. Pre-book with Dammam Airport Taxi for a fixed rate with meet & greet, 60-min free wait, and airport parking included." },
                    ].map((faq, i) => (
                      <div key={i} style={s.faqItem}>
                        <h3 style={s.faqQ}>{faq.q}</h3>
                        <p style={s.faqA}>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>

              {/* Sidebar */}
              <aside style={s.sidebar}>
                <div className="glass-card" style={s.sideCard}>
                  <h3 style={s.sideTitle}>Quick Dammam Facts</h3>
                  {[
                    { label: "Airport", val: "DMM · 25 km from city" },
                    { label: "To Bahrain", val: "85 km · 1.5–2 hrs" },
                    { label: "To Riyadh", val: "400 km · 3.5–4 hrs" },
                    { label: "To Kuwait", val: "420 km · 4–4.5 hrs" },
                    { label: "Corniche", val: "45 km waterfront" },
                    { label: "Province", val: "Eastern (Al Sharqiyah)" },
                    { label: "Key employer", val: "Saudi Aramco" },
                  ].map(f => (
                    <div key={f.label} style={s.sideRow}>
                      <span style={s.sideLbl}>{f.label}</span>
                      <span style={s.sideVal}>{f.val}</span>
                    </div>
                  ))}
                </div>

                <div className="glass-card" style={{ ...s.sideCard, marginTop: "1.5rem" }}>
                  <h3 style={s.sideTitle}>Book a Dammam Taxi</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1rem" }}>24/7 dispatch · Meet & greet · Fixed rates</p>
                  <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center", marginBottom: "1rem" }}>
                    WhatsApp Booking
                  </a>
                  {[
                    { label: "Airport → City", href: "/routes/dammam-airport-to-dammam-city" },
                    { label: "Airport → Khobar", href: "/routes/dammam-airport-to-khobar" },
                    { label: "Airport → Jubail", href: "/routes/dammam-airport-to-jubail" },
                    { label: "Dammam → Bahrain", href: "/routes/dammam-to-bahrain" },
                    { label: "Dammam → Riyadh", href: "/routes/dammam-to-riyadh" },
                  ].map(r => (
                    <Link key={r.href} href={r.href} style={s.sideRoute}>
                      {r.label} <span style={{ color: "var(--accent-gold)" }}>→</span>
                    </Link>
                  ))}
                </div>

                <div className="glass-card" style={{ ...s.sideCard, marginTop: "1.5rem" }}>
                  <h3 style={s.sideTitle}>Explore More</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {[
                      { label: "DMM Airport Guide", href: "/dammam-airport-guide" },
                      { label: "GCC Border Crossing", href: "/gcc-border-crossing" },
                      { label: "Tourist Destinations", href: "/tourist-destinations" },
                      { label: "Corporate Transfers", href: "/corporate-transfers" },
                    ].map(l => (
                      <Link key={l.href} href={l.href} style={{ ...s.sideRoute, justifyContent: "space-between" }}>
                        <span>{l.label}</span><span style={{ color: "var(--accent-gold)" }}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <RelatedRoutes currentUrl="/dammam-guide" />
        <StickyCTA />
        <Footer />
      </div>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  hero: { background: "linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.98)), url('/hero-bg.jpg') center/cover no-repeat", padding: "5rem 0 3rem", borderBottom: "1px solid var(--border-color)" },
  heroCont: { display: "flex", flexDirection: "column", gap: "1rem" },
  breadcrumb: { display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem" },
  breadLink: { color: "var(--accent-gold)", textDecoration: "none" },
  breadSep: { color: "var(--text-muted)" },
  breadCurrent: { color: "var(--text-secondary)" },
  h1: { fontSize: "2.4rem", color: "#fff", fontWeight: "800", lineHeight: "1.2", maxWidth: "900px" },
  heroSub: { fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "750px", lineHeight: "1.7" },
  chips: { display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.5rem" },
  chip: { backgroundColor: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.3)", color: "var(--accent-gold)", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600" },
  mainGrid: { display: "grid", gridTemplateColumns: "1fr 290px", gap: "3rem", alignItems: "start" },
  contentCol: { display: "flex", flexDirection: "column", gap: "3.5rem" },
  section: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  h2: { fontSize: "1.6rem", color: "#fff", fontWeight: "700", borderBottom: "2px solid rgba(245,197,24,0.3)", paddingBottom: "0.6rem" },
  h3: { fontSize: "1rem", color: "var(--accent-gold)", fontWeight: "700" },
  p: { fontSize: "0.97rem", color: "var(--text-secondary)", lineHeight: "1.75" },
  factGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.8rem", marginTop: "0.5rem" },
  factCard: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.8rem 1rem", display: "flex", flexDirection: "column", gap: "0.3rem" },
  factLbl: { fontSize: "0.72rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase" },
  factVal: { fontSize: "0.88rem", color: "#fff" },
  cityGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" },
  cityCard: { padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" },
  cityTop: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" },
  cityName: { fontSize: "1.1rem", color: "#fff", fontWeight: "700", margin: 0 },
  cityHighlight: { backgroundColor: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.25)", color: "var(--accent-gold)", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.72rem", fontWeight: "700" },
  cityRole: { fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: "600", margin: 0 },
  cityDesc: { fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: "1.5", margin: 0 },
  attrList: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  attrItem: { display: "flex", gap: "1rem", alignItems: "flex-start" },
  attrIcon: { fontSize: "1.6rem", flexShrink: 0, marginTop: "0.1rem" },
  attrName: { fontSize: "0.97rem", color: "#fff", fontWeight: "700", marginBottom: "0.3rem" },
  attrDesc: { fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: "1.55" },
  routeTable: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  routeRow: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.8rem 1.1rem", display: "flex", alignItems: "center", textDecoration: "none", gap: "0.5rem" },
  routeName: { color: "#fff", fontSize: "0.9rem", fontWeight: "600", flex: 1 },
  routeMeta: { color: "var(--text-muted)", fontSize: "0.8rem" },
  routeArrow: { color: "var(--accent-gold)", fontWeight: "700" },
  faqList: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.4rem", borderRadius: "6px" },
  faqQ: { fontSize: "1rem", color: "#fff", marginBottom: "0.5rem", fontWeight: "700" },
  faqA: { fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.6rem" },
  sideTitle: { fontSize: "1rem", color: "#fff", fontWeight: "700", marginBottom: "1rem" },
  sideRow: { display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid var(--border-color)", fontSize: "0.82rem" },
  sideLbl: { color: "var(--text-muted)" },
  sideVal: { color: "#fff", fontWeight: "600", textAlign: "right", maxWidth: "55%" },
  sideRoute: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0.7rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "4px", textDecoration: "none", fontSize: "0.83rem", color: "var(--text-secondary)", border: "1px solid var(--border-color)", marginBottom: "0.4rem" },
};


