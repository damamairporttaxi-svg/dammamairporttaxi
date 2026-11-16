import type { Metadata } from "next";
import { ContactPageClient } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "WhatsApp & Phone Number — Book Taxi 24/7",
  description: "Dammam Airport Taxi WhatsApp & phone number +966 59 141 9157, open 24/7. Contact us via WhatsApp, phone, or email for private airport transfers and GCC cross-border taxi bookings. Instant quote & fast response.",
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


