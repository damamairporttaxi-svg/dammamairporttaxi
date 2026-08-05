import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "Jubail Taxi Service | Airport Transfers for Aramco, SABIC & RCJY",
  description:
    "Corporate and private taxi service in Jubail Industrial City — airport transfers from DMM, monthly invoicing for Aramco, SABIC & RCJY employees, and intercity transfers to Riyadh, Bahrain, and all GCC countries.",
  alternates: { canonical: "https://dammamairporttaxi.com/jubail" },
  openGraph: {
    title: "Jubail Taxi Service | Corporate & Airport Transfers",
    description: "Jubail Industrial City taxi — Aramco, SABIC, RCJY corporate accounts, airport transfers, and GCC routes. Monthly invoicing, priority dispatch.",
    url: "https://dammamairporttaxi.com/jubail",
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
      { "@type": "ListItem", position: 2, name: "Dammam Guide", item: "https://dammamairporttaxi.com/dammam-guide" },
      { "@type": "ListItem", position: 3, name: "Jubail", item: "https://dammamairporttaxi.com/jubail" },
    ],
  },
  {
    "@context": "https://schema.org", "@type": "City",
    name: "Jubail", alternateName: ["الجبيل", "Jubail Industrial City", "Madinat Al Jubail Al Sinaiyah"],
    description: "Jubail Industrial City is one of the world's largest industrial complexes, located in Saudi Arabia's Eastern Province. Home to SABIC, Saudi Aramco facilities, and over 400 companies operating under the Royal Commission for Jubail and Yanbu (RCJY).",
    containedInPlace: { "@type": "AdministrativeArea", name: "Eastern Province, Saudi Arabia" },
    geo: { "@type": "GeoCoordinates", latitude: 26.9195, longitude: 49.6710 },
  },
  {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How far is Jubail from Dammam Airport (DMM)?", acceptedAnswer: { "@type": "Answer", text: "Jubail Industrial City is approximately 85 km from King Fahd International Airport (DMM), taking 55 minutes by private taxi. We provide direct airport transfers to Jubail Industrial Area 1 & 2, all SABIC and Aramco compounds, and RCJY facilities." } },
      { "@type": "Question", name: "Do you offer corporate accounts for Aramco and SABIC in Jubail?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer monthly consolidated invoicing for Aramco, SABIC, RCJY, and all major industrial companies in Jubail. Corporate accounts include priority dispatch, dedicated vehicle booking, and VAT-compliant tax invoices compatible with SAP and Oracle procurement systems." } },
      { "@type": "Question", name: "Can your drivers access Jubail Industrial Area security gates?", acceptedAnswer: { "@type": "Answer", text: "Our drivers can deliver passengers to all designated visitor entrance gates at Jubail Industrial Area 1 & 2, SABIC facilities, RCJY compounds, and residential compounds. For access inside secured areas, passengers should arrange security gate passes with their host company beforehand." } },
      { "@type": "Question", name: "How far is Jubail from Bahrain?", acceptedAnswer: { "@type": "Answer", text: "Jubail to Bahrain (Manama) via the King Fahd Causeway is approximately 130 km — around 1.5 to 2 hours by private taxi. We provide direct Jubail-to-Bahrain transfers at a flat rate." } },
    ],
  },
];

const routes = [
  { name: "Dammam Airport (DMM) → Jubail", detail: "85 km · 55 min · Meet & Greet", href: "/routes/dammam-airport-to-jubail" },
  { name: "Jubail → Bahrain (King Fahd Causeway)", detail: "~130 km · 1.5–2 hrs", href: "/routes/dammam-to-bahrain" },
  { name: "Jubail → Al Khobar", detail: "60 km · 50 min", href: "/routes/dammam-airport-to-khobar" },
  { name: "Jubail → Dhahran (Aramco HQ)", detail: "55 km · 45 min", href: "/routes/dammam-airport-to-dhahran" },
  { name: "Jubail → Ras Tanura", detail: "35 km · 30 min · Aramco terminal", href: "/routes/dammam-airport-to-ras-tanura" },
  { name: "Jubail → Riyadh", detail: "400 km · 3.5–4 hrs", href: "/routes/dammam-to-riyadh" },
  { name: "Jubail → Doha, Qatar", detail: "~430 km · 5.5–6.5 hrs", href: "/routes/dammam-to-doha" },
];

const corps = [
  { name: "Saudi Aramco Jubail", role: "Oil & Gas", desc: "Aramco operates multiple facilities in the Jubail Industrial Area. We provide priority transfers for Aramco executives, engineers, and operational staff." },
  { name: "SABIC Headquarters & Plants", role: "Petrochemicals", desc: "SABIC (Saudi Basic Industries Corporation) has its largest manufacturing complex in Jubail. Monthly corporate accounts available for all SABIC staff." },
  { name: "RCJY — Royal Commission Jubail", role: "Government / Industrial Authority", desc: "The Royal Commission for Jubail and Yanbu administers the industrial city. We serve RCJY employees, visitors, and contractor staff across all compounds." },
  { name: "SIPCHEM, YANSAB & Affiliates", role: "Petrochemical Companies", desc: "Dozens of SABIC affiliate companies (SIPCHEM, Ibn Sina, Al-Jubail Fertiliser) also operate in Jubail. We serve all industrial zone companies." },
];

export default function JubailPage() {
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
              <Link href="/" style={s.bLink}>Home</Link><span style={s.bSep}>/</span>
              <Link href="/dammam-guide" style={s.bLink}>Dammam</Link><span style={s.bSep}>/</span>
              <span style={s.bCur}>Jubail</span>
            </nav>
            <span className="badge-gold">Jubail Industrial City</span>
            <h1 style={s.h1}>Jubail Taxi Service — Corporate, Airport & GCC Transfers</h1>
            <p style={s.sub}>private taxi service for Jubail Industrial City — airport transfers from DMM, corporate accounts for Aramco, SABIC & RCJY employees, and intercity transfers to Riyadh, Bahrain, and all GCC destinations.</p>
            <div style={s.chips}>
              {["85 km from DMM Airport", "Aramco & SABIC Hub", "Monthly Corporate Invoicing", "RCJY Compound Transfers", "24/7 Priority Dispatch"].map(c => (
                <span key={c} style={s.chip}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        <main>
          <div className="container" style={s.grid}>
            <div style={s.col}>

              <section style={s.sec}>
                <h2 style={s.h2}>About Jubail Industrial City</h2>
                <p style={s.p}>
                  <strong>Jubail Industrial City</strong> (Arabic: مدينة الجبيل الصناعية) is one of the world's largest planned industrial complexes, built from the ground up on the Arabian Gulf coast in the 1970s under the Vision of King Abdulaziz. The city spans over 1,000 square kilometres and is home to more than 400 industrial, service, and support companies employing over 100,000 workers from around the world.
                </p>
                <p style={s.p}>
                  The Royal Commission for Jubail and Yanbu (RCJY) administers the city, which generates approximately 7% of Saudi Arabia's GDP. Major industries include primary petrochemicals, polymers, fertilisers, steel, and industrial gases.
                </p>
                <div style={s.factGrid}>
                  {[
                    { l: "Distance to DMM Airport", v: "85 km · 55 min" },
                    { l: "Distance to Dammam", v: "85 km · 55 min" },
                    { l: "Distance to Al Khobar", v: "60 km · 50 min" },
                    { l: "Distance to Ras Tanura", v: "35 km · 30 min" },
                    { l: "Distance to Riyadh", v: "400 km · 3.5–4 hrs" },
                    { l: "Major Employers", v: "SABIC, Aramco, RCJY, SIPCHEM" },
                    { l: "GDP Contribution", v: "~7% of Saudi Arabia" },
                    { l: "Coordinates", v: "26.92°N, 49.67°E" },
                  ].map(f => (
                    <div key={f.l} style={s.fact}><span style={s.fl}>{f.l}</span><span style={s.fv}>{f.v}</span></div>
                  ))}
                </div>
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>Corporate Companies We Serve in Jubail</h2>
                <div style={s.corpGrid}>
                  {corps.map(c => (
                    <div key={c.name} className="glass-card" style={s.corpCard}>
                      <h3 style={s.cName}>{c.name}</h3>
                      <span style={s.cRole}>{c.role}</span>
                      <p style={s.cDesc}>{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={s.corpCTA}>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Need a corporate account for your Jubail company?</p>
                  <Link href="/corporate-transfers" style={{ color: "#0C58D1", fontWeight: "700", textDecoration: "none", fontSize: "0.9rem" }}>
                    → Set up a Corporate Account
                  </Link>
                </div>
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>All Taxi Routes from Jubail</h2>
                <div style={s.routeList}>
                  {routes.map(r => (
                    <Link key={r.href} href={r.href} style={s.routeRow}>
                      <div><strong style={s.rName}>{r.name}</strong><p style={s.rDetail}>{r.detail}</p></div>
                      <span style={s.rArrow}>→</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>Frequently Asked Questions — Jubail Taxi</h2>
                <div style={s.faqList}>
                  {[
                    { q: "How far is Jubail from Dammam Airport?", a: "85 km · 55 minutes. We provide direct airport-to-Jubail transfers with meet & greet at the arrivals hall and 60-minute free wait included." },
                    { q: "Do you offer monthly invoicing for Jubail corporate companies?", a: "Yes. We support monthly consolidated invoicing for all major Jubail companies including Aramco, SABIC, RCJY, SIPCHEM, and all industrial affiliates. Contact our corporate desk on WhatsApp." },
                    { q: "Can your drivers access Jubail security gates?", a: "Our drivers can deliver to all designated visitor gates at Jubail Industrial Area 1 & 2, SABIC, RCJY, and residential compounds. Inside-compound access requires a security pass arranged by your host company." },
                    { q: "How do I get from Jubail to Bahrain?", a: "We provide direct Jubail-to-Bahrain transfers via the King Fahd Causeway — approximately 130 km and 1.5 to 2 hours. All causeway tolls are included." },
                  ].map((f, i) => (
                    <div key={i} style={s.faqItem}><h3 style={s.fQ}>{f.q}</h3><p style={s.fA}>{f.a}</p></div>
                  ))}
                </div>
              </section>

            </div>

            <aside style={s.sidebar}>
              <div className="glass-card" style={s.sideCard}>
                <h3 style={s.sideT}>Book Jubail Taxi</h3>
                <p style={s.sideSub}>Corporate & private · 24/7</p>
                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center", marginBottom: "1rem" }}>
                  WhatsApp Booking
                </a>
                <Link href="/corporate-transfers" className="btn btn-secondary" style={{ display: "block", textDecoration: "none", textAlign: "center" }}>
                  Corporate Account
                </Link>
              </div>
              <div className="glass-card" style={{ ...s.sideCard, marginTop: "1.5rem" }}>
                <h3 style={s.sideT}>Jubail Quick Facts</h3>
                {[
                  { l: "To DMM Airport", v: "85 km · 55 min" },
                  { l: "To Dammam", v: "85 km · 55 min" },
                  { l: "To Khobar", v: "60 km · 50 min" },
                  { l: "To Ras Tanura", v: "35 km · 30 min" },
                  { l: "To Bahrain", v: "~130 km · 1.5–2 hrs" },
                  { l: "To Riyadh", v: "400 km · 3.5 hrs" },
                ].map(f => (
                  <div key={f.l} style={s.sideRow}><span style={s.sl}>{f.l}</span><span style={s.sv}>{f.v}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </main>

        <RelatedRoutes currentUrl="/jubail" />
        <StickyCTA />
        <Footer />
      </div>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  hero: { background: "#ffffff", padding: "5rem 0 3rem", borderBottom: "1px solid var(--border-color)" },
  hc: { display: "flex", flexDirection: "column", gap: "1rem" },
  bc: { display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem" },
  bLink: { color: "#0C58D1", textDecoration: "none" },
  bSep: { color: "var(--text-muted)" },
  bCur: { color: "var(--text-secondary)" },
  h1: { fontSize: "2.3rem", color: "var(--text-primary)", fontWeight: "800", lineHeight: "1.2", maxWidth: "850px" },
  sub: { fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "700px", lineHeight: "1.7" },
  chips: { display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.5rem" },
  chip: { backgroundColor: "rgba(12,88,209,0.08)", border: "1px solid rgba(12,88,209,0.25)", color: "#0C58D1", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600" },
  grid: { display: "grid", gridTemplateColumns: "1fr 280px", gap: "3rem", padding: "4rem 0", alignItems: "start" },
  col: { display: "flex", flexDirection: "column", gap: "3rem" },
  sec: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  h2: { fontSize: "1.55rem", color: "var(--text-primary)", fontWeight: "700", borderBottom: "2px solid rgba(12,88,209,0.25)", paddingBottom: "0.6rem" },
  p: { fontSize: "0.96rem", color: "var(--text-secondary)", lineHeight: "1.75" },
  factGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "0.7rem", marginTop: "0.5rem" },
  fact: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.75rem 0.9rem", display: "flex", flexDirection: "column", gap: "0.25rem" },
  fl: { fontSize: "0.7rem", color: "#0C58D1", fontWeight: "700", textTransform: "uppercase" },
  fv: { fontSize: "0.86rem", color: "var(--text-primary)" },
  corpGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem" },
  corpCard: { padding: "1.4rem", display: "flex", flexDirection: "column", gap: "0.4rem" },
  cName: { fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: "700", margin: 0 },
  cRole: { fontSize: "0.75rem", color: "#0C58D1", fontWeight: "700" },
  cDesc: { fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.5", margin: 0 },
  corpCTA: { backgroundColor: "rgba(245,197,24,0.06)", border: "1px solid rgba(12,88,209,0.15)", borderRadius: "6px", padding: "1rem 1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" },
  routeList: { display: "flex", flexDirection: "column", gap: "0.6rem" },
  routeRow: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.9rem 1.1rem", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none" },
  rName: { color: "var(--text-primary)", fontSize: "0.9rem" },
  rDetail: { color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" },
  rArrow: { color: "#0C58D1", fontWeight: "700" },
  faqList: { display: "flex", flexDirection: "column", gap: "1rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.3rem", borderRadius: "6px" },
  fQ: { fontSize: "0.97rem", color: "var(--text-primary)", marginBottom: "0.5rem", fontWeight: "700" },
  fA: { fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.6rem" },
  sideT: { fontSize: "1rem", color: "var(--text-primary)", fontWeight: "700", marginBottom: "0.5rem" },
  sideSub: { fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1rem" },
  sideRow: { display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid var(--border-color)", fontSize: "0.82rem" },
  sl: { color: "var(--text-muted)" },
  sv: { color: "var(--text-primary)", fontWeight: "600" },
};


