"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const routeLinks = [
    { href: "/routes/dammam-to-bahrain", label: "Dammam to Bahrain Taxi" },
    { href: "/routes/dammam-to-kuwait", label: "Dammam to Kuwait Taxi" },
    { href: "/routes/dammam-to-uae", label: "Dammam to UAE Taxi" },
    { href: "/routes/dammam-to-riyadh", label: "Dammam to Riyadh Taxi" },
    { href: "/routes/dammam-airport-to-khobar", label: "Dammam Airport to Khobar" },
    { href: "/routes/dammam-airport-to-jubail", label: "Dammam Airport to Jubail" },
    { href: "/routes/dammam-airport-to-dhahran", label: "Dammam Airport to Dhahran" },
    { href: "/routes/dammam-airport-to-hofuf", label: "Dammam Airport to Hofuf" },
    { href: "/routes/dammam-airport-to-qatar-border", label: "Dammam Airport to Qatar Border" },
  ];

  const quickLinks = [
    { href: "/", label: t("navHome") },
    { href: "/fleet", label: t("navFleet") },
    { href: "/about", label: t("navAbout") },
    { href: "/blog", label: t("navBlog") },
    { href: "/faqs", label: t("navFaq") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <footer style={styles.footer}>
      <div className="container footer-grid" style={styles.containerGrid}>
        {/* Col 1: About Company */}
        <div style={styles.column}>
          <div style={styles.logoContainer}>
            <div style={styles.logoBadge}>TAXI</div>
            <span style={styles.logoTitle}>{t("logoTitle")}</span>
          </div>
          <p style={styles.aboutText}>
            {t("heroSub")}
          </p>
          <div style={styles.contactDetails}>
            <p style={styles.contactItem}>
              <strong style={{ color: "#60A5FA" }}>{t("addressLabel")}:</strong><br />
              {t("addressVal")}
            </p>
            <p style={styles.contactItem}>
              <strong style={{ color: "#60A5FA" }}>{t("phoneLabel")}:</strong><br />
              <Link href="tel:+966501234567" style={styles.link}>{t("phoneVal")}</Link>
            </p>
            <p style={styles.contactItem}>
              <strong style={{ color: "#60A5FA" }}>{t("emailLabel")}:</strong><br />
              <Link href="mailto:info@dammamairporttaxi.com" style={styles.link}>{t("emailVal")}</Link>
            </p>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.colTitle}>{t("navHome")} & Info</h3>
          <ul style={styles.linkList}>
            {quickLinks.map((link, idx) => (
              <li key={idx} style={styles.linkItem}>
                <Link href={link.href} style={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Popular Routes */}
        <div style={styles.column}>
          <h3 style={styles.colTitle}>{t("navRoutes")}</h3>
          <ul style={styles.linkList}>
            {routeLinks.map((link, idx) => (
              <li key={idx} style={styles.linkItem}>
                <Link href={link.href} style={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={styles.bottomBar}>
        <div className="container" style={styles.bottomContainer}>
          <span style={styles.copyright}>
            © {currentYear} {t("logoTitle")}. {t("allRightsReserved")}
          </span>
          <div style={styles.bottomLinks}>
            <Link href="/privacy-policy" style={styles.bottomLink}>{t("privacyTitle")}</Link>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>|</span>
            <Link href="/terms" style={styles.bottomLink}>{t("termsTitle")}</Link>
          </div>
        </div>
        <div className="container" style={{ marginTop: "1rem" }}>
          <p style={styles.disclaimerText}>
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: "#0C58D1",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "5rem 0 2rem 0",
    marginTop: "auto",
  },
  containerGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "3rem",
    marginBottom: "4rem",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  logoBadge: {
    backgroundColor: "#ffffff",
    color: "#0C58D1",
    padding: "0.3rem 0.6rem",
    borderRadius: "6px",
    fontWeight: 800,
    fontSize: "0.75rem",
  },
  logoTitle: {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#ffffff",
  },
  aboutText: {
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.85)",
    maxWidth: "400px",
  },
  contactDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    fontSize: "0.9rem",
  },
  contactItem: {
    color: "rgba(255,255,255,0.85)",
  },
  colTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#ffffff",
    borderBottom: "2px solid rgba(37,99,235,0.40)",
    paddingBottom: "0.5rem",
    marginBottom: "0.5rem",
  },
  linkList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
  linkItem: {
    fontSize: "0.9rem",
  },
  link: {
    color: "rgba(255,255,255,0.85)",
    transition: "color var(--transition-fast)",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "2rem",
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  copyright: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.85rem",
  },
  bottomLinks: {
    display: "flex",
    gap: "0.8rem",
    fontSize: "0.85rem",
  },
  bottomLink: {
    color: "rgba(255,255,255,0.85)",
  },
  disclaimerText: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.6)",
    textAlign: "center",
  },
};

// Add responsive rules for grids in globals.css as well!
// Specifically: @media (max-width: 768px) { footer .containerGrid { grid-template-columns: 1fr !important; } }

