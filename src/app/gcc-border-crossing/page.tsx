import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "GCC Border Crossing by Taxi – Complete Guide (Saudi Arabia)",
  description:
    "Complete guide to crossing Saudi Arabia's GCC borders by private taxi — King Fahd Causeway to Bahrain, Khafji to Kuwait, Al Batha to UAE, and Salwa to Qatar. Required documents, fees, and tips.",
  alternates: { canonical: "https://dammamairporttaxi.com/gcc-border-crossing" },
  openGraph: {
    title: "GCC Border Crossing by Taxi – Complete Guide",
    description:
      "King Fahd Causeway, Khafji, Al Batha/Ghuwaifat, Salwa — required documents, fees, crossing times, and taxi booking tips from Dammam.",
    url: "https://dammamairporttaxi.com/gcc-border-crossing",
    type: "article",
  },
};

/* ── Schema Markup ───────────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
    { "@type": "ListItem", position: 2, name: "GCC Border Crossing Guide", item: "https://dammamairporttaxi.com/gcc-border-crossing" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Cross a GCC Border by Private Taxi from Dammam",
  description: "Step-by-step guide to crossing Saudi Arabia's GCC land borders (Bahrain, Kuwait, UAE, Qatar) by private chartered taxi.",
  totalTime: "PT2H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Book your taxi in advance", text: "Reserve a licensed cross-border taxi from Dammam Airport Taxi at least 24 hours before travel to guarantee vehicle availability and a confirmed fixed price." },
    { "@type": "HowToStep", position: 2, name: "Prepare your travel documents", text: "Ensure your passport is valid for at least 6 months. Saudi residents (expatriates) must hold a valid Exit/Re-Entry visa. GCC nationals can use their national ID card. Arrange any required entry visas for the destination country." },
    { "@type": "HowToStep", position: 3, name: "Driver picks you up", text: "Your professional driver arrives at your specified pickup point — whether your home, office, or King Fahd International Airport (DMM). The driver holds all required commercial cross-border transport permits." },
    { "@type": "HowToStep", position: 4, name: "Saudi customs exit clearance", text: "At the Saudi border terminal, your driver guides the vehicle into the correct commercial taxi lane. You remain seated while the border officer inspects passports, checks exit visas, and prints the crossing slip. This usually takes 15–30 minutes." },
    { "@type": "HowToStep", position: 5, name: "Cross the border", text: "After Saudi exit clearance, the vehicle drives across to the destination country's entry terminal (e.g., Bahrain's Causeway immigration, Kuwait's Khafji terminal, UAE's Ghuwaifat port, or Qatar's Abu Samra crossing)." },
    { "@type": "HowToStep", position: 6, name: "Destination country entry", text: "Present your passport and any required entry visa or GCC ID at the destination country's immigration booth. Entry is stamped and vehicle insurance is verified." },
    { "@type": "HowToStep", position: 7, name: "Arrive at your destination", text: "Your driver delivers you door-to-door to your hotel, residence, or any address in the destination city. All tolls and bridge fees are pre-included in your booking price." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What documents do I need to cross from Saudi Arabia to Bahrain by taxi?", acceptedAnswer: { "@type": "Answer", text: "You need a passport valid for at least 6 months. Saudi residents (expatriates) require a valid Exit/Re-Entry visa and a Bahrain entry visa (available as an eVisa or on arrival for most nationalities). GCC nationals can use their national ID card. The King Fahd Causeway toll fee (approximately 35 SAR) is included in your Dammam Airport Taxi booking." } },
    { "@type": "Question", name: "How long does it take to cross the King Fahd Causeway by taxi?", acceptedAnswer: { "@type": "Answer", text: "On a normal day, the King Fahd Causeway crossing takes 1.5 to 2 hours including both Saudi exit and Bahrain entry procedures. During GCC public holidays (Eid, Saudi National Day, Bahrain National Day), waiting times can extend to 3–5 hours. Thursday evenings and Friday mornings are the busiest periods." } },
    { "@type": "Question", name: "Can a private taxi cross the Saudi–Kuwait Khafji border?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our licensed cross-border taxis hold valid Saudi-Kuwait commercial transport permits. We use the Khafji land border terminal (also known as Arar for Kuwait). The Dammam to Khafji distance is approximately 150 km, and full Kuwait City delivery is 420 km total. Passport must be valid for at least 6 months; Kuwait entry visa requirements vary by nationality." } },
    { "@type": "Question", name: "What is the border crossing procedure from Saudi Arabia to UAE by road?", acceptedAnswer: { "@type": "Answer", text: "Saudi vehicles exit via the Al Batha border terminal on the Saudi side, then enter UAE through the Ghuwaifat port on the UAE side. Both sides require passport inspection and vehicle insurance verification. UAE entry visa is required for non-GCC residents. The full drive from Dammam to Dubai covers approximately 950 km and takes 9–10 hours including stops and border clearance." } },
    { "@type": "Question", name: "How do I get from Dammam Airport to Qatar by land?", acceptedAnswer: { "@type": "Answer", text: "We drive from Dammam Airport (DMM) to the Saudi Salwa border terminal, approximately 310 km (3 hours). Passengers clear Saudi customs at Salwa, then cross to Qatar's Abu Samra border terminal. Currently our standard service drops passengers at the Saudi side of Salwa; full Doha delivery is available on request — contact us via WhatsApp to confirm availability." } },
    { "@type": "Question", name: "Are causeway or border tolls included in the taxi price?", acceptedAnswer: { "@type": "Answer", text: "Yes. All bridge tolls (King Fahd Causeway: ~35 SAR), road tolls, and mandatory border insurance fees are fully included in our quoted price. The only fees passengers pay separately are personal entry visa fees charged by the destination country's immigration authorities." } },
    { "@type": "Question", name: "What is the best time to cross the King Fahd Causeway to avoid traffic?", acceptedAnswer: { "@type": "Answer", text: "The least congested times are weekday mornings (Sunday–Wednesday, 07:00–10:00) and late evenings (22:00–02:00). Avoid Thursday afternoons and Friday mornings when Saudi and Bahraini residents travel for the weekend. Public holiday periods add 2–4 hours of extra waiting time." } },
  ],
};

export default function GCCBorderCrossingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={styles.page}>
        <Navbar />

        {/* ── Hero ─────────────────────────────── */}
        <section style={styles.hero}>
          <div className="container" style={styles.heroCont}>
            <nav style={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" style={styles.breadLink}>Home</Link>
              <span style={styles.breadSep}>/</span>
              <span style={styles.breadCurrent}>GCC Border Crossing Guide</span>
            </nav>
            <span className="badge-gold">Border Crossing Guide</span>
            <h1 style={styles.h1}>
              GCC Border Crossing by Private Taxi from Dammam — Bahrain, Kuwait, UAE & Qatar Guide
            </h1>
            <p style={styles.heroSub}>
              Everything you need to know about crossing from Saudi Arabia into Bahrain, Kuwait, UAE, and Qatar by private chartered taxi — required documents, border fees, crossing times, and step-by-step procedures.
            </p>
            <div style={styles.heroStats}>
              <div style={styles.stat}><strong style={styles.statVal}>4</strong><span style={styles.statLbl}>GCC Borders Covered</span></div>
              <div style={styles.stat}><strong style={styles.statVal}>All Fees</strong><span style={styles.statLbl}>Included in Price</span></div>
              <div style={styles.stat}><strong style={styles.statVal}>24/7</strong><span style={styles.statLbl}>Cross-Border Service</span></div>
            </div>
          </div>
        </section>

        {/* ── Quick-nav cards ───────────────────── */}
        <section style={styles.quickNav}>
          <div className="container" style={styles.quickGrid}>
            {[
              { href: "#bahrain", label: "Bahrain", sub: "King Fahd Causeway · 85 km" },
              { href: "#kuwait", label: "Kuwait", sub: "Khafji Border · 420 km" },
              { href: "#uae", label: "UAE", sub: "Al Batha / Ghuwaifat · 950 km" },
              { href: "#qatar", label: "Qatar", sub: "Salwa Border · 310 km" },
            ].map((item) => (
              <a key={item.href} href={item.href} style={styles.qCard}>
                <strong style={styles.qLabel}>{item.label}</strong>
                <span style={styles.qSub}>{item.sub}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Main content ─────────────────────── */}
        <main>
          <div className="container" style={styles.mainGrid}>
            <div style={styles.contentCol}>

              {/* BAHRAIN */}
              <article id="bahrain" style={styles.section}>
                <h2 style={styles.h2}>Saudi Arabia → Bahrain: King Fahd Causeway</h2>
                <p style={styles.p}>The <strong>King Fahd Causeway</strong> (Arabic: جسر الملك فهد) is a 25-kilometre dual-carriageway bridge linking <strong>Al Khobar, Eastern Province, Saudi Arabia</strong> with <strong>Manama, Kingdom of Bahrain</strong>. It is the most heavily used land border crossing in the Arabian Peninsula, handling over 12 million crossings annually.</p>
                <p style={styles.p}>The total taxi transfer distance from <strong>King Fahd International Airport (DMM)</strong> to Manama city centre via the causeway is approximately <strong>85 km</strong> and takes <strong>1.5 to 2 hours</strong> under normal conditions, or up to 3–5 hours on peak holiday weekends.</p>

                <h3 style={styles.h3}>Crossing Process — Step by Step</h3>
                <ol style={styles.ol}>
                  <li>Your driver enters the commercial vehicle lane at the <strong>Saudi Customs departure hall</strong> (Al Aziziyah Gate).</li>
                  <li>Saudi border officers inspect passports, exit/re-entry visas (for expatriate residents), and vehicle permits. A causeway slip is printed.</li>
                  <li>The vehicle crosses the 25 km bridge into Bahrain.</li>
                  <li>Bahrain immigration at <strong>Al Jasra entry terminal</strong> stamps passports, scans vehicles, and may conduct a luggage check.</li>
                  <li>Your driver delivers you to any address in Manama, Riffa, Muharraq, or <strong>Bahrain International Airport (BAH)</strong>.</li>
                </ol>

                <h3 style={styles.h3}>Required Documents for Saudi → Bahrain</h3>
                <ul style={styles.ul}>
                  <li><strong>Saudi citizens & GCC nationals:</strong> National ID card (valid) or passport</li>
                  <li><strong>Saudi residents (expatriates):</strong> Passport (valid ≥6 months) + valid Exit/Re-Entry visa + Bahrain entry visa (eVisa or visa on arrival for eligible nationalities)</li>
                  <li><strong>Causeway toll fee:</strong> ~35 SAR — <em>fully included in your Dammam Airport Taxi fare</em></li>
                </ul>

                <div style={styles.infoBox}>
                  <strong>Dammam to Bahrain Fares:</strong> Sedan (Toyota Camry) from <strong>350 SAR</strong> · SUV (GMC Yukon) from <strong>600 SAR</strong> · Family Van from <strong>750 SAR</strong>
                  <br /><Link href="/routes/dammam-to-bahrain" style={styles.infoLink}>→ View full Bahrain route details & book</Link>
                </div>
              </article>

              {/* KUWAIT */}
              <article id="kuwait" style={styles.section}>
                <h2 style={styles.h2}>Saudi Arabia → Kuwait: Khafji Border Terminal</h2>
                <p style={styles.p}>The <strong>Khafji Land Border</strong> (also known as the Saudi–Kuwait Khafji/Nuwaiseeb crossing) connects <strong>Al Khafji city, Eastern Province</strong> with the <strong>Kuwait Nuwaiseeb border terminal</strong>. It is the only operational road border between Saudi Arabia and Kuwait for private vehicles.</p>
                <p style={styles.p}>Distance from Dammam Airport to Kuwait City via the Khafji border: <strong>420 km</strong> · Estimated travel time: <strong>4 to 4.5 hours</strong> excluding border waiting time of 20–40 minutes on normal days.</p>

                <h3 style={styles.h3}>Required Documents for Saudi → Kuwait</h3>
                <ul style={styles.ul}>
                  <li><strong>GCC nationals:</strong> National ID card or passport</li>
                  <li><strong>Saudi residents:</strong> Passport (valid ≥6 months) + valid Exit/Re-Entry visa + Kuwait entry visa (requirements vary by nationality — check Kuwait eVisa portal)</li>
                  <li>Our drivers hold valid Saudi–Kuwait commercial transport permits for the Khafji crossing</li>
                </ul>

                <h3 style={styles.h3}>Long-Distance Highway Safety</h3>
                <p style={styles.p}>The Dammam–Kuwait route covers desert highway with high-speed sections. Our vehicles are pre-inspected before departure and equipped with GPS tracking. Drivers make rest stops at clean highway service stations. Complimentary water, snacks, and in-car Wi-Fi are provided for all 420 km journeys.</p>

                <div style={styles.infoBox}>
                  <strong>Dammam to Kuwait Fares:</strong> Sedan from <strong>1,500 SAR</strong> · SUV from <strong>2,200 SAR</strong> · Van from <strong>2,600 SAR</strong>
                  <br /><Link href="/routes/dammam-to-kuwait" style={styles.infoLink}>→ View full Kuwait route details & book</Link>
                </div>
              </article>

              {/* UAE */}
              <article id="uae" style={styles.section}>
                <h2 style={styles.h2}>Saudi Arabia → UAE: Al Batha / Ghuwaifat Border</h2>
                <p style={styles.p}>The <strong>Al Batha Border Terminal</strong> (Saudi side) and <strong>Ghuwaifat Port of Entry</strong> (UAE side) form the main land crossing between the Kingdom of Saudi Arabia and the United Arab Emirates. Located in Abu Dhabi emirate, this is the gateway for overland travel to Abu Dhabi, Dubai, and Sharjah.</p>
                <p style={styles.p}>The journey from <strong>Dammam Airport (DMM)</strong> to Dubai or Abu Dhabi covers approximately <strong>950 km</strong> and takes <strong>9 to 10 hours</strong> including two border clearances, meal stops, and fuel breaks.</p>

                <h3 style={styles.h3}>Required Documents for Saudi → UAE</h3>
                <ul style={styles.ul}>
                  <li><strong>UAE visa:</strong> Many nationalities receive visa-on-arrival at UAE land borders; others must obtain a UAE tourist visa in advance</li>
                  <li><strong>Saudi residents:</strong> Valid passport (≥6 months) + active multiple-entry Exit/Re-Entry visa to return to Saudi Arabia</li>
                  <li><strong>Vehicle insurance:</strong> Our vehicles carry valid UAE cross-border road insurance (included in price)</li>
                  <li><strong>Health insurance:</strong> UAE authorities recommend health insurance covering both KSA and UAE territories</li>
                </ul>

                <h3 style={styles.h3}>VIP Comfort for the 950 km Journey</h3>
                <p style={styles.p}>For the UAE trip, we recommend our <strong>GMC Yukon Denali</strong> — a full-size luxury SUV with reclining leather seating, tri-zone climate control, and ample luggage space. We plan scheduled stops at air-conditioned highway service stations. Multiple USB charging ports and high-speed Wi-Fi keep you connected throughout the journey.</p>

                <div style={styles.infoBox}>
                  <strong>Dammam to UAE Fares:</strong> Sedan from <strong>3,500 SAR</strong> · SUV from <strong>4,800 SAR</strong> · Van from <strong>5,500 SAR</strong> · VIP from <strong>8,500 SAR</strong>
                  <br /><Link href="/routes/dammam-to-uae" style={styles.infoLink}>→ View full UAE route details & book</Link>
                </div>
              </article>

              {/* QATAR */}
              <article id="qatar" style={styles.section}>
                <h2 style={styles.h2}>Saudi Arabia → Qatar: Salwa Border Terminal</h2>
                <p style={styles.p}>The <strong>Salwa–Abu Samra Land Border</strong> is the only road crossing between Saudi Arabia and Qatar. The Saudi side is called <strong>Salwa Border Terminal</strong>; the Qatari side is the <strong>Abu Samra Port of Entry</strong>. The crossing is located approximately 310 km south of Dammam, a 3-hour drive.</p>
                <p style={styles.p}>Diplomatic relations between Saudi Arabia and Qatar were fully restored in January 2021, and the Salwa crossing is now fully operational for tourist and business travel.</p>

                <h3 style={styles.h3}>Required Documents for Saudi → Qatar</h3>
                <ul style={styles.ul}>
                  <li><strong>Qatar entry:</strong> Many nationalities receive visa-on-arrival or Hayya entry at Abu Samra; check the Qatar Visa Centre for your nationality</li>
                  <li><strong>Saudi residents:</strong> Passport (≥6 months) + valid Exit/Re-Entry visa for Saudi Arabia</li>
                  <li>Our standard service transfers to the Saudi side of Salwa. For full Doha city delivery, contact us on WhatsApp to confirm custom permit availability</li>
                </ul>

                <div style={styles.infoBox}>
                  <strong>Dammam to Qatar Border Fares:</strong> Sedan from <strong>1,000 SAR</strong> · SUV from <strong>1,600 SAR</strong> · Van from <strong>2,000 SAR</strong>
                  <br /><Link href="/routes/dammam-airport-to-qatar-border" style={styles.infoLink}>→ View full Qatar route details & book</Link>
                </div>
              </article>

              {/* DOCUMENTS SUMMARY */}
              <article style={styles.section}>
                <h2 style={styles.h2}>Required Documents — Quick Reference Table</h2>
                <div style={styles.table}>
                  <div style={styles.tableHead}>
                    <span>Traveller Type</span><span>Passport</span><span>Exit/Re-Entry Visa</span><span>Destination Visa</span>
                  </div>
                  {[
                    ["Saudi Citizen", "Or National ID", "Not required", "Not required (GCC)"],
                    ["GCC National", "Or GCC National ID", "Not required", "Not required"],
                    ["Saudi Resident (Expat)", "Valid ≥6 months", "Required — must be active", "Required (varies by nationality)"],
                    ["Tourist (in transit)", "Valid ≥6 months", "Single/multiple entry", "Required before travel"],
                  ].map(([type, passport, exit, dest], i) => (
                    <div key={i} style={styles.tableRow}>
                      <span style={{ fontWeight: 700, color: "#fff" }}>{type}</span>
                      <span>{passport}</span><span>{exit}</span><span>{dest}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* FAQ */}
              <article style={styles.section}>
                <h2 style={styles.h2}>Frequently Asked Questions</h2>
                <div style={styles.faqList}>
                  {[
                    { q: "Are causeway and border tolls included in the taxi price?", a: "Yes. All bridge tolls (King Fahd Causeway ~35 SAR), road tolls, and mandatory border vehicle insurance fees are fully included in our quoted price. Passengers pay personal entry visa fees separately at immigration counters." },
                    { q: "How long does the King Fahd Causeway crossing take?", a: "1.5–2 hours on a normal weekday. Up to 3–5 hours during GCC public holidays or Thursday/Friday weekends. Our drivers know the best lanes to minimise waiting time." },
                    { q: "Can I cross GCC borders without an Exit/Re-Entry visa?", a: "Saudi residents (non-Saudi nationals holding an Iqama) must hold a valid Exit/Re-Entry visa to leave Saudi Arabia. Without it, you cannot depart. Saudi citizens and GCC nationals are exempt." },
                    { q: "What happens if my passport is stamped with a certain country?", a: "There are no restrictions for holders of Israeli stamps at Saudi, Bahrain, Kuwait, or UAE borders as of 2024. For the latest entry rules specific to your passport, always verify with the destination country's embassy before travel." },
                    { q: "Do you provide same-day return trips across GCC borders?", a: "Yes. We offer discounted round-trip booking packages for same-day or next-day returns. Contact us on WhatsApp with your travel dates for a custom quote." },
                  ].map((faq, i) => (
                    <div key={i} style={styles.faqItem}>
                      <h3 style={styles.faqQ}>{faq.q}</h3>
                      <p style={styles.faqA}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </article>

            </div>

            {/* ── Sidebar ─────────────── */}
            <aside style={styles.sidebar}>
              <div className="glass-card" style={styles.sideCard}>
                <h3 style={styles.sideTitle}>Book Your Border Taxi</h3>
                <p style={styles.sideSub}>Fixed rates · All tolls included · 24/7</p>
                <div style={styles.sideRoutes}>
                  {[
                    { label: "→ Bahrain", href: "/routes/dammam-to-bahrain", price: "350" },
                    { label: "→ Kuwait", href: "/routes/dammam-to-kuwait", price: "1,500" },
                    { label: "→ UAE", href: "/routes/dammam-to-uae", price: "3,500" },
                    { label: "→ Qatar Border", href: "/routes/dammam-airport-to-qatar-border", price: "1,000" },
                  ].map((r) => (
                    <Link key={r.href} href={r.href} style={styles.sideRoute}>
                      <span>{r.label}</span>
                      <span style={{ color: "var(--accent-gold)", fontWeight: 700 }}>from {r.price} SAR</span>
                    </Link>
                  ))}
                </div>
                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center", marginTop: "1rem" }}>
                  WhatsApp Us Now
                </a>
              </div>

              <div className="glass-card" style={{ ...styles.sideCard, marginTop: "1.5rem" }}>
                <h3 style={styles.sideTitle}>Key Border Facts</h3>
                {[
                  { label: "King Fahd Causeway", val: "25 km bridge · ~35 SAR toll" },
                  { label: "Khafji (Kuwait)", val: "150 km from Dammam" },
                  { label: "Al Batha (UAE)", val: "850 km from Dammam" },
                  { label: "Salwa (Qatar)", val: "310 km from Dammam" },
                  { label: "Peak hours", val: "Thu PM · Fri AM · GCC Holidays" },
                  { label: "Documents", val: "Passport ≥6 months + Exit visa" },
                ].map((f, i) => (
                  <div key={i} style={styles.factRow}>
                    <span style={styles.factLabel}>{f.label}</span>
                    <span style={styles.factVal}>{f.val}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </main>

        {/* ── Related Routes ────────────────────── */}
        <RelatedRoutes currentUrl="/gcc-border-crossing" />

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
  h1: { fontSize: "clamp(1.1rem, 2.4vw, 1.75rem)", color: "#fff", fontWeight: "800", lineHeight: "1.25", maxWidth: "800px" },
  heroSub: { fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "700px", lineHeight: "1.7" },
  heroStats: { display: "flex", gap: "3rem", marginTop: "1rem", flexWrap: "wrap" },
  stat: { display: "flex", flexDirection: "column", gap: "0.2rem" },
  statVal: { fontSize: "1.6rem", color: "var(--accent-gold)", fontWeight: "800" },
  statLbl: { fontSize: "0.8rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" },
  quickNav: { backgroundColor: "var(--bg-secondary)", padding: "2rem 0", borderBottom: "1px solid var(--border-color)" },
  quickGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" },
  qCard: { backgroundColor: "rgba(20,20,20,0.8)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1.2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", textDecoration: "none", textAlign: "center" },
  qFlag: { fontSize: "2rem" },
  qLabel: { color: "#fff", fontWeight: "700", fontSize: "1rem" },
  qSub: { color: "var(--text-muted)", fontSize: "0.78rem" },
  mainGrid: { display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem", padding: "4rem 0", alignItems: "start" },
  contentCol: { display: "flex", flexDirection: "column", gap: "3rem" },
  section: { display: "flex", flexDirection: "column", gap: "1rem" },
  h2: { fontSize: "1.6rem", color: "#fff", fontWeight: "700", borderBottom: "2px solid rgba(245,197,24,0.3)", paddingBottom: "0.6rem" },
  h3: { fontSize: "1.1rem", color: "var(--accent-gold)", fontWeight: "700", marginTop: "0.5rem" },
  p: { fontSize: "0.97rem", color: "var(--text-secondary)", lineHeight: "1.75" },
  ol: { paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" },
  ul: { paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" },
  infoBox: { backgroundColor: "rgba(245,197,24,0.07)", border: "1px solid rgba(245,197,24,0.25)", borderRadius: "6px", padding: "1rem 1.2rem", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.7" },
  infoLink: { color: "var(--accent-gold)", textDecoration: "none", fontWeight: "600" },
  table: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", overflow: "hidden" },
  tableHead: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "0.5rem", padding: "0.8rem 1rem", backgroundColor: "rgba(245,197,24,0.08)", fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" },
  tableRow: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "0.5rem", padding: "0.8rem 1rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-secondary)" },
  faqList: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.4rem", borderRadius: "6px" },
  faqQ: { fontSize: "1rem", color: "#fff", marginBottom: "0.5rem", fontWeight: "700" },
  faqA: { fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.8rem" },
  sideTitle: { fontSize: "1.1rem", color: "#fff", fontWeight: "700", marginBottom: "0.5rem" },
  sideSub: { fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.2rem" },
  sideRoutes: { display: "flex", flexDirection: "column", gap: "0.6rem" },
  sideRoute: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0.8rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "4px", textDecoration: "none", fontSize: "0.88rem", color: "var(--text-secondary)", border: "1px solid var(--border-color)" },
  factRow: { display: "flex", flexDirection: "column", padding: "0.6rem 0", borderBottom: "1px solid var(--border-color)" },
  factLabel: { fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase" },
  factVal: { fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" },
};


