import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedRoutes } from "@/components/RelatedRoutes";

export const metadata: Metadata = {
  title: "Dammam Airport (DMM) Taxi Guide – King Fahd International Airport",
  description:
    "Complete taxi and transfer guide for King Fahd International Airport (DMM), Dammam. How to meet your driver at arrivals, flight tracking, available destinations, and booking tips for international travellers.",
  alternates: { canonical: "https://dammamairporttaxi.com/dammam-airport-guide" },
  openGraph: {
    title: "Dammam Airport (DMM) Taxi Guide – Arrivals & Transfers",
    description:
      "How to get a private taxi at King Fahd International Airport DMM — meet & greet, flight tracking, local & GCC routes. Complete 2024 guide.",
    url: "https://dammamairporttaxi.com/dammam-airport-guide",
    type: "article",
  },
};

/* ── Schema ─────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dammamairporttaxi.com" },
    { "@type": "ListItem", position: 2, name: "Dammam Airport Guide", item: "https://dammamairporttaxi.com/dammam-airport-guide" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Taxi at Dammam Airport (King Fahd International Airport)",
  description: "Step-by-step guide to booking and meeting your private taxi driver at King Fahd International Airport (DMM), Dammam, Saudi Arabia.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Book your taxi in advance", text: "Reserve your taxi at least 4 hours before your flight lands. Provide your flight number, arrival date, and destination. You will receive a booking confirmation via WhatsApp." },
    { "@type": "HowToStep", position: 2, name: "Driver monitors your flight", text: "Dammam Airport Taxi tracks your flight number in real time. If your flight is delayed or arrives early, the driver adjusts automatically — no extra charge." },
    { "@type": "HowToStep", position: 3, name: "Collect your baggage", text: "After landing at DMM Terminal, proceed through immigration and baggage reclaim at your normal pace. Your 60-minute complimentary wait begins from your actual landing time." },
    { "@type": "HowToStep", position: 4, name: "Exit through arrivals gate", text: "Exit the arrivals hall through the main gate. Your driver will be waiting in the arrivals meeting area holding a personalised name board." },
    { "@type": "HowToStep", position: 5, name: "Driver assists with luggage", text: "Your driver greets you, assists with all luggage, and escorts you to the pre-cooled vehicle in the designated pickup zone outside the terminal." },
    { "@type": "HowToStep", position: 6, name: "Travel to your destination", text: "Your journey begins. All tolls, airport parking, and VAT are pre-included in your fare. Sit back with complimentary water, Wi-Fi, and USB charging." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the IATA code for Dammam Airport?", acceptedAnswer: { "@type": "Answer", text: "Dammam Airport's IATA code is DMM. The full name is King Fahd International Airport (Arabic: مطار الملك فهد الدولي). It is located approximately 35 km north-west of Dammam city centre and 25 km from Al Khobar. It is the largest airport in the world by total land area at 780 square kilometres." } },
    { "@type": "Question", name: "Where do I meet my private taxi driver at Dammam Airport?", acceptedAnswer: { "@type": "Answer", text: "Your driver will be waiting in the arrivals meeting zone outside the arrivals gate hall of DMM Airport, holding a personalised name board with your name on it. We send you your driver's photo and mobile number via WhatsApp 2 hours before your flight lands so you can contact them directly." } },
    { "@type": "Question", name: "How long is the free waiting time at Dammam Airport?", acceptedAnswer: { "@type": "Answer", text: "We offer 60 minutes of complimentary waiting time from the moment your flight's actual landing time, as tracked live by our system. This allows ample time for immigration, baggage reclaim, and customs clearance without any pressure." } },
    { "@type": "Question", name: "Is airport parking included in the taxi price at DMM?", acceptedAnswer: { "@type": "Answer", text: "Yes. All DMM Airport parking fees, road tolls, and VAT (15%) are fully included in our quoted price. The price you see is the total price you pay — there are no hidden charges at the airport." } },
    { "@type": "Question", name: "What happens if my flight is delayed or cancelled?", acceptedAnswer: { "@type": "Answer", text: "We track all flights in real time. If your flight is delayed, your driver adjusts their arrival time automatically. For cancelled flights, contact us via WhatsApp as soon as possible to reschedule. Cancellations more than 12 hours before pickup are free of charge." } },
    { "@type": "Question", name: "Does DMM Airport have good facilities for long layovers?", acceptedAnswer: { "@type": "Answer", text: "King Fahd International Airport has prayer rooms, a food court, retail shops, free passenger Wi-Fi, a hotel within the terminal complex (Al-Hokair Courtyard), and multiple airline lounges. The airport is open 24 hours and handles both domestic Saudi airlines (SAUDIA, flynas, flyadeal) and major international carriers." } },
    { "@type": "Question", name: "What are the most popular taxi routes from Dammam Airport?", acceptedAnswer: { "@type": "Answer", text: "The most booked routes from King Fahd International Airport (DMM) are: Airport to Khobar (60 km, 45 min, from 150 SAR), Airport to Jubail (85 km, 55 min, from 200 SAR), Airport to Dhahran/Aramco (55 km, 40 min, from 150 SAR), Dammam to Bahrain via King Fahd Causeway (85 km, 1.5–2 hrs, from 350 SAR), and Dammam to Riyadh (400 km, 3.5–4 hrs, from 900 SAR)." } },
  ],
};

const airportSchema = {
  "@context": "https://schema.org",
  "@type": "Airport",
  name: "King Fahd International Airport",
  iataCode: "DMM",
  icaoCode: "OEDF",
  description: "King Fahd International Airport (DMM) is located in Dammam, Eastern Province, Saudi Arabia. It is the primary airport for the Eastern Province and the world's largest airport by total land area at 780 square kilometres.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dammam",
    addressRegion: "Eastern Province",
    addressCountry: "SA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.4712, longitude: 49.7979 },
  url: "https://dammamairporttaxi.com/dammam-airport-guide",
};

export default function DammamAirportGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airportSchema) }} />

      <div style={styles.page}>
        <Navbar />

        {/* ── Hero ─────────────────────────────── */}
        <section style={styles.hero}>
          <div className="container" style={styles.heroCont}>
            <nav style={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" style={styles.breadLink}>Home</Link>
              <span style={styles.breadSep}>/</span>
              <span style={styles.breadCurrent}>Dammam Airport Guide</span>
            </nav>
            <span className="badge-gold">Airport Guide</span>
            <h1 style={styles.h1}>
              Dammam Airport Taxi Guide — Arrivals, Fares & Private Transfers at King Fahd International Airport (DMM)
            </h1>
            <p style={styles.heroSub}>
              Everything you need to know about getting a private taxi at <strong>King Fahd International Airport (DMM)</strong> — meet & greet process, free flight tracking, waiting times, available destinations, and practical tips for international arrivals.
            </p>
            <div style={styles.infoChips}>
              {["IATA: DMM", "Dammam, Eastern Province", "60 min free wait", "Flight tracking included", "Parking & VAT included"].map((label) => (
                <span key={label} style={styles.chip}>{label}</span>
              ))}
            </div>
          </div>
        </section>

        <main>
          <div className="container" style={styles.mainGrid}>
            <div style={styles.contentCol}>

              {/* ABOUT DMM */}
              <section style={styles.section}>
                <h2 style={styles.h2}>About King Fahd International Airport (DMM)</h2>
                <p style={styles.p}><strong>King Fahd International Airport</strong> (Arabic: مطار الملك فهد الدولي) is the primary commercial airport serving <strong>Dammam</strong>, <strong>Al Khobar</strong>, and the <strong>Eastern Province of Saudi Arabia</strong>. The airport opened on 28 November 1999 and is operated by the General Authority of Civil Aviation (GACA).</p>
                <p style={styles.p}>With a total area of <strong>780 square kilometres</strong>, DMM is the <strong>largest airport in the world by land area</strong> — larger than the entire country of Bahrain. Despite its vast size, its terminal operations are efficient and well-organised for passenger flow.</p>

                <div style={styles.factCards}>
                  {[
                    { label: "IATA Code", val: "DMM" },
                    { label: "ICAO Code", val: "OEDF" },
                    { label: "Location", val: "35 km NW of Dammam, 25 km from Khobar" },
                    { label: "Terminals", val: "1 International + 1 Domestic" },
                    { label: "Annual Passengers", val: "~9 million" },
                    { label: "Operating Hours", val: "24/7" },
                    { label: "Airlines", val: "SAUDIA, flynas, flyadeal, Qatar Airways, Emirates, Lufthansa & more" },
                    { label: "Coordinates", val: "26.4712°N, 49.7979°E" },
                  ].map((f) => (
                    <div key={f.label} style={styles.factCard}>
                      <span style={styles.factLabel}>{f.label}</span>
                      <span style={styles.factVal}>{f.val}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* HOW TO GET A TAXI */}
              <section style={styles.section}>
                <h2 style={styles.h2}>How to Meet Your Taxi Driver at DMM Airport</h2>
                <p style={styles.p}>Unlike unregulated street taxis queuing outside the terminal, a pre-booked Dammam Airport Taxi guarantees your driver is in the arrivals hall before you exit customs — identified by a personalised name board.</p>
                <ol style={styles.ol}>
                  <li><strong>Book in advance</strong> — Provide your flight number, landing date and time, and destination when booking. You receive a WhatsApp confirmation immediately.</li>
                  <li><strong>We track your flight live</strong> — If your flight is delayed by 30 minutes or 3 hours, your driver adjusts automatically at no extra charge.</li>
                  <li><strong>Clear immigration & baggage</strong> — Take your time. You have 60 minutes of complimentary waiting from your actual landing time.</li>
                  <li><strong>Exit arrivals gate</strong> — Your driver stands in the public arrivals meeting area just outside the exit gate, holding a name board with your name.</li>
                  <li><strong>Confirm identity & proceed</strong> — The driver assists with all luggage and escorts you to the pre-cooled vehicle in the designated taxi pickup zone.</li>
                </ol>

                <div style={styles.tipBox}>
                  <strong>Tip:</strong> We send your driver's photo, name, and direct mobile number via WhatsApp 2 hours before your landing. You can call or message them directly if you cannot locate them.
                </div>
              </section>

              {/* WHY PRE-BOOK */}
              <section style={styles.section}>
                <h2 style={styles.h2}>Why Pre-Book vs. Hailing a Taxi at DMM Airport</h2>
                <div style={styles.compareGrid}>
                  <div style={styles.compareCol}>
                    <h3 style={{ ...styles.h3, color: "var(--accent-gold)" }}>Pre-Booked Private Taxi</h3>
                    <ul style={styles.ul}>
                      <li>Driver waiting at arrivals before you exit</li>
                      <li>Fixed, transparent price — no meter, no surge</li>
                      <li>Airport parking & VAT fully included</li>
                      <li>Free 60-min flight delay buffer</li>
                      <li>Licensed, insured commercial vehicle</li>
                      <li>GPS-tracked, verified driver</li>
                      <li>Free in-car Wi-Fi & chilled water</li>
                    </ul>
                  </div>
                  <div style={styles.compareCol}>
                    <h3 style={{ ...styles.h3, color: "#888" }}>Street Taxi / Unregulated App</h3>
                    <ul style={styles.ul}>
                      <li>45+ min queue wait at peak hours</li>
                      <li>Meter fares + airport surcharges + parking</li>
                      <li>Hidden tolls and luggage fees</li>
                      <li>No flight tracking, driver arrives late</li>
                      <li>Possible unlicensed or uninsured vehicle</li>
                      <li>No GPS accountability</li>
                      <li>No amenities</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ROUTES FROM DMM */}
              <section style={styles.section}>
                <h2 style={styles.h2}>All Available Taxi Routes from Dammam Airport</h2>
                <div style={styles.routeList}>
                  {[
                    { name: "DMM Airport → Al Khobar", dist: "60 km", time: "45 min", price: "150 SAR", href: "/routes/dammam-airport-to-khobar" },
                    { name: "DMM Airport → Jubail Industrial City", dist: "85 km", time: "55 min", price: "200 SAR", href: "/routes/dammam-airport-to-jubail" },
                    { name: "DMM Airport → Dhahran (Aramco HQ)", dist: "55 km", time: "40 min", price: "150 SAR", href: "/routes/dammam-airport-to-dhahran" },
                    { name: "DMM Airport → Hofuf (Al-Ahsa)", dist: "160 km", time: "1.5–2 hrs", price: "400 SAR", href: "/routes/dammam-airport-to-hofuf" },
                    { name: "Dammam → Bahrain (King Fahd Causeway)", dist: "85 km", time: "1.5–2 hrs", price: "350 SAR", href: "/routes/dammam-to-bahrain" },
                    { name: "Dammam → Riyadh (Intercity)", dist: "400 km", time: "3.5–4 hrs", price: "900 SAR", href: "/routes/dammam-to-riyadh" },
                    { name: "Dammam → Kuwait (Khafji Border)", dist: "420 km", time: "4–4.5 hrs", price: "1,500 SAR", href: "/routes/dammam-to-kuwait" },
                    { name: "Dammam → Qatar Border (Salwa)", dist: "310 km", time: "3 hrs", price: "1,000 SAR", href: "/routes/dammam-airport-to-qatar-border" },
                    { name: "Dammam → UAE (Abu Dhabi / Dubai)", dist: "950 km", time: "9–10 hrs", price: "3,500 SAR", href: "/routes/dammam-to-uae" },
                  ].map((r) => (
                    <Link key={r.href} href={r.href} style={styles.routeRow}>
                      <div>
                        <strong style={styles.routeName}>{r.name}</strong>
                        <span style={styles.routeMeta}>{r.dist} · {r.time}</span>
                      </div>
                      <span style={styles.routePrice}>Sedan from {r.price}</span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* AIRPORT TIPS */}
              <section style={styles.section}>
                <h2 style={styles.h2}>Practical Tips for International Arrivals at DMM</h2>
                <div style={styles.tipsList}>
                  {[
                    { title: "Immigration fast lanes", tip: "Saudi citizens and GCC nationals use dedicated e-gate lanes which are significantly faster. International passengers queue at staffed counters. Average immigration time: 15–30 minutes off-peak, 30–60 minutes during peak periods." },
                    { title: "Oversized luggage", tip: "If travelling with golf bags, large instruments, or excess luggage, book a GMC Yukon SUV (5 bags + 6 passengers) or Hyundai Staria Van (7 bags + 8 passengers) to ensure sufficient boot space." },
                    { title: "SIM card and connectivity", tip: "STC, Mobily, and Zain SIM cards are available at the arrivals hall. The airport also provides free passenger Wi-Fi. Our vehicles have their own high-speed mobile Wi-Fi hotspot available free of charge." },
                    { title: "Currency exchange", tip: "Al Rajhi Bank and several exchange counters are located in the arrivals hall. ATMs are widely available throughout the terminal. Most taxis and businesses in the Eastern Province accept card payment." },
                    { title: "Prayer facilities", tip: "Prayer rooms are located throughout both terminals. Prayer times follow local Dammam timings. Flights may have brief taxi delays during Azan prayer times." },
                  ].map((t) => (
                    <div key={t.title} style={styles.tipItem}>
                      <div>
                        <h3 style={styles.tipTitle}>{t.title}</h3>
                        <p style={styles.tipText}>{t.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section style={styles.section}>
                <h2 style={styles.h2}>Frequently Asked Questions — Dammam Airport Taxi</h2>
                <div style={styles.faqList}>
                  {[
                    { q: "What is the IATA code for Dammam Airport?", a: "DMM. King Fahd International Airport (IATA: DMM, ICAO: OEDF) is located in Dammam, Eastern Province, Saudi Arabia. It covers 780 sq km — the world's largest airport by land area." },
                    { q: "Where do I meet my driver at Dammam Airport?", a: "Your driver waits in the public arrivals meeting area just outside the exit gate of the arrivals hall, holding a personalised name board. We send the driver's photo and number via WhatsApp 2 hours before your landing." },
                    { q: "How long is the free waiting time?", a: "60 minutes from your flight's actual landing time — enough to clear immigration, collect baggage, and exit customs without any rush." },
                    { q: "Is airport parking included in the price?", a: "Yes. All DMM Airport parking fees, road tolls, and 15% VAT are fully included in the quoted price. What you see is what you pay." },
                    { q: "What if my flight is delayed or cancelled?", a: "Our system tracks your flight live. Delays adjust your driver's schedule automatically at no charge. For cancellations, contact us on WhatsApp to reschedule — free within 12 hours of original pickup." },
                    { q: "What are the busiest routes from DMM Airport?", a: "Most booked: Airport → Khobar (150 SAR), Airport → Jubail (200 SAR), Airport → Dhahran (150 SAR), Dammam → Bahrain via Causeway (350 SAR), Dammam → Riyadh (900 SAR)." },
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
                <h3 style={styles.sideTitle}>Book Airport Pickup</h3>
                <p style={styles.sideSub}>Share your flight number — we track it live</p>
                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ display: "block", textDecoration: "none", textAlign: "center" }}>
                  WhatsApp Booking
                </a>
                <div style={styles.sideFeats}>
                  {["60 min free wait", "Live flight tracking", "Name board at arrivals", "All parking included", "Free Wi-Fi in car"].map((f) => (
                    <div key={f} style={styles.sideFeat}>✓ {f}</div>
                  ))}
                </div>
              </div>

              <div className="glass-card" style={{ ...styles.sideCard, marginTop: "1.5rem" }}>
                <h3 style={styles.sideTitle}>Routes from DMM</h3>
                {[
                  { label: "→ Khobar", price: "150 SAR", href: "/routes/dammam-airport-to-khobar" },
                  { label: "→ Jubail", price: "200 SAR", href: "/routes/dammam-airport-to-jubail" },
                  { label: "→ Dhahran", price: "150 SAR", href: "/routes/dammam-airport-to-dhahran" },
                  { label: "→ Bahrain", price: "350 SAR", href: "/routes/dammam-to-bahrain" },
                  { label: "→ Riyadh", price: "900 SAR", href: "/routes/dammam-to-riyadh" },
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

        <RelatedRoutes currentUrl="/dammam-airport-guide" />
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
  h1: { fontSize: "2.4rem", color: "#fff", fontWeight: "800", lineHeight: "1.2", maxWidth: "800px" },
  heroSub: { fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "700px", lineHeight: "1.7" },
  infoChips: { display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.5rem" },
  chip: { backgroundColor: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.3)", color: "var(--accent-gold)", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600" },
  mainGrid: { display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", padding: "4rem 0", alignItems: "start" },
  contentCol: { display: "flex", flexDirection: "column", gap: "3rem" },
  section: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  h2: { fontSize: "1.6rem", color: "#fff", fontWeight: "700", borderBottom: "2px solid rgba(245,197,24,0.3)", paddingBottom: "0.6rem" },
  h3: { fontSize: "1rem", color: "var(--accent-gold)", fontWeight: "700" },
  p: { fontSize: "0.97rem", color: "var(--text-secondary)", lineHeight: "1.75" },
  factCards: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.8rem", marginTop: "0.5rem" },
  factCard: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.8rem 1rem", display: "flex", flexDirection: "column", gap: "0.3rem" },
  factLabel: { fontSize: "0.72rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase" },
  factVal: { fontSize: "0.88rem", color: "#fff" },
  ol: { paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.7rem", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7" },
  ul: { paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" },
  tipBox: { backgroundColor: "rgba(245,197,24,0.07)", border: "1px solid rgba(245,197,24,0.25)", borderRadius: "6px", padding: "1rem 1.2rem", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.7" },
  compareGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" },
  compareCol: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" },
  routeList: { display: "flex", flexDirection: "column", gap: "0.7rem" },
  routeRow: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0.9rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none" },
  routeName: { color: "#fff", fontSize: "0.9rem", display: "block" },
  routeMeta: { color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem", display: "block" },
  routePrice: { color: "var(--accent-gold)", fontWeight: "700", fontSize: "0.88rem", flexShrink: 0 },
  tipsList: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  tipItem: { display: "flex", gap: "1rem", alignItems: "flex-start" },
  tipIcon: { fontSize: "1.6rem", flexShrink: 0, marginTop: "0.2rem" },
  tipTitle: { fontSize: "0.95rem", color: "#fff", fontWeight: "700", marginBottom: "0.3rem" },
  tipText: { fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  faqList: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.4rem", borderRadius: "6px" },
  faqQ: { fontSize: "1rem", color: "#fff", marginBottom: "0.5rem", fontWeight: "700" },
  faqA: { fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" },
  sidebar: { position: "sticky", top: "100px" },
  sideCard: { padding: "1.8rem" },
  sideTitle: { fontSize: "1.1rem", color: "#fff", fontWeight: "700", marginBottom: "0.5rem" },
  sideSub: { fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.2rem" },
  sideFeats: { marginTop: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" },
  sideFeat: { fontSize: "0.83rem", color: "var(--text-secondary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.4rem" },
  sideRoute: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0.8rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "4px", textDecoration: "none", fontSize: "0.88rem", color: "var(--text-secondary)", border: "1px solid var(--border-color)", marginBottom: "0.5rem" },
};


