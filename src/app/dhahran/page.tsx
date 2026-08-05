import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "Dhahran Taxi Service | Saudi Aramco HQ & KFUPM Airport Transfers",
  description:
    "private taxi service in Dhahran — airport transfers from DMM to Saudi Aramco compound, KFUPM university, and all Dhahran business locations. Corporate accounts, 24/7 executive transfers.",
  alternates: { canonical: "https://dammamairporttaxi.com/dhahran" },
  openGraph: {
    title: "Dhahran Taxi Service | Saudi Aramco HQ & Airport Transfers",
    description: "Dhahran taxi — DMM Airport to Saudi Aramco compound, KFUPM, and all Dhahran business areas. Executive corporate service, fixed rates, 24/7.",
    url: "https://dammamairporttaxi.com/dhahran",
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
      { "@type": "ListItem", position: 2, name: "Dammam Guide", item: "https://dammamairporttaxi.com/dammam-guide" },
      { "@type": "ListItem", position: 3, name: "Dhahran", item: "https://dammamairporttaxi.com/dhahran" },
    ],
  },
  {
    "@context": "https://schema.org", "@type": "City",
    name: "Dhahran", alternateName: ["الظهران", "Az Zahran"],
    description: "Dhahran is a city in Saudi Arabia's Eastern Province, famous for being the global headquarters of Saudi Aramco — the world's most valuable company. It also hosts King Fahd University of Petroleum and Minerals (KFUPM) and King Fahd International Airport (DMM).",
    containedInPlace: { "@type": "AdministrativeArea", name: "Eastern Province, Saudi Arabia" },
    geo: { "@type": "GeoCoordinates", latitude: 26.2794, longitude: 50.1518 },
  },
  {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How far is Dhahran from Dammam Airport (DMM)?", acceptedAnswer: { "@type": "Answer", text: "Dhahran is approximately 55 km from King Fahd International Airport (DMM), taking 40 minutes by private taxi. King Fahd Airport is actually located within Dhahran's administrative area, making it one of the closest Eastern Province cities to the airport." } },
      { "@type": "Question", name: "Can your drivers access Saudi Aramco compound in Dhahran?", acceptedAnswer: { "@type": "Answer", text: "Our drivers deliver passengers to all designated visitor gates at the Saudi Aramco Dhahran compound. For access inside the compound, passengers must arrange guest passes with Aramco security. Our drivers are familiar with Gate 1, Gate 2, Gate 3, and all other Aramco Dhahran entry points." } },
      { "@type": "Question", name: "Do you transfer to KFUPM (King Fahd University of Petroleum and Minerals)?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide direct transfers to King Fahd University of Petroleum and Minerals (KFUPM) in Dhahran for students, faculty, and visitors. KFUPM is Saudi Arabia's leading engineering university and is located adjacent to the Saudi Aramco compound." } },
      { "@type": "Question", name: "What is Dhahran famous for?", acceptedAnswer: { "@type": "Answer", text: "Dhahran is famous for being the global headquarters of Saudi Aramco — the world's most valuable company by market capitalisation. It was also the site of the first commercial oil discovery in the Arabian Peninsula (Dammam Well No. 7, March 4, 1938). The city hosts KFUPM, King Fahd International Airport, and the Saudi Aramco Exhibit (oil museum)." } },
    ],
  },
];

const routes = [
  { name: "Dammam Airport (DMM) → Dhahran", detail: "55 km · 40 min · Meet & Greet", href: "/routes/dammam-airport-to-dhahran" },
  { name: "Dhahran → Al Khobar", detail: "15 km · 15–20 min", href: "/routes/dammam-airport-to-khobar" },
  { name: "Dhahran → Bahrain (Causeway)", detail: "70 km · 1–1.5 hrs", href: "/routes/dammam-to-bahrain" },
  { name: "Dhahran → Jubail", detail: "55 km · 45 min", href: "/routes/dammam-airport-to-jubail" },
  { name: "Dhahran → Riyadh", detail: "395 km · 3.5–4 hrs", href: "/routes/dammam-to-riyadh" },
  { name: "Dhahran → Dubai, UAE", detail: "940 km · 9–10 hrs", href: "/routes/dammam-to-uae" },
];

export default function DhahranPage() {
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
              <span style={s.bC}>Dhahran</span>
            </nav>
            <span className="badge-gold">Dhahran — Saudi Aramco HQ</span>
            <h1 style={s.h1}>Dhahran Taxi Service — Aramco, KFUPM & Airport Transfers</h1>
            <p style={s.sub}>Executive taxi service in Dhahran — airport transfers from King Fahd International Airport (DMM), corporate transfers to Saudi Aramco compound and KFUPM, and GCC routes. Monthly corporate invoicing available.</p>
            <div style={s.chips}>
              {["55 km from DMM Airport", "Saudi Aramco Global HQ", "KFUPM University", "Adjacent to Al Khobar", "Corporate Executive Service"].map(c => (
                <span key={c} style={s.chip}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        <main>
          <div className="container" style={s.grid}>
            <div style={s.col}>

              <section style={s.sec}>
                <h2 style={s.h2}>About Dhahran — Home of Saudi Aramco</h2>
                <p style={s.p}>
                  <strong>Dhahran</strong> (Arabic: الظهران) is a city in Saudi Arabia's Eastern Province, most famous globally as the home of <strong>Saudi Aramco</strong> — the world's most valuable company and the world's largest oil producer. The Saudi Aramco compound in Dhahran is a self-contained city-within-a-city housing thousands of employees and their families in a campus with schools, hospitals, recreational facilities, and manicured gardens.
                </p>
                <p style={s.p}>
                  Dhahran also hosts <strong>King Fahd University of Petroleum and Minerals (KFUPM)</strong> — Saudi Arabia's top-ranked engineering and science university — and <strong>King Fahd International Airport (DMM)</strong>, which is located within Dhahran's administrative boundaries.
                </p>
                <div style={s.factGrid}>
                  {[
                    { l: "Distance to DMM Airport", v: "55 km · 40 min" },
                    { l: "Distance to Dammam", v: "30 km · 25 min" },
                    { l: "Distance to Al Khobar", v: "15 km · 15 min" },
                    { l: "Distance to Jubail", v: "55 km · 45 min" },
                    { l: "Key Landmark", v: "Saudi Aramco Global HQ" },
                    { l: "University", v: "KFUPM (Petroleum & Minerals)" },
                    { l: "Airport", v: "King Fahd Intl Airport (DMM)" },
                    { l: "Coordinates", v: "26.28°N, 50.15°E" },
                  ].map(f => (
                    <div key={f.l} style={s.fact}><span style={s.fl}>{f.l}</span><span style={s.fv}>{f.v}</span></div>
                  ))}
                </div>
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>Key Locations in Dhahran</h2>
                {[
                  { name: "Saudi Aramco Headquarters", desc: "The global headquarters of Saudi Aramco, the world's most valuable company. The Dhahran compound houses thousands of employees in a secured campus with residential, educational, and recreational facilities. Visitor gate drop-offs available." },
                  { name: "King Fahd University of Petroleum and Minerals (KFUPM)", desc: "Saudi Arabia's foremost engineering and technology university, ranked among the top universities in the Arab world. Home to 15,000+ students and leading petroleum engineering research programs." },
                  { name: "Saudi Aramco Exhibit (Oil Museum)", desc: "A world-class museum documenting the history of oil discovery in Saudi Arabia and Saudi Aramco's role in the global energy industry. Open to visitors with prior arrangement." },
                  { name: "King Fahd International Airport (DMM)", desc: "Located within Dhahran's administrative boundaries, DMM is the primary airport for the entire Eastern Province. Serving 9+ million passengers annually with domestic and international routes." },
                ].map(a => (
                  <div key={a.name} style={s.attrItem}>
                    <div><h3 style={s.aName}>{a.name}</h3><p style={s.aDesc}>{a.desc}</p></div>
                  </div>
                ))}
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>All Taxi Routes from Dhahran</h2>
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
                <h2 style={s.h2}>Frequently Asked Questions — Dhahran Taxi</h2>
                <div style={s.faqList}>
                  {[
                    { q: "How far is Dhahran from Dammam Airport?", a: "55 km · 40 minutes. King Fahd International Airport (DMM) is actually within Dhahran's administrative boundaries. We provide direct airport-to-Dhahran transfers with meet & greet included." },
                    { q: "Can your drivers access the Saudi Aramco compound?", a: "Our drivers deliver to all designated visitor gates at the Saudi Aramco Dhahran compound. Passengers needing inside-compound access should arrange gate passes with Aramco security beforehand." },
                    { q: "Do you transfer to KFUPM?", a: "Yes. We provide direct transfers to King Fahd University of Petroleum and Minerals (KFUPM) for students, faculty, and visitors." },
                    { q: "Do you offer corporate accounts for Aramco in Dhahran?", a: "Yes. Monthly consolidated invoicing is available for Saudi Aramco corporate accounts in Dhahran. Contact our corporate desk on WhatsApp." },
                  ].map((f, i) => (
                    <div key={i} style={s.faqItem}><h3 style={s.fQ}>{f.q}</h3><p style={s.fA}>{f.a}</p></div>
                  ))}
                </div>
              </section>

            </div>

            <aside style={s.sidebar}>
              <div className="glass-card" style={s.sideCard}>
                <h3 style={s.sideT}>Book Dhahran Taxi</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1rem" }}>Executive transfers · 24/7</p>
                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center", marginBottom: "0.8rem" }}>
                  WhatsApp Booking
                </a>
                <Link href="/corporate-transfers" className="btn btn-secondary" style={{ display: "block", textDecoration: "none", textAlign: "center" }}>
                  Corporate Account
                </Link>
              </div>
              <div className="glass-card" style={{ ...s.sideCard, marginTop: "1.5rem" }}>
                <h3 style={s.sideT}>Dhahran Quick Facts</h3>
                {[
                  { l: "To DMM Airport", v: "55 km · 40 min" },
                  { l: "To Dammam", v: "30 km · 25 min" },
                  { l: "To Khobar", v: "15 km · 15 min" },
                  { l: "To Jubail", v: "55 km · 45 min" },
                  { l: "To Bahrain", v: "70 km · 1–1.5 hrs" },
                  { l: "To Riyadh", v: "395 km · 3.5 hrs" },
                ].map(f => (
                  <div key={f.l} style={s.sideRow}><span style={s.sl}>{f.l}</span><span style={s.sv}>{f.v}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </main>

        <RelatedRoutes currentUrl="/dhahran" />
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
  bL: { color: "#0C58D1", textDecoration: "none" },
  bS: { color: "var(--text-muted)" },
  bC: { color: "var(--text-secondary)" },
  h1: { fontSize: "clamp(1.1rem, 2.4vw, 1.75rem)", color: "var(--text-primary)", fontWeight: "800", lineHeight: "1.25", maxWidth: "850px" },
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
  attrItem: { display: "flex", gap: "1rem", alignItems: "flex-start" },
  aIcon: { fontSize: "1.6rem", flexShrink: 0, marginTop: "0.1rem" },
  aName: { fontSize: "0.96rem", color: "var(--text-primary)", fontWeight: "700", marginBottom: "0.3rem" },
  aDesc: { fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.55" },
  routeList: { display: "flex", flexDirection: "column", gap: "0.6rem" },
  routeRow: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.9rem 1.1rem", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none" },
  rN: { color: "var(--text-primary)", fontSize: "0.9rem" },
  rD: { color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" },
  rA: { color: "#0C58D1", fontWeight: "700" },
  faqList: { display: "flex", flexDirection: "column", gap: "1rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.3rem", borderRadius: "6px" },
  fQ: { fontSize: "0.97rem", color: "var(--text-primary)", marginBottom: "0.5rem", fontWeight: "700" },
  fA: { fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.6rem" },
  sideT: { fontSize: "1rem", color: "var(--text-primary)", fontWeight: "700", marginBottom: "0.5rem" },
  sideRow: { display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid var(--border-color)", fontSize: "0.82rem" },
  sl: { color: "var(--text-muted)" },
  sv: { color: "var(--text-primary)", fontWeight: "600" },
};


