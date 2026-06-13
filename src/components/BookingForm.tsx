"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { routesData } from "../data/routesData";

const VEHICLE_OPTIONS = [
  { id: "sedan",  icon: "🚗", en: "Sedan",      ar: "سيدان",   pax: "1–4", key: "camryName" },
  { id: "suv",    icon: "🚙", en: "VIP SUV",    ar: "SUV فاخر", pax: "1–6", key: "yukonName" },
  { id: "van",    icon: "🚐", en: "Family Van", ar: "فان عائلي", pax: "1–8", key: "stariaName" },
  { id: "luxury", icon: "👑", en: "First Class", ar: "درجة أولى", pax: "1–3", key: "luxuryName" },
];

const SERVICE_OPTIONS = [
  { id: "airport",   icon: "✈️", en: "Airport Transfer",  ar: "توصيل مطار" },
  { id: "intercity", icon: "🛣️", en: "Intercity",         ar: "بين المدن" },
  { id: "border",    icon: "🛂", en: "GCC Border",        ar: "حدود الخليج" },
  { id: "vip",       icon: "👑", en: "VIP Chauffeur",     ar: "سائق VIP" },
];

export const BookingForm: React.FC = () => {
  const { t, locale, isRtl } = useLanguage();
  const ar = locale === "ar";

  const [step, setStep] = useState(1);
  const [serviceType,      setServiceType]      = useState("airport");
  const [selectedSlug,     setSelectedSlug]     = useState("dammam-to-bahrain");
  const [pickupLoc,        setPickupLoc]        = useState("");
  const [dropoffLoc,       setDropoffLoc]       = useState("");
  const [pickupDate,       setPickupDate]       = useState("");
  const [pickupTime,       setPickupTime]       = useState("");
  const [passengers,       setPassengers]       = useState("1");
  const [luggage,          setLuggage]          = useState("0");
  const [vehicleClass,     setVehicleClass]     = useState("sedan");
  const [passengerName,    setPassengerName]    = useState("");
  const [passengerPhone,   setPassengerPhone]   = useState("");
  const [specialNotes,     setSpecialNotes]     = useState("");
  const [estimatedPrice,   setEstimatedPrice]   = useState<number | null>(null);
  const [showModal,        setShowModal]        = useState(false);
  const [waLink,           setWaLink]           = useState("");

  useEffect(() => {
    if (selectedSlug && selectedSlug !== "custom") {
      const route = routesData.find(r => r.slug === selectedSlug);
      if (route) {
        setPickupLoc(ar ? route.name.ar.split(" إلى ")[0] : route.name.en.split(" to ")[0]);
        setDropoffLoc(ar ? route.name.ar.split(" إلى ")[1] : route.name.en.split(" to ")[1]);
        setEstimatedPrice(route.pricing[vehicleClass as keyof typeof route.pricing]);
      }
    } else {
      setEstimatedPrice(null);
    }
  }, [selectedSlug, vehicleClass, ar]);

  const goNext = () => {
    if (step === 1 && !pickupLoc) return;
    setStep(s => Math.min(s + 1, 3));
  };
  const goBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName || !passengerPhone || !pickupDate || !pickupTime) {
      alert(ar ? "يرجى ملء جميع الحقول المطلوبة" : "Please fill in all required fields");
      return;
    }
    const vName = VEHICLE_OPTIONS.find(v => v.id === vehicleClass);
    const sName = SERVICE_OPTIONS.find(s => s.id === serviceType);
    const priceText = estimatedPrice ? `${estimatedPrice} SAR` : (ar ? "عند الطلب" : "Upon Inquiry");
    const msg =
      `*── Dammam Airport Taxi Booking ──*\n` +
      `*Name:* ${passengerName}\n*Phone:* ${passengerPhone}\n` +
      `*Service:* ${ar ? sName?.ar : sName?.en}\n` +
      `*Pickup:* ${pickupLoc}\n*Dropoff:* ${dropoffLoc}\n` +
      `*Date:* ${pickupDate}  *Time:* ${pickupTime}\n` +
      `*Passengers:* ${passengers}  *Luggage:* ${luggage}\n` +
      `*Vehicle:* ${ar ? vName?.ar : vName?.en} ${vName?.icon}\n` +
      `*Est. Price:* ${priceText}\n` +
      `*Notes:* ${specialNotes || "—"}`;
    setWaLink(`https://wa.me/966569487569?text=${encodeURIComponent(msg)}`);
    setShowModal(true);
  };

  const stepLabels = [
    { n: 1, en: "Route",    ar: "الوجهة" },
    { n: 2, en: "Schedule", ar: "الموعد" },
    { n: 3, en: "Contact",  ar: "التواصل" },
  ];

  return (
    <div id="booking" style={S.wrap} className="gradient-border">
      {/* ── decorative orbs ─────────────────────────── */}
      <div style={S.orb1} />
      <div style={S.orb2} />

      {/* ── Header ──────────────────────────────────── */}
      <div style={S.header}>
        <div style={S.headerIcon}>🗺️</div>
        <div>
          <h2 style={S.title}>{t("formTitle")}</h2>
          <p style={S.subtitle}>{t("formSub")}</p>
        </div>
      </div>

      {/* ── Step progress ────────────────────────────── */}
      <div style={S.stepBar}>
        {stepLabels.map((s, i) => (
          <React.Fragment key={s.n}>
            <div style={S.stepItem}>
              <div style={{
                ...S.stepCircle,
                background: step > s.n ? "var(--accent-gold)" : step === s.n ? "var(--accent-gold)" : "var(--bg-tertiary)",
                color: step >= s.n ? "#000" : "var(--text-muted)",
                boxShadow: step === s.n ? "0 0 0 4px rgba(245,197,24,0.2)" : "none",
                transform: step === s.n ? "scale(1.15)" : "scale(1)",
              }}>
                {step > s.n ? "✓" : s.n}
              </div>
              <span style={{ ...S.stepLabel, color: step >= s.n ? "#fff" : "var(--text-muted)" }}>
                {ar ? s.ar : s.en}
              </span>
            </div>
            {i < 2 && (
              <div style={{
                ...S.stepLine,
                background: step > s.n
                  ? "linear-gradient(90deg,var(--accent-gold),var(--accent-gold))"
                  : "var(--border-color)",
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={handleSubmit}>

        {/* ══ STEP 1: Route ══════════════════════════ */}
        {step === 1 && (
          <div style={S.stepContent} className="animate-slide-up">
            {/* Service type */}
            <div style={S.fieldGroup}>
              <label style={S.label}>{t("serviceType")}</label>
              <div style={S.servicGrid}>
                {SERVICE_OPTIONS.map(s => (
                  <button
                    key={s.id} type="button"
                    onClick={() => setServiceType(s.id)}
                    style={{
                      ...S.serviceBtn,
                      background: serviceType === s.id
                        ? "linear-gradient(135deg,#f5c518,#d8ad11)"
                        : "rgba(255,255,255,0.03)",
                      color: serviceType === s.id ? "#000" : "#fff",
                      borderColor: serviceType === s.id ? "#f5c518" : "var(--border-color)",
                      transform: serviceType === s.id ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <span style={S.serviceBtnIcon}>{s.icon}</span>
                    <span style={S.serviceBtnLabel}>{ar ? s.ar : s.en}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Route selector */}
            <div style={S.fieldGroup}>
              <label style={S.label}>{ar ? "اختر الوجهة" : "Select Route"}</label>
              <div style={S.selectWrap}>
                <select value={selectedSlug} onChange={e => setSelectedSlug(e.target.value)} style={S.select}>
                  <option value="dammam-to-bahrain">{t("route_dammam_bahrain")}</option>
                  <option value="dammam-to-kuwait">{t("route_dammam_kuwait")}</option>
                  <option value="dammam-to-uae">{t("route_dammam_uae")}</option>
                  <option value="dammam-to-riyadh">{t("route_dammam_riyadh")}</option>
                  <option value="dammam-airport-to-khobar">{t("route_airport_khobar")}</option>
                  <option value="dammam-airport-to-jubail">{t("route_airport_jubail")}</option>
                  <option value="dammam-airport-to-dhahran">{t("route_airport_dhahran")}</option>
                  <option value="dammam-airport-to-hofuf">{t("route_airport_hofuf")}</option>
                  <option value="dammam-airport-to-qatar-border">{t("route_airport_qatar")}</option>
                  <option value="custom">{ar ? "وجهة مخصصة" : "Custom Route"}</option>
                </select>
                <span style={S.selectArrow}>▾</span>
              </div>
            </div>

            {/* Pickup / Dropoff */}
            <div style={S.grid2}>
              <div style={S.field}>
                <label style={S.label}>
                  <span style={S.fieldIcon}>📍</span> {t("pickupLoc")} <span style={S.req}>*</span>
                </label>
                <input type="text" placeholder={t("pickupPlaceholder")} value={pickupLoc}
                  onChange={e => setPickupLoc(e.target.value)} style={S.input} required />
              </div>
              <div style={S.field}>
                <label style={S.label}>
                  <span style={S.fieldIcon}>🏁</span> {t("dropoffLoc")} <span style={S.req}>*</span>
                </label>
                <input type="text" placeholder={t("dropoffPlaceholder")} value={dropoffLoc}
                  onChange={e => setDropoffLoc(e.target.value)} style={S.input} />
              </div>
            </div>

            <button type="button" onClick={goNext} style={S.nextBtn} disabled={!pickupLoc}>
              {ar ? "التالي — الموعد →" : "Next — Schedule →"}
            </button>
          </div>
        )}

        {/* ══ STEP 2: Schedule + Vehicle ═════════════ */}
        {step === 2 && (
          <div style={S.stepContent} className="animate-slide-up">
            {/* Date / Time */}
            <div style={S.grid2}>
              <div style={S.field}>
                <label style={S.label}><span style={S.fieldIcon}>📅</span> {t("pickupDate")} <span style={S.req}>*</span></label>
                <input type="date" value={pickupDate} onChange={e => setPickupDate(e.target.value)} style={S.input} required />
              </div>
              <div style={S.field}>
                <label style={S.label}><span style={S.fieldIcon}>⏰</span> {t("pickupTime")} <span style={S.req}>*</span></label>
                <input type="time" value={pickupTime} onChange={e => setPickupTime(e.target.value)} style={S.input} required />
              </div>
            </div>

            {/* Passengers / Luggage */}
            <div style={S.grid2}>
              <div style={S.field}>
                <label style={S.label}><span style={S.fieldIcon}>👥</span> {t("passengers")}</label>
                <div style={S.selectWrap}>
                  <select value={passengers} onChange={e => setPassengers(e.target.value)} style={S.select}>
                    {[1,2,3,4,5,6,7,"8+"].map(n => <option key={n} value={n}>{n} {ar ? "ركاب" : "pax"}</option>)}
                  </select>
                  <span style={S.selectArrow}>▾</span>
                </div>
              </div>
              <div style={S.field}>
                <label style={S.label}><span style={S.fieldIcon}>🧳</span> {t("luggage")}</label>
                <div style={S.selectWrap}>
                  <select value={luggage} onChange={e => setLuggage(e.target.value)} style={S.select}>
                    {[0,1,2,3,4,5,6,7,"8+"].map(n => <option key={n} value={n}>{n} {ar ? "حقائب" : "bags"}</option>)}
                  </select>
                  <span style={S.selectArrow}>▾</span>
                </div>
              </div>
            </div>

            {/* Vehicle cards */}
            <div style={S.field}>
              <label style={S.label}><span style={S.fieldIcon}>🚗</span> {t("selectVehicle")}</label>
              <div style={S.vehicleGrid}>
                {VEHICLE_OPTIONS.map(v => (
                  <button
                    key={v.id} type="button"
                    onClick={() => setVehicleClass(v.id)}
                    style={{
                      ...S.vehicleCard,
                      borderColor: vehicleClass === v.id ? "var(--accent-gold)" : "var(--border-color)",
                      background: vehicleClass === v.id
                        ? "linear-gradient(135deg,rgba(245,197,24,0.12),rgba(245,197,24,0.04))"
                        : "rgba(255,255,255,0.02)",
                      transform: vehicleClass === v.id ? "scale(1.04) translateY(-2px)" : "scale(1)",
                      boxShadow: vehicleClass === v.id ? "0 4px 20px rgba(245,197,24,0.2)" : "none",
                    }}
                  >
                    <span style={S.vehicleIcon}>{v.icon}</span>
                    <span style={{ ...S.vehicleName, color: vehicleClass === v.id ? "var(--accent-gold)" : "#fff" }}>
                      {ar ? v.ar : v.en}
                    </span>
                    <span style={S.vehiclePax}>👥 {v.pax}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price display */}
            {estimatedPrice && (
              <div style={S.priceBox} className="animate-slide-up">
                <div>
                  <div style={S.priceLabel}>{t("estimatePrice")}</div>
                  <div style={S.priceNote}>{ar ? "سعر تقديري · يشمل الضرائب" : "Estimated · Incl. all fees"}</div>
                </div>
                <div style={S.priceVal}>{estimatedPrice.toLocaleString()} <span style={{ fontSize:"1rem" }}>SAR</span></div>
              </div>
            )}

            <div style={S.stepBtns}>
              <button type="button" onClick={goBack} style={S.backBtn}>{ar ? "← رجوع" : "← Back"}</button>
              <button type="button" onClick={goNext} style={S.nextBtn} disabled={!pickupDate || !pickupTime}>
                {ar ? "التالي — التواصل →" : "Next — Contact →"}
              </button>
            </div>
          </div>
        )}

        {/* ══ STEP 3: Contact ════════════════════════ */}
        {step === 3 && (
          <div style={S.stepContent} className="animate-slide-up">
            <div style={S.grid2}>
              <div style={S.field}>
                <label style={S.label}><span style={S.fieldIcon}>👤</span> {t("passengerName")} <span style={S.req}>*</span></label>
                <input type="text" placeholder={t("passengerNamePl")} value={passengerName}
                  onChange={e => setPassengerName(e.target.value)} style={S.input} required />
              </div>
              <div style={S.field}>
                <label style={S.label}><span style={S.fieldIcon}>📱</span> {t("passengerPhone")} <span style={S.req}>*</span></label>
                <input type="tel" placeholder={t("passengerPhonePl")} value={passengerPhone}
                  onChange={e => setPassengerPhone(e.target.value)} style={S.input} required />
              </div>
            </div>

            <div style={S.field}>
              <label style={S.label}><span style={S.fieldIcon}>✈️</span> {t("specialNotes")}</label>
              <textarea placeholder={t("specialNotesPl")} value={specialNotes}
                onChange={e => setSpecialNotes(e.target.value)} style={S.textarea} />
            </div>

            {/* Summary */}
            <div style={S.summaryBox}>
              <div style={S.summaryRow}><span style={S.summaryKey}>{ar ? "الوجهة" : "Route"}</span><span style={S.summaryVal}>{pickupLoc} → {dropoffLoc}</span></div>
              <div style={S.summaryRow}><span style={S.summaryKey}>{ar ? "الموعد" : "When"}</span><span style={S.summaryVal}>{pickupDate} {pickupTime}</span></div>
              <div style={S.summaryRow}><span style={S.summaryKey}>{ar ? "السيارة" : "Vehicle"}</span><span style={S.summaryVal}>{VEHICLE_OPTIONS.find(v=>v.id===vehicleClass)?.icon} {ar ? VEHICLE_OPTIONS.find(v=>v.id===vehicleClass)?.ar : VEHICLE_OPTIONS.find(v=>v.id===vehicleClass)?.en}</span></div>
              {estimatedPrice && <div style={S.summaryRow}><span style={S.summaryKey}>{ar ? "السعر" : "Price"}</span><span style={{ ...S.summaryVal, color:"var(--accent-gold)", fontWeight:800 }}>{estimatedPrice.toLocaleString()} SAR</span></div>}
            </div>

            <div style={S.stepBtns}>
              <button type="button" onClick={goBack} style={S.backBtn}>{ar ? "← رجوع" : "← Back"}</button>
              <button type="submit" style={S.submitBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.277-1.497A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.492-5.19-1.352l-.374-.222-3.726.888.944-3.638-.244-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                {t("submitBooking")}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* ── Success Modal ──────────────────────────── */}
      {showModal && (
        <div style={S.overlay} onClick={() => setShowModal(false)}>
          <div style={S.modal} onClick={e => e.stopPropagation()}>
            <div style={S.modalIcon}>✅</div>
            <h3 style={S.modalTitle}>{ar ? "تم إعداد حجزك!" : "Booking Ready!"}</h3>
            <p style={S.modalText}>{t("bookingSuccess")}</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={S.modalWaBtn}
              onClick={() => setShowModal(false)}>
              {t("sendWhatsAppBtn")}
            </a>
            <button type="button" onClick={() => setShowModal(false)} style={S.modalCloseBtn}>
              {t("closeBtn")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Styles ──────────────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  wrap: {
    position: "relative",
    padding: "2rem",
    overflow: "hidden",
    backgroundColor: "rgba(14,14,14,0.92)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "20px",
    border: "1px solid rgba(245,197,24,0.15)",
    boxShadow: "0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  orb1: {
    position: "absolute", top: "-60px", right: "-60px",
    width: "180px", height: "180px", borderRadius: "50%",
    background: "radial-gradient(circle,rgba(245,197,24,0.08),transparent 70%)",
    pointerEvents: "none",
  },
  orb2: {
    position: "absolute", bottom: "-40px", left: "-40px",
    width: "140px", height: "140px", borderRadius: "50%",
    background: "radial-gradient(circle,rgba(245,197,24,0.05),transparent 70%)",
    pointerEvents: "none",
  },
  header: {
    display: "flex", alignItems: "flex-start", gap: "1rem",
    marginBottom: "1.75rem",
  },
  headerIcon: {
    fontSize: "2rem", flexShrink: 0,
    backgroundColor: "rgba(245,197,24,0.1)",
    border: "1px solid rgba(245,197,24,0.2)",
    width: "52px", height: "52px", borderRadius: "12px",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  title:    { fontSize: "1.5rem", fontWeight: 800, color: "#fff" },
  subtitle: { fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" },

  /* Steps */
  stepBar: {
    display: "flex", alignItems: "center",
    marginBottom: "1.75rem", padding: "1rem 0.5rem",
    backgroundColor: "rgba(255,255,255,0.02)",
    borderRadius: "10px", border: "1px solid var(--border-color)",
  },
  stepItem:   { display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem", flex: 1 },
  stepCircle: {
    width: "30px", height: "30px", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: "0.8rem",
    transition: "all 0.25s ease",
  },
  stepLabel: { fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 },
  stepLine:  { height: "2px", flex: 1, borderRadius: "2px", transition: "background 0.3s ease" },

  stepContent: { display: "flex", flexDirection: "column", gap: "1.2rem" },

  /* Service buttons */
  servicGrid: {
    display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.6rem",
  },
  serviceBtn: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem",
    padding: "0.75rem 0.4rem", borderRadius: "10px",
    border: "1px solid", cursor: "pointer",
    transition: "all 0.2s ease", fontWeight: 600,
  },
  serviceBtnIcon:  { fontSize: "1.3rem" },
  serviceBtnLabel: { fontSize: "0.68rem", lineHeight: 1.3, textAlign: "center" },

  /* Vehicle cards */
  vehicleGrid: {
    display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.6rem",
  },
  vehicleCard: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem",
    padding: "0.75rem 0.4rem", borderRadius: "10px",
    border: "1px solid", cursor: "pointer",
    transition: "all 0.2s ease",
  },
  vehicleIcon: { fontSize: "1.5rem" },
  vehicleName: { fontSize: "0.7rem", fontWeight: 700, textAlign: "center", lineHeight: 1.3 },
  vehiclePax:  { fontSize: "0.62rem", color: "var(--text-muted)" },

  /* Fields */
  fieldGroup: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem" },
  field: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  label: { fontSize: "0.82rem", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: "0.35rem" },
  fieldIcon: { fontSize: "0.9rem" },
  req: { color: "var(--error)", marginLeft: "2px" },
  selectWrap: { position: "relative" },
  selectArrow: {
    position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
    color: "var(--text-muted)", pointerEvents: "none", fontSize: "0.8rem",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border-color)",
    borderRadius: "8px", padding: "0.7rem 1rem",
    color: "#fff", fontSize: "0.88rem",
    outline: "none", width: "100%",
    transition: "border-color 0.2s",
  },
  select: {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border-color)",
    borderRadius: "8px", padding: "0.7rem 2rem 0.7rem 1rem",
    color: "#fff", fontSize: "0.88rem", cursor: "pointer",
    outline: "none", width: "100%", WebkitAppearance: "none",
  },
  textarea: {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border-color)",
    borderRadius: "8px", padding: "0.7rem 1rem",
    color: "#fff", fontSize: "0.88rem",
    minHeight: "72px", resize: "vertical", fontFamily: "inherit",
    outline: "none", width: "100%",
  },

  /* Price box */
  priceBox: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "linear-gradient(135deg,rgba(245,197,24,0.08),rgba(245,197,24,0.03))",
    border: "1px solid rgba(245,197,24,0.25)", borderRadius: "10px",
    padding: "0.9rem 1.2rem",
  },
  priceLabel: { fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginBottom: "2px" },
  priceNote:  { fontSize: "0.68rem", color: "var(--text-muted)" },
  priceVal:   { fontSize: "1.6rem", fontWeight: 900, color: "var(--accent-gold)" },

  /* Summary */
  summaryBox: {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border-color)", borderRadius: "10px",
    padding: "0.9rem 1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem",
  },
  summaryRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  summaryKey: { fontSize: "0.75rem", color: "var(--text-muted)" },
  summaryVal: { fontSize: "0.82rem", color: "#fff", fontWeight: 600 },

  /* Buttons */
  stepBtns: { display: "flex", gap: "0.75rem", marginTop: "0.25rem" },
  nextBtn: {
    flex: 1, padding: "0.85rem", borderRadius: "10px", border: "none",
    background: "linear-gradient(135deg,#f5c518,#d8ad11)",
    color: "#000", fontWeight: 800, fontSize: "0.9rem",
    cursor: "pointer", transition: "all 0.2s", boxShadow: "0 4px 15px rgba(245,197,24,0.25)",
  },
  backBtn: {
    padding: "0.85rem 1.2rem", borderRadius: "10px",
    border: "1px solid var(--border-color)",
    background: "transparent", color: "var(--text-secondary)",
    fontWeight: 600, fontSize: "0.85rem", cursor: "pointer",
    transition: "all 0.2s",
  },
  submitBtn: {
    flex: 1, padding: "0.9rem", borderRadius: "10px", border: "none",
    background: "linear-gradient(135deg,#25d366,#20ba5a)",
    color: "#fff", fontWeight: 800, fontSize: "0.9rem",
    cursor: "pointer", display: "flex", alignItems: "center",
    justifyContent: "center", gap: "0.5rem",
    boxShadow: "0 4px 15px rgba(37,211,102,0.25)",
    transition: "all 0.2s",
  },

  /* Modal */
  overlay: {
    position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 9999, padding: "1.5rem",
  },
  modal: {
    backgroundColor: "#141414", border: "1px solid rgba(245,197,24,0.3)",
    borderRadius: "20px", padding: "2.5rem", maxWidth: "460px", width: "100%",
    textAlign: "center", display: "flex", flexDirection: "column", gap: "1rem",
    boxShadow: "0 32px 80px rgba(0,0,0,0.9)",
  },
  modalIcon:     { fontSize: "3rem" },
  modalTitle:    { fontSize: "1.4rem", fontWeight: 800, color: "var(--accent-gold)" },
  modalText:     { fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 },
  modalWaBtn: {
    display: "block", padding: "0.9rem", borderRadius: "10px",
    background: "linear-gradient(135deg,#25d366,#20ba5a)",
    color: "#fff", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none",
  },
  modalCloseBtn: {
    padding: "0.7rem", borderRadius: "10px",
    border: "1px solid var(--border-color)", background: "transparent",
    color: "var(--text-secondary)", cursor: "pointer", fontSize: "0.88rem",
  },
};
