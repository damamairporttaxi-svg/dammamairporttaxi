export type LocationType = "district" | "hotel" | "hospital" | "attraction" | "industrial";

export interface LocationFaq {
  q: string;
  a: string;
}

export interface LocationPage {
  slug: string;
  type: LocationType;
  name: { en: string; ar: string };
  metaTitle: { en: string; ar: string };
  metaDescription: { en: string; ar: string };
  distanceFromAirport: { en: string; ar: string };
  durationFromAirport: { en: string; ar: string };
  startingPrice: number;
  intro: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
  faqs: { en: LocationFaq[]; ar: LocationFaq[] };
  landmark: { en: string; ar: string };
  mapEmbed?: string;
}

/* ═══════════════════════════════════════════════════════════════
   DISTRICTS
═══════════════════════════════════════════════════════════════ */
const districts: LocationPage[] = [
  {
    slug: "al-faisaliyah",
    type: "district",
    name: { en: "Al Faisaliyah District", ar: "حي الفيصلية" },
    metaTitle: { en: "Taxi to Al Faisaliyah Dammam | Airport Transfer", ar: "تاكسي إلى حي الفيصلية الدمام | توصيل من المطار" },
    metaDescription: { en: "Book a private taxi from Dammam Airport to Al Faisaliyah district. Fixed rates, professional drivers, 24/7 service.", ar: "احجز تاكسي خاص من مطار الدمام إلى حي الفيصلية. أسعار ثابتة، سائقون محترفون، خدمة 24 ساعة." },
    distanceFromAirport: { en: "38 km", ar: "٣٨ كم" },
    durationFromAirport: { en: "30–40 min", ar: "٣٠–٤٠ دقيقة" },
    startingPrice: 120,
    intro: { en: "Al Faisaliyah is one of Dammam's most established residential districts, known for its wide streets and proximity to major commercial centres. Our taxi service covers door-to-door transfers from King Fahd International Airport directly to any address in Al Faisaliyah.", ar: "حي الفيصلية من أرقى أحياء الدمام السكنية، يتميز بشوارعه الواسعة وقربه من المراكز التجارية الكبرى. نوفر خدمة توصيل مباشرة من مطار الملك فهد الدولي إلى أي عنوان في الحي." },
    highlights: { en: ["Door-to-door service to all streets in Al Faisaliyah", "Driver meets you at arrivals with nameplate", "60-minute free wait after landing", "Fixed rate — no hidden charges"], ar: ["خدمة من الباب للباب لجميع شوارع حي الفيصلية", "السائق يستقبلك في صالة الوصول بلوحة باسمك", "ساعة انتظار مجانية بعد الهبوط", "سعر ثابت بدون رسوم خفية"] },
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport to Al Faisaliyah?", a: "A private taxi from King Fahd International Airport to Al Faisaliyah starts from 120 SAR for a standard sedan. SUV and van options are also available." },
        { q: "How long does it take from the airport to Al Faisaliyah?", a: "The drive is approximately 38 km and takes 30–40 minutes depending on traffic conditions." },
        { q: "Can I book a return taxi from Al Faisaliyah to the airport?", a: "Yes. We provide return transfers from Al Faisaliyah to Dammam Airport. Contact us on WhatsApp to schedule your pickup." },
      ],
      ar: [
        { q: "كم سعر التاكسي من مطار الدمام إلى حي الفيصلية؟", a: "يبدأ سعر التاكسي الخاص من مطار الملك فهد الدولي إلى حي الفيصلية من ١٢٠ ريال للسيدان القياسية، مع خيارات SUV وفان متاحة أيضاً." },
        { q: "كم تستغرق الرحلة من المطار إلى حي الفيصلية؟", a: "المسافة حوالي ٣٨ كم وتستغرق ٣٠–٤٠ دقيقة حسب حركة المرور." },
        { q: "هل يمكن حجز تاكسي عودة من حي الفيصلية إلى المطار؟", a: "نعم، نوفر توصيل ذهاباً وعودةً من حي الفيصلية إلى مطار الدمام. تواصل معنا على واتساب لتحديد موعد استلامك." },
      ],
    },
    landmark: { en: "Near Dammam Corniche", ar: "قرب كورنيش الدمام" },
  },
  {
    slug: "al-shati",
    type: "district",
    name: { en: "Al Shati District", ar: "حي الشاطئ" },
    metaTitle: { en: "Taxi to Al Shati Dammam | Airport Transfer Service", ar: "تاكسي إلى حي الشاطئ الدمام | توصيل من المطار" },
    metaDescription: { en: "Private taxi from Dammam Airport to Al Shati district. Meet & greet, fixed fares, 24/7 availability.", ar: "تاكسي خاص من مطار الدمام إلى حي الشاطئ. استقبال في المطار، أسعار ثابتة، متاح 24 ساعة." },
    distanceFromAirport: { en: "42 km", ar: "٤٢ كم" },
    durationFromAirport: { en: "35–45 min", ar: "٣٥–٤٥ دقيقة" },
    startingPrice: 130,
    intro: { en: "Al Shati is an upscale coastal district in Dammam with direct access to the Arabian Gulf waterfront. Our airport transfer service covers all streets and compounds in Al Shati with professional, pre-booked private taxis.", ar: "حي الشاطئ من أرقى أحياء الدمام الساحلية ذات الإطلالة المباشرة على الخليج العربي. خدمة التوصيل لدينا تغطي جميع شوارع ومجمعات الحي." },
    highlights: { en: ["Beachfront residential area coverage", "Available for hotel compounds & villas", "Real-time flight tracking", "Sedan, SUV & Family Van options"], ar: ["تغطية شاملة للمنطقة الساحلية السكنية", "متاح للفنادق والمجمعات والفلل", "تتبع الرحلة الجوية في الوقت الفعلي", "خيارات سيدان وSUV وفان عائلي"] },
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport to Al Shati?", a: "Transfers to Al Shati district start from 130 SAR for a standard sedan. Price includes waiting time and all tolls." },
        { q: "Is Al Shati close to the Dammam Corniche?", a: "Yes, Al Shati is the district bordering the Dammam Corniche waterfront, making it one of the most scenic residential areas." },
      ],
      ar: [
        { q: "كم سعر التاكسي من مطار الدمام إلى حي الشاطئ؟", a: "يبدأ التوصيل إلى حي الشاطئ من ١٣٠ ريال للسيدان، ويشمل وقت الانتظار وجميع الرسوم." },
        { q: "هل حي الشاطئ قريب من كورنيش الدمام؟", a: "نعم، حي الشاطئ يقع مباشرة على كورنيش الدمام مما يجعله من أجمل الأحياء السكنية." },
      ],
    },
    landmark: { en: "On Dammam Corniche waterfront", ar: "على واجهة كورنيش الدمام" },
  },
  {
    slug: "al-rawdah",
    type: "district",
    name: { en: "Al Rawdah District", ar: "حي الروضة" },
    metaTitle: { en: "Taxi to Al Rawdah Dammam | Airport Pickup Service", ar: "تاكسي إلى حي الروضة الدمام | توصيل من المطار" },
    metaDescription: { en: "Book airport taxi to Al Rawdah Dammam. Fixed price transfers with professional drivers.", ar: "احجز تاكسي مطار إلى حي الروضة الدمام. توصيل بسعر ثابت مع سائقين محترفين." },
    distanceFromAirport: { en: "35 km", ar: "٣٥ كم" },
    durationFromAirport: { en: "28–35 min", ar: "٢٨–٣٥ دقيقة" },
    startingPrice: 115,
    intro: { en: "Al Rawdah is a central Dammam district popular with families and business travellers. Conveniently located near the city's major shopping malls and commercial areas, it's one of our most requested transfer destinations.", ar: "حي الروضة من أحياء الدمام المركزية الشهيرة لدى العائلات ورجال الأعمال، ويقع بالقرب من أكبر المراكز التجارية." },
    highlights: { en: ["Central Dammam location", "Near major malls & restaurants", "Available 24/7 including holidays", "Child seats on request"], ar: ["موقع مركزي في الدمام", "قريب من كبرى المراكز التجارية والمطاعم", "متاح 24/7 بما في ذلك الإجازات", "مقاعد أطفال عند الطلب"] },
    faqs: {
      en: [
        { q: "What is the fare from Dammam Airport to Al Rawdah?", a: "Taxi transfers from King Fahd Airport to Al Rawdah start from 115 SAR for a Camry sedan. The journey takes approximately 28–35 minutes." },
      ],
      ar: [
        { q: "كم أجرة التاكسي من مطار الدمام إلى حي الروضة؟", a: "يبدأ سعر التاكسي من مطار الملك فهد إلى حي الروضة من ١١٥ ريال للكامري سيدان. تستغرق الرحلة حوالي ٢٨–٣٥ دقيقة." },
      ],
    },
    landmark: { en: "Near Dammam City Center Mall", ar: "قرب سيتي سنتر الدمام" },
  },
  {
    slug: "al-rayyan",
    type: "district",
    name: { en: "Al Rayyan District", ar: "حي الريان" },
    metaTitle: { en: "Taxi to Al Rayyan Dammam | Private Airport Transfer", ar: "تاكسي إلى حي الريان الدمام | توصيل خاص من المطار" },
    metaDescription: { en: "Private taxi from Dammam Airport to Al Rayyan. Professional drivers, meet & greet, fixed rates.", ar: "تاكسي خاص من مطار الدمام إلى حي الريان. سائقون محترفون، استقبال في المطار، أسعار ثابتة." },
    distanceFromAirport: { en: "33 km", ar: "٣٣ كم" },
    durationFromAirport: { en: "25–35 min", ar: "٢٥–٣٥ دقيقة" },
    startingPrice: 110,
    intro: { en: "Al Rayyan is a vibrant Dammam neighbourhood with easy access to highways connecting to Khobar and Dhahran. Our direct airport taxi service ensures you reach Al Rayyan quickly and comfortably after your flight.", ar: "حي الريان من الأحياء الحيوية في الدمام ذات الوصول السهل للطرق السريعة. خدمة التاكسي المباشرة من المطار تضمن وصولك بسرعة وراحة." },
    highlights: { en: ["Quick highway access from airport", "Suitable for families & solo travellers", "WhatsApp booking confirmation", "Flight delay monitoring included"], ar: ["وصول سريع عبر الطريق السريع من المطار", "مناسب للعائلات والمسافرين الأفراد", "تأكيد الحجز عبر واتساب", "متابعة تأخير الرحلات مشمولة"] },
    faqs: {
      en: [{ q: "How do I book a taxi from Dammam Airport to Al Rayyan?", a: "Send us a WhatsApp message with your flight number, arrival time, and destination address in Al Rayyan. We will confirm your booking with driver details within minutes." }],
      ar: [{ q: "كيف أحجز تاكسي من مطار الدمام إلى حي الريان؟", a: "أرسل لنا رسالة واتساب مع رقم رحلتك ووقت الوصول وعنوان وجهتك في حي الريان، وسنؤكد حجزك مع بيانات السائق في دقائق." }],
    },
    landmark: { en: "Near Dammam–Khobar highway", ar: "قرب طريق الدمام–الخبر السريع" },
  },
  {
    slug: "al-firdous",
    type: "district",
    name: { en: "Al Firdous District", ar: "حي الفردوس" },
    metaTitle: { en: "Taxi to Al Firdous Dammam | Airport Transfer", ar: "تاكسي إلى حي الفردوس الدمام | توصيل من المطار" },
    metaDescription: { en: "Airport taxi to Al Firdous district Dammam. Professional drivers, fixed rates, 24/7 service.", ar: "تاكسي مطار إلى حي الفردوس الدمام. سائقون محترفون، أسعار ثابتة، خدمة 24 ساعة." },
    distanceFromAirport: { en: "36 km", ar: "٣٦ كم" },
    durationFromAirport: { en: "30–38 min", ar: "٣٠–٣٨ دقيقة" },
    startingPrice: 118,
    intro: { en: "Al Firdous is a well-established residential district in northern Dammam. Our taxi service connects King Fahd International Airport to Al Firdous with door-to-door precision and professional chauffeurs.", ar: "حي الفردوس من الأحياء السكنية الراسخة في شمال الدمام. خدمة التاكسي لدينا تربط مطار الملك فهد الدولي بالحي بدقة متناهية." },
    highlights: { en: ["Northern Dammam coverage", "Business & family trips covered", "No surge pricing", "Secure, sanitized vehicles"], ar: ["تغطية شمال الدمام", "مناسب لرحلات الأعمال والعائلات", "بدون رسوم إضافية في أوقات الذروة", "سيارات نظيفة ومعقمة"] },
    faqs: {
      en: [{ q: "Is taxi service available to Al Firdous district late at night?", a: "Yes, our service operates 24/7 including late nights and early mornings. All bookings are pre-arranged, so your driver will be ready regardless of arrival time." }],
      ar: [{ q: "هل تتوفر خدمة التاكسي إلى حي الفردوس في وقت متأخر من الليل؟", a: "نعم، خدمتنا متاحة 24 ساعة 7 أيام بما في ذلك أوقات الليل المتأخر. جميع الحجوزات مسبقة لضمان وجود سائقك في انتظارك." }],
    },
    landmark: { en: "Northern Dammam residential area", ar: "منطقة سكنية شمال الدمام" },
  },
  {
    slug: "al-noor",
    type: "district",
    name: { en: "Al Noor District", ar: "حي النور" },
    metaTitle: { en: "Taxi to Al Noor Dammam | Airport Transfer Service", ar: "تاكسي إلى حي النور الدمام | توصيل من المطار" },
    metaDescription: { en: "Book private taxi to Al Noor district Dammam from the airport. Fixed rates, meet & greet, 24/7.", ar: "احجز تاكسي خاص إلى حي النور الدمام من المطار. أسعار ثابتة، استقبال، 24 ساعة." },
    distanceFromAirport: { en: "34 km", ar: "٣٤ كم" },
    durationFromAirport: { en: "27–35 min", ar: "٢٧–٣٥ دقيقة" },
    startingPrice: 112,
    intro: { en: "Al Noor is a centrally located Dammam district offering convenient access to government offices, hospitals, and commercial centres. We provide reliable airport-to-door taxi transfers to all addresses in Al Noor.", ar: "حي النور يقع في وسط الدمام ويوفر وصولاً سهلاً للدوائر الحكومية والمستشفيات والمراكز التجارية." },
    highlights: { en: ["Central location with easy access", "Near government & medical facilities", "GPS-tracked vehicles", "Fixed fare quoted upfront"], ar: ["موقع مركزي سهل الوصول", "قريب من المرافق الحكومية والطبية", "سيارات مُتتَبَّعة بـGPS", "سعر ثابت يُعلَن مسبقاً"] },
    faqs: {
      en: [{ q: "How much does a taxi from Dammam Airport to Al Noor district cost?", a: "Taxi fares to Al Noor start from 112 SAR. The price is fixed and communicated at the time of booking — no surprises." }],
      ar: [{ q: "كم تكلفة التاكسي من مطار الدمام إلى حي النور؟", a: "تبدأ أجرة التاكسي إلى حي النور من ١١٢ ريال. السعر ثابت ويُعلَن وقت الحجز — بدون مفاجآت." }],
    },
    landmark: { en: "Near Dammam Municipal Centre", ar: "قرب بلدية الدمام" },
  },
  {
    slug: "al-khaleej",
    type: "district",
    name: { en: "Al Khaleej District", ar: "حي الخليج" },
    metaTitle: { en: "Taxi to Al Khaleej Dammam | Airport Taxi Service", ar: "تاكسي إلى حي الخليج الدمام | خدمة تاكسي مطار" },
    metaDescription: { en: "Private airport taxi to Al Khaleej district Dammam. Professional drivers, fixed prices, instant WhatsApp booking.", ar: "تاكسي مطار خاص إلى حي الخليج الدمام. سائقون محترفون، أسعار ثابتة، حجز فوري بواتساب." },
    distanceFromAirport: { en: "40 km", ar: "٤٠ كم" },
    durationFromAirport: { en: "32–42 min", ar: "٣٢–٤٢ دقيقة" },
    startingPrice: 125,
    intro: { en: "Al Khaleej district in Dammam is known for its proximity to the Arabian Gulf and upscale residential compounds. Our airport transfer service covers the entire district including all compounds and villas.", ar: "حي الخليج بالدمام معروف بقربه من الخليج العربي والمجمعات السكنية الراقية. خدمة التوصيل من المطار تغطي الحي بالكامل." },
    highlights: { en: ["Gulf-view residential compounds covered", "Luxury vehicle options available", "Driver with nameplate at arrivals", "WhatsApp support throughout journey"], ar: ["تغطية مجمعات سكنية مطلة على الخليج", "خيارات سيارات فاخرة متاحة", "سائق بلوحة استقبال في صالة الوصول", "دعم واتساب طوال الرحلة"] },
    faqs: {
      en: [{ q: "Can I get a luxury SUV taxi to Al Khaleej district?", a: "Yes, we offer GMC Yukon and similar VIP SUVs for transfers to Al Khaleej. Ideal for larger groups or those wanting extra comfort." }],
      ar: [{ q: "هل يمكنني الحصول على تاكسي SUV فاخر إلى حي الخليج؟", a: "نعم، نوفر جي إم سي يوكن وSUVs مماثلة للتوصيل إلى حي الخليج. مثالية للمجموعات أو من يريد مزيداً من الراحة." }],
    },
    landmark: { en: "Gulf-facing residential area", ar: "منطقة سكنية مطلة على الخليج" },
  },
  {
    slug: "al-nuzha",
    type: "district",
    name: { en: "Al Nuzha District", ar: "حي النزهة" },
    metaTitle: { en: "Taxi to Al Nuzha Dammam | Airport Transfer", ar: "تاكسي إلى حي النزهة الدمام | توصيل من المطار" },
    metaDescription: { en: "Reliable airport taxi to Al Nuzha Dammam. Book online via WhatsApp, fixed rates, 24/7.", ar: "تاكسي موثوق من مطار الدمام إلى حي النزهة. احجز عبر واتساب، أسعار ثابتة، 24 ساعة." },
    distanceFromAirport: { en: "37 km", ar: "٣٧ كم" },
    durationFromAirport: { en: "30–40 min", ar: "٣٠–٤٠ دقيقة" },
    startingPrice: 120,
    intro: { en: "Al Nuzha is a family-friendly district in Dammam with parks and schools. Our taxi service ensures safe and comfortable transfers from King Fahd International Airport to all addresses in Al Nuzha.", ar: "حي النزهة من الأحياء العائلية بالدمام المعروفة بحدائقها ومدارسها. خدمتنا تضمن توصيلاً آمناً ومريحاً من مطار الملك فهد." },
    highlights: { en: ["Family-friendly service", "Baby seats available on request", "Pre-booked fixed rate", "Reliable on-time pickup"], ar: ["خدمة مناسبة للعائلات", "مقاعد أطفال عند الطلب", "سعر ثابت محجوز مسبقاً", "استلام دقيق في الموعد المحدد"] },
    faqs: {
      en: [{ q: "Do you provide baby seats for transfers to Al Nuzha?", a: "Yes, we offer complimentary infant and toddler car seats when requested at the time of booking." }],
      ar: [{ q: "هل توفرون مقاعد أطفال للتوصيل إلى حي النزهة؟", a: "نعم، نوفر مقاعد أمان للرضع والأطفال مجاناً عند طلبها وقت الحجز." }],
    },
    landmark: { en: "Residential park area, central Dammam", ar: "منطقة حدائق سكنية، وسط الدمام" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   HOTELS
═══════════════════════════════════════════════════════════════ */
const hotels: LocationPage[] = [
  {
    slug: "sheraton-dammam",
    type: "hotel",
    name: { en: "Sheraton Dammam Hotel & Convention Centre", ar: "فندق شيراتون الدمام ومركز المؤتمرات" },
    metaTitle: { en: "Taxi to Sheraton Dammam Hotel | Airport Transfer", ar: "تاكسي إلى فندق شيراتون الدمام | توصيل من المطار" },
    metaDescription: { en: "Book a private airport taxi to Sheraton Dammam Hotel. Fixed rates, meet & greet, 24/7 transfers from King Fahd International Airport.", ar: "احجز تاكسي مطار خاص إلى فندق شيراتون الدمام. أسعار ثابتة، استقبال في المطار، توصيل 24 ساعة." },
    distanceFromAirport: { en: "42 km", ar: "٤٢ كم" },
    durationFromAirport: { en: "35–45 min", ar: "٣٥–٤٥ دقيقة" },
    startingPrice: 130,
    intro: { en: "The Sheraton Dammam Hotel & Convention Centre is one of the Eastern Province's leading five-star hotels. Our taxi service provides professional, pre-booked transfers directly from King Fahd International Airport to the Sheraton's main entrance.", ar: "فندق شيراتون الدمام ومركز المؤتمرات من أبرز فنادق المنطقة الشرقية الخمس نجوم. خدمة التاكسي لدينا توفر توصيلاً احترافياً مسبقاً من مطار الملك فهد الدولي مباشرة إلى المدخل الرئيسي للفندق." },
    highlights: { en: ["Drop-off at hotel main entrance", "Driver monitors your flight arrival", "Business-class sedan & SUV options", "60-minute free waiting time included"], ar: ["إنزال عند المدخل الرئيسي للفندق", "السائق يتابع وصول رحلتك", "خيارات سيدان درجة أعمال وSUV", "ساعة انتظار مجانية مشمولة"] },
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport to the Sheraton Hotel?", a: "A private taxi to Sheraton Dammam starts from 130 SAR for a standard sedan. The fare is fixed and includes free waiting time of 60 minutes after landing." },
        { q: "Can the driver drop me at the hotel entrance?", a: "Yes, our drivers are familiar with all major hotels in Dammam and will drop you directly at the Sheraton's designated arrival entrance." },
      ],
      ar: [
        { q: "كم سعر التاكسي من مطار الدمام إلى فندق شيراتون؟", a: "يبدأ سعر التاكسي الخاص إلى شيراتون الدمام من ١٣٠ ريال للسيدان القياسية، ويشمل ساعة انتظار مجانية بعد الهبوط." },
        { q: "هل يمكن للسائق إيصالي مباشرة إلى مدخل الفندق؟", a: "نعم، سائقونا على دراية بجميع الفنادق الكبرى بالدمام وسيُنزلونك مباشرة عند مدخل الاستقبال المخصص في شيراتون." },
      ],
    },
    landmark: { en: "Dammam Corniche, King Fahd Road", ar: "كورنيش الدمام، طريق الملك فهد" },
  },
  {
    slug: "wyndham-garden-dammam",
    type: "hotel",
    name: { en: "Wyndham Garden Dammam", ar: "وينداهم جاردن الدمام" },
    metaTitle: { en: "Taxi to Wyndham Garden Dammam | Airport Transfer", ar: "تاكسي إلى وينداهم جاردن الدمام | توصيل من المطار" },
    metaDescription: { en: "Private taxi from Dammam Airport to Wyndham Garden Dammam. Fixed rates, professional drivers, instant WhatsApp booking.", ar: "تاكسي خاص من مطار الدمام إلى وينداهم جاردن. أسعار ثابتة، سائقون محترفون، حجز فوري." },
    distanceFromAirport: { en: "38 km", ar: "٣٨ كم" },
    durationFromAirport: { en: "30–40 min", ar: "٣٠–٤٠ دقيقة" },
    startingPrice: 125,
    intro: { en: "Wyndham Garden Dammam is a popular business hotel in the heart of the city. Our airport transfer service guarantees a seamless pickup at King Fahd International Airport and a comfortable ride to the hotel's front door.", ar: "وينداهم جاردن الدمام فندق أعمال شهير في قلب المدينة. خدمة التوصيل من المطار تضمن استقبالاً سلساً في مطار الملك فهد ورحلة مريحة حتى باب الفندق." },
    highlights: { en: ["Business traveller preferred service", "Driver at arrivals with name sign", "Clean & air-conditioned vehicles", "All makes/models available"], ar: ["خدمة مفضلة لرجال الأعمال", "سائق في صالة الوصول بلوحة الاسم", "سيارات نظيفة ومكيفة", "جميع الموديلات متاحة"] },
    faqs: {
      en: [{ q: "What is the taxi fare from Dammam Airport to Wyndham Garden?", a: "Transfers to Wyndham Garden Dammam start from 125 SAR for a standard Camry sedan. SUV and luxury options available on request." }],
      ar: [{ q: "ما هي أجرة التاكسي من مطار الدمام إلى وينداهم جاردن؟", a: "يبدأ التوصيل إلى وينداهم جاردن الدمام من ١٢٥ ريال للكامري سيدان. خيارات SUV وفاخرة متاحة عند الطلب." }],
    },
    landmark: { en: "Dammam city centre", ar: "وسط مدينة الدمام" },
  },
  {
    slug: "novotel-dammam",
    type: "hotel",
    name: { en: "Novotel Dammam Business Park", ar: "نوفوتيل الدمام بيزنس بارك" },
    metaTitle: { en: "Taxi to Novotel Dammam Business Park | Airport Transfer", ar: "تاكسي إلى نوفوتيل الدمام بيزنس بارك | توصيل مطار" },
    metaDescription: { en: "Airport taxi to Novotel Dammam Business Park. Fixed rates, 24/7, professional chauffeur service.", ar: "تاكسي مطار إلى نوفوتيل الدمام بيزنس بارك. أسعار ثابتة، 24 ساعة، خدمة سائق احترافية." },
    distanceFromAirport: { en: "40 km", ar: "٤٠ كم" },
    durationFromAirport: { en: "32–42 min", ar: "٣٢–٤٢ دقيقة" },
    startingPrice: 128,
    intro: { en: "Novotel Dammam Business Park caters to the region's active business community. Our taxi service provides on-time airport pickups with executive-class vehicles, perfect for the business traveller.", ar: "نوفوتيل الدمام بيزنس بارك يخدم مجتمع الأعمال النشط في المنطقة. خدمة التاكسي توفر استلاماً دقيقاً من المطار بسيارات درجة أعمال." },
    highlights: { en: ["Executive sedan & SUV for business travel", "On-time guarantee", "In-car Wi-Fi available", "Flight tracking ensures timely pickup"], ar: ["سيدان وSUV تنفيذية لرحلات الأعمال", "ضمان الالتزام بالمواعيد", "واي فاي داخل السيارة", "تتبع الرحلة يضمن الاستلام في الوقت المناسب"] },
    faqs: {
      en: [{ q: "Do you offer corporate accounts for regular transfers to Novotel Dammam?", a: "Yes. We support monthly corporate accounts with consolidated invoicing for businesses that regularly travel to Novotel Dammam Business Park." }],
      ar: [{ q: "هل تقدمون حسابات شركات للتوصيل المنتظم إلى نوفوتيل الدمام؟", a: "نعم. ندعم حسابات الشركات الشهرية مع فاتورة موحدة للمنشآت التي تنتقل بانتظام إلى نوفوتيل الدمام بيزنس بارك." }],
    },
    landmark: { en: "Dammam Business Park area", ar: "منطقة بيزنس بارك الدمام" },
  },
  {
    slug: "residence-inn-dammam",
    type: "hotel",
    name: { en: "Residence Inn by Marriott Dammam", ar: "ريزيدنس إن باي ماريوت الدمام" },
    metaTitle: { en: "Taxi to Residence Inn Dammam | Airport Transfer", ar: "تاكسي إلى ريزيدنس إن ماريوت الدمام | توصيل مطار" },
    metaDescription: { en: "Book a taxi from Dammam Airport to Residence Inn Dammam. Fixed price, meet & greet, professional drivers.", ar: "احجز تاكسي من مطار الدمام إلى ريزيدنس إن الدمام. سعر ثابت، استقبال في المطار، سائقون محترفون." },
    distanceFromAirport: { en: "41 km", ar: "٤١ كم" },
    durationFromAirport: { en: "33–43 min", ar: "٣٣–٤٣ دقيقة" },
    startingPrice: 130,
    intro: { en: "Residence Inn by Marriott Dammam is the top choice for extended-stay business travellers. We provide reliable, pre-booked airport taxis to the hotel with full flight monitoring and meet-and-greet service.", ar: "ريزيدنس إن باي ماريوت الدمام الخيار الأول لرجال الأعمال في الإقامات الممتدة. نوفر تاكسي موثوقاً مسبقاً إلى الفندق مع متابعة الرحلة وخدمة الاستقبال." },
    highlights: { en: ["Extended-stay traveller specialist", "Large luggage vehicles available", "Named driver at arrivals", "Early morning & late night pickups"], ar: ["متخصص في مسافري الإقامة الممتدة", "سيارات لحمل الأمتعة الكثيرة", "سائق بالاسم في صالة الوصول", "استلام في الصباح الباكر والليل المتأخر"] },
    faqs: {
      en: [{ q: "Is there a family van option for transfers to Residence Inn Dammam?", a: "Yes. Our Hyundai Staria family van accommodates up to 8 passengers with ample luggage space, ideal for families and extended-stay groups." }],
      ar: [{ q: "هل يوجد خيار فان عائلي للتوصيل إلى ريزيدنس إن الدمام؟", a: "نعم. فان هيونداي ستاريا يستوعب حتى ٨ ركاب مع مساحة واسعة للأمتعة، مثالي للعائلات ومجموعات الإقامة الممتدة." }],
    },
    landmark: { en: "Dammam commercial district", ar: "الحي التجاري بالدمام" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   HOSPITALS
═══════════════════════════════════════════════════════════════ */
const hospitals: LocationPage[] = [
  {
    slug: "king-fahad-specialist-hospital",
    type: "hospital",
    name: { en: "King Fahad Specialist Hospital Dammam", ar: "مستشفى الملك فهد التخصصي الدمام" },
    metaTitle: { en: "Taxi to King Fahad Specialist Hospital Dammam | Airport Transfer", ar: "تاكسي إلى مستشفى الملك فهد التخصصي الدمام | توصيل مطار" },
    metaDescription: { en: "Book a private taxi from Dammam Airport to King Fahad Specialist Hospital. Fixed rates, professional drivers, 24/7 medical transfer service.", ar: "احجز تاكسي خاص من مطار الدمام إلى مستشفى الملك فهد التخصصي. أسعار ثابتة، سائقون محترفون، خدمة توصيل طبي 24 ساعة." },
    distanceFromAirport: { en: "35 km", ar: "٣٥ كم" },
    durationFromAirport: { en: "28–38 min", ar: "٢٨–٣٨ دقيقة" },
    startingPrice: 115,
    intro: { en: "King Fahad Specialist Hospital is one of Saudi Arabia's leading tertiary care facilities. Our taxi service specialises in comfortable, stress-free transfers from King Fahd International Airport directly to the hospital — for patients, visitors, and medical staff.", ar: "مستشفى الملك فهد التخصصي من أبرز مرافق الرعاية الصحية المتخصصة في المملكة. خدمة التاكسي لدينا متخصصة في التوصيل المريح من مطار الملك فهد الدولي مباشرة إلى المستشفى." },
    highlights: { en: ["Patient & visitor transportation", "Wheelchair-accessible vehicles on request", "Smooth, careful driving for patient comfort", "24/7 including weekends & holidays"], ar: ["نقل المرضى والزوار", "سيارات مجهزة لكراسي الإعاقة عند الطلب", "قيادة هادئة لراحة المرضى", "24 ساعة بما في ذلك نهايات الأسبوع والإجازات"] },
    faqs: {
      en: [
        { q: "How far is King Fahad Specialist Hospital from Dammam Airport?", a: "King Fahad Specialist Hospital is approximately 35 km from King Fahd International Airport, a drive of 28–38 minutes." },
        { q: "Do you provide wheelchair-accessible taxis to the hospital?", a: "We can arrange wheelchair-accessible vehicles on advance request. Please mention your requirements when booking via WhatsApp." },
      ],
      ar: [
        { q: "كم المسافة بين مستشفى الملك فهد التخصصي ومطار الدمام؟", a: "يبعد مستشفى الملك فهد التخصصي حوالي ٣٥ كم عن مطار الملك فهد الدولي، رحلة تستغرق ٢٨–٣٨ دقيقة." },
        { q: "هل توفرون تاكسي مجهز لكراسي الإعاقة إلى المستشفى؟", a: "يمكننا ترتيب سيارات مجهزة لكراسي الإعاقة عند الطلب المسبق. يُرجى ذكر متطلباتك عند الحجز عبر واتساب." },
      ],
    },
    landmark: { en: "Prince Muhammed Bin Fahad Road, Dammam", ar: "طريق الأمير محمد بن فهد، الدمام" },
  },
  {
    slug: "king-fahd-university-hospital",
    type: "hospital",
    name: { en: "King Fahd University Hospital (KFUH)", ar: "مستشفى الملك فهد الجامعي" },
    metaTitle: { en: "Taxi to King Fahd University Hospital Dammam | Airport Transfer", ar: "تاكسي إلى مستشفى الملك فهد الجامعي | توصيل مطار" },
    metaDescription: { en: "Reliable taxi from Dammam Airport to King Fahd University Hospital. Fixed prices, 24/7 medical transportation.", ar: "تاكسي موثوق من مطار الدمام إلى مستشفى الملك فهد الجامعي. أسعار ثابتة، نقل طبي 24 ساعة." },
    distanceFromAirport: { en: "52 km", ar: "٥٢ كم" },
    durationFromAirport: { en: "40–55 min", ar: "٤٠–٥٥ دقيقة" },
    startingPrice: 145,
    intro: { en: "King Fahd University Hospital (KFUH) is affiliated with Imam Abdulrahman Bin Faisal University in Dammam. We provide professional taxi transfers from the airport to KFUH for patients, families, and medical professionals.", ar: "مستشفى الملك فهد الجامعي تابع لجامعة الإمام عبدالرحمن بن فيصل بالدمام. نوفر توصيلاً احترافياً من المطار إلى المستشفى." },
    highlights: { en: ["University hospital specialist transfer", "Patient-focused comfortable vehicles", "Available for medical staff pickups", "Fixed fare with no surge pricing"], ar: ["توصيل متخصص للمستشفى الجامعي", "سيارات مريحة تركز على راحة المريض", "متاح لاستلام الكوادر الطبية", "أجرة ثابتة بدون رسوم ذروة"] },
    faqs: {
      en: [{ q: "How much is a taxi from Dammam Airport to King Fahd University Hospital?", a: "Transfers to KFUH start from 145 SAR for a standard sedan. The hospital is located 52 km from the airport, approximately 40–55 minutes." }],
      ar: [{ q: "كم سعر التاكسي من مطار الدمام إلى مستشفى الملك فهد الجامعي؟", a: "يبدأ التوصيل إلى مستشفى الملك فهد الجامعي من ١٤٥ ريال. يبعد المستشفى ٥٢ كم عن المطار بحوالي ٤٠–٥٥ دقيقة." }],
    },
    landmark: { en: "Imam Abdulrahman Bin Faisal University, Al Khobar Road", ar: "جامعة الإمام عبدالرحمن بن فيصل، طريق الخبر" },
  },
  {
    slug: "dammam-medical-complex",
    type: "hospital",
    name: { en: "Dammam Medical Complex", ar: "المجمع الطبي بالدمام" },
    metaTitle: { en: "Taxi to Dammam Medical Complex | Airport Transfer", ar: "تاكسي إلى المجمع الطبي بالدمام | توصيل مطار" },
    metaDescription: { en: "Private taxi from Dammam Airport to Dammam Medical Complex. 24/7 service, fixed rates, professional drivers.", ar: "تاكسي خاص من مطار الدمام إلى المجمع الطبي. خدمة 24 ساعة، أسعار ثابتة، سائقون محترفون." },
    distanceFromAirport: { en: "33 km", ar: "٣٣ كم" },
    durationFromAirport: { en: "27–35 min", ar: "٢٧–٣٥ دقيقة" },
    startingPrice: 112,
    intro: { en: "Dammam Medical Complex is a major public hospital serving the Eastern Province. Our taxi service provides stress-free transfers from King Fahd International Airport to the complex for patients and their accompanying family members.", ar: "المجمع الطبي بالدمام مستشفى حكومي رئيسي يخدم المنطقة الشرقية. توصيل مريح من مطار الملك فهد للمرضى ومرافقيهم." },
    highlights: { en: ["Quick route to central Dammam hospital", "24/7 including emergencies", "Soft & careful driving standard", "Family vehicle options"], ar: ["مسار سريع إلى المستشفى الحكومي المركزي", "24 ساعة بما في ذلك الطوارئ", "معيار قيادة هادئة ولطيفة", "خيارات سيارات عائلية"] },
    faqs: {
      en: [{ q: "Is there a 24/7 taxi service to Dammam Medical Complex?", a: "Yes, our service operates around the clock. Medical transfers are given priority to ensure patients and families reach the hospital without delays." }],
      ar: [{ q: "هل توجد خدمة تاكسي 24 ساعة إلى المجمع الطبي بالدمام؟", a: "نعم، خدمتنا متاحة على مدار الساعة. توصيل المرضى يُعطى الأولوية لضمان وصول المرضى وعائلاتهم دون تأخير." }],
    },
    landmark: { en: "Al Muraikabat, Central Dammam", ar: "المريكبات، وسط الدمام" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   TOURIST ATTRACTIONS
═══════════════════════════════════════════════════════════════ */
const attractions: LocationPage[] = [
  {
    slug: "dammam-corniche",
    type: "attraction",
    name: { en: "Dammam Corniche", ar: "كورنيش الدمام" },
    metaTitle: { en: "Taxi to Dammam Corniche | Airport & City Transfer", ar: "تاكسي إلى كورنيش الدمام | توصيل من المطار والمدينة" },
    metaDescription: { en: "Book a taxi to Dammam Corniche from the airport or city. Private transfers, fixed rates, instant WhatsApp booking.", ar: "احجز تاكسي إلى كورنيش الدمام من المطار أو المدينة. توصيل خاص، أسعار ثابتة، حجز فوري." },
    distanceFromAirport: { en: "43 km", ar: "٤٣ كم" },
    durationFromAirport: { en: "35–45 min", ar: "٣٥–٤٥ دقيقة" },
    startingPrice: 130,
    intro: { en: "Dammam Corniche is a stunning 30-kilometre waterfront promenade along the Arabian Gulf — one of the Eastern Province's top landmarks. Our taxi service drops you directly at the Corniche, whether you're visiting for leisure, dining, or sightseeing.", ar: "كورنيش الدمام واجهة بحرية رائعة تمتد ٣٠ كيلومتراً على الخليج العربي — من أبرز معالم المنطقة الشرقية. خدمة التاكسي توصلك مباشرة إلى الكورنيش سواء للترفيه أو المطاعم أو السياحة." },
    highlights: { en: ["30 km Gulf waterfront access", "Drop-off at any Corniche point", "Day trips & evening visits covered", "Suitable for families & tourists"], ar: ["وصول إلى ٣٠ كم من الواجهة البحرية", "إنزال عند أي نقطة على الكورنيش", "رحلات نهارية ومسائية متاحة", "مناسب للعائلات والسياح"] },
    faqs: {
      en: [
        { q: "How far is Dammam Corniche from the airport?", a: "Dammam Corniche is approximately 43 km from King Fahd International Airport, about 35–45 minutes by private taxi." },
        { q: "Can I book a taxi for a day trip to Dammam Corniche?", a: "Yes, we offer day-trip taxi packages with pickup from your hotel or the airport and drop-off at multiple Corniche stops." },
      ],
      ar: [
        { q: "كم تبعد كورنيش الدمام عن المطار؟", a: "يبعد كورنيش الدمام حوالي ٤٣ كم عن مطار الملك فهد الدولي، أي ٣٥–٤٥ دقيقة بالتاكسي الخاص." },
        { q: "هل يمكن حجز تاكسي لرحلة يومية إلى كورنيش الدمام؟", a: "نعم، نوفر باقات رحلات يومية مع استلام من فندقك أو المطار وإيصالك لعدة محطات على الكورنيش." },
      ],
    },
    landmark: { en: "Arabian Gulf waterfront, Dammam", ar: "واجهة الخليج العربي، الدمام" },
  },
  {
    slug: "half-moon-beach",
    type: "attraction",
    name: { en: "Half Moon Beach (Half Moon Bay)", ar: "شاطئ نصف القمر (خليج نصف القمر)" },
    metaTitle: { en: "Taxi to Half Moon Beach Dammam | Day Trip Transfer", ar: "تاكسي إلى شاطئ نصف القمر الدمام | توصيل رحلة يومية" },
    metaDescription: { en: "Private taxi to Half Moon Beach from Dammam or the airport. Perfect for day trips, families & tourists. Fixed rates.", ar: "تاكسي خاص إلى شاطئ نصف القمر من الدمام أو المطار. مثالي للرحلات اليومية والعائلات والسياح." },
    distanceFromAirport: { en: "88 km", ar: "٨٨ كم" },
    durationFromAirport: { en: "55–70 min", ar: "٥٥–٧٠ دقيقة" },
    startingPrice: 180,
    intro: { en: "Half Moon Beach is one of the Eastern Province's most beloved coastal destinations, known for its turquoise waters and crescent-shaped bay. Our taxi service takes you directly from Dammam Airport or city hotels to this scenic beach.", ar: "شاطئ نصف القمر من أجمل الوجهات الساحلية في المنطقة الشرقية بمياهه الفيروزية وخليجه الهلالي. خدمة التاكسي توصلك مباشرة من مطار الدمام أو فنادق المدينة." },
    highlights: { en: ["Scenic beach day trip from Dammam", "Return transfer available", "Family van for larger groups", "Flexible pickup schedule"], ar: ["رحلة يومية ساحلية من الدمام", "توصيل عودة متاح", "فان عائلي للمجموعات الكبيرة", "جدول استلام مرن"] },
    faqs: {
      en: [
        { q: "How far is Half Moon Beach from Dammam Airport?", a: "Half Moon Beach is approximately 88 km from King Fahd International Airport — about 55–70 minutes by private taxi." },
        { q: "Can you arrange a return trip from Half Moon Beach?", a: "Yes. We offer return taxi service from Half Moon Beach to Dammam, Khobar, or the airport at flexible times." },
      ],
      ar: [
        { q: "كم تبعد شاطئ نصف القمر عن مطار الدمام؟", a: "يبعد شاطئ نصف القمر حوالي ٨٨ كم عن مطار الملك فهد الدولي — أي ٥٥–٧٠ دقيقة بالتاكسي الخاص." },
        { q: "هل يمكن ترتيب رحلة عودة من شاطئ نصف القمر؟", a: "نعم. نوفر تاكسي عودة من شاطئ نصف القمر إلى الدمام أو الخبر أو المطار بأوقات مرنة." },
      ],
    },
    landmark: { en: "Eastern Province coast, south of Khobar", ar: "ساحل المنطقة الشرقية، جنوب الخبر" },
  },
  {
    slug: "king-fahd-park-dammam",
    type: "attraction",
    name: { en: "King Fahd Park Dammam", ar: "حديقة الملك فهد الدمام" },
    metaTitle: { en: "Taxi to King Fahd Park Dammam | Airport & City Transfer", ar: "تاكسي إلى حديقة الملك فهد الدمام | توصيل من المطار" },
    metaDescription: { en: "Book a taxi to King Fahd Park Dammam. Private transfers from airport or city hotel, fixed rates.", ar: "احجز تاكسي إلى حديقة الملك فهد الدمام. توصيل خاص من المطار أو فندق المدينة، أسعار ثابتة." },
    distanceFromAirport: { en: "38 km", ar: "٣٨ كم" },
    durationFromAirport: { en: "30–40 min", ar: "٣٠–٤٠ دقيقة" },
    startingPrice: 120,
    intro: { en: "King Fahd Park is one of Dammam's largest and most popular public parks, covering over 1.5 million square metres with gardens, fountains, and recreational facilities. Our taxi service provides direct transfers from the airport to the park gates.", ar: "حديقة الملك فهد من أكبر وأشهر الحدائق العامة في الدمام، تمتد على أكثر من ١.٥ مليون متر مربع بحدائق ونوافير ومرافق ترفيهية." },
    highlights: { en: ["Family day trip transfer", "Multiple park entrances served", "Pickup from any Dammam hotel", "Kids-friendly large vehicles"], ar: ["توصيل رحلة يومية عائلية", "خدمة عدة مداخل للحديقة", "استلام من أي فندق بالدمام", "سيارات كبيرة مناسبة للأطفال"] },
    faqs: {
      en: [{ q: "Can I get a taxi from my hotel to King Fahd Park Dammam?", a: "Yes. We pick up from any hotel in Dammam and drop you at your preferred entrance of King Fahd Park. WhatsApp us with your hotel name and time." }],
      ar: [{ q: "هل يمكنني أخذ تاكسي من فندقي إلى حديقة الملك فهد؟", a: "نعم. نستلمك من أي فندق في الدمام ونوصلك للمدخل المفضل لحديقة الملك فهد. تواصل معنا على واتساب باسم فندقك والوقت." }],
    },
    landmark: { en: "King Fahd Road, central Dammam", ar: "طريق الملك فهد، وسط الدمام" },
  },
  {
    slug: "heritage-village-dammam",
    type: "attraction",
    name: { en: "Dammam Heritage Village", ar: "قرية الدمام التراثية" },
    metaTitle: { en: "Taxi to Dammam Heritage Village | Tourist Transfer", ar: "تاكسي إلى قرية الدمام التراثية | توصيل سياحي" },
    metaDescription: { en: "Book a taxi to Dammam Heritage Village. Tourist transfers from airport, fixed prices, professional drivers.", ar: "احجز تاكسي إلى قرية الدمام التراثية. توصيل سياحي من المطار، أسعار ثابتة، سائقون محترفون." },
    distanceFromAirport: { en: "40 km", ar: "٤٠ كم" },
    durationFromAirport: { en: "32–42 min", ar: "٣٢–٤٢ دقيقة" },
    startingPrice: 125,
    intro: { en: "Dammam Heritage Village is a cultural landmark showcasing traditional Saudi architecture, handicrafts, and Eastern Province heritage. Our tourist taxi service brings visitors directly from the airport or hotels to this must-see attraction.", ar: "قرية الدمام التراثية معلم ثقافي يعرض العمارة السعودية التقليدية والحرف اليدوية وتراث المنطقة الشرقية. خدمة التاكسي السياحي توصل الزوار مباشرة من المطار أو الفنادق." },
    highlights: { en: ["Cultural tourism transfer specialist", "Multi-stop city tour options", "Bilingual drivers (Arabic & English)", "Flexible wait-and-return service"], ar: ["متخصص في التوصيل السياحي الثقافي", "خيارات جولات مدينة متعددة المحطات", "سائقون ثنائيو اللغة (عربي وإنجليزي)", "خدمة انتظار وعودة مرنة"] },
    faqs: {
      en: [{ q: "Can I combine a trip to Heritage Village with other Dammam sightseeing?", a: "Yes. We offer customised city tour packages covering Heritage Village, King Fahd Park, Dammam Corniche, and more in one convenient trip." }],
      ar: [{ q: "هل يمكنني دمج زيارة القرية التراثية مع معالم أخرى في الدمام؟", a: "نعم. نوفر باقات جولات مدينة مخصصة تشمل القرية التراثية وحديقة الملك فهد وكورنيش الدمام وأكثر في رحلة واحدة مريحة." }],
    },
    landmark: { en: "Dammam Corniche area", ar: "منطقة كورنيش الدمام" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   INDUSTRIAL / BUSINESS
═══════════════════════════════════════════════════════════════ */
const industrial: LocationPage[] = [
  {
    slug: "dammam-industrial-city-1",
    type: "industrial",
    name: { en: "Dammam Industrial City 1 (Second Industrial City)", ar: "المدينة الصناعية الأولى بالدمام" },
    metaTitle: { en: "Taxi to Dammam Industrial City 1 | Corporate Transfer", ar: "تاكسي إلى المدينة الصناعية الدمام 1 | نقل شركات" },
    metaDescription: { en: "Corporate taxi to Dammam Industrial City. Fixed rates, priority dispatch, monthly invoicing for businesses.", ar: "تاكسي شركات إلى المدينة الصناعية بالدمام. أسعار ثابتة، إيفاد أولوية، فاتورة شهرية للمنشآت." },
    distanceFromAirport: { en: "30 km", ar: "٣٠ كم" },
    durationFromAirport: { en: "25–35 min", ar: "٢٥–٣٥ دقيقة" },
    startingPrice: 105,
    intro: { en: "Dammam Industrial City 1 is home to hundreds of manufacturing and industrial facilities. We provide reliable corporate taxi service for workers, executives, and contractors travelling from King Fahd International Airport to the industrial zone.", ar: "المدينة الصناعية الأولى بالدمام تضم مئات المصانع والمنشآت الصناعية. نوفر خدمة تاكسي شركات موثوقة للعمال والمديرين والمقاولين." },
    highlights: { en: ["Industrial zone access specialist", "Corporate accounts available", "Early morning shift pickups", "Monthly invoicing for businesses"], ar: ["متخصص في الوصول للمناطق الصناعية", "حسابات شركات متاحة", "استلام وردية الصباح الباكر", "فاتورة شهرية للمنشآت"] },
    faqs: {
      en: [{ q: "Do you provide shift-worker transportation to Dammam Industrial City?", a: "Yes. We support regular shift pickups for industrial workers and companies requiring multiple daily transfers to the industrial zone." }],
      ar: [{ q: "هل توفرون نقل عمال الورديات إلى المدينة الصناعية بالدمام؟", a: "نعم. ندعم استلام الورديات المنتظمة لعمال الصناعة والشركات التي تحتاج توصيلات يومية متعددة للمنطقة الصناعية." }],
    },
    landmark: { en: "2nd Industrial City, Dammam", ar: "المدينة الصناعية الثانية، الدمام" },
  },
  {
    slug: "aramco-dammam",
    type: "industrial",
    name: { en: "Saudi Aramco Dammam Offices", ar: "مكاتب أرامكو السعودية الدمام" },
    metaTitle: { en: "Taxi to Saudi Aramco Dammam | Corporate Airport Transfer", ar: "تاكسي إلى أرامكو الدمام | توصيل شركات من المطار" },
    metaDescription: { en: "Executive taxi to Saudi Aramco offices Dammam from the airport. Monthly accounts, priority dispatch, GMC Yukon available.", ar: "تاكسي تنفيذي إلى مكاتب أرامكو الدمام من المطار. حسابات شهرية، إيفاد أولوية، GMC يوكن متاح." },
    distanceFromAirport: { en: "45 km", ar: "٤٥ كم" },
    durationFromAirport: { en: "35–48 min", ar: "٣٥–٤٨ دقيقة" },
    startingPrice: 135,
    intro: { en: "Saudi Aramco's Dammam operations serve as a key hub for the world's largest oil company. Our executive taxi service caters to Aramco employees, contractors, and visiting delegates arriving at King Fahd International Airport.", ar: "عمليات أرامكو السعودية بالدمام مركز رئيسي لأكبر شركة نفطية في العالم. خدمة التاكسي التنفيذية لدينا تخدم موظفي أرامكو والمقاولين والوفود الزائرة." },
    highlights: { en: ["Aramco employee & contractor transfers", "Executive sedans & GMC Yukon", "Corporate monthly billing", "All Aramco Dammam locations covered"], ar: ["توصيل موظفي ومقاولي أرامكو", "سيدان تنفيذية وGMC يوكن", "فاتورة شهرية للشركات", "تغطية جميع مواقع أرامكو بالدمام"] },
    faqs: {
      en: [
        { q: "Do you serve Saudi Aramco employees travelling to Dammam?", a: "Yes. We have extensive experience with Aramco employee transfers in Dammam, Dhahran, and Jubail." },
        { q: "Can we set up a corporate account for Aramco contractor travel?", a: "Yes. We offer monthly invoicing for corporate accounts, suitable for Aramco contractors and their sub-teams." },
      ],
      ar: [
        { q: "هل تخدمون موظفي أرامكو السعودية المتنقلين إلى الدمام؟", a: "نعم. لدينا خبرة واسعة في توصيل موظفي أرامكو في الدمام والظهران والجبيل." },
        { q: "هل يمكن إنشاء حساب شركة لسفر مقاولي أرامكو؟", a: "نعم. نقدم فاتورة شهرية للحسابات المؤسسية، مناسبة لمقاولي أرامكو وفرقهم." },
      ],
    },
    landmark: { en: "Aramco Dammam Industrial Area", ar: "منطقة أرامكو الصناعية بالدمام" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════ */
export const locationPages: LocationPage[] = [
  ...districts,
  ...hotels,
  ...hospitals,
  ...attractions,
  ...industrial,
];

export const locationsByType = {
  district:   districts,
  hotel:      hotels,
  hospital:   hospitals,
  attraction: attractions,
  industrial: industrial,
};

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locationPages.find(p => p.slug === slug);
}
