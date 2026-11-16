"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "../data/blogPosts";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function BlogPageClient() {
  const { locale } = useLanguage();

  const posts = blogPosts;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Header */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <span className="badge-gold">BLOG</span>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Travel News & Guides" : "أخبار وإرشادات السفر"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en"
              ? "Expert advice, guides, and tips for regional travel across Saudi Arabia and the GCC."
              : "نصائح وإرشادات وخبراء سفر للمنطقة الشرقية والمملكة العربية السعودية والخليج."}
          </p>
        </div>
      </section>

      {/* Blog Grid Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          <div style={styles.blogGrid}>
            {posts.map((post) => {
              const title = locale === "en" ? post.title.en : post.title.ar;
              const cat = locale === "en" ? post.category.en : post.category.ar;
              const excerpt = locale === "en" ? post.excerpt.en : post.excerpt.ar;

              return (
                <article key={post.id} className="glass-card" style={styles.blogCard}>
                  <div style={styles.cardHeader}>
                    <span style={styles.cardCategory}>{cat}</span>
                    <time dateTime={post.date} style={styles.cardDate}>{post.date}</time>
                  </div>
                  <h2 style={styles.cardTitle}>{title}</h2>
                  <p style={styles.cardExcerpt}>{excerpt}</p>

                  <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ ...styles.readBtn, textDecoration: "none", display: "inline-block", textAlign: "center" }}>
                    {locale === "en" ? "Read Full Article" : "اقرأ المقال كاملاً"}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}

      <StickyCTA />
      <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "#ffffff",
    padding: "5rem 0 4rem",
    borderBottom: "1px solid #e5e7eb",
    textAlign: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  heroTitle: {
    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
    color: "#000000",
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "#64748B",
    maxWidth: "550px",
    lineHeight: 1.7,
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "1.5rem",
  },
  blogCard: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    background: "#ffffff",
    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "1rem",
    fontSize: "0.78rem",
  },
  cardCategory: {
    color: "#0C58D1",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    background: "rgba(12,88,209,0.08)",
    padding: "0.2rem 0.65rem",
    borderRadius: "20px",
  },
  cardDate: {
    color: "#64748B",
  },
  cardTitle: {
    fontSize: "1.1rem",
    color: "#000000",
    marginBottom: "0.8rem",
    lineHeight: 1.4,
    fontWeight: 700,
  },
  cardExcerpt: {
    fontSize: "0.87rem",
    color: "#333333",
    lineHeight: 1.65,
    marginBottom: "1.5rem",
    flex: 1,
  },
  readBtn: {
    width: "100%",
    marginTop: "auto",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "1.5rem",
  },
  modalContent: {
    maxWidth: "700px",
    width: "100%",
    maxHeight: "85vh",
    overflowY: "auto",
    padding: "2.5rem",
    border: "1px solid #0C58D1",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "var(--text-secondary)",
    fontSize: "2rem",
    cursor: "pointer",
    lineHeight: "1",
    transition: "color var(--transition-fast)",
  },
  modalTitle: {
    fontSize: "1.6rem",
    color: "var(--text-primary)",
    lineHeight: "1.3",
    marginBottom: "0.5rem",
  },
  modalDate: {
    display: "block",
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    marginBottom: "2rem",
  },
  modalBody: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    borderTop: "1px solid var(--border-color)",
    borderBottom: "1px solid var(--border-color)",
    padding: "1.5rem 0",
  },
  modalParagraph: {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    color: "var(--text-secondary)",
  },
};

