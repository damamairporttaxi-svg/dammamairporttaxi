import type { Metadata } from "next";
import { VoiceSearchFaqsClient } from "@/components/VoiceSearchFaqsClient";

export const metadata: Metadata = {
  title: "Dammam Airport Taxi FAQ | How Much, How Far, How to Book — Voice Search Answers",
  description:
    "Instant answers to the most common questions about Dammam Airport taxi: fares, distances, Uber availability, booking process, child seats, GCC border crossings & more.",
  alternates: {
    canonical: "https://www.dammamairporttaxi.com/voice-search-faqs",
  },
  openGraph: {
    title: "Dammam Airport Taxi — Complete FAQ & Voice Search Answers",
    description:
      "Answers to every taxi question for Dammam Airport — fares to Khobar, Jubail, Bahrain, Riyadh and more.",
    url: "https://www.dammamairporttaxi.com/voice-search-faqs",
    type: "website",
  },
};

export default function VoiceSearchFaqsPage() {
  return <VoiceSearchFaqsClient />;
}
