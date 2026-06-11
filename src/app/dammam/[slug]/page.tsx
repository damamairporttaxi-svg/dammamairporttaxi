import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationPages, getLocationBySlug } from "@/data/locationData";
import { LocationPageClient } from "@/components/LocationPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locationPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle.en,
    description: page.metaDescription.en,
    alternates: {
      canonical: `https://www.dammamairporttaxi.com/dammam/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle.en,
      description: page.metaDescription.en,
      url: `https://www.dammamairporttaxi.com/dammam/${page.slug}`,
      type: "website",
    },
  };
}

export default async function DammamLocationPage({ params }: Props) {
  const { slug } = await params;
  const page = getLocationBySlug(slug);
  if (!page) notFound();
  return <LocationPageClient page={page} />;
}
