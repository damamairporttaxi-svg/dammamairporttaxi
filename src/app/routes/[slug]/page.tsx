import React from "react";
import { notFound } from "next/navigation";
import { routesData } from "@/data/routesData";
import { RoutePageClient } from "@/components/RoutePageClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return routesData.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = routesData.find((r) => r.slug === slug);

  if (!route) {
    return {
      title: "Route Not Found",
      description: "The requested taxi route details could not be found.",
    };
  }

  return {
    title: route.metaTitle.en,
    description: route.metaDescription.en,
    alternates: {
      canonical: `https://www.dammamairporttaxi.com/routes/${slug}`,
    },
    openGraph: {
      title: route.metaTitle.en,
      description: route.metaDescription.en,
      url: `https://www.dammamairporttaxi.com/routes/${slug}`,
      type: "website",
    },
  };
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = routesData.find((r) => r.slug === slug);

  if (!route) {
    notFound();
  }

  const fromArea = route.name.en.split(" to ")[0]?.replace(/ (Airport|Taxi)$/g, "").trim();
  const toArea = route.name.en.split(" to ")[1]?.replace(/ (Airport|Taxi|Border)$/g, "").trim();

  /* ── TaxiService schema ─────────────────── */
  const routeSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: route.metaTitle.en,
    description: route.metaDescription.en,
    url: `https://www.dammamairporttaxi.com/routes/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Dammam Airport Taxi",
      telephone: "+966501234567",
      url: "https://www.dammamairporttaxi.com",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: fromArea },
      { "@type": "AdministrativeArea", name: toArea },
    ],
    offers: {
      "@type": "Offer",
      price: route.pricing.sedan,
      priceCurrency: "SAR",
      description: `${route.name.en} starting from ${route.pricing.sedan} SAR`,
    },
  };

  /* ── FAQPage schema — built from routesData ─ */
  const faqSchema = route.faqs.en.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: route.faqs.en.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  /* ── BreadcrumbList schema ──────────────── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dammamairporttaxi.com" },
      { "@type": "ListItem", position: 2, name: "Routes", item: "https://www.dammamairporttaxi.com/#routes" },
      { "@type": "ListItem", position: 3, name: route.name.en, item: `https://www.dammamairporttaxi.com/routes/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <RoutePageClient slug={slug} />
    </>
  );
}
