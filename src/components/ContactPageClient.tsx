"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function ContactPageClient() {
  const { t, locale, isRtl } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert(locale === "en" ? "Please fill in all fields" : "يرجى ملء جميع الحقول");
      return;
    }
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Header */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <span className="badge-gold">{t("navContact")}</span>
          <h1 style={styles.heroTitle}>{t("contactTitle")}</h1>
          <p style={styles.heroSub}>{t("contactSub")}</p>
        </div>
      </section>

      {/* Contact Main Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container contact-grid" style={styles.contactGrid}>
          {/* Contact Details Card */}
          <div className="glass-card" style={styles.infoCard}>
            <h2 style={styles.cardTitle}>{t("contactInfo")}</h2>

            <div style={styles.detailsGroup}>
              <div style={styles.detailItem}>
                <span style={styles.detailIcon}></span>
                <div style={styles.detailText}>
                  <strong style={styles.detailLabel}>{t("addressLabel")}</strong>
                  <p style={styles.detailVal}>{t("addressVal")}</p>
                </div>
              </div>

              <div style={styles.detailItem}>
                <span style={styles.detailIcon}></span>
                <div style={styles.detailText}>
                  <strong style={styles.detailLabel}>{t("phoneLabel")}</strong>
                  <p style={styles.detailVal}>{t("phoneVal")}</p>
                </div>
              </div>

              <div style={styles.detailItem}>
                <span style={styles.detailIcon}></span>
                <div style={styles.detailText}>
                  <strong style={styles.detailLabel}>{t("emailLabel")}</strong>
                  <p style={styles.detailVal}>{t("emailVal")}</p>
                </div>
              </div>

              <div style={styles.detailItem}>
                <span style={styles.detailIcon}></span>
                <div style={styles.detailText}>
                  <strong style={styles.detailLabel}>{locale === "en" ? "Business Hours" : "ساعات العمل"}</strong>
                  <p style={styles.detailVal}>{locale === "en" ? "24/7 / 365 Days" : "على مدار الساعة ٢٤/٧ طوال العام"}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div style={styles.whatsappCallout}>
              <h3 style={{ color: "#0C58D1", marginBottom: "0.5rem" }}>
                {locale === "en" ? "Need Immediate Assistance?" : "هل تحتاج مساعدة عاجلة؟"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                {locale === "en"
                  ? "Chat with our operations manager directly on WhatsApp for instant quote negotiations."
                  : "تحدث مع مدير العمليات مباشرة عبر الواتساب للتفاوض الفوري على الأسعار."}
              </p>
              <a
                href="https://wa.me/966569487569"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", textDecoration: "none" }}
              >
                {t("whatsAppUs")}
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="glass-card" style={styles.formCard}>
            <h2 style={styles.cardTitle}>
              {locale === "en" ? "Send Us a Message" : "أرسل لنا رسالة مباشرة"}
            </h2>

            {submitted ? (
              <div style={styles.successBlock}>
                <span style={styles.successIcon}>✓</span>
                <p style={styles.successText}>{t("msgSuccess")}</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  {locale === "en" ? "Send another message" : "أرسل رسالة أخرى"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.field}>
                  <label style={styles.label}>{t("nameLabel")} <span style={{ color: "var(--error)" }}>*</span></label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("passengerNamePl")}
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>{t("emailFieldLabel")} <span style={{ color: "var(--error)" }}>*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>{t("msgLabel")} <span style={{ color: "var(--error)" }}>*</span></label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={locale === "en" ? "Enter your query details..." : "أدخل تفاصيل استفسارك..."}
                    style={styles.textarea}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
                  {t("sendMsg")}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="container" style={{ marginTop: "4rem" }}>
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114490.52843444458!2d50.1197779!3d26.2778749!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49faf2ef0b77b1%3A0xe54dbe5c2763f0bb!2sKing%20Fahd%20International%20Airport!5e0!3m2!1sen!2ssa!4v1716500000009!5m2!1sen!2ssa"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "6px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="King Fahd International Airport Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <StickyCTA />
      <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, #f8fafc 0%, #EFF6FF 100%)",
    padding: "5rem 0 4rem",
    borderBottom: "1px solid #e5e7eb",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  heroTitle: {
    fontSize: "2.5rem",
    color: "#000000",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "#333333",
    maxWidth: "600px",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "3rem",
  },
  infoCard: {
    padding: "2.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "var(--text-primary)",
    borderBottom: "2px solid var(--border-color-light)",
    paddingBottom: "0.5rem",
  },
  detailsGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  detailItem: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
  },
  detailIcon: {
    fontSize: "1.5rem",
  },
  detailText: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  detailLabel: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    textTransform: "uppercase",
  },
  detailVal: {
    fontSize: "1rem",
    color: "var(--text-primary)",
  },
  whatsappCallout: {
    backgroundColor: "rgba(37, 211, 102, 0.05)",
    border: "1px dashed #25d366",
    borderRadius: "6px",
    padding: "1.5rem",
    marginTop: "auto",
  },
  formCard: {
    padding: "2.5rem 2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.85rem",
    color: "var(--text-primary)",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    color: "#000000",
    padding: "0.8rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
  textarea: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    color: "#000000",
    padding: "0.8rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    minHeight: "150px",
    resize: "vertical",
    fontFamily: "inherit",
  },
  submitBtn: {
    width: "100%",
    padding: "1rem",
  },
  successBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "4rem 0",
    textAlign: "center",
  },
  successIcon: {
    fontSize: "3rem",
    color: "var(--success)",
    border: "2px solid var(--success)",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  successText: {
    fontSize: "1.1rem",
    color: "var(--text-primary)",
    maxWidth: "350px",
  },
};

