import Link from "next/link";
import type { Metadata } from "next";
import { routesData } from "@/data/routesData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const BASE = "https://dammamairporttaxi.com";

export const metadata: Metadata = {
  title: "Saudi–Bahrain Taxi Guide: Fares, Documents & Tips",
  description:
    "Taxi between Saudi Arabia and Bahrain via the King Fahd Causeway. Fixed fares from 300 SAR, both directions, from Dammam, Khobar, Dammam Airport and Bahrain Airport. 24/7 WhatsApp booking.",
  alternates: { canonical: `${BASE}/saudi-bahrain-taxi` },
  openGraph: {
    title: "Saudi–Bahrain Taxi Guide | Dammam Airport Taxi",
    description: "Fixed-fare private taxi across the King Fahd Causeway in both directions.",
    url: `${BASE}/saudi-bahrain-taxi`,
    type: "website",
  },
};

const FAQS = [
  { q: "How much is a taxi from Dammam to Bahrain?", a: "A private taxi from Dammam to Bahrain costs from 400 SAR for a Camry sedan (1–4 passengers), 550 SAR for a GMC Yukon SUV (1–6) and 700 SAR for a family van (1–8). King Fahd Causeway tolls are included in the confirmed fare." },
  { q: "How long does the trip from Dammam to Bahrain take?", a: "About 1.5 to 2 hours (roughly 85 km), depending on queues at the King Fahd Causeway border. Thursday evenings, Fridays and public holidays are the busiest." },
  { q: "Do you also drive from Bahrain to Saudi Arabia?", a: "Yes. We take passengers from Manama, Janabiya, Juffair, Seef or Bahrain International Airport (BAH) to Dammam, Khobar, Dhahran, Jubail, Qatif, Hofuf, Al Hassa and Dammam Airport (DMM). Fares are fixed per route." },
  { q: "What documents do I need to cross the King Fahd Causeway?", a: "Bring a valid passport (or GCC national ID for GCC citizens) and the entry documents required for your nationality. Saudi residents also need a valid Iqama and an exit/re-entry permit. Entry rules depend on nationality, so check the official government portals before you travel." },
  { q: "Is a taxi better than a bus or driving my own car?", a: "A private taxi is door-to-door, runs on your schedule and your driver handles the border formalities for the vehicle. A bus is cheaper but follows fixed stops and times. Driving your own car means arranging vehicle insurance and paperwork yourself." },
  { q: "Can I use Uber or Careem to go to Bahrain?", a: "Cross-border availability for ride-hailing apps varies and can change. If you want a confirmed price and a pre-booked driver, you can book a fixed-fare transfer with us on WhatsApp." },
  { q: "Can I book a same-day return or round trip?", a: "Yes. Tell us your outbound and return dates on WhatsApp. We can invoice the two legs separately and accept a part-payment up front." },
  { q: "Is the service available at night?", a: "Yes, 24/7, including nights, weekends and public holidays. Book ahead for peak causeway times." },
];

export default function SaudiBahrainTaxiPage() {
  const bahrainRoutes = routesData
    .filter((r) => r.slug.includes("bahrain"))
    .sort((a, b) => a.pricing.sedan - b.pricing.sedan);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Saudi–Bahrain Taxi Guide", item: `${BASE}/saudi-bahrain-taxi` },
    ],
  };

  const cell = { padding: "0.6rem 0.75rem", borderBottom: "1px solid var(--border, #e5e7eb)", textAlign: "left" } as const;
  const p = { lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" } as const;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="section-padding" style={{ backgroundColor: "var(--bg-primary)", flex: 1 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <h1 style={{ lineHeight: 1.25 }}>Saudi–Bahrain Taxi: Fares, Documents &amp; Tips</h1>
          <p style={{ ...p, fontSize: "1.1rem", fontWeight: 600 }}>
            A private taxi between Dammam and Bahrain costs from 400 SAR (sedan), takes 1.5–2 hours over the King Fahd Causeway and is available in both directions, 24/7. Fares from Khobar start at 300 SAR.
          </p>
          <p style={{ ...p, fontSize: "0.85rem" }}>Last updated: 2026-11-16</p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", margin: "1rem 0 2rem" }}>
            <a href="https://wa.me/966591419157" className="btn btn-whatsapp" style={{ textDecoration: "none" }}>WhatsApp: +966 59 141 9157</a>
            <Link href="/booking" className="btn btn-secondary" style={{ textDecoration: "none" }}>Book online</Link>
          </div>

          <h2>All Saudi–Bahrain fares</h2>
          <p style={p}>Fixed fares per vehicle (SAR). Passengers: sedan 1–4, SUV 1–6, van 1–8.</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr>
                  {["Route", "Distance", "Sedan", "SUV", "Van", "Luxury"].map((h) => (
                    <th key={h} style={{ ...cell, fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bahrainRoutes.map((r) => (
                  <tr key={r.slug}>
                    <td style={cell}><Link href={`/routes/${r.slug}`}>{r.name.en.replace(/ Taxi$/, "")}</Link></td>
                    <td style={cell}>{r.distance.en}</td>
                    <td style={cell}>{r.pricing.sedan}</td>
                    <td style={cell}>{r.pricing.suv}</td>
                    <td style={cell}>{r.pricing.van}</td>
                    <td style={cell}>{r.pricing.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginTop: "2.5rem" }}>Taxi, bus or your own car?</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr>{["", "Private taxi", "Bus", "Own car"].map((h) => <th key={h} style={{ ...cell, fontWeight: 700 }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                <tr><td style={cell}>Door-to-door</td><td style={cell}>Yes</td><td style={cell}>No, fixed stops</td><td style={cell}>Yes</td></tr>
                <tr><td style={cell}>Your schedule</td><td style={cell}>Yes, 24/7</td><td style={cell}>Fixed times</td><td style={cell}>Yes</td></tr>
                <tr><td style={cell}>Vehicle paperwork &amp; insurance</td><td style={cell}>Handled by driver</td><td style={cell}>Not needed</td><td style={cell}>You arrange it</td></tr>
                <tr><td style={cell}>Luggage &amp; families</td><td style={cell}>SUV or van available</td><td style={cell}>Carry your own bags</td><td style={cell}>Yes</td></tr>
                <tr><td style={cell}>Price</td><td style={cell}>Fixed per vehicle</td><td style={cell}>Lowest per person</td><td style={cell}>Fuel, insurance, tolls</td></tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ marginTop: "2.5rem" }}>Crossing the King Fahd Causeway</h2>
          <p style={p}>
            The King Fahd Causeway links Al Khobar in Saudi Arabia with Bahrain and has a Saudi exit checkpoint and a Bahraini entry checkpoint. Allow 15–40 minutes at the border on a normal day and more on Thursday evenings, Fridays, Saturdays and public holidays. Entry requirements depend on your nationality. Please check the official Bahrain and Saudi government portals before you travel. For the full border guide see our{" "}
            <Link href="/gcc-border-crossing">GCC border crossing guide</Link>. For the rule on taxis carrying passengers across the causeway, see{" "}
            <a href="https://gulfnews.com/world/gulf/bahrain/saudi-arabia-bahrain-allow-taxis-to-carry-passengers-across-king-fahd-causeway-1.500665250" rel="noopener noreferrer" target="_blank">Gulf News</a>.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>Frequently asked questions</h2>
          {FAQS.map((f) => (
            <div key={f.q} style={{ marginBottom: "1.25rem" }}>
              <h3 style={{ fontSize: "1.05rem" }}>{f.q}</h3>
              <p style={p}>{f.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
