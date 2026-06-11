/**
 * DAMMAM AIRPORT TAXI — COMPLETE TOPICAL MAP
 *
 * Architecture: Core Entity → Pillar Pages → Cluster Pages → Supporting Pages
 *
 * NLP Entities (for GEO / AI Search optimization):
 *   - Primary Entity: Dammam Airport Taxi (TaxiService)
 *   - Location Entities: Dammam, Eastern Province, Saudi Arabia, KSA
 *   - Airport Entity: King Fahd International Airport, DMM, IATA DMM
 *   - GCC Entities: Bahrain, Kuwait, UAE, Qatar, Oman
 *   - Corporate Entities: Saudi Aramco, SABIC, RCJY, KFUPM
 *   - Infrastructure: King Fahd Causeway, Al Batha Border, Khafji Border, Salwa Border
 *
 * Semantic Keyword Clusters:
 *   - Airport Transfer: "airport taxi", "airport pickup", "meet and greet", "flight tracking"
 *   - Cross-border: "GCC border crossing", "cross-border taxi", "causeway taxi"
 *   - Corporate: "corporate chauffeur", "executive transfer", "Aramco taxi"
 *   - Tourism: "tourist taxi", "day trip", "weekend getaway"
 *
 * Schema Types Used:
 *   - TaxiService (root entity on every page)
 *   - LocalBusiness (layout.tsx)
 *   - City (dedicated city pages)
 *   - FAQPage (FAQ, route, city pages)
 *   - BreadcrumbList (all inner pages)
 *   - ItemList (tourist-destinations, dammam-guide)
 *   - HowTo (gcc-border-crossing)
 */

// ─── TYPE DEFINITIONS ──────────────────────────────────────────

export interface RelatedPage {
  url: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  icon: string;
}

export interface TopicalCluster {
  id: string;
  pillarUrl: string;
  pillarTitle: { en: string; ar: string };
  intent: "transactional" | "informational" | "navigational";
  nlpEntities: string[];
  schemaTypes: string[];
  clusterUrls: string[];
}

// ─── FULL TOPICAL CLUSTER ARCHITECTURE ─────────────────────────

export const topicalClusters: TopicalCluster[] = [
  {
    id: "airport-local",
    pillarUrl: "/dammam-airport-guide",
    pillarTitle: { en: "Dammam Airport (DMM) Transfer Guide", ar: "دليل توصيل مطار الدمام" },
    intent: "transactional",
    nlpEntities: ["King Fahd International Airport", "DMM", "IATA DMM", "Arrivals Hall", "Meet & Greet"],
    schemaTypes: ["FAQPage", "HowTo", "BreadcrumbList"],
    clusterUrls: [
      "/routes/dammam-airport-to-dammam-city",
      "/routes/dammam-airport-to-khobar",
      "/routes/dammam-airport-to-jubail",
      "/routes/dammam-airport-to-dhahran",
      "/routes/dammam-airport-to-hofuf",
      "/routes/dammam-airport-to-qatif",
      "/routes/dammam-airport-to-ras-tanura",
      "/routes/dammam-airport-to-half-moon-bay",
      "/routes/dammam-airport-to-bahrain-airport",
    ],
  },
  {
    id: "gcc-border",
    pillarUrl: "/gcc-border-crossing",
    pillarTitle: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
    intent: "informational",
    nlpEntities: ["King Fahd Causeway", "Khafji Border", "Al Batha Border", "Ghuwaifat", "Salwa Border", "Abu Samra", "GCC National ID", "Exit Re-entry Visa"],
    schemaTypes: ["FAQPage", "HowTo", "BreadcrumbList"],
    clusterUrls: [
      "/routes/dammam-to-bahrain",
      "/routes/dammam-to-kuwait",
      "/routes/dammam-to-uae",
      "/routes/dammam-to-abu-dhabi",
      "/routes/dammam-to-sharjah",
      "/routes/dammam-to-ajman",
      "/routes/dammam-to-ras-al-khaimah",
      "/routes/dammam-to-doha",
      "/routes/dammam-to-muscat",
      "/routes/dammam-airport-to-qatar-border",
    ],
  },
  {
    id: "saudi-intercity",
    pillarUrl: "/",
    pillarTitle: { en: "Saudi Arabia Intercity Taxi from Dammam", ar: "تاكسي بين المدن السعودية من الدمام" },
    intent: "transactional",
    nlpEntities: ["Saudi Highway Network", "Saudi Transport General Authority", "Riyadh", "Jeddah", "Madinah", "Mecca", "Qassim", "Taif", "Abha", "Tabuk", "Hail", "Yanbu"],
    schemaTypes: ["TaxiService", "FAQPage", "BreadcrumbList"],
    clusterUrls: [
      "/routes/dammam-to-riyadh",
      "/routes/dammam-to-jeddah",
      "/routes/dammam-to-madinah",
      "/routes/dammam-to-mecca",
      "/routes/dammam-to-qassim",
      "/routes/dammam-to-taif",
      "/routes/dammam-to-yanbu",
      "/routes/dammam-to-abha",
      "/routes/dammam-to-tabuk",
      "/routes/dammam-to-hail",
    ],
  },
  {
    id: "eastern-province-cities",
    pillarUrl: "/dammam-guide",
    pillarTitle: { en: "Eastern Province City Guide", ar: "دليل مدن المنطقة الشرقية" },
    intent: "informational",
    nlpEntities: ["Eastern Province", "Al Khobar", "Jubail Industrial City", "Dhahran", "Saudi Aramco", "Qatif", "Tarout Island", "Hofuf", "Al-Ahsa Oasis", "Ras Tanura", "Abqaiq", "Half Moon Bay"],
    schemaTypes: ["City", "FAQPage", "BreadcrumbList", "ItemList"],
    clusterUrls: [
      "/al-khobar",
      "/jubail",
      "/dhahran",
      "/qatif",
      "/hofuf-al-ahsa",
      "/ras-tanura",
      "/half-moon-bay",
      "/abqaiq",
    ],
  },
  {
    id: "corporate",
    pillarUrl: "/corporate-transfers",
    pillarTitle: { en: "Corporate Transfer Services", ar: "خدمات نقل الشركات" },
    intent: "transactional",
    nlpEntities: ["Saudi Aramco", "SABIC", "RCJY", "Royal Commission Jubail", "KFUPM", "Corporate Invoice", "Monthly Billing", "Executive Chauffeur"],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    clusterUrls: [
      "/routes/dammam-airport-to-jubail",
      "/routes/dammam-airport-to-dhahran",
      "/routes/dammam-airport-to-ras-tanura",
      "/routes/dammam-to-riyadh",
      "/fleet",
      "/jubail",
      "/dhahran",
    ],
  },
  {
    id: "gcc-tourism",
    pillarUrl: "/tourist-destinations",
    pillarTitle: { en: "GCC Tourist Destinations from Dammam", ar: "الوجهات السياحية الخليجية من الدمام" },
    intent: "informational",
    nlpEntities: ["Souq Waqif", "Burj Khalifa", "Sheikh Zayed Grand Mosque", "Bahrain Fort", "King Fahd Causeway", "Pearl Qatar", "Ferrari World", "Mutrah Souq"],
    schemaTypes: ["ItemList", "FAQPage", "BreadcrumbList"],
    clusterUrls: [
      "/routes/dammam-to-bahrain",
      "/routes/dammam-to-doha",
      "/routes/dammam-to-kuwait",
      "/routes/dammam-to-uae",
      "/routes/dammam-to-abu-dhabi",
      "/routes/dammam-to-sharjah",
      "/routes/dammam-to-muscat",
    ],
  },
];

// ─── RELATED PAGES MAP (used by RelatedRoutes component) ────────

export const relatedPagesMap: Record<string, RelatedPage[]> = {

  // ── HOMEPAGE ────────────────────────────────────────────────────
  "/": [
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "Documents, fees & process for all Saudi-GCC borders", ar: "الوثائق والرسوم وإجراءات جميع الحدود الخليجية" }, icon: "🛂" },
    { url: "/tourist-destinations", title: { en: "GCC Tourist Destinations", ar: "الوجهات السياحية الخليجية" }, description: { en: "All GCC tourist spots reachable from Dammam", ar: "جميع وجهات السياحة الخليجية من الدمام" }, icon: "🗺️" },
    { url: "/corporate-transfers", title: { en: "Corporate Transfers", ar: "نقل الشركات" }, description: { en: "Monthly invoicing for Aramco, SABIC & RCJY", ar: "فوترة شهرية لأرامكو وسابك والهيئة الملكية" }, icon: "💼" },
    { url: "/voice-search-faqs", title: { en: "Taxi FAQ Hub", ar: "مركز الأسئلة الشائعة" }, description: { en: "All fares, distances & booking questions answered", ar: "كل الأسعار والمسافات وأسئلة الحجز مجاب عنها" }, icon: "❓" },
  ],

  // ── DAMMAM DISTRICTS ─────────────────────────────────────────────
  "/dammam/al-faisaliyah": [
    { url: "/dammam/al-shati",  title: { en: "Taxi to Al Shati",   ar: "تاكسي إلى حي الشاطئ" },  description: { en: "Coastal district — 42 km from airport", ar: "الحي الساحلي — ٤٢ كم من المطار" }, icon: "🏘️" },
    { url: "/dammam/al-rawdah", title: { en: "Taxi to Al Rawdah",  ar: "تاكسي إلى حي الروضة" },  description: { en: "Central Dammam — 35 km from airport", ar: "وسط الدمام — ٣٥ كم من المطار" }, icon: "🏘️" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Khobar", ar: "المطار → الخبر" }, description: { en: "45 min · 60 km · from 150 SAR", ar: "٤٥ دقيقة · ٦٠ كم · من ١٥٠ ريال" }, icon: "🏙️" },
  ],
  "/dammam/al-shati": [
    { url: "/dammam/al-faisaliyah", title: { en: "Taxi to Al Faisaliyah", ar: "تاكسي إلى حي الفيصلية" }, description: { en: "Established district — 38 km from airport", ar: "حي راسخ — ٣٨ كم من المطار" }, icon: "🏘️" },
    { url: "/dammam/dammam-corniche", title: { en: "Dammam Corniche", ar: "كورنيش الدمام" }, description: { en: "30 km Arabian Gulf waterfront", ar: "٣٠ كم على الخليج العربي" }, icon: "🌊" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Khobar", ar: "المطار → الخبر" }, description: { en: "45 min · from 150 SAR", ar: "٤٥ دقيقة · من ١٥٠ ريال" }, icon: "🏙️" },
  ],
  "/dammam/sheraton-dammam": [
    { url: "/dammam/wyndham-garden-dammam", title: { en: "Wyndham Garden Dammam", ar: "وينداهم جاردن الدمام" }, description: { en: "Business hotel — from 125 SAR", ar: "فندق أعمال — من ١٢٥ ريال" }, icon: "🏨" },
    { url: "/dammam/novotel-dammam",        title: { en: "Novotel Dammam",          ar: "نوفوتيل الدمام" },          description: { en: "Business Park hotel — from 128 SAR", ar: "فندق بيزنس بارك — من ١٢٨ ريال" }, icon: "🏨" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Khobar",  ar: "المطار → الخبر" }, description: { en: "Continue to Khobar hotels", ar: "تابع إلى فنادق الخبر" }, icon: "🏙️" },
  ],
  "/dammam/wyndham-garden-dammam": [
    { url: "/dammam/sheraton-dammam",   title: { en: "Sheraton Dammam",  ar: "شيراتون الدمام" },   description: { en: "5-star hotel — from 130 SAR",  ar: "فندق خمس نجوم — من ١٣٠ ريال" }, icon: "🏨" },
    { url: "/dammam/novotel-dammam",    title: { en: "Novotel Dammam",   ar: "نوفوتيل الدمام" },   description: { en: "Business hotel — from 128 SAR", ar: "فندق أعمال — من ١٢٨ ريال" }, icon: "🏨" },
    { url: "/corporate-transfers",      title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Monthly billing for regular travellers", ar: "فاتورة شهرية للمسافرين المنتظمين" }, icon: "💼" },
  ],
  "/dammam/king-fahad-specialist-hospital": [
    { url: "/dammam/dammam-medical-complex",     title: { en: "Dammam Medical Complex",     ar: "المجمع الطبي الدمام" },      description: { en: "Public hospital — from 112 SAR", ar: "مستشفى حكومي — من ١١٢ ريال" }, icon: "🏥" },
    { url: "/dammam/king-fahd-university-hospital", title: { en: "King Fahd University Hospital", ar: "مستشفى الملك فهد الجامعي" }, description: { en: "Tertiary hospital — from 145 SAR", ar: "مستشفى جامعي — من ١٤٥ ريال" }, icon: "🏥" },
    { url: "/routes/dammam-airport-to-khobar",   title: { en: "Airport Transfer",           ar: "توصيل من المطار" },           description: { en: "From King Fahd Airport to Dammam hospitals", ar: "من مطار الملك فهد إلى مستشفيات الدمام" }, icon: "✈️" },
  ],
  "/dammam/dammam-corniche": [
    { url: "/dammam/half-moon-beach",       title: { en: "Half Moon Beach",        ar: "شاطئ نصف القمر" },        description: { en: "88 km · scenic coastal day trip",   ar: "٨٨ كم · رحلة يومية ساحلية جميلة" }, icon: "🏖️" },
    { url: "/dammam/king-fahd-park-dammam", title: { en: "King Fahd Park",          ar: "حديقة الملك فهد" },        description: { en: "Largest park in Dammam",             ar: "أكبر حديقة في الدمام" }, icon: "🌳" },
    { url: "/tourist-destinations",         title: { en: "All Tourist Destinations", ar: "جميع الوجهات السياحية" }, description: { en: "Compare all GCC tourist spots",      ar: "قارن كل الوجهات السياحية الخليجية" }, icon: "🗺️" },
  ],
  "/dammam/half-moon-beach": [
    { url: "/dammam/dammam-corniche",       title: { en: "Dammam Corniche",        ar: "كورنيش الدمام" },         description: { en: "30 km waterfront promenade",          ar: "كورنيش بحري ٣٠ كم" }, icon: "🌊" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Khobar",   ar: "المطار → الخبر" },        description: { en: "Closest airport transfer to Half Moon Bay", ar: "أقرب توصيل مطار لخليج نصف القمر" }, icon: "🏙️" },
    { url: "/tourist-destinations",         title: { en: "GCC Tourist Destinations", ar: "الوجهات السياحية" }, description: { en: "All destinations from Dammam",         ar: "جميع الوجهات من الدمام" }, icon: "🗺️" },
  ],
  "/dammam/aramco-dammam": [
    { url: "/corporate-transfers",               title: { en: "Corporate Transfer Service",    ar: "خدمات نقل الشركات" },     description: { en: "Monthly billing for Aramco contractors",   ar: "فاتورة شهرية لمقاولي أرامكو" }, icon: "💼" },
    { url: "/routes/dammam-airport-to-dhahran",  title: { en: "Airport → Aramco Dhahran HQ", ar: "المطار → أرامكو الظهران" }, description: { en: "55 km · 40 min · from 150 SAR",           ar: "٥٥ كم · ٤٠ دقيقة · من ١٥٠ ريال" }, icon: "🏢" },
    { url: "/routes/dammam-airport-to-jubail",   title: { en: "Airport → Jubail",             ar: "المطار → الجبيل" },         description: { en: "85 km · Jubail Aramco · from 200 SAR",    ar: "٨٥ كم · أرامكو الجبيل · من ٢٠٠ ريال" }, icon: "🏭" },
  ],
  "/voice-search-faqs": [
    { url: "/routes",          title: { en: "All Routes",          ar: "جميع الوجهات" },       description: { en: "Browse all 22+ taxi routes from Dammam",    ar: "تصفح جميع وجهات التاكسي من الدمام" }, icon: "🗺️" },
    { url: "/fleet",           title: { en: "Our Fleet",           ar: "أسطولنا" },             description: { en: "Sedan, SUV, Van & Luxury class options",     ar: "سيدان، SUV، فان وفئة فاخرة" }, icon: "🚗" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Guide", ar: "دليل حدود الخليج" },  description: { en: "Documents & process for Saudi-GCC crossings", ar: "وثائق وإجراءات عبور حدود الخليج" }, icon: "🛂" },
  ],

  // ── DAMMAM GUIDE ────────────────────────────────────────────────
  "/dammam-guide": [
    { url: "/al-khobar", title: { en: "Al Khobar", ar: "الخبر" }, description: { en: "King Fahd Causeway, Corniche & Half Moon Bay access", ar: "جسر الملك فهد، الكورنيش وخليج نصف القمر" }, icon: "🌊" },
    { url: "/jubail", title: { en: "Jubail Industrial City", ar: "مدينة الجبيل الصناعية" }, description: { en: "Aramco, SABIC & RCJY corporate transfers", ar: "توصيل أرامكو وسابك والهيئة الملكية" }, icon: "🏭" },
    { url: "/dhahran", title: { en: "Dhahran (Aramco HQ)", ar: "الظهران (مقر أرامكو)" }, description: { en: "Saudi Aramco compound & KFUPM transfers", ar: "توصيل مجمع أرامكو وجامعة الملك فهد" }, icon: "🏢" },
    { url: "/qatif", title: { en: "Qatif & Tarout Island", ar: "القطيف وجزيرة تاروت" }, description: { en: "6,000-year heritage city & Dilmun archaeological sites", ar: "مدينة تاريخية ٦٠٠٠ سنة ومواقع دلمون الأثرية" }, icon: "🏰" },
    { url: "/hofuf-al-ahsa", title: { en: "Hofuf / Al-Ahsa (UNESCO)", ar: "الهفوف / الأحساء (يونسكو)" }, description: { en: "World's largest oasis — UNESCO World Heritage 2018", ar: "أكبر واحة في العالم — التراث العالمي لليونسكو ٢٠١٨" }, icon: "🌴" },
    { url: "/ras-tanura", title: { en: "Ras Tanura", ar: "رأس تنورة" }, description: { en: "Saudi Aramco's largest oil export terminal", ar: "أكبر محطة تصدير نفط لأرامكو السعودية" }, icon: "🛢️" },
    { url: "/half-moon-bay", title: { en: "Half Moon Bay", ar: "خليج نصف القمر" }, description: { en: "Eastern Province's premier beach resort", ar: "أشهر منتجع شاطئي بالمنطقة الشرقية" }, icon: "🏖️" },
    { url: "/abqaiq", title: { en: "Abqaiq (Al-Buqayq)", ar: "أبقيق (البقيق)" }, description: { en: "World's largest oil processing facility", ar: "أكبر منشأة معالجة نفط في العالم" }, icon: "⚙️" },
  ],

  // ── EASTERN PROVINCE CITY PAGES ─────────────────────────────────
  "/al-khobar": [
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Complete Eastern Province travel guide", ar: "دليل سفر شامل للمنطقة الشرقية" }, icon: "🏙️" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Al Khobar", ar: "المطار ← الخبر" }, description: { en: "60 km · 45 min · Meet & Greet at DMM", ar: "٦٠ كم · ٤٥ دقيقة · استقبال في المطار" }, icon: "✈️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Khobar → Bahrain", ar: "الخبر ← البحرين" }, description: { en: "65 km via King Fahd Causeway", ar: "٦٥ كم عبر جسر الملك فهد" }, icon: "🇧🇭" },
    { url: "/routes/dammam-airport-to-half-moon-bay", title: { en: "Khobar → Half Moon Bay", ar: "الخبر ← خليج نصف القمر" }, description: { en: "35 km south of Khobar · Eastern Province beach", ar: "٣٥ كم جنوب الخبر · شاطئ المنطقة الشرقية" }, icon: "🏖️" },
    { url: "/dhahran", title: { en: "Dhahran (Aramco HQ)", ar: "الظهران (أرامكو)" }, description: { en: "15 km from Khobar · Saudi Aramco compound", ar: "١٥ كم من الخبر · مجمع أرامكو" }, icon: "🏢" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing", ar: "عبور حدود الخليج" }, description: { en: "Causeway & all GCC border guide", ar: "دليل الجسر وجميع حدود الخليج" }, icon: "🛂" },
  ],

  "/jubail": [
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Eastern Province complete travel guide", ar: "دليل سفر شامل للمنطقة الشرقية" }, icon: "🏙️" },
    { url: "/routes/dammam-airport-to-jubail", title: { en: "Airport → Jubail", ar: "المطار ← الجبيل" }, description: { en: "85 km · 55 min · Direct transfer from DMM", ar: "٨٥ كم · ٥٥ دقيقة · توصيل مباشر من المطار" }, icon: "✈️" },
    { url: "/corporate-transfers", title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Monthly invoicing for all Jubail companies", ar: "فوترة شهرية لجميع شركات الجبيل" }, icon: "💼" },
    { url: "/dhahran", title: { en: "Dhahran (Aramco HQ)", ar: "الظهران (أرامكو)" }, description: { en: "55 km · Saudi Aramco global headquarters", ar: "٥٥ كم · المقر العالمي لأرامكو السعودية" }, icon: "🏢" },
    { url: "/ras-tanura", title: { en: "Ras Tanura", ar: "رأس تنورة" }, description: { en: "35 km · Aramco oil terminal", ar: "٣٥ كم · محطة نفط أرامكو" }, icon: "🛢️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Jubail → Bahrain", ar: "الجبيل ← البحرين" }, description: { en: "~130 km via King Fahd Causeway", ar: "~١٣٠ كم عبر جسر الملك فهد" }, icon: "🇧🇭" },
  ],

  "/dhahran": [
    { url: "/routes/dammam-airport-to-dhahran", title: { en: "Airport → Dhahran", ar: "المطار ← الظهران" }, description: { en: "55 km · 40 min · Meet & Greet", ar: "٥٥ كم · ٤٠ دقيقة · استقبال في المطار" }, icon: "✈️" },
    { url: "/corporate-transfers", title: { en: "Corporate Transfers", ar: "نقل الشركات" }, description: { en: "Aramco HQ executive accounts & monthly invoicing", ar: "حسابات تنفيذية لأرامكو وفوترة شهرية" }, icon: "💼" },
    { url: "/al-khobar", title: { en: "Al Khobar", ar: "الخبر" }, description: { en: "15 km · Closest city to Dhahran", ar: "١٥ كم · أقرب مدينة للظهران" }, icon: "🏙️" },
    { url: "/jubail", title: { en: "Jubail Industrial City", ar: "الجبيل الصناعية" }, description: { en: "55 km · SABIC & RCJY corporate hub", ar: "٥٥ كم · مركز شركات سابك والهيئة الملكية" }, icon: "🏭" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Dhahran → Bahrain", ar: "الظهران ← البحرين" }, description: { en: "70 km via King Fahd Causeway", ar: "٧٠ كم عبر جسر الملك فهد" }, icon: "🇧🇭" },
  ],

  "/qatif": [
    { url: "/routes/dammam-airport-to-qatif", title: { en: "Airport → Qatif", ar: "المطار ← القطيف" }, description: { en: "55 km · 45 min · Direct DMM transfer", ar: "٥٥ كم · ٤٥ دقيقة · توصيل مباشر من المطار" }, icon: "✈️" },
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Eastern Province complete guide", ar: "دليل المنطقة الشرقية الشامل" }, icon: "🏙️" },
    { url: "/routes/dammam-airport-to-ras-tanura", title: { en: "Qatif → Ras Tanura", ar: "القطيف ← رأس تنورة" }, description: { en: "30 km · Aramco terminal city", ar: "٣٠ كم · مدينة محطة أرامكو" }, icon: "🛢️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Qatif → Bahrain", ar: "القطيف ← البحرين" }, description: { en: "~80 km via King Fahd Causeway", ar: "~٨٠ كم عبر جسر الملك فهد" }, icon: "🇧🇭" },
    { url: "/tourist-destinations", title: { en: "GCC Tourist Destinations", ar: "الوجهات السياحية" }, description: { en: "All GCC tourist spots reachable from Eastern Province", ar: "جميع الوجهات السياحية من المنطقة الشرقية" }, icon: "🗺️" },
  ],

  "/hofuf-al-ahsa": [
    { url: "/routes/dammam-airport-to-hofuf", title: { en: "Airport → Hofuf", ar: "المطار ← الهفوف" }, description: { en: "160 km · 1.5–2 hrs · Direct DMM transfer", ar: "١٦٠ كم · ١.٥-٢ ساعة · توصيل مباشر" }, icon: "✈️" },
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Eastern Province complete guide", ar: "دليل المنطقة الشرقية الشامل" }, icon: "🏙️" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Hofuf → Riyadh", ar: "الهفوف ← الرياض" }, description: { en: "~250 km · 2.5 hrs to Saudi capital", ar: "~٢٥٠ كم · ٢.٥ ساعة للعاصمة" }, icon: "🏛️" },
    { url: "/tourist-destinations", title: { en: "Saudi & GCC Tourism", ar: "السياحة السعودية والخليجية" }, description: { en: "More tourist destinations from Eastern Province", ar: "وجهات سياحية أكثر من المنطقة الشرقية" }, icon: "🗺️" },
  ],

  "/ras-tanura": [
    { url: "/routes/dammam-airport-to-ras-tanura", title: { en: "Airport → Ras Tanura", ar: "المطار ← رأس تنورة" }, description: { en: "75 km · 55 min · Direct DMM transfer", ar: "٧٥ كم · ٥٥ دقيقة · توصيل مباشر" }, icon: "✈️" },
    { url: "/corporate-transfers", title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Monthly invoicing for Aramco Ras Tanura", ar: "فوترة شهرية لأرامكو رأس تنورة" }, icon: "💼" },
    { url: "/jubail", title: { en: "Jubail Industrial City", ar: "الجبيل الصناعية" }, description: { en: "35 km · SABIC & industrial zone", ar: "٣٥ كم · سابك والمنطقة الصناعية" }, icon: "🏭" },
    { url: "/qatif", title: { en: "Qatif & Tarout Island", ar: "القطيف وتاروت" }, description: { en: "Nearby heritage city with Tarout archaeological sites", ar: "مدينة تراثية مجاورة بمواقع تاروت الأثرية" }, icon: "🏰" },
  ],

  "/half-moon-bay": [
    { url: "/routes/dammam-airport-to-half-moon-bay", title: { en: "Airport → Half Moon Bay", ar: "المطار ← خليج نصف القمر" }, description: { en: "85 km · 60–70 min · Direct beach transfer", ar: "٨٥ كم · ٦٠-٧٠ دقيقة · توصيل شاطئي مباشر" }, icon: "✈️" },
    { url: "/al-khobar", title: { en: "Al Khobar", ar: "الخبر" }, description: { en: "35 km north · Gateway city for Half Moon Bay", ar: "٣٥ كم شمالاً · المدينة البوابة لخليج نصف القمر" }, icon: "🏙️" },
    { url: "/tourist-destinations", title: { en: "More GCC Destinations", ar: "وجهات خليجية أخرى" }, description: { en: "Day trips & weekend getaways from Dammam", ar: "رحلات يومية وعطلات نهاية أسبوع من الدمام" }, icon: "🗺️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Bahrain Day Trip", ar: "رحلة يومية للبحرين" }, description: { en: "85 km via King Fahd Causeway from the area", ar: "٨٥ كم عبر جسر الملك فهد من المنطقة" }, icon: "🇧🇭" },
  ],

  "/abqaiq": [
    { url: "/routes/dammam-airport-to-dhahran", title: { en: "Airport → Dhahran (nearby)", ar: "المطار ← الظهران (مجاور)" }, description: { en: "Closest airport route to Abqaiq area", ar: "أقرب طريق مطار لمنطقة أبقيق" }, icon: "✈️" },
    { url: "/corporate-transfers", title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Monthly invoicing for Aramco Abqaiq employees", ar: "فوترة شهرية لموظفي أرامكو بأبقيق" }, icon: "💼" },
    { url: "/dhahran", title: { en: "Dhahran (Aramco HQ)", ar: "الظهران (أرامكو)" }, description: { en: "Saudi Aramco global headquarters · 50 km", ar: "المقر العالمي لأرامكو السعودية · ٥٠ كم" }, icon: "🏢" },
    { url: "/jubail", title: { en: "Jubail Industrial City", ar: "الجبيل الصناعية" }, description: { en: "Major corporate hub · 100 km", ar: "مركز الشركات الكبرى · ١٠٠ كم" }, icon: "🏭" },
  ],

  // ── GCC CROSS-BORDER ROUTES ──────────────────────────────────────
  "/gcc-border-crossing": [
    { url: "/routes/dammam-to-bahrain", title: { en: "Dammam → Bahrain", ar: "الدمام ← البحرين" }, description: { en: "85 km · King Fahd Causeway · from 350 SAR", ar: "٨٥ كم · جسر الملك فهد" }, icon: "🇧🇭" },
    { url: "/routes/dammam-to-kuwait", title: { en: "Dammam → Kuwait", ar: "الدمام ← الكويت" }, description: { en: "420 km · Khafji border · from 1,500 SAR", ar: "٤٢٠ كم · منفذ الخفجي" }, icon: "🇰🇼" },
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai, UAE", ar: "الدمام ← دبي" }, description: { en: "950 km · Al Batha border · from 3,500 SAR", ar: "٩٥٠ كم · منفذ البطحاء" }, icon: "🇦🇪" },
    { url: "/routes/dammam-to-doha", title: { en: "Dammam → Doha, Qatar", ar: "الدمام ← الدوحة" }, description: { en: "400 km · Salwa border · from 1,400 SAR", ar: "٤٠٠ كم · منفذ سلوى" }, icon: "🇶🇦" },
    { url: "/routes/dammam-to-muscat", title: { en: "Dammam → Muscat, Oman", ar: "الدمام ← مسقط" }, description: { en: "1,400 km · 3-country route · from 5,500 SAR", ar: "١٤٠٠ كم · ٣ دول" }, icon: "🇴🇲" },
  ],

  "/routes/dammam-to-bahrain": [
    { url: "/gcc-border-crossing", title: { en: "GCC Border Guide", ar: "دليل حدود الخليج" }, description: { en: "King Fahd Causeway documents & process", ar: "وثائق وإجراءات جسر الملك فهد" }, icon: "🛂" },
    { url: "/routes/dammam-airport-to-bahrain-airport", title: { en: "DMM Airport → BAH Airport", ar: "مطار الدمام ← مطار البحرين" }, description: { en: "Airport-to-airport connection · 95 km", ar: "توصيل مطار إلى مطار · ٩٥ كم" }, icon: "✈️" },
    { url: "/routes/dammam-to-doha", title: { en: "Dammam → Doha, Qatar", ar: "الدمام ← الدوحة" }, description: { en: "400 km · Another GCC crossing", ar: "٤٠٠ كم · عبور خليجي آخر" }, icon: "🇶🇦" },
    { url: "/al-khobar", title: { en: "Al Khobar City", ar: "مدينة الخبر" }, description: { en: "Closest city to King Fahd Causeway", ar: "أقرب مدينة لجسر الملك فهد" }, icon: "🏙️" },
    { url: "/tourist-destinations", title: { en: "Bahrain Tourist Spots", ar: "المواقع السياحية بالبحرين" }, description: { en: "Bahrain Fort, Tree of Life, Manama", ar: "قلعة البحرين، شجرة الحياة، المنامة" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-kuwait": [
    { url: "/gcc-border-crossing", title: { en: "GCC Border Guide", ar: "دليل حدود الخليج" }, description: { en: "Khafji border crossing process & documents", ar: "إجراءات ووثائق منفذ الخفجي" }, icon: "🛂" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Dammam → Bahrain", ar: "الدمام ← البحرين" }, description: { en: "Shorter GCC trip · 85 km via Causeway", ar: "رحلة خليجية أقصر · ٨٥ كم" }, icon: "🇧🇭" },
    { url: "/routes/dammam-to-doha", title: { en: "Dammam → Doha, Qatar", ar: "الدمام ← الدوحة" }, description: { en: "400 km · Salwa border · from 1,400 SAR", ar: "٤٠٠ كم · منفذ سلوى" }, icon: "🇶🇦" },
    { url: "/tourist-destinations", title: { en: "Kuwait Tourist Spots", ar: "المواقع السياحية بالكويت" }, description: { en: "Kuwait Towers, The Avenues, Grand Mosque", ar: "أبراج الكويت، الأفينيوز، المسجد الكبير" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-uae": [
    { url: "/gcc-border-crossing", title: { en: "Al Batha Border Guide", ar: "دليل منفذ البطحاء" }, description: { en: "Saudi-UAE border crossing documents & tips", ar: "وثائق ونصائح عبور منفذ البطحاء" }, icon: "🛂" },
    { url: "/routes/dammam-to-abu-dhabi", title: { en: "Dammam → Abu Dhabi", ar: "الدمام ← أبوظبي" }, description: { en: "Sheikh Zayed Mosque · Yas Island · 870 km", ar: "مسجد الشيخ زايد · جزيرة ياس · ٨٧٠ كم" }, icon: "🕌" },
    { url: "/routes/dammam-to-sharjah", title: { en: "Dammam → Sharjah", ar: "الدمام ← الشارقة" }, description: { en: "UNESCO Heritage Area · 980 km", ar: "منطقة التراث يونسكو · ٩٨٠ كم" }, icon: "🏛️" },
    { url: "/routes/dammam-to-ajman", title: { en: "Dammam → Ajman", ar: "الدمام ← عجمان" }, description: { en: "UAE smallest emirate · 1,000 km", ar: "أصغر إمارات الإمارات · ١٠٠٠ كم" }, icon: "🇦🇪" },
    { url: "/routes/dammam-to-ras-al-khaimah", title: { en: "Dammam → Ras Al Khaimah", ar: "الدمام ← رأس الخيمة" }, description: { en: "Jebel Jais zipline · 1,050 km", ar: "جبل جيس زيب لاين · ١٠٥٠ كم" }, icon: "🏔️" },
    { url: "/tourist-destinations", title: { en: "UAE Tourist Spots", ar: "المواقع السياحية الإماراتية" }, description: { en: "Burj Khalifa, Palm Jumeirah, Dubai Mall", ar: "برج خليفة، النخلة، دبي مول" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-abu-dhabi": [
    { url: "/gcc-border-crossing", title: { en: "Al Batha Border Guide", ar: "دليل منفذ البطحاء" }, description: { en: "Al Batha–Ghuwaifat crossing tips & documents", ar: "نصائح ووثائق عبور البطحاء-الغويفات" }, icon: "🛂" },
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai", ar: "الدمام ← دبي" }, description: { en: "Burj Khalifa · Palm Jumeirah · 950 km", ar: "برج خليفة · النخلة · ٩٥٠ كم" }, icon: "🏙️" },
    { url: "/routes/dammam-to-sharjah", title: { en: "Dammam → Sharjah", ar: "الدمام ← الشارقة" }, description: { en: "UAE Cultural Capital · 980 km", ar: "عاصمة الثقافة الإماراتية · ٩٨٠ كم" }, icon: "🏛️" },
    { url: "/tourist-destinations", title: { en: "Abu Dhabi Tourist Spots", ar: "المواقع السياحية بأبوظبي" }, description: { en: "Sheikh Zayed Mosque, Yas Island, Louvre", ar: "مسجد الشيخ زايد، جزيرة ياس، اللوفر" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-sharjah": [
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai", ar: "الدمام ← دبي" }, description: { en: "950 km · 30 min from Sharjah", ar: "٩٥٠ كم · ٣٠ دقيقة من الشارقة" }, icon: "🏙️" },
    { url: "/routes/dammam-to-abu-dhabi", title: { en: "Dammam → Abu Dhabi", ar: "الدمام ← أبوظبي" }, description: { en: "Sheikh Zayed Mosque · 870 km", ar: "مسجد الشيخ زايد · ٨٧٠ كم" }, icon: "🕌" },
    { url: "/routes/dammam-to-ajman", title: { en: "Dammam → Ajman", ar: "الدمام ← عجمان" }, description: { en: "Adjacent to Sharjah · 1,000 km", ar: "مجاورة للشارقة · ١٠٠٠ كم" }, icon: "🇦🇪" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Guide", ar: "دليل حدود الخليج" }, description: { en: "Al Batha border tips for UAE entry", ar: "نصائح منفذ البطحاء لدخول الإمارات" }, icon: "🛂" },
  ],

  "/routes/dammam-to-ajman": [
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai", ar: "الدمام ← دبي" }, description: { en: "30 min from Ajman · 950 km from Dammam", ar: "٣٠ دقيقة من عجمان · ٩٥٠ كم من الدمام" }, icon: "🏙️" },
    { url: "/routes/dammam-to-sharjah", title: { en: "Dammam → Sharjah", ar: "الدمام ← الشارقة" }, description: { en: "15 min from Ajman · UAE Cultural Capital", ar: "١٥ دقيقة من عجمان · عاصمة الثقافة" }, icon: "🏛️" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Guide", ar: "دليل حدود الخليج" }, description: { en: "Al Batha border crossing to UAE", ar: "عبور منفذ البطحاء إلى الإمارات" }, icon: "🛂" },
    { url: "/tourist-destinations", title: { en: "All UAE Destinations", ar: "جميع وجهات الإمارات" }, description: { en: "Compare all UAE emirates from Dammam", ar: "قارن جميع إمارات الإمارات من الدمام" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-ras-al-khaimah": [
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai", ar: "الدمام ← دبي" }, description: { en: "1.5 hrs south of RAK · from 3,500 SAR", ar: "١.٥ ساعة جنوب RAK · من ٣٥٠٠ ريال" }, icon: "🏙️" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Guide", ar: "دليل حدود الخليج" }, description: { en: "Al Batha border crossing to all UAE", ar: "منفذ البطحاء إلى جميع الإمارات" }, icon: "🛂" },
    { url: "/routes/dammam-to-muscat", title: { en: "Dammam → Muscat, Oman", ar: "الدمام ← مسقط" }, description: { en: "RAK is close to Oman border · 3-country trip", ar: "RAK قريبة من حدود عُمان · رحلة ٣ دول" }, icon: "🇴🇲" },
    { url: "/tourist-destinations", title: { en: "UAE Tourist Destinations", ar: "الوجهات السياحية الإماراتية" }, description: { en: "Jebel Jais, RAK beaches & heritage sites", ar: "جبل جيس وشواطئ وتراث رأس الخيمة" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-doha": [
    { url: "/gcc-border-crossing", title: { en: "Salwa Border Guide", ar: "دليل منفذ سلوى" }, description: { en: "Salwa–Abu Samra crossing process & documents", ar: "إجراءات ووثائق عبور سلوى-أبو سمرة" }, icon: "🛂" },
    { url: "/tourist-destinations", title: { en: "Doha Tourist Spots", ar: "المواقع السياحية بالدوحة" }, description: { en: "Souq Waqif, Pearl Qatar, Museum of Islamic Art", ar: "سوق واقف، اللؤلؤة، متحف الفن الإسلامي" }, icon: "🗺️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Dammam → Bahrain", ar: "الدمام ← البحرين" }, description: { en: "Closer GCC trip · 85 km via Causeway", ar: "رحلة خليجية أقرب · ٨٥ كم عبر الجسر" }, icon: "🇧🇭" },
    { url: "/routes/dammam-airport-to-qatar-border", title: { en: "Airport → Qatar Border", ar: "المطار ← حدود قطر" }, description: { en: "Salwa border transfer · 310 km", ar: "توصيل منفذ سلوى · ٣١٠ كم" }, icon: "🚗" },
  ],

  "/routes/dammam-to-muscat": [
    { url: "/gcc-border-crossing", title: { en: "3-Country Border Guide", ar: "دليل عبور ٣ دول" }, description: { en: "Saudi→UAE→Oman border crossing guide", ar: "دليل عبور السعودية←الإمارات←عُمان" }, icon: "🛂" },
    { url: "/routes/dammam-to-uae", title: { en: "Stop in Dubai", ar: "توقف في دبي" }, description: { en: "On the way to Muscat · Dubai 950 km", ar: "في الطريق إلى مسقط · دبي ٩٥٠ كم" }, icon: "🏙️" },
    { url: "/tourist-destinations", title: { en: "Muscat Tourist Spots", ar: "المواقع السياحية بمسقط" }, description: { en: "Sultan Qaboos Mosque, Mutrah Souq, Royal Opera House", ar: "مسجد السلطان قابوس، سوق مطرح، دار الأوبرا" }, icon: "🗺️" },
    { url: "/routes/dammam-to-ras-al-khaimah", title: { en: "Dammam → RAK", ar: "الدمام ← رأس الخيمة" }, description: { en: "Near Oman border · Jebel Jais · 1,050 km", ar: "قريبة من حدود عُمان · جبل جيس · ١٠٥٠ كم" }, icon: "🏔️" },
  ],

  "/routes/dammam-airport-to-bahrain-airport": [
    { url: "/routes/dammam-to-bahrain", title: { en: "Bahrain City Transfer", ar: "توصيل مدينة البحرين" }, description: { en: "Manama, hotels & city destinations in Bahrain", ar: "المنامة والفنادق ووجهات المدينة" }, icon: "🇧🇭" },
    { url: "/dammam-airport-guide", title: { en: "Dammam Airport Guide", ar: "دليل مطار الدمام" }, description: { en: "Complete DMM arrivals & departures guide", ar: "دليل الوصول والمغادرة في مطار الدمام" }, icon: "✈️" },
    { url: "/gcc-border-crossing", title: { en: "King Fahd Causeway Guide", ar: "دليل جسر الملك فهد" }, description: { en: "Documents & process for causeway crossing", ar: "وثائق وإجراءات عبور الجسر" }, icon: "🛂" },
  ],

  // ── SAUDI INTERCITY ROUTES ────────────────────────────────────────
  "/routes/dammam-to-riyadh": [
    { url: "/corporate-transfers", title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Monthly billing for Dammam–Riyadh business travel", ar: "فوترة شهرية للسفر التجاري الدمام-الرياض" }, icon: "💼" },
    { url: "/fleet", title: { en: "Business Fleet", ar: "أسطول الأعمال" }, description: { en: "Choose your vehicle class for 400 km highway", ar: "اختر فئة سيارتك لطريق ٤٠٠ كم" }, icon: "🚗" },
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah", ar: "الدمام ← جدة" }, description: { en: "1,260 km · Al-Balad UNESCO · from 4,500 SAR", ar: "١٢٦٠ كم · البلد يونسكو · من ٤٥٠٠ ريال" }, icon: "🌊" },
    { url: "/routes/dammam-to-qassim", title: { en: "Dammam → Qassim", ar: "الدمام ← القصيم" }, description: { en: "500 km · Buraydah dates capital · from 1,800 SAR", ar: "٥٠٠ كم · عاصمة التمور · من ١٨٠٠ ريال" }, icon: "🌴" },
  ],

  "/routes/dammam-to-jeddah": [
    { url: "/routes/dammam-to-madinah", title: { en: "Dammam → Madinah", ar: "الدمام ← المدينة المنورة" }, description: { en: "Prophet's Mosque · 1,100 km · from 4,000 SAR", ar: "المسجد النبوي · ١١٠٠ كم · من ٤٠٠٠ ريال" }, icon: "🕌" },
    { url: "/routes/dammam-to-mecca", title: { en: "Dammam → Mecca", ar: "الدمام ← مكة" }, description: { en: "Masjid al-Haram · 1,280 km · from 4,800 SAR", ar: "المسجد الحرام · ١٢٨٠ كم · من ٤٨٠٠ ريال" }, icon: "🕋" },
    { url: "/routes/dammam-to-taif", title: { en: "Dammam → Taif", ar: "الدمام ← الطائف" }, description: { en: "City of Roses · 850 km · from 3,200 SAR", ar: "مدينة الورد · ٨٥٠ كم · من ٣٢٠٠ ريال" }, icon: "🌹" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh", ar: "الدمام ← الرياض" }, description: { en: "Saudi capital · 400 km · from 900 SAR", ar: "العاصمة السعودية · ٤٠٠ كم · من ٩٠٠ ريال" }, icon: "🏛️" },
  ],

  "/routes/dammam-to-madinah": [
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah", ar: "الدمام ← جدة" }, description: { en: "Al-Balad UNESCO · Red Sea · 1,260 km", ar: "البلد يونسكو · البحر الأحمر · ١٢٦٠ كم" }, icon: "🌊" },
    { url: "/routes/dammam-to-mecca", title: { en: "Dammam → Mecca", ar: "الدمام ← مكة" }, description: { en: "Masjid al-Haram · Umrah transfer · 1,280 km", ar: "المسجد الحرام · توصيل العمرة · ١٢٨٠ كم" }, icon: "🕋" },
    { url: "/tourist-destinations", title: { en: "Saudi Religious Tourism", ar: "السياحة الدينية السعودية" }, description: { en: "All Saudi religious & tourism destinations", ar: "جميع الوجهات الدينية والسياحية السعودية" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-mecca": [
    { url: "/routes/dammam-to-madinah", title: { en: "Dammam → Madinah", ar: "الدمام ← المدينة المنورة" }, description: { en: "Prophet's Mosque · Quba · 1,100 km", ar: "المسجد النبوي · قباء · ١١٠٠ كم" }, icon: "🕌" },
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah", ar: "الدمام ← جدة" }, description: { en: "40 min from Mecca · Al-Balad UNESCO", ar: "٤٠ دقيقة من مكة · البلد يونسكو" }, icon: "🌊" },
    { url: "/routes/dammam-to-taif", title: { en: "Dammam → Taif", ar: "الدمام ← الطائف" }, description: { en: "Mountain resort near Mecca · from 3,200 SAR", ar: "منتجع جبلي قرب مكة · من ٣٢٠٠ ريال" }, icon: "🌹" },
  ],

  "/routes/dammam-to-qassim": [
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh", ar: "الدمام ← الرياض" }, description: { en: "Saudi capital · 400 km · from 900 SAR", ar: "العاصمة · ٤٠٠ كم · من ٩٠٠ ريال" }, icon: "🏛️" },
    { url: "/routes/dammam-to-hail", title: { en: "Dammam → Hail", ar: "الدمام ← حائل" }, description: { en: "North Saudi · Nafud Desert · 800 km", ar: "شمال المملكة · صحراء النفود · ٨٠٠ كم" }, icon: "🏜️" },
    { url: "/tourist-destinations", title: { en: "Saudi Destinations", ar: "وجهات سعودية" }, description: { en: "All Saudi cities reachable from Dammam", ar: "جميع المدن السعودية من الدمام" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-taif": [
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah", ar: "الدمام ← جدة" }, description: { en: "Al-Balad UNESCO · 1.5 hrs from Taif · 1,260 km", ar: "البلد يونسكو · ١.٥ ساعة من الطائف · ١٢٦٠ كم" }, icon: "🌊" },
    { url: "/routes/dammam-to-mecca", title: { en: "Dammam → Mecca", ar: "الدمام ← مكة" }, description: { en: "Masjid al-Haram · 1 hr from Taif · 1,280 km", ar: "المسجد الحرام · ساعة من الطائف · ١٢٨٠ كم" }, icon: "🕋" },
    { url: "/tourist-destinations", title: { en: "Saudi Tourism Guide", ar: "دليل السياحة السعودية" }, description: { en: "All Saudi tourist destinations from Dammam", ar: "جميع وجهات السياحة السعودية من الدمام" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-yanbu": [
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah", ar: "الدمام ← جدة" }, description: { en: "2 hrs south of Yanbu · from 4,500 SAR", ar: "ساعتان جنوب ينبع · من ٤٥٠٠ ريال" }, icon: "🌊" },
    { url: "/routes/dammam-to-madinah", title: { en: "Dammam → Madinah", ar: "الدمام ← المدينة المنورة" }, description: { en: "2 hrs from Yanbu · Prophet's Mosque", ar: "ساعتان من ينبع · المسجد النبوي" }, icon: "🕌" },
    { url: "/corporate-transfers", title: { en: "Corporate Transfers", ar: "نقل الشركات" }, description: { en: "Aramco & Royal Commission Yanbu accounts", ar: "حسابات أرامكو والهيئة الملكية بينبع" }, icon: "💼" },
  ],

  "/routes/dammam-to-abha": [
    { url: "/tourist-destinations", title: { en: "Saudi Mountain Tourism", ar: "السياحة الجبلية السعودية" }, description: { en: "All Saudi tourism destinations from Dammam", ar: "جميع الوجهات السياحية السعودية" }, icon: "🗺️" },
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah", ar: "الدمام ← جدة" }, description: { en: "4 hrs west of Abha · Red Sea coast", ar: "٤ ساعات غرب أبها · ساحل البحر الأحمر" }, icon: "🌊" },
    { url: "/routes/dammam-to-taif", title: { en: "Dammam → Taif", ar: "الدمام ← الطائف" }, description: { en: "City of Roses · another Saudi mountain city", ar: "مدينة الورد · مدينة جبلية سعودية أخرى" }, icon: "🌹" },
  ],

  "/routes/dammam-to-tabuk": [
    { url: "/tourist-destinations", title: { en: "Saudi Tourism Guide", ar: "دليل السياحة السعودية" }, description: { en: "NEOM, AlUla & Red Sea coastal towns", ar: "نيوم والعُلا ومدن الساحل" }, icon: "🗺️" },
    { url: "/routes/dammam-to-hail", title: { en: "Dammam → Hail", ar: "الدمام ← حائل" }, description: { en: "North Saudi · En route to Tabuk · 800 km", ar: "شمال المملكة · في الطريق · ٨٠٠ كم" }, icon: "🏜️" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh", ar: "الدمام ← الرياض" }, description: { en: "Saudi capital · 400 km · en route", ar: "العاصمة · ٤٠٠ كم · في الطريق" }, icon: "🏛️" },
  ],

  "/routes/dammam-to-hail": [
    { url: "/tourist-destinations", title: { en: "Saudi Tourism Guide", ar: "دليل السياحة السعودية" }, description: { en: "All Saudi tourist destinations from Dammam", ar: "جميع الوجهات السياحية السعودية" }, icon: "🗺️" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh", ar: "الدمام ← الرياض" }, description: { en: "Saudi capital · 400 km · from 900 SAR", ar: "العاصمة · ٤٠٠ كم · من ٩٠٠ ريال" }, icon: "🏛️" },
    { url: "/routes/dammam-to-qassim", title: { en: "Dammam → Qassim", ar: "الدمام ← القصيم" }, description: { en: "Buraydah dates capital · 500 km", ar: "عاصمة التمور بريدة · ٥٠٠ كم" }, icon: "🌴" },
  ],

  // ── LOCAL AREA ROUTES ──────────────────────────────────────────────
  "/routes/dammam-airport-to-dammam-city": [
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Hotels, Corniche, Al Marjan Island & key areas", ar: "الفنادق والكورنيش وجزيرة المرجان" }, icon: "🏙️" },
    { url: "/dammam-airport-guide", title: { en: "DMM Airport Guide", ar: "دليل مطار الدمام" }, description: { en: "Arrivals, meet & greet, terminal guide", ar: "الوصول والاستقبال ودليل الصالة" }, icon: "✈️" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Al Khobar", ar: "المطار ← الخبر" }, description: { en: "60 km · 45 min from DMM Airport", ar: "٦٠ كم · ٤٥ دقيقة من المطار" }, icon: "🏙️" },
  ],

  "/routes/dammam-airport-to-khobar": [
    { url: "/al-khobar", title: { en: "Al Khobar City Guide", ar: "دليل مدينة الخبر" }, description: { en: "Corniche, Half Moon Bay & Bahrain Causeway gateway", ar: "الكورنيش وخليج نصف القمر وبوابة الجسر" }, icon: "🌊" },
    { url: "/dammam-airport-guide", title: { en: "DMM Airport Guide", ar: "دليل مطار الدمام" }, description: { en: "Arrivals, meet & greet, terminal guide", ar: "الوصول والاستقبال ودليل الصالة" }, icon: "✈️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Khobar → Bahrain", ar: "الخبر ← البحرين" }, description: { en: "65 km via King Fahd Causeway", ar: "٦٥ كم عبر جسر الملك فهد" }, icon: "🇧🇭" },
    { url: "/routes/dammam-airport-to-half-moon-bay", title: { en: "Airport → Half Moon Bay", ar: "المطار ← خليج نصف القمر" }, description: { en: "85 km · Eastern Province beach resort", ar: "٨٥ كم · منتجع شاطئي المنطقة الشرقية" }, icon: "🏖️" },
  ],

  "/routes/dammam-airport-to-jubail": [
    { url: "/jubail", title: { en: "Jubail City Guide", ar: "دليل مدينة الجبيل" }, description: { en: "Aramco, SABIC & RCJY complete corporate guide", ar: "دليل أرامكو وسابك والهيئة الملكية الشامل" }, icon: "🏭" },
    { url: "/corporate-transfers", title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Monthly invoicing for Jubail corporations", ar: "فوترة شهرية لشركات الجبيل" }, icon: "💼" },
    { url: "/routes/dammam-airport-to-ras-tanura", title: { en: "Airport → Ras Tanura", ar: "المطار ← رأس تنورة" }, description: { en: "75 km · Aramco oil terminal", ar: "٧٥ كم · محطة نفط أرامكو" }, icon: "🛢️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Jubail → Bahrain", ar: "الجبيل ← البحرين" }, description: { en: "~130 km via King Fahd Causeway", ar: "~١٣٠ كم عبر جسر الملك فهد" }, icon: "🇧🇭" },
  ],

  "/routes/dammam-airport-to-dhahran": [
    { url: "/dhahran", title: { en: "Dhahran City Guide", ar: "دليل مدينة الظهران" }, description: { en: "Saudi Aramco HQ & KFUPM complete guide", ar: "دليل مقر أرامكو وجامعة الملك فهد" }, icon: "🏢" },
    { url: "/corporate-transfers", title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Aramco Dhahran executive accounts", ar: "حسابات أرامكو التنفيذية بالظهران" }, icon: "💼" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Al Khobar", ar: "المطار ← الخبر" }, description: { en: "60 km · Adjacent to Dhahran", ar: "٦٠ كم · مجاورة للظهران" }, icon: "🏙️" },
  ],

  "/routes/dammam-airport-to-hofuf": [
    { url: "/hofuf-al-ahsa", title: { en: "Hofuf / Al-Ahsa Guide", ar: "دليل الهفوف / الأحساء" }, description: { en: "UNESCO World Heritage oasis & complete city guide", ar: "واحة التراث العالمي ودليل المدينة الشامل" }, icon: "🌴" },
    { url: "/dammam-airport-guide", title: { en: "DMM Airport Guide", ar: "دليل مطار الدمام" }, description: { en: "Arrivals, meet & greet at King Fahd Airport", ar: "الوصول والاستقبال في مطار الملك فهد" }, icon: "✈️" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Hofuf → Riyadh", ar: "الهفوف ← الرياض" }, description: { en: "~250 km from Hofuf to Saudi capital", ar: "~٢٥٠ كم من الهفوف للعاصمة" }, icon: "🏛️" },
  ],

  "/routes/dammam-airport-to-qatif": [
    { url: "/qatif", title: { en: "Qatif & Tarout Island Guide", ar: "دليل القطيف وجزيرة تاروت" }, description: { en: "6,000-year heritage city & Dilmun sites", ar: "مدينة تاريخية ٦٠٠٠ سنة ومواقع دلمون" }, icon: "🏰" },
    { url: "/dammam-airport-guide", title: { en: "DMM Airport Guide", ar: "دليل مطار الدمام" }, description: { en: "Meet & greet at King Fahd International Airport", ar: "الاستقبال في مطار الملك فهد الدولي" }, icon: "✈️" },
    { url: "/routes/dammam-airport-to-ras-tanura", title: { en: "Airport → Ras Tanura", ar: "المطار ← رأس تنورة" }, description: { en: "75 km · nearby Aramco terminal", ar: "٧٥ كم · محطة أرامكو القريبة" }, icon: "🛢️" },
  ],

  "/routes/dammam-airport-to-ras-tanura": [
    { url: "/ras-tanura", title: { en: "Ras Tanura City Guide", ar: "دليل مدينة رأس تنورة" }, description: { en: "Aramco oil terminal & compound guide", ar: "دليل محطة ومجمع أرامكو النفطي" }, icon: "🛢️" },
    { url: "/corporate-transfers", title: { en: "Corporate Accounts", ar: "حسابات الشركات" }, description: { en: "Monthly invoicing for Aramco Ras Tanura", ar: "فوترة شهرية لأرامكو رأس تنورة" }, icon: "💼" },
    { url: "/routes/dammam-airport-to-jubail", title: { en: "Airport → Jubail", ar: "المطار ← الجبيل" }, description: { en: "85 km · Jubail Industrial City nearby", ar: "٨٥ كم · الجبيل الصناعية مجاورة" }, icon: "🏭" },
  ],

  "/routes/dammam-airport-to-half-moon-bay": [
    { url: "/half-moon-bay", title: { en: "Half Moon Bay Guide", ar: "دليل خليج نصف القمر" }, description: { en: "Eastern Province premier beach resort guide", ar: "دليل أشهر منتجع شاطئي بالمنطقة الشرقية" }, icon: "🏖️" },
    { url: "/al-khobar", title: { en: "Al Khobar City", ar: "مدينة الخبر" }, description: { en: "35 km north · Gateway to Half Moon Bay", ar: "٣٥ كم شمالاً · بوابة خليج نصف القمر" }, icon: "🏙️" },
    { url: "/tourist-destinations", title: { en: "More Destinations", ar: "وجهات أخرى" }, description: { en: "All GCC & Saudi tourist destinations", ar: "جميع الوجهات السياحية الخليجية والسعودية" }, icon: "🗺️" },
  ],

  "/routes/dammam-airport-to-qatar-border": [
    { url: "/gcc-border-crossing", title: { en: "Salwa Border Guide", ar: "دليل منفذ سلوى" }, description: { en: "Qatar entry requirements & crossing process", ar: "متطلبات دخول قطر وإجراءات العبور" }, icon: "🛂" },
    { url: "/routes/dammam-to-doha", title: { en: "Dammam → Doha, Qatar", ar: "الدمام ← الدوحة" }, description: { en: "Full Doha city transfer · 400 km", ar: "توصيل مدينة الدوحة كاملاً · ٤٠٠ كم" }, icon: "🇶🇦" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Dammam → Bahrain", ar: "الدمام ← البحرين" }, description: { en: "Closer GCC border crossing · 85 km", ar: "عبور حدودي خليجي أقرب · ٨٥ كم" }, icon: "🇧🇭" },
  ],

  // ── SERVICES / GUIDES ──────────────────────────────────────────────
  "/corporate-transfers": [
    { url: "/routes/dammam-airport-to-jubail", title: { en: "Airport → Jubail (Corporate)", ar: "المطار ← الجبيل (شركات)" }, description: { en: "Priority transfers for Aramco, SABIC & RCJY", ar: "توصيل أولوية لأرامكو وسابك والهيئة الملكية" }, icon: "🏭" },
    { url: "/routes/dammam-airport-to-dhahran", title: { en: "Airport → Aramco Dhahran", ar: "المطار ← أرامكو الظهران" }, description: { en: "Saudi Aramco HQ executive transfers", ar: "توصيل تنفيذي لمقر أرامكو بالظهران" }, icon: "🏢" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh Business", ar: "الدمام ← الرياض للأعمال" }, description: { en: "400 km intercity business-class highway", ar: "٤٠٠ كم توصيل أعمال بين المدن" }, icon: "🏛️" },
    { url: "/fleet", title: { en: "Our Business Fleet", ar: "أسطول الأعمال" }, description: { en: "GMC Yukon, Camry & Staria for corporate needs", ar: "يوكن وكامري وستاريا لاحتياجات الأعمال" }, icon: "🚙" },
  ],

  "/dammam-airport-guide": [
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Al Khobar", ar: "المطار ← الخبر" }, description: { en: "60 km · 45 min · most popular local route", ar: "٦٠ كم · ٤٥ دقيقة · أشهر طريق محلي" }, icon: "🏙️" },
    { url: "/routes/dammam-airport-to-jubail", title: { en: "Airport → Jubail", ar: "المطار ← الجبيل" }, description: { en: "85 km · 55 min · Aramco / SABIC hub", ar: "٨٥ كم · ٥٥ دقيقة · أرامكو وسابك" }, icon: "🏭" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Airport → Bahrain", ar: "المطار ← البحرين" }, description: { en: "85 km via King Fahd Causeway · from 350 SAR", ar: "٨٥ كم عبر جسر الملك فهد" }, icon: "🇧🇭" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Airport → Riyadh", ar: "المطار ← الرياض" }, description: { en: "400 km · Saudi capital highway transfer", ar: "٤٠٠ كم · طريق العاصمة السعودية" }, icon: "🏛️" },
  ],

  "/tourist-destinations": [
    { url: "/routes/dammam-to-bahrain", title: { en: "Bahrain Day Trip", ar: "رحلة يومية للبحرين" }, description: { en: "85 km · King Fahd Causeway · day trip", ar: "٨٥ كم · جسر الملك فهد · رحلة يومية" }, icon: "🇧🇭" },
    { url: "/routes/dammam-to-doha", title: { en: "Doha, Qatar Weekend", ar: "الدوحة عطلة نهاية الأسبوع" }, description: { en: "400 km · Souq Waqif, Pearl Qatar", ar: "٤٠٠ كم · سوق واقف، اللؤلؤة" }, icon: "🇶🇦" },
    { url: "/routes/dammam-to-uae", title: { en: "Dubai, UAE", ar: "دبي الإمارات" }, description: { en: "950 km · Burj Khalifa, Palm Jumeirah", ar: "٩٥٠ كم · برج خليفة، النخلة" }, icon: "🏙️" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Guide", ar: "دليل حدود الخليج" }, description: { en: "Documents & fees for all GCC borders", ar: "الوثائق والرسوم لجميع الحدود الخليجية" }, icon: "🛂" },
  ],

  "/fleet": [
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai (VIP)", ar: "الدمام ← دبي VIP" }, description: { en: "GMC Yukon Denali for 950 km luxury journey", ar: "يوكن دينالي لرحلة فاخرة ٩٥٠ كم" }, icon: "🇦🇪" },
    { url: "/corporate-transfers", title: { en: "Corporate Transfers", ar: "نقل الشركات" }, description: { en: "Corporate fleet accounts & priority booking", ar: "حسابات أسطول شركات وحجوزات أولوية" }, icon: "💼" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh", ar: "الدمام ← الرياض" }, description: { en: "Choose Camry, Yukon or Staria · 400 km", ar: "اختر كامري أو يوكن أو ستاريا · ٤٠٠ كم" }, icon: "🏛️" },
  ],

  "/blog": [
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "Full practical guide to all Saudi-GCC borders", ar: "الدليل العملي الشامل لجميع الحدود السعودية" }, icon: "🛂" },
    { url: "/tourist-destinations", title: { en: "GCC Tourist Destinations", ar: "الوجهات السياحية الخليجية" }, description: { en: "All GCC tourist spots reachable from Dammam", ar: "جميع وجهات السياحة الخليجية من الدمام" }, icon: "🗺️" },
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Eastern Province complete guide", ar: "دليل المنطقة الشرقية الشامل" }, icon: "🏙️" },
  ],
};
