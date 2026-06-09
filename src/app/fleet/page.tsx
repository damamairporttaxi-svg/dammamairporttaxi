import type { Metadata } from "next";
import { FleetPageClient } from "@/components/FleetPageClient";

export const metadata: Metadata = {
  title: "Our Fleet | Sedan, SUV, Family Van & VIP Luxury Vehicles",
  description: "Explore our premium vehicle fleet — Toyota Camry Sedan, GMC Yukon VIP SUV, Hyundai Staria Family Van, and luxury VIP class for Dammam airport transfers and GCC routes.",
  alternates: {
    canonical: "https://www.dammamairporttaxi.com/fleet",
  },
  openGraph: {
    title: "Our Fleet | Dammam Airport Taxi",
    description: "Choose from Sedan, SUV, Family Van or VIP luxury class for your Dammam airport transfer or GCC cross-border trip.",
    url: "https://www.dammamairporttaxi.com/fleet",
    type: "website",
  },
};

export default function FleetPage() {
  return <FleetPageClient />;
}

