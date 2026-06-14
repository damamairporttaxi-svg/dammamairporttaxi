import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "Corporate & Executive Chauffeur Service – Dammam, Jubail, Dhahran",
  description:
    "Corporate taxi and executive chauffeur services from Dammam Airport for Aramco, SABIC, RCJY, and business travellers. Monthly invoicing, priority dispatch, and a executive vehicle fleet.",
  alternates: { canonical: "https://dammamairporttaxi.com/corporate-transfers" },
  openGraph: {
    title: "Corporate Chauffeur Service – Dammam & Eastern Province",
    description:
      "Executive transfers for Saudi Aramco, SABIC & corporate clients. Monthly invoicing, priority dispatch, GMC Yukon & Camry fleet from Dammam Airport.",
    url: "https://dammamairporttaxi.com/corporate-transfers",
    type: "website",
  },
};

/* ── Schema ─────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
    { "@type": "ListItem", position: 2, name: "Corporate Transfers", item: "https://dammamairporttaxi.com/corporate-transfers" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate & Executive Chauffeur Service – Dammam Airport Taxi",
  description: "professional corporate taxi and executive transfer service for businesses, oil & gas employees, and international corporate travellers in Saudi Arabia's Eastern Province.",
  provider: {
    "@type": "LocalBusiness",
    name: "Dammam Airport Taxi",
    telephone: "+966501234567",
    url: "https://dammamairporttaxi.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dammam",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
  },
  areaServed: [
    { "@type": "City", name: "Dammam" },
    { "@type": "City", name: "Jubail" },
    { "@type": "City", name: "Dhahran" },
    { "@type": "City", name: "Al Khobar" },
    { "@type": "City", name: "Riyadh" },
  ],
  serviceType: "Executive Airport Chauffeur & Corporate Transfer",
  offers: { "@type": "Offer", priceCurrency: "SAR", description: "Corporate transfers starting from 150 SAR for local routes" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you offer monthly corporate invoicing for company accounts?", acceptedAnswer: { "@type": "Answer", text: "Yes. We support monthly billing for corporate accounts. Your company receives a detailed invoice at the end of each billing month covering all employee trips, which can be submitted to your accounts payable department. Contact us to set up your corporate account." } },
    { "@type": "Question", name: "Can your drivers enter Saudi Aramco and SABIC facilities in Dhahran and Jubail?", acceptedAnswer: { "@type": "Answer", text: "Our drivers can deliver passengers to the designated visitor gates at all major facilities including Saudi Aramco Dhahran HQ, Aramco compounds, Jubail Industrial Area 1 & 2, and SABIC headquarters. For access inside secured areas, passengers should pre-arrange gate passes with their host company's security department." } },
    { "@type": "Question", name: "What vehicle types are available for corporate bookings?", acceptedAnswer: { "@type": "Answer", text: "For executive single passengers we offer Toyota Camry (Sedan). For senior management and groups we offer the GMC Yukon (6 passengers) or Hyundai Staria Van (8 passengers). For VIP delegations we provide a VIP luxury class. All vehicles have USB charging, Wi-Fi, and are sanitized before each trip." } },
    { "@type": "Question", name: "Can we book multiple vehicles simultaneously for a corporate group?", acceptedAnswer: { "@type": "Answer", text: "Yes. We support fleet-level bookings for large corporate groups — for example, multiple vehicles dispatched from King Fahd International Airport to different company compounds simultaneously. Contact our corporate desk on WhatsApp with your group size and travel dates for a coordinated fleet quote." } },
    { "@type": "Question", name: "Do you serve the RCJY Royal Commission compounds in Jubail?", acceptedAnswer: { "@type": "Answer", text: "Yes. We regularly serve transfers to and from the Royal Commission for Jubail and Yanbu (RCJY) facilities, residential compounds, and the Jubail Industrial City visitor centre. Our drivers are familiar with RCJY security gate procedures." } },
  ],
};

export default function CorporateTransfersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={styles.page}>
        <Navbar />

        {/* ── Hero ─────────────────────────────── */}
        <section style={styles.hero}>
          <div className="container" style={styles.heroCont}>
            <nav style={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" style={styles.breadLink}>Home</Link>
              <span style={styles.breadSep}>/</span>
              <span style={styles.breadCurrent}>Corporate Transfers</span>
            </nav>
            <span className="badge-gold">Corporate & Executive</span>
            <h1 style={styles.h1}>
              Corporate Taxi & Executive Chauffeur Services from Dammam Airport — Eastern Province
            </h1>
            <p style={styles.heroSub}>
              Dedicated airport transfers and intercity transportation for Saudi Aramco, SABIC, RCJY, and corporate clients across Dammam, Jubail, Dhahran, Khobar, and Riyadh. Monthly invoicing · Priority dispatch · Executive fleet.
            </p>
            <div style={styles.heroBadges}>
              {["Monthly Invoicing", "Priority Dispatch", "GPS Tracked", "24/7 Operations", "All Tolls Included"].map((b) => (
                <span key={b} style={styles.badge}>✓ {b}</span>
              ))}
            </div>
          </div>
        </section>

        <main style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="container" style={styles.mainGrid}>
            <div style={styles.contentCol}>

              {/* WHY CORPORATE */}
              <section style={styles.section}>
                <h2 style={styles.h2}>Why Businesses Choose Dammam Airport Taxi</h2>
                <p style={styles.p}>Operating in Saudi Arabia's Eastern Province — the heart of the Gulf's oil & gas, petrochemical, and industrial sector — we understand the transport needs of corporate clients. Our corporate service is trusted by project managers, expatriate employees, and visiting executives from companies including <strong>Saudi Aramco, SABIC, Halliburton, Baker Hughes, Schlumberger (SLB), SABIC Affiliates</strong>, and dozens of international contractors based in <strong>Jubail Industrial City</strong> and <strong>Dhahran</strong>.</p>
                <div style={styles.featureGrid}>
                  {[
                    { title: "Monthly Invoicing", desc: "Consolidated monthly tax invoice for all employee trips. Compatible with SAP and Oracle ERP procurement systems." },
                    { title: "Priority Dispatch", desc: "Corporate accounts receive priority over standard bookings during peak hours and high-demand periods." },
                    { title: "Real-Time GPS", desc: "Live vehicle tracking shared with your travel desk. Know exactly where your employee's taxi is at all times." },
                    { title: "Full Insurance", desc: "All vehicles carry full commercial liability insurance compliant with Saudi Transport General Authority requirements." },
                    { title: "Bilingual Drivers", desc: "English and Arabic-speaking professional chauffeurs for seamless communication with international visitors." },
                    { title: "Custom Contracts", desc: "Volume-based pricing agreements for companies with regular travel needs — get a tailored corporate rate card." },
                  ].map((f) => (
                    <div key={f.title} className="glass-card" style={styles.featureCard}>
                      <h3 style={styles.featureTitle}>{f.title}</h3>
                      <p style={styles.featureDesc}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CORPORATE ROUTES */}
              <section style={styles.section}>
                <h2 style={styles.h2}>Key Corporate Destinations We Serve</h2>
                <div style={styles.destList}>
                  {[
                    { dest: "Saudi Aramco HQ — Dhahran", detail: "DMM Airport → Dhahran Aramco Camp · 55 km · 40 min · from 150 SAR", href: "/routes/dammam-airport-to-dhahran" },
                    { dest: "Jubail Industrial City — SABIC & RCJY", detail: "DMM Airport → Jubail Industrial Area 1 & 2 · 85 km · 55 min · from 200 SAR", href: "/routes/dammam-airport-to-jubail" },
                    { dest: "Al Khobar Business District", detail: "DMM Airport → Al Khobar hotels & offices · 60 km · 45 min · from 150 SAR", href: "/routes/dammam-airport-to-khobar" },
                    { dest: "Riyadh — King Khalid Airport (RUH)", detail: "DMM Airport → Riyadh CBD or RUH Airport · 400 km · 3.5–4 hrs · from 900 SAR", href: "/routes/dammam-to-riyadh" },
                    { dest: "Bahrain Financial Harbour & Manama", detail: "Dammam → Manama via King Fahd Causeway · 85 km · 1.5–2 hrs · from 350 SAR", href: "/routes/dammam-to-bahrain" },
                    { dest: "KFUPM — King Fahd University", detail: "DMM Airport → King Fahd University of Petroleum & Minerals, Dhahran · from 150 SAR", href: "/routes/dammam-airport-to-dhahran" },
                  ].map((d) => (
                    <Link key={d.dest} href={d.href} style={styles.destCard}>
                      <div>
                        <strong style={styles.destTitle}>{d.dest}</strong>
                        <p style={styles.destDetail}>{d.detail}</p>
                      </div>
                      <span style={styles.destArrow}>→</span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FLEET */}
              <section style={styles.section}>
                <h2 style={styles.h2}>Corporate Vehicle Fleet</h2>
                <p style={styles.p}>Choose the vehicle class that matches your company travel policy and passenger count.</p>
                <div style={styles.fleetGrid}>
                  {[
                    { name: "Toyota Camry — Business Sedan", pax: "Up to 3 passengers · 2 bags", use: "Individual executive trips, budget business travel, domestic routes", price: "from 150 SAR" },
                    { name: "GMC Yukon — VIP SUV", pax: "Up to 6 passengers · 5 bags", use: "Senior management, VIP guests, border crossings, long-distance", price: "from 280 SAR" },
                    { name: "Hyundai Staria — Corporate Van", pax: "Up to 8 passengers · 7 bags", use: "Group transfers, airport delegations, compound shuttles", price: "from 320 SAR" },
                    { name: "GMC Yukon Denali — VIP Class", pax: "Up to 4 passengers · leather interior", use: "C-suite executives, government delegations, high-profile visits", price: "Custom quote" },
                  ].map((v) => (
                    <div key={v.name} className="glass-card" style={styles.fleetCard}>
                      <h3 style={styles.fleetName}>{v.name}</h3>
                      <p style={styles.fleetPax}>{v.pax}</p>
                      <p style={styles.fleetUse}>{v.use}</p>
                      <span style={styles.fleetPrice}>{v.price}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* HOW TO SETUP */}
              <section style={styles.section}>
                <h2 style={styles.h2}>How to Set Up a Corporate Account</h2>
                <ol style={styles.ol}>
                  <li><strong>Contact our corporate desk</strong> via WhatsApp or email with your company name, estimated monthly trip volume, and primary destinations.</li>
                  <li><strong>Receive a custom rate card</strong> — we prepare a tailored pricing sheet based on your volume and route mix, typically within 24 hours.</li>
                  <li><strong>Sign a simple service agreement</strong> — a 1-page document covering billing terms, cancellation policy, and vehicle standards.</li>
                  <li><strong>Onboard your travel bookers</strong> — your designated booking contacts can place trips by WhatsApp, email, or phone 24/7.</li>
                  <li><strong>Receive monthly invoice</strong> — a consolidated VAT-compliant tax invoice is sent at the start of each month covering the prior month's trips.</li>
                </ol>
              </section>

              {/* FAQ */}
              <section style={styles.section}>
                <h2 style={styles.h2}>Corporate FAQ</h2>
                <div style={styles.faqList}>
                  {[
                    { q: "Do you offer monthly corporate invoicing?", a: "Yes. Monthly consolidated tax invoices are issued in SAR, VAT-compliant for Saudi Arabia, and itemised by employee, date, and route for easy cost allocation." },
                    { q: "Can drivers enter Aramco and SABIC facilities?", a: "Drivers deliver to designated visitor gates at all major Jubail and Dhahran facilities. For inside compound access, passengers coordinate gate passes with their host company." },
                    { q: "What vehicles are available for corporate bookings?", a: "Toyota Camry (Sedan) for individual trips, GMC Yukon for executives and groups up to 6, Hyundai Staria Van for groups up to 8, and GMC Yukon Denali for VIP level service." },
                    { q: "Can we book multiple vehicles simultaneously?", a: "Yes. Fleet-level simultaneous dispatch is supported. Contact our corporate desk with your group size and we coordinate multiple vehicles to arrive at the same time." },
                    { q: "Do you serve RCJY Royal Commission compounds in Jubail?", a: "Yes. We regularly serve the Royal Commission for Jubail and Yanbu (RCJY) compounds, visitor centres, and industrial zones. Drivers are familiar with RCJY gate procedures." },
                  ].map((faq, i) => (
                    <div key={i} style={styles.faqItem}>
                      <h3 style={styles.faqQ}>{faq.q}</h3>
                      <p style={styles.faqA}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <aside style={styles.sidebar}>
              <div className="glass-card" style={styles.sideCard}>
                <h3 style={styles.sideTitle}>Set Up Corporate Account</h3>
                <p style={styles.sideSub}>Talk to our corporate desk directly on WhatsApp</p>
                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center" }}>
                  WhatsApp Corporate Desk
                </a>
                <div style={{ marginTop: "1.2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { label: "Billing", val: "Monthly tax invoice" },
                    { label: "Min. contract", val: "No minimum" },
                    { label: "Dispatch", val: "24/7 · Priority" },
                    { label: "Payment", val: "Invoice / Transfer" },
                    { label: "Vehicles", val: "Camry · Yukon · Staria" },
                  ].map((r) => (
                    <div key={r.label} style={styles.sideRow}>
                      <span style={styles.sideLabel}>{r.label}</span>
                      <span style={styles.sideVal}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card" style={{ ...styles.sideCard, marginTop: "1.5rem" }}>
                <h3 style={styles.sideTitle}>Top Corporate Routes</h3>
                {[
                  { label: "Airport → Jubail", price: "200 SAR", href: "/routes/dammam-airport-to-jubail" },
                  { label: "Airport → Dhahran", price: "150 SAR", href: "/routes/dammam-airport-to-dhahran" },
                  { label: "Airport → Khobar", price: "150 SAR", href: "/routes/dammam-airport-to-khobar" },
                  { label: "Dammam → Riyadh", price: "900 SAR", href: "/routes/dammam-to-riyadh" },
                ].map((r) => (
                  <Link key={r.href} href={r.href} style={styles.sideRoute}>
                    <span>{r.label}</span>
                    <span style={{ color: "var(--accent-gold)", fontWeight: 700 }}>from {r.price}</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </main>

        <RelatedRoutes currentUrl="/corporate-transfers" />
        <StickyCTA />
        <Footer />
      </div>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  hero: { background: "linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.98)), url('/hero-bg.jpg') center/cover no-repeat", padding: "5rem 0 3rem", borderBottom: "1px solid var(--border-color)" },
  heroCont: { display: "flex", flexDirection: "column", gap: "1rem" },
  breadcrumb: { display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem" },
  breadLink: { color: "var(--accent-gold)", textDecoration: "none" },
  breadSep: { color: "var(--text-muted)" },
  breadCurrent: { color: "var(--text-secondary)" },
  h1: { fontSize: "clamp(1.35rem, 3.2vw, 2.2rem)", color: "#fff", fontWeight: "800", lineHeight: "1.25", maxWidth: "800px" },
  heroSub: { fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "700px", lineHeight: "1.7" },
  heroBadges: { display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.5rem" },
  badge: { backgroundColor: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.3)", color: "var(--accent-gold)", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.82rem", fontWeight: "600" },
  mainGrid: { display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", padding: "4rem 0", alignItems: "start" },
  contentCol: { display: "flex", flexDirection: "column", gap: "3rem" },
  section: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  h2: { fontSize: "1.6rem", color: "#fff", fontWeight: "700", borderBottom: "2px solid rgba(245,197,24,0.3)", paddingBottom: "0.6rem" },
  p: { fontSize: "0.97rem", color: "var(--text-secondary)", lineHeight: "1.75" },
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem", marginTop: "0.5rem" },
  featureCard: { padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" },
  featureIcon: { fontSize: "1.8rem" },
  featureTitle: { fontSize: "1rem", color: "#fff", fontWeight: "700" },
  featureDesc: { fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: "1.5" },
  destList: { display: "flex", flexDirection: "column", gap: "0.8rem" },
  destCard: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none" },
  destTitle: { color: "#fff", fontSize: "0.95rem" },
  destDetail: { color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "0.2rem" },
  destArrow: { color: "var(--accent-gold)", fontSize: "1.2rem" },
  fleetGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" },
  fleetCard: { padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" },
  fleetName: { fontSize: "0.95rem", color: "#fff", fontWeight: "700" },
  fleetPax: { fontSize: "0.82rem", color: "var(--text-secondary)" },
  fleetUse: { fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: "1.4" },
  fleetPrice: { color: "var(--accent-gold)", fontWeight: "700", fontSize: "0.9rem", marginTop: "auto" },
  ol: { paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.7rem", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7" },
  faqList: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.4rem", borderRadius: "6px" },
  faqQ: { fontSize: "1rem", color: "#fff", marginBottom: "0.5rem", fontWeight: "700" },
  faqA: { fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.8rem" },
  sideTitle: { fontSize: "1.1rem", color: "#fff", fontWeight: "700", marginBottom: "0.5rem" },
  sideSub: { fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.2rem" },
  sideRow: { display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid var(--border-color)", fontSize: "0.83rem" },
  sideLabel: { color: "var(--text-muted)" },
  sideVal: { color: "#fff", fontWeight: "600" },
  sideRoute: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0.8rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "4px", textDecoration: "none", fontSize: "0.88rem", color: "var(--text-secondary)", border: "1px solid var(--border-color)", marginBottom: "0.5rem" },
};


