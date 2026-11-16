import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routesData } from "@/data/routesData";
import { RoutePageClient } from "@/components/RoutePageClient";
import { LanguageProvider } from "@/context/LanguageContext";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE = "https://dammamairporttaxi.com";

export async function generateStaticParams() {
  return routesData.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = routesData.find((r) => r.slug === slug);
  if (!route) return { title: "الوجهة غير موجودة" };
  const title = route.metaTitle.ar.split(" | ")[0];
  return {
    title,
    description: route.metaDescription.ar,
    alternates: {
      canonical: `${BASE}/ar/routes/${slug}`,
      languages: {
        en: `${BASE}/routes/${slug}`,
        ar: `${BASE}/ar/routes/${slug}`,
        "x-default": `${BASE}/routes/${slug}`,
      },
    },
    openGraph: { title, description: route.metaDescription.ar, url: `${BASE}/ar/routes/${slug}`, type: "website", locale: "ar_SA" },
  };
}

export default async function ArabicRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = routesData.find((r) => r.slug === slug);
  if (!route) notFound();

  const faqSchema = route.faqs.ar.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "ar",
        mainEntity: route.faqs.ar.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <LanguageProvider forcedLocale="ar">
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div lang="ar" dir="rtl">
        <RoutePageClient slug={slug} />
      </div>
    </LanguageProvider>
  );
}
