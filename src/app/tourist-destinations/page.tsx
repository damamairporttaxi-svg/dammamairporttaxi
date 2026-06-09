import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "GCC Tourist Destinations from Dammam | Day Trips & Weekend Getaways",
  description:
    "Explore all GCC tourist destinations reachable by private taxi from Dammam — Bahrain, Doha Qatar, Dubai, Abu Dhabi, Sharjah, Kuwait, Muscat Oman, Jeddah & Madinah. Fixed rates, luxury fleet.",
  alternates: { canonical: "https://www.dammamairporttaxi.com/tourist-destinations" },
  openGraph: {
    title: "GCC Tourist Destinations from Dammam by Taxi",
    description:
      "Day trips, weekend getaways & long-distance transfers from Dammam to all GCC tourist spots. Bahrain Causeway, Doha Souq Waqif, Dubai, Abu Dhabi, Muscat & more.",
    url: "https://www.dammamairporttaxi.com/tourist-destinations",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dammamairporttaxi.com" },
    { "@type": "ListItem", position: 2, name: "Tourist Destinations from Dammam", item: "https://www.dammamairporttaxi.com/tourist-destinations" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GCC Tourist Destinations Reachable by Taxi from Dammam",
  description: "All tourist cities and destinations accessible by private taxi from Dammam, Saudi Arabia",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bahrain — Manama, Bahrain Fort, Tree of Life", url: "https://www.dammamairporttaxi.com/routes/dammam-to-bahrain" },
    { "@type": "ListItem", position: 2, name: "Doha, Qatar — Souq Waqif, Pearl Qatar, Museum of Islamic Art", url: "https://www.dammamairporttaxi.com/routes/dammam-to-doha" },
    { "@type": "ListItem", position: 3, name: "Kuwait City — Kuwait Towers, The Avenues", url: "https://www.dammamairporttaxi.com/routes/dammam-to-kuwait" },
    { "@type": "ListItem", position: 4, name: "Dubai, UAE — Burj Khalifa, Palm Jumeirah, Dubai Mall", url: "https://www.dammamairporttaxi.com/routes/dammam-to-uae" },
    { "@type": "ListItem", position: 5, name: "Abu Dhabi, UAE — Sheikh Zayed Grand Mosque, Yas Island", url: "https://www.dammamairporttaxi.com/routes/dammam-to-abu-dhabi" },
    { "@type": "ListItem", position: 6, name: "Sharjah, UAE — Heritage Area, Blue Souk, Al Noor Mosque", url: "https://www.dammamairporttaxi.com/routes/dammam-to-sharjah" },
    { "@type": "ListItem", position: 7, name: "Muscat, Oman — Sultan Qaboos Mosque, Mutrah Souq", url: "https://www.dammamairporttaxi.com/routes/dammam-to-muscat" },
    { "@type": "ListItem", position: 8, name: "Jeddah, Saudi Arabia — Al-Balad UNESCO, King Fahd Fountain", url: "https://www.dammamairporttaxi.com/routes/dammam-to-jeddah" },
    { "@type": "ListItem", position: 9, name: "Madinah, Saudi Arabia — Al-Masjid an-Nabawi, Quba Mosque", url: "https://www.dammamairporttaxi.com/routes/dammam-to-madinah" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What tourist destinations can I visit from Dammam by taxi?", acceptedAnswer: { "@type": "Answer", text: "From Dammam you can reach Bahrain (1.5–2 hrs), Doha Qatar (5–6 hrs), Kuwait City (4–4.5 hrs), Dubai UAE (9–10 hrs), Abu Dhabi UAE (8.5–9.5 hrs), Sharjah UAE (9.5–10.5 hrs), Muscat Oman (14–16 hrs), Jeddah Saudi Arabia (12–13 hrs), and Madinah Saudi Arabia (10–11 hrs) by private taxi." } },
    { "@type": "Question", name: "Which GCC country is closest to Dammam for a day trip?", acceptedAnswer: { "@type": "Answer", text: "Bahrain is the closest GCC destination from Dammam — just 85 km via the King Fahd Causeway, taking 1.5 to 2 hours. Bahrain is perfect for a day trip or weekend getaway from the Eastern Province." } },
    { "@type": "Question", name: "Can I visit Dubai from Dammam by road?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dammam to Dubai is approximately 950 km, taking 9–10 hours by private taxi via the Al Batha-Ghuwaifat Saudi-UAE border crossing. Our luxury GMC Yukon Denali with Wi-Fi, USB charging, and scheduled rest stops makes the journey comfortable." } },
    { "@type": "Question", name: "What is the most popular tourist destination from Dammam?", acceptedAnswer: { "@type": "Answer", text: "Bahrain via the King Fahd Causeway is by far the most popular destination from Dammam, followed by Doha (Qatar) and Dubai (UAE). Bahrain is especially popular for weekend trips given the short 85 km distance." } },
    { "@type": "Question", name: "Do I need a visa to visit GCC countries from Saudi Arabia?", acceptedAnswer: { "@type": "Answer", text: "Saudi citizens and GCC nationals can travel freely with national ID cards. Saudi residents (expatriates) need a valid Exit/Re-Entry visa and the destination country's entry visa. Bahrain, Qatar, and UAE offer visa-on-arrival or eVisa for many nationalities. Check each country's requirements before travel." } },
  ],
};

const destinations = [
  {
    flag: "🇧🇭",
    country: "Bahrain",
    city: "Manama & All Bahrain",
    distance: "85 km · 1.5–2 hrs",
    tripType: "Day Trip / Weekend",
    highlights: ["Bahrain Fort (UNESCO)", "Tree of Life", "Al-Fateh Grand Mosque", "Manama Souq", "Dilmun Burial Mounds", "Bahrain National Museum", "Budaiya Beach", "Adhari Park"],
    airports: "Bahrain International Airport (BAH)",
    href: "/routes/dammam-to-bahrain",
    color: "#c8102e",
  },
  {
    flag: "🇶🇦",
    country: "Qatar",
    city: "Doha & Lusail",
    distance: "400 km · 5–6 hrs",
    tripType: "Weekend / Extended",
    highlights: ["Souq Waqif", "Museum of Islamic Art", "The Pearl Qatar", "Katara Cultural Village", "Lusail City", "National Museum of Qatar", "Aspire Park", "West Bay Corniche"],
    airports: "Hamad International Airport (DOH)",
    href: "/routes/dammam-to-doha",
    color: "#8d1b3d",
  },
  {
    flag: "🇰🇼",
    country: "Kuwait",
    city: "Kuwait City",
    distance: "420 km · 4–4.5 hrs",
    tripType: "Weekend / Extended",
    highlights: ["Kuwait Towers", "Scientific Center & Aquarium", "Grand Mosque Kuwait", "The Avenues Mall", "Mubarakiya Market", "Sheikh Jaber Al-Ahmad Cultural Centre", "Failaka Island"],
    airports: "Kuwait International Airport (KWI)",
    href: "/routes/dammam-to-kuwait",
    color: "#007a3d",
  },
  {
    flag: "🇦🇪",
    country: "UAE — Dubai",
    city: "Dubai",
    distance: "950 km · 9–10 hrs",
    tripType: "Multi-Day Trip",
    highlights: ["Burj Khalifa & Dubai Mall", "Palm Jumeirah", "Dubai Creek & Gold Souk", "Dubai Frame", "Museum of the Future", "Dubai Miracle Garden", "Jumeirah Beach", "Global Village"],
    airports: "Dubai International Airport (DXB) · Dubai World Central (DWC)",
    href: "/routes/dammam-to-uae",
    color: "#00732f",
  },
  {
    flag: "🇦🇪",
    country: "UAE — Abu Dhabi",
    city: "Abu Dhabi",
    distance: "870 km · 8.5–9.5 hrs",
    tripType: "Multi-Day Trip",
    highlights: ["Sheikh Zayed Grand Mosque", "Yas Island (Ferrari World, Yas Waterworld)", "Louvre Abu Dhabi", "Qasr Al Hosn Fort", "Abu Dhabi Corniche", "Mangrove National Park", "ADNOC HQ", "Saadiyat Island"],
    airports: "Abu Dhabi International Airport (AUH)",
    href: "/routes/dammam-to-abu-dhabi",
    color: "#00732f",
  },
  {
    flag: "🇦🇪",
    country: "UAE — Sharjah",
    city: "Sharjah",
    distance: "980 km · 9.5–10.5 hrs",
    tripType: "Multi-Day Trip",
    highlights: ["Heritage Area (UNESCO)", "Al Noor Mosque", "Blue Souk (Central Market)", "Museum of Islamic Civilization", "Sharjah Aquarium", "Al Majaz Waterfront", "Sharjah Art Museum", "Mleiha Archaeological Site"],
    airports: "Sharjah International Airport (SHJ)",
    href: "/routes/dammam-to-sharjah",
    color: "#00732f",
  },
  {
    flag: "🇴🇲",
    country: "Oman",
    city: "Muscat",
    distance: "1,400 km · 14–16 hrs",
    tripType: "Extended Trip",
    highlights: ["Sultan Qaboos Grand Mosque", "Mutrah Souq", "Royal Opera House Muscat", "Muscat Corniche", "Bait Al Zubair Museum", "Al Jalali & Al Mirani Forts", "Muttrah Fish Market", "Qurum Beach"],
    airports: "Muscat International Airport (MCT)",
    href: "/routes/dammam-to-muscat",
    color: "#db161b",
  },
  {
    flag: "🕌",
    country: "Saudi Arabia",
    city: "Jeddah",
    distance: "1,260 km · 12–13 hrs",
    tripType: "Multi-Day Trip",
    highlights: ["Al-Balad Historic Jeddah (UNESCO)", "King Fahd Fountain (312 m)", "Jeddah Corniche (30 km)", "Floating Mosque (Al-Rahma)", "Al-Shallal Theme Park", "Jeddah Waterfront", "Balad Quarter Souqs"],
    airports: "King Abdulaziz International Airport (JED)",
    href: "/routes/dammam-to-jeddah",
    color: "#006c35",
  },
  {
    flag: "🕌",
    country: "Saudi Arabia",
    city: "Madinah Al-Munawwarah",
    distance: "1,100 km · 10–11 hrs",
    tripType: "Religious / Multi-Day",
    highlights: ["Al-Masjid an-Nabawi (Prophet's Mosque)", "Quba Mosque (first mosque in Islam)", "Masjid al-Qiblatayn", "Al-Baqi Cemetery", "Mount Uhud", "Dates Market (Al-Madinah Dates)", "Al-Anbariyya Mosque"],
    airports: "Prince Mohammad Bin Abdulaziz Airport (MED)",
    href: "/routes/dammam-to-madinah",
    color: "#006c35",
  },
];

export default function TouristDestinationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={styles.page}>
        <Navbar />

        {/* Hero */}
        <section style={styles.hero}>
          <div className="container" style={styles.heroCont}>
            <nav style={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" style={styles.breadLink}>Home</Link>
              <span style={styles.breadSep}>/</span>
              <span style={styles.breadCurrent}>Tourist Destinations</span>
            </nav>
            <span className="badge-gold">GCC Tourism Guide</span>
            <h1 style={styles.h1}>
              GCC Tourist Destinations from Dammam by Private Taxi
            </h1>
            <p style={styles.heroSub}>
              Day trips, weekend getaways, and multi-day journeys from Dammam (Eastern Province) to all major GCC tourist destinations — Bahrain, Doha, Kuwait, Dubai, Abu Dhabi, Sharjah, Muscat, Jeddah, and Madinah. Fixed rates · Luxury fleet · 24/7 service.
            </p>
            <div style={styles.statsRow}>
              <div style={styles.stat}><strong style={styles.statV}>9</strong><span style={styles.statL}>Destinations</span></div>
              <div style={styles.stat}><strong style={styles.statV}>5</strong><span style={styles.statL}>Countries</span></div>
              <div style={styles.stat}><strong style={styles.statV}>24/7</strong><span style={styles.statL}>Available</span></div>
              <div style={styles.stat}><strong style={styles.statV}>Fixed</strong><span style={styles.statL}>Rates</span></div>
            </div>
          </div>
        </section>

        {/* Quick filter tabs */}
        <div style={styles.filterBar}>
          <div className="container" style={styles.filterRow}>
            {[
              { label: "All", href: "#destinations" },
              { label: "Day Trips", href: "#bahrain" },
              { label: "Weekend", href: "#qatar" },
              { label: "UAE", href: "#uae" },
              { label: "Saudi", href: "#saudi" },
              { label: "Oman", href: "#oman" },
            ].map((f) => (
              <a key={f.label} href={f.href} style={styles.filterChip}>{f.label}</a>
            ))}
          </div>
        </div>

        <main id="destinations">
          <div className="container" style={{ padding: "4rem 0" }}>

            {/* Intro */}
            <section style={styles.introSection}>
              <h2 style={styles.h2}>Why Explore the GCC by Private Taxi from Dammam?</h2>
              <p style={styles.p}>
                Dammam's location in Saudi Arabia's Eastern Province makes it the perfect base for exploring the Gulf Cooperation Council. With the King Fahd Causeway to Bahrain just 85 km away, Doha only 5 hours by road, and Dubai accessible in a single day's drive, the GCC's most remarkable tourist destinations are all within reach of a comfortable private taxi — no airports, no baggage limits, no check-in queues.
              </p>
              <div style={styles.benefitGrid}>
                {[
                  { icon: "💰", title: "Fixed Transparent Rates", desc: "One price quoted upfront — no meters, no surge pricing, no surprise border fees." },
                  { icon: "✈️", title: "Flight Tracking at Origin", desc: "Arriving by air into Dammam? We track your flight and wait 60 minutes at no extra charge." },
                  { icon: "🛂", title: "Border-Crossing Experts", desc: "Our licensed drivers hold permits for Saudi, Bahrain, Kuwait, UAE, Qatar, and Oman crossings." },
                  { icon: "🚙", title: "Luxury Fleet", desc: "Toyota Camry, GMC Yukon, Hyundai Staria Van, and GMC Yukon Denali VIP class available." },
                ].map((b) => (
                  <div key={b.title} className="glass-card" style={styles.benefitCard}>
                    <span style={styles.benefitIcon}>{b.icon}</span>
                    <h3 style={styles.benefitTitle}>{b.title}</h3>
                    <p style={styles.benefitDesc}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Destination cards */}
            <section style={styles.destSection}>
              <h2 style={styles.h2}>All Destinations — Distance, Highlights & Booking</h2>
              <div style={styles.destGrid}>
                {destinations.map((d, idx) => (
                  <article key={idx} id={d.country.toLowerCase().split(" ")[0]} className="glass-card" style={styles.destCard}>
                    <div style={styles.destTop}>
                      <span style={styles.destFlag}>{d.flag}</span>
                      <div>
                        <h3 style={styles.destCountry}>{d.country}</h3>
                        <p style={styles.destCity}>{d.city}</p>
                      </div>
                      <span style={styles.tripBadge}>{d.tripType}</span>
                    </div>

                    <div style={styles.destMeta}>
                      <span style={styles.destDist}>📍 {d.distance}</span>
                      <span style={styles.destAirport}>✈️ {d.airports}</span>
                    </div>

                    <div style={styles.highlightSection}>
                      <p style={styles.highlightLabel}>Top Attractions</p>
                      <div style={styles.highlightTags}>
                        {d.highlights.map((h) => (
                          <span key={h} style={styles.tag}>{h}</span>
                        ))}
                      </div>
                    </div>

                    <Link href={d.href} className="btn btn-secondary" style={styles.destBtn}>
                      Book Taxi to {d.city} →
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Distance table */}
            <section style={styles.tableSection}>
              <h2 style={styles.h2}>Quick Reference — All Routes from Dammam</h2>
              <div style={styles.table}>
                <div style={styles.tableHead}>
                  <span>Destination</span>
                  <span>Distance</span>
                  <span>Drive Time</span>
                  <span>Trip Type</span>
                  <span>Book</span>
                </div>
                {[
                  { name: "Bahrain (Manama)", dist: "85 km", time: "1.5–2 hrs", type: "Day Trip", href: "/routes/dammam-to-bahrain" },
                  { name: "Doha, Qatar", dist: "400 km", time: "5–6 hrs", type: "Weekend", href: "/routes/dammam-to-doha" },
                  { name: "Kuwait City", dist: "420 km", time: "4–4.5 hrs", type: "Weekend", href: "/routes/dammam-to-kuwait" },
                  { name: "Abu Dhabi, UAE", dist: "870 km", time: "8.5–9.5 hrs", type: "Multi-Day", href: "/routes/dammam-to-abu-dhabi" },
                  { name: "Dubai, UAE", dist: "950 km", time: "9–10 hrs", type: "Multi-Day", href: "/routes/dammam-to-uae" },
                  { name: "Sharjah, UAE", dist: "980 km", time: "9.5–10.5 hrs", type: "Multi-Day", href: "/routes/dammam-to-sharjah" },
                  { name: "Madinah, Saudi Arabia", dist: "1,100 km", time: "10–11 hrs", type: "Religious", href: "/routes/dammam-to-madinah" },
                  { name: "Jeddah, Saudi Arabia", dist: "1,260 km", time: "12–13 hrs", type: "Multi-Day", href: "/routes/dammam-to-jeddah" },
                  { name: "Muscat, Oman", dist: "1,400 km", time: "14–16 hrs", type: "Extended", href: "/routes/dammam-to-muscat" },
                ].map((r, i) => (
                  <div key={i} style={styles.tableRow}>
                    <span style={{ color: "#fff", fontWeight: 600 }}>{r.name}</span>
                    <span>{r.dist}</span>
                    <span>{r.time}</span>
                    <span style={{ color: "var(--accent-gold)" }}>{r.type}</span>
                    <Link href={r.href} style={styles.tableLink}>Book →</Link>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section style={styles.faqSection}>
              <h2 style={styles.h2}>Frequently Asked Questions</h2>
              <div style={styles.faqList}>
                {[
                  { q: "What tourist destinations can I reach from Dammam by taxi?", a: "From Dammam you can reach Bahrain (1.5–2 hrs), Doha Qatar (5–6 hrs), Kuwait City (4–4.5 hrs), Dubai UAE (9–10 hrs), Abu Dhabi (8.5–9.5 hrs), Sharjah (9.5–10.5 hrs), Muscat Oman (14–16 hrs), Jeddah (12–13 hrs), and Madinah (10–11 hrs) all by private road transfer." },
                  { q: "Which GCC country is closest to Dammam for a day trip?", a: "Bahrain is the closest — just 85 km via the King Fahd Causeway (1.5–2 hrs). A same-day return trip to Bahrain is very practical. Souq Waqif in Doha (400 km, 5–6 hrs) is the next most popular option for day or overnight visits." },
                  { q: "Can I visit Dubai from Dammam by road?", a: "Yes. Dammam to Dubai is approximately 950 km (9–10 hrs) by road via the Al Batha-Ghuwaifat Saudi-UAE border. Our GMC Yukon Denali with Wi-Fi, USB charging, and scheduled meal stops makes the journey very comfortable." },
                  { q: "Do I need a visa for GCC countries from Saudi Arabia?", a: "Saudi citizens and GCC nationals travel with national ID cards. Saudi residents (expatriates) need a valid Exit/Re-Entry visa and the destination country's entry visa. Bahrain, UAE, and Qatar offer eVisa or visa-on-arrival for many nationalities. Check requirements before travel." },
                  { q: "Is it safe to travel by road between Dammam and GCC countries?", a: "Yes. Saudi Arabia's highway network is well-maintained and patrolled. Our licensed commercial vehicles pass regular safety inspections, and all drivers are trained for long-distance highway driving. GPS tracking is active on all trips for additional security." },
                ].map((faq, i) => (
                  <div key={i} style={styles.faqItem}>
                    <h3 style={styles.faqQ}>{faq.q}</h3>
                    <p style={styles.faqA}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>

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
  h1: { fontSize: "2.4rem", color: "#fff", fontWeight: "800", lineHeight: "1.2", maxWidth: "900px" },
  heroSub: { fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "750px", lineHeight: "1.7" },
  statsRow: { display: "flex", gap: "3rem", marginTop: "1rem", flexWrap: "wrap" },
  stat: { display: "flex", flexDirection: "column", gap: "0.2rem" },
  statV: { fontSize: "1.8rem", color: "var(--accent-gold)", fontWeight: "800" },
  statL: { fontSize: "0.78rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" },
  filterBar: { backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)", padding: "1rem 0" },
  filterRow: { display: "flex", gap: "0.6rem", flexWrap: "wrap" },
  filterChip: { backgroundColor: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.2)", color: "var(--accent-gold)", padding: "0.35rem 1rem", borderRadius: "20px", fontSize: "0.82rem", fontWeight: "600", textDecoration: "none" },
  introSection: { marginBottom: "4rem" },
  h2: { fontSize: "1.7rem", color: "#fff", fontWeight: "700", marginBottom: "1.2rem", borderBottom: "2px solid rgba(245,197,24,0.3)", paddingBottom: "0.6rem" },
  p: { fontSize: "0.97rem", color: "var(--text-secondary)", lineHeight: "1.75", marginBottom: "2rem" },
  benefitGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" },
  benefitCard: { padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" },
  benefitIcon: { fontSize: "1.8rem" },
  benefitTitle: { fontSize: "1rem", color: "#fff", fontWeight: "700" },
  benefitDesc: { fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.5" },
  destSection: { marginBottom: "4rem" },
  destGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" },
  destCard: { padding: "1.8rem", display: "flex", flexDirection: "column", gap: "1.2rem" },
  destTop: { display: "flex", alignItems: "flex-start", gap: "1rem" },
  destFlag: { fontSize: "2.2rem", flexShrink: 0 },
  destCountry: { fontSize: "1.1rem", color: "#fff", fontWeight: "700", margin: 0 },
  destCity: { fontSize: "0.82rem", color: "var(--text-muted)", margin: "0.2rem 0 0" },
  tripBadge: { marginLeft: "auto", backgroundColor: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.25)", color: "var(--accent-gold)", padding: "0.25rem 0.7rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "700", whiteSpace: "nowrap" },
  destMeta: { display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.82rem", color: "var(--text-secondary)" },
  destDist: { fontWeight: "600" },
  destAirport: { color: "var(--text-muted)" },
  highlightSection: { flex: 1 },
  highlightLabel: { fontSize: "0.72rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.6rem" },
  highlightTags: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  tag: { backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", color: "var(--text-secondary)", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" },
  destBtn: { textDecoration: "none", textAlign: "center" },
  tableSection: { marginBottom: "4rem" },
  table: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "6px", overflow: "hidden" },
  tableHead: { display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr 1fr 0.7fr", gap: "0.5rem", padding: "0.8rem 1.2rem", backgroundColor: "rgba(245,197,24,0.08)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" },
  tableRow: { display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr 1fr 0.7fr", gap: "0.5rem", padding: "0.8rem 1.2rem", borderTop: "1px solid var(--border-color)", fontSize: "0.88rem", color: "var(--text-secondary)", alignItems: "center" },
  tableLink: { color: "var(--accent-gold)", fontWeight: "700", textDecoration: "none", fontSize: "0.85rem" },
  faqSection: {},
  faqList: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  faqItem: { backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.4rem", borderRadius: "6px" },
  faqQ: { fontSize: "1rem", color: "#fff", marginBottom: "0.5rem", fontWeight: "700" },
  faqA: { fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" },
};

