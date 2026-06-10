import type { Metadata } from "next";
import { FAQsPageClient } from "@/components/FAQsPageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dammam Airport Taxi Bookings",
  description: "Get answers to common questions about Dammam Airport Taxi — pricing, GCC border crossings, vehicle types, flight tracking, and free cancellation policy.",
  alternates: {
    canonical: "https://dammamairporttaxi.com/faqs",
  },
  openGraph: {
    title: "FAQ | Dammam Airport Taxi",
    description: "Answers to frequently asked questions about our airport taxi and GCC border crossing services. Pricing, cancellations, fleet & more.",
    url: "https://dammamairporttaxi.com/faqs",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I meet my driver at Dammam Airport (DMM)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your driver will monitor your flight status in real-time. Once you land, they will wait for you outside the arrival gate terminal with a nameboard. We also send the driver's contact details via WhatsApp 2 hours before pickup.",
      },
    },
    {
      "@type": "Question",
      name: "Are toll gates and customs border fees included in the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pricing is transparent and flat-rate. For KSA routes, all highway tolls are included. For international cross-border routes (like Dammam to Bahrain via King Fahd Causeway), causeway bridge fees are included, but personal visa/entry fees must be paid by passengers directly.",
      },
    },
    {
      "@type": "Question",
      name: "How do we cross the border to Bahrain or Kuwait by taxi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our drivers are highly experienced with GCC border protocols. We hold all necessary commercial transport permits for Saudi and international border authorities. Your driver will guide you through the passport and custom control booths while you stay comfortably inside the air-conditioned vehicle.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my flight is delayed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer complimentary flight tracking on all airport pickup bookings. Your driver will adjust their arrival time automatically based on your actual landing status, with no extra waiting charges.",
      },
    },
    {
      "@type": "Question",
      name: "Can I modify or cancel my booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can modify or cancel your transfer free of charge up to 12 hours before your scheduled pickup. Contact us via WhatsApp to make quick changes.",
      },
    },
    {
      "@type": "Question",
      name: "What vehicles do you offer for family travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For families, we recommend our VIP GMC Yukon (up to 6 passengers with 5 bags) or our Hyundai Staria Family Van (up to 8 passengers with 7 bags). Both vehicles offer spacious cargo room and premium tri-zone climate controls.",
      },
    },
  ],
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQsPageClient />
    </>
  );
}


