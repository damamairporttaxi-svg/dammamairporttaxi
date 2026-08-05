"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { relatedPagesMap, RelatedPage } from "../data/topicalMap";

interface RelatedRoutesProps {
  currentUrl?: string;
  items?: RelatedPage[];
  title?: { en: string; ar: string };
}

export function RelatedRoutes({ currentUrl, items, title }: RelatedRoutesProps) {
  const { locale } = useLanguage();
  const pathname = usePathname();

  const url = currentUrl ?? pathname;
  const pages = items ?? relatedPagesMap[url] ?? [];

  if (pages.length === 0) return null;

  const heading = title
    ? (locale === "en" ? title.en : title.ar)
    : (locale === "en" ? "Related Services & Guides" : "????? ????? ??? ???");

  return (
    <section style={styles.wrapper}>
      <div className="container">
        <h2 style={styles.heading}>{heading}</h2>
        <div style={styles.grid}>
          {pages.map((page, idx) => (
            <Link key={idx} href={page.url} style={styles.card}>
              <div style={styles.cardBody}>
                <span style={styles.cardTitle}>
                  {locale === "en" ? page.title.en : page.title.ar}
                </span>
                <span style={styles.cardDesc}>
                  {locale === "en" ? page.description.en : page.description.ar}
                </span>
              </div>
              <span style={styles.arrow}>?</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    backgroundColor: "var(--bg-secondary)",
    borderTop: "1px solid var(--border-color)",
    padding: "4rem 0",
  },
  heading: {
    fontSize: "1.4rem",
    color: "#0C58D1",
    marginBottom: "2rem",
    fontWeight: "700",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1rem",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "1.2rem 1.4rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    textDecoration: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    flex: 1,
  },
  cardTitle: {
    fontSize: "0.95rem",
    color: "#000000",
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: "0.78rem",
    color: "#333333",
    lineHeight: "1.4",
  },
  arrow: {
    color: "#0C58D1",
    fontSize: "1.1rem",
    flexShrink: 0,
  },
};

