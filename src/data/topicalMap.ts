export interface RelatedPage {
  url: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  icon: string;
}

export interface TopicCluster {
  id: string;
  intent: "transactional" | "informational" | "navigational";
  pillarUrl: string;
  pillarTitle: { en: string; ar: string };
  pillarKeywords: string[];
  semanticEntities: string[];
  clusterUrls: string[];
}

export const topicalClusters: TopicCluster[] = [
  {
    id: "gcc-cross-border",
    intent: "transactional",
    pillarUrl: "/gcc-border-crossing",
    pillarTitle: {
      en: "GCC Border Crossing by Taxi — Complete Guide",
      ar: "دليل عبور حدود الخليج بالتاكسي",
    },
    pillarKeywords: [
      "gcc border crossing taxi",
      "saudi arabia to bahrain by taxi",
      "king fahd causeway taxi guide",
      "dammam to kuwait border crossing",
      "al batha ghuwaifat border taxi",
      "salwa border crossing dammam",
    ],
    semanticEntities: [
      "King Fahd Causeway", "Khafji Border Terminal", "Al Batha Border",
      "Ghuwaifat Border", "Salwa Border Terminal", "Manama Bahrain",
      "Kuwait City", "Abu Dhabi", "Dubai", "Doha Qatar",
      "King Fahd International Airport", "Dammam Eastern Province",
    ],
    clusterUrls: [
      "/routes/dammam-to-bahrain",
      "/routes/dammam-to-kuwait",
      "/routes/dammam-to-uae",
      "/routes/dammam-airport-to-qatar-border",
    ],
  },
  {
    id: "eastern-province-local",
    intent: "transactional",
    pillarUrl: "/",
    pillarTitle: {
      en: "Dammam Airport Taxi & Local Transfers",
      ar: "تاكسي مطار الدمام والتوصيل المحلي",
    },
    pillarKeywords: [
      "dammam airport taxi",
      "king fahd international airport taxi",
      "dmm airport transfer",
      "dammam to khobar taxi",
      "dammam airport to jubail",
      "dammam airport to dhahran",
    ],
    semanticEntities: [
      "King Fahd International Airport", "DMM Airport", "Dammam",
      "Al Khobar", "Jubail Industrial City", "Dhahran",
      "Hofuf Al-Ahsa", "Eastern Province Saudi Arabia",
      "Saudi Aramco", "SABIC", "KFUPM",
    ],
    clusterUrls: [
      "/routes/dammam-airport-to-khobar",
      "/routes/dammam-airport-to-jubail",
      "/routes/dammam-airport-to-dhahran",
      "/routes/dammam-airport-to-hofuf",
      "/dammam-airport-guide",
    ],
  },
  {
    id: "intercity-saudi",
    intent: "transactional",
    pillarUrl: "/",
    pillarTitle: {
      en: "Intercity Taxi Transfers — Eastern Province to Riyadh",
      ar: "التوصيل بين المدن — المنطقة الشرقية إلى الرياض",
    },
    pillarKeywords: [
      "dammam to riyadh taxi",
      "intercity taxi saudi arabia",
      "eastern province to riyadh transfer",
      "dammam riyadh private car",
    ],
    semanticEntities: [
      "Riyadh", "King Khalid International Airport RUH",
      "Dammam Eastern Province", "King Fahd Highway",
      "Saudi Arabia Intercity Transfer",
    ],
    clusterUrls: ["/routes/dammam-to-riyadh"],
  },
  {
    id: "corporate-business",
    intent: "transactional",
    pillarUrl: "/corporate-transfers",
    pillarTitle: {
      en: "Corporate & Executive Chauffeur Services",
      ar: "خدمات النقل التنفيذي للشركات",
    },
    pillarKeywords: [
      "corporate taxi dammam",
      "executive chauffeur eastern province",
      "aramco jubail corporate transfer",
      "business transfer dammam airport",
      "corporate airport taxi saudi arabia",
    ],
    semanticEntities: [
      "Saudi Aramco", "SABIC", "RCJY Royal Commission Jubail",
      "Jubail Industrial City", "Dhahran Aramco Camp",
      "KFUPM King Fahd University", "Dammam Business District",
    ],
    clusterUrls: [
      "/routes/dammam-airport-to-jubail",
      "/routes/dammam-airport-to-dhahran",
      "/routes/dammam-to-riyadh",
      "/fleet",
    ],
  },
  {
    id: "airport-information",
    intent: "informational",
    pillarUrl: "/dammam-airport-guide",
    pillarTitle: {
      en: "Dammam Airport (DMM) Complete Guide",
      ar: "دليل مطار الدمام الشامل",
    },
    pillarKeywords: [
      "dammam airport guide",
      "king fahd international airport arrivals",
      "dmm airport taxi pickup",
      "how to get taxi at dammam airport",
      "dammam airport terminal guide",
    ],
    semanticEntities: [
      "King Fahd International Airport", "DMM IATA code",
      "Dammam Arrivals Terminal", "Flight Tracking",
      "Meet and Greet Service", "Airport Transfer Saudi Arabia",
    ],
    clusterUrls: [
      "/routes/dammam-airport-to-khobar",
      "/routes/dammam-airport-to-jubail",
      "/routes/dammam-airport-to-dhahran",
      "/routes/dammam-to-bahrain",
      "/routes/dammam-to-riyadh",
      "/faqs",
    ],
  },
  {
    id: "gcc-border-informational",
    intent: "informational",
    pillarUrl: "/gcc-border-crossing",
    pillarTitle: {
      en: "GCC Border Crossing Documents & Process",
      ar: "وثائق وإجراءات عبور حدود الخليج",
    },
    pillarKeywords: [
      "documents required saudi to bahrain",
      "iqama exit reentry visa gcc",
      "king fahd causeway crossing process",
      "gcc national id border crossing",
      "saudi to uae by road documents",
    ],
    semanticEntities: [
      "Saudi Iqama Residency Permit", "Exit Re-Entry Visa",
      "GCC National ID", "Passport Validity 6 Months",
      "Bahrain eVisa", "Kuwait Entry Visa",
      "UAE Tourist Visa", "Qatar Entry Requirements",
    ],
    clusterUrls: [
      "/routes/dammam-to-bahrain",
      "/routes/dammam-to-kuwait",
      "/routes/dammam-to-uae",
      "/routes/dammam-airport-to-qatar-border",
      "/blog",
    ],
  },
];

export const relatedPagesMap: Record<string, RelatedPage[]> = {
  "/": [
    {
      url: "/gcc-border-crossing",
      title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
      description: { en: "Documents, fees & tips for Saudi-GCC border crossings by taxi", ar: "المستندات والرسوم ونصائح عبور حدود الخليج بالتاكسي" },
      icon: "🛂",
    },
    {
      url: "/corporate-transfers",
      title: { en: "Corporate Transfer Service", ar: "خدمات نقل الشركات" },
      description: { en: "Invoicing, priority dispatch & executive vehicles for businesses", ar: "فاتورة شهرية وتوصيل تنفيذي للشركات" },
      icon: "💼",
    },
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport (DMM) Guide", ar: "دليل مطار الدمام" },
      description: { en: "Complete arrivals, pickup & transfer guide for King Fahd Airport", ar: "دليل شامل للوصول والاستقبال في مطار الملك فهد" },
      icon: "✈️",
    },
  ],

  "/gcc-border-crossing": [
    {
      url: "/routes/dammam-to-bahrain",
      title: { en: "Dammam → Bahrain Taxi", ar: "تاكسي الدمام → البحرين" },
      description: { en: "King Fahd Causeway — 85 km · from 350 SAR", ar: "جسر الملك فهد — ٨٥ كم · من ٣٥٠ ريال" },
      icon: "🇧🇭",
    },
    {
      url: "/routes/dammam-to-kuwait",
      title: { en: "Dammam → Kuwait Taxi", ar: "تاكسي الدمام → الكويت" },
      description: { en: "Khafji Border — 420 km · from 1,500 SAR", ar: "منفذ الخفجي — ٤٢٠ كم · من ١٥٠٠ ريال" },
      icon: "🇰🇼",
    },
    {
      url: "/routes/dammam-to-uae",
      title: { en: "Dammam → UAE Taxi", ar: "تاكسي الدمام → الإمارات" },
      description: { en: "Al Batha/Ghuwaifat — 950 km · from 3,500 SAR", ar: "البطحاء/الغويفات — ٩٥٠ كم · من ٣٥٠٠ ريال" },
      icon: "🇦🇪",
    },
    {
      url: "/routes/dammam-airport-to-qatar-border",
      title: { en: "Dammam → Qatar Border", ar: "الدمام → حدود قطر" },
      description: { en: "Salwa Terminal — 310 km · from 1,000 SAR", ar: "منفذ سلوى — ٣١٠ كم · من ١٠٠٠ ريال" },
      icon: "🇶🇦",
    },
  ],

  "/routes/dammam-to-bahrain": [
    {
      url: "/gcc-border-crossing",
      title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
      description: { en: "Required documents & King Fahd Causeway crossing tips", ar: "المستندات المطلوبة ونصائح عبور جسر الملك فهد" },
      icon: "🛂",
    },
    {
      url: "/routes/dammam-to-kuwait",
      title: { en: "Dammam → Kuwait Taxi", ar: "تاكسي الدمام → الكويت" },
      description: { en: "420 km · Khafji border · from 1,500 SAR", ar: "٤٢٠ كم · منفذ الخفجي · من ١٥٠٠ ريال" },
      icon: "🇰🇼",
    },
    {
      url: "/routes/dammam-airport-to-khobar",
      title: { en: "Airport → Khobar First", ar: "المطار → الخبر أولاً" },
      description: { en: "Depart from Khobar to Bahrain — 60 km · from 150 SAR", ar: "انطلق من الخبر للبحرين — ٦٠ كم · من ١٥٠ ريال" },
      icon: "🏙️",
    },
  ],

  "/routes/dammam-to-kuwait": [
    {
      url: "/gcc-border-crossing",
      title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
      description: { en: "Khafji border tips & Kuwait entry requirements", ar: "نصائح منفذ الخفجي ومتطلبات دخول الكويت" },
      icon: "🛂",
    },
    {
      url: "/routes/dammam-to-uae",
      title: { en: "Dammam → UAE Taxi", ar: "تاكسي الدمام → الإمارات" },
      description: { en: "950 km luxury GCC transfer · from 3,500 SAR", ar: "٩٥٠ كم نقل فاخر · من ٣٥٠٠ ريال" },
      icon: "🇦🇪",
    },
    {
      url: "/routes/dammam-to-bahrain",
      title: { en: "Dammam → Bahrain Taxi", ar: "تاكسي الدمام → البحرين" },
      description: { en: "Shorter GCC trip — 85 km · from 350 SAR", ar: "رحلة خليجية أقصر — ٨٥ كم · من ٣٥٠ ريال" },
      icon: "🇧🇭",
    },
  ],

  "/routes/dammam-to-uae": [
    {
      url: "/gcc-border-crossing",
      title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
      description: { en: "Al Batha & Ghuwaifat border tips · UAE entry docs", ar: "نصائح منفذ البطحاء والغويفات · وثائق الإمارات" },
      icon: "🛂",
    },
    {
      url: "/fleet",
      title: { en: "Our Premium Fleet", ar: "أسطولنا الفاخر" },
      description: { en: "GMC Yukon Denali VIP — ideal for the 950 km UAE journey", ar: "جي إم سي يوكن دينالي — مثالية لرحلة ٩٥٠ كم" },
      icon: "🚙",
    },
    {
      url: "/routes/dammam-to-bahrain",
      title: { en: "Dammam → Bahrain Taxi", ar: "تاكسي الدمام → البحرين" },
      description: { en: "Shorter GCC trip — 85 km · from 350 SAR", ar: "رحلة خليجية أقصر — ٨٥ كم · من ٣٥٠ ريال" },
      icon: "🇧🇭",
    },
  ],

  "/routes/dammam-to-riyadh": [
    {
      url: "/corporate-transfers",
      title: { en: "Corporate Transfer Service", ar: "خدمات نقل الشركات" },
      description: { en: "Monthly accounts for Dammam–Riyadh business travel", ar: "حسابات شهرية للسفر التجاري الدمام–الرياض" },
      icon: "💼",
    },
    {
      url: "/fleet",
      title: { en: "Choose Your Vehicle", ar: "اختر سيارتك" },
      description: { en: "Camry, Yukon or Staria for the 400 km highway drive", ar: "كامري أو يوكن أو ستاريا لـ٤٠٠ كم سريع" },
      icon: "🚗",
    },
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport (DMM) Guide", ar: "دليل مطار الدمام" },
      description: { en: "Pickup tips before your Riyadh-bound trip", ar: "نصائح الاستلام قبل رحلتك للرياض" },
      icon: "✈️",
    },
  ],

  "/routes/dammam-airport-to-khobar": [
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport (DMM) Guide", ar: "دليل مطار الدمام" },
      description: { en: "How to meet your driver at King Fahd Airport arrivals", ar: "كيفية لقاء سائقك في صالة الوصول" },
      icon: "✈️",
    },
    {
      url: "/routes/dammam-to-bahrain",
      title: { en: "Continue to Bahrain", ar: "تابع إلى البحرين" },
      description: { en: "Khobar → Bahrain via King Fahd Causeway · from 350 SAR", ar: "الخبر → البحرين عبر الجسر · من ٣٥٠ ريال" },
      icon: "🇧🇭",
    },
    {
      url: "/routes/dammam-airport-to-jubail",
      title: { en: "Airport → Jubail", ar: "المطار → الجبيل" },
      description: { en: "85 km to Jubail Industrial City · from 200 SAR", ar: "٨٥ كم إلى الجبيل الصناعية · من ٢٠٠ ريال" },
      icon: "🏭",
    },
  ],

  "/routes/dammam-airport-to-jubail": [
    {
      url: "/corporate-transfers",
      title: { en: "Corporate Accounts", ar: "حسابات الشركات" },
      description: { en: "Monthly invoicing for Aramco & SABIC Jubail employees", ar: "فاتورة شهرية لموظفي أرامكو وسابك بالجبيل" },
      icon: "💼",
    },
    {
      url: "/routes/dammam-airport-to-dhahran",
      title: { en: "Airport → Dhahran", ar: "المطار → الظهران" },
      description: { en: "40 min · 55 km to Aramco HQ · from 150 SAR", ar: "٤٠ دقيقة · ٥٥ كم لأرامكو · من ١٥٠ ريال" },
      icon: "🏢",
    },
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport Guide", ar: "دليل مطار الدمام" },
      description: { en: "Arrivals guide and meet & greet at DMM Airport", ar: "دليل الوصول والاستقبال في مطار الدمام" },
      icon: "✈️",
    },
  ],

  "/routes/dammam-airport-to-dhahran": [
    {
      url: "/corporate-transfers",
      title: { en: "Corporate Transfer Service", ar: "خدمات نقل الشركات" },
      description: { en: "Executive transfers to Saudi Aramco HQ in Dhahran", ar: "توصيل تنفيذي لمقر أرامكو بالظهران" },
      icon: "💼",
    },
    {
      url: "/routes/dammam-airport-to-jubail",
      title: { en: "Airport → Jubail", ar: "المطار → الجبيل" },
      description: { en: "85 km · Jubail Industrial City · from 200 SAR", ar: "٨٥ كم · الجبيل الصناعية · من ٢٠٠ ريال" },
      icon: "🏭",
    },
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport Guide", ar: "دليل مطار الدمام" },
      description: { en: "All you need to know about arriving at King Fahd Airport", ar: "كل ما تحتاجه عند الوصول لمطار الملك فهد" },
      icon: "✈️",
    },
  ],

  "/routes/dammam-airport-to-hofuf": [
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport Guide", ar: "دليل مطار الدمام" },
      description: { en: "Driver meet & greet guide at King Fahd Airport", ar: "دليل استقبال السائق في مطار الملك فهد" },
      icon: "✈️",
    },
    {
      url: "/routes/dammam-to-riyadh",
      title: { en: "Dammam → Riyadh Taxi", ar: "تاكسي الدمام → الرياض" },
      description: { en: "400 km intercity transfer · from 900 SAR", ar: "٤٠٠ كم بين المدن · من ٩٠٠ ريال" },
      icon: "🏛️",
    },
    {
      url: "/routes/dammam-airport-to-khobar",
      title: { en: "Airport → Khobar", ar: "المطار → الخبر" },
      description: { en: "45 min · 60 km Eastern Province · from 150 SAR", ar: "٤٥ دقيقة · ٦٠ كم المنطقة الشرقية · من ١٥٠ ريال" },
      icon: "🏙️",
    },
  ],

  "/routes/dammam-airport-to-qatar-border": [
    {
      url: "/gcc-border-crossing",
      title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
      description: { en: "Salwa border tips & Qatar entry requirements", ar: "نصائح منفذ سلوى ومتطلبات دخول قطر" },
      icon: "🛂",
    },
    {
      url: "/routes/dammam-to-bahrain",
      title: { en: "Dammam → Bahrain Taxi", ar: "تاكسي الدمام → البحرين" },
      description: { en: "King Fahd Causeway — 85 km · from 350 SAR", ar: "جسر الملك فهد — ٨٥ كم · من ٣٥٠ ريال" },
      icon: "🇧🇭",
    },
    {
      url: "/routes/dammam-to-kuwait",
      title: { en: "Dammam → Kuwait Taxi", ar: "تاكسي الدمام → الكويت" },
      description: { en: "420 km · Khafji border · from 1,500 SAR", ar: "٤٢٠ كم · منفذ الخفجي · من ١٥٠٠ ريال" },
      icon: "🇰🇼",
    },
  ],

  "/corporate-transfers": [
    {
      url: "/routes/dammam-airport-to-jubail",
      title: { en: "Airport → Jubail (Corporate)", ar: "المطار → الجبيل (شركات)" },
      description: { en: "Priority transfers for Aramco, SABIC & RCJY employees", ar: "توصيل أولوية لموظفي أرامكو وسابك والهيئة الملكية" },
      icon: "🏭",
    },
    {
      url: "/routes/dammam-airport-to-dhahran",
      title: { en: "Airport → Aramco Dhahran", ar: "المطار → أرامكو الظهران" },
      description: { en: "Executive transfers to Aramco HQ & KFUPM", ar: "توصيل تنفيذي لأرامكو والجامعة" },
      icon: "🏢",
    },
    {
      url: "/routes/dammam-to-riyadh",
      title: { en: "Dammam → Riyadh Business", ar: "الدمام → الرياض للأعمال" },
      description: { en: "400 km business-class highway transfer · from 900 SAR", ar: "٤٠٠ كم توصيل تجاري · من ٩٠٠ ريال" },
      icon: "🏛️",
    },
    {
      url: "/fleet",
      title: { en: "Our Business Fleet", ar: "أسطول الأعمال" },
      description: { en: "GMC Yukon · Camry · Staria for every corporate trip", ar: "يوكن · كامري · ستاريا لكل رحلة عمل" },
      icon: "🚙",
    },
  ],

  "/dammam-airport-guide": [
    {
      url: "/routes/dammam-airport-to-khobar",
      title: { en: "Airport → Khobar", ar: "المطار → الخبر" },
      description: { en: "45 min · 60 km · from 150 SAR", ar: "٤٥ دقيقة · ٦٠ كم · من ١٥٠ ريال" },
      icon: "🏙️",
    },
    {
      url: "/routes/dammam-airport-to-jubail",
      title: { en: "Airport → Jubail", ar: "المطار → الجبيل" },
      description: { en: "55 min · 85 km · from 200 SAR", ar: "٥٥ دقيقة · ٨٥ كم · من ٢٠٠ ريال" },
      icon: "🏭",
    },
    {
      url: "/routes/dammam-to-bahrain",
      title: { en: "Airport → Bahrain (Causeway)", ar: "المطار → البحرين (الجسر)" },
      description: { en: "1.5–2 hrs · 85 km via King Fahd Causeway · from 350 SAR", ar: "ساعة ونصف · ٨٥ كم عبر الجسر · من ٣٥٠ ريال" },
      icon: "🇧🇭",
    },
    {
      url: "/routes/dammam-to-riyadh",
      title: { en: "Airport → Riyadh", ar: "المطار → الرياض" },
      description: { en: "3.5–4 hrs · 400 km intercity highway · from 900 SAR", ar: "٣.٥–٤ ساعات · ٤٠٠ كم طريق سريع · من ٩٠٠ ريال" },
      icon: "🏛️",
    },
  ],

  "/fleet": [
    {
      url: "/routes/dammam-to-uae",
      title: { en: "Dammam → UAE (VIP Yukon)", ar: "الدمام → الإمارات (يوكن VIP)" },
      description: { en: "950 km luxury — GMC Yukon Denali recommended", ar: "٩٥٠ كم فاخر — ننصح بجي إم سي يوكن دينالي" },
      icon: "🇦🇪",
    },
    {
      url: "/corporate-transfers",
      title: { en: "Corporate Fleet Accounts", ar: "حسابات أسطول الشركات" },
      description: { en: "Dedicated corporate fleet accounts & monthly billing", ar: "حسابات أسطول شركات وفاتورة شهرية" },
      icon: "💼",
    },
    {
      url: "/routes/dammam-to-riyadh",
      title: { en: "Dammam → Riyadh", ar: "الدمام → الرياض" },
      description: { en: "400 km — Camry, Yukon or Staria options", ar: "٤٠٠ كم — خيارات كامري أو يوكن أو ستاريا" },
      icon: "🏛️",
    },
  ],

  "/about": [
    {
      url: "/corporate-transfers",
      title: { en: "Corporate Transfer Service", ar: "خدمات نقل الشركات" },
      description: { en: "Tailored corporate accounts, invoicing & priority dispatch", ar: "حسابات شركات مخصصة وفاتورة وتوصيل أولوية" },
      icon: "💼",
    },
    {
      url: "/fleet",
      title: { en: "Our Premium Fleet", ar: "أسطولنا الفاخر" },
      description: { en: "View our full range of vehicles and amenities", ar: "تصفح أسطول سياراتنا الكامل والمميزات" },
      icon: "🚙",
    },
    {
      url: "/faqs",
      title: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
      description: { en: "Answers to common questions about our service", ar: "إجابات على أسئلة شائعة حول خدمتنا" },
      icon: "❓",
    },
  ],

  "/faqs": [
    {
      url: "/gcc-border-crossing",
      title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
      description: { en: "Detailed documents & process guide for all GCC borders", ar: "دليل تفصيلي للمستندات وإجراءات جميع الحدود الخليجية" },
      icon: "🛂",
    },
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport Guide", ar: "دليل مطار الدمام" },
      description: { en: "How arrivals, meet & greet, and pickups work at DMM", ar: "كيف يعمل الاستقبال والتوصيل في مطار الدمام" },
      icon: "✈️",
    },
    {
      url: "/fleet",
      title: { en: "Our Fleet & Pricing", ar: "أسطولنا والأسعار" },
      description: { en: "Compare vehicles and get the right car for your trip", ar: "قارن السيارات واختر المناسب لرحلتك" },
      icon: "🚙",
    },
  ],

  "/routes/dammam-to-doha": [
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "Salwa border tips & Qatar entry documents", ar: "نصائح سلوى ووثائق دخول قطر" }, icon: "🛂" },
    { url: "/tourist-destinations", title: { en: "All GCC Tourist Destinations", ar: "جميع وجهات السياحة الخليجية" }, description: { en: "Compare all GCC tourist spots reachable from Dammam", ar: "قارن جميع الوجهات السياحية الخليجية من الدمام" }, icon: "🗺️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Dammam → Bahrain Taxi", ar: "تاكسي الدمام → البحرين" }, description: { en: "Closer GCC trip — 85 km via King Fahd Causeway", ar: "رحلة خليجية أقرب — ٨٥ كم عبر الجسر" }, icon: "🇧🇭" },
  ],

  "/routes/dammam-to-abu-dhabi": [
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "Al Batha & Ghuwaifat border crossing tips", ar: "نصائح عبور منفذ البطحاء والغويفات" }, icon: "🛂" },
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai Taxi", ar: "تاكسي الدمام → دبي" }, description: { en: "Dubai transfer via same UAE border · from 3,500 SAR", ar: "توصيل دبي عبر نفس منفذ الإمارات · من ٣٥٠٠ ريال" }, icon: "🏙️" },
    { url: "/routes/dammam-to-sharjah", title: { en: "Dammam → Sharjah Taxi", ar: "تاكسي الدمام → الشارقة" }, description: { en: "UAE cultural capital · 980 km · from 3,600 SAR", ar: "عاصمة الثقافة الإماراتية · ٩٨٠ كم · من ٣٦٠٠ ريال" }, icon: "🇦🇪" },
    { url: "/tourist-destinations", title: { en: "All GCC Tourist Destinations", ar: "جميع وجهات السياحة الخليجية" }, description: { en: "Full list of tourist spots reachable from Dammam", ar: "قائمة كاملة بالوجهات السياحية من الدمام" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-sharjah": [
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai Taxi", ar: "تاكسي الدمام → دبي" }, description: { en: "950 km · Burj Khalifa, Dubai Mall, Palm Jumeirah", ar: "٩٥٠ كم · برج خليفة ودبي مول والنخلة" }, icon: "🏙️" },
    { url: "/routes/dammam-to-abu-dhabi", title: { en: "Dammam → Abu Dhabi Taxi", ar: "تاكسي الدمام → أبوظبي" }, description: { en: "870 km · Sheikh Zayed Mosque, Yas Island", ar: "٨٧٠ كم · مسجد الشيخ زايد وجزيرة ياس" }, icon: "🕌" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "Al Batha border tips for UAE entry", ar: "نصائح منفذ البطحاء لدخول الإمارات" }, icon: "🛂" },
    { url: "/tourist-destinations", title: { en: "All GCC Tourist Destinations", ar: "جميع وجهات السياحة" }, description: { en: "Compare all GCC destinations from Dammam", ar: "قارن جميع الوجهات من الدمام" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-jeddah": [
    { url: "/routes/dammam-to-madinah", title: { en: "Dammam → Madinah Taxi", ar: "تاكسي الدمام → المدينة المنورة" }, description: { en: "1,100 km · Prophet's Mosque, Quba · from 4,000 SAR", ar: "١١٠٠ كم · المسجد النبوي، قباء · من ٤٠٠٠ ريال" }, icon: "🕌" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh Taxi", ar: "تاكسي الدمام → الرياض" }, description: { en: "Intercity transfer · 400 km · from 900 SAR", ar: "توصيل بين المدن · ٤٠٠ كم · من ٩٠٠ ريال" }, icon: "🏛️" },
    { url: "/tourist-destinations", title: { en: "All GCC Tourist Destinations", ar: "جميع وجهات السياحة" }, description: { en: "All destinations reachable from Dammam by taxi", ar: "جميع الوجهات من الدمام بالتاكسي" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-madinah": [
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah Taxi", ar: "تاكسي الدمام → جدة" }, description: { en: "1,260 km · Al-Balad (UNESCO), King Fahd Fountain", ar: "١٢٦٠ كم · البلد يونسكو، نافورة الملك فهد" }, icon: "🌊" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh Taxi", ar: "تاكسي الدمام → الرياض" }, description: { en: "400 km intercity highway · from 900 SAR", ar: "٤٠٠ كم طريق سريع · من ٩٠٠ ريال" }, icon: "🏛️" },
    { url: "/tourist-destinations", title: { en: "All Destinations from Dammam", ar: "جميع الوجهات من الدمام" }, description: { en: "GCC tourist spots and Saudi cities by private taxi", ar: "مواقع الخليج والمدن السعودية بالتاكسي الخاص" }, icon: "🗺️" },
  ],

  "/routes/dammam-to-muscat": [
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "3-country crossing: Saudi → UAE → Oman", ar: "عبور ٣ دول: السعودية → الإمارات → عُمان" }, icon: "🛂" },
    { url: "/routes/dammam-to-uae", title: { en: "Dammam → Dubai Taxi", ar: "تاكسي الدمام → دبي" }, description: { en: "Stop in Dubai on the way to Muscat", ar: "التوقف في دبي في الطريق إلى مسقط" }, icon: "🏙️" },
    { url: "/tourist-destinations", title: { en: "All GCC Tourist Destinations", ar: "جميع وجهات السياحة" }, description: { en: "Compare all GCC destinations reachable from Dammam", ar: "قارن جميع الوجهات الخليجية من الدمام" }, icon: "🗺️" },
  ],

  "/routes/dammam-airport-to-bahrain-airport": [
    { url: "/routes/dammam-to-bahrain", title: { en: "Dammam → Bahrain (City Transfer)", ar: "الدمام → البحرين (توصيل المدينة)" }, description: { en: "General Bahrain transfer — Manama, Riffa, hotels", ar: "توصيل البحرين العام — المنامة والفنادق" }, icon: "🇧🇭" },
    { url: "/dammam-airport-guide", title: { en: "Dammam Airport (DMM) Guide", ar: "دليل مطار الدمام" }, description: { en: "Arrivals guide and driver meet & greet at DMM", ar: "دليل الوصول والاستقبال في مطار الدمام" }, icon: "✈️" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "King Fahd Causeway required documents & tips", ar: "وثائق عبور جسر الملك فهد ونصائح" }, icon: "🛂" },
  ],

  "/dammam-guide": [
    { url: "/dammam-airport-guide", title: { en: "DMM Airport Guide", ar: "دليل مطار الدمام" }, description: { en: "Arrivals, meet & greet, and pickup guide at King Fahd Airport", ar: "دليل الوصول والاستقبال في مطار الملك فهد" }, icon: "✈️" },
    { url: "/routes/dammam-airport-to-dammam-city", title: { en: "Airport → Dammam City", ar: "المطار → مدينة الدمام" }, description: { en: "25 km · 20–25 min direct city transfer", ar: "٢٥ كم · ٢٠–٢٥ دقيقة مباشرة للمدينة" }, icon: "🏙️" },
    { url: "/routes/dammam-to-bahrain", title: { en: "Dammam → Bahrain", ar: "الدمام → البحرين" }, description: { en: "Day trip via King Fahd Causeway · 85 km", ar: "رحلة يومية عبر جسر الملك فهد · ٨٥ كم" }, icon: "🇧🇭" },
    { url: "/tourist-destinations", title: { en: "Tourist Destinations from Dammam", ar: "الوجهات السياحية من الدمام" }, description: { en: "All GCC tourist spots reachable from Dammam", ar: "جميع المواقع السياحية الخليجية من الدمام" }, icon: "🗺️" },
  ],

  "/routes/dammam-airport-to-dammam-city": [
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Tourist spots, business districts & all Dammam info", ar: "المواقع السياحية والأعمال والدليل الشامل للدمام" }, icon: "🏙️" },
    { url: "/dammam-airport-guide", title: { en: "DMM Airport Guide", ar: "دليل مطار الدمام" }, description: { en: "How meet & greet and arrivals work at King Fahd Airport", ar: "كيف يعمل الاستقبال في مطار الملك فهد" }, icon: "✈️" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Khobar", ar: "المطار → الخبر" }, description: { en: "Alternative Eastern Province transfer · 60 km", ar: "توصيل بديل للمنطقة الشرقية · ٦٠ كم" }, icon: "🚗" },
  ],

  "/routes/dammam-airport-to-qatif": [
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Learn about Dammam, Qatif & Eastern Province cities", ar: "تعرف على الدمام والقطيف ومدن المنطقة الشرقية" }, icon: "🏙️" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Khobar", ar: "المطار → الخبر" }, description: { en: "Nearby Eastern Province transfer · 60 km", ar: "توصيل قريب للمنطقة الشرقية · ٦٠ كم" }, icon: "🚗" },
    { url: "/routes/dammam-airport-to-dammam-city", title: { en: "Airport → Dammam City", ar: "المطار → مدينة الدمام" }, description: { en: "City center transfer · 25 km · 20–25 min", ar: "توصيل مركز المدينة · ٢٥ كم" }, icon: "🏙️" },
  ],

  "/routes/dammam-airport-to-ras-tanura": [
    { url: "/corporate-transfers", title: { en: "Corporate Transfer Service", ar: "خدمات نقل الشركات" }, description: { en: "Monthly corporate accounts for Aramco Ras Tanura employees", ar: "حسابات شهرية لموظفي أرامكو برأس تنورة" }, icon: "💼" },
    { url: "/routes/dammam-airport-to-jubail", title: { en: "Airport → Jubail", ar: "المطار → الجبيل" }, description: { en: "Jubail Industrial City · 85 km SABIC & Aramco", ar: "الجبيل الصناعية · ٨٥ كم للسابك وأرامكو" }, icon: "🏭" },
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "Eastern Province cities, Aramco & tourist guide", ar: "مدن المنطقة الشرقية وأرامكو والسياحة" }, icon: "🏙️" },
  ],

  "/routes/dammam-airport-to-half-moon-bay": [
    { url: "/tourist-destinations", title: { en: "GCC Tourist Destinations", ar: "الوجهات السياحية الخليجية" }, description: { en: "More tourist spots reachable from Dammam by taxi", ar: "مزيد من الوجهات السياحية من الدمام بالتاكسي" }, icon: "🗺️" },
    { url: "/routes/dammam-airport-to-khobar", title: { en: "Airport → Khobar", ar: "المطار → الخبر" }, description: { en: "Khobar — closest city to Half Moon Bay · 60 km", ar: "الخبر — أقرب مدينة لخليج نصف القمر · ٦٠ كم" }, icon: "🏙️" },
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "All Eastern Province tourist spots and attractions", ar: "جميع مواقع المنطقة الشرقية السياحية" }, icon: "🏖️" },
  ],

  "/routes/dammam-to-mecca": [
    { url: "/routes/dammam-to-madinah", title: { en: "Dammam → Madinah Taxi", ar: "تاكسي الدمام → المدينة المنورة" }, description: { en: "1,100 km · Prophet's Mosque, Quba Mosque", ar: "١١٠٠ كم · المسجد النبوي ومسجد قباء" }, icon: "🕌" },
    { url: "/routes/dammam-to-jeddah", title: { en: "Dammam → Jeddah Taxi", ar: "تاكسي الدمام → جدة" }, description: { en: "1,260 km · Al-Balad UNESCO, Red Sea port city", ar: "١٢٦٠ كم · البلد يونسكو ومدينة البحر الأحمر" }, icon: "🌊" },
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh Taxi", ar: "تاكسي الدمام → الرياض" }, description: { en: "400 km intercity highway · Saudi capital", ar: "٤٠٠ كم طريق سريع · عاصمة المملكة" }, icon: "🏛️" },
  ],

  "/routes/dammam-to-qassim": [
    { url: "/routes/dammam-to-riyadh", title: { en: "Dammam → Riyadh Taxi", ar: "تاكسي الدمام → الرياض" }, description: { en: "400 km · Saudi capital intercity highway", ar: "٤٠٠ كم · طريق سريع للعاصمة" }, icon: "🏛️" },
    { url: "/routes/dammam-to-madinah", title: { en: "Dammam → Madinah Taxi", ar: "تاكسي الدمام → المدينة المنورة" }, description: { en: "1,100 km · via Qassim direction", ar: "١١٠٠ كم · عبر اتجاه القصيم" }, icon: "🕌" },
    { url: "/dammam-guide", title: { en: "Dammam City Guide", ar: "دليل مدينة الدمام" }, description: { en: "All routes and info about Dammam Eastern Province", ar: "جميع الطرق ومعلومات الدمام والمنطقة الشرقية" }, icon: "🏙️" },
  ],

  "/tourist-destinations": [
    { url: "/routes/dammam-to-bahrain", title: { en: "Bahrain Day Trip", ar: "رحلة يومية للبحرين" }, description: { en: "85 km · King Fahd Causeway · Bahrain Fort, Tree of Life", ar: "٨٥ كم · جسر الملك فهد · قلعة البحرين، شجرة الحياة" }, icon: "🇧🇭" },
    { url: "/routes/dammam-to-doha", title: { en: "Doha, Qatar Weekend", ar: "الدوحة عطلة نهاية الأسبوع" }, description: { en: "400 km · Souq Waqif, Pearl Qatar, Museum of Islamic Art", ar: "٤٠٠ كم · سوق واقف، اللؤلؤة، متحف الفن الإسلامي" }, icon: "🇶🇦" },
    { url: "/routes/dammam-to-uae", title: { en: "Dubai, UAE Multi-Day", ar: "دبي الإمارات رحلة موسعة" }, description: { en: "950 km · Burj Khalifa, Palm Jumeirah, Gold Souk", ar: "٩٥٠ كم · برج خليفة، النخلة، سوق الذهب" }, icon: "🏙️" },
    { url: "/gcc-border-crossing", title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" }, description: { en: "Documents, fees & process for all GCC borders", ar: "الوثائق والرسوم وإجراءات جميع الحدود الخليجية" }, icon: "🛂" },
  ],

  "/blog": [
    {
      url: "/gcc-border-crossing",
      title: { en: "GCC Border Crossing Guide", ar: "دليل عبور حدود الخليج" },
      description: { en: "Our complete guide to all Saudi-GCC borders by taxi", ar: "دليلنا الشامل لجميع حدود المملكة والخليج بالتاكسي" },
      icon: "🛂",
    },
    {
      url: "/dammam-airport-guide",
      title: { en: "Dammam Airport Guide", ar: "دليل مطار الدمام" },
      description: { en: "Practical tips for King Fahd International Airport", ar: "نصائح عملية لمطار الملك فهد الدولي" },
      icon: "✈️",
    },
    {
      url: "/routes/dammam-to-bahrain",
      title: { en: "Dammam → Bahrain Taxi", ar: "تاكسي الدمام → البحرين" },
      description: { en: "Book your King Fahd Causeway transfer today", ar: "احجز توصيلك عبر جسر الملك فهد اليوم" },
      icon: "🇧🇭",
    },
  ],
};
