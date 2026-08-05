"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import { routesData } from "../data/routesData";

/* ─── Category slugs ───────────────────────────────────────────── */
const GCC_SLUGS = [
  "dammam-to-bahrain","dammam-to-kuwait","dammam-to-uae",
  "dammam-airport-to-qatar-border","dammam-to-doha","dammam-to-abu-dhabi",
  "dammam-to-sharjah","dammam-to-muscat","dammam-airport-to-bahrain-airport",
];
const SAUDI_SLUGS = [
  "dammam-to-riyadh","dammam-to-jeddah","dammam-to-madinah",
  "dammam-to-mecca","dammam-to-qassim",
];
const AIRPORT_SLUGS = [
  "dammam-airport-to-khobar","dammam-airport-to-jubail","dammam-airport-to-dhahran",
  "dammam-airport-to-hofuf","dammam-airport-to-dammam-city","dammam-airport-to-qatif",
  "dammam-airport-to-ras-tanura","dammam-airport-to-half-moon-bay",
];

/* ─── Category config ──────────────────────────────────────────── */
const CAT = {
  gcc:     { color:"#c8920a", bg:"rgba(200,146,10,0.08)", label_en:"International GCC",  label_ar:"دولي / خليجي" },
  saudi:   { color:"#2a9d2a", bg:"rgba(42,157,42,0.08)",  label_en:"Saudi City",          label_ar:"مدينة سعودية" },
  airport: { color:"#3a7fd4", bg:"rgba(58,127,212,0.08)", label_en:"Airport Transfer",   label_ar:"من المطار"    },
};

function getCat(slug:string):"gcc"|"saudi"|"airport"{
  if(GCC_SLUGS.includes(slug)) return "gcc";
  if(SAUDI_SLUGS.includes(slug)) return "saudi";
  return "airport";
}

/* ─── Featured (top 3 most popular) ───────────────────────────── */
const FEATURED = ["dammam-to-bahrain","dammam-to-riyadh","dammam-airport-to-khobar"];

type Tab = "all"|"gcc"|"saudi"|"airport";

/* ══════════════════════════════════════════════════════════════════ */
export function PopularRoutesPageClient() {
  const { locale } = useLanguage();
  const ar = locale==="ar";
  const [tab, setTab] = useState<Tab>("all");

  const tabs: {id:Tab;en:string;ar:string;n:number}[] = [
    {id:"all",    en:"All Routes",         ar:"جميع الوجهات",    n:routesData.length},
    {id:"gcc",    en:"International GCC",  ar:"دول الخليج",      n:GCC_SLUGS.length},
    {id:"saudi",  en:"Saudi Cities",       ar:"المدن السعودية",  n:SAUDI_SLUGS.length},
    {id:"airport",en:"Airport Transfers",  ar:"توصيل من المطار", n:AIRPORT_SLUGS.length},
  ];

  const routes =
    tab==="gcc"     ? routesData.filter(r=>GCC_SLUGS.includes(r.slug)) :
    tab==="saudi"   ? routesData.filter(r=>SAUDI_SLUGS.includes(r.slug)) :
    tab==="airport" ? routesData.filter(r=>AIRPORT_SLUGS.includes(r.slug)) :
    routesData;

  const featured = routesData.filter(r=>FEATURED.includes(r.slug));

  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",backgroundColor:"var(--bg-primary)"}}>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={S.hero}>
        <div className="container" style={S.heroInner}>
          {/* breadcrumb */}
          <nav style={S.crumb}>
            <Link href="/" style={S.crumbLink}>{ar?"الرئيسية":"Home"}</Link>
            <span style={S.crumbSep}>›</span>
            <span style={S.crumbCurrent}>{ar?"الوجهات":"Routes"}</span>
          </nav>

          <span className="badge-gold">{ar?"الوجهات الشائعة":"Popular Routes"}</span>

          <h1 style={S.heroH1}>
            {ar
              ? <><span style={{color:"#0C58D1"}}>جميع وجهات التاكسي</span> من الدمام</>
              : <>All Taxi Routes <span style={{color:"#0C58D1"}}>from Dammam</span></>
            }
          </h1>
          <p style={S.heroP}>
            {ar
              ? "تاكسي خاص وفاخر إلى دول الخليج، المدن السعودية، ومن مطار الملك فهد — أسعار ثابتة، سائقون محترفون."
              : "private taxi to GCC countries, Saudi cities & from King Fahd Airport — fixed prices, professional drivers."}
          </p>

          {/* Stats */}
          <div style={S.statsRow}>
            {[
              {n:`${routesData.length}+`, en:"Routes",         ar:"وجهة"},
              {n:"4",                      en:"Vehicle Classes", ar:"فئة سيارة"},
              {n:"24/7",                   en:"Available",       ar:"متاح"},
              {n:"SAR",                    en:"Fixed Rates",     ar:"أسعار ثابتة"},
            ].map((s,i)=>(
              <div key={i} style={S.stat}>
                <span style={S.statN}>{s.n}</span>
                <span style={S.statL}>{ar?s.ar:s.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured routes ───────────────────────────────────── */}
      {tab==="all" && (
        <section style={S.featSection}>
          <div className="container">
            <h2 style={S.featTitle}>
              {ar?"الوجهات الأكثر طلباً":"Most Popular Routes"}
            </h2>
            <div style={S.featGrid}>
              {featured.map(r=>(
                <FeaturedCard key={r.slug} route={r} ar={ar} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Sticky tabs ───────────────────────────────────────── */}
      <div style={S.tabsWrap}>
        <div className="container" style={S.tabsInner}>
          {tabs.map(t=>(
            <button
              key={t.id}
              onClick={()=>setTab(t.id)}
              style={{...S.tabBtn,...(tab===t.id?S.tabActive:{})}}
            >
              <span>{ar?t.ar:t.en}</span>
              <span style={{...S.tabBadge,...(tab===t.id?S.tabBadgeActive:{})}}>{t.n}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Route list ────────────────────────────────────────── */}
      <section style={S.listSection}>
        <div className="container">
          {tab==="all" ? (
            <>
              <CatSection
                titleEn="International GCC Routes"  titleAr="رحلات دول الخليج الدولية"
                descEn="Cross-border transfers to Bahrain, Kuwait, UAE, Qatar & Oman with full customs support."
                descAr="توصيل عبر الحدود إلى البحرين والكويت والإمارات وقطر وعُمان مع دعم جمركي كامل."
                cat="gcc" routes={routesData.filter(r=>GCC_SLUGS.includes(r.slug))} ar={ar}
              />
              <CatSection
                titleEn="Saudi City Routes"  titleAr="رحلات المدن السعودية"
                descEn="Intercity highway transfers to Riyadh, Jeddah, Madinah, Mecca and more."
                descAr="توصيل سريع بين المدن إلى الرياض وجدة والمدينة ومكة وغيرها."
                cat="saudi" routes={routesData.filter(r=>SAUDI_SLUGS.includes(r.slug))} ar={ar}
              />
              <CatSection
                titleEn="Dammam Airport Transfers"  titleAr="توصيل من مطار الدمام"
                descEn="Fast pickups from King Fahd International Airport (DMM) to all Eastern Province destinations."
                descAr="استقبال سريع من مطار الملك فهد الدولي إلى جميع وجهات المنطقة الشرقية."
                cat="airport" routes={routesData.filter(r=>AIRPORT_SLUGS.includes(r.slug))} ar={ar}
              />
            </>
          ) : (
            <div style={S.grid}>
              {routes.map(r=><RouteCard key={r.slug} route={r} ar={ar}/>)}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section style={S.cta}>
        <div className="container" style={S.ctaInner}>
          <div style={S.ctaText}>
            <h2 style={S.ctaH2}>{ar?"لم تجد وجهتك؟":"Don't see your destination?"}</h2>
            <p style={S.ctaP}>
              {ar
                ? "تواصل معنا عبر واتساب وسنرتب رحلتك فوراً — أي وجهة، أي وقت."
                : "Message us on WhatsApp — we cover any destination, any time."}
            </p>
          </div>
          <Link href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={S.ctaBtn}>
            <WaIcon/> {ar?"احجز عبر واتساب":"Book via WhatsApp"}
          </Link>
        </div>
      </section>

      <Footer/>
      <StickyCTA/>
    </div>
  );
}

/* ── Featured card ─────────────────────────────────────────────── */
function FeaturedCard({route,ar}:{route:typeof routesData[0];ar:boolean}){
  const [hov,setHov]=useState(false);
  const cat=getCat(route.slug);
  const cfg=CAT[cat];
  return (
    <Link
      href={`/routes/${route.slug}`}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        ...S.featCard,
        borderColor: hov?cfg.color:"var(--border-color)",
        boxShadow: hov?`0 8px 30px rgba(0,0,0,0.5),0 0 0 1px ${cfg.color}50`:"var(--shadow-sm)",
        transform: hov?"translateY(-4px)":"none",
        textDecoration:"none",
      }}
    >
      <div style={{...S.featTop,backgroundColor:cfg.bg}}>
        <span style={{...S.featCat,color:cfg.color}}>{ar?cfg.label_ar:cfg.label_en}</span>
      </div>
      <div style={S.featBody}>
        <h3 style={S.featName}>{ar?route.name.ar:route.name.en}</h3>
        <div style={S.featMeta}>
          <span style={S.featPill}>{ar?route.distance.ar:route.distance.en}</span>
          <span style={S.featPill}>{ar?route.duration.ar:route.duration.en}</span>
        </div>
        <span style={{...S.featArrow,color:cfg.color}}>
          {ar?"عرض التفاصيل ←":"View Details →"}
        </span>
      </div>
    </Link>
  );
}

/* ── Category section ──────────────────────────────────────────── */
function CatSection({titleEn,titleAr,descEn,descAr,cat,routes,ar}:{
  titleEn:string;titleAr:string;descEn:string;descAr:string;
  cat:"gcc"|"saudi"|"airport";routes:typeof routesData;ar:boolean;
}){
  const cfg=CAT[cat];
  return (
    <div style={S.catBlock}>
      {/* Section header */}
      <div style={{...S.catHeader,borderLeftColor:cfg.color}}>
        <div style={S.catHeaderLeft}>
          <div>
            <h2 style={S.catTitle}>{ar?titleAr:titleEn}</h2>
            <p style={S.catDesc}>{ar?descAr:descEn}</p>
          </div>
        </div>
        <span style={{...S.catCount,color:cfg.color,borderColor:`${cfg.color}40`,background:cfg.bg}}>
          {routes.length} {ar?"وجهة":"routes"}
        </span>
      </div>
      {/* Route list */}
      <div style={S.routeList}>
        {routes.map(r=><RouteCard key={r.slug} route={r} ar={ar}/>)}
      </div>
    </div>
  );
}

/* ── Route card ────────────────────────────────────────────────── */
function RouteCard({route,ar}:{route:typeof routesData[0];ar:boolean}){
  const [hov,setHov]=useState(false);
  const cat=getCat(route.slug);
  const cfg=CAT[cat];
  const intro=ar?route.intro.ar:route.intro.en;

  return (
    <div
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        ...S.card,
        borderColor: hov?cfg.color:"var(--border-color)",
        boxShadow: hov?`0 4px 20px rgba(0,0,0,0.4),0 0 0 1px ${cfg.color}40`:"none",
      }}
    >
      {/* Middle: info */}
      <div style={S.cardInfo}>
        <div style={S.cardTopRow}>
          <span style={{...S.cardCatChip,color:cfg.color,backgroundColor:cfg.bg}}>
            {ar?cfg.label_ar:cfg.label_en}
          </span>
        </div>
        <h3 style={S.cardTitle}>{ar?route.name.ar:route.name.en}</h3>
        <p style={S.cardIntro}>
          {intro.length>100?intro.slice(0,100).trimEnd()+"…":intro}
        </p>
        <div style={S.cardMeta}>
          <span style={S.cardMetaBadge}>{ar?route.distance.ar:route.distance.en}</span>
          <span style={S.cardMetaBadge}>{ar?route.duration.ar:route.duration.en}</span>
        </div>
      </div>

      {/* Right: CTAs */}
      <div style={{...S.cardCtas,opacity:hov?1:0.6,transform:hov?"translateX(0)":"translateX(4px)"}}>
        <Link
          href={`/routes/${route.slug}`}
          style={{...S.btnDetails,borderColor:cfg.color,color:cfg.color}}
        >
          {ar?"التفاصيل":"Details"}
        </Link>
        <Link
          href={`https://wa.me/966569487569?text=${encodeURIComponent(ar?`أريد حجز: ${route.name.ar}`:`Book: ${route.name.en}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={S.btnBook}
        >
          {ar?"احجز":"Book"}
        </Link>
      </div>
    </div>
  );
}

/* ── WhatsApp icon ─────────────────────────────────────────────── */
function WaIcon(){
  return(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.277-1.497A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.492-5.19-1.352l-.374-.222-3.726.888.944-3.638-.244-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

/* ── Styles ─────────────────────────────────────────────────────── */
const S: Record<string,React.CSSProperties> = {
  /* Hero */
  hero: {
    background: "radial-gradient(ellipse at 60% 30%, rgba(40,30,0,0.95) 0%, #080808 70%)",
    padding: "4.5rem 0 3rem",
    borderBottom: "1px solid var(--border-color)",
  },
  heroInner: { display:"flex", flexDirection:"column", gap:"1.2rem" },
  crumb:     { display:"flex", alignItems:"center", gap:"0.4rem", fontSize:"0.8rem" },
  crumbLink: { color:"var(--text-muted)", textDecoration:"none" },
  crumbSep:  { color:"var(--text-muted)" },
  crumbCurrent: { color:"#0C58D1", fontWeight:600 },
  heroH1: {
    fontSize:"clamp(1.2rem,2.5vw,1.9rem)", fontWeight:800,
    color: "var(--text-primary)", lineHeight:1.15, maxWidth:"700px",
  },
  heroP: {
    fontSize:"1.05rem", color:"var(--text-secondary)",
    maxWidth:"600px", lineHeight:1.7,
  },
  statsRow: {
    display:"flex", gap:"0", marginTop:"0.5rem",
    border:"1px solid var(--border-color)", borderRadius:"10px",
    overflow:"hidden", backgroundColor:"var(--bg-secondary)",
    width:"fit-content",
  },
  stat: {
    display:"flex", flexDirection:"column", alignItems:"center",
    padding:"1rem 2rem", gap:"0.15rem",
    borderRight:"1px solid var(--border-color)",
  },
  statN: { fontSize:"1.5rem", fontWeight:800, color:"#0C58D1" },
  statL: { fontSize:"0.7rem", color:"var(--text-secondary)", textTransform:"uppercase", letterSpacing:"0.05em", whiteSpace:"nowrap" },

  /* Featured */
  featSection: {
    backgroundColor:"var(--bg-secondary)",
    borderBottom:"1px solid var(--border-color)",
    padding:"2.5rem 0",
  },
  featTitle: {
    fontSize:"1.15rem", fontWeight:700, color: "var(--text-primary)",
    marginBottom:"1.5rem", display:"flex", alignItems:"center", gap:"0.5rem",
  },
  featGrid: {
    display:"grid",
    gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",
    gap:"1rem",
  },
  featCard: {
    display:"flex", flexDirection:"column",
    backgroundColor:"var(--bg-tertiary)",
    border:"1px solid var(--border-color)",
    borderRadius:"12px", overflow:"hidden",
    transition:"all 0.25s ease", cursor:"pointer",
  },
  featTop: {
    display:"flex", justifyContent:"space-between", alignItems:"center",
    padding:"0.85rem 1.2rem",
  },
  featFlag: { fontSize:"2rem" },
  featCat:  { fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.04em" },
  featBody: { padding:"1rem 1.2rem", display:"flex", flexDirection:"column", gap:"0.6rem" },
  featName: { fontSize:"0.95rem", fontWeight:700, color: "var(--text-primary)", lineHeight:1.4 },
  featMeta: { display:"flex", gap:"0.4rem", flexWrap:"wrap" },
  featPill: {
    fontSize:"0.72rem", color:"var(--text-secondary)",
    backgroundColor: "rgba(255, 255, 255, 0.1)", border:"1px solid var(--border-color)",
    padding:"0.2rem 0.5rem", borderRadius:"4px",
  },
  featArrow: { fontSize:"0.8rem", fontWeight:700, marginTop:"0.25rem" },

  /* Tabs */
  tabsWrap: {
    backgroundColor:"var(--bg-secondary)",
    borderBottom:"1px solid var(--border-color)",
    padding:"0.9rem 0",
    position:"sticky", top:"60px", zIndex:40,
  },
  tabsInner: {
    display:"flex", gap:"0.5rem", flexWrap:"wrap",
  },
  tabBtn: {
    display:"flex", alignItems:"center", gap:"0.45rem",
    padding:"0.5rem 1.1rem",
    borderRadius:"50px", border:"1px solid var(--border-color)",
    background:"transparent", color:"var(--text-secondary)",
    cursor:"pointer", fontSize:"0.85rem", fontWeight:500,
    transition:"all 0.18s",
  },
  tabActive: {
    background:"#0C58D1", borderColor:"#0C58D1",
    color:"#000", fontWeight:700,
  },
  tabBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", color:"var(--text-muted)",
    fontSize:"0.7rem", fontWeight:700, padding:"0.1rem 0.45rem",
    borderRadius:"20px",
  },
  tabBadgeActive: { backgroundColor:"rgba(0,0,0,0.2)", color:"#000" },

  /* List section */
  listSection: { flex:1, padding:"3rem 0" },

  /* Category section */
  catBlock: { marginBottom:"3rem" },
  catHeader: {
    display:"flex", justifyContent:"space-between", alignItems:"flex-start",
    borderLeft:"4px solid", paddingLeft:"1rem", marginBottom:"1.5rem",
    gap:"1rem",
  },
  catHeaderLeft: { display:"flex", alignItems:"flex-start", gap:"0.75rem" },
  catIcon: { fontSize:"1.6rem", lineHeight:1, marginTop:"2px" },
  catTitle: { fontSize:"1.2rem", fontWeight:700, color: "var(--text-primary)", marginBottom:"0.3rem" },
  catDesc:  { fontSize:"0.83rem", color:"var(--text-secondary)", lineHeight:1.5, maxWidth:"500px" },
  catCount: {
    fontSize:"0.75rem", fontWeight:700, padding:"0.25rem 0.75rem",
    borderRadius:"20px", border:"1px solid", flexShrink:0, marginTop:"4px",
  },
  routeList: { display:"flex", flexDirection:"column", gap:"0.65rem" },

  /* Grid (filtered mode) */
  grid: {
    display:"grid",
    gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",
    gap:"0.75rem",
  },

  /* Route card (list item) */
  card: {
    display:"flex", alignItems:"center", gap:"0",
    backgroundColor:"var(--bg-secondary)",
    border:"1px solid var(--border-color)",
    borderRadius:"10px", overflow:"hidden",
    transition:"border-color 0.2s, box-shadow 0.2s",
    cursor:"default",
  },
  cardFlag: {
    width:"72px", flexShrink:0,
    display:"flex", alignItems:"center", justifyContent:"center",
    alignSelf:"stretch",
  },
  cardFlagEmoji: { fontSize:"1.8rem" },
  cardInfo: {
    flex:1, padding:"1rem 1.1rem", display:"flex",
    flexDirection:"column", gap:"0.4rem",
    borderRight:"1px solid var(--border-color)",
    minWidth:0,
  },
  cardTopRow: { display:"flex", alignItems:"center", gap:"0.5rem" },
  cardCatChip: {
    fontSize:"0.68rem", fontWeight:700, padding:"0.15rem 0.5rem",
    borderRadius:"20px", letterSpacing:"0.04em",
  },
  cardTitle: {
    fontSize:"0.97rem", fontWeight:700, color: "var(--text-primary)",
    lineHeight:1.35, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
  },
  cardIntro: {
    fontSize:"0.78rem", color:"var(--text-secondary)",
    lineHeight:1.5, display:"-webkit-box", overflow:"hidden",
  },
  cardMeta: { display:"flex", gap:"0.4rem", flexWrap:"wrap" },
  cardMetaBadge: {
    fontSize:"0.72rem", color:"var(--text-secondary)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border:"1px solid var(--border-color)",
    padding:"0.18rem 0.5rem", borderRadius:"4px",
  },
  cardCtas: {
    display:"flex", flexDirection:"column", gap:"0.5rem",
    padding:"0.9rem 1.1rem", flexShrink:0,
    transition:"opacity 0.2s, transform 0.2s",
  },
  btnDetails: {
    padding:"0.45rem 1rem", borderRadius:"6px",
    border:"1.5px solid", fontSize:"0.78rem", fontWeight:700,
    textDecoration:"none", textAlign:"center",
    backgroundColor:"transparent",
    whiteSpace:"nowrap",
  },
  btnBook: {
    padding:"0.45rem 1rem", borderRadius:"6px",
    backgroundColor:"#25d366", color: "var(--text-primary)",
    fontSize:"0.78rem", fontWeight:700,
    textDecoration:"none", textAlign:"center",
    whiteSpace:"nowrap",
  },

  /* Bottom CTA */
  cta: {
    background:"#ffffff", borderTop:"1px solid #e5e7eb", borderBottom:"1px solid #e5e7eb",
    padding:"3.5rem 0",
  },
  ctaInner: {
    display:"flex", justifyContent:"space-between",
    alignItems:"center", gap:"2rem", flexWrap:"wrap",
  },
  ctaText: {},
  ctaH2: { fontSize:"1.6rem", fontWeight:800, color: "#000000", marginBottom:"0.4rem" },
  ctaP:  { color: "#333333", fontSize:"0.95rem" },
  ctaBtn: {
    display:"inline-flex", alignItems:"center", gap:"0.6rem",
    padding:"0.9rem 2rem", borderRadius:"8px",
    backgroundColor: "#25d366", color:"#ffffff",
    fontSize:"1rem", fontWeight:700, textDecoration:"none",
    flexShrink:0, whiteSpace:"nowrap",
  },
};
