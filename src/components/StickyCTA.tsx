"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const StickyCTA: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const phoneNumber = "+966501234567";
  const whatsappUrl = `https://wa.me/966569487569?text=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20taxi%20booking.`;

  return (
    <div style={{
      ...styles.floatingContainer,
      left: isRtl ? "20px" : "auto",
      right: isRtl ? "auto" : "20px",
    }}>
      {/* Phone CTA */}
      <a 
        href={`tel:${phoneNumber}`} 
        style={styles.ctaButtonPhone}
        aria-label="Call Us"
        title={t("callUs")}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span style={styles.ctaText}>{t("callUs")}</span>
      </a>

      {/* WhatsApp CTA */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.ctaButtonWhatsapp}
        aria-label="WhatsApp Us"
        title={t("whatsAppUs")}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span style={styles.ctaText}>{t("whatsAppUs")}</span>
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
  ctaButtonPhone: {
    backgroundColor: "var(--accent-gold)",
    color: "#000000",
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
  ctaText: {
    display: "inline-block",
  },
};

