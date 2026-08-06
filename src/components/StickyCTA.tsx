"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const StickyCTA: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const saudiWhatsappUrl = `https://wa.me/966560273828?text=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20taxi%20booking.`;
  const bahrainWhatsappUrl = `https://wa.me/97334427708?text=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20taxi%20booking.`;

  return (
    <div style={{
      ...styles.floatingContainer,
      left: isRtl ? "20px" : "auto",
      right: isRtl ? "auto" : "20px",
    }}>
      {/* Saudi WhatsApp */}
      <a
        href={saudiWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.ctaButtonWhatsapp}
        aria-label="WhatsApp Saudi Arabia"
        title="WhatsApp KSA"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span style={styles.ctaText}>KSA {t("whatsAppUs")}</span>
      </a>
      {/* Bahrain WhatsApp */}
      <a
        href={bahrainWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.ctaButtonWhatsappBh}
        aria-label="WhatsApp Bahrain"
        title="WhatsApp Bahrain"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span style={styles.ctaText}>Bahrain {t("whatsAppUs")}</span>
      </a>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  floatingContainer: {
    position: "fixed",
    bottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 999,
    alignItems: "center",
  },
  ctaButtonWhatsapp: {
    backgroundColor: "#25d366",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "30px",
    fontSize: "0.85rem",
    fontWeight: "700",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
    transition: "all var(--transition-fast)",
  },
  ctaButtonWhatsappBh: {
    backgroundColor: "#128C7E",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "30px",
    fontSize: "0.85rem",
    fontWeight: "700",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
    transition: "all var(--transition-fast)",
  },
  ctaText: {
    display: "inline-block",
  },
};
