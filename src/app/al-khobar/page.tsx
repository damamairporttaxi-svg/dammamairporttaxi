import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "Al Khobar Taxi Service | Airport Transfers & GCC Routes",
  description:
    "private taxi service in Al Khobar — airport pickups from DMM, transfers to Bahrain via King Fahd Causeway, Jubail, Dhahran, Half Moon Bay, and all GCC countries. 24/7 fixed rates.",
  alternates: { canonical: "https://dammamairporttaxi.com/al-khobar" },
  openGraph: {
    title: "Al Khobar Taxi Service | Airport & GCC Transfers",
    description:
      "Al Khobar taxi — DMM Airport pickups, Bahrain via King Fahd Causeway, Half Moon Bay, Jubail, and all GCC routes. Fixed rates, licensed drivers, 24/7.",
    url: "https://dammamairporttaxi.com/al-khobar",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
    { "@type": "ListItem", position: 2, name: "Dammam Guide", item: "https://dammamairporttaxi.com/dammam-guide" },
    { "@type": "ListItem", position: 3, name: "Al Khobar", item: "https://dammamairporttaxi.com/al-khobar" },
  ],
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "City",
  name: "Al Khobar",
  alternateName: ["الخبر", "Khobar"],
  description: "Al Khobar is the second-largest city in Saudi Arabia's Eastern Province, located 20 km south of Dammam on the Arabian Gulf coast. Known for being the Saudi end of the King Fahd Causeway to Bahrain, it is a major commercial and residential hub for expats and business professionals.",
  containedInPlace: { "@type": "AdministrativeArea", name: "Eastern Province, Saudi Arabia" },
  geo: { "@type": "GeoCoordinates", latitude: 26.2172, longitude: 50.1971 },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How far is Al Khobar from Dammam Airport (DMM)?", acceptedAnswer: { "@type": "Answer", text: "Al Khobar is approximately 60 km from King Fahd International Airport (DMM) and takes 45 minutes by private taxi. Dammam Airport Taxi provides direct airport transfers to all Al Khobar hotels, business districts, and residences at a fixed rate." } },
    { "@type": "Question", name: "How far is Al Khobar from Bahrain?", acceptedAnswer: { "@type": "Answer", text: "Al Khobar is the Saudi city closest to the King Fahd Causeway. The causeway entrance is approximately 15 km from Al Khobar city centre. Total distance from Al Khobar to Manama, Bahrain is approximately 65 km — about 1–1.5 hours by private taxi." } },
    { "@type": "Question", name: "What are the main attractions in Al Khobar?", acceptedAnswer: { "@type": "Answer", text: "Key Al Khobar attractions include: Al Khobar Corniche (waterfront promenade), Khobar Water Tower (iconic landmark), Half Moon Bay beach (35 km south), King Fahd Causeway viewing area, Al Rashid Mall, Dhahran Mall, and the vibrant dining scene on Prince Faisal Bin Fahd Street." } },
    { "@type": "Question", name: "Is Al Khobar close to Half Moon Bay?", acceptedAnswer: { "@type": "Answer", text: "Yes. Half Moon Bay beach resort is approximately 35 km south of Al Khobar — about 30–40 minutes by taxi. It is the nearest major beach resort for Khobar, Dammam, and Dhahran residents." } },
    { "@type": "Question", name: "Can I get a taxi from Al Khobar to Bahrain?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dammam Airport Taxi provides private taxi transfers from Al Khobar to all Bahrain destinations via the King Fahd Causeway. We pick up from your hotel, home, or office in Khobar and deliver door-to-door to Manama, Riffa, Bahrain Airport (BAH), or anywhere in Bahrain." } },
  ],
};

const routes = [
  { name: "Dammam Airport → Al Khobar", detail: "60 km · 45 min · Meet & Greet", href: "/routes/dammam-airport-to-khobar" },
  { name: "Al Khobar → Bahrain (King Fahd Causeway)", detail: "65 km · 1–1.5 hrs · Border included", href: "/routes/dammam-to-bahrain" },
  { name: "Al Khobar → Half Moon Bay", detail: "35 km · 30–40 min · Beach resort", href: "/routes/dammam-airport-to-half-moon-bay" },
  { name: "Al Khobar → Jubail Industrial City", detail: "60 km · 50 min · Aramco / SABIC", href: "/routes/dammam-airport-to-jubail" },
  { name: "Al Khobar → Dhahran (Aramco HQ)", detail: "15 km · 15–20 min · KFUPM", href: "/routes/dammam-airport-to-dhahran" },
  { name: "Al Khobar → Riyadh", detail: "380 km · 3.5 hrs · Saudi Capital", href: "/routes/dammam-to-riyadh" },
  { name: "Al Khobar → Doha, Qatar", detail: "380 km · 5–6 hrs · Via Salwa border", href: "/routes/dammam-to-doha" },
  { name: "Al Khobar → Dubai, UAE", detail: "940 km · 9–10 hrs · Via Al Batha", href: "/routes/dammam-to-uae" },
];

export default function AlKhobarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={s.page}>
        <Navbar />

        <section style={s.hero}>
          <div className="container" style={s.heroCont}>
            <nav style={s.bc} aria-label="Breadcrumb">
              <Link href="/" style={s.bcLink}>Home</Link><span style={s.bcSep}>/</span>
              <Link href="/dammam-guide" style={s.bcLink}>Dammam</Link><span style={s.bcSep}>/</span>
              <span style={s.bcCur}>Al Khobar</span>
            </nav>
            <span className="badge-gold">Al Khobar — Eastern Province</span>
            <h1 style={s.h1}>Al Khobar Taxi Service — Airport, Bahrain & GCC Transfers</h1>
            <p style={s.sub}>private taxi service in Al Khobar — airport pickups from King Fahd International Airport (DMM), transfers to Bahrain via King Fahd Causeway, and all GCC destinations. Fixed rates · Meet & Greet · 24/7.</p>
            <div style={s.chips}>
              {["60 km from DMM Airport", "King Fahd Causeway to Bahrain", "Saudi Aramco HQ Area", "Half Moon Bay Beach", "International Business Hub"].map(c => (
                <span key={c} style={s.chip}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        <main>
          <div className="container" style={s.grid}>
            <div style={s.col}>

              <section style={s.sec}>
                <h2 style={s.h2}>About Al Khobar — Eastern Province's Commercial Capital</h2>
                <p style={s.p}>
                  <strong>Al Khobar</strong> (Arabic: الخبر) is Saudi Arabia's most cosmopolitan city and the second-largest in the Eastern Province, located 20 km south of Dammam on the Arabian Gulf coast. With a population of approximately 1 million, Al Khobar is the primary residential hub for expatriate professionals working at Saudi Aramco, SABIC, and the hundreds of multinational companies operating in the Eastern Province.
                </p>
                <p style={s.p}>
                  Al Khobar is most famous for being the Saudi end of the <strong>King Fahd Causeway</strong> — the 25 km bridge connecting Saudi Arabia to Bahrain. The causeway entrance (Al Khobar Causeway Gate) is just 15 km from the city centre, making Bahrain a popular day trip and weekend destination for Khobar residents.
                </p>
                <div style={s.factGrid}>
                  {[
                    { l: "Location", v: "Eastern Province, Saudi Arabia" },
                    { l: "Distance to DMM Airport", v: "60 km · 45 min" },
                    { l: "Distance to Dammam", v: "20 km · 20 min" },
                    { l: "Distance to Bahrain", v: "65 km via King Fahd Causeway" },
                    { l: "Distance to Dhahran", v: "15 km · 15–20 min" },
                    { l: "Key Attractions", v: "Corniche, Half Moon Bay, King Fahd Causeway" },
                    { l: "Major Employers", v: "Saudi Aramco, SABIC, Multinational Oil & Gas" },
                    { l: "Coordinates", v: "26.22°N, 50.20°E" },
                  ].map(f => (
                    <div key={f.l} style={s.fact}><span style={s.fl}>{f.l}</span><span style={s.fv}>{f.v}</span></div>
                  ))}
                </div>
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>Al Khobar — Key Areas & Attractions</h2>
                {[
                  { name: "Al Khobar Corniche", desc: "A beautifully landscaped waterfront promenade stretching along the Arabian Gulf coast with parks, sculptures, walking tracks, and seafood restaurants. The iconic Khobar Water Tower is the city's most recognisable landmark." },
                  { name: "Half Moon Bay Beach Resort", desc: "35 km south of Al Khobar, Half Moon Bay is the Eastern Province's most popular beach destination — a crescent-shaped Arabian Gulf bay with private resorts, chalets, jet skiing, and waterfront dining." },
                  { name: "King Fahd Causeway Gateway", desc: "The causeway to Bahrain begins just 15 km from Khobar city centre. Bahrain is the most popular weekend destination for Khobar residents, with the full crossing taking 1–1.5 hours by private taxi." },
                  { name: "Dhahran Mall & Al Rashid Mall", desc: "Khobar and Dhahran have some of the best shopping malls in the Eastern Province, including the professional Dhahran Mall and Al Rashid Mall — major retail and dining destinations." },
                  { name: "Prince Faisal Bin Fahd Street (Restaurant Row)", desc: "Al Khobar's leading dining street, lined with international restaurants, coffee shops, and cafés catering to the city's large expat and business community." },
                  { name: "Al Khobar Business District", desc: "Al Khobar's downtown is home to dozens of multinational company offices, banks, and professional service firms supporting the Eastern Province's oil & gas sector." },
                ].map(a => (
                  <div key={a.name} style={s.attrItem}>
                    <div><h3 style={s.aName}>{a.name}</h3><p style={s.aDesc}>{a.desc}</p></div>
                  </div>
                ))}
              </section>

              <section style={s.sec}>
                <h2 style={s.h2}>All Taxi Routes from Al Khobar</h2>
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
                <h2 style={s.h2}>Frequently Asked Questions — Al Khobar Taxi</h2>
                <div style={s.faqList}>
                  {[
                    { q: "How far is Al Khobar from Dammam Airport?", a: "60 km · 45 minutes by private taxi. We provide airport pickups with meet & greet at the arrivals hall, 60-minute free wait, and all parking fees included." },
                    { q: "How do I get from Al Khobar to Bahrain by taxi?", a: "We pick you up from your Al Khobar hotel, home, or office and deliver you to any destination in Bahrain via the King Fahd Causeway (65 km, 1–1.5 hours). All causeway tolls are included in the fixed fare." },
                    { q: "Is Al Khobar close to Half Moon Bay?", a: "Yes — Half Moon Bay is just 35 km south of Al Khobar (30–40 minutes by taxi). It's the most popular beach for Khobar, Dhahran, and Dammam residents." },
                    { q: "Can I get a taxi from Al Khobar to Dubai or Abu Dhabi?", a: "Yes. We provide long-distance road transfers from Al Khobar to all UAE emirates via the Al Batha-Ghuwaifat Saudi-UAE border. Dubai is approximately 9–10 hours; Abu Dhabi is 8.5–9.5 hours." },
                  ].map((f, i) => (
                    <div key={i} style={s.faqItem}><h3 style={s.fQ}>{f.q}</h3><p style={s.fA}>{f.a}</p></div>
                  ))}
                </div>
              </section>

            </div>

            <aside style={s.sidebar}>
              <div className="glass-card" style={s.sideCard}>
                <h3 style={s.sideT}>Book Al Khobar Taxi</h3>
                <p style={s.sideSub}>24/7 · Fixed rates · Meet & Greet</p>
                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center", marginBottom: "1rem" }}>
                  WhatsApp Us Now
                </a>
                {[
                  { l: "Airport to Khobar", h: "/routes/dammam-airport-to-khobar" },
                  { l: "Khobar to Bahrain", h: "/routes/dammam-to-bahrain" },
                  { l: "Khobar to Half Moon Bay", h: "/routes/dammam-airport-to-half-moon-bay" },
                  { l: "Khobar to Riyadh", h: "/routes/dammam-to-riyadh" },
                ].map(r => (
                  <Link key={r.h} href={r.h} style={s.sideRoute}>{r.l}<span style={{ color: "var(--accent-gold)" }}>→</span></Link>
                ))}
              </div>
              <div className="glass-card" style={{ ...s.sideCard, marginTop: "1.5rem" }}>
                <h3 style={s.sideT}>Al Khobar Quick Facts</h3>
                {[
                  { l: "To Bahrain", v: "65 km · 1–1.5 hrs" },
                  { l: "To DMM Airport", v: "60 km · 45 min" },
                  { l: "To Dhahran", v: "15 km · 15 min" },
                  { l: "To Jubail", v: "60 km · 50 min" },
                  { l: "To Half Moon Bay", v: "35 km · 35 min" },
                ].map(f => (
                  <div key={f.l} style={s.sideRow}><span style={s.sl}>{f.l}</span><span style={s.sv}>{f.v}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </main>

        <RelatedRoutes currentUrl="/al-khobar" />
        <StickyCTA />
        <Footer />
      </div>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  hero: { background: "linear-gradient(rgba(0,0,0,0.88),rgba(0,0,0,0.98)),url('/hero-bg.jpg') center/cover no-repeat", padding: "5rem 0 3rem", borderBottom: "1px solid var(--border-color)" },
  heroCont: { display: "flex", flexDirection: "column", gap: "1rem" },
  bc: { display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem" },
  bcLink: { color: "var(--accent-gold)", textDecoration: "none" },
  bcSep: { color: "var(--text-muted)" },
  bcCur: { color: "var(--text-secondary)" },
  h1: { fontSize: "2.3rem", color: "#fff", fontWeight: "800", lineHeight: "1.2", maxWidth: "850px" },
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
  rName: { color: "#fff", fontSize: "0.9rem" },
  rDetail: { color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" },
  rArrow: { color: "var(--accent-gold)", fontWeight: "700" },
  faqList: { display: "flex", flexDirection: "column", gap: "1rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.3rem", borderRadius: "6px" },
  fQ: { fontSize: "0.97rem", color: "#fff", marginBottom: "0.5rem", fontWeight: "700" },
  fA: { fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.6rem" },
  sideT: { fontSize: "1rem", color: "#fff", fontWeight: "700", marginBottom: "0.5rem" },
  sideSub: { fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1.2rem" },
  sideRoute: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0.7rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "4px", textDecoration: "none", fontSize: "0.82rem", color: "var(--text-secondary)", border: "1px solid var(--border-color)", marginBottom: "0.4rem" },
  sideRow: { display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid var(--border-color)", fontSize: "0.82rem" },
  sl: { color: "var(--text-muted)" },
  sv: { color: "#fff", fontWeight: "600" },
};


