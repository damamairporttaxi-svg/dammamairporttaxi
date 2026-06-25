import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Dammam Airport Taxi — Private Transfers to Bahrain, Kuwait, UAE, Riyadh | King Fahd Airport DMM",
  description: "Book private airport taxi from King Fahd International Airport (DMM) Dammam. Fixed-fare transfers to Bahrain (350 SAR), Kuwait, UAE, Riyadh. 24/7, free 60-min wait, flight tracking. WhatsApp booking.",
  keywords: [
    "dammam airport taxi",
    "king fahd international airport taxi",
    "DMM airport transfer",
    "dammam to bahrain taxi",
    "dammam to bahrain price",
    "dammam to kuwait taxi",
    "dammam to UAE taxi",
    "dammam to riyadh taxi",
    "airport taxi saudi arabia",
    "gcc border crossing taxi",
    "private transfer dammam",
    "dammam chauffeur service",
    "al khobar airport taxi",
    "dhahran airport transfer",
    "jubail taxi service",
    "dammam to manama taxi",
    "king fahd causeway taxi",
    "eastern province taxi",
    "24/7 airport pickup dammam",
    "fixed fare dammam taxi",
    "flight tracking taxi dammam",
    "vip transfer dammam",
  ],
  alternates: {
    canonical: "https://dammamairporttaxi.com",
  },
  openGraph: {
    title: "Dammam Airport Taxi — Private Transfers to Bahrain, Kuwait, UAE, Riyadh | King Fahd Airport DMM",
    description: "Book private airport taxi from King Fahd International Airport (DMM) Dammam. Fixed-fare transfers to Bahrain (350 SAR), Kuwait, UAE, Riyadh. 24/7, free 60-min wait, flight tracking. WhatsApp booking.",
    url: "https://dammamairporttaxi.com",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}


