import type { Metadata } from "next";
import { ContactPageClient } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Book by WhatsApp 24/7",
  description: "Contact Dammam Airport Taxi 24/7 via WhatsApp, phone, or email for premium airport transfers and GCC cross-border taxi bookings. Instant quote & fast response.",
  alternates: {
    canonical: "https://dammamairporttaxi.com/contact",
  },
  openGraph: {
    title: "Contact Dammam Airport Taxi | 24/7 Booking",
    description: "Book your Dammam airport taxi or GCC transfer via WhatsApp or our online form. 24/7 support.",
    url: "https://dammamairporttaxi.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}


