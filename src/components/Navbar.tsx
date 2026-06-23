"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export const Navbar: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  const navLinks = [
    { href: "/", label: t("navHome") },
    { href: "/fleet", label: t("navFleet") },
    { href: "/routes", label: t("navRoutes") },
    { href: "/about", label: t("navAbout") },
    { href: "/blog", label: t("navBlog") },
    { href: "/faqs", label: t("navFaq") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <>
      {/* Top Banner */}
      <div style={styles.topBanner}>
        <div className="container" style={styles.topBannerContainer}>
          <span style={styles.bannerText}>
            {t("urgentCall")} <strong style={{ color: "#64748B" }}>+966 50 123 4567</strong>
          </span>
          <button onClick={toggleLanguage} style={styles.langToggleBtn}>
            {locale === "en" ? "العربية (AR)" : "English (EN)"}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <header style={styles.header}>
        <div className="container" style={styles.navContainer}>
          {/* Logo */}
          <Link href="/" style={styles.logoLink}>
            <div style={styles.logoBadge}>
              <span style={styles.logoIcon}>TAXI</span>
            </div>
            <div style={styles.logoTextContainer}>
              <span style={styles.logoTitle}>{t("logoTitle")}</span>
              <span style={styles.logoSub}>{t("logoSub")}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" style={styles.desktopNav}>
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} style={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-desktop-actions" style={styles.desktopActions}>
            <button onClick={toggleLanguage} className="btn" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", border: "1px solid #e5e7eb", color: "#000000", backgroundColor: "transparent" }}>
              {locale === "en" ? "العربية" : "English"}
            </button>
            <Link href="/#booking" className="btn" style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem", backgroundColor: "#ffffff", color: "#0C58D1", border: "2px solid #0C58D1", borderRadius: "8px", fontWeight: 700 }}>
              {t("bookNow")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="nav-mobile-btn"
            style={styles.mobileMenuBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div style={{
              ...styles.hamburgerBar,
              transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
            }} />
            <div style={{
              ...styles.hamburgerBar,
              opacity: mobileMenuOpen ? 0 : 1
            }} />
            <div style={{
              ...styles.hamburgerBar,
              transform: mobileMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none"
            }} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={styles.mobileNavDrawer}>
            {navLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href} 
                style={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ padding: "1.5rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link
                href="/#booking"
                className="btn"
                style={{ width: "100%", backgroundColor: "#ffffff", color: "#0C58D1", border: "2px solid #ffffff", borderRadius: "8px", fontWeight: 700 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("bookNow")}
              </Link>
              <button 
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }} 
                style={styles.mobileLangBtn}
              >
                {locale === "en" ? "Switch to العربية" : "تغيير إلى English"}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  topBanner: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: "0.5rem 0",
    fontSize: "0.85rem",
  },
  topBannerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  bannerText: {
    color: "#000000",
  },
  langToggleBtn: {
    background: "transparent",
    border: "1px solid #e5e7eb",
    color: "#000000",
    padding: "0.2rem 0.6rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.75rem",
    fontWeight: "600",
    transition: "all var(--transition-fast)",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid #e5e7eb",
    padding: "0.9rem 0",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  logoBadge: {
    backgroundColor: "#0C58D1",
    color: "#ffffff",
    padding: "0.4rem 0.6rem",
    borderRadius: "6px",
    fontWeight: 800,
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
  },
  logoIcon: {
    display: "block",
  },
  logoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  logoTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#000000",
    letterSpacing: "-0.01em",
  },
  logoSub: {
    fontSize: "0.7rem",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginTop: "-2px",
  },
  desktopNav: {
    display: "flex",
    gap: "1.8rem",
    alignItems: "center",
  },
  navLink: {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#333333",
    transition: "color var(--transition-fast)",
  },
  desktopActions: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  mobileMenuBtn: {
    display: "none",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "24px",
    height: "18px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  hamburgerBar: {
    width: "100%",
    height: "2px",
    backgroundColor: "#000000",
    transition: "all var(--transition-fast)",
  },
  mobileNavDrawer: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
  },
  mobileNavLink: {
    fontSize: "1rem",
    fontWeight: 500,
    padding: "0.6rem 0",
    borderBottom: "1px solid #e5e7eb",
    color: "#000000",
  },
  mobileLangBtn: {
    background: "transparent",
    border: "1px solid #0C58D1",
    color: "#0C58D1",
    padding: "0.6rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    textAlign: "center",
  },
};

// Add responsive media query handlers in stylesheet rather than JS, but we can do a trick or let global.css handle layout show/hide.
// Let's add a style to global.css to toggle desktopNav vs mobileMenuBtn. Let's inspect CSS to see if it needs updates.
// Yes, we will append media queries for desktopNav / mobileMenuBtn in global.css or add standard inline media styles in js. Let's make sure it handles it perfectly by writing media query styles in global.css.

