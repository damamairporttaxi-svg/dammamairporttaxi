import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "Qatif Taxi Service | Tarout Island & Airport Transfers",
  description:
    "Private taxi service in Qatif — airport transfers from DMM, transfers to Tarout Island, Qatif Corniche, and all Eastern Province destinations. 55 km from King Fahd Airport.",
  alternates: { canonical: "https://dammamairporttaxi.com/qatif" },
  openGraph: {
    title: "Qatif Taxi Service | Tarout Island & DMM Airport Transfers",
    description: "Qatif taxi — DMM Airport transfers, Tarout Island tours, and Eastern Province routes. Fixed rates, meet & greet, 24/7.",
    url: "https://dammamairporttaxi.com/qatif",
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
      { "@type": "ListItem", position: 2, name: "Dammam Guide", item: "https://dammamairporttaxi.com/dammam-guide" },
      { "@type": "ListItem", position: 3, name: "Qatif", item: "https://dammamairporttaxi.com/qatif" },
    ],
  },
  {
    "@context": "https://schema.org", "@type": "City",
    name: "Qatif", alternateName: ["القطيف", "Al Qatif"],
    description: "Qatif is one of the oldest continuously inhabited cities in the Arabian Peninsula, located on the Arabian Gulf coast in Saudi Arabia's Eastern Province. It is home to Tarout Island — a major archaeological site with over 6,000 years of history.",
    containedInPlace: { "@type": "AdministrativeArea", name: "Eastern Province, Saudi Arabia" },
    geo: { "@type": "GeoCoordinates", latitude: 26.5637, longitude: 50.0095 },
  },
  {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How far is Qatif from Dammam Airport?", acceptedAnswer: { "@type": "Answer", text: "Qatif is approximately 55 km from King Fahd International Airport (DMM), taking 40–50 minutes by private taxi. We provide direct airport-to-Qatif transfers to all city locations and Tarout Island." } },
      { "@type": "Question", name: "How do I get to Tarout Island from Dammam Airport?", acceptedAnswer: { "@type": "Answer", text: "Tarout Island is approximately 55 km from Dammam Airport (DMM). Our taxi takes you via the Qatif–Tarout causeway directly to Tarout Castle, the old souq, and all archaeological sites on the island. Travel time is approximately 45–55 minutes from DMM." } },
      { "@type": "Question", name: "What is Tarout Island famous for?", acceptedAnswer: { "@type": "Answer", text: "Tarout Island is one of the oldest continuously inhabited islands in the world, with a history spanning over 6,000 years. It was a centre of the ancient Dilmun civilisation and later occupied by the Portuguese in the 16th century. The island features Tarout Castle (Portuguese-era fort), ancient burial mounds, a traditional fishing harbour, and a bustling heritage market." } },
      { "@type": "Question", name: "Is Qatif worth visiting as a tourist?", acceptedAnswer: { "@type": "Answer", text: "Yes. Qatif and Tarout Island are among the most historically significant and culturally rich destinations in the Eastern Province. The Qatif Old Town has traditional coral-stone architecture, the famous Qatif date market, and the scenic Qatif Corniche. Tarout Island adds a UNESCO-worthy archaeological experience." } },
    ],
  },
];

const routes = [
  { name: "Dammam Airport (DMM) → Qatif", detail: "55 km · 40–50 min · Direct transfer", href: "/routes/dammam-airport-to-qatif" },
  { name: "Qatif → Al Khobar", detail: "40 km · 35 min", href: "/routes/dammam-airport-to-khobar" },
  { name: "Qatif → Dammam City", detail: "35 km · 30 min", href: "/routes/dammam-airport-to-dammam-city" },
  { name: "Qatif → Ras Tanura", detail: "30 km · 25 min", href: "/routes/dammam-airport-to-ras-tanura" },
  { name: "Qatif → Bahrain (Causeway)", detail: "~80 km · 1–1.5 hrs", href: "/routes/dammam-to-bahrain" },
  { name: "Qatif → Jubail", detail: "50 km · 45 min", href: "/routes/dammam-airport-to-jubail" },
];

export default function QatifPage() {
  return (
    <>
      {schemas.map((sc, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sc) }} />
      ))}
      <div style={s.page}>
        <Navbar />
        <section style={s.hero}>
          <div className="container" style={s.hc}>
            <nav style={s.bc} aria-label="Breadcrumb">
              <Link href="/" style={s.bL}>Home</Link><span style={s.bS}>/</span>
              <Link href="/dammam-guide" style={s.bL}>Dammam</Link><span style={s.bS}>/</span>
              <span style={s.bC}>Qatif</span>
            </nav>
            <span className="badge-gold">Qatif — 6,000 Years of History</span>
            <h1 style={s.h1}>Qatif Taxi Service — Tarout Island & Airport Transfers</h1>
            <p style={s.sub}>Private taxi service in Qatif — airport transfers from King Fahd International Airport (DMM), Tarout Island visits, Qatif Corniche, and all Eastern Province destinations. Fixed rates · Meet & Greet · 24/7.</p>
            <div style={s.chips}>
              {["55 km from DMM Airport", "Tarout Island Access", "6,000-Year Heritage City", "Arabian Gulf Corniche", "Date Palm Gardens"].map(c => (
                <span key={c} style={s.chip}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        <main>
          <div className="container" style={s.grid}>
            <div style={s.col}>

              <section style={s.sec}>
                <h2 style={s.h2}>About Qatif — Arabia's Ancient City</h2>
                <p style={s.p}>
                  <strong>Qatif</strong> (Arabic: القطيف) is one of the oldest continuously inhabited settlements in the Arabian Peninsula, with a history spanning more than 6,000 years. Located on the Arabian Gulf coast in Saudi Arabia's Eastern Province, the city is celebrated for its date palm gardens, traditional coral-stone architecture, vibrant heritage souqs, and the historic <strong>Tarout Island</strong>.
                </p>
                <p style={s.p}>
                  The city was mentioned in ancient records as a major port and trading centre during the <strong>Dilmun civilisation</strong> (3rd–1st millennium BC), through the <strong>Phoenician, Greek, and Islamic eras</strong>, to the <strong>Portuguese colonial period</strong> in the 16th century. Today Qatif preserves this extraordinary layered heritage while serving as a modern residential city for Eastern Province residents.
                </p>
                <div style={s.factGrid}>
                  {[
                    { l: "Distance to DMM Airport", v: "55 km · 40–50 min" },
                    { l: "Distance to Dammam", v: "35 km · 30 min" },
                    { l: "Distance to Al Khobar", v: "40 km · 35 min" },
                    { l: "Distance to Ras Tanura", v: "30 km · 25 min" },
                    { l: "History", v: "6,000+ years continuous habitation" },
                    { l: "Key Site", v: "Tarout Island (UNESCO tentative)" },
                    { l: "Famous For", v: "Dates, Heritage, Archaeology" },
                    { l: "Coordinates", v: "26.56°N, 50.01°E" },
                  ].map(f => (
                    <div key={f.l} style={s.fact}><span style={s.fl}>{f.l}</span><span style={s.fv}>{f.v}</span></div>
                  ))}
                </div>
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>Qatif & Tarout Island — Key Attractions</h2>
                {[
                  { name: "Tarout Castle (Portuguese Fort)", desc: "A 16th-century Portuguese fort built on the ruins of much earlier civilisations on Tarout Island. The castle overlooks the sea and is surrounded by the old Qatif Souk. It is one of the best-preserved historical forts in the Eastern Province." },
                  { name: "Dilmun Burial Mounds & Archaeological Sites", desc: "Tarout Island contains numerous burial mounds and artefacts from the ancient Dilmun civilisation (c. 3000 BC). Saudi Arabia has nominated the Dilmun burial mounds for UNESCO World Heritage status." },
                  { name: "Tarout Traditional Fishing Harbour", desc: "A picturesque working harbour where traditional fishing boats dock alongside coral-stone warehouses. Fresh seafood is sold daily at the Tarout fish market — one of the most authentic seafood markets in the Eastern Province." },
                  { name: "Qatif Corniche", desc: "A scenic waterfront promenade along the Arabian Gulf coast with parks, family seating areas, and views across to Tarout Island. Popular for evening walks and weekend gatherings." },
                  { name: "Qatif Date Palm Gardens", desc: "Qatif has been famous for its high-quality Khalas dates for thousands of years. The city's date markets are especially active during the Ramadan and Eid seasons when the finest varieties are sold." },
                  { name: "Qatif Old Town (Al Balad Al Qadim)", desc: "The historic old quarter of Qatif features traditional coral-stone houses with ornate wooden doorways and wind towers (barjeels) — a remarkable example of traditional Gulf architecture." },
                ].map(a => (
                  <div key={a.name} style={s.attrItem}>
                    <div><h3 style={s.aName}>{a.name}</h3><p style={s.aDesc}>{a.desc}</p></div>
                  </div>
                ))}
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>All Taxi Routes from Qatif</h2>
                <div style={s.routeList}>
                  {routes.map(r => (
                    <Link key={r.href} href={r.href} style={s.routeRow}>
                      <div><strong style={s.rN}>{r.name}</strong><p style={s.rD}>{r.detail}</p></div>
                      <span style={s.rA}>→</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>Frequently Asked Questions — Qatif Taxi</h2>
                <div style={s.faqList}>
                  {[
                    { q: "How far is Qatif from Dammam Airport?", a: "55 km · 40–50 minutes. We provide direct airport-to-Qatif transfers with meet & greet at the arrivals hall and 60-minute free waiting from your landing time." },
                    { q: "How do I get to Tarout Island from the airport?", a: "Tarout Island is 55 km from DMM Airport — 45–55 minutes by private taxi. We deliver directly to Tarout Castle, the old souq, and all island locations." },
                    { q: "Is Qatif worth visiting as a tourist?", a: "Absolutely. Qatif and Tarout Island are among the Eastern Province's richest cultural destinations. Tarout Castle, Dilmun burial mounds, traditional date markets, and the Qatif Old Town offer a genuine Arabian heritage experience." },
                    { q: "Can I visit Qatif as a day trip from Dammam or Khobar?", a: "Yes. Qatif is 35 km from Dammam city (30 minutes) and 40 km from Al Khobar (35 minutes). It makes a perfect half-day or full-day cultural excursion from either city." },
                  ].map((f, i) => (
                    <div key={i} style={s.faqItem}><h3 style={s.fQ}>{f.q}</h3><p style={s.fA}>{f.a}</p></div>
                  ))}
                </div>
              </section>

            </div>

            <aside style={s.sidebar}>
              <div className="glass-card" style={s.sideCard}>
                <h3 style={s.sideT}>Book Qatif Taxi</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1rem" }}>Tarout Island · 24/7 · Fixed rates</p>
                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center" }}>
                  WhatsApp Booking
                </a>
              </div>
              <div className="glass-card" style={{ ...s.sideCard, marginTop: "1.5rem" }}>
                <h3 style={s.sideT}>Qatif Quick Facts</h3>
                {[
                  { l: "To DMM Airport", v: "55 km · 45 min" },
                  { l: "To Dammam", v: "35 km · 30 min" },
                  { l: "To Khobar", v: "40 km · 35 min" },
                  { l: "To Ras Tanura", v: "30 km · 25 min" },
                  { l: "To Jubail", v: "50 km · 45 min" },
                  { l: "To Bahrain", v: "~80 km · 1.5 hrs" },
                ].map(f => (
                  <div key={f.l} style={s.sideRow}><span style={s.sl}>{f.l}</span><span style={s.sv}>{f.v}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </main>

        <RelatedRoutes currentUrl="/qatif" />
        <StickyCTA />
        <Footer />
      </div>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  hero: { background: "linear-gradient(rgba(0,0,0,0.88),rgba(0,0,0,0.98)),url('/hero-bg.jpg') center/cover no-repeat", padding: "5rem 0 3rem", borderBottom: "1px solid var(--border-color)" },
  hc: { display: "flex", flexDirection: "column", gap: "1rem" },
  bc: { display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem" },
  bL: { color: "var(--accent-gold)", textDecoration: "none" },
  bS: { color: "var(--text-muted)" },
  bC: { color: "var(--text-secondary)" },
  h1: { fontSize: "clamp(1.1rem, 2.4vw, 1.75rem)", color: "#fff", fontWeight: "800", lineHeight: "1.25", maxWidth: "850px" },
  sub: { fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "700px", lineHeight: "1.7" },
  chips: { display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.5rem" },
  chip: { backgroundColor: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.3)", color: "var(--accent-gold)", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600" },
  grid: { display: "grid", gridTemplateColumns: "1fr 280px", gap: "3rem", padding: "4rem 0", alignItems: "start" },
  col: { display: "flex", flexDirection: "column", gap: "3rem" },
  sec: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  h2: { fontSize: "1.55rem", color: "#fff", fontWeight: "700", borderBottom: "2px solid rgba(245,197,24,0.3)", paddingBottom: "0.6rem" },
  p: { fontSize: "0.96rem", color: "var(--text-secondary)", lineHeight: "1.75" },
  factGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "0.7rem", marginTop: "0.5rem" },
  fact: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.75rem 0.9rem", display: "flex", flexDirection: "column", gap: "0.25rem" },
  fl: { fontSize: "0.7rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase" },
  fv: { fontSize: "0.86rem", color: "#fff" },
  attrItem: { display: "flex", gap: "1rem", alignItems: "flex-start" },
  aIcon: { fontSize: "1.6rem", flexShrink: 0, marginTop: "0.1rem" },
  aName: { fontSize: "0.96rem", color: "#fff", fontWeight: "700", marginBottom: "0.3rem" },
  aDesc: { fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.55" },
  routeList: { display: "flex", flexDirection: "column", gap: "0.6rem" },
  routeRow: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.9rem 1.1rem", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none" },
  rN: { color: "#fff", fontSize: "0.9rem" },
  rD: { color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" },
  rA: { color: "var(--accent-gold)", fontWeight: "700" },
  faqList: { display: "flex", flexDirection: "column", gap: "1rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.3rem", borderRadius: "6px" },
  fQ: { fontSize: "0.97rem", color: "#fff", marginBottom: "0.5rem", fontWeight: "700" },
  fA: { fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.6rem" },
  sideT: { fontSize: "1rem", color: "#fff", fontWeight: "700", marginBottom: "0.5rem" },
  sideRow: { display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid var(--border-color)", fontSize: "0.82rem" },
  sl: { color: "var(--text-muted)" },
  sv: { color: "#fff", fontWeight: "600" },
};


