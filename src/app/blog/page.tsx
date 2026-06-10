import type { Metadata } from "next";
import { BlogPageClient } from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Travel Blog | GCC Travel Guides & Airport Tips",
  description: "Read expert travel guides, airport tips, and GCC border crossing advice from Dammam Airport Taxi — your trusted cross-border chauffeur service in the Eastern Province.",
  alternates: {
    canonical: "https://dammamairporttaxi.com/blog",
  },
  openGraph: {
    title: "Travel Blog | Dammam Airport Taxi – GCC Travel Guides",
    description: "Expert GCC travel guides, King Fahd Causeway tips, airport advice, and intercity taxi insights from Dammam Airport Taxi.",
    url: "https://dammamairporttaxi.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}


