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
    color: "#ffffff",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "#ffffff",
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
    color: "var(--accent-gold)",
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
    border: "1px solid var(--accent-gold)",
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

