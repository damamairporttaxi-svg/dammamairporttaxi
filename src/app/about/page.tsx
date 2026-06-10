import type { Metadata } from "next";
import { AboutPageClient } from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Decade of Premium GCC Airport Transfer Excellence",
  description: "Learn about Dammam Airport Taxi — Eastern Province's premier chauffeur service for airport transfers and GCC cross-border trips to Bahrain, Kuwait, UAE & Riyadh.",
  alternates: {
    canonical: "https://dammamairporttaxi.com/about",
  },
  openGraph: {
    title: "About Dammam Airport Taxi | Premier GCC Transfer Service",
    description: "Eastern Province's premier airport transfer & GCC cross-border taxi service. Professional chauffeurs, fixed rates, 24/7.",
    url: "https://dammamairporttaxi.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}


