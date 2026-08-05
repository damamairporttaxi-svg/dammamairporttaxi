"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

interface BlogPost {
  id: number;
  title: { en: string; ar: string };
  date: string;
  category: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string[]; ar: string[] };
}

export function BlogPageClient() {
  const { locale } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: {
        en: "King Fahd Causeway Transit Guide: Seamless Crossing to Bahrain",
        ar: "دليل عبور جسر الملك فهد: الانتقال السلس إلى مملكة البحرين",
      },
      date: "2026-05-20",
      category: { en: "GCC Travel Guides", ar: "أدلة سفر الخليج" },
      excerpt: {
        en: "Discover all the passport controls, causeway fees, visa requirements, and custom guidelines for crossing from Dammam to Bahrain by taxi.",
        ar: "اكتشف جميع إجراءات الجوازات ورسوم العبور ومتطلبات التأشيرة والإرشادات الجمركية للعبور من الدمام إلى البحرين بالتاكسي.",
      },
      content: {
        en: [
          "Crossing the King Fahd Causeway is the most popular route connecting Saudi Arabia's Eastern Province to the Kingdom of Bahrain. The 25-kilometer causeway bridge is a masterpiece of engineering, but transit times can vary based on custom queues and paperwork preparedness.",
          "First, ensure that all passengers have valid passports with at least 6 months validity. Citizens of GCC nations can travel with their national IDs, but foreign residents need valid Saudi exit/re-entry visas and Bahrain entry visas (often obtainable on arrival or online).",
          "When you travel with Dammam Airport Taxi, the causeway bridge transit tolls are included in your booking. Furthermore, our drivers are highly familiar with the lane system (regular lanes, VIP lanes, and student/corporate fast tracks) which speeds up customs processing.",
          "Passport and custom clearances are carried out while you sit comfortably inside the vehicle. The officer will inspect passport stamps, check luggage tags, and print the causeway slip. Pre-arranging a professional chauffeur-driven vehicle avoids the hassle of parking, buying car insurance at the border, and navigating international road routes on your own."
        ],
        ar: [
          "يعتبر عبور جسر الملك فهد هو المسار الأكثر شعبية الذي يربط المنطقة الشرقية بالمملكة العربية السعودية بمملكة البحرين. يمثل الجسر البالغ طوله 25 كيلومتراً تحفة هندسية، ولكن قد تختلف أوقات العبور بناءً على طوابير الجمارك ومدى جاهزية الأوراق والوثائق الرسمية.",
          "أولاً، تأكد من أن جميع الركاب يحملون جوازات سفر صالحة لمدة لا تقل عن 6 أشهر. يمكن لمواطني دول مجلس التعاون الخليجي السفر ببطاقة الهوية الوطنية، لكن المقيمين الأجانب يحتاجون إلى تأشيرة خروج وعودة سعودية صالحة وتأشيرة دخول للبحرين (يمكن الحصول عليها غالباً عند الوصول أو عبر الإنترنت).",
          "عندما تسافر مع تاكسي مطار الدمام، فإن رسوم عبور جسر الملك فهد مشمولة بالكامل في قيمة حجزك. علاوة على ذلك، فإن سائقينا على دراية تامة بنظام المسارات (المسارات العادية، مسارات كبار الشخصيات، والممرات السريعة) مما يسرع المعالجة الجمركية بشكل كبير.",
          "يتم إجراء عمليات التفتيش وختم الجوازات والتخليص الجمركي بينما تجلس أنت مرتاحاً داخل السيارة. سيقوم الضابط بفحص أختام الجوازات والتحقق من الحقائب وتدقيق رخصة السيارة. إن ترتيب رحلة مسبقة مع سائق محترف يجنبك عناء العثور على موقف سيارات، وشراء تأمين السيارة المؤقت عند الحدود، وتوجيه مسارات الطرق الدولية بنفسك."
        ]
      }
    },
    {
      id: 2,
      title: {
        en: "Top 5 Travel Tips for Dammam King Fahd International Airport (DMM)",
        ar: "أفضل 5 نصائح للسفر عبر مطار الملك فهد الدولي بالدمام (DMM)",
      },
      date: "2026-05-18",
      category: { en: "Airport Guides", ar: "أدلة المطارات" },
      excerpt: {
        en: "Make your arrival at King Fahd International Airport stress-free. Learn how to locate airport terminal services and book private transfers.",
        ar: "اجعل وصولك إلى مطار الملك فهد الدولي خاليًا من الإجهاد. تعرف على كيفية العثور على الخدمات داخل صالات المطار وحجز التوصيل الخاص.",
      },
      content: {
        en: [
          "King Fahd International Airport (DMM) in Dammam is the largest airport in the world by land area, serving millions of business and leisure travelers annually. Navigating this vast terminal can be daunting if you aren't prepared.",
          "1. Meet and Greet: Finding a taxi at the terminal curbside during peak international arrivals can take over 45 minutes of waiting. Booking a private transfer in advance guarantees that your driver will be waiting at the arrival hall immediately after customs with a custom nameboard.",
          "2. Baggage Services: DMM Airport offers quick baggage processing, but make sure to pack within airline guidelines. If you have oversized luggage or golf bags, pre-book an SUV or Staria Family Van to ensure ample trunk capacity.",
          "3. Connectivity: King Fahd Airport has free Wi-Fi for passengers. However, we also provide high-speed mobile Wi-Fi hotspots inside our cars so you can keep working or text family without interruption during the transfer.",
          "4. Peak Hours: International flights from Europe and GCC hubs often land late at night. Our dispatch office operates 24/7/365, guaranteeing night pickups are handled with the same high level of security and efficiency as daytime travel."
        ],
        ar: [
          "يعد مطار الملك فهد الدولي بالدمام (DMM) أكبر مطارات العالم من حيث المساحة البرية، ويخدم ملايين المسافرين سنوياً لأغراض العمل والترفيه. قد يكون التنقل داخل هذه الصالة الضخمة أمراً صعباً إذا لم تكن مستعداً.",
          "1. الاستقبال والترحيب: قد يستغرق البحث عن تاكسي عند رصيف صالة الوصول خلال ساعات الذروة الدولية أكثر من 45 دقيقة من الانتظار. يضمن لك حجز سيارة خاصة مسبقاً انتظار سائقك في صالة الوصول فوراً بعد الجمارك حاملاً لوحة باسمك.",
          "2. خدمات الأمتعة: يقدم مطار الدمام معالجة سريعة للأمتعة. إذا كان لديك أمتعة كبيرة الحجم أو حقائب جولف، فقم بحجز سيارة SUV أو فان عائلي مسبقاً لضمان وجود مساحة كافية للأمتعة.",
          "3. الاتصال بالإنترنت: يحتوي مطار الملك فهد على خدمة إنترنت لاسلكي مجانية للمسافرين. ومع ذلك، فإننا نوفر أيضاً نقاط اتصال إنترنت Wi-Fi متنقلة وعالية السرعة داخل سياراتنا لتتمكن من العمل أو مراسلة عائلتك دون انقطاع.",
          "4. ساعات الذروة: غالباً ما تهبط الرحلات الجوية الدولية القادمة من أوروبا والخليج في وقت متأخر من الليل. يعمل مكتب إدارة العمليات لدينا على مدار الساعة 24/7/365، مما يضمن التعامل مع الرحلات الليلية بنفس المستوى العالي من الأمان والدقة."
        ]
      }
    },
    {
      id: 3,
      title: {
        en: "Why Pre-Booking an Intercity Taxi in KSA is Safer & Cost-Effective",
        ar: "لماذا يعد الحجز المسبق لتاكسي المسافات الطويلة بالمملكة أكثر أماناً وتوفيراً",
      },
      date: "2026-05-15",
      category: { en: "Transport Safety", ar: "سلامة النقل والمواصلات" },
      excerpt: {
        en: "Hailing street cabs for long drives like Dammam to Riyadh can result in hidden costs. Learn why certified flat-rate bookings are superior.",
        ar: "قد يؤدي استيقاف سيارات الأجرة العادية للمشاوير الطويلة كمسار الدمام إلى الرياض لتكاليف غير متوقعة. اعرف لماذا الحجز المسبق هو الأفضل.",
      },
      content: {
        en: [
          "Traveling between major metropolitan areas in Saudi Arabia (such as Dammam to Riyadh or Jubail) covers hundreds of kilometers of highway. Taking a local street-hail taxi or illegal unregulated vehicles poses serious risks.",
          "Unregulated drivers often lack comprehensive commercial insurance, passenger liability coverage, and regular vehicle safety inspections. Additionally, without fixed pricing, passengers frequently experience hidden fees for toll gates, luggage, and night surcharges.",
          "By choosing Dammam Airport Taxi for intercity travel, you secure a fully-regulated commercial vehicle under Saudi Transport General Authority guidelines. You benefit from fixed, flat-rate pricing confirmed beforehand, and experienced chauffeurs who are trained in defensive long-distance highway driving.",
          "Our customer service team tracks the vehicle's GPS position in real-time, providing an extra layer of security. Sit back and enjoy the ride with free Wi-Fi, bottled water, and adjustable luxury leather seating."
        ],
        ar: [
          "يغطي السفر بين المناطق الحضرية الكبرى في المملكة العربية السعودية (مثل السفر من الدمام إلى الرياض أو الجبيل) مئات الكيلومترات من الطرق السريعة. ينطوي ركوب سيارات الأجرة العادية أو المركبات غير المرخصة على مخاطر حقيقية.",
          "غالبًا ما يفتقر السائقون غير المرخصين إلى التأمين التجاري الشامل وتأمين الركاب وفحص سلامة السيارة الدوري. بالإضافة إلى ذلك، فمن دون الأسعار الثابتة، غالباً ما يواجه الركاب رسوماً خفية مثل رسوم بوابات الطرق، رسوم الأمتعة الإضافية، والرسوم الليلية الإضافية.",
          "عند اختيارك لتاكسي مطار الدمام للسفر بين المدن، فإنك تضمن ركوب مركبة تجارية مرخصة بالكامل وتعمل بموجب إرشادات الهيئة العامة للنقل في المملكة. تستفيد من أسعار ثابتة ومؤكدة مسبقاً، وسائقين محترفين مدربين على القيادة الآمنة للمسافات الطويلة.",
          "يقوم فريق خدمة العملاء لدينا بتتبع موقع السيارة عبر نظام تحديد المواقع العالمي (GPS) في الوقت الفعلي، مما يوفر مستوى إضافياً من الأمان والطمأنينة. اجلس واسترخ واستمتع بالرحلة مع خدمة الإنترنت اللاسلكي المجانية والمياه المعدنية والمقاعد الجلدية الفاخرة القابلة للتعديل."
        ]
      }
    },
    {
      id: 4,
      title: {
        en: "Dammam to Riyadh by Taxi — Complete Road Trip Guide (400 km)",
        ar: "من الدمام إلى الرياض بالتاكسي — دليل رحلة الطريق الكاملة (٤٠٠ كم)",
      },
      date: "2026-05-12",
      category: { en: "Route Guides", ar: "أدلة الوجهات" },
      excerpt: {
        en: "The 400 km Dammam to Riyadh highway route takes 3.5–4 hours by private taxi. Discover the best vehicle, rest stops, and tips for a smooth ride.",
        ar: "يبلغ طريق الدمام إلى الرياض ٤٠٠ كم ويستغرق ٣.٥–٤ ساعات بالتاكسي الخاص. اكتشف أفضل السيارات ومحطات الراحة والنصائح لرحلة سلسة.",
      },
      content: {
        en: [
          "The Dammam to Riyadh route is one of the most heavily travelled intercity corridors in Saudi Arabia. The 400 km journey runs along the E40 Eastern Ring Road, passing through the heart of the Kingdom's desert landscape before arriving at the Saudi capital.",
          "Travel time by private taxi is 3.5 to 4 hours non-stop under normal traffic conditions. The route is a straight, well-maintained dual carriageway with a speed limit of 140 km/h in most sections. There are clean, air-conditioned service stations with prayer rooms, restaurants, and fuel at regular intervals.",
          "For this route we recommend the Toyota Camry Sedan (starting from 900 SAR) for solo and dual travellers, or the GMC Yukon SUV for groups of up to 6 passengers, executives, or those travelling with heavy luggage. Both vehicles include complimentary Wi-Fi, USB charging, and chilled water.",
          "Business travellers frequently book this route to avoid the time spent at King Abdulaziz International Airport (RUH) or King Khalid Airport check-in queues. A door-to-door private taxi from Dammam Airport or Al Khobar to Riyadh is often faster and more comfortable than a domestic flight when factoring in check-in, boarding, and collection.",
          "Book at least 4 hours in advance via WhatsApp. For early morning departures before 6am, we recommend booking the night before to guarantee driver availability."
        ],
        ar: [
          "يعتبر طريق الدمام إلى الرياض أحد أكثر الطرق السريعة بين المدن ازدحاماً في المملكة العربية السعودية. تمتد رحلة 400 كيلومتر على طريق الحزام الشرقي E40، مروراً بعمق المشهد الصحراوي للمملكة قبل الوصول إلى العاصمة السعودية.",
          "يستغرق وقت السفر بالتاكسي الخاص من 3.5 إلى 4 ساعات بدون توقف في ظروف مرور طبيعية. الطريق مستقيم وذو مسارين مزدوجين مصانان بشكل جيد بحد سرعة 140 كم/ساعة في معظم الأقسام. توجد محطات خدمة مكيفة ونظيفة مع غرف صلاة ومطاعم ومحطات وقود على فترات منتظمة.",
          "لهذا الطريق نوصي بالتويوتا كامري (يبدأ من 900 ريال) للمسافرين الفرديين أو المزدوجين، أو جي إم سي يوكن لمجموعات تصل إلى 6 ركاب أو المديرين التنفيذيين أو أصحاب الأمتعة الثقيلة. كلتا السيارتين تشمل واي فاي مجاني وشواحن USB ومياه باردة.",
          "كثيراً ما يحجز رجال الأعمال هذا الطريق لتجنب الوقت الضائع في الطوابير بمطار الملك عبدالعزيز الدولي. التاكسي الخاص من باب إلى باب من مطار الدمام أو الخبر إلى الرياض أسرع وأكثر راحة في أغلب الأحيان من الرحلة الداخلية.",
          "احجز قبل 4 ساعات على الأقل عبر واتساب. للمغادرة المبكرة قبل الساعة 6 صباحاً، ننصح بالحجز في اليوم السابق لضمان توفر السائق."
        ]
      }
    },
    {
      id: 5,
      title: {
        en: "Dammam to Dubai by Road — The Complete 950 km Taxi Guide",
        ar: "من الدمام إلى دبي براً — الدليل الكامل لرحلة ٩٥٠ كم بالتاكسي",
      },
      date: "2026-05-10",
      category: { en: "Route Guides", ar: "أدلة الوجهات" },
      excerpt: {
        en: "Travelling from Dammam to Dubai by private taxi is 950 km across the Al Batha–UAE border. Full guide on travel time, costs, documents & tips.",
        ar: "السفر من الدمام إلى دبي بالتاكسي الخاص هو 950 كم عبر منفذ البطحاء. دليل كامل حول وقت السفر والتكاليف والمستندات والنصائح.",
      },
      content: {
        en: [
          "Dammam to Dubai by road is one of the most scenic and rewarding GCC cross-border journeys. The 950 km trip takes 9 to 10 hours by private taxi via the Al Batha (Saudi) to Ghuwaifat (UAE) border crossing, passing through Abu Dhabi emirate before reaching Dubai.",
          "The route crosses two international borders — you exit Saudi Arabia at Al Batha checkpoint and enter the UAE at Ghuwaifat. The border process typically takes 30–60 minutes each way. Our drivers hold full Saudi–UAE commercial cross-border transport permits, and our vehicles carry the required UAE road insurance.",
          "Documents required: Saudi residents need a valid passport (6+ months), active Exit/Re-Entry visa, and UAE tourist visa (many nationalities receive free on-arrival). Saudi citizens and GCC nationals travel on their national ID. Check the UAE Federal Authority for Identity and Citizenship website for your nationality's requirements.",
          "Vehicle recommendation: For a 950 km journey, we strongly recommend the GMC Yukon SUV or our VIP luxury class. Both feature reclining leather seats, tri-zone climate control, spacious boot, Wi-Fi hotspot, and USB charging. We schedule 2 rest stops at air-conditioned highway service stations with prayer facilities and dining options.",
          "Starting price is 3,500 SAR for a Camry Sedan and 4,800 SAR for the GMC Yukon, including all fuel, Al Batha road tolls, and UAE Salik road tolls. Book via WhatsApp with at least 24 hours notice for UAE routes."
        ],
        ar: [
          "يعتبر السفر من الدمام إلى دبي براً واحدة من أكثر رحلات العبور الحدودي الخليجي إثارة وجمالاً. تستغرق رحلة 950 كيلومتر من 9 إلى 10 ساعات بالتاكسي الخاص عبر منفذ البطحاء (السعودية) إلى الغويفات (الإمارات)، مروراً بإمارة أبوظبي قبل الوصول إلى دبي.",
          "يعبر الطريق حدودين دوليتين — تغادر المملكة العربية السعودية عند نقطة التفتيش البطحاء وتدخل الإمارات عند الغويفات. تستغرق إجراءات الحدود عادةً 30-60 دقيقة في كل اتجاه. يمتلك سائقونا تصاريح نقل تجارية عبر الحدود بين السعودية والإمارات، وتحمل سياراتنا تأمين الطريق الإماراتي المطلوب.",
          "المستندات المطلوبة: يحتاج المقيمون في السعودية إلى جواز سفر صالح (6+ أشهر)، تأشيرة خروج وعودة نشطة، وتأشيرة سياحية إماراتية. يسافر المواطنون السعوديون ومواطنو دول الخليج ببطاقة الهوية الوطنية.",
          "توصية المركبة: لرحلة 950 كيلومتراً، نوصي بشدة بجي إم سي يوكن أو فئتنا الفاخرة. كلاهما يتميز بمقاعد جلدية قابلة للرفع وتحكم مناخي ثلاثي المناطق وصندوق خلفي واسع وواي فاي وشواحن USB. نقوم بجدولة 2 من محطات الراحة.",
          "السعر الابتدائي 3,500 ريال للكامري و4,800 ريال لجي إم سي يوكن، شاملاً جميع الوقود ورسوم الطريق. احجز عبر واتساب بإشعار لا يقل عن 24 ساعة لوجهات الإمارات."
        ]
      }
    },
    {
      id: 6,
      title: {
        en: "GCC Border Crossing Documents — What You Need for Bahrain, Kuwait, UAE & Qatar",
        ar: "وثائق عبور حدود دول الخليج — ما تحتاجه للبحرين والكويت والإمارات وقطر",
      },
      date: "2026-05-08",
      category: { en: "GCC Travel Guides", ar: "أدلة سفر الخليج" },
      excerpt: {
        en: "A complete checklist of documents required for Saudi residents and tourists crossing into Bahrain, Kuwait, UAE, and Qatar by private taxi.",
        ar: "قائمة مراجعة كاملة بالوثائق المطلوبة للمقيمين في السعودية والسياح عند العبور إلى البحرين والكويت والإمارات وقطر بالتاكسي الخاص.",
      },
      content: {
        en: [
          "Crossing Saudi Arabia's land borders into GCC countries requires specific documentation depending on your nationality and residency status. This guide covers what every traveller needs before departure.",
          "FOR BAHRAIN (King Fahd Causeway, 85 km): Saudi citizens & GCC nationals need a valid national ID or passport. Saudi residents (expatriates) need: passport (6+ months valid), active Exit/Re-Entry visa, Bahrain eVisa or visa-on-arrival (available to most nationalities). Causeway toll ~35 SAR — included in our fares.",
          "FOR KUWAIT (Khafji Border, 420 km): Saudi & GCC citizens need national ID or passport. Residents need: valid passport, active Exit/Re-Entry visa, Kuwait eVisa (apply online at evisa.moi.gov.kw). Khafji–Nuwaiseeb crossing is operational for private vehicles.",
          "FOR UAE (Al Batha–Ghuwaifat, 950 km): All travellers need a passport (6+ months). UAE grants visa-on-arrival to 100+ nationalities at land borders. Saudi residents need Exit/Re-Entry visa. Our vehicles carry UAE cross-border road insurance. Salik tolls in Dubai are included in our fare.",
          "FOR QATAR (Salwa–Abu Samra, 310–400 km): Saudi & GCC nationals need national ID. Residents need passport + Exit/Re-Entry visa + Qatar Hayya card or eVisa. The Salwa crossing has been fully operational since January 2021 following the restoration of Saudi-Qatar relations.",
          "Important: Always check the latest visa requirements before travel as rules change periodically. Our WhatsApp team is happy to advise on current entry requirements when you book."
        ],
        ar: [
          "يتطلب العبور من المملكة العربية السعودية براً إلى دول مجلس التعاون الخليجي وثائق محددة تعتمد على جنسيتك ووضع إقامتك. يغطي هذا الدليل ما يحتاجه كل مسافر قبل المغادرة.",
          "للبحرين (جسر الملك فهد، 85 كم): يحتاج المواطنون السعوديون ومواطنو الخليج إلى الهوية الوطنية أو جواز السفر. يحتاج المقيمون إلى: جواز سفر (صالح 6+ أشهر)، تأشيرة خروج وعودة نشطة، تأشيرة بحرين إلكترونية أو عند الوصول. رسوم الجسر ~35 ريال مشمولة في أسعارنا.",
          "للكويت (منفذ الخفجي، 420 كم): يحتاج مواطنو السعودية والخليج إلى الهوية أو جواز السفر. المقيمون يحتاجون: جواز سفر صالح، تأشيرة خروج وعودة، تأشيرة كويتية إلكترونية (التقدم عبر الإنترنت).",
          "للإمارات (البطحاء-الغويفات، 950 كم): جميع المسافرين يحتاجون جواز سفر (6+ أشهر). الإمارات تمنح تأشيرة عند الوصول لأكثر من 100 جنسية. المقيمون في السعودية يحتاجون تأشيرة خروج وعودة. سياراتنا تحمل تأمين الطريق الإماراتي.",
          "لقطر (منفذ سلوى-أبو سمرة، 310–400 كم): مواطنو السعودية والخليج يحتاجون الهوية الوطنية. المقيمون يحتاجون جواز سفر + تأشيرة خروج وعودة + بطاقة هيا أو تأشيرة إلكترونية. منفذ سلوى مفتوح بالكامل منذ يناير 2021.",
          "هام: تحقق دائماً من أحدث اشتراطات التأشيرة قبل السفر. فريقنا عبر واتساب سعيد بتقديم المشورة حول متطلبات الدخول الحالية عند الحجز."
        ]
      }
    },
    {
      id: 7,
      title: {
        en: "Best Taxi Service for Saudi Aramco, SABIC & Jubail Employees",
        ar: "أفضل خدمة تاكسي لموظفي أرامكو السعودية وسابك والجبيل الصناعية",
      },
      date: "2026-05-06",
      category: { en: "Corporate Travel", ar: "سفر الشركات" },
      excerpt: {
        en: "Why Dammam Airport Taxi is the go-to corporate transfer service for Saudi Aramco, SABIC, RCJY, and international oil & gas companies in the Eastern Province.",
        ar: "لماذا يعتبر تاكسي مطار الدمام خدمة النقل المؤسسي المفضلة لأرامكو السعودية وسابك والهيئة الملكية وشركات النفط والغاز الدولية.",
      },
      content: {
        en: [
          "Saudi Arabia's Eastern Province is the oil & gas capital of the world, home to Saudi Aramco's global headquarters in Dhahran, SABIC headquarters in Riyadh (with major operations in Jubail), the Royal Commission for Jubail and Yanbu (RCJY), and hundreds of international contractors including Halliburton, Baker Hughes, SLB, Honeywell, and Technip.",
          "International engineers, project managers, and executives arriving at King Fahd International Airport (DMM) need reliable, professional ground transport to corporate compounds, industrial facilities, and office parks across Dhahran, Jubail, Ras Tanura, and Khobar — often within hours of landing.",
          "Dammam Airport Taxi provides dedicated corporate accounts with: monthly consolidated VAT-compliant tax invoices (accepted by Saudi Aramco, SABIC & RCJY accounts payable), priority dispatch over standard bookings, English-speaking professional chauffeurs, GPS-tracked vehicles with live status for travel desks, and fleet-level dispatch for large delegations.",
          "Our drivers are experienced with all Aramco visitor gate procedures (Gate 1, Gate 2, Gate 3, Dhahran compound), all Jubail Industrial Area checkpoints, and RCJY residential compound delivery protocols. We serve KFUPM students, faculty, and visiting researchers from the airport directly.",
          "Contact our corporate desk on WhatsApp to set up a corporate account. We prepare a custom rate card within 24 hours and a 1-page service agreement. Minimum contract commitment: none. Monthly invoice settlement. Multiple-vehicle simultaneous dispatch for group arrivals."
        ],
        ar: [
          "تعتبر المنطقة الشرقية بالمملكة العربية السعودية عاصمة النفط والغاز في العالم، وتضم المقر الرئيسي العالمي لأرامكو السعودية في الظهران، ومقر سابك في الرياض مع عمليات رئيسية في الجبيل، والهيئة الملكية للجبيل وينبع، ومئات المقاولين الدوليين.",
          "يحتاج المهندسون الدوليون ومديرو المشاريع والمديرون التنفيذيون الواصلون إلى مطار الملك فهد الدولي إلى وسيلة نقل أرضية موثوقة ومحترفة إلى المجمعات المؤسسية والمنشآت الصناعية.",
          "يوفر تاكسي مطار الدمام حسابات مؤسسية مخصصة تشمل: فواتير ضريبية موحدة شهرية متوافقة مع متطلبات ضريبة القيمة المضافة، إرسال ذو أولوية على الحجوزات العادية، سائقون محترفون يتحدثون الإنجليزية، سيارات بتتبع GPS.",
          "سائقونا على دراية بجميع إجراءات بوابات الزوار في أرامكو (البوابة 1، 2، 3، مجمع الظهران) وجميع نقاط تفتيش منطقة الجبيل الصناعية وبروتوكولات التوصيل لمجمعات الهيئة الملكية.",
          "تواصل مع مكتبنا المؤسسي عبر واتساب لإنشاء حساب شركة. نقوم بإعداد بطاقة أسعار مخصصة خلال 24 ساعة. لا يوجد حد أدنى للالتزام التعاقدي. تسوية الفاتورة الشهرية. إرسال متعدد المركبات في آنٍ واحد لوصول المجموعات."
        ]
      }
    },
    {
      id: 8,
      title: {
        en: "Dammam to Jeddah by Taxi — 1,260 km Road Guide",
        ar: "من الدمام إلى جدة بالتاكسي — دليل طريق ١٢٦٠ كم",
      },
      date: "2026-05-04",
      category: { en: "Route Guides", ar: "أدلة الوجهات" },
      excerpt: {
        en: "Dammam to Jeddah is 1,260 km — one of Saudi Arabia's longest intercity drives. Full guide on travel time, vehicle choice, rest stops, and cost.",
        ar: "الدمام إلى جدة 1,260 كم — أحد أطول الطرق بين المدن السعودية. دليل كامل عن وقت السفر واختيار السيارة ومحطات الراحة والتكلفة.",
      },
      content: {
        en: [
          "The Dammam to Jeddah road journey covers 1,260 km across the width of Saudi Arabia — from the Arabian Gulf coast in the east to the Red Sea in the west. Travel time is approximately 12 to 13 hours with scheduled rest stops, making it one of our longest intercity taxi routes.",
          "The route typically follows the E40 highway west through Riyadh, then south-west on the E11 toward Mecca and Jeddah. Alternatively, some drivers prefer the northern route via Qassim (Buraydah) which avoids Riyadh traffic. Our driver will discuss the best route based on traffic conditions on the day of travel.",
          "Jeddah is famous for Al-Balad — the UNESCO-listed historic district with traditional coral-stone architecture, the King Fahd Fountain (the world's tallest at 312 m), the vibrant Jeddah Corniche (30 km along the Red Sea), the Floating Mosque (Al-Rahma Mosque), and world-class hotels and restaurants.",
          "For this distance we strongly recommend the GMC Yukon or Hyundai Staria Van for groups. We schedule 3 rest stops at quality highway service stations with prayer rooms, restaurant facilities, and fuel. All vehicles have Wi-Fi, USB charging, and chilled water. Starting from 4,500 SAR for a sedan.",
          "This route is also popular for Umrah travellers heading to Mecca (1,280 km, 12–13 hrs) and Madinah (1,100 km, 10–11 hrs). We offer respectful, professional service and can coordinate combined Jeddah–Mecca–Madinah transfer packages on request."
        ],
        ar: [
          "تغطي رحلة الدمام إلى جدة براً 1,260 كيلومتراً عبر عرض المملكة العربية السعودية — من ساحل الخليج العربي في الشرق إلى البحر الأحمر في الغرب. يستغرق وقت السفر حوالي 12 إلى 13 ساعة مع محطات راحة مجدولة.",
          "يتبع الطريق عادةً الطريق السريع E40 غرباً عبر الرياض، ثم جنوب غرب على E11 نحو مكة وجدة. بعض السائقين يفضلون الطريق الشمالي عبر القصيم لتجنب ازدحام الرياض.",
          "تشتهر جدة بالبلد — المنطقة التاريخية المدرجة على قائمة اليونسكو، ونافورة الملك فهد (الأطول في العالم 312 م)، وكورنيش جدة (30 كم على ساحل البحر الأحمر)، والمسجد العائم (مسجد الرحمة).",
          "لهذه المسافة نوصي بشدة بجي إم سي يوكن أو فان هيونداي ستاريا للمجموعات. نقوم بجدولة 3 محطات راحة في محطات طريق سريع ذات جودة مع غرف صلاة ومرافق مطعم ووقود. تبدأ من 4,500 ريال للسيدان.",
          "هذا الطريق شائع أيضاً لمعتمري مكة المكرمة (1,280 كم) والمدينة المنورة (1,100 كم). نقدم خدمة محترمة ويمكننا تنسيق باقات نقل مجمعة جدة–مكة–المدينة عند الطلب."
        ]
      }
    },
    {
      id: 9,
      title: {
        en: "Half Moon Bay from Dammam — Day Trip Guide & Taxi Cost",
        ar: "خليج نصف القمر من الدمام — دليل رحلة يوم والتكلفة بالتاكسي",
      },
      date: "2026-05-02",
      category: { en: "Tourism & Day Trips", ar: "السياحة ورحلات اليوم" },
      excerpt: {
        en: "Half Moon Bay is the Eastern Province's premier beach resort — 88 km from Dammam Airport. Everything you need to know for a perfect day trip.",
        ar: "خليج نصف القمر هو أفضل منتجع شاطئي في المنطقة الشرقية — 88 كم من مطار الدمام. كل ما تحتاج معرفته لرحلة يوم مثالية.",
      },
      content: {
        en: [
          "Half Moon Bay (خليج نصف القمر) is the Eastern Province's most famous beach destination, located approximately 88 km south of Dammam Airport and about 35 km south of Al Khobar. The crescent-shaped bay on the Arabian Gulf coast is named for its distinctive half-moon shape when viewed from above.",
          "The bay features private beach resorts, chalets for rent, jet skiing, kayaking, windsurfing, and a range of waterfront restaurants and cafés. It is especially popular for families, weekend retreats, and corporate team-building events from the Eastern Province's large expat community.",
          "By private taxi from Dammam Airport to Half Moon Bay, the journey takes 60–70 minutes and costs from 220 SAR for a sedan. From Al Khobar city centre the distance is 35 km — about 30–40 minutes by taxi. Our drivers know the exact locations of all resort entrances, beach chalets, and public access points.",
          "The best time to visit Half Moon Bay is October to April when the Gulf climate is mild (18–28°C). Summer months (June–August) see temperatures above 40°C, making indoor resort facilities more popular.",
          "Book a round-trip Half Moon Bay taxi on WhatsApp. We offer flexible waiting options — pay per hour for a driver who stays during your visit, or book a pickup for a specified return time. Popular for same-day airport arrivals looking for a beach day before heading to their final destination."
        ],
        ar: [
          "خليج نصف القمر هو أشهر وجهة شاطئية في المنطقة الشرقية، يقع على بعد حوالي 88 كيلومتراً جنوب مطار الدمام وحوالي 35 كيلومتراً جنوب الخبر. الخليج ذو الشكل الهلالي على ساحل الخليج العربي سمي لشكله المميز عند النظر إليه من الأعلى.",
          "يضم الخليج منتجعات شاطئية خاصة وشاليهات للإيجار وركوب الدراجات المائية والتجديف وركوب الأمواج وسلسلة من المطاعم والمقاهي على الواجهة البحرية.",
          "بالتاكسي الخاص من مطار الدمام إلى خليج نصف القمر، تستغرق الرحلة 60–70 دقيقة وتكلف من 220 ريال للسيدان. من مدينة الخبر المسافة 35 كم — حوالي 30–40 دقيقة بالتاكسي.",
          "أفضل وقت لزيارة خليج نصف القمر من أكتوبر إلى أبريل عندما يكون المناخ معتدلاً (18–28 درجة مئوية). أشهر الصيف (يونيو–أغسطس) ترتفع درجات الحرارة فيها إلى ما فوق 40 درجة.",
          "احجز رحلة تاكسي ذهاباً وإياباً إلى خليج نصف القمر عبر واتساب. نقدم خيارات انتظار مرنة — الدفع بالساعة للسائق الذي يبقى طوال زيارتك، أو حجز وقت عودة محدد."
        ]
      }
    },
    {
      id: 10,
      title: {
        en: "Sedan vs SUV vs Family Van — Which Taxi to Book from Dammam Airport?",
        ar: "سيدان أم SUV أم فان عائلي — أي تاكسي تحجز من مطار الدمام؟",
      },
      date: "2026-04-28",
      category: { en: "Fleet & Vehicles", ar: "الأسطول والسيارات" },
      excerpt: {
        en: "Not sure which vehicle to book for your Dammam Airport transfer? This guide compares the Camry Sedan, GMC Yukon SUV, and Hyundai Staria Van.",
        ar: "لست متأكداً من أي سيارة تحجز لتوصيل مطار الدمام؟ يقارن هذا الدليل بين كامري السيدان وجي إم سي يوكن و هيونداي ستاريا.",
      },
      content: {
        en: [
          "Choosing the right vehicle for your Dammam Airport transfer depends on group size, luggage volume, journey distance, and budget. Here is our complete comparison guide.",
          "TOYOTA CAMRY SEDAN (from 120 SAR local / 150 SAR airport): Best for 1–3 passengers with 2 standard bags. The Camry is our most economical option — spacious boot, comfortable leather interior, full air-conditioning. Ideal for solo business travellers, couples, and short local transfers to Khobar, Dhahran, or Dammam city.",
          "GMC YUKON SUV (from 280 SAR local / 300 SAR airport): Best for 4–6 passengers or groups with heavy luggage. The full-size Yukon has an enormous cargo area, 3-row seating, and a commanding road presence. Preferred by corporate executives, large families, and travellers on GCC cross-border routes to Bahrain, Kuwait, or UAE who need comfort for long drives.",
          "HYUNDAI STARIA FAMILY VAN (from 320 SAR): Best for 7–8 passengers or groups with maximum luggage. The Staria is a premium people-carrier with individual captain chairs, rear privacy glass, sliding doors, and ample overhead storage. Perfect for large families, sports teams, conference groups, and airport-to-compound compound shuttles.",
          "VIP LUXURY CLASS (custom quote): Mercedes S-Class or equivalent for 1–3 VIP passengers. Full executive specification with massage seats, privacy partition, premium sound system. For CEO-level visits, official delegations, and high-profile events. Contact us on WhatsApp for availability and pricing."
        ],
        ar: [
          "يعتمد اختيار المركبة المناسبة لتوصيل مطار الدمام على حجم المجموعة وحجم الأمتعة ومسافة الرحلة والميزانية. إليك دليل المقارنة الكامل.",
          "تويوتا كامري سيدان (من 120 ريال محلياً / 150 ريال من المطار): الأفضل لـ 1-3 ركاب مع حقيبتين قياسيتين. الكامري هي خيارنا الأوفر — صندوق خلفي واسع، داخلية جلدية مريحة، تكييف كامل. مثالية لرجال الأعمال المنفردين والأزواج والتوصيلات المحلية القصيرة.",
          "جي إم سي يوكن SUV (من 280 ريال محلياً / 300 ريال من المطار): الأفضل لـ 4-6 ركاب أو مجموعات بأمتعة ثقيلة. اليوكن بحجمه الكامل لديه مساحة شحن ضخمة ومقاعد ثلاثة صفوف. مفضلة من المديرين التنفيذيين والعائلات الكبيرة.",
          "هيونداي ستاريا فان عائلي (من 320 ريال): الأفضل لـ 7-8 ركاب أو مجموعات بأمتعة قصوى. الستاريا حاملة ركاب فاخرة بمقاعد كابتن فردية وزجاج خصوصية خلفي وأبواب منزلقة. مثالية للعائلات الكبيرة وفرق الرياضة.",
          "فئة VIP الفاخرة (سعر مخصص): مرسيدس S-Class أو ما يعادلها لـ 1-3 ركاب من كبار الشخصيات. مواصفات تنفيذية كاملة مع مقاعد تدليك وحاجز خصوصية. لزيارات مستوى الرئيس التنفيذي والوفود الرسمية. تواصل معنا عبر واتساب."
        ]
      }
    },
    {
      id: 11,
      title: {
        en: "Dammam to Madinah & Mecca Taxi — Umrah & Religious Transfer Guide",
        ar: "تاكسي الدمام إلى المدينة المنورة ومكة المكرمة — دليل العمرة والنقل الديني",
      },
      date: "2026-04-25",
      category: { en: "Religious Travel", ar: "السفر الديني" },
      excerpt: {
        en: "Planning Umrah or Ziyarah from the Eastern Province? Our complete guide to taxi transfers from Dammam to Mecca (1,280 km) and Madinah (1,100 km).",
        ar: "تخطط للعمرة أو الزيارة من المنطقة الشرقية؟ دليلنا الكامل لتوصيل التاكسي من الدمام إلى مكة (1,280 كم) والمدينة المنورة (1,100 كم).",
      },
      content: {
        en: [
          "Dammam to Mecca distance by road is approximately 1,280 km — a 12 to 13 hour journey via Riyadh and Taif. Dammam to Madinah (Al-Masjid an-Nabawi) is 1,100 km — approximately 10 to 11 hours. Both are among the most significant religious journeys in the world.",
          "We provide respectful, professional private taxi transfers for Umrah pilgrims, Ziyarah visitors, and families travelling for religious purposes. All our drivers are Saudi nationals familiar with the spiritual significance of these journeys. No music is played during the journey unless requested.",
          "For Dammam to Mecca, the route passes through Riyadh (400 km) and continues south-west toward Taif (850 km) before descending to Mecca. Non-Muslim passengers cannot enter Mecca — our drivers coordinate alternative drop-off points. For Muslim passengers, we coordinate with your accommodation in Makkah for direct delivery.",
          "Dammam to Madinah is a shorter journey (1,100 km, 10–11 hrs) following the route northwest via Riyadh and then north-west. Key Madinah destinations served: Al-Masjid an-Nabawi (Prophet's Mosque), Quba Mosque, Masjid al-Qiblatayn, Al-Baqi Cemetery, and all Madinah hotels.",
          "Pricing from Dammam: Mecca from 4,800 SAR (sedan), Madinah from 4,000 SAR (sedan). We also offer combined Mecca + Madinah packages and can coordinate return transfers or onward Jeddah connections. Book via WhatsApp with at least 48 hours notice."
        ],
        ar: [
          "تبلغ مسافة الدمام إلى مكة المكرمة براً حوالي 1,280 كيلومتراً — رحلة مدتها 12 إلى 13 ساعة عبر الرياض والطائف. أما الدمام إلى المدينة المنورة فهي 1,100 كيلومتر — حوالي 10 إلى 11 ساعات.",
          "نقدم رحلات تاكسي خاصة محترمة ومهنية لحجاج العمرة وزوار الزيارة والعائلات المسافرة لأغراض دينية. جميع سائقينا مواطنون سعوديون على دراية بالأهمية الروحية لهذه الرحلات. لا يتم تشغيل الموسيقى أثناء الرحلة إلا إذا طلب ذلك.",
          "لرحلة الدمام إلى مكة المكرمة، يمر الطريق عبر الرياض (400 كم) ويستمر جنوب غرب نحو الطائف (850 كم) قبل النزول إلى مكة. للمسافرين المسلمين، ننسق مع إقامتكم في مكة للتوصيل المباشر.",
          "الدمام إلى المدينة المنورة رحلة أقصر (1,100 كم، 10-11 ساعات) شمال غرب عبر الرياض. الوجهات الرئيسية بالمدينة: المسجد النبوي الشريف، مسجد قباء، مسجد القبلتين، البقيع، وجميع فنادق المدينة.",
          "الأسعار من الدمام: مكة المكرمة من 4,800 ريال (سيدان)، المدينة المنورة من 4,000 ريال (سيدان). نقدم أيضاً باقات مجمعة مكة + المدينة. احجز عبر واتساب بإشعار لا يقل عن 48 ساعة."
        ]
      }
    },
    {
      id: 12,
      title: {
        en: "Night Arrivals at Dammam Airport — What to Expect & How to Stay Safe",
        ar: "الوصول ليلاً إلى مطار الدمام — ما يمكن توقعه وكيف تبقى آمناً",
      },
      date: "2026-04-22",
      category: { en: "Airport Guides", ar: "أدلة المطارات" },
      excerpt: {
        en: "Many international flights arrive at DMM between 11pm and 4am. Here is everything you need to know about safe, reliable night-time airport transfers.",
        ar: "تصل العديد من الرحلات الدولية إلى مطار الدمام بين الساعة 11 مساءً و4 صباحاً. إليك كل ما تحتاج معرفته حول توصيلات المطار الليلية الآمنة.",
      },
      content: {
        en: [
          "A significant percentage of international flights arrive at King Fahd International Airport (DMM) between 11pm and 4am — especially flights from Europe, the Americas, and Southeast Asia. Late-night arrivals present unique challenges that a pre-booked private taxi solves completely.",
          "At these hours, ride-hailing apps experience longer wait times due to reduced driver availability. Unregulated street taxis outside the terminal may attempt to negotiate inflated fares with tired, disoriented travellers. Our pre-booked service guarantees your driver is in the arrivals hall with your name board regardless of arrival time.",
          "Our dispatch team operates 24/7/365 — including Eid Al-Fitr, Eid Al-Adha, Saudi National Day, and all public holidays. Night arrivals are managed with the same level of professionalism as daytime pickups. No additional night surcharges are applied.",
          "For solo travellers — especially women travelling alone — pre-booking with a named, photo-identified driver provides an important additional layer of security. We send your driver's name, photo, and direct mobile number 2 hours before your landing so you can verify identity before entering the vehicle.",
          "Practical tips for night arrivals: (1) Save our WhatsApp number before departure. (2) Send your flight number when booking so we track any delays automatically. (3) If you cannot locate your driver, call them directly — you have their number. (4) If your flight is cancelled, contact us to reschedule — free cancellation up to 6 hours before scheduled pickup."
        ],
        ar: [
          "تصل نسبة كبيرة من الرحلات الدولية إلى مطار الملك فهد الدولي بين الساعة 11 مساءً و4 صباحاً — خاصةً الرحلات القادمة من أوروبا والأمريكتين وجنوب شرق آسيا. تطرح وصولات الليل المتأخر تحديات فريدة يحلها التاكسي الخاص المحجوز مسبقاً بالكامل.",
          "في هذه الساعات، تعاني تطبيقات طلب السيارات من أوقات انتظار أطول بسبب انخفاض توفر السائقين. سياراتنا المحجوزة مسبقاً تضمن وجود سائقك في صالة الوصول مع لوحة باسمك بغض النظر عن وقت الوصول.",
          "يعمل فريق العمليات لدينا 24/7/365 — بما في ذلك عيد الفطر وعيد الأضحى واليوم الوطني السعودي وجميع الإجازات الرسمية. تتم إدارة الوصول الليلي بنفس المستوى من الاحترافية كالتوصيلات النهارية. لا يتم تطبيق أي رسوم إضافية ليلية.",
          "للمسافرين المنفردين — خاصةً السيدات المسافرات بمفردهن — يوفر الحجز المسبق مع سائق معرّف بالاسم والصورة طبقة إضافية مهمة من الأمان. نرسل اسم سائقك وصورته ورقم هاتفه المباشر قبل ساعتين من هبوطك.",
          "نصائح عملية للوصول الليلي: (1) احفظ رقم واتساب الخاص بنا قبل المغادرة. (2) أرسل رقم رحلتك عند الحجز. (3) إذا لم تتمكن من العثور على سائقك، اتصل به مباشرة. (4) إذا ألغيت رحلتك، تواصل معنا لإعادة الجدولة مجاناً."
        ]
      }
    },
    {
      id: 13,
      title: {
        en: "Dammam to Bahrain Taxi: Complete 2026 Guide (King Fahd Causeway)",
        ar: "تاكسي من الدمام إلى البحرين: دليل شامل 2026 (جسر الملك فهد)",
      },
      date: "2026-07-01",
      category: { en: "GCC Travel Guides", ar: "أدلة سفر الخليج" },
      excerpt: {
        en: "Everything you need to know about taking a taxi from Dammam to Bahrain via the King Fahd Causeway — fares, border tips, and travel time.",
        ar: "كل ما تحتاج معرفته عن التنقل بالتاكسي من الدمام إلى البحرين عبر جسر الملك فهد — الأسعار ونصائح الحدود ووقت الرحلة.",
      },
      content: {
        en: [
          "The Dammam to Bahrain taxi route via the King Fahd Causeway is one of the most popular cross-border journeys in the Gulf region. Covering approximately 85 kilometers door-to-door, this trip connects Saudi Arabia's Eastern Province to the Kingdom of Bahrain in 1.5 to 2 hours under normal traffic conditions.",
          "Fare & What's Included: Our fixed taxi fare from Dammam (or King Fahd International Airport) to Bahrain starts from 350 SAR for a Camry sedan. This includes all King Fahd Causeway bridge tolls — no surprises at the border. GCC nationals travelling on their national ID pay no additional visa fees. Non-GCC residents should verify Bahrain e-visa requirements before departure.",
          "The Border Crossing Process: The King Fahd Causeway has Saudi departure controls on the Saudi side and Bahraini entry controls on the Bahrain side. Your driver handles all vehicle documentation. Passport stamping takes 10–40 minutes depending on the day and time — Friday afternoons and public holidays are the busiest. GCC national lanes are significantly faster.",
          "Best Times to Cross: Avoid Friday evenings and Saturday mornings when weekend leisure traffic is heaviest. Tuesday, Wednesday, and Thursday mornings offer the fastest crossings. Night crossings (11pm–5am) are also quick but check your Bahrain entry permissions in advance.",
          "Why Book a Private Taxi Instead of Driving: Many Eastern Province residents and tourists choose a private taxi over driving their own car because: (1) No need for temporary vehicle export permit or Bahrain car insurance. (2) Your driver waits while you complete your business in Manama. (3) Return journey is arranged at your convenience. Contact us to book your Dammam to Bahrain taxi with 24/7 WhatsApp support."
        ],
        ar: [
          "يُعدّ مسار تاكسي من الدمام إلى البحرين عبر جسر الملك فهد أحد أكثر رحلات عبور الحدود شيوعاً في منطقة الخليج. تبلغ المسافة حوالي 85 كيلومتراً من باب إلى باب، وتستغرق الرحلة من 1.5 إلى ساعتين في الظروف العادية.",
          "الأسعار وما يشمله: يبدأ سعر التاكسي الثابت من الدمام (أو مطار الملك فهد الدولي) إلى البحرين من 350 ريال سعودي لسيارة كامري. يشمل هذا السعر جميع رسوم جسر الملك فهد دون أي مفاجآت عند الحدود.",
          "إجراءات عبور الحدود: يحتوي جسر الملك فهد على نقطة مراقبة مغادرة سعودية من الجانب السعودي ونقطة دخول بحرينية من الجانب البحريني. يتولى سائقك جميع وثائق السيارة. يستغرق ختم جوازات السفر من 10 إلى 40 دقيقة اعتماداً على اليوم والوقت.",
          "أفضل أوقات العبور: تجنب مساء يوم الجمعة وصباح السبت عندما يكون حركة مرور العطلة في أوجها. تُعدّ صباحات الثلاثاء والأربعاء والخميس من أسرع أوقات العبور.",
          "لماذا تحجز تاكسياً خاصاً بدلاً من قيادة سيارتك: يختار كثيرون في المنطقة الشرقية تاكسياً خاصاً بدلاً من قيادة سياراتهم لأسباب عدة: (1) لا حاجة لتصريح تصدير مؤقت للسيارة أو تأمين سيارة بحريني. (2) سائقك ينتظرك أثناء إنجاز أعمالك في المنامة. (3) ترتيب رحلة العودة بحسب ما يناسبك."
        ]
      }
    },
    {
      id: 14,
      title: {
        en: "Dammam Airport to Al Khobar Taxi: Routes, Fares & Travel Tips",
        ar: "تاكسي من مطار الدمام إلى الخبر: المسارات والأسعار ونصائح السفر",
      },
      date: "2026-07-03",
      category: { en: "Airport Guides", ar: "أدلة المطارات" },
      excerpt: {
        en: "The complete guide to getting from King Fahd International Airport (DMM) to Al Khobar — including fares, travel times, and what to expect.",
        ar: "الدليل الشامل للانتقال من مطار الملك فهد الدولي إلى الخبر — بما في ذلك الأسعار وأوقات السفر وما يمكن توقعه.",
      },
      content: {
        en: [
          "Al Khobar is one of the Eastern Province's most cosmopolitan cities and a major business hub — home to a large expat community, petrochemical companies, and the gateway to the King Fahd Causeway. Getting from King Fahd International Airport (DMM) to Al Khobar is a common transfer request we handle daily.",
          "Distance & Travel Time: The airport is located approximately 60 kilometers from Al Khobar city centre. Under normal traffic conditions, the journey takes 40–55 minutes via the Dammam–Khobar highway. During peak hours (7–9am and 4–7pm), allow 60–75 minutes.",
          "Fixed Fare from DMM to Al Khobar: Our fixed rate starts from 150 SAR for a standard Camry sedan. SUV options (GMC Yukon, Toyota Land Cruiser) are available from 220 SAR for families or passengers with extra luggage. All prices include airport parking fees — no hidden extras.",
          "What's Included in Your Booking: Free 60-minute waiting time from your actual landing time (we track your flight automatically). Name-board meet & greet in the arrivals hall. Luggage assistance. 24/7 WhatsApp support. Complimentary bottled water.",
          "Popular Destinations in Al Khobar We Cover: Khobar Corniche hotels (Le Méridien, Movenpick, Crown Plaza), Aramco compounds (Dhahran Hills, Palm), Prince Mohammed bin Fahd Road business district, Half Moon Bay resort area, and all residential districts. Book your DMM to Al Khobar taxi on WhatsApp for instant confirmation."
        ],
        ar: [
          "الخبر إحدى أكثر مدن المنطقة الشرقية تنوعاً وتطوراً، وهي مركز تجاري رئيسي — تضم مجتمعاً كبيراً من المغتربين وشركات بتروكيماوية وبوابة جسر الملك فهد. الانتقال من مطار الملك فهد الدولي إلى الخبر أحد أكثر طلبات التوصيل التي نتعامل معها يومياً.",
          "المسافة ووقت السفر: يقع المطار على بُعد حوالي 60 كيلومتراً من وسط مدينة الخبر. في الظروف الاعتيادية تستغرق الرحلة 40-55 دقيقة عبر طريق الدمام-الخبر السريع.",
          "السعر الثابت من المطار إلى الخبر: يبدأ سعرنا الثابت من 150 ريال سعودي لسيارة كامري العادية. تتوفر سيارات SUV (يوكن، لاند كروزر) من 220 ريالاً للعائلات أو الركاب ذوي الأمتعة الزائدة.",
          "ما يشمله حجزك: انتظار مجاني لمدة 60 دقيقة من وقت هبوطك الفعلي (نتابع رحلتك تلقائياً). استقبال ببطاقة اسمك في صالة الوصول. مساعدة في الأمتعة. دعم واتساب على مدار الساعة.",
          "أبرز الوجهات في الخبر التي نغطيها: فنادق كورنيش الخبر، المجمعات السكنية لأرامكو، منطقة الأعمال، منتجع خليج نصف القمر، وجميع الأحياء السكنية. احجز تاكسيك من مطار الدمام إلى الخبر عبر واتساب للحصول على تأكيد فوري."
        ]
      }
    },
    {
      id: 15,
      title: {
        en: "Hiring a Private Driver for a Day in Dammam: What to Expect",
        ar: "استئجار سائق خاص ليوم كامل في الدمام: ما الذي يمكن توقعه",
      },
      date: "2026-07-05",
      category: { en: "Services", ar: "الخدمات" },
      excerpt: {
        en: "Need a driver for meetings, errands, or city exploration in Dammam? Discover how hourly chauffeur hire works and what it costs.",
        ar: "هل تحتاج إلى سائق للاجتماعات أو المهام أو استكشاف المدينة في الدمام؟ تعرف على كيفية عمل استئجار سائق بالساعة وتكلفته.",
      },
      content: {
        en: [
          "Not every journey is a simple A-to-B airport transfer. Business executives, corporate delegations, government officials, and touring families often need a professional driver available for an entire day — waiting between meetings, making multiple stops, or exploring the Eastern Province at their own pace. This is exactly what our hourly chauffeur service provides.",
          "How It Works: You book a vehicle and driver for a minimum of 4 hours. The driver remains at your disposal throughout — waiting at offices, hotels, restaurants, or shopping centres. You control the schedule entirely. At the end of the day, you pay a flat hourly rate with no per-kilometre charges within the Dammam/Khobar/Dhahran metro area.",
          "Pricing: Our hourly rates start from 120 SAR/hour (4-hour minimum) for a standard sedan. SUV options start from 180 SAR/hour. Full-day packages (8–10 hours) offer better value at 900–1,400 SAR depending on vehicle class. Long-distance day trips (e.g., Dammam to Al Hofuf and back) are priced separately — contact us for a quote.",
          "What Business Travellers Use It For: Multi-site facility visits in Jubail Industrial City or Ras Tanura. Back-to-back client meetings across Dammam and Khobar. Airport pickup followed by a full day of meetings. Government ministry visits in Dammam. Hospital or medical appointments with waiting.",
          "What Tourists Use It For: Exploring the Al-Ahsa Oasis (UNESCO World Heritage Site). Al Uqair beach and Half Moon Bay. Tarout Island cultural tour. Aramco Exhibit and KFUPM campus visit. Eastern Province souk and heritage district exploration. Book your private day driver on WhatsApp — we'll confirm within 15 minutes."
        ],
        ar: [
          "ليست كل رحلة مجرد انتقال بسيط من المطار إلى الوجهة. كثيراً ما يحتاج المديرون التنفيذيون والوفود التجارية والمسؤولون الحكوميون والعائلات إلى سائق محترف متاح طوال اليوم — ينتظر بين الاجتماعات ويقوم بتوصيلات متعددة. هذا بالضبط ما توفره خدمة استئجار السائق بالساعة.",
          "كيف تعمل الخدمة: تحجز سيارة وسائقاً لمدة لا تقل عن 4 ساعات. يبقى السائق تحت تصرفك طوال الوقت — ينتظر في المكاتب والفنادق والمطاعم ومراكز التسوق. أنت من يتحكم في الجدول الزمني بالكامل.",
          "الأسعار: تبدأ أسعارنا بالساعة من 120 ريالاً/ساعة (بحد أدنى 4 ساعات) لسيارة سيدان عادية. تبدأ خيارات SUV من 180 ريالاً/ساعة. توفر باقات اليوم الكامل (8-10 ساعات) قيمة أفضل بأسعار من 900 إلى 1400 ريال.",
          "ما يستخدمه رجال الأعمال: زيارات مواقع متعددة في مدينة جبيل الصناعية. اجتماعات عملاء متتالية في الدمام والخبر. استقبال من المطار يعقبه يوم عمل كامل. زيارات وزارات حكومية في الدمام.",
          "ما يستخدمه السياح: استكشاف واحة الأحساء (موقع تراث عالمي لليونسكو). شاطئ العقير وخليج نصف القمر. جولة ثقافية في جزيرة تاروت. زيارة معرض أرامكو وحرم جامعة الملك فهد للبترول والمعادن."
        ]
      }
    },
    {
      id: 16,
      title: {
        en: "Dammam to Riyadh by Taxi: The 400km Road Trip Guide",
        ar: "تاكسي من الدمام إلى الرياض: دليل رحلة 400 كيلومتر",
      },
      date: "2026-07-07",
      category: { en: "Intercity Routes", ar: "المسارات بين المدن" },
      excerpt: {
        en: "Planning a Dammam to Riyadh taxi trip? Everything you need to know — distance, travel time, fares, and why private transfer beats the bus.",
        ar: "تخطط لرحلة تاكسي من الدمام إلى الرياض؟ كل ما تحتاج معرفته — المسافة ووقت السفر والأسعار ولماذا التوصيل الخاص أفضل من الباص.",
      },
      content: {
        en: [
          "The Dammam to Riyadh taxi route is one of Saudi Arabia's most travelled intercity corridors, connecting the Eastern Province's energy capital to the Kingdom's political and commercial capital. The journey covers approximately 400 kilometers via the E40 highway and takes 3.5 to 4.5 hours under normal conditions.",
          "Fares: Our fixed rate for a Dammam to Riyadh private taxi starts from 900 SAR for a standard Camry sedan (1–4 passengers). VIP SUV (Yukon, Suburban) starts from 1,400 SAR (1–6 passengers). Family Van (Toyota Staria) for larger groups or heavy luggage starts from 1,600 SAR. All fares are fixed — no fuel surcharges, no toll-gate additions, no night fees.",
          "The Route: The E40 highway between Dammam and Riyadh is a modern, well-maintained dual carriageway. The road passes through Abqaiq and Haradh before entering the Riyadh region. Our drivers make one scheduled rest stop at a clean service station midway (around the 200km mark) for prayer and refreshments.",
          "Why Choose Private Taxi Over SAPTCO Bus or Flying: Private taxi offers door-to-door service — no bus terminal taxi, no airport queues, no extra luggage fees. Travel time is comparable to flying when you factor in check-in, security, and airport transfer at both ends. For 1–4 passengers, the per-person cost is competitive with economy airline tickets especially for flexible travel dates.",
          "Business Travellers' Favourite Route: Saudi Aramco executives, SABIC engineers, and Eastern Province government officials frequently use our Dammam–Riyadh taxi for overnight and day-trip corporate travel. Wi-Fi, charging ports, and bottled water are standard on all vehicles. Book 24 hours ahead for guaranteed availability; same-day bookings accepted subject to availability."
        ],
        ar: [
          "مسار تاكسي من الدمام إلى الرياض أحد أكثر ممرات السفر بين المدن ارتياداً في المملكة العربية السعودية، إذ يربط عاصمة الطاقة في المنطقة الشرقية بالعاصمة السياسية والتجارية. تبلغ المسافة حوالي 400 كيلومتر عبر طريق E40 السريع وتستغرق من 3.5 إلى 4.5 ساعة في الظروف الاعتيادية.",
          "الأسعار: يبدأ سعرنا الثابت من الدمام إلى الرياض من 900 ريال سعودي لسيارة كامري العادية (1-4 ركاب). تبدأ سيارة SUV الفارهة من 1400 ريال. وتبدأ الفان العائلية للمجموعات الكبيرة من 1600 ريال. جميع الأسعار ثابتة — بدون رسوم إضافية.",
          "المسار: طريق E40 السريع بين الدمام والرياض طريق ثنائي حديث مُصان جيداً. يمر بمنطقتي أبقيق وحرض قبل الوصول إلى منطقة الرياض. يقوم سائقونا بتوقف استراحة واحد مجدول في محطة خدمة نظيفة في منتصف الطريق.",
          "لماذا تختار التاكسي الخاص بدلاً من الباص أو الطيران: التاكسي الخاص يوفر خدمة من الباب إلى الباب — بدون سيارة أجرة من محطة الباص، بدون طوابير المطار، بدون رسوم أمتعة إضافية.",
          "المسار المفضل لرجال الأعمال: كثيراً ما يستخدم مديرو أرامكو السعودية ومهندسو سابك ومسؤولو المنطقة الشرقية تاكسي الدمام-الرياض للسفر المؤسسي. تتوفر خدمة Wi-Fi ومنافذ الشحن والمياه المعبأة على جميع السيارات. احجز قبل 24 ساعة لضمان التوفر."
        ]
      }
    },
    {
      id: 17,
      title: {
        en: "King Fahd International Airport (DMM): Complete Passenger Guide 2026",
        ar: "مطار الملك فهد الدولي (DMM): دليل المسافر الشامل 2026",
      },
      date: "2026-07-09",
      category: { en: "Airport Guides", ar: "أدلة المطارات" },
      excerpt: {
        en: "Everything passengers need to know about King Fahd International Airport — terminals, ground transportation, lounges, and tips for a smooth trip.",
        ar: "كل ما يحتاجه المسافرون لمعرفته عن مطار الملك فهد الدولي — الصالات والمواصلات الأرضية والصالات المميزة ونصائح للرحلة السلسة.",
      },
      content: {
        en: [
          "King Fahd International Airport (IATA: DMM, ICAO: OEDF) is the primary airport for Dammam, Al Khobar, Dhahran, and the entire Eastern Province of Saudi Arabia. At 780 square kilometres, it holds the record as the world's largest airport by land area — larger than Bahrain island itself. Understanding its layout and services is key to a stress-free journey.",
          "Terminal Overview: The airport has two main terminals — the International Terminal and the Domestic Terminal — connected by a free internal shuttle bus. International arrivals are processed in Hall B (right side as you exit customs). The arrivals hall has money exchange counters, a pharmacy, and convenience stores. Our drivers wait just beyond the customs exit with name boards.",
          "Airlines & Destinations: DMM is served by over 25 airlines including Saudia, flynas, flyadeal, Qatar Airways, Emirates, Etihad, Turkish Airlines, Lufthansa, British Airways, and Gulf Air. International destinations include Dubai, Doha, Cairo, London, Frankfurt, Istanbul, Kuala Lumpur, Manila, and Colombo.",
          "Ground Transportation Options: (1) Dammam Airport Taxi (us) — private, fixed-rate, pre-booked. (2) Ride-hailing apps (Uber, Careem) — variable pricing, no meet & greet. (3) Airport buses — cheap but slow, limited destinations. (4) Rental cars — available from Hertz, Budget, Enterprise. For corporate travellers and families, private transfer offers the best combination of comfort, reliability, and fixed cost.",
          "Practical Tips: The airport is 35 km from Dammam city centre and 25 km from Al Khobar. Journey times vary significantly — allow 45 minutes to Khobar and 30 minutes to Dammam in normal traffic. Prayer rooms are located on each floor. Free Wi-Fi is available throughout the terminal. Smoking is prohibited inside all buildings. Currency exchange rates at the airport are generally 2–5% below mid-market — change money in the city if possible."
        ],
        ar: [
          "مطار الملك فهد الدولي (IATA: DMM, ICAO: OEDF) هو المطار الرئيسي للدمام والخبر والظهران وكامل المنطقة الشرقية. بمساحة 780 كيلومتراً مربعاً، يحتل المركز الأول عالمياً كأكبر مطار من حيث المساحة البرية.",
          "نظرة عامة على الصالات: يضم المطار صالتين رئيسيتين — صالة الرحلات الدولية وصالة الرحلات الداخلية — تربطهما حافلة مكوك داخلية مجانية. تُعالَج وصولات القادمين دولياً في القاعة B. تضم قاعة الوصول منافذ لصرف العملات وصيدلية ومتاجر متنوعة.",
          "شركات الطيران والوجهات: يخدم المطار أكثر من 25 شركة طيران تشمل السعودية وفلاي ناس وفلاي أديل وطيران قطر والإمارات والاتحاد والتركية ولوفتهانزا والخليج.",
          "خيارات المواصلات الأرضية: (1) تاكسي مطار الدمام (نحن) — خاص، بسعر ثابت، محجوز مسبقاً. (2) تطبيقات طلب السيارات (أوبر، كريم) — أسعار متغيرة، بدون استقبال. (3) حافلات المطار — اقتصادية لكن بطيئة. (4) سيارات الإيجار. للمسافرين التجاريين والعائلات، التوصيل الخاص يقدم أفضل مزيج من الراحة والموثوقية والسعر الثابت.",
          "نصائح عملية: المطار يبعد 35 كم عن مركز مدينة الدمام و25 كم عن الخبر. خصص 45 دقيقة للخبر و30 دقيقة للدمام في ظروف المرور الاعتيادية. توجد غرف صلاة في كل طابق. Wi-Fi مجاني في جميع أنحاء المبنى."
        ]
      }
    },
    {
      id: 18,
      title: {
        en: "Corporate Taxi Service Dammam: Why Saudi Companies Choose Private Transfers",
        ar: "خدمة التاكسي للشركات في الدمام: لماذا تختار الشركات السعودية التوصيل الخاص",
      },
      date: "2026-07-10",
      category: { en: "Corporate Travel", ar: "سفر الأعمال" },
      excerpt: {
        en: "From Aramco contractors to SABIC delegations — discover why Dammam's biggest companies rely on private chauffeur services for executive transport.",
        ar: "من مقاولي أرامكو إلى وفود سابك — اكتشف لماذا تعتمد كبرى شركات الدمام على خدمات السائق الخاص لنقل مديريها التنفيذيين.",
      },
      content: {
        en: [
          "The Eastern Province is the energy capital of Saudi Arabia and one of the most corporate-intensive business environments in the Middle East. With Saudi Aramco's global headquarters in Dhahran, SABIC operations throughout Jubail Industrial City, RCJY infrastructure projects, and dozens of multinational contractors, the demand for reliable executive ground transportation is enormous.",
          "Duty of Care: Companies operating in Saudi Arabia have a legal and ethical duty of care obligation for employee travel. A verified, licensed private taxi service with GPS tracking, documented drivers, and commercial insurance satisfies these requirements in a way that ride-hailing apps cannot. Our vehicles are registered commercial transport, and all drivers hold valid SAPTA (Saudi Authority for Public Transport) licences.",
          "VAT-Compliant Monthly Invoicing: For corporate accounts, we issue consolidated monthly VAT invoices that comply with ZATCA (Zakat, Tax and Customs Authority) requirements. This simplifies expense reporting for finance departments and eliminates the need for employees to submit individual receipts for ride-hailing trips.",
          "Services We Provide for Corporate Clients: Executive airport transfers (DMM) for visiting delegations. Daily driver service for senior staff without company cars. Jubail Industrial City facility visits. Multi-city roadshows (Dammam + Khobar + Dhahran in a single day). Group transfers from airports to compound accommodation. Event shuttle services for corporate conferences and exhibitions.",
          "How to Set Up a Corporate Account: Setting up a corporate account takes less than 48 hours. We require a company CR number, billing contact, and estimated monthly volume. Rates are negotiated based on volume. Payment is net-30 monthly invoice. Contact us on WhatsApp or email to start the process — most accounts are active within two business days."
        ],
        ar: [
          "المنطقة الشرقية هي عاصمة الطاقة في المملكة العربية السعودية وواحدة من أكثر بيئات الأعمال المؤسسية كثافة في الشرق الأوسط. مع وجود المقر العالمي لأرامكو السعودية في الظهران وعمليات سابك في جبيل ومشاريع البنية التحتية لـRCJY، يكون الطلب على النقل الأرضي التنفيذي الموثوق هائلاً.",
          "واجب الرعاية: تمتلك الشركات العاملة في المملكة التزاماً قانونياً وأخلاقياً بواجب الرعاية تجاه سفر موظفيها. خدمة التاكسي الخاص المرخصة مع تتبع GPS وسائقين موثقين وتأمين تجاري تلبي هذه المتطلبات.",
          "الفواتير الشهرية المتوافقة مع ضريبة القيمة المضافة: نُصدر للحسابات المؤسسية فواتير ضريبية شهرية مجمعة متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك. هذا يبسط إعداد تقارير المصروفات للأقسام المالية.",
          "الخدمات التي نقدمها للعملاء المؤسسيين: توصيلات مطار تنفيذية للوفود الزائرة. خدمة سائق يومية للموظفين من الصف التنفيذي. زيارات مرافق مدينة جبيل الصناعية. جولات متعددة المدن في يوم واحد. تنقلات جماعية من المطارات إلى مجمعات الإقامة.",
          "كيفية إنشاء حساب مؤسسي: استحداث حساب مؤسسي لا يستغرق سوى 48 ساعة. نحتاج إلى رقم السجل التجاري للشركة وجهة الاتصال للفوترة وحجم المعاملات الشهرية المقدر. تواصل معنا عبر واتساب أو البريد الإلكتروني لبدء الإجراءات."
        ]
      }
    },
    {
      id: 19,
      title: {
        en: "GCC Border Crossing by Taxi: Saudi Arabia to Bahrain, Kuwait & UAE",
        ar: "عبور حدود دول الخليج بالتاكسي: من السعودية إلى البحرين والكويت والإمارات",
      },
      date: "2026-07-11",
      category: { en: "GCC Travel Guides", ar: "أدلة سفر الخليج" },
      excerpt: {
        en: "Everything you need to know about crossing GCC land borders by private taxi from Dammam — documents, fees, crossings, and travel times.",
        ar: "كل ما تحتاج معرفته عن عبور الحدود البرية لدول الخليج بالتاكسي الخاص من الدمام — الوثائق والرسوم ونقاط العبور وأوقات السفر.",
      },
      content: {
        en: [
          "One of Dammam Airport Taxi's key competitive advantages is our cross-border licensing. Most local taxis in the Eastern Province cannot legally cross into Bahrain, Kuwait, or the UAE — our drivers hold the necessary Saudi Authority for Public Transport commercial cross-border permits for all active GCC land border crossings.",
          "Saudi Arabia to Bahrain (King Fahd Causeway): Distance: 85 km. Travel time: 1.5–2 hours. Crossing: King Fahd Causeway (Khobar side). Required documents: GCC nationals — national ID. Non-GCC — Saudi exit/re-entry visa + Bahrain visa (available online). Fare: from 350 SAR. Toll included.",
          "Saudi Arabia to Kuwait (Khafji–Nuwaiseeb Border): Distance: 420 km from Dammam. Travel time: 4–4.5 hours driving + border time (30–90 min). Crossing: Khafji on the Saudi side, Nuwaiseeb on the Kuwaiti side. Required documents: Same as Bahrain plus Kuwait entry requirements. Fare: from 1,500 SAR. This is a licensed commercial route — most private taxis cannot legally make this crossing.",
          "Saudi Arabia to UAE (Al Batha or Ghuwaifat Border): Distance: 950 km to Dubai. Travel time: 9–10 hours. Crossing: Al Batha border (via Qatar if crossing through) or Ghuwaifat (direct). Fare: from 3,500 SAR to Dubai. Multi-country crossings (Saudi → Qatar → UAE) require advance documentation — we advise on requirements when you book.",
          "General Advice for All GCC Cross-Border Trips: Book at least 48 hours in advance for border crossings. Carry original passport — no photocopies. Saudi residents should verify exit/re-entry visa validity. We advise on current border wait times when you book. Our 24/7 WhatsApp team is available throughout your journey."
        ],
        ar: [
          "إحدى أبرز مزايا تاكسي مطار الدمام التنافسية هي ترخيص عبور الحدود. معظم سيارات الأجرة المحلية في المنطقة الشرقية لا تستطيع قانونياً الدخول إلى البحرين أو الكويت أو الإمارات — بينما يمتلك سائقونا التصاريح التجارية اللازمة لعبور جميع المعابر البرية الخليجية.",
          "من السعودية إلى البحرين (جسر الملك فهد): المسافة: 85 كم. وقت السفر: 1.5-2 ساعة. المعبر: جسر الملك فهد (الجانب الخبري). الوثائق المطلوبة: مواطنو الخليج — بطاقة الهوية الوطنية. غير مواطني الخليج — تأشيرة خروج وعودة سعودية + تأشيرة البحرين. السعر: من 350 ريالاً. يشمل رسوم العبور.",
          "من السعودية إلى الكويت (حدود خفجي–نويصيب): المسافة: 420 كم من الدمام. وقت السفر: 4-4.5 ساعات قيادة + وقت الحدود. السعر: من 1500 ريال. هذا مسار تجاري مرخص — معظم سيارات الأجرة الخاصة لا تستطيع قانونياً قطع هذا المعبر.",
          "من السعودية إلى الإمارات (حدود البطحاء أو الغويفات): المسافة: 950 كم إلى دبي. وقت السفر: 9-10 ساعات. السعر: من 3500 ريال إلى دبي.",
          "نصائح عامة لجميع رحلات عبور الحدود الخليجية: احجز قبل 48 ساعة على الأقل. احمل جواز سفرك الأصلي. يُرجى التحقق من صلاحية تأشيرة الخروج والعودة للمقيمين في السعودية. فريق واتساب المتاح على مدار الساعة جاهز طوال رحلتك."
        ]
      }
    },
    {
      id: 20,
      title: {
        en: "Taxi from Dammam Airport at 4AM: Your Guide to Night Transfers",
        ar: "تاكسي من مطار الدمام في الساعة 4 صباحاً: دليلك لرحلات الليل",
      },
      date: "2026-07-12",
      category: { en: "Airport Guides", ar: "أدلة المطارات" },
      excerpt: {
        en: "Early morning flights and late-night arrivals at DMM are common. Here's how to arrange a reliable 4AM taxi from Dammam Airport.",
        ar: "الرحلات الصباحية الباكرة والوصول في وقت متأخر من الليل في مطار الدمام شائعة. إليك كيفية ترتيب تاكسي موثوق في الساعة 4 صباحاً.",
      },
      content: {
        en: [
          "A significant proportion of flights connecting Dammam to international hubs depart between 2am and 6am, and international arrivals from Europe, Asia, and the Americas frequently land between midnight and 5am. If you have an early morning departure or a late-night arrival, here's exactly what to do.",
          "Pre-Booking Is Essential at Night: At 3am or 4am, ride-hailing apps have limited availability in the Eastern Province and surge pricing can be extreme. Unregulated street taxis at the airport terminal have no accountability, no tracking, and negotiated fares. Pre-booking a private taxi guarantees: a confirmed driver waiting at your door or in the arrivals hall, a fixed fare agreed before travel, and our dispatch team monitoring the journey.",
          "Early Morning Departures (4am–7am): We recommend booking at least 12 hours in advance for early morning pickups. Share your flight number when booking — we calculate the pickup time to arrive 3 hours before your departure. Night pickups carry no additional surcharge. We send a WhatsApp reminder the night before with your driver's name, vehicle, and plate number.",
          "Late Night Arrivals (Midnight–5am): Our flight tracking system means your driver's wait time begins from your actual landing, not your scheduled arrival. You never pay extra if your flight is delayed. For solo travellers and women travelling alone, we send your driver's name, photo, and direct mobile number 2 hours before landing. Driver waits in the arrivals hall with your name board.",
          "Practical Checklist for Night Transfers: (1) Book in advance — same-day night bookings are subject to availability. (2) Save our WhatsApp number: +966 56 948 7569. (3) Send your flight number at time of booking. (4) Confirm your booking 2 hours before — we'll send driver details. (5) If you can't locate your driver, call them directly — you have their number. Our 24/7 operations team is always reachable."
        ],
        ar: [
          "تنطلق نسبة كبيرة من الرحلات التي تربط الدمام بالمحاور الدولية بين الساعة 2 و6 صباحاً، وكثيراً ما تهبط الرحلات الدولية القادمة من أوروبا وآسيا والأمريكتين بين منتصف الليل والساعة 5 صباحاً.",
          "الحجز المسبق ضروري في الليل: في الساعة 3 أو 4 صباحاً، تقل توافرية تطبيقات طلب السيارات في المنطقة الشرقية وقد ترتفع أسعارها بشكل حاد. الحجز المسبق يضمن سائقاً مؤكداً في انتظارك، وسعراً ثابتاً متفقاً عليه قبل السفر، وفريق عمليات يراقب الرحلة.",
          "المغادرات الصباحية المبكرة (4-7 صباحاً): ننصح بالحجز قبل 12 ساعة على الأقل. شارك رقم رحلتك عند الحجز — نحسب وقت الاستلام لكي تصل قبل 3 ساعات من مغادرتك. التوصيلات الليلية لا تحمل أي رسوم إضافية.",
          "الوصول المتأخر ليلاً (منتصف الليل-5 صباحاً): نظام تتبع الرحلات لدينا يعني أن وقت انتظار سائقك يبدأ من هبوطك الفعلي، وليس من موعد وصولك المجدول. للمسافرين المنفردين والسيدات، نرسل اسم سائقك وصورته ورقم هاتفه المباشر قبل ساعتين من الهبوط.",
          "قائمة التحقق العملية للتوصيلات الليلية: (1) احجز مسبقاً. (2) احفظ رقم واتساب الخاص بنا. (3) أرسل رقم رحلتك عند الحجز. (4) أكد حجزك قبل ساعتين. (5) إذا لم تجد سائقك، اتصل به مباشرة. فريق العمليات المتاح 24 ساعة في خدمتك دائماً."
        ]
      }
    }
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Header */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <span className="badge-gold">BLOG</span>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Travel News & Guides" : "أخبار وإرشادات السفر"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en"
              ? "Expert advice, guides, and tips for regional travel across Saudi Arabia and the GCC."
              : "نصائح وإرشادات وخبراء سفر للمنطقة الشرقية والمملكة العربية السعودية والخليج."}
          </p>
        </div>
      </section>

      {/* Blog Grid Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          <div style={styles.blogGrid}>
            {posts.map((post) => {
              const title = locale === "en" ? post.title.en : post.title.ar;
              const cat = locale === "en" ? post.category.en : post.category.ar;
              const excerpt = locale === "en" ? post.excerpt.en : post.excerpt.ar;

              return (
                <article key={post.id} className="glass-card" style={styles.blogCard}>
                  <div style={styles.cardHeader}>
                    <span style={styles.cardCategory}>{cat}</span>
                    <time dateTime={post.date} style={styles.cardDate}>{post.date}</time>
                  </div>
                  <h2 style={styles.cardTitle}>{title}</h2>
                  <p style={styles.cardExcerpt}>{excerpt}</p>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="btn btn-secondary"
                    style={styles.readBtn}
                  >
                    {locale === "en" ? "Read Full Article" : "اقرأ المقال كاملاً"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div style={styles.modalOverlay} role="dialog" aria-modal="true" aria-label={locale === "en" ? selectedPost.title.en : selectedPost.title.ar}>
          <div className="glass-card" style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <span style={styles.cardCategory}>
                {locale === "en" ? selectedPost.category.en : selectedPost.category.ar}
              </span>
              <button onClick={() => setSelectedPost(null)} style={styles.closeBtn} aria-label="Close article">×</button>
            </div>

            <h2 style={styles.modalTitle}>
              {locale === "en" ? selectedPost.title.en : selectedPost.title.ar}
            </h2>
            <time dateTime={selectedPost.date} style={styles.modalDate}>{selectedPost.date}</time>

            <div style={styles.modalBody}>
              {(locale === "en" ? selectedPost.content.en : selectedPost.content.ar).map((pText, pIdx) => (
                <p key={pIdx} style={styles.modalParagraph}>{pText}</p>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <button onClick={() => setSelectedPost(null)} className="btn btn-dark">
                {locale === "en" ? "Close Article" : "إغلاق المقال"}
              </button>
            </div>
          </div>
        </div>
      )}

      <StickyCTA />
      <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url('/hero-bg.jpg') center/cover no-repeat",
    padding: "5rem 0",
    borderBottom: "1px solid var(--border-color)",
    textAlign: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  heroTitle: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
    color: "#000000",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "#000000",
    maxWidth: "600px",
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  blogCard: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "1rem",
    fontSize: "0.8rem",
  },
  cardCategory: {
    color: "#0C58D1",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  cardDate: {
    color: "var(--text-muted)",
  },
  cardTitle: {
    fontSize: "1.2rem",
    color: "var(--text-primary)",
    marginBottom: "1rem",
    lineHeight: "1.4",
  },
  cardExcerpt: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    lineHeight: "1.5",
    marginBottom: "2rem",
  },
  readBtn: {
    width: "100%",
    marginTop: "auto",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "1.5rem",
  },
  modalContent: {
    maxWidth: "700px",
    width: "100%",
    maxHeight: "85vh",
    overflowY: "auto",
    padding: "2.5rem",
    border: "1px solid #0C58D1",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "var(--text-secondary)",
    fontSize: "2rem",
    cursor: "pointer",
    lineHeight: "1",
    transition: "color var(--transition-fast)",
  },
  modalTitle: {
    fontSize: "1.6rem",
    color: "var(--text-primary)",
    lineHeight: "1.3",
    marginBottom: "0.5rem",
  },
  modalDate: {
    display: "block",
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    marginBottom: "2rem",
  },
  modalBody: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    borderTop: "1px solid var(--border-color)",
    borderBottom: "1px solid var(--border-color)",
    padding: "1.5rem 0",
  },
  modalParagraph: {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    color: "var(--text-secondary)",
  },
};

