import type { RouteDetail } from "./routesData";

/**
 * Bahrain-origin routes. `sedan` is the owner-supplied fixed fare (SAR).
 * SUV / Van / Luxury are derived from the Dammam→Bahrain fare ratios
 * (550/400, 700/400, 1300/400) and rounded — edit here if the owner sets exact rates.
 */
interface Dest {
  slug: string;
  en: string;
  ar: string;
  sedan: number;
  km: number;
  hours: string;
  hoursAr: string;
}

const DESTS: Dest[] = [
  { slug: "khobar", en: "Khobar", ar: "الخبر", sedan: 300, km: 55, hours: "1 – 1.5 Hours", hoursAr: "ساعة إلى ساعة ونصف" },
  { slug: "dhahran", en: "Dhahran", ar: "الظهران", sedan: 350, km: 65, hours: "1 – 1.5 Hours", hoursAr: "ساعة إلى ساعة ونصف" },
  { slug: "jubail", en: "Jubail", ar: "الجبيل", sedan: 550, km: 160, hours: "2.5 – 3 Hours", hoursAr: "ساعتان ونصف إلى ثلاث ساعات" },
  { slug: "dammam-airport", en: "Dammam Airport", ar: "مطار الدمام", sedan: 450, km: 130, hours: "2 – 2.5 Hours", hoursAr: "ساعتان إلى ساعتين ونصف" },
  { slug: "dammam-railway-station", en: "Dammam Railway Station", ar: "محطة قطار الدمام", sedan: 400, km: 90, hours: "1.5 – 2 Hours", hoursAr: "ساعة ونصف إلى ساعتين" },
  { slug: "qatif", en: "Qatif", ar: "القطيف", sedan: 450, km: 100, hours: "1.5 – 2 Hours", hoursAr: "ساعة ونصف إلى ساعتين" },
  { slug: "ras-tanura", en: "Ras Tanura", ar: "رأس تنورة", sedan: 500, km: 130, hours: "2 – 2.5 Hours", hoursAr: "ساعتان إلى ساعتين ونصف" },
  { slug: "ras-al-khair", en: "Ras Al Khair", ar: "رأس الخير", sedan: 800, km: 260, hours: "3.5 – 4 Hours", hoursAr: "ثلاث ساعات ونصف إلى أربع ساعات" },
  { slug: "tanajib", en: "Tanajib", ar: "تناجيب", sedan: 700, km: 220, hours: "3 – 3.5 Hours", hoursAr: "ثلاث ساعات إلى ثلاث ساعات ونصف" },
  { slug: "khafji", en: "Khafji", ar: "الخفجي", sedan: 900, km: 400, hours: "4.5 – 5 Hours", hoursAr: "أربع ساعات ونصف إلى خمس ساعات" },
  { slug: "al-hassa", en: "Al Hassa", ar: "الأحساء", sedan: 700, km: 230, hours: "3 – 3.5 Hours", hoursAr: "ثلاث ساعات إلى ثلاث ساعات ونصف" },
  { slug: "hofuf", en: "Hofuf", ar: "الهفوف", sedan: 750, km: 240, hours: "3 – 3.5 Hours", hoursAr: "ثلاث ساعات إلى ثلاث ساعات ونصف" },
];

const near = (n: number, step: number) => Math.round(n / step) * step;

function build(d: Dest): RouteDetail {
  const sedan = d.sedan;
  const suv = near(sedan * 1.375, 50);
  const van = near(sedan * 1.75, 50);
  const luxury = near(sedan * 3.25, 100);
  const km = `${d.km} km`;
  const kmAr = `${d.km} كم`;
  return {
    slug: `bahrain-to-${d.slug}`,
    name: { en: `Bahrain to ${d.en} Taxi`, ar: `تاكسي من البحرين إلى ${d.ar}` },
    metaTitle: {
      en: `Bahrain to ${d.en} Taxi — Fixed ${sedan} SAR | Private Transfer via King Fahd Causeway`,
      ar: `تاكسي من البحرين إلى ${d.ar} — ${sedan} ريال ثابت | توصيل خاص عبر جسر الملك فهد`,
    },
    metaDescription: {
      en: `Private Bahrain to ${d.en} taxi from ${sedan} SAR. Door-to-door via the King Fahd Causeway, fixed fare, 24/7 WhatsApp booking. Sedan, SUV, van and luxury available.`,
      ar: `تاكسي خاص من البحرين إلى ${d.ar} من ${sedan} ريال. توصيل من الباب إلى الباب عبر جسر الملك فهد، سعر ثابت، حجز واتساب 24/7.`,
    },
    distance: { en: `~${km}`, ar: `~${kmAr}` },
    duration: { en: d.hours, ar: d.hoursAr },
    basePrice: sedan,
    pricing: { sedan, suv, van, luxury },
    mapUrl: `https://www.google.com/maps?q=${encodeURIComponent(d.en + " Saudi Arabia")}&output=embed`,
    intro: {
      en: `Book a private, fixed-fare taxi from Bahrain to ${d.en} starting from ${sedan} SAR. Your driver picks you up from any hotel, home or Bahrain International Airport (BAH), crosses the King Fahd Causeway and takes you door-to-door in Saudi Arabia.`,
      ar: `احجز تاكسياً خاصاً بسعر ثابت من البحرين إلى ${d.ar} يبدأ من ${sedan} ريال. يستقبلك السائق من أي فندق أو منزل أو من مطار البحرين الدولي، ويعبر بك جسر الملك فهد ويوصلك من الباب إلى الباب داخل المملكة.`,
    },
    contentSections: [
      {
        title: { en: `Bahrain to ${d.en} — Fare, Distance & Time`, ar: `من البحرين إلى ${d.ar} — السعر والمسافة والوقت` },
        body: {
          en: [
            `The Bahrain to ${d.en} taxi fare starts from ${sedan} SAR for a Camry sedan (up to 4 passengers), ${suv} SAR for a GMC Yukon SUV (up to 6), ${van} SAR for a Toyota Staria family van (up to 8) and ${luxury} SAR for a luxury vehicle.`,
            `The trip is roughly ${km} and takes about ${d.hours.toLowerCase()} depending on King Fahd Causeway queues at the border. Allow extra time on Thursday evenings, Fridays and public holidays.`,
            "Travellers must carry valid passports or GCC IDs and the correct Saudi entry documents. Please check your own eligibility before travelling — entry requirements depend on your nationality.",
          ],
          ar: [
            `يبدأ سعر التاكسي من البحرين إلى ${d.ar} من ${sedan} ريال لسيارة كامري (حتى 4 ركاب)، و${suv} ريال ليوكن SUV (حتى 6 ركاب)، و${van} ريال للفان العائلي ستاريا (حتى 8 ركاب)، و${luxury} ريال للسيارة الفاخرة.`,
            `تبلغ المسافة تقريباً ${kmAr} وتستغرق الرحلة نحو ${d.hoursAr} بحسب الازدحام عند جسر الملك فهد. ننصح بإضافة وقت إضافي مساء الخميس والجمعة والعطلات الرسمية.`,
            "يجب حمل جواز سفر ساري أو الهوية الخليجية ووثائق الدخول المطلوبة للمملكة. يرجى التأكد من استيفائك الشروط قبل السفر فهي تختلف بحسب الجنسية.",
          ],
        },
      },
    ],
    faqs: {
      en: [
        { q: `How much is a taxi from Bahrain to ${d.en}?`, a: `The fixed fare is ${sedan} SAR for a Camry sedan (1–4 passengers), ${suv} SAR for a GMC Yukon SUV (1–6), ${van} SAR for a family van (1–8) and ${luxury} SAR for a luxury vehicle.` },
        { q: `Can you pick me up from Bahrain International Airport (BAH) and take me to ${d.en}?`, a: `Yes. We pick up from BAH, Manama hotels or any address in Bahrain and drive you door-to-door to ${d.en}. Message us on WhatsApp with your flight or pickup details.` },
        { q: "Is the service available 24/7?", a: "Yes. We operate every day including nights, weekends and public holidays. Book in advance for peak causeway times." },
      ],
      ar: [
        { q: `كم سعر التاكسي من البحرين إلى ${d.ar}؟`, a: `السعر الثابت ${sedan} ريال لسيارة كامري (1-4 ركاب)، و${suv} ريال ليوكن SUV (1-6)، و${van} ريال للفان العائلي (1-8)، و${luxury} ريال للسيارة الفاخرة.` },
        { q: `هل تستقبلونني من مطار البحرين الدولي إلى ${d.ar}؟`, a: `نعم. نستقبلك من مطار البحرين أو فنادق المنامة أو أي عنوان في البحرين ونوصلك من الباب إلى الباب إلى ${d.ar}. راسلنا عبر واتساب بتفاصيل رحلتك.` },
        { q: "هل الخدمة متوفرة على مدار الساعة؟", a: "نعم، نعمل يومياً بما في ذلك الليل وعطلات نهاية الأسبوع والأعياد. يُنصح بالحجز المسبق في أوقات الذروة على الجسر." },
      ],
    },
  };
}

export const bahrainOriginRoutes: RouteDetail[] = DESTS.map(build);
