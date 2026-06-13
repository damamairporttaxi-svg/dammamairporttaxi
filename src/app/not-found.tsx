import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | 404",
  description: "The page you are looking for could not be found. Return to Dammam Airport Taxi homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Gold accent number */}
        <div style={styles.errorCode}>404</div>

        <h1 style={styles.title}>Page Not Found</h1>
        <p style={styles.subtitle}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Quick links */}
        <div style={styles.linksGrid}>
          <Link href="/" style={styles.card}>
            <span style={styles.cardLabel}>Home</span>
          </Link>
          <Link href="/routes/dammam-to-bahrain" style={styles.card}>
            <span style={styles.cardLabel}>Dammam → Bahrain</span>
          </Link>
          <Link href="/routes/dammam-to-riyadh" style={styles.card}>
            <span style={styles.cardLabel}>Dammam → Riyadh</span>
          </Link>
          <Link href="/contact" style={styles.card}>
            <span style={styles.cardLabel}>Contact Us</span>
          </Link>
        </div>

        <Link href="/" className="btn btn-primary" style={styles.homeBtn}>
          Back to Homepage
        </Link>

        <a
          href="https://wa.me/966569487569"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={styles.waBtn}
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "var(--bg-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  container: {
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },
  errorCode: {
    fontSize: "8rem",
    fontWeight: "900",
    color: "var(--accent-gold)",
    lineHeight: "1",
    textShadow: "0 0 40px rgba(245, 197, 24, 0.3)",
  },
  title: {
    fontSize: "2rem",
    color: "#ffffff",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    lineHeight: "1.6",
  },
  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    width: "100%",
    marginTop: "0.5rem",
  },
  card: {
    backgroundColor: "rgba(20, 20, 20, 0.75)",
    border: "1px solid var(--border-color)",
    borderRadius: "8px",
    padding: "1.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    transition: "border-color 0.2s ease",
  },
  cardIcon: {
    fontSize: "1.8rem",
  },
  cardLabel: {
    fontSize: "0.85rem",
    color: "#ffffff",
    fontWeight: "600",
  },
  homeBtn: {
    textDecoration: "none",
    padding: "0.9rem 2.5rem",
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
  waBtn: {
    textDecoration: "none",
    padding: "0.9rem 2.5rem",
    fontSize: "1rem",
  },
};

