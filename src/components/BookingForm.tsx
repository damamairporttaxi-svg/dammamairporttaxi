"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { routesData } from "../data/routesData";

/* ── SVG icon helpers ───────────────────────────────────── */
const Icon = {
  plane: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5c-1.5-1.5-3.5-1.5-5 0L11 6 2.8 4.2l-2 2 7.1 5.1L4 15l-2 1 3 3 1-2 3.9-3.9 5.1 7.1z"/></svg>,
  road:  (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v10h-2"/><polyline points="11 21 11 12 6 12 6 21"/><rect x="14" y="17" width="8" height="5" rx="1"/><path d="M21 21H5a2 2 0 01-2-2v-1"/></svg>,
  border:(s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><path d="M1 10h22"/><line x1="12" y1="4" x2="12" y2="20"/></svg>,
  star:  (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  pin:   (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  flag:  (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
  cal:   (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  clock: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  users: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  bag:   (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  user:  (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  phone: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
  note:  (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  car:   (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v10h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>,
  suv:   (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 17h2m18 0h2M3 17V9l3-5h12l3 5v8"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M3 9h18"/></svg>,
  van:   (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="8" width="22" height="10" rx="1"/><path d="M1 12h22M9 8V5a2 2 0 00-2-2H4"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>,
  crown: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l4 8 6-8 6 8 4-8v12H2z"/></svg>,
  wa:    (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.277-1.497A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.492-5.19-1.352l-.374-.222-3.726.888.944-3.638-.244-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>,
  check: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  arrow: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  back:  (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  tag:   (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
};

const VEHICLES = [
  { id:"sedan",  IconC: Icon.car,   en:"Sedan",       ar:"سيدان",    sub_en:"Camry",  sub_ar:"كامري",  pax:"1–4" },
  { id:"suv",    IconC: Icon.suv,   en:"VIP SUV",     ar:"SUV فاخر", sub_en:"Yukon",  sub_ar:"يوكن",   pax:"1–6" },
  { id:"van",    IconC: Icon.van,   en:"Family Van",  ar:"فان عائلي",sub_en:"Staria", sub_ar:"ستاريا", pax:"1–8" },
  { id:"luxury", IconC: Icon.crown, en:"First Class", ar:"درجة أولى",sub_en:"Mercedes",sub_ar:"مرسيدس",pax:"1–3" },
];

const SERVICES = [
  { id:"airport",   IconC: Icon.plane,  en:"Airport",     ar:"مطار" },
  { id:"intercity", IconC: Icon.road,   en:"Intercity",   ar:"بين المدن" },
  { id:"border",    IconC: Icon.border, en:"GCC Border",  ar:"حدود خليج" },
  { id:"vip",       IconC: Icon.star,   en:"VIP",         ar:"VIP" },
];

export const BookingForm: React.FC = () => {
  const { t, locale } = useLanguage();
  const ar = locale === "ar";

  const [step,          setStep]          = useState(1);
  const [serviceType,   setServiceType]   = useState("airport");
  const [selectedSlug,  setSelectedSlug]  = useState("dammam-to-bahrain");
  const [pickupLoc,     setPickupLoc]     = useState("");
  const [dropoffLoc,    setDropoffLoc]    = useState("");
  const [pickupDate,    setPickupDate]    = useState("");
  const [pickupTime,    setPickupTime]    = useState("");
  const [passengers,    setPassengers]    = useState("1");
  const [luggage,       setLuggage]       = useState("0");
  const [vehicleClass,  setVehicleClass]  = useState("sedan");
  const [name,          setName]          = useState("");
  const [phone,         setPhone]         = useState("");
  const [notes,         setNotes]         = useState("");
  const [price,         setPrice]         = useState<number|null>(null);
  const [modal,         setModal]         = useState(false);
  const [waLink,        setWaLink]        = useState("");

  useEffect(() => {
    if (selectedSlug !== "custom") {
      const r = routesData.find(r => r.slug === selectedSlug);
      if (r) {
        setPickupLoc(ar ? r.name.ar.split(" إلى ")[0] : r.name.en.split(" to ")[0]);
        setDropoffLoc(ar ? r.name.ar.split(" إلى ")[1] : r.name.en.split(" to ")[1]);
        setPrice(r.pricing[vehicleClass as keyof typeof r.pricing]);
      }
    } else setPrice(null);
  }, [selectedSlug, vehicleClass, ar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !pickupDate || !pickupTime) {
      alert(ar ? "يرجى ملء جميع الحقول المطلوبة" : "Please fill all required fields");
      return;
    }
    const v = VEHICLES.find(x => x.id === vehicleClass);
    const s = SERVICES.find(x => x.id === serviceType);
    const msg =
      `*── Dammam Airport Taxi Booking ──*\n` +
      `*Name:* ${name}\n*Phone:* ${phone}\n` +
      `*Service:* ${ar ? s?.ar : s?.en}\n` +
      `*From:* ${pickupLoc}  →  *To:* ${dropoffLoc}\n` +
      `*Date:* ${pickupDate}  *Time:* ${pickupTime}\n` +
      `*Pax:* ${passengers}  *Bags:* ${luggage}\n` +
      `*Vehicle:* ${ar ? v?.ar : v?.en} (${ar ? v?.sub_ar : v?.sub_en})\n` +
      `*Price:* ${price ? `${price} SAR` : "Upon inquiry"}\n` +
      `*Notes:* ${notes || "—"}`;
    setWaLink(`https://wa.me/966569487569?text=${encodeURIComponent(msg)}`);
    setModal(true);
  };

  const steps = [
    { n:1, en:"Route",    ar:"الوجهة"  },
    { n:2, en:"Schedule", ar:"الموعد"  },
    { n:3, en:"Details",  ar:"التواصل" },
  ];

  return (
    <div id="booking" style={F.root}>
      {/* accent line */}
      <div style={F.accentLine} />

      {/* header */}
      <div style={F.head}>
        <div style={F.headLeft}>
          <span style={F.headBadge}>{ar ? "حجز فوري" : "INSTANT BOOKING"}</span>
          <h2 style={F.headTitle}>{t("formTitle")}</h2>
        </div>
        {price && (
          <div style={F.headPrice}>
            <span style={F.headPriceLabel}>{ar ? "تقدير" : "Est."}</span>
            <span style={F.headPriceVal}>{price.toLocaleString()}</span>
            <span style={F.headPriceCur}>SAR</span>
          </div>
        )}
      </div>

      {/* step indicator */}
      <div style={F.steps}>
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <button
              type="button"
              onClick={() => step > s.n && setStep(s.n)}
              style={{
                ...F.stepBtn,
                cursor: step > s.n ? "pointer" : "default",
              }}
            >
              <div style={{
                ...F.stepDot,
                background: step > s.n ? "#0C58D1" : step === s.n ? "#0C58D1" : "#f0f0f0",
                color: step >= s.n ? "#ffffff" : "#64748B",
                boxShadow: step === s.n ? "0 0 0 3px rgba(12,88,209,0.20)" : "none",
              }}>
                {step > s.n ? <span style={{display:"flex"}}>{Icon.check(13)}</span> : s.n}
              </div>
              <span style={{ ...F.stepTxt, color: step >= s.n ? "#fff" : "#555" }}>
                {ar ? s.ar : s.en}
              </span>
            </button>
            {i < 2 && (
              <div style={{ ...F.stepBar, background: step > s.n ? "#0C58D1" : "#e5e7eb" }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ padding: "0 1.5rem 1.5rem" }}>

        {/* ══ STEP 1 ══════════════════════════════ */}
        {step === 1 && (
          <div style={F.stepBody}>
            {/* service pills */}
            <div style={F.serviceRow}>
              {SERVICES.map(s => (
                <button key={s.id} type="button" onClick={() => setServiceType(s.id)}
                  style={{
                    ...F.pill,
                    background:   serviceType === s.id ? "#0C58D1" : "transparent",
                    color:        serviceType === s.id ? "#ffffff" : "#64748B",
                    borderColor:  serviceType === s.id ? "#0C58D1" : "#e5e7eb",
                  }}>
                  <span style={{ display:"flex", opacity: serviceType === s.id ? 1 : 0.6 }}>
                    {s.IconC(15)}
                  </span>
                  {ar ? s.ar : s.en}
                </button>
              ))}
            </div>

            {/* route */}
            <div style={F.field}>
              <label style={F.label}>{ar ? "الوجهة" : "Route"}</label>
              <div style={F.selWrap}>
                <select value={selectedSlug} onChange={e=>setSelectedSlug(e.target.value)} style={F.sel}>
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
                <span style={F.chevron}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </div>
            </div>

            {/* from / to */}
            <div style={F.grid2}>
              <div style={F.field}>
                <label style={F.label}>
                  <span style={{ display:"flex", color:"#0C58D1" }}>{Icon.pin(13)}</span>
                  {t("pickupLoc")} <span style={{color:"#e63946"}}>*</span>
                </label>
                <input value={pickupLoc} onChange={e=>setPickupLoc(e.target.value)}
                  placeholder={t("pickupPlaceholder")} style={F.inp} required />
              </div>
              <div style={F.field}>
                <label style={F.label}>
                  <span style={{ display:"flex", color:"#888" }}>{Icon.flag(13)}</span>
                  {t("dropoffLoc")}
                </label>
                <input value={dropoffLoc} onChange={e=>setDropoffLoc(e.target.value)}
                  placeholder={t("dropoffPlaceholder")} style={F.inp} />
              </div>
            </div>

            <button type="button" disabled={!pickupLoc}
              onClick={() => setStep(2)} style={{ ...F.nextBtn, opacity: pickupLoc ? 1 : 0.4 }}>
              {ar ? "التالي" : "Next"} <span style={{display:"flex"}}>{Icon.arrow(15)}</span>
            </button>
          </div>
        )}

        {/* ══ STEP 2 ══════════════════════════════ */}
        {step === 2 && (
          <div style={F.stepBody}>
            <div style={F.grid2}>
              <div style={F.field}>
                <label style={F.label}><span style={{display:"flex"}}>{Icon.cal(13)}</span>{t("pickupDate")} <span style={{color:"#e63946"}}>*</span></label>
                <input type="date" value={pickupDate} onChange={e=>setPickupDate(e.target.value)} style={F.inp} required />
              </div>
              <div style={F.field}>
                <label style={F.label}><span style={{display:"flex"}}>{Icon.clock(13)}</span>{t("pickupTime")} <span style={{color:"#e63946"}}>*</span></label>
                <input type="time" value={pickupTime} onChange={e=>setPickupTime(e.target.value)} style={F.inp} required />
              </div>
            </div>

            <div style={F.grid2}>
              <div style={F.field}>
                <label style={F.label}><span style={{display:"flex"}}>{Icon.users(13)}</span>{t("passengers")}</label>
                <div style={F.selWrap}>
                  <select value={passengers} onChange={e=>setPassengers(e.target.value)} style={F.sel}>
                    {[1,2,3,4,5,6,7,"8+"].map(n=><option key={n} value={n}>{n} {ar?"ركاب":"pax"}</option>)}
                  </select>
                  <span style={F.chevron}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
                </div>
              </div>
              <div style={F.field}>
                <label style={F.label}><span style={{display:"flex"}}>{Icon.bag(13)}</span>{t("luggage")}</label>
                <div style={F.selWrap}>
                  <select value={luggage} onChange={e=>setLuggage(e.target.value)} style={F.sel}>
                    {[0,1,2,3,4,5,6,7,"8+"].map(n=><option key={n} value={n}>{n} {ar?"حقائب":"bags"}</option>)}
                  </select>
                  <span style={F.chevron}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
                </div>
              </div>
            </div>

            {/* vehicle selector */}
            <div style={F.field}>
              <label style={F.label}><span style={{display:"flex"}}>{Icon.car(13)}</span>{t("selectVehicle")}</label>
              <div style={F.vGrid}>
                {VEHICLES.map(v => {
                  const active = vehicleClass === v.id;
                  return (
                    <button key={v.id} type="button" onClick={() => setVehicleClass(v.id)}
                      style={{
                        ...F.vCard,
                        borderColor:   active ? "#2563EB" : "rgba(255,255,255,0.10)",
                        background:    active ? "rgba(12,88,209,0.06)" : "#ffffff",
                        transform:     active ? "translateY(-3px)" : "none",
                        boxShadow:     active ? "0 6px 24px rgba(0,0,0,0.5)" : "none",
                      }}>
                      <span style={{ display:"flex", color: active ? "#0C58D1" : "#64748B", transition:"color 0.2s" }}>
                        {v.IconC(22)}
                      </span>
                      <span style={{ ...F.vName, color: active ? "#fff" : "#777" }}>{ar ? v.ar : v.en}</span>
                      <span style={F.vSub}>{ar ? v.sub_ar : v.sub_en}</span>
                      <span style={F.vPax}>{v.pax}</span>
                      {active && <span style={F.vCheck}>{Icon.check(11)}</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {price && (
              <div style={F.priceRow}>
                <span style={{display:"flex", color:"#0C58D1"}}>{Icon.tag(14)}</span>
                <span style={F.priceText}>{ar ? "السعر التقديري:" : "Estimated fare:"}</span>
                <span style={F.priceBig}>{price.toLocaleString()} <span style={{fontSize:"0.9rem",fontWeight:600}}>SAR</span></span>
              </div>
            )}

            <div style={F.btnRow}>
              <button type="button" onClick={()=>setStep(1)} style={F.backBtn}>
                <span style={{display:"flex"}}>{Icon.back(14)}</span> {ar?"رجوع":"Back"}
              </button>
              <button type="button" disabled={!pickupDate||!pickupTime}
                onClick={()=>setStep(3)} style={{...F.nextBtn, opacity:pickupDate&&pickupTime?1:0.4, flex:1}}>
                {ar?"التالي":"Next"} <span style={{display:"flex"}}>{Icon.arrow(15)}</span>
              </button>
            </div>
          </div>
        )}

        {/* ══ STEP 3 ══════════════════════════════ */}
        {step === 3 && (
          <div style={F.stepBody}>
            <div style={F.grid2}>
              <div style={F.field}>
                <label style={F.label}><span style={{display:"flex"}}>{Icon.user(13)}</span>{t("passengerName")} <span style={{color:"#e63946"}}>*</span></label>
                <input value={name} onChange={e=>setName(e.target.value)}
                  placeholder={t("passengerNamePl")} style={F.inp} required />
              </div>
              <div style={F.field}>
                <label style={F.label}><span style={{display:"flex"}}>{Icon.phone(13)}</span>{t("passengerPhone")} <span style={{color:"#e63946"}}>*</span></label>
                <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)}
                  placeholder={t("passengerPhonePl")} style={F.inp} required />
              </div>
            </div>

            <div style={F.field}>
              <label style={F.label}><span style={{display:"flex"}}>{Icon.note(13)}</span>{t("specialNotes")}</label>
              <textarea value={notes} onChange={e=>setNotes(e.target.value)}
                placeholder={t("specialNotesPl")} style={F.textarea} />
            </div>

            {/* summary strip */}
            <div style={F.summary}>
              {[
                { icon: Icon.pin(12),   label: ar?"من":"From",    val: pickupLoc  },
                { icon: Icon.flag(12),  label: ar?"إلى":"To",     val: dropoffLoc },
                { icon: Icon.cal(12),   label: ar?"التاريخ":"Date", val: pickupDate },
                { icon: Icon.car(12),   label: ar?"السيارة":"Car", val: ar ? VEHICLES.find(v=>v.id===vehicleClass)?.ar : VEHICLES.find(v=>v.id===vehicleClass)?.en },
                ...(price ? [{ icon: Icon.tag(12), label: ar?"السعر":"Price", val: `${price.toLocaleString()} SAR` }] : []),
              ].map((row, i) => (
                <div key={i} style={F.sumRow}>
                  <span style={{display:"flex",color:"#555"}}>{row.icon}</span>
                  <span style={F.sumLabel}>{row.label}</span>
                  <span style={{...F.sumVal, color: row.label==="Price"||row.label==="السعر" ? "#f5c518" : "#fff"}}>{row.val || "—"}</span>
                </div>
              ))}
            </div>

            <div style={F.btnRow}>
              <button type="button" onClick={()=>setStep(2)} style={F.backBtn}>
                <span style={{display:"flex"}}>{Icon.back(14)}</span> {ar?"رجوع":"Back"}
              </button>
              <button type="submit" style={{...F.submitBtn, flex:1}}>
                <span style={{display:"flex"}}>{Icon.wa(17)}</span>
                {t("submitBooking")}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* modal */}
      {modal && (
        <div style={F.overlay} onClick={()=>setModal(false)}>
          <div style={F.modalBox} onClick={e=>e.stopPropagation()}>
            <div style={F.modalCheck}>{Icon.check(28)}</div>
            <h3 style={F.modalTitle}>{ar?"تم إعداد حجزك!":"Booking Ready!"}</h3>
            <p style={F.modalTxt}>{t("bookingSuccess")}</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={F.modalWa} onClick={()=>setModal(false)}>
              <span style={{display:"flex"}}>{Icon.wa(17)}</span>{t("sendWhatsAppBtn")}
            </a>
            <button type="button" onClick={()=>setModal(false)} style={F.modalClose}>{t("closeBtn")}</button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Styles ──────────────────────────────────────────────── */
const F: Record<string,React.CSSProperties> = {
  root: {
    position: "relative",
    background: "#ffffff",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
  },
  accentLine: {
    height: "3px",
    background: "linear-gradient(90deg,#0C58D1 0%,rgba(12,88,209,0.3) 50%,transparent 100%)",
  },
  head: {
    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
    padding: "1.4rem 1.5rem 0",
  },
  headLeft:    { display:"flex", flexDirection:"column", gap:"0.3rem" },
  headBadge:   { fontSize:"0.62rem", fontWeight:800, letterSpacing:"0.12em", color:"#64748B", textTransform:"uppercase" },
  headTitle:   { fontSize:"1.35rem", fontWeight:800, color: "#000000" },
  headPrice:   { display:"flex", alignItems:"baseline", gap:"0.2rem", background:"#f8f9fa", border:"1px solid #e5e7eb", borderRadius:"8px", padding:"0.5rem 0.9rem" },
  headPriceLabel: { fontSize:"0.62rem", color:"#64748B", marginRight:"4px" },
  headPriceVal: { fontSize:"1.4rem", fontWeight:900, color:"#0C58D1" },
  headPriceCur: { fontSize:"0.72rem", color:"#64748B" },

  /* steps */
  steps: {
    display:"flex", alignItems:"center",
    padding:"1.1rem 1.5rem 1rem",
    gap:0,
  },
  stepBtn:  { display:"flex", flexDirection:"column", alignItems:"center", gap:"0.35rem", background:"none", border:"none", flex:1 },
  stepDot:  { width:"26px", height:"26px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.75rem", fontWeight:800, transition:"all 0.25s ease" },
  stepTxt:  { fontSize:"0.62rem", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:700, transition:"color 0.25s" },
  stepBar:  { height:"2px", flex:1, transition:"background 0.4s ease" },

  stepBody: { display:"flex", flexDirection:"column", gap:"1.1rem" },

  /* service pills */
  serviceRow: { display:"flex", gap:"0.5rem", flexWrap:"wrap" },
  pill: {
    display:"flex", alignItems:"center", gap:"0.4rem",
    padding:"0.45rem 0.9rem", borderRadius:"50px",
    border:"1px solid", fontSize:"0.78rem", fontWeight:600,
    cursor:"pointer", transition:"all 0.18s ease",
  },

  /* fields */
  grid2: { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"0.9rem" },
  field: { display:"flex", flexDirection:"column", gap:"0.4rem" },
  label: { fontSize:"0.75rem", fontWeight:700, color:"#64748B", display:"flex", alignItems:"center", gap:"0.35rem", textTransform:"uppercase", letterSpacing:"0.04em" },
  selWrap: { position:"relative" },
  chevron: { position:"absolute", right:"10px", top:"50%", transform:"translateY(-50%)", pointerEvents:"none", display:"flex" },
  inp: {
    background:"#ffffff", border:"1px solid #e5e7eb", borderRadius:"8px",
    padding:"0.65rem 0.9rem", color: "#000000", fontSize:"0.85rem",
    outline:"none", width:"100%", transition:"border-color 0.2s",
  },
  sel: {
    background:"#ffffff", border:"1px solid #e5e7eb", borderRadius:"8px",
    padding:"0.65rem 2rem 0.65rem 0.9rem", color: "#000000", fontSize:"0.85rem",
    outline:"none", width:"100%", cursor:"pointer", WebkitAppearance:"none",
  },
  textarea: {
    background:"#ffffff", border:"1px solid #e5e7eb", borderRadius:"8px",
    padding:"0.65rem 0.9rem", color: "#000000", fontSize:"0.85rem",
    outline:"none", width:"100%", minHeight:"68px", resize:"vertical", fontFamily:"inherit",
  },

  /* vehicles */
  vGrid: { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0.5rem" },
  vCard: {
    display:"flex", flexDirection:"column", alignItems:"center", gap:"0.3rem",
    padding:"0.75rem 0.3rem", borderRadius:"10px", border:"1px solid",
    cursor:"pointer", transition:"all 0.2s ease", position:"relative",
  },
  vName: { fontSize:"0.65rem", fontWeight:800, textAlign:"center", lineHeight:1.2, transition:"color 0.2s" },
  vSub:  { fontSize:"0.58rem", color:"#64748B" },
  vPax:  { fontSize:"0.58rem", color:"#64748B" },
  vCheck: { position:"absolute", top:"5px", right:"5px", background:"#0C58D1", borderRadius:"50%", width:"15px", height:"15px", display:"flex", alignItems:"center", justifyContent:"center", color:"#ffffff" },

  /* price */
  priceRow: {
    display:"flex", alignItems:"center", gap:"0.5rem",
    background:"#f8f9fa", border:"1px solid #e5e7eb",
    borderRadius:"8px", padding:"0.7rem 1rem",
  },
  priceText: { fontSize:"0.78rem", color:"#64748B", flex:1 },
  priceBig:  { fontSize:"1.3rem", fontWeight:900, color:"#0C58D1" },

  /* summary */
  summary: {
    background:"#f8f9fa", border:"1px solid #e5e7eb", borderRadius:"8px",
    padding:"0.75rem 1rem", display:"flex", flexDirection:"column", gap:"0.5rem",
  },
  sumRow:   { display:"flex", alignItems:"center", gap:"0.5rem" },
  sumLabel: { fontSize:"0.7rem", color:"#64748B", width:"50px", flexShrink:0 },
  sumVal:   { fontSize:"0.78rem", fontWeight:600, color:"#000000", flex:1 },

  /* buttons */
  btnRow: { display:"flex", gap:"0.6rem" },
  nextBtn: {
    display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem",
    padding:"0.8rem 1.4rem", borderRadius:"8px", border:"2px solid #0C58D1",
    background:"#0C58D1", color:"#ffffff", fontWeight:800, fontSize:"0.88rem",
    cursor:"pointer", transition:"all 0.2s",
  },
  backBtn: {
    display:"flex", alignItems:"center", gap:"0.4rem",
    padding:"0.8rem 1rem", borderRadius:"8px",
    border:"1px solid #e5e7eb", background:"transparent",
    color:"#64748B", cursor:"pointer", fontSize:"0.82rem", fontWeight:600,
    transition:"all 0.2s",
  },
  submitBtn: {
    display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem",
    padding:"0.85rem 1rem", borderRadius:"8px", border:"none",
    background:"#25d366", color: "#ffffff", fontWeight:800, fontSize:"0.88rem",
    cursor:"pointer", transition:"all 0.2s",
    boxShadow:"0 4px 16px rgba(37,211,102,0.2)",
  },

  /* modal */
  overlay: {
    position:"fixed", inset:0, background:"rgba(0,0,0,0.75)",
    display:"flex", alignItems:"center", justifyContent:"center",
    zIndex:9999, padding:"1.5rem",
  },
  modalBox: {
    background:"#ffffff", border:"1px solid #e5e7eb",
    borderRadius:"16px", padding:"2rem 1.75rem",
    maxWidth:"440px", width:"100%", textAlign:"center",
    display:"flex", flexDirection:"column", gap:"0.9rem",
    boxShadow:"0 8px 32px rgba(0,0,0,0.12)",
  },
  modalCheck: {
    width:"56px", height:"56px", borderRadius:"50%",
    background:"rgba(37,211,102,0.10)", border:"1px solid rgba(37,211,102,0.3)",
    display:"flex", alignItems:"center", justifyContent:"center",
    margin:"0 auto", color:"#25d366",
  },
  modalTitle: { fontSize:"1.25rem", fontWeight:800, color: "#000000" },
  modalTxt:   { fontSize:"0.84rem", color:"#64748B", lineHeight:1.6 },
  modalWa: {
    display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem",
    padding:"0.85rem", borderRadius:"8px",
    background:"#25d366", color: "#ffffff",
    fontWeight:800, fontSize:"0.9rem", textDecoration:"none",
  },
  modalClose: {
    padding:"0.65rem", borderRadius:"8px",
    border:"1px solid #e5e7eb", background:"transparent",
    color:"#64748B", cursor:"pointer", fontSize:"0.84rem",
  },
};
