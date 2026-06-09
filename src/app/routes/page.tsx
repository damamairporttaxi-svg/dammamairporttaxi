import type { Metadata } from "next";
import { PopularRoutesPageClient } from "@/components/PopularRoutesPageClient";

export const metadata: Metadata = {
  title: "Popular Routes | Dammam Airport Taxi – GCC, Saudi & Airport Transfers",
  description:
    "Browse all taxi routes from Dammam — international GCC trips to Bahrain, Kuwait, UAE, Doha & Muscat; domestic Saudi city routes; and airport transfer services from King Fahd International Airport.",
  alternates: {
    canonical: "https://www.dammamairporttaxi.com/routes",
  },
  openGraph: {
    title: "Popular Routes | Dammam Airport Taxi",
    description:
      "View fixed-rate taxi routes from Dammam to Bahrain, Kuwait, UAE, Riyadh, Jeddah, and more.",
    url: "https://www.dammamairporttaxi.com/routes",
    type: "website",
  },
};

export default function RoutesPage() {
  return <PopularRoutesPageClient />;
}

