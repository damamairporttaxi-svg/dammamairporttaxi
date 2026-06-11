"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { routesData } from "../data/routesData";

export const BookingForm: React.FC = () => {
  const { t, locale, isRtl } = useLanguage();

  // Form State
  const [serviceType, setServiceType] = useState("airport");
  const [selectedRouteSlug, setSelectedRouteSlug] = useState("dammam-to-bahrain");
  const [pickupLoc, setPickupLoc] = useState("");
  const [dropoffLoc, setDropoffLoc] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [luggage, setLuggage] = useState("0");
  const [vehicleClass, setVehicleClass] = useState("sedan");
  const [passengerName, setPassengerName] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // Success Modal State
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  // Populate fields based on selected route slug
  useEffect(() => {
    if (selectedRouteSlug && selectedRouteSlug !== "custom") {
      const route = routesData.find((r) => r.slug === selectedRouteSlug);
      if (route) {
        setPickupLoc(locale === "en" ? route.name.en.split(" to ")[0] : route.name.ar.split(" إلى ")[0]);
        setDropoffLoc(locale === "en" ? route.name.en.split(" to ")[1] : route.name.ar.split(" إلى ")[1]);
        
        // Update price based on vehicle class
        const price = route.pricing[vehicleClass as keyof typeof route.pricing];
        setEstimatedPrice(price);
      }
    } else {
      setEstimatedPrice(null); // Custom route price upon inquiry
    }
  }, [selectedRouteSlug, vehicleClass, locale]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!passengerName || !passengerPhone || !pickupDate || !pickupTime) {
      alert(locale === "en" ? "Please fill in all required fields (Name, Phone, Date, Time)" : "يرجى ملء جميع الحقول المطلوبة (الاسم، الجوال، التاريخ، الوقت)");
      return;
    }

    // Determine vehicle details
    let vehicleName = "";
    if (vehicleClass === "sedan") vehicleName = t("camryName");
    else if (vehicleClass === "suv") vehicleName = t("yukonName");
    else if (vehicleClass === "van") vehicleName = t("stariaName");
    else if (vehicleClass === "luxury") vehicleName = t("luxuryName");

    // Format service type
    let serviceTypeName = "";
    if (serviceType === "airport") serviceTypeName = t("airportTransfer");
    else if (serviceType === "intercity") serviceTypeName = t("intercity");
    else if (serviceType === "border") serviceTypeName = t("crossBorder");
    else if (serviceType === "vip") serviceTypeName = t("vipChauffeur");

    // Format price output
    const priceText = estimatedPrice ? `${estimatedPrice} SAR` : (locale === "en" ? "Upon Inquiry / Estimate" : "عند الطلب / تقديري");

    // Construct WhatsApp message
    const message = `*--- Dammam Airport Taxi Booking ---*\n` +
      `*Name:* ${passengerName}\n` +
      `*Phone:* ${passengerPhone}\n` +
      `*Service Type:* ${serviceTypeName}\n` +
      `*Route:* ${selectedRouteSlug === "custom" ? "Custom Route" : selectedRouteSlug}\n` +
      `*Pickup:* ${pickupLoc}\n` +
      `*Dropoff:* ${dropoffLoc}\n` +
      `*Date:* ${pickupDate}\n` +
      `*Time:* ${pickupTime}\n` +
      `*Passengers:* ${passengers} | *Luggage:* ${luggage}\n` +
      `*Vehicle Class:* ${vehicleName}\n` +
      `*Price:* ${priceText}\n` +
      `*Special Notes:* ${specialNotes || "None"}`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/966569487569?text=${encodedMsg}`;
    
    setWhatsappLink(waUrl);
    setIsSuccessModalOpen(true);
  };

  return (
    <div id="booking" className="glass-card" style={styles.formContainer}>
      <h2 style={styles.title}>{t("formTitle")}</h2>
      <p style={styles.subtitle}>{t("formSub")}</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Service Type */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>{t("serviceType")}</label>
          <div style={styles.radioGroup}>
            {[
              { id: "airport", label: t("airportTransfer") },
              { id: "intercity", label: t("intercity") },
              { id: "border", label: t("crossBorder") },
              { id: "vip", label: t("vipChauffeur") },
            ].map((serv) => (
              <button
                key={serv.id}
                type="button"
                onClick={() => setServiceType(serv.id)}
                style={{
                  ...styles.radioButton,
                  backgroundColor: serviceType === serv.id ? "var(--accent-gold)" : "var(--bg-secondary)",
                  color: serviceType === serv.id ? "#000000" : "var(--text-primary)",
                  borderColor: serviceType === serv.id ? "var(--accent-gold)" : "var(--border-color)",
                }}
              >
                {serv.label}
              </button>
            ))}
          </div>
        </div>

        {/* Route Selector */}
        <div style={styles.grid2}>
          <div style={styles.field}>
            <label style={styles.label}>{t("navRoutes")}</label>
            <select
              value={selectedRouteSlug}
              onChange={(e) => setSelectedRouteSlug(e.target.value)}
              style={styles.select}
            >
              <option value="dammam-to-bahrain">{t("route_dammam_bahrain")}</option>
              <option value="dammam-to-kuwait">{t("route_dammam_kuwait")}</option>
              <option value="dammam-to-uae">{t("route_dammam_uae")}</option>
              <option value="dammam-to-riyadh">{t("route_dammam_riyadh")}</option>
              <option value="dammam-airport-to-khobar">{t("route_airport_khobar")}</option>
              <option value="dammam-airport-to-jubail">{t("route_airport_jubail")}</option>
              <option value="dammam-airport-to-dhahran">{t("route_airport_dhahran")}</option>
              <option value="dammam-airport-to-hofuf">{t("route_airport_hofuf")}</option>
              <option value="dammam-airport-to-qatar-border">{t("route_airport_qatar")}</option>
              <option value="custom">{locale === "en" ? "Custom Route (Enter below)" : "وجهة مخصصة (أدخلها بالأسفل)"}</option>
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>{t("selectVehicle")}</label>
            <select
              value={vehicleClass}
              onChange={(e) => setVehicleClass(e.target.value)}
              style={styles.select}
            >
              <option value="sedan">🚗 Camry Sedan</option>
              <option value="suv">SUV GMC Yukon</option>
              <option value="van">🚐 Family Van Hyundai Staria</option>
              <option value="luxury">👑 VIP Chauffeur Class</option>
            </select>
          </div>
        </div>

        {/* Pickup & Dropoff Inputs */}
        <div style={styles.grid2}>
          <div style={styles.field}>
            <label style={styles.label}>{t("pickupLoc")} <span style={{ color: "var(--error)" }}>*</span></label>
            <input
              type="text"
              placeholder={t("pickupPlaceholder")}
              value={pickupLoc}
              onChange={(e) => setPickupLoc(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>{t("dropoffLoc")} <span style={{ color: "var(--error)" }}>*</span></label>
            <input
              type="text"
              placeholder={t("dropoffPlaceholder")}
              value={dropoffLoc}
              onChange={(e) => setDropoffLoc(e.target.value)}
              style={styles.input}
              required
            />
          </div>
        </div>

        {/* Date & Time */}
        <div style={styles.grid2}>
          <div style={styles.field}>
            <label style={styles.label}>{t("pickupDate")} <span style={{ color: "var(--error)" }}>*</span></label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>{t("pickupTime")} <span style={{ color: "var(--error)" }}>*</span></label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              style={styles.input}
              required
            />
          </div>
        </div>

        {/* Passengers & Luggage */}
        <div style={styles.grid2}>
          <div style={styles.field}>
            <label style={styles.label}>{t("passengers")}</label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              style={styles.select}
            >
              {[1, 2, 3, 4, 5, 6, 7, "8+"].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div style={styles.field}>
            <label style={styles.label}>{t("luggage")}</label>
            <select
              value={luggage}
              onChange={(e) => setLuggage(e.target.value)}
              style={styles.select}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, "8+"].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Contact Details */}
        <div style={styles.grid2}>
          <div style={styles.field}>
            <label style={styles.label}>{t("passengerName")} <span style={{ color: "var(--error)" }}>*</span></label>
            <input
              type="text"
              placeholder={t("passengerNamePl")}
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>{t("passengerPhone")} <span style={{ color: "var(--error)" }}>*</span></label>
            <input
              type="tel"
              placeholder={t("passengerPhonePl")}
              value={passengerPhone}
              onChange={(e) => setPassengerPhone(e.target.value)}
              style={styles.input}
              required
            />
          </div>
        </div>

        {/* Special Notes */}
        <div style={styles.field}>
          <label style={styles.label}>{t("specialNotes")}</label>
          <textarea
            placeholder={t("specialNotesPl")}
            value={specialNotes}
            onChange={(e) => setSpecialNotes(e.target.value)}
            style={styles.textarea}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: isRtl ? 0 : "8px", marginLeft: isRtl ? "8px" : 0 }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          {t("submitBooking")}
        </button>
      </form>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div style={styles.modalOverlay}>
          <div className="glass-card" style={styles.modalContent}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "var(--accent-gold)" }}>
              {locale === "en" ? "Booking Summary Prepared" : "تم إعداد ملخص الحجز"}
            </h3>
            <p style={{ marginBottom: "1.5rem", fontSize: "0.95rem", lineHeight: "1.6" }}>
              {t("bookingSuccess")}
            </p>
            <div style={styles.modalActions}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", textDecoration: "none" }}
                onClick={() => setIsSuccessModalOpen(false)}
              >
                {t("sendWhatsAppBtn")}
              </a>
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="btn btn-dark"
                style={{ width: "100%" }}
              >
                {t("closeBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  formContainer: {
    padding: "2.5rem",
    border: "1px solid rgba(245, 197, 24, 0.2)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(245, 197, 24, 0.08)",
    backgroundColor: "rgba(15, 15, 15, 0.8)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "0.95rem",
    marginBottom: "2rem",
    color: "var(--text-secondary)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  radioGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "0.6rem",
  },
  radioButton: {
    padding: "0.7rem 0.5rem",
    border: "1px solid",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.8rem",
    fontWeight: "600",
    transition: "all var(--transition-fast)",
    textAlign: "center",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.2rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#ffffff",
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    border: "1px solid var(--border-color)",
    color: "#ffffff",
    padding: "0.8rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    transition: "all var(--transition-fast)",
  },
  select: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    border: "1px solid var(--border-color)",
    color: "#ffffff",
    padding: "0.8rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "all var(--transition-fast)",
    WebkitAppearance: "none",
  },
  textarea: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    border: "1px solid var(--border-color)",
    color: "#ffffff",
    padding: "0.8rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    minHeight: "80px",
    resize: "vertical",
    fontFamily: "inherit",
  },
  pricingSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(245, 197, 24, 0.05)",
    border: "1px dashed var(--accent-gold)",
    padding: "1rem 1.5rem",
    borderRadius: "6px",
  },
  priceLabel: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#ffffff",
  },
  priceValue: {
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "var(--accent-gold)",
  },
  submitBtn: {
    width: "100%",
    fontSize: "1.05rem",
    padding: "1rem",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "1.5rem",
  },
  modalContent: {
    maxWidth: "500px",
    width: "100%",
    padding: "2.5rem",
    border: "1px solid var(--accent-gold)",
    textAlign: "center",
  },
  modalActions: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
};

