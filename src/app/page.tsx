import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Dammam Airport Taxi | Premium GCC Transfer & Chauffeur Services",
  description: "Book premium airport taxis & GCC border crossing transfers from Dammam King Fahd International Airport (DMM) to Bahrain, Kuwait, UAE, Riyadh, Khobar, Jubail. 24/7 VIP Chauffeur.",
  alternates: {
    canonical: "https://www.dammamairporttaxi.com",
  },
  openGraph: {
    title: "Dammam Airport Taxi | Premium GCC Transfer & Chauffeur Services",
    description: "Book premium airport taxis from Dammam Airport to Bahrain, Kuwait, UAE, Riyadh & more. Fixed rates. 24/7.",
    url: "https://www.dammamairporttaxi.com",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}

