export interface RouteFaq {
  q: string;
  a: string;
}

export interface RouteDetail {
  slug: string;
  name: { en: string; ar: string };
  metaTitle: { en: string; ar: string };
  metaDescription: { en: string; ar: string };
  distance: { en: string; ar: string };
  duration: { en: string; ar: string };
  basePrice: number; // For Camry
  pricing: {
    sedan: number;
    suv: number;
    van: number;
    luxury: number;
  };
  mapUrl: string;
  intro: { en: string; ar: string };
  contentSections: {
    title: { en: string; ar: string };
    body: { en: string[]; ar: string[] };
  }[];
  faqs: { en: RouteFaq[]; ar: RouteFaq[] };
}

export const routesData: RouteDetail[] = [
  {
    slug: "dammam-to-bahrain",
    name: { en: "Dammam to Bahrain Taxi", ar: "تاكسي من الدمام إلى البحرين" },
    metaTitle: {
      en: "Dammam to Bahrain Taxi — Fixed 350 SAR | King Fahd Causeway Private Transfer",
      ar: "تاكسي من الدمام إلى البحرين — 350 ريال ثابت | توصيل خاص عبر جسر الملك فهد"
    },
    metaDescription: {
      en: "Book private Dammam to Bahrain taxi from 350 SAR. King Fahd Causeway transfer — causeway tolls included, 60-min free wait, flight tracking. WhatsApp booking 24/7. Sedan, SUV & van available.",
      ar: "احجز تاكسي خاص من الدمام إلى البحرين من 350 ريال. توصيل عبر جسر الملك فهد — رسوم الجسر مشمولة، انتظار 60 دقيقة مجاناً، تتبع الرحلة. حجز واتساب 24/7."
    },
    distance: { en: "85 km", ar: "٨٥ كم" },
    duration: { en: "1.5 – 2 Hours", ar: "ساعة ونصف إلى ساعتين" },
    basePrice: 350,
    pricing: { sedan: 350, suv: 600, van: 750, luxury: 1500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458022.0298075775!2d49.9868779!3d26.2575293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49faf2ef0b77b1%3A0xe54dbe5c2763f0bb!2sKing%20Fahd%20Causeway!5e0!3m2!1sen!2ssa!4v1716500000000!5m2!1sen!2ssa",
    intro: {
      en: "Book a private, fixed-rate taxi from Dammam to Bahrain starting from 350 SAR. Our Dammam to Bahrain taxi service covers the full 85 km journey via the King Fahd Causeway — door-to-door, with all causeway tolls included, free 60-minute waiting, and 24/7 WhatsApp booking.",
      ar: "احجز تاكسي خاصاً بسعر ثابت من الدمام إلى البحرين يبدأ من 350 ريال. تغطي خدمتنا رحلة 85 كيلومتراً كاملة عبر جسر الملك فهد — من الباب إلى الباب، مع شمول رسوم الجسر وانتظار مجاني 60 دقيقة وحجز واتساب على مدار الساعة."
    },
    contentSections: [
      {
        title: { en: "Dammam to Bahrain Taxi Distance, Time & Fixed Fare", ar: "مسافة ووقت وسعر تاكسي الدمام البحرين" },
        body: {
          en: [
            "The Dammam to Bahrain taxi route covers approximately 85 kilometers from the Eastern Province to Manama, the capital of Bahrain. The journey crosses the King Fahd Causeway — the iconic 25-kilometer bridge connecting Saudi Arabia and Bahrain — and takes between 1.5 and 2 hours under normal traffic conditions.",
            "Our fixed taxi fare from Dammam to Bahrain starts from 350 SAR for a standard Camry sedan (up to 4 passengers). A GMC Yukon SUV for families or groups of up to 6 costs 600 SAR. A Toyota Staria family van for up to 8 passengers and heavy luggage is 750 SAR. All fares include King Fahd Causeway tolls — there are no hidden fees or surcharges.",
            "Compared to driving yourself, booking a private taxi eliminates the need for temporary vehicle insurance, export permits, and the stress of navigating border procedures. Your driver handles everything while you relax in the air-conditioned vehicle."
          ],
          ar: [
            "تمتد رحلة تاكسي من الدمام إلى البحرين حوالي 85 كيلومتراً من المنطقة الشرقية إلى المنامة عاصمة مملكة البحرين. تعبر الرحلة جسر الملك فهد الشهير — الجسر الأيقوني البالغ طوله 25 كيلومتراً الذي يربط المملكة العربية السعودية بالبحرين — وتستغرق ما بين ساعة ونصف وساعتين في الظروف الاعتيادية.",
            "يبدأ سعر التاكسي الثابت من الدمام إلى البحرين من 350 ريالاً لسيارة كامري العادية (حتى 4 ركاب). يمتد خيار سيارة يوكن للعائلات والمجموعات حتى 6 ركاب بسعر 600 ريال. الفان العائلي ستاريا لـ8 ركاب والأمتعة الكثيرة بـ750 ريال. تشمل جميع الأسعار رسوم جسر الملك فهد — لا توجد رسوم خفية أو إضافية.",
            "مقارنةً بقيادة سيارتك الخاصة، يلغي حجز التاكسي الخاص الحاجة إلى تأمين مؤقت للسيارة وتصاريح تصدير وضغط التعامل مع إجراءات الحدود بنفسك. سائقك يتولى كل شيء بينما تسترخي في السيارة المكيفة."
          ]
        }
      },
      {
        title: { en: "King Fahd Causeway Border Crossing — Step by Step", ar: "عبور جسر الملك فهد خطوة بخطوة" },
        body: {
          en: [
            "The King Fahd Causeway has two border checkpoints: Saudi departure control on the Saudi side and Bahraini entry control on the Bahrain side. The process typically takes 15–40 minutes under normal conditions. On Fridays and public holidays, allow an extra 30–60 minutes.",
            "At the Saudi checkpoint, officers check passports, verify Saudi exit permissions for expatriates, and inspect vehicle documents. Our driver presents all required vehicle papers — commercial registration, insurance, and border permit. You simply show your passport or GCC national ID.",
            "At the Bahraini checkpoint, officers verify entry eligibility. GCC nationals enter on national ID. Expatriates from most countries can obtain a Bahrain eVisa online before travel, or get a visa on arrival (fees apply). Our drivers are experienced with fast-track commercial lanes that reduce waiting time significantly."
          ],
          ar: [
            "يضم جسر الملك فهد نقطتي تفتيش حدوديتين: مراقبة المغادرة السعودية من الجانب السعودي، ومراقبة الدخول البحرينية من الجانب البحريني. تستغرق العملية عادةً 15-40 دقيقة في الظروف الاعتيادية. يوم الجمعة والأيام العامة، خصص 30-60 دقيقة إضافية.",
            "في نقطة التفتيش السعودية، يتحقق الضباط من جوازات السفر وتصاريح الخروج للمقيمين ووثائق المركبة. يُقدم سائقنا جميع الأوراق المطلوبة. أنت فقط تُبرز جواز سفرك أو بطاقة الهوية الوطنية الخليجية.",
            "في نقطة التفتيش البحرينية، يتحقق الضباط من أهلية الدخول. مواطنو الخليج يدخلون بالهوية الوطنية. يمكن لمعظم الجنسيات الحصول على تأشيرة بحرينية إلكترونية قبل السفر أو تأشيرة عند الوصول. سائقونا خبراء في المسارات التجارية السريعة."
          ]
        }
      },
      {
        title: { en: "Required Documents for Dammam to Bahrain Taxi", ar: "الوثائق المطلوبة لرحلة تاكسي الدمام البحرين" },
        body: {
          en: [
            "For Saudi citizens: Valid Saudi passport or GCC national ID card. No visa required for Bahrain.",
            "For GCC nationals (UAE, Kuwait, Qatar, Oman, Bahrain residents): Valid national ID or passport. GCC citizens enjoy visa-free entry to Bahrain.",
            "For Saudi residents (Iqama holders): Valid passport (minimum 6 months validity), valid Saudi exit-re-entry visa (or final exit visa on last trip), and Bahrain eVisa obtained online through the Bahrain government portal before travel. Some nationalities are eligible for visa on arrival — check the Bahrain government website for your nationality. Our team advises on requirements when you book."
          ],
          ar: [
            "للمواطنين السعوديين: جواز سفر سعودي ساري أو بطاقة الهوية الوطنية. لا تأشيرة مطلوبة للبحرين.",
            "لمواطني دول الخليج (مقيمو الإمارات والكويت وقطر وعُمان والبحرين): بطاقة هوية وطنية سارية أو جواز سفر. مواطنو الخليج يدخلون البحرين بدون تأشيرة.",
            "لحاملي الإقامة السعودية: جواز سفر ساري (6 أشهر كحد أدنى)، تأشيرة خروج وعودة سعودية سارية، وتأشيرة بحرينية إلكترونية متحصل عليها مسبقاً عبر البوابة الرسمية لحكومة البحرين. بعض الجنسيات مؤهلة للحصول على التأشيرة عند الوصول. فريقنا يقدم الإرشاد عند الحجز."
          ]
        }
      },
      {
        title: { en: "Best Times to Cross King Fahd Causeway", ar: "أفضل أوقات عبور جسر الملك فهد" },
        body: {
          en: [
            "The King Fahd Causeway is busiest on Thursday evenings and Friday mornings, when Eastern Province residents travel to Bahrain for the weekend. The return flow peaks on Saturday evenings and Sunday mornings. During Eid Al-Fitr and Eid Al-Adha, wait times can exceed 3–4 hours at peak moments.",
            "The fastest crossing times are Sunday to Wednesday mornings (8am–12pm) and any night crossing between 11pm and 5am. For business travellers and those with flight connections, we recommend early morning or late-night travel.",
            "Our drivers track causeway conditions in real-time and choose the fastest available lanes — commercial vehicle lanes are often significantly faster than tourist lanes. We will advise on expected crossing times when you book."
          ],
          ar: [
            "يكون جسر الملك فهد أكثر ازدحاماً مساء الخميس وصباح الجمعة، حين يسافر سكان المنطقة الشرقية إلى البحرين في عطلة نهاية الأسبوع. يبلغ حركة العودة ذروتها مساء السبت وصباح الأحد. خلال عيد الفطر وعيد الأضحى، قد تتجاوز أوقات الانتظار 3-4 ساعات.",
            "أسرع أوقات العبور هي من الأحد إلى الأربعاء صباحاً (8ص-12ظ) وأي عبور ليلي بين الساعة 11 مساءً و5 صباحاً. نوصي المسافرين التجاريين وأصحاب الارتباطات بالسفر مبكراً أو في الليل.",
            "يتابع سائقونا أحوال الجسر في الوقت الفعلي ويختارون أسرع المسارات المتاحة. نقدم تقديراً لأوقات العبور المتوقعة عند الحجز."
          ]
        }
      },
      {
        title: { en: "DMM Airport to Bahrain — Direct Transfer", ar: "من مطار الدمام إلى البحرين — توصيل مباشر" },
        body: {
          en: [
            "Many international travellers land at King Fahd International Airport (DMM) and need to reach Bahrain the same day. Our direct airport-to-Bahrain taxi service includes free flight tracking and a name-board meet & greet in the arrivals hall. We monitor your flight and adjust the pickup time automatically if your flight is delayed.",
            "The journey from DMM Airport to central Manama takes approximately 1.5 to 2 hours depending on causeway traffic. We cover all destinations in Bahrain — Manama city hotels, Bahrain International Airport (BAH), Financial Harbour, Amwaj Islands, Riffa, and Muharraq.",
            "For corporate travellers connecting through DMM, we can arrange direct airport-to-Bahrain office transfers with 24/7 availability and VAT-compliant invoicing for corporate accounts."
          ],
          ar: [
            "كثير من المسافرين الدوليين يهبطون في مطار الملك فهد الدولي ويحتاجون للوصول إلى البحرين في نفس اليوم. تشمل خدمة التوصيل المباشر من المطار إلى البحرين تتبع الرحلة مجاناً واستقبال ببطاقة الاسم في صالة الوصول.",
            "تستغرق الرحلة من مطار الدمام إلى وسط المنامة ما بين ساعة ونصف وساعتين. نغطي جميع وجهات البحرين — فنادق مدينة المنامة، مطار البحرين الدولي، الفاتح، جزر أمواج، الرفاع، والمحرق.",
            "للمسافرين التجاريين العابرين عبر مطار الدمام، يمكننا ترتيب توصيلات مباشرة من المطار إلى مكاتب البحرين مع توفر 24/7 وفواتير ضريبية متوافقة للحسابات المؤسسية."
          ]
        }
      },
      {
        title: { en: "Why Choose Private Taxi Over Driving or Public Transport", ar: "لماذا تختار التاكسي الخاص بدلاً من القيادة أو المواصلات العامة" },
        body: {
          en: [
            "Many Eastern Province residents consider driving their own car to Bahrain, but this requires purchasing temporary vehicle insurance at the border (additional cost), obtaining a vehicle export permit if the car has outstanding traffic fines, and navigating customs procedures yourself while managing your luggage and passengers.",
            "Public buses (SAPTCO) run between Dammam and Bahrain but require passengers to manage their luggage through customs independently, and journey times are significantly longer due to multiple stops. Ride-hailing apps (Uber, Careem) do not operate cross-border services — Saudi-registered Uber drivers cannot enter Bahrain.",
            "A private taxi gives you door-to-door service, a fixed price confirmed before you travel, a professional driver handling all border paperwork, and the flexibility to travel at any hour. For families, business travellers, and anyone with luggage, it is the most practical and cost-effective option."
          ],
          ar: [
            "يفكر كثير من سكان المنطقة الشرقية في قيادة سياراتهم إلى البحرين، لكن هذا يتطلب شراء تأمين مؤقت للسيارة عند الحدود، والحصول على تصريح تصدير المركبة إذا كانت هناك مخالفات مرورية، والتعامل مع إجراءات الجمارك بنفسك.",
            "الحافلات العامة تعمل بين الدمام والبحرين لكنها تتطلب من الركاب إدارة أمتعتهم عبر الجمارك بشكل مستقل، وتكون أوقات الرحلة أطول بسبب المحطات المتعددة. تطبيقات طلب السيارات لا تعمل عبر الحدود.",
            "التاكسي الخاص يوفر خدمة من الباب إلى الباب وسعراً ثابتاً مؤكداً قبل السفر وسائقاً محترفاً يتولى جميع إجراءات الحدود. للعائلات والمسافرين التجاريين وأصحاب الأمتعة، فهو الخيار الأكثر عملية وفعالية."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Bahrain?", a: "Our fixed taxi fare from Dammam to Bahrain starts from 350 SAR for a Camry sedan (1–4 passengers), 600 SAR for a GMC Yukon SUV (1–6 passengers), and 750 SAR for a family van (1–8 passengers). All fares include King Fahd Causeway tolls. No hidden fees." },
        { q: "How long does the Dammam to Bahrain taxi take?", a: "The journey takes 1.5 to 2 hours under normal traffic conditions. On Thursday evenings and Friday mornings, allow an extra 30–60 minutes for causeway traffic. Night crossings (11pm–5am) are typically the fastest." },
        { q: "What documents are required to cross to Bahrain?", a: "Saudi citizens: national ID or passport. GCC nationals: national ID or passport (visa-free). Expatriates: valid passport (6+ months), valid Saudi exit-re-entry visa, and Bahrain eVisa obtained online. Our team advises on requirements when you book." },
        { q: "Are causeway tolls included in the fare?", a: "Yes. The King Fahd Causeway toll is fully included in our quoted fare. There are no additional charges for tolls, border fees, or night travel." },
        { q: "Can you pick me up from Dammam Airport (DMM) and take me to Bahrain?", a: "Yes. We provide direct DMM Airport to Bahrain transfers. Your driver tracks your flight and meets you in the arrivals hall with a name board. Free 60-minute waiting from actual landing time." },
        { q: "Can you drop me off at Bahrain International Airport (BAH)?", a: "Yes. We cover all Bahrain destinations including Bahrain International Airport (BAH), Manama city, Financial Harbour, Amwaj Islands, Riffa, Muharraq, and all hotels and residential areas." },
        { q: "What happens if there is a long queue at the causeway?", a: "Our drivers use commercial vehicle lanes which are typically faster than tourist lanes. We monitor causeway conditions and advise on expected crossing times. No extra charges apply for longer border wait times." },
        { q: "Can I book a Dammam to Bahrain taxi for a same-day return trip?", a: "Yes. We can arrange round-trip bookings with flexible return timing. Your driver can wait for you in Bahrain for an hourly waiting fee, or you can book a separate return at your preferred time." },
        { q: "Do you offer Dammam to Bahrain taxi at night or early morning?", a: "Yes. We operate 24/7 including night crossings at 2am, 3am, 4am and early morning departures. Night crossings are often the fastest due to lower traffic volume." },
        { q: "Is Dammam to Bahrain taxi available during Eid and Saudi public holidays?", a: "Yes. We operate on all Saudi public holidays including Eid Al-Fitr and Eid Al-Adha. During peak holiday periods, causeway queues can be longer — we advise booking early morning or late-night slots." }
      ],
      ar: [
        { q: "كم سعر التاكسي من الدمام إلى البحرين؟", a: "يبدأ سعر التاكسي الثابت من 350 ريالاً لسيارة كامري (1-4 ركاب)، و600 ريال ليوكن SUV (1-6 ركاب)، و750 ريالاً للفان العائلي (1-8 ركاب). تشمل جميع الأسعار رسوم جسر الملك فهد. لا توجد رسوم خفية." },
        { q: "كم تستغرق رحلة التاكسي من الدمام إلى البحرين؟", a: "تستغرق الرحلة ساعة ونصف إلى ساعتين في الظروف الاعتيادية. مساء الخميس وصباح الجمعة، خصص 30-60 دقيقة إضافية. العبور الليلي (11م-5ص) عادةً الأسرع." },
        { q: "ما المستندات المطلوبة لعبور الحدود إلى البحرين؟", a: "المواطنون السعوديون: هوية وطنية أو جواز سفر. مواطنو الخليج: هوية وطنية أو جواز سفر (دخول مجاني). المقيمون: جواز سفر ساري 6 أشهر + تأشيرة خروج وعودة + تأشيرة بحرينية إلكترونية. فريقنا يقدم الإرشاد عند الحجز." },
        { q: "هل رسوم الجسر مشمولة في السعر؟", a: "نعم. رسوم جسر الملك فهد مشمولة بالكامل في السعر المقدم. لا توجد رسوم إضافية للعبور أو الحدود أو السفر الليلي." },
        { q: "هل يمكن الاستقبال من مطار الدمام والتوصيل إلى البحرين؟", a: "نعم. نوفر توصيلاً مباشراً من مطار الدمام إلى البحرين. يتابع السائق رحلتك ويستقبلك في صالة الوصول بلافتة باسمك. انتظار مجاني 60 دقيقة من وقت الهبوط الفعلي." },
        { q: "هل يمكن التوصيل إلى مطار البحرين الدولي؟", a: "نعم. نغطي جميع وجهات البحرين بما فيها مطار البحرين الدولي، المنامة، الفاتح، جزر أمواج، الرفاع، المحرق، وجميع الفنادق والمناطق السكنية." },
        { q: "ماذا يحدث إذا كان هناك طابور طويل عند الجسر؟", a: "يستخدم سائقونا المسارات التجارية الأسرع عادةً. لا توجد رسوم إضافية لأوقات الانتظار الطويلة عند الحدود." },
        { q: "هل يمكن حجز رحلة ذهاب وعودة في نفس اليوم؟", a: "نعم. يمكن ترتيب رحلات ذهاب وعودة مرنة. يمكن لسائقك الانتظار في البحرين برسوم انتظار بالساعة، أو حجز رحلة عودة منفصلة." },
        { q: "هل التاكسي متاح ليلاً وفي أوقات مبكرة؟", a: "نعم. نعمل على مدار الساعة 24/7 بما فيها العبور الليلي الساعة 2 و3 و4 صباحاً. العبور الليلي عادةً الأسرع." },
        { q: "هل الخدمة متاحة في العيد والإجازات الرسمية؟", a: "نعم. نعمل في جميع أيام الإجازات الرسمية السعودية. في أوقات الذروة، ننصح بحجز المواعيد الصباحية المبكرة أو الليلية." }
      ]
    }
  },
  {
    slug: "dammam-to-kuwait",
    name: { en: "Dammam to Kuwait Taxi", ar: "تاكسي من الدمام إلى الكويت" },
    metaTitle: { 
      en: "Dammam to Kuwait Taxi | Cross-Border Chauffeur Service", 
      ar: "تاكسي من الدمام إلى الكويت | توصيل دولي عبر الحدود" 
    },
    metaDescription: {
      en: "Hire a direct private taxi from Dammam to Kuwait City. Travel safely with GCC permits, comfortable SUVs, and professional cross-border drivers.",
      ar: "احجز تاكسي خاص مباشر من الدمام إلى مدينة الكويت. سافر بأمان مع سائقين ذوي خبرة وتراخيص عبور الحدود الخليجية وسيارات عائلية فاخرة."
    },
    distance: { en: "420 km", ar: "٤٢٠ كم" },
    duration: { en: "4 - 4.5 Hours", ar: "٤ إلى ٤.٥ ساعات" },
    basePrice: 1500,
    pricing: { sedan: 1500, suv: 2200, van: 2600, luxury: 4500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1777265.8117769915!2d46.7329598!3d29.0884949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea6aa5%3A0xf70026e1074e2d40!2sKuwait!5e0!3m2!1sen!2ssa!4v1716500000001!5m2!1sen!2ssa",
    intro: {
      en: "Travel from Dammam to Kuwait in full comfort and style. Our intercity taxi service handles long highway miles safely, ensuring you reach Kuwait City refreshed.",
      ar: "سافر من الدمام إلى الكويت براحة وأمان تامين. تغطي خدمة التاكسي الفاخرة بين المدن المسافات الطويلة بكفاءة عالية، مما يضمن وصولك إلى مدينة الكويت بنشاط وراحة."
    },
    contentSections: [
      {
        title: { en: "Long Distance Highway Travel Safety", ar: "أمان السفر لمسافات طويلة على الطرق السريعة" },
        body: {
          en: [
            "Our GCC long-distance vehicles are fitted with active safety features, cruise controls, and pre-departure inspections.",
            "Drivers are trained for highway safety, keeping speed limits and taking rest breaks if necessary for passenger comfort.",
            "Water, soft drinks, and onboard high-speed Wi-Fi are provided to keep you connected throughout the 400+ km drive."
          ],
          ar: [
            "سياراتنا المخصصة للمسافات الطويلة مجهزة بأنظمة أمان نشطة ومثبتات سرعة، وتخضع لفحص شامل قبل الانطلاق.",
            "سائقونا مدربون بكفاءة للالتزام بحدود السرعة وقواعد السلامة على الطرق السريعة، مع إمكانية التوقف للاستراحة حسب رغبة الركاب.",
            "نوفر مياه باردة ومرطبات وإنترنت لاسلكي عالي السرعة لإبقائك على اتصال طوال الرحلة الطويلة التي تزيد عن 400 كم."
          ]
        }
      },
      {
        title: { en: "Khafji Border Crossing Details", ar: "تفاصيل عبور منفذ الخفجي الحدودي" },
        body: {
          en: [
            "We pass through the Khafji border terminal, providing swift customs clearance for tourist and business travel.",
            "Make sure your passport is valid for at least 6 months and you check the Kuwait visa requirements according to your nationality.",
            "We coordinate border-to-border or direct address drops anywhere in Kuwait."
          ],
          ar: [
            "نعبر من خلال منفذ الخفجي الحدودي، مع توفير تيسير سريع لإجراءات الجوازات والجمارك للمسافرين لغرض السياحة أو العمل.",
            "يرجى التأكد من صلاحية جواز سفرك لمدة لا تقل عن 6 أشهر ومراجعة شروط تأشيرة دخول الكويت حسب جنسيتك.",
            "نحن ننسق التوصيل المباشر إلى أي عنوان أو فندق داخل دولة الكويت."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How long is the border clearance at Khafji?", a: "On normal days, border customs take 20 to 40 minutes. On GCC holidays, waiting times may extend." },
        { q: "Do you offer return taxi service from Kuwait to Dammam?", a: "Yes, we offer discounted round-trip bookings. Contact us on WhatsApp to lock in your return dates." }
      ],
      ar: [
        { q: "كم تستغرق إجراءات التخليص في منفذ الخفجي؟", a: "في الأيام العادية، تستغرق إجراءات الجوازات والجمارك بين 20 إلى 40 دقيقة. وفي الإجازات الرسمية قد يزداد وقت الانتظار." },
        { q: "هل توفرون خدمة تاكسي عكسية من الكويت إلى الدمام؟", a: "نعم، نقدم خصومات ممتازة لحجوزات الذهاب والعودة معاً. تواصل معنا على الواتساب لتأكيد مواعيد عودتك." }
      ]
    }
  },
  {
    slug: "dammam-to-uae",
    name: { en: "Dammam to UAE Taxi", ar: "تاكسي من الدمام إلى الإمارات" },
    metaTitle: { 
      en: "Dammam to UAE Taxi | Luxury Inter-GCC Transfers", 
      ar: "تاكسي من الدمام إلى الإمارات | توصيل فاخر بين دول الخليج" 
    },
    metaDescription: {
      en: "Direct taxi service from Dammam Airport to Abu Dhabi and Dubai. Luxury VIP GMC Yukon SUVs and professional chauffeurs for GCC travel.",
      ar: "خدمة تاكسي مميزة ومباشرة من مطار الدمام إلى أبوظبي ودبي. سيارات جي إم سي يوكن وسائقين محترفين للسفر البري الفاخر بين دول الخليج."
    },
    distance: { en: "950 km", ar: "٩٥٠ كم" },
    duration: { en: "9 - 10 Hours", ar: "٩ إلى ١٠ ساعات" },
    basePrice: 3500,
    pricing: { sedan: 3500, suv: 4800, van: 5500, luxury: 8500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744955.5135118742!2d50.8407886!3d23.4716766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1cd4e1f%3A0x2cb0507d89b301fb!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2ssa!4v1716500000002!5m2!1sen!2ssa",
    intro: {
      en: "Connect Dammam with Abu Dhabi, Dubai, or Sharjah via our elite chauffeured transfers. Avoid airport queues and flight restrictions with a private, luxury overland ride.",
      ar: "اربط الدمام بأبوظبي، دبي، أو الشارقة من خلال خدمات النقل الفاخرة التي نقدمها. تجنب قيود المطارات ومشاكل الوزن برحلة برية خاصة ومريحة بالكامل."
    },
    contentSections: [
      {
        title: { en: "Comfortable Overland Journey to UAE", ar: "رحلة برية مريحة وراقية إلى الإمارات" },
        body: {
          en: [
            "With a distance of nearly 950 km, we prioritize ultimate comfort. Our flagship VIP SUVs (GMC Yukon Denali) feature reclining leather seating and multi-zone climate control.",
            "We plan regular halts at hygienic highway service stations for dining and relaxation.",
            "Complimentary refreshments, snacks, and device-charging docks are provided for all passengers."
          ],
          ar: [
            "مع مسافة تقارب 950 كم، نضع راحتك القصوى في المقام الأول. سياراتنا الفاخرة (GMC Yukon Denali) تتميز بمقاعد جلدية مريحة ومكيف هواء متعدد المناطق.",
            "نحن نخطط للتوقف بانتظام في محطات خدمات نظيفة على الطريق السريع لتناول الطعام والراحة.",
            "نوفر مرطبات مجانية، تسالي، ومنافذ شحن الأجهزة الذكية لجميع الركاب لضمان رحلة ممتعة."
          ]
        }
      },
      {
        title: { en: "Border Crossings (Al Batha / Ghuwaifat)", ar: "عبور الحدود (منفذ البطحاء / الغويفات)" },
        body: {
          en: [
            "We cross through the Saudi Al Batha border checkpoint to the UAE Ghuwaifat border checkpoint.",
            "Our drivers hold valid cross-border permits and auto insurance for both KSA and UAE roads.",
            "Ensure all visa requirements for entering the UAE and re-entering Saudi Arabia are arranged prior to departure."
          ],
          ar: [
            "نعبر عبر منفذ البطحاء السعودي وصولاً إلى منفذ الغويفات الإماراتي الجمركي.",
            "سائقونا حاصلون على تصاريح عبور الحدود سارية المفعول وتأمين سيارات معتمد للطرق السعودية والإماراتية.",
            "يرجى التأكد من استخراج تأشيرة دخول دولة الإمارات وتأشيرة العودة للمملكة مسبقاً قبل بدء الرحلة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "Can we book a direct transfer from Dammam to Dubai?", a: "Yes, we provide door-to-door transportation from Dammam directly to any hotel or residence in Dubai or Abu Dhabi." },
        { q: "Is travel health insurance required for border crossing?", a: "Yes, you must hold valid health insurance that covers KSA and UAE territories during travel." }
      ],
      ar: [
        { q: "هل يمكننا حجز رحلة مباشرة من الدمام إلى دبي؟", a: "نعم، نقدم خدمة توصيل مباشرة من الباب إلى الباب من أي مكان في الدمام إلى أي فندق أو سكن في دبي أو أبوظبي." },
        { q: "هل يلزم تأمين صحي للسفر لعبور الحدود؟", a: "نعم، يجب أن يحمل المسافر تأمين سفر صحي يغطي أراضي المملكة والإمارات أثناء السفر." }
      ]
    }
  },
  {
    slug: "dammam-to-riyadh",
    name: { en: "Dammam to Riyadh Taxi", ar: "تاكسي من الدمام إلى الرياض" },
    metaTitle: { 
      en: "Dammam to Riyadh Taxi | Safe Intercity Highway Transfers", 
      ar: "تاكسي من الدمام إلى الرياض | توصيل بين المدن سريع وآمن" 
    },
    metaDescription: {
      en: "Book a fast, private taxi from Dammam to Riyadh. Affordable fixed rates, experienced highway drivers, and comfortable vehicles.",
      ar: "احجز تاكسي خاص وسريع من الدمام إلى الرياض. أسعار ثابتة ومناسبة، وسائقون ذوو خبرة على الطرق السريعة وسيارات حديثة ومريحة."
    },
    distance: { en: "400 km", ar: "٤٠٠ كم" },
    duration: { en: "3.5 - 4 Hours", ar: "٣.٥ إلى ٤ ساعات" },
    basePrice: 900,
    pricing: { sedan: 900, suv: 1400, van: 1800, luxury: 3500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813470.9329705977!2d46.49265215!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489783%3A0x861e1de44327a40b!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716500000003!5m2!1sen!2ssa",
    intro: {
      en: "Need to commute between Saudi Arabia's Eastern Province and the capital city? Our Dammam to Riyadh taxi service provides a reliable, flat-rate highway transfer.",
      ar: "هل تحتاج للتنقل بين المنطقة الشرقية والعاصمة الرياض؟ تقدم خدمة التاكسي من الدمام إلى الرياض توصيلاً آمناً وموثوقاً بأسعار ثابتة ومدروسة."
    },
    contentSections: [
      {
        title: { en: "Fast & Flexible Business Commutes", ar: "تنقل سريع ومرن لرجال الأعمال والشركات" },
        body: {
          en: [
            "We offer direct transportation from Dammam Airport (DMM) straight to Riyadh business districts, hotels, or Riyadh Airport (RUH).",
            "Work comfortably on the road with our high-speed Wi-Fi, USB chargers, and comfortable seating, ideal for corporate executives.",
            "Avoid domestic flight check-in queues, luggage limits, and airport delays."
          ],
          ar: [
            "نقدم توصيلاً مباشراً من مطار الدمام (DMM) إلى مراكز المال والأعمال في الرياض، الفنادق، أو مطار الملك خالد الدولي (RUH).",
            "أنجز أعمالك أثناء الطريق بفضل الإنترنت اللاسلكي السريع، شواحن الهواتف، والمقاعد المريحة للغاية، وهي الميزة المفضلة لرجال الأعمال.",
            "تجنب طوابير الرحلات الداخلية، وقيود وزن الأمتعة، والتأخر المعتاد في صالات المطارات."
          ]
        }
      },
      {
        title: { en: "Professional Highway Fleet", ar: "أسطول احترافي مخصص للطرق السريعة" },
        body: {
          en: [
            "We operate Toyota Camry (Sedan) for budget trips and GMC Yukon/Suburban for maximum passenger safety and highway stability.",
            "Our vehicles undergo rigid routine maintenance, tire checks, and AC performance optimization for hot desert climates."
          ],
          ar: [
            "نحن نشغّل سيارات تويوتا كامري (سيدان) للرحلات الاقتصادية، وجي إم سي يوكن / سوبربان لتوفير أقصى درجات الأمان والثبات على الطريق السريع.",
            "تخضع سياراتنا لصيانة دورية صارمة وفحص للإطارات والتكييف للتكيف مع حرارة الصيف الشديدة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "What is the price of a taxi from Dammam Airport to Riyadh?", a: "Our prices start from 900 SAR for a Sedan Camry. Luxury options like SUV or Yukon cost 1400 SAR." },
        { q: "Can we request a return trip on the same day?", a: "Yes, we offer special wait-and-return discounts for business trips. Speak with our WhatsApp agent." }
      ],
      ar: [
        { q: "ما هو سعر التاكسي من مطار الدمام إلى الرياض؟", a: "تبدأ أسعارنا من ٩٠٠ ريال سعودي لسيارة كامري سيدان، وتكلف السيارات العائلية الفاخرة مثل اليوكن ١٤٠٠ ريال." },
        { q: "هل يمكننا طلب رحلة عودة في نفس اليوم؟", a: "نعم، نقدم خصومات خاصة لرحلات الذهاب والعودة مع الانتظار لقطاع الأعمال. تواصل مع موظف خدمة العملاء بالواتساب." }
      ]
    }
  },
  {
    slug: "dammam-airport-to-khobar",
    name: { en: "Dammam Airport to Khobar", ar: "تاكسي من مطار الدمام إلى الخبر" },
    metaTitle: { 
      en: "Dammam Airport to Khobar Taxi | Fast Airport Pickups", 
      ar: "تاكسي من مطار الدمام إلى الخبر | استقبال سريع من المطار" 
    },
    metaDescription: {
      en: "Direct airport transfers from King Fahd International Airport (DMM) to Khobar city and hotels. Flat rates, meet & greet service, 24/7.",
      ar: "خدمة توصيل مباشرة من مطار الملك فهد الدولي (DMM) إلى الخبر وفنادقها. أسعار ثابتة، استقبال عند الوصول، خدمة 24 ساعة."
    },
    distance: { en: "60 km", ar: "٦٠ كم" },
    duration: { en: "45 Minutes", ar: "٤٥ دقيقة" },
    basePrice: 150,
    pricing: { sedan: 150, suv: 280, van: 320, luxury: 700 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114490.52843444458!2d50.1197779!3d26.2778749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e623a3d5483f%3A0xf639c0fa1a29910d!2sAl%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716500000004!5m2!1sen!2ssa",
    intro: {
      en: "Arrive in Khobar quickly and stress-free. Our professional Dammam Airport to Khobar taxi service guarantees fixed pricing and professional chauffeurs waiting for your arrival.",
      ar: "صل إلى الخبر بسرعة وراحة تامة. تضمن لك خدمة التاكسي من مطار الدمام إلى الخبر أسعاراً ثابتة وسائقين محترفين بانتظار وصولك في المطار."
    },
    contentSections: [
      {
        title: { en: "Flight Tracking & Meet & Greet", ar: "تتبع الرحلات الجوية والاستقبال في الصالة" },
        body: {
          en: [
            "We track your flight number for any delays or early arrivals to ensure your driver is on time.",
            "Your driver will be waiting at the arrival terminal gate with a nameplate, helping you carry your bags directly to the vehicle.",
            "Save time and avoid peak airport queue surcharges with our pre-booked flat rate service."
          ],
          ar: [
            "نقوم بتتبع رقم رحلتك الجوية لمعرفة أي تأخير أو وصول مبكر لضمان تواجد السائق في الوقت الدقيق.",
            "سيتواجد سائقك عند بوابة صالة الوصول حاملاً لوحة باسمك، وسيقوم بمساعدتك في حمل الحقائب مباشرة إلى السيارة.",
            "وفر وقتك وتجنب رسوم طوابير المطار الإضافية في أوقات الذروة من خلال خدمتنا ذات الأسعار الثابتة والطلب المسبق."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much does a taxi from Dammam Airport to Khobar cost?", a: "The price is 150 SAR for a Sedan Camry. For a VIP GMC Yukon, it costs 280 SAR." },
        { q: "Is the airport parking fee included in the price?", a: "Yes, all airport parking, toll fees, and VAT are fully included in the price quote." }
      ],
      ar: [
        { q: "كم تبلغ تكلفة التاكسي من مطار الدمام إلى الخبر؟", a: "تبلغ التكلفة ١٥٠ ريالاً سعودياً لسيارة كامري سيدان، و٢٨٠ ريالاً لسيارة جي إم سي يوكن الفاخرة." },
        { q: "هل يشمل السعر رسوم مواقف سيارات المطار؟", a: "نعم، جميع رسوم مواقف المطار، ورسوم الطرق، وضريبة القيمة المضافة مشمولة بالكامل في السعر." }
      ]
    }
  },
  {
    slug: "dammam-airport-to-jubail",
    name: { en: "Dammam Airport to Jubail", ar: "تاكسي من مطار الدمام إلى الجبيل" },
    metaTitle: { 
      en: "Dammam Airport to Jubail Taxi | Industrial Zone Transfers", 
      ar: "تاكسي من مطار الدمام إلى الجبيل | توصيل المدن الصناعية" 
    },
    metaDescription: {
      en: "Private chauffeured airport transfers from Dammam Airport (DMM) to Jubail Industrial City. Corporate bookings, modern fleet, and clean vehicles.",
      ar: "خدمة توصيل مطار خاصة من مطار الدمام إلى مدينة الجبيل الصناعية. حجوزات شركات، أسطول حديث، وسيارات معقمة بالكامل."
    },
    distance: { en: "85 km", ar: "٨٥ كم" },
    duration: { en: "55 Minutes", ar: "٥٥ دقيقة" },
    basePrice: 200,
    pricing: { sedan: 200, suv: 350, van: 400, luxury: 900 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114138.83597401736!2d49.5298099!3d26.96025215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3523588265fa37%3A0xc3f8e77a28cf1bc0!2sAl%20Jubail%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716500000005!5m2!1sen!2ssa",
    intro: {
      en: "Corporate and individual transfers to Jubail Industrial City. Our Dammam Airport to Jubail taxi service is the primary choice for Aramco/SABIC engineers and international consultants.",
      ar: "خدمات نقل الأفراد والشركات إلى مدينة الجبيل الصناعية. تعد خدمة التاكسي من مطار الدمام إلى الجبيل الخيار الأول لمهندسي أرامكو/سابك والاستشاريين الدوليين."
    },
    contentSections: [
      {
        title: { en: "Corporate Transportation Specialists", ar: "متخصصون في نقل قطاع الشركات والأعمال" },
        body: {
          en: [
            "We provide seamless invoice facilities for corporate accounts and digital payment receipts.",
            "Punctual executive transfers from DMM Airport directly to Jubail Industrial Area 1, 2, and residential compounds.",
            "Our drivers are familiar with security gate access requirements for major industrial sites."
          ],
          ar: [
            "نحن نقدم تسهيلات سداد ممتازة لحسابات الشركات مع توفير فواتير رقمية وإيصالات معتمدة.",
            "نقل تنفيذي دقيق من مطار الدمام مباشرة إلى الجبيل الصناعية الأولى والثانية والمجمعات السكنية.",
            "سائقونا على دراية تامة بمتطلبات بوابات التصاريح الأمنية للمواقع الصناعية الكبرى."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "Do you offer corporate invoice packages?", a: "Yes, we support corporate monthly billing and flexible accounts. Get in touch with our team." },
        { q: "Can we request a baby seat for family travel to Jubail?", a: "Yes, child seats are available and can be added to your booking for no extra charge." }
      ],
      ar: [
        { q: "هل توفرون باقات فواتير شهرية للشركات؟", a: "نعم، نحن ندعم نظام الفوترة الشهرية للشركات وحسابات الدفع المرنة. تواصل مع فريق المبيعات." },
        { q: "هل يمكن طلب مقعد طفل لرحلة عائلية إلى الجبيل؟", a: "نعم، مقاعد الأطفال متوفرة ويمكن إضافتها لطلب حجزك مجاناً." }
      ]
    }
  },
  {
    slug: "dammam-airport-to-dhahran",
    name: { en: "Dammam Airport to Dhahran", ar: "تاكسي من مطار الدمام إلى الظهران" },
    metaTitle: { 
      en: "Dammam Airport to Dhahran Taxi | Aramco HQ Transfers", 
      ar: "تاكسي من مطار الدمام إلى الظهران | توصيل أرامكو والجامعة" 
    },
    metaDescription: {
      en: "Book a private airport transfer from Dammam Airport (DMM) to Dhahran, Aramco Camp, and KFUPM. Insured vehicles, elite drivers, flat rates.",
      ar: "احجز توصيل مطار متميز من مطار الدمام إلى الظهران، سكن أرامكو، وجامعة الملك فهد للبترول والمعادن. سيارات مؤمنة وسائقون نخبة."
    },
    distance: { en: "55 km", ar: "٥٥ كم" },
    duration: { en: "40 Minutes", ar: "٤٠ دقيقة" },
    basePrice: 150,
    pricing: { sedan: 150, suv: 280, van: 320, luxury: 700 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114511.96860010996!2d50.10667315!3d26.2625298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5d41577ffdb%3A0xe5a1768407421110!2sDhahran%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716500000006!5m2!1sen!2ssa",
    intro: {
      en: "Get a safe, professional transfer from Dammam Airport to Dhahran. Servicing Saudi Aramco residential quarters, King Fahd University (KFUPM), and all business towers.",
      ar: "احصل على توصيل آمن وفاخر من مطار الدمام إلى الظهران. نخدم مجمعات سكن أرامكو السعودية، جامعة الملك فهد (KFUPM)، وجميع الأبراج المكتبية."
    },
    contentSections: [
      {
        title: { en: "Safe and Reliable Dhahran Travel", ar: "سفر آمن وموثوق إلى الظهران" },
        body: {
          en: [
            "We provide standard and VIP services with full gate compliance checks.",
            "All vehicles have active tracking (GPS) and are driven by professional, English-speaking chauffeurs.",
            "Comfortable luxury SUVs are ideal for corporate visitors checking in at Aramco head offices."
          ],
          ar: [
            "نحن نقدم خدمات قياسية و VIP متوافقة تماماً مع تصاريح بوابات الدخول.",
            "جميع السيارات مزودة بتتبع نشط (GPS) ويقودها سائقون محترفون يتحدثون الإنجليزية والعربية.",
            "سيارات الدفع الرباعي الفاخرة والمريحة هي الخيار الأمثل لزوار الشركات القادمين إلى مكاتب أرامكو الرئيسية."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "Can your drivers enter Saudi Aramco Camp?", a: "Our drivers can drop off passengers at the designated gates. For inside access, passengers should coordinate with gate security." }
      ],
      ar: [
        { q: "هل يمكن لسائقيكم الدخول إلى سكن أرامكو السعودية؟", a: "يمكن لسائقينا التوصيل إلى البوابات المحددة. وللدخول إلى الداخل، يجب على المسافرين التنسيق المسبق للحصول على تصريح أمني." }
      ]
    }
  },
  {
    slug: "dammam-airport-to-hofuf",
    name: { en: "Dammam Airport to Hofuf (Al-Ahsa)", ar: "تاكسي من مطار الدمام إلى الهفوف" },
    metaTitle: { 
      en: "Dammam Airport to Hofuf Taxi | Al-Ahsa Intercity Transfers", 
      ar: "تاكسي من مطار الدمام إلى الهفوف | توصيل الأحساء بين المدن" 
    },
    metaDescription: {
      en: "Direct private taxi from DMM Airport to Hofuf and Al-Ahsa region. Safe highway travel, competitive flat rates, and professional drivers.",
      ar: "تاكسي خاص مباشر من مطار الدمام إلى الهفوف ومنطقة الأحساء. سفر آمن على الطريق السريع، أسعار منافسة وسائقون محترفون."
    },
    distance: { en: "160 km", ar: "١٦٠ كم" },
    duration: { en: "1.5 - 2 Hours", ar: "ساعة ونصف إلى ساعتين" },
    basePrice: 400,
    pricing: { sedan: 400, suv: 650, van: 800, luxury: 1600 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115160.05436665725!2d49.5298099!3d25.37890985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e37f84742a03cfb%3A0xc3f8e77a28cf1bc1!2sHofuf%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716500000007!5m2!1sen!2ssa",
    intro: {
      en: "Enjoy a smooth, worry-free highway drive from Dammam Airport to Hofuf (Al-Ahsa). We provide reliable intercity taxi services for business travellers and families alike.",
      ar: "استمتع برحلة سلسة وخالية من المتاعب على الطريق السريع من مطار الدمام إلى الهفوف (الأحساء). نقدم خدمات نقل موثوقة بين المدن لرجال الأعمال والعائلات."
    },
    contentSections: [
      {
        title: { en: "High-Quality Intercity Transfers", ar: "توصيل عالي الجودة بين المدن" },
        body: {
          en: [
            "The road to Al-Ahsa runs through 160 km of desert highway. Our cars are selected for high stability and powerful AC.",
            "Punctual and prompt pickups with luggage assistance.",
            "Fixed rates are locked in at booking, protecting you from meter-tampering or surcharges."
          ],
          ar: [
            "الطريق إلى الأحساء يمتد لـ 160 كم من الطريق السريع الصحراوي. تم اختيار سياراتنا لتوفير أقصى درجات الثبات ونظام تكييف قوي.",
            "استقبال دقيق ومواعيد منضبطة مع المساعدة الكاملة في حمل الحقائب والأمتعة.",
            "الأسعار الثابتة يتم تأكيدها عند الحجز، مما يحميك من تلاعب عدادات الأجرة أو الزيادات المفاجئة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "What is the price from DMM Airport to Hofuf?", a: "It is 400 SAR for a Sedan Camry and 650 SAR for a GMC Yukon SUV." }
      ],
      ar: [
        { q: "ما هو السعر من مطار الدمام إلى الهفوف؟", a: "تبلغ التكلفة ٤٠٠ ريال لسيارة كامري سيدان، و٦٥٠ ريالاً لسيارة جي إم سي يوكن العائلية." }
      ]
    }
  },
  {
    slug: "dammam-airport-to-qatar-border",
    name: { en: "Dammam Airport to Qatar Border", ar: "تاكسي من مطار الدمام إلى حدود قطر" },
    metaTitle: { 
      en: "Dammam Airport to Qatar Border Taxi | Salwa Border Transfers", 
      ar: "تاكسي من مطار الدمام إلى حدود قطر | منفذ سلوى الحدودي" 
    },
    metaDescription: {
      en: "Private taxi transfers from Dammam Airport (DMM) to the Saudi-Qatar Salwa border. Quick customs clearance support, reliable executive vehicles.",
      ar: "توصيل تاكسي خاص من مطار الدمام إلى منفذ سلوى الحدودي بين السعودية وقطر. دعم التخليص السريع وسيارات حديثة وموثوقة."
    },
    distance: { en: "310 km", ar: "٣١٠ كم" },
    duration: { en: "3 Hours", ar: "٣ ساعات" },
    basePrice: 1000,
    pricing: { sedan: 1000, suv: 1600, van: 2000, luxury: 3800 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115682.909062325!2d50.77196025!3d24.96025215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e476fb8a2a03cfb%3A0xc3f8e77a28cf1bc2!2sSalwa%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716500000008!5m2!1sen!2ssa",
    intro: {
      en: "Connecting Dammam Airport to the Salwa border terminal for entry into Qatar. We provide highway rides driven by experienced cross-border chauffeurs.",
      ar: "نربط مطار الدمام بمنفذ سلوى الحدودي للدخول إلى دولة قطر. نوفر رحلات برية متميزة يقودها سائقون ذوو خبرة واسعة في الطرق الحدودية."
    },
    contentSections: [
      {
        title: { en: "Salwa Checkpoint Pickups and Drops", ar: "التوصيل والاستقبال في منفذ سلوى" },
        body: {
          en: [
            "We offer direct drops at the Salwa border gate where passengers can clear Saudi customs and transfer into Qatar.",
            "Bilingual drivers are available to assist with luggage and provide navigation advice for border check terminals.",
            "Water, high-speed Wi-Fi, and absolute passenger comfort are guaranteed."
          ],
          ar: [
            "نقدم خدمة التوصيل المباشر إلى بوابة منفذ سلوى حيث يمكن للركاب إنهاء إجراءات الجمارك السعودية والعبور لقطر.",
            "سائقون يتحدثون لغتين متوفرون لمساعدتك في الأمتعة وتقديم التوجيهات حول ممرات الفحص في المنفذ.",
            "نضمن توفير المياه الباردة، الإنترنت اللاسلكي عالي السرعة، والراحة التامة للمسافرين."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "Do you cross inside Doha, Qatar?", a: "Currently, our standard service transfers you directly to the Saudi side of the Salwa border. For direct cross-border drops into Doha, please contact our support team on WhatsApp to confirm custom permits." }
      ],
      ar: [
        { q: "هل تدخل سياراتكم إلى الدوحة بقطر؟", a: "في الوقت الحالي، تنقلك خدمتنا القياسية إلى الجانب السعودي من منفذ سلوى. للتوصيل المباشر داخل الدوحة، يرجى التواصل مع فريق الدعم عبر الواتساب لتأكيد توفر تصاريح العبور الكاملة." }
      ]
    }
  },

  // ─── NEW ROUTES ───────────────────────────────────────────────

  {
    slug: "dammam-to-doha",
    name: { en: "Dammam to Doha Taxi", ar: "تاكسي من الدمام إلى الدوحة" },
    metaTitle: {
      en: "Dammam to Doha Taxi | Direct Qatar City & Airport Transfer",
      ar: "تاكسي من الدمام إلى الدوحة | توصيل مباشر لمدينة قطر ومطار حمد"
    },
    metaDescription: {
      en: "Book a direct private taxi from Dammam to Doha, Qatar. Door-to-door service to Souq Waqif, Pearl Qatar, Lusail, and Hamad International Airport (DOH). Cross Salwa border with licensed drivers.",
      ar: "احجز تاكسي خاص مباشر من الدمام إلى الدوحة قطر. توصيل من الباب إلى الباب لسوق واقف، اللؤلؤة، لوسيل، ومطار حمد الدولي. عبور منفذ سلوى مع سائقين مرخصين."
    },
    distance: { en: "400 km", ar: "٤٠٠ كم" },
    duration: { en: "5 - 6 Hours", ar: "٥ إلى ٦ ساعات" },
    basePrice: 1400,
    pricing: { sedan: 1400, suv: 2200, van: 2800, luxury: 5500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924927.0!2d51.1839!3d25.2107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1a7c6f9e6f5d4f0a!2sDoha%20Qatar!5e0!3m2!1sen!2ssa!4v1717000000010!5m2!1sen!2ssa",
    intro: {
      en: "Travel direct from Dammam to Doha, Qatar's spectacular capital. Our private taxi crosses the Salwa–Abu Samra border and delivers you door-to-door to Souq Waqif, The Pearl Qatar, Lusail City, Museum of Islamic Art, or Hamad International Airport (DOH).",
      ar: "سافر مباشرة من الدمام إلى الدوحة، العاصمة القطرية الرائعة. يعبر تاكسينا الخاص منفذ سلوى-أبو سمرة ويوصلك من الباب إلى الباب إلى سوق واقف، اللؤلؤة، مدينة لوسيل، متحف الفن الإسلامي، أو مطار حمد الدولي."
    },
    contentSections: [
      {
        title: { en: "Doha Tourist Destinations & City Transfers", ar: "مواقع الدوحة السياحية والتوصيل داخل المدينة" },
        body: {
          en: [
            "Doha is one of the Gulf's fastest-growing tourist destinations, home to Souq Waqif (the restored heritage market), Museum of Islamic Art designed by I.M. Pei on the Corniche, The Pearl Qatar (a luxury man-made island with designer boutiques and fine dining), Katara Cultural Village, and the futuristic Lusail City — venue of the 2022 FIFA World Cup Final.",
            "Business travellers are delivered to the Qatar Financial Centre, West Bay business district, Msheireb Downtown Doha, or the QNCC Qatar National Convention Centre.",
            "We also offer direct airport-to-airport transfers from King Fahd International Airport (DMM) to Hamad International Airport (DOH) — rated the world's best airport by Skytrax 2024."
          ],
          ar: [
            "الدوحة من أسرع وجهات السياحة الخليجية نمواً، وتضم سوق واقف (السوق التراثي المرمم)، متحف الفن الإسلامي بتصميم آي إم بي على الكورنيش، اللؤلؤة القطرية (جزيرة اصطناعية فاخرة بمحلات المصممين والمطاعم الراقية)، قرية كتارا الثقافية، ومدينة لوسيل المستقبلية — موقع نهائي كأس العالم 2022.",
            "يُوصل رجال الأعمال إلى مركز قطر المالي، منطقة الخليج الغربي التجارية، مشيرب داون تاون الدوحة، أو المركز الوطني للمؤتمرات QNCC.",
            "نقدم أيضاً توصيلاً مباشراً من مطار الملك فهد الدولي (DMM) إلى مطار حمد الدولي (DOH) — صنّفه سكايتراكس أفضل مطار في العالم لعام 2024."
          ]
        }
      },
      {
        title: { en: "Salwa–Abu Samra Border Crossing Process", ar: "إجراءات عبور منفذ سلوى – أبو سمرة" },
        body: {
          en: [
            "The Salwa (Saudi) – Abu Samra (Qatar) land border is the only road crossing between Saudi Arabia and Qatar. Saudi-Qatar diplomatic relations were fully restored in January 2021 and the crossing operates 24 hours.",
            "Required documents: valid passport (minimum 6 months validity), active Exit/Re-Entry visa for Saudi residents, and a Qatar entry visa — many nationalities receive a visa on arrival or via the Hayya digital platform.",
            "Our drivers hold valid Saudi-Qatar commercial transport permits and guide you through both border posts efficiently, keeping waiting time to a minimum."
          ],
          ar: [
            "منفذ سلوى (السعودية) – أبو سمرة (قطر) هو المعبر البري الوحيد بين المملكة العربية السعودية وقطر. استُعيدت العلاقات الدبلوماسية بالكامل في يناير 2021 والمنفذ يعمل ٢٤ ساعة.",
            "المستندات المطلوبة: جواز سفر ساري (٦ أشهر على الأقل)، تأشيرة خروج وعودة سارية للمقيمين، وتأشيرة دخول قطر — تتوفر تأشيرة عند الوصول لكثير من الجنسيات أو عبر منصة Hayya الرقمية.",
            "سائقونا يحملون تصاريح نقل تجاري سعودية-قطرية ويرشدونك عبر المنفذين بكفاءة مع تقليل وقت الانتظار."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Doha?", a: "Dammam to Doha taxi starts from 1,400 SAR for a Toyota Camry Sedan and 2,200 SAR for a GMC Yukon SUV. All prices include Salwa border fees and road tolls." },
        { q: "How long is the drive from Dammam to Doha?", a: "Approximately 5 to 6 hours including Salwa border clearance (30–60 minutes on normal days). Total driving distance is around 400 km." },
        { q: "Do you drop off at Hamad International Airport (DOH)?", a: "Yes. We offer direct door-to-door transfers from DMM Airport to Hamad International Airport (DOH) in Doha, and the reverse route as well." },
        { q: "Which tourist spots in Doha can you take us to?", a: "We deliver to all Doha attractions including Souq Waqif, Museum of Islamic Art, The Pearl Qatar, Katara Cultural Village, Lusail City, Msheireb Downtown, West Bay, and all major Doha hotels." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى الدوحة؟", a: "يبدأ من ١٤٠٠ ريال للكامري و٢٢٠٠ ريال لليوكن. تشمل جميع الأسعار رسوم منفذ سلوى والطرق." },
        { q: "كم تستغرق الرحلة من الدمام إلى الدوحة؟", a: "حوالي ٥ إلى ٦ ساعات تشمل التخليص على منفذ سلوى (٣٠-٦٠ دقيقة). مسافة القيادة حوالي ٤٠٠ كم." },
        { q: "هل توصلون إلى مطار حمد الدولي (DOH)؟", a: "نعم، نقدم توصيلاً مباشراً من مطار الدمام إلى مطار حمد الدولي بالدوحة وبالعكس." }
      ]
    }
  },

  {
    slug: "dammam-to-abu-dhabi",
    name: { en: "Dammam to Abu Dhabi Taxi", ar: "تاكسي من الدمام إلى أبوظبي" },
    metaTitle: {
      en: "Dammam to Abu Dhabi Taxi | Sheikh Zayed Mosque & AUH Airport",
      ar: "تاكسي من الدمام إلى أبوظبي | مسجد الشيخ زايد ومطار أبوظبي"
    },
    metaDescription: {
      en: "Direct private taxi from Dammam to Abu Dhabi — Sheikh Zayed Grand Mosque, Yas Island, Ferrari World, Louvre Abu Dhabi, and Abu Dhabi International Airport (AUH). Luxury SUV & VIP options.",
      ar: "تاكسي خاص مباشر من الدمام إلى أبوظبي — مسجد الشيخ زايد الكبير، جزيرة ياس، فيراري وورلد، متحف اللوفر، ومطار أبوظبي الدولي. خيارات SUV وVIP فاخرة."
    },
    distance: { en: "870 km", ar: "٨٧٠ كم" },
    duration: { en: "8.5 - 9.5 Hours", ar: "٨.٥ إلى ٩.٥ ساعات" },
    basePrice: 3200,
    pricing: { sedan: 3200, suv: 4500, van: 5200, luxury: 8000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924927.0!2d54.3773!3d24.4539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1cd4e1b%3A0x2cb0507d89b301fc!2sAbu%20Dhabi%20UAE!5e0!3m2!1sen!2ssa!4v1717000000011!5m2!1sen!2ssa",
    intro: {
      en: "Travel from Dammam to Abu Dhabi, UAE's majestic capital. Visit the Sheikh Zayed Grand Mosque, Yas Island theme parks, Louvre Abu Dhabi, and the iconic Corniche — all accessible by our cross-border taxi via the Al Batha-Ghuwaifat border.",
      ar: "سافر من الدمام إلى أبوظبي، العاصمة الإماراتية الشامخة. زر مسجد الشيخ زايد الكبير، حدائق جزيرة ياس، متحف اللوفر أبوظبي، والكورنيش الأيقوني — بتاكسينا المتميز عبر منفذ البطحاء-الغويفات."
    },
    contentSections: [
      {
        title: { en: "Abu Dhabi Tourist Attractions & Landmarks", ar: "معالم ومواقع أبوظبي السياحية" },
        body: {
          en: [
            "Abu Dhabi is home to some of the world's most stunning landmarks. The Sheikh Zayed Grand Mosque — one of the largest mosques globally — welcomes visitors of all faiths. Yas Island houses Ferrari World Abu Dhabi (world's fastest roller coaster), Yas Waterworld, and Yas Marina Circuit (Formula 1 Grand Prix venue).",
            "Cultural highlights include the Louvre Abu Dhabi designed by Jean Nouvel, the Qasr Al Hosn fort (Abu Dhabi's oldest building), and the Mangrove National Park. The vibrant Abu Dhabi Corniche stretches 8 km along the Arabian Gulf waterfront.",
            "For business travellers, we deliver to Abu Dhabi International Airport (AUH), Abu Dhabi Global Market (ADGM) on Al Maryah Island, ADNOC headquarters, Khalifa City, and all major business hotels."
          ],
          ar: [
            "أبوظبي موطن لبعض أبرز المعالم في العالم. مسجد الشيخ زايد الكبير — أحد أكبر المساجد عالمياً — يرحب بالزوار من جميع الأديان. تضم جزيرة ياس فيراري وورلد (أسرع خطوط الملاهي في العالم)، ياس ووترورلد، وحلبة ياس مارينا (سباق الفورمولا 1).",
            "من المعالم الثقافية: متحف اللوفر أبوظبي بتصميم جان نوفيل، قصر الحصن (أقدم مبنى في أبوظبي)، والمنتزه الوطني للقرم. يمتد كورنيش أبوظبي 8 كم على الواجهة البحرية.",
            "لرجال الأعمال، نوصل إلى مطار أبوظبي الدولي (AUH)، سوق أبوظبي العالمي في جزيرة المارية، مقر أدنوك، مدينة خليفة، وجميع فنادق الأعمال الكبرى."
          ]
        }
      },
      {
        title: { en: "Al Batha / Ghuwaifat Border Crossing to Abu Dhabi", ar: "عبور منفذ البطحاء / الغويفات إلى أبوظبي" },
        body: {
          en: [
            "We cross via the Al Batha border terminal on the Saudi side and Ghuwaifat on the UAE side — the main Saudi-UAE land crossing located in Abu Dhabi emirate.",
            "After Ghuwaifat, Abu Dhabi city is approximately 250 km further on the E11 highway. Our vehicles are equipped for the full 870 km journey with GPS, multi-zone AC, USB charging, and complimentary Wi-Fi.",
            "Required: passport valid 6+ months, UAE entry visa (visa-on-arrival for many nationalities), and valid Saudi Exit/Re-Entry visa for expatriate residents."
          ],
          ar: [
            "نعبر عبر منفذ البطحاء السعودي والغويفات الإماراتي — المعبر البري الرئيسي بين السعودية والإمارات في إمارة أبوظبي.",
            "بعد الغويفات، أبوظبي على بُعد حوالي ٢٥٠ كم على طريق E11. سياراتنا مجهزة لرحلة ٨٧٠ كم كاملة بنظام GPS وتكييف متعدد المناطق وشحن USB وواي فاي مجاني.",
            "المطلوب: جواز سفر ساري ٦+ أشهر، تأشيرة دخول الإمارات (متاحة عند الوصول لكثير من الجنسيات)، وتأشيرة خروج وعودة سارية للمقيمين."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Abu Dhabi?", a: "Dammam to Abu Dhabi starts from 3,200 SAR for a Sedan and 4,500 SAR for a GMC Yukon SUV. Prices include Al Batha border fees and all road tolls." },
        { q: "Can you drop us at Sheikh Zayed Grand Mosque?", a: "Yes. We deliver to Sheikh Zayed Grand Mosque, Yas Island, Louvre Abu Dhabi, Abu Dhabi Corniche, and all hotels across the emirate." },
        { q: "Do you serve Abu Dhabi International Airport (AUH)?", a: "Yes. We provide direct transfers from Dammam Airport (DMM) to Abu Dhabi International Airport (AUH) — Terminal 1, 3, and the new Midfield Terminal." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى أبوظبي؟", a: "يبدأ من ٣٢٠٠ ريال للسيدان و٤٥٠٠ ريال ليوكن SUV. تشمل الأسعار رسوم منفذ البطحاء وجميع الطرق." },
        { q: "هل توصلون إلى مسجد الشيخ زايد الكبير؟", a: "نعم، نوصل إلى مسجد الشيخ زايد، جزيرة ياس، اللوفر، كورنيش أبوظبي، وجميع الفنادق في الإمارة." },
        { q: "هل تخدمون مطار أبوظبي الدولي (AUH)؟", a: "نعم، توصيل مباشر من مطار الدمام (DMM) إلى مطار أبوظبي الدولي (AUH) — جميع الصالات." }
      ]
    }
  },

  {
    slug: "dammam-to-sharjah",
    name: { en: "Dammam to Sharjah Taxi", ar: "تاكسي من الدمام إلى الشارقة" },
    metaTitle: {
      en: "Dammam to Sharjah Taxi | UAE Cultural Capital Transfer",
      ar: "تاكسي من الدمام إلى الشارقة | توصيل العاصمة الثقافية الإماراتية"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Sharjah, UAE. Visit Sharjah Heritage Area (UNESCO), Al Noor Mosque, Blue Souk, and Museum of Islamic Civilization. Direct cross-border chauffeur service.",
      ar: "تاكسي خاص من الدمام إلى الشارقة بالإمارات. زيارة منطقة التراث (يونسكو)، مسجد النور، السوق الأزرق، ومتحف الحضارة الإسلامية. خدمة شوفير مباشرة عبر الحدود."
    },
    distance: { en: "980 km", ar: "٩٨٠ كم" },
    duration: { en: "9.5 - 10.5 Hours", ar: "٩.٥ إلى ١٠.٥ ساعات" },
    basePrice: 3600,
    pricing: { sedan: 3600, suv: 4900, van: 5600, luxury: 8500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924927.0!2d55.4033!3d25.3573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5933e0fb765e7%3A0x85a9e7a3e3f7faa2!2sSharjah%20UAE!5e0!3m2!1sen!2ssa!4v1717000000012!5m2!1sen!2ssa",
    intro: {
      en: "Discover Sharjah — the UAE's Cultural Capital — by private taxi from Dammam. Known for its UNESCO-listed Heritage Area, stunning Al Noor Mosque, the famous Blue Souk, and the Museum of Islamic Civilization, Sharjah offers a richer, more authentic UAE experience.",
      ar: "اكتشف الشارقة — عاصمة الثقافة الإماراتية — بتاكسي خاص من الدمام. تشتهر بمنطقة التراث المدرجة في يونسكو، مسجد النور الخلاب، السوق الأزرق الشهير، ومتحف الحضارة الإسلامية — الشارقة تقدم تجربة إماراتية أكثر أصالة."
    },
    contentSections: [
      {
        title: { en: "Sharjah — Cultural Capital of the Arab World", ar: "الشارقة — عاصمة الثقافة في العالم العربي" },
        body: {
          en: [
            "Sharjah holds the title of UNESCO Cultural Capital of the Arab World and is the only emirate bordering both the Arabian Gulf and Gulf of Oman. Its historic Heritage Area is a well-preserved neighbourhood of wind towers, coral-stone buildings, and traditional souqs.",
            "Top attractions include the Al Noor Mosque (one of the UAE's most photographed), Blue Souk (Central Market) with 600 shops of gold, jewellery and textiles, Sharjah Museum of Islamic Civilization (15,000+ artefacts), Sharjah Aquarium, and the Al Majaz Waterfront.",
            "Sharjah International Airport (SHJ) — a major hub for Air Arabia — is also accessible for airport transfers from Dammam."
          ],
          ar: [
            "تحمل الشارقة لقب عاصمة الثقافة في العالم العربي وفق اليونسكو، وهي الإمارة الوحيدة المطلة على خليج عُمان والخليج العربي معاً. منطقة التراث التاريخية حي محفوظ من أبراج الهواء والمباني المرجانية والأسواق التقليدية.",
            "أبرز المعالم: مسجد النور (الأكثر تصويراً في الإمارات)، السوق الأزرق (السوق المركزي) بـ٦٠٠ محل للذهب والمجوهرات والأقمشة، متحف الشارقة للحضارة الإسلامية (١٥٠٠٠+ قطعة أثرية)، أكواريوم الشارقة، وواجهة المجاز المائية.",
            "مطار الشارقة الدولي (SHJ) — مركز رئيسي للعربية للطيران — متاح أيضاً لتوصيل المطارات من الدمام."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Sharjah?", a: "Dammam to Sharjah starts from 3,600 SAR for a Sedan and 4,900 SAR for an SUV. All tolls and Al Batha border fees are included." },
        { q: "Can you take us to Sharjah International Airport (SHJ)?", a: "Yes. We provide direct transfers to Sharjah International Airport (SHJ) — major hub for Air Arabia flights." },
        { q: "Is Sharjah close to Dubai?", a: "Sharjah and Dubai share a border and are approximately 20–30 km apart (30–40 minutes by road). We can arrange split deliveries if your group needs transfers to both emirates." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى الشارقة؟", a: "يبدأ من ٣٦٠٠ ريال للسيدان و٤٩٠٠ ريال للـSUV. تشمل جميع رسوم منفذ البطحاء والطرق." },
        { q: "هل تخدمون مطار الشارقة الدولي (SHJ)؟", a: "نعم، توصيل مباشر إلى مطار الشارقة الدولي (SHJ) — مركز طيران العربية الرئيسي." },
        { q: "هل الشارقة قريبة من دبي؟", a: "الشارقة ودبي متجاورتان على بُعد ٢٠-٣٠ كم (٣٠-٤٠ دقيقة). يمكننا ترتيب توصيل مقسّم إذا احتاج مجموعتك إلى إمارتين." }
      ]
    }
  },

  {
    slug: "dammam-to-jeddah",
    name: { en: "Dammam to Jeddah Taxi", ar: "تاكسي من الدمام إلى جدة" },
    metaTitle: {
      en: "Dammam to Jeddah Taxi | Long-Distance Saudi Highway Transfer",
      ar: "تاكسي من الدمام إلى جدة | توصيل طويل المسافة داخل المملكة"
    },
    metaDescription: {
      en: "Private intercity taxi from Dammam to Jeddah — Al Balad UNESCO Old Town, King Fahd Fountain, Jeddah Corniche, and King Abdulaziz International Airport (JED). 1,260 km with professional highway drivers.",
      ar: "تاكسي خاص بين المدن من الدمام إلى جدة — البلد التاريخي (يونسكو)، نافورة الملك فهد، كورنيش جدة، ومطار الملك عبدالعزيز الدولي. ١٢٦٠ كم مع سائقين محترفين."
    },
    distance: { en: "1,260 km", ar: "١٢٦٠ كم" },
    duration: { en: "12 - 13 Hours", ar: "١٢ إلى ١٣ ساعة" },
    basePrice: 4500,
    pricing: { sedan: 4500, suv: 6500, van: 7500, luxury: 12000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813470.0!2d39.1925!3d21.4858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xb975c0a6e17e697a!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717000000013!5m2!1sen!2ssa",
    intro: {
      en: "Connect Saudi Arabia's Eastern Province to the Kingdom's commercial capital with our Dammam to Jeddah intercity taxi. A 1,260 km highway journey with rest stops, complimentary Wi-Fi, and experienced long-distance drivers — ideal when flying isn't an option.",
      ar: "اربط المنطقة الشرقية بالعاصمة التجارية للمملكة مع تاكسي الدمام–جدة بين المدن. رحلة طريق سريع ١٢٦٠ كم مع توقفات للراحة وواي فاي مجاني وسائقين ذوي خبرة في المسافات الطويلة — مثالية حين لا يكون السفر الجوي متاحاً."
    },
    contentSections: [
      {
        title: { en: "Jeddah — Gateway to the Hijaz & Red Sea", ar: "جدة — بوابة الحجاز والبحر الأحمر" },
        body: {
          en: [
            "Jeddah is Saudi Arabia's commercial hub and primary Red Sea port city. Its UNESCO World Heritage Site — Al-Balad (Historic Jeddah) — is a labyrinth of coral-stone buildings, Rawasheen (hanging wooden lattice windows), and centuries-old souqs. The King Fahd Fountain, one of the world's tallest at 312 metres, is visible from across the city.",
            "Jeddah Corniche stretches 30 km along the Red Sea coast, lined with parks, sculptures, and seafood restaurants. King Abdulaziz International Airport (JED) — with its iconic tent-like Haj Terminal — is also served directly from Dammam.",
            "The Dammam–Riyadh–Jeddah highway (via the Saudi Expressway system) is well-maintained with frequent service stations. Our drivers take scheduled rest breaks every 3–4 hours for passenger comfort."
          ],
          ar: [
            "جدة مركز تجاري للمملكة وميناؤها الرئيسي على البحر الأحمر. تُعدّ منطقة البلد التاريخية (يونسكو) متاهة من المباني المرجانية والرواشين والأسواق العريقة. نافورة الملك فهد — إحدى أطول النوافير عالمياً بارتفاع ٣١٢ متراً — مرئية من أرجاء المدينة.",
            "يمتد كورنيش جدة ٣٠ كم على ساحل البحر الأحمر بالمنتزهات والمنحوتات والمطاعم. مطار الملك عبدالعزيز الدولي (JED) — بصالة الحج الأيقونية — يُخدم مباشرة من الدمام.",
            "طريق الدمام–الرياض–جدة (عبر منظومة الطرق السريعة السعودية) مُصان جيداً مع محطات خدمات متكررة. سائقونا يأخذون استراحات منتظمة كل ٣-٤ ساعات."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Jeddah?", a: "Dammam to Jeddah starts from 4,500 SAR for a Toyota Camry Sedan and 6,500 SAR for a GMC Yukon SUV. This domestic Saudi route has no border fees." },
        { q: "How long does Dammam to Jeddah take by road?", a: "Approximately 12 to 13 hours including rest stops. The route covers 1,260 km via Riyadh and the Saudi highway system." },
        { q: "Can you drop us at King Abdulaziz International Airport (JED)?", a: "Yes. Direct transfers to all JED terminals including the iconic Haj Terminal are available." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى جدة؟", a: "يبدأ من ٤٥٠٠ ريال للكامري و٦٥٠٠ ريال ليوكن. هذا طريق داخلي سعودي بلا رسوم حدود." },
        { q: "كم تستغرق الرحلة من الدمام إلى جدة بالسيارة؟", a: "حوالي ١٢ إلى ١٣ ساعة مع توقفات الراحة. المسافة ١٢٦٠ كم عبر الرياض." },
        { q: "هل تخدمون مطار الملك عبدالعزيز الدولي (JED)؟", a: "نعم، توصيل مباشر لجميع صالات مطار جدة بما فيها صالة الحج الأيقونية." }
      ]
    }
  },

  {
    slug: "dammam-to-madinah",
    name: { en: "Dammam to Madinah Taxi", ar: "تاكسي من الدمام إلى المدينة المنورة" },
    metaTitle: {
      en: "Dammam to Madinah Taxi | Al-Masjid an-Nabawi & MED Airport",
      ar: "تاكسي من الدمام إلى المدينة المنورة | المسجد النبوي ومطار الأمير محمد"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Madinah — Al-Masjid an-Nabawi (Prophet's Mosque), Quba Mosque, Al-Baqi Cemetery, and Prince Mohammad Bin Abdulaziz Airport (MED). Comfortable 1,100 km highway transfer.",
      ar: "تاكسي خاص من الدمام إلى المدينة المنورة — المسجد النبوي، مسجد قباء، البقيع، ومطار الأمير محمد بن عبدالعزيز. توصيل مريح ١١٠٠ كم على الطريق السريع."
    },
    distance: { en: "1,100 km", ar: "١١٠٠ كم" },
    duration: { en: "10 - 11 Hours", ar: "١٠ إلى ١١ ساعة" },
    basePrice: 4000,
    pricing: { sedan: 4000, suv: 5800, van: 6800, luxury: 10500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813470.0!2d39.5692!3d24.5247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf8b18c25e2b%3A0x68a799e0a74b8d7e!2sMadinah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717000000014!5m2!1sen!2ssa",
    intro: {
      en: "Travel from Dammam to Madinah Al-Munawwarah — the City of the Prophet — in a comfortable private taxi. A 1,100 km highway journey through the heart of Saudi Arabia, arriving at the blessed city for Ziyarat (pilgrimage visit) or connecting through Prince Mohammad Bin Abdulaziz Airport (MED).",
      ar: "سافر من الدمام إلى المدينة المنورة — مدينة النبي — بتاكسي خاص مريح. رحلة ١١٠٠ كم عبر قلب المملكة، وصولاً إلى المدينة المباركة للزيارة أو الاتصال عبر مطار الأمير محمد بن عبدالعزيز."
    },
    contentSections: [
      {
        title: { en: "Madinah — The Luminous City & Sacred Sites", ar: "المدينة المنورة — المواقع الإسلامية المقدسة" },
        body: {
          en: [
            "Madinah (Al-Madinah Al-Munawwarah) is the second holiest city in Islam, home to Al-Masjid an-Nabawi — the Prophet's Mosque — which surrounds the tomb of Prophet Muhammad (PBUH). The Green Dome is one of the most recognisable landmarks in the Islamic world.",
            "Other sacred sites include Masjid Quba (the first mosque built in Islam), Masjid al-Qiblatayn (Mosque of the Two Qiblas), the Al-Baqi Cemetery, and Mount Uhud — site of the Battle of Uhud.",
            "We transport Ziyarat visitors, Umrah travellers (connecting from Dammam before or after Mecca), and pilgrims who need private, reliable transportation rather than shared buses."
          ],
          ar: [
            "المدينة المنورة ثاني أقدس المدن في الإسلام، وفيها المسجد النبوي الشريف الذي يضم قبر النبي محمد ﷺ. القبة الخضراء من أبرز المعالم في العالم الإسلامي.",
            "من المواقع الإسلامية المقدسة: مسجد قباء (أول مسجد بُني في الإسلام)، مسجد القبلتين، البقيع، وجبل أحد — موقع غزوة أحد.",
            "ننقل زوار الزيارة ومعتمري الإجازات (للانتقال من الدمام قبل أو بعد مكة المكرمة) والحجاج الذين يحتاجون نقلاً خاصاً موثوقاً بدلاً من الحافلات المشتركة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Madinah?", a: "Dammam to Madinah starts from 4,000 SAR for a Toyota Camry Sedan and 5,800 SAR for a GMC Yukon SUV. No border fees — this is a domestic Saudi route." },
        { q: "How long is the drive from Dammam to Madinah?", a: "Approximately 10 to 11 hours including rest stops. The highway covers 1,100 km via Riyadh and Al Qassim region." },
        { q: "Can non-Muslims travel on this route?", a: "Non-Muslims can travel to Madinah and visit most parts of the city. Entrance to the Al-Masjid an-Nabawi mosque is restricted to Muslims. Our drivers serve all passengers regardless of religion." },
        { q: "Do you serve Prince Mohammad Bin Abdulaziz Airport (MED)?", a: "Yes. We provide direct transfers to and from Prince Mohammad Bin Abdulaziz Airport (MED) in Madinah." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى المدينة؟", a: "يبدأ من ٤٠٠٠ ريال للكامري و٥٨٠٠ ريال ليوكن. لا رسوم حدود — هذا طريق داخلي سعودي." },
        { q: "كم تستغرق الرحلة من الدمام إلى المدينة؟", a: "حوالي ١٠ إلى ١١ ساعة مع توقفات. الطريق ١١٠٠ كم عبر الرياض ومنطقة القصيم." },
        { q: "هل تخدمون مطار الأمير محمد بن عبدالعزيز (MED)؟", a: "نعم، توصيل مباشر من وإلى مطار الأمير محمد بن عبدالعزيز بالمدينة المنورة." }
      ]
    }
  },

  {
    slug: "dammam-to-muscat",
    name: { en: "Dammam to Muscat Taxi", ar: "تاكسي من الدمام إلى مسقط" },
    metaTitle: {
      en: "Dammam to Muscat Taxi | Oman VIP Long-Distance Transfer",
      ar: "تاكسي من الدمام إلى مسقط | توصيل VIP طويل المسافة إلى عُمان"
    },
    metaDescription: {
      en: "private taxi from Dammam to Muscat, Oman via UAE. Sultan Qaboos Grand Mosque, Mutrah Souq, Royal Opera House, and Muscat International Airport (MCT). 1,400 km with luxury fleet.",
      ar: "تاكسي فاخر خاص من الدمام إلى مسقط عُمان عبر الإمارات. مسجد السلطان قابوس الكبير، سوق مطرح، دار الأوبرا الملكية، ومطار مسقط الدولي. ١٤٠٠ كم مع أسطول فاخر."
    },
    distance: { en: "1,400 km", ar: "١٤٠٠ كم" },
    duration: { en: "14 - 16 Hours", ar: "١٤ إلى ١٦ ساعة" },
    basePrice: 5500,
    pricing: { sedan: 5500, suv: 7500, van: 8500, luxury: 14000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813470.0!2d58.3829!3d23.5880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91512b9f0b82d3%3A0xa00c7a9973171a0!2sMuscat%20Oman!5e0!3m2!1sen!2ssa!4v1717000000015!5m2!1sen!2ssa",
    intro: {
      en: "Connect Dammam to Muscat, Oman's breathtaking capital, with our VIP long-distance taxi service. The 1,400 km journey crosses Saudi Arabia, transits UAE, and enters Oman — covering three GCC nations in one seamless, professionally chauffeured transfer.",
      ar: "اربط الدمام بمسقط، العاصمة العُمانية الخلابة، مع خدمة التاكسي الفاخرة لمسافات طويلة. رحلة ١٤٠٠ كم تعبر المملكة العربية السعودية وتعبر الإمارات وتدخل عُمان — ثلاث دول خليجية في توصيل واحد سلس."
    },
    contentSections: [
      {
        title: { en: "Muscat — Oman's Royal Capital & Tourist Highlights", ar: "مسقط — العاصمة العُمانية والمعالم السياحية" },
        body: {
          en: [
            "Muscat is Oman's magnificent capital, blending Arabian heritage with modernity. The Sultan Qaboos Grand Mosque — one of the largest in the world — features a stunning 14-tonne Swarovski crystal chandelier and is open to non-Muslim visitors on weekday mornings.",
            "Mutrah Souq (one of the oldest markets in the Arabian Peninsula) offers frankincense, silver jewellery, and traditional Omani crafts. The Royal Opera House Muscat hosts world-class performances. Muscat Corniche along the Gulf of Oman is a scenic 5 km waterfront promenade.",
            "Muscat International Airport (MCT) — now named Muscat International Airport after a major expansion — is also accessible directly from Dammam for airport-to-airport transfers."
          ],
          ar: [
            "مسقط عاصمة عُمان الرائعة تمزج التراث العربي والحداثة. مسجد السلطان قابوس الكبير — أحد أكبر المساجد عالمياً — يتميز بثريا كريستال سواروفسكي بوزن ١٤ طناً ومفتوح لغير المسلمين صباح أيام الأسبوع.",
            "سوق مطرح (أحد أقدم أسواق شبه الجزيرة العربية) يقدم البخور والمجوهرات الفضية والحرف العُمانية. دار الأوبرا الملكية في مسقط تستضيف عروضاً عالمية. كورنيش مسقط على خليج عُمان منتزه بحري بانورامي ٥ كم.",
            "مطار مسقط الدولي (MCT) — بعد التوسعة الكبيرة — متاح أيضاً لتوصيل المطارات مباشرة من الدمام."
          ]
        }
      },
      {
        title: { en: "Three-Country Border Crossing Route", ar: "مسار عبور ثلاث دول" },
        body: {
          en: [
            "The Dammam to Muscat route crosses three countries: Saudi Arabia → UAE (Al Batha / Ghuwaifat border) → Oman (Hatta border or Al Wajajah border near Al Ain).",
            "Required documents: passport valid 6+ months, valid Saudi Exit/Re-Entry visa for expatriates, UAE transit entry (usually stamped at Al Batha), and Oman entry visa (most nationalities receive visa on arrival at Oman land borders).",
            "This is a professional VIP route. We strongly recommend the GMC Yukon Denali for maximum comfort on the 1,400 km journey. Meals, rest stops, Wi-Fi, and refreshments are provided throughout."
          ],
          ar: [
            "مسار الدمام–مسقط يعبر ثلاث دول: المملكة العربية السعودية → الإمارات (منفذ البطحاء/الغويفات) → عُمان (منفذ حتا أو منفذ الوجاجة قرب العين).",
            "المستندات: جواز سفر ساري ٦+ أشهر، تأشيرة خروج وعودة سارية للمقيمين، ترانزيت الإمارات (يُختم عادة في البطحاء)، وتأشيرة عُمان (متاحة عند الوصول لمعظم الجنسيات).",
            "هذا مسار VIP فاخر. ننصح بشدة بجي إم سي يوكن دينالي للراحة القصوى في رحلة ١٤٠٠ كم. وجبات ومحطات راحة وواي فاي ومرطبات طوال الرحلة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Muscat?", a: "Dammam to Muscat starts from 5,500 SAR for a Sedan and 7,500 SAR for a GMC Yukon SUV. Price includes all Saudi, UAE, and Oman border fees and road tolls." },
        { q: "Which borders do we cross from Dammam to Muscat?", a: "Two borders: Saudi-UAE at Al Batha/Ghuwaifat, and UAE-Oman at the Hatta or Al Wajajah crossing. Our drivers hold permits for all three countries." },
        { q: "Can you drop us at Muscat International Airport (MCT)?", a: "Yes. Airport-to-airport transfers from Dammam Airport (DMM) to Muscat International Airport (MCT) are available upon request." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى مسقط؟", a: "يبدأ من ٥٥٠٠ ريال للسيدان و٧٥٠٠ ريال ليوكن. تشمل جميع رسوم الحدود السعودية والإماراتية والعُمانية." },
        { q: "ما الحدود التي نعبرها من الدمام إلى مسقط؟", a: "حدودان: السعودية-الإمارات في البطحاء/الغويفات، والإمارات-عُمان في منفذ حتا أو الوجاجة. سائقونا يحملون تصاريح الدول الثلاث." },
        { q: "هل تخدمون مطار مسقط الدولي (MCT)؟", a: "نعم، توصيل مطار إلى مطار من الدمام (DMM) إلى مطار مسقط (MCT) متاح عند الطلب." }
      ]
    }
  },

  {
    slug: "dammam-airport-to-bahrain-airport",
    name: { en: "Dammam Airport to Bahrain Airport", ar: "من مطار الدمام إلى مطار البحرين" },
    metaTitle: {
      en: "Dammam Airport (DMM) to Bahrain Airport (BAH) | Direct Transfer",
      ar: "من مطار الدمام (DMM) إلى مطار البحرين (BAH) | توصيل مباشر"
    },
    metaDescription: {
      en: "Direct airport-to-airport taxi from King Fahd International Airport (DMM) to Bahrain International Airport (BAH) via King Fahd Causeway. Fixed rate, meet & greet, 60-min free wait.",
      ar: "توصيل مباشر من مطار الملك فهد الدولي (DMM) إلى مطار البحرين الدولي (BAH) عبر جسر الملك فهد. سعر ثابت، استقبال في الصالة، ٦٠ دقيقة انتظار مجانية."
    },
    distance: { en: "95 km", ar: "٩٥ كم" },
    duration: { en: "1.5 - 2.5 Hours", ar: "ساعة ونصف إلى ساعتين ونصف" },
    basePrice: 400,
    pricing: { sedan: 400, suv: 650, van: 800, luxury: 1600 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114490.52843444458!2d50.4197779!3d26.2708749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49f35bde39c08b%3A0x7a4e8f4f3a2b1c0d!2sBahrain%20International%20Airport!5e0!3m2!1sen!2ssa!4v1717000000016!5m2!1sen!2ssa",
    intro: {
      en: "Connecting travellers between King Fahd International Airport (DMM) in Dammam and Bahrain International Airport (BAH) in Muharraq. Our airport-to-airport taxi crosses the King Fahd Causeway with all bridge tolls pre-included — perfect for missed connections, transit passengers, or multi-leg journeys.",
      ar: "نربط المسافرين بين مطار الملك فهد الدولي (DMM) بالدمام ومطار البحرين الدولي (BAH) في المحرق. يعبر تاكسي المطار-إلى-المطار جسر الملك فهد مع تضمين جميع رسوم الجسر — مثالي لمن فاتهم الاتصال أو المسافرين الترانزيت أو الرحلات متعددة المراحل."
    },
    contentSections: [
      {
        title: { en: "DMM to BAH — Airport Connection Service", ar: "خدمة الاتصال بين مطار الدمام ومطار البحرين" },
        body: {
          en: [
            "Bahrain International Airport (BAH) — recently expanded with a new modern terminal — is a major Gulf aviation hub served by Gulf Air (national carrier), flydubai, Air Arabia, and many international airlines. It is located in Muharraq, approximately 20 minutes from Manama city centre.",
            "Our airport connector service is ideal for: passengers arriving at DMM who have a connecting flight from BAH, travellers preferring to fly out of Bahrain for specific routes or lower fares, and corporate groups coordinating cross-country multi-leg itineraries.",
            "Flight tracking is active for both airports. Your driver monitors both your DMM arrival and your BAH departure time to ensure a stress-free connection, including a 60-minute complimentary wait at DMM arrivals."
          ],
          ar: [
            "مطار البحرين الدولي (BAH) — الذي جرى توسيعه مؤخراً بصالة حديثة — مركز طيران خليجي رئيسي تخدمه طيران الخليج (الناقل الوطني)، فلاي دبي، العربية للطيران، وكثير من الخطوط الدولية. يقع في المحرق على بُعد ٢٠ دقيقة من وسط المنامة.",
            "خدمة الاتصال بين المطارين مثالية لـ: المسافرين القادمين إلى DMM الذين لديهم رحلة اتصال من BAH، المسافرين الذين يفضلون السفر من البحرين لمسارات معينة أو أسعار أرخص، والمجموعات الشركاتية التي تنسق رحلات متعددة المراحل.",
            "تتبع الرحلات نشط لكلا المطارين. سائقك يتابع وصولك في DMM ووقت رحلتك من BAH لضمان اتصال سلس، مع ٦٠ دقيقة انتظار مجانية في صالة وصول الدمام."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport (DMM) to Bahrain Airport (BAH)?", a: "The airport-to-airport fare starts from 400 SAR for a Toyota Camry Sedan and 650 SAR for a GMC Yukon. All causeway bridge tolls and airport parking at DMM are included." },
        { q: "How long does DMM to BAH airport transfer take?", a: "Approximately 1.5 to 2.5 hours depending on King Fahd Causeway traffic. Normal weekdays take around 1.5 hours; busy weekends or holidays may take 2–3 hours." },
        { q: "Can you wait if my flight lands late at DMM?", a: "Yes. We track your DMM arrival flight live and provide 60 minutes of free waiting. Additional waiting is charged at a nominal rate." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من مطار الدمام (DMM) إلى مطار البحرين (BAH)؟", a: "يبدأ من ٤٠٠ ريال للكامري و٦٥٠ ريال ليوكن. تشمل رسوم جسر الملك فهد ومواقف مطار الدمام." },
        { q: "كم تستغرق رحلة المطار DMM إلى BAH؟", a: "حوالي ساعة ونصف إلى ساعتين ونصف حسب ازدحام الجسر. أيام الأسبوع العادية تستغرق ١.٥ ساعة؛ العطلات قد تستغرق ٢-٣ ساعات." },
        { q: "هل تنتظرون إذا تأخرت رحلتي في الدمام؟", a: "نعم، نتتبع رحلة الوصول مباشرة ونوفر ٦٠ دقيقة انتظار مجانية." }
      ]
    }
  },

  // ─── DAMMAM TOPICAL MAP — NEW LOCAL ROUTES ────────────────────

  {
    slug: "dammam-airport-to-dammam-city",
    name: { en: "Dammam Airport to Dammam City", ar: "من مطار الدمام إلى مدينة الدمام" },
    metaTitle: {
      en: "Dammam Airport to Dammam City Center Taxi | DMM to Downtown",
      ar: "تاكسي من مطار الدمام إلى مركز مدينة الدمام | المطار إلى وسط البلد"
    },
    metaDescription: {
      en: "Direct taxi from King Fahd International Airport (DMM) to Dammam City Center, Al Muraikabat, Dammam Corniche, Al Marjan Island, and all Dammam hotels. 25 km, 20-25 minutes, fixed rate.",
      ar: "تاكسي مباشر من مطار الملك فهد الدولي إلى مركز مدينة الدمام، المرايكبة، كورنيش الدمام، جزيرة المرجان، وجميع فنادق الدمام. 25 كم، 20-25 دقيقة، سعر ثابت."
    },
    distance: { en: "25 km", ar: "٢٥ كم" },
    duration: { en: "20 - 25 Minutes", ar: "٢٠ إلى ٢٥ دقيقة" },
    basePrice: 120,
    pricing: { sedan: 120, suv: 220, van: 280, luxury: 600 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114490.0!2d50.0999!3d26.4367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e96c8d9f9d8b%3A0xa4e4bbf2d3c1e0f5!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717100000001!5m2!1sen!2ssa",
    intro: {
      en: "The fastest private taxi from King Fahd International Airport (DMM) directly into Dammam city. Just 25 km and 20–25 minutes, our airport-to-city transfer delivers you to downtown hotels, Dammam Corniche, Al Marjan Island, Al-Rashid Mall, and all city-centre destinations.",
      ar: "أسرع تاكسي خاص من مطار الملك فهد الدولي مباشرة إلى مدينة الدمام. 25 كم فقط في 20-25 دقيقة، يوصلك توصيل المطار-إلى-المدينة إلى فنادق وسط المدينة، كورنيش الدمام، جزيرة المرجان، الراشد مول، وجميع وجهات مركز المدينة."
    },
    contentSections: [
      {
        title: { en: "Dammam City Center — Hotels, Corniche & Key Locations", ar: "مركز مدينة الدمام — الفنادق والكورنيش والمواقع الرئيسية" },
        body: {
          en: [
            "Dammam is the capital of Saudi Arabia's Eastern Province and one of the Kingdom's major commercial cities. Key city-centre districts include Al Muraikabat (the main commercial and banking district), Al Rakah, Al Shula, and Prince Bandar Street — the city's central business corridor.",
            "The Dammam Corniche extends for 45 km along the Arabian Gulf coast, offering parks, fountains, seafood restaurants, and open-air promenades. Al Marjan Island is a popular beachfront leisure destination with hotels, cafés, and family entertainment.",
            "Major hotels in Dammam city include Marriott Dammam, Sheraton Dammam Hotel & Convention Centre, Hyatt Regency Dammam, Radisson Blu Hotel Dammam, and Movenpick Hotel Dammam — all reachable within 25 minutes from DMM Airport."
          ],
          ar: [
            "الدمام عاصمة المنطقة الشرقية وإحدى المدن التجارية الكبرى في المملكة. تضم أحياء رئيسية: المرايكبة (الحي التجاري والمصرفي الرئيسي)، الراكة، الشعلة، وشارع الأمير بندر — الممر التجاري المركزي.",
            "يمتد كورنيش الدمام 45 كم على ساحل الخليج العربي بالحدائق والنوافير والمطاعم البحرية والممشيات المفتوحة. وتُعد جزيرة المرجان وجهة ترفيهية شاطئية شهيرة بالفنادق والمقاهي والترفيه العائلي.",
            "كبرى فنادق الدمام: ماريوت الدمام، شيراتون الدمام والمؤتمرات، حياة ريجنسي الدمام، راديسون بلو الدمام، وموفنبيك الدمام — جميعها تصل خلال 25 دقيقة من المطار."
          ]
        }
      },
      {
        title: { en: "Why Book a Private Taxi Instead of Airport Taxis", ar: "لماذا تحجز تاكسي خاصاً بدلاً من تاكسيات المطار" },
        body: {
          en: [
            "While public taxis are available at DMM Airport, pre-booked private transfers offer significant advantages: your driver meets you at the arrivals gate with a name board, airport parking is pre-included, and the fare is fixed with no meter surprises.",
            "We offer 60 minutes of complimentary waiting from your actual landing time, so there's no rush through immigration and baggage claim. Your pre-cooled vehicle is ready and waiting outside."
          ],
          ar: [
            "رغم توفر سيارات الأجرة العامة في مطار الدمام، تقدم التوصيلات الخاصة المحجوزة مسبقاً مزايا كبيرة: سائقك ينتظرك عند بوابة الوصول بلوحة اسمك، رسوم المواقف مشمولة مسبقاً، والأجرة ثابتة بدون مفاجآت العداد.",
            "نوفر 60 دقيقة انتظار مجاني من وقت الهبوط الفعلي، لذا لا داعي للتعجل في الهجرة واستلام الأمتعة. سيارتك المبردة مسبقاً جاهزة وتنتظرك."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport to Dammam City?", a: "The fare from DMM Airport to Dammam City Center starts from 120 SAR for a Toyota Camry Sedan and 220 SAR for a GMC Yukon SUV. All airport parking fees are included." },
        { q: "How long does it take from Dammam Airport to the city?", a: "Approximately 20 to 25 minutes under normal traffic. During peak hours (7–9 AM and 4–7 PM), allow 30–40 minutes." },
        { q: "Which Dammam hotels do you serve from the airport?", a: "We serve all Dammam city hotels including Marriott, Sheraton, Hyatt Regency, Radisson Blu, Movenpick, Crown Plaza, Intercontinental, and all other hotels and residential compounds." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من مطار الدمام إلى مدينة الدمام؟", a: "تبدأ التكلفة من ١٢٠ ريالاً للكامري و٢٢٠ ريالاً ليوكن. تشمل جميع رسوم مواقف المطار." },
        { q: "كم تستغرق الرحلة من مطار الدمام إلى المدينة؟", a: "حوالي ٢٠ إلى ٢٥ دقيقة في الأوقات العادية. في أوقات الذروة (٧-٩ ص و٤-٧ م) خصص ٣٠-٤٠ دقيقة." },
        { q: "ما الفنادق التي تخدمونها في الدمام من المطار؟", a: "نخدم جميع فنادق الدمام بما فيها ماريوت، شيراتون، حياة ريجنسي، راديسون بلو، موفنبيك، كراون بلازا، إنتركونتيننتال، وجميع الفنادق والمجمعات السكنية." }
      ]
    }
  },

  {
    slug: "dammam-airport-to-qatif",
    name: { en: "Dammam Airport to Qatif", ar: "تاكسي من مطار الدمام إلى القطيف" },
    metaTitle: {
      en: "Dammam Airport to Qatif Taxi | Tarout Island & City Transfers",
      ar: "تاكسي من مطار الدمام إلى القطيف | توصيل جزيرة تاروت والمدينة"
    },
    metaDescription: {
      en: "Private taxi from Dammam Airport (DMM) to Qatif City, Tarout Island, and Qatif Corniche. 55 km, 40–50 minutes. Flat rate, meet & greet, 24/7 service.",
      ar: "تاكسي خاص من مطار الدمام إلى مدينة القطيف، جزيرة تاروت، وكورنيش القطيف. 55 كم، 40-50 دقيقة. سعر ثابت، استقبال في الصالة، خدمة 24/7."
    },
    distance: { en: "55 km", ar: "٥٥ كم" },
    duration: { en: "40 - 50 Minutes", ar: "٤٠ إلى ٥٠ دقيقة" },
    basePrice: 180,
    pricing: { sedan: 180, suv: 320, van: 380, luxury: 800 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114490.0!2d50.0087!3d26.5654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e2b003f1e6c5%3A0xa4e4bbf2d3c1e0f7!2sQatif%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717100000002!5m2!1sen!2ssa",
    intro: {
      en: "Private taxi from Dammam Airport to Qatif — one of Saudi Arabia's oldest cities and home to the historic Tarout Island. Our 40–50 minute transfer serves Qatif city centre, Tarout Island, Qatif Corniche, and all residential and business locations.",
      ar: "تاكسي خاص من مطار الدمام إلى القطيف — إحدى أقدم مدن المملكة العربية السعودية وموطن جزيرة تاروت التاريخية. رحلتنا في 40-50 دقيقة تخدم مركز مدينة القطيف، جزيرة تاروت، كورنيش القطيف، وجميع المواقع السكنية والتجارية."
    },
    contentSections: [
      {
        title: { en: "Qatif & Tarout Island — History and Tourism", ar: "القطيف وجزيرة تاروت — التاريخ والسياحة" },
        body: {
          en: [
            "Qatif is one of the oldest continuously inhabited settlements in the Arabian Peninsula, with a history spanning more than 6,000 years. The city sits on the Arabian Gulf coast in the Eastern Province and is known for its date palm gardens, traditional architecture, and vibrant cultural heritage.",
            "Tarout Island — connected to the mainland by a short causeway — is a major archaeological site with Tarout Castle, ancient burial mounds from the Dilmun civilisation, and a traditional fishing harbour. The Saudi Ministry of Culture has listed Tarout as a candidate for UNESCO World Heritage status.",
            "The Qatif Corniche is a popular waterfront promenade with parks, restaurants, and views of the Arabian Gulf. The Qatif Old Town Souq offers traditional dates, local handicrafts, and fresh seafood."
          ],
          ar: [
            "القطيف من أقدم المستوطنات البشرية المتواصلة في شبه الجزيرة العربية بتاريخ يمتد أكثر من 6000 عام. تقع على ساحل الخليج العربي في المنطقة الشرقية وتشتهر بمزارع النخيل وعمارتها التقليدية وتراثها الثقافي الزاخر.",
            "جزيرة تاروت — المرتبطة بالبر عبر جسر قصير — موقع أثري كبير يضم قلعة تاروت وتلال جنائزية من حضارة دلمون وميناء صيد تقليدي. رشّحت وزارة الثقافة السعودية تاروت للتسجيل في قائمة التراث العالمي لليونسكو.",
            "كورنيش القطيف ممشى بحري شهير بالحدائق والمطاعم وإطلالات الخليج. يقدم سوق القطيف القديم التمور التقليدية والحرف اليدوية المحلية والمأكولات البحرية الطازجة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport to Qatif?", a: "The fare from DMM Airport to Qatif starts from 180 SAR for a Sedan and 320 SAR for a GMC Yukon SUV. All airport parking fees are included." },
        { q: "Can you take us to Tarout Island from Dammam Airport?", a: "Yes. We deliver directly to Tarout Island and all Qatif city locations. Tarout is approximately 55 km from DMM Airport." },
        { q: "Is Qatif worth visiting as a tourist?", a: "Yes. Qatif and Tarout Island are among the most historically significant sites in the Eastern Province. Tarout Castle, the ancient souq, and the archaeological sites make it a rewarding day trip from Dammam or Khobar." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من مطار الدمام إلى القطيف؟", a: "يبدأ من ١٨٠ ريالاً للسيدان و٣٢٠ ريالاً ليوكن. تشمل جميع رسوم مواقف المطار." },
        { q: "هل توصلون إلى جزيرة تاروت من مطار الدمام؟", a: "نعم، نوصل مباشرة إلى جزيرة تاروت وجميع مواقع القطيف. تاروت تبعد حوالي 55 كم عن مطار الدمام." },
        { q: "هل تستحق القطيف الزيارة السياحية؟", a: "نعم. القطيف وجزيرة تاروت من أهم المواقع التاريخية في المنطقة الشرقية. قلعة تاروت والسوق القديم والمواقع الأثرية تجعلها رحلة يوم ممتازة من الدمام أو الخبر." }
      ]
    }
  },

  {
    slug: "dammam-airport-to-ras-tanura",
    name: { en: "Dammam Airport to Ras Tanura", ar: "تاكسي من مطار الدمام إلى رأس تنورة" },
    metaTitle: {
      en: "Dammam Airport to Ras Tanura Taxi | Aramco & Industrial Transfers",
      ar: "تاكسي من مطار الدمام إلى رأس تنورة | توصيل أرامكو والمنطقة الصناعية"
    },
    metaDescription: {
      en: "Private taxi from Dammam Airport (DMM) to Ras Tanura — Saudi Aramco's largest oil terminal, residential compound, and refinery. 75 km, 55–65 minutes. Corporate accounts available.",
      ar: "تاكسي خاص من مطار الدمام إلى رأس تنورة — أكبر محطة نفط لأرامكو السعودية والمجمع السكني والمصفاة. 75 كم، 55-65 دقيقة. حسابات شركات متاحة."
    },
    distance: { en: "75 km", ar: "٧٥ كم" },
    duration: { en: "55 - 65 Minutes", ar: "٥٥ إلى ٦٥ دقيقة" },
    basePrice: 220,
    pricing: { sedan: 220, suv: 380, van: 450, luxury: 950 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114490.0!2d50.1622!3d26.6884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e2b003f1e000%3A0xa4e4bbf2d3c1e111!2sRas%20Tanura%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717100000003!5m2!1sen!2ssa",
    intro: {
      en: "Professional transfer from Dammam Airport (DMM) to Ras Tanura — home to Saudi Aramco's largest oil export terminal, refinery complex, and residential compound. Our experienced drivers are familiar with all Aramco compound gate procedures.",
      ar: "توصيل احترافي من مطار الدمام إلى رأس تنورة — موطن أكبر محطة تصدير نفط لأرامكو السعودية ومجمع المصفاة والمجمع السكني. سائقونا ذوو خبرة في جميع إجراءات بوابات مجمعات أرامكو."
    },
    contentSections: [
      {
        title: { en: "Ras Tanura — Aramco Oil Terminal & Compound", ar: "رأس تنورة — محطة أرامكو النفطية والمجمع السكني" },
        body: {
          en: [
            "Ras Tanura is a small city on the Arabian Gulf coast, approximately 75 km north of Dammam, and is home to Saudi Aramco's Ras Tanura Refinery and Oil Export Terminal — one of the largest oil export terminals in the world, capable of loading over 6 million barrels of crude oil per day.",
            "The Saudi Aramco Ras Tanura residential compound houses thousands of Aramco employees and their families in a well-maintained campus with schools, recreation facilities, and medical centres. Our drivers are experienced with the compound's security gate procedures.",
            "We also serve Ras Tanura Beach and the nearby city of Safwa for visitors and employees needing reliable airport transfers."
          ],
          ar: [
            "رأس تنورة مدينة صغيرة على ساحل الخليج العربي على بُعد حوالي 75 كم شمال الدمام، وتضم مصفاة رأس تنورة لأرامكو السعودية ومحطة تصدير النفط — إحدى أكبر محطات تصدير النفط في العالم بطاقة تحميل تفوق 6 ملايين برميل يومياً.",
            "يضم مجمع رأس تنورة السكني الخاص بأرامكو السعودية آلاف الموظفين وعائلاتهم في حرم منظم يشمل مدارس ومرافق ترفيهية ومراكز طبية. سائقونا على دراية بإجراءات بوابات الأمن.",
            "نخدم أيضاً شاطئ رأس تنورة ومدينة صفوى المجاورة للزوار والموظفين المحتاجين لتوصيل موثوق من المطار."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport to Ras Tanura?", a: "The fare starts from 220 SAR for a Sedan and 380 SAR for a GMC Yukon. All airport parking fees are included." },
        { q: "Can your drivers access Aramco Ras Tanura compound?", a: "Our drivers can drop off passengers at designated Aramco Ras Tanura compound gates. For access inside the compound, passengers should coordinate gate passes with Aramco security beforehand." },
        { q: "Do you offer corporate accounts for Ras Tanura Aramco employees?", a: "Yes. We offer monthly invoicing for corporate Aramco accounts in Ras Tanura. Contact our corporate desk via WhatsApp to set up your account." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من مطار الدمام إلى رأس تنورة؟", a: "يبدأ من ٢٢٠ ريالاً للسيدان و٣٨٠ ريالاً ليوكن. تشمل رسوم مواقف المطار." },
        { q: "هل يمكن لسائقيكم الدخول لمجمع أرامكو برأس تنورة؟", a: "يمكن توصيل الركاب إلى بوابات مجمع أرامكو المحددة. للدخول داخل المجمع، يجب التنسيق المسبق مع أمن أرامكو." },
        { q: "هل تقدمون حسابات شركات لموظفي أرامكو برأس تنورة؟", a: "نعم، نوفر فوترة شهرية لحسابات أرامكو الشركاتية في رأس تنورة. تواصل عبر الواتساب لإعداد حسابك." }
      ]
    }
  },

  {
    slug: "dammam-airport-to-half-moon-bay",
    name: { en: "Dammam Airport to Half Moon Bay", ar: "تاكسي من مطار الدمام إلى خليج نصف القمر" },
    metaTitle: {
      en: "Dammam Airport to Half Moon Bay Taxi | Beach Resort Transfer",
      ar: "تاكسي من مطار الدمام إلى خليج نصف القمر | توصيل المنتجع الشاطئي"
    },
    metaDescription: {
      en: "Private taxi from Dammam Airport (DMM) to Half Moon Bay beach resort (Khobar area). 85 km, 60–70 minutes. Perfect for weekend trips and family beach getaways from the Eastern Province.",
      ar: "تاكسي خاص من مطار الدمام إلى منتجع خليج نصف القمر الشاطئي (منطقة الخبر). 85 كم، 60-70 دقيقة. مثالي لرحلات نهاية الأسبوع والعطل الشاطئية العائلية من المنطقة الشرقية."
    },
    distance: { en: "85 km", ar: "٨٥ كم" },
    duration: { en: "60 - 70 Minutes", ar: "٦٠ إلى ٧٠ دقيقة" },
    basePrice: 250,
    pricing: { sedan: 250, suv: 420, van: 500, luxury: 1100 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114490.0!2d50.2200!3d26.1600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e3b003f1e222%3A0xa4e4bbf2d3c1e222!2sHalf%20Moon%20Bay%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717100000004!5m2!1sen!2ssa",
    intro: {
      en: "Direct taxi from Dammam Airport (DMM) to Half Moon Bay — the Eastern Province's most popular beach resort destination, located 35 km south of Al Khobar. Perfect for weekends, family holidays, and beach getaways straight from your arrival flight.",
      ar: "تاكسي مباشر من مطار الدمام إلى خليج نصف القمر — أشهر وجهة شاطئية في المنطقة الشرقية، تقع 35 كم جنوب الخبر. مثالي لعطلات نهاية الأسبوع والعطل العائلية والاسترخاء الشاطئي مباشرة من رحلتك."
    },
    contentSections: [
      {
        title: { en: "Half Moon Bay — Eastern Province's leading Beach Destination", ar: "خليج نصف القمر — الوجهة الشاطئية الأولى في المنطقة الشرقية" },
        body: {
          en: [
            "Half Moon Bay (Khobar Lakes area) is a natural crescent-shaped bay on the Arabian Gulf coast, approximately 35 km south of Al Khobar city. It is the Eastern Province's most visited beach resort and weekend getaway for residents of Dammam, Khobar, Jubail, and Dhahran.",
            "The area features several beach resorts, chalets, and recreational facilities including jet skiing, kayaking, and beachside dining. Half Moon Bay Resort is the main resort complex with private beaches, a hotel, and water sports.",
            "Our Family Van (Hyundai Staria — 8 passengers) is the ideal vehicle for group beach trips, with ample space for luggage, beach equipment, and full family comfort."
          ],
          ar: [
            "خليج نصف القمر (منطقة بحيرات الخبر) خليج طبيعي هلالي الشكل على ساحل الخليج العربي على بُعد حوالي 35 كم جنوب مدينة الخبر. هو الوجهة الشاطئية الأكثر زيارة في المنطقة الشرقية وملجأ نهاية الأسبوع لسكان الدمام والخبر والجبيل والظهران.",
            "يضم المنطقة عدة منتجعات شاطئية وشاليهات ومرافق ترفيهية بما فيها الجت سكي والكاياك ومطاعم على الشاطئ. منتجع خليج نصف القمر هو المجمع الرئيسي بالشواطئ الخاصة والفندق والرياضات المائية.",
            "سيارة الفان العائلية (هيونداي ستاريا — 8 ركاب) هي المركبة المثالية لرحلات الشاطئ الجماعية بمساحة واسعة للحقائب ومعدات الشاطئ وراحة الأسرة الكاملة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam Airport to Half Moon Bay?", a: "The fare starts from 250 SAR for a Sedan and 420 SAR for a GMC Yukon. For families or groups, the Hyundai Staria Van at 500 SAR offers the best value with space for up to 8 passengers and beach equipment." },
        { q: "Can we book a return trip from Half Moon Bay to the airport?", a: "Yes. We offer round-trip bookings with a return pickup from Half Moon Bay back to DMM Airport. Contact us on WhatsApp to lock in both legs." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من مطار الدمام إلى خليج نصف القمر؟", a: "يبدأ من ٢٥٠ ريالاً للسيدان و٤٢٠ ريالاً ليوكن. للعائلات والمجموعات، الستاريا فان ٥٠٠ ريال توفر أفضل قيمة مع مقاعد 8 ومساحة معدات الشاطئ." },
        { q: "هل يمكن حجز رحلة ذهاب وإياب من خليج نصف القمر للمطار؟", a: "نعم، نقدم حجوزات ذهاب وإياب مع استلام العودة من خليج نصف القمر لمطار الدمام. تواصل على الواتساب لتثبيت الرحلتين." }
      ]
    }
  },

  {
    slug: "dammam-to-mecca",
    name: { en: "Dammam to Mecca Taxi", ar: "تاكسي من الدمام إلى مكة المكرمة" },
    metaTitle: {
      en: "Dammam to Mecca Taxi | Umrah & Hajj Private Transfer",
      ar: "تاكسي من الدمام إلى مكة المكرمة | توصيل خاص للعمرة والحج"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Mecca (Makkah) for Umrah and Hajj. Direct transfer to Masjid al-Haram, Mina, Arafat, Aziziah, and all Makkah hotels. 1,280 km with experienced drivers.",
      ar: "تاكسي خاص من الدمام إلى مكة المكرمة للعمرة والحج. توصيل مباشر للمسجد الحرام، منى، عرفات، العزيزية، وجميع فنادق مكة. 1280 كم مع سائقين ذوي خبرة."
    },
    distance: { en: "1,280 km", ar: "١٢٨٠ كم" },
    duration: { en: "12 - 13 Hours", ar: "١٢ إلى ١٣ ساعة" },
    basePrice: 4800,
    pricing: { sedan: 4800, suv: 6800, van: 7800, luxury: 13000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813470.0!2d39.8262!3d21.3891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818db5%3A0xcb57c7a7b2cf3c5!2sMecca%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717100000005!5m2!1sen!2ssa",
    intro: {
      en: "Private Umrah and Hajj taxi from Dammam to Mecca Al-Mukarramah — the holiest city in Islam. Our 1,280 km transfer via Riyadh is operated by experienced long-distance drivers who understand the spiritual significance of your journey and deliver you directly to the Grand Mosque area, Mina, or Aziziah.",
      ar: "تاكسي عمرة وحج خاص من الدمام إلى مكة المكرمة — أقدس مدينة في الإسلام. رحلتنا 1280 كم عبر الرياض يقودها سائقون ذوو خبرة في المسافات الطويلة يدركون الأهمية الروحانية لرحلتك ويوصلونك مباشرة إلى منطقة المسجد الحرام أو منى أو العزيزية."
    },
    contentSections: [
      {
        title: { en: "Mecca — Sacred Sites & Umrah Transfers", ar: "مكة المكرمة — المواقع المقدسة ورحلات العمرة" },
        body: {
          en: [
            "Mecca (Makkah Al-Mukarramah) is the holiest city in Islam, obligatory for pilgrimage (Hajj) once in a lifetime for able-bodied Muslims, and visited for Umrah throughout the year. Entry to Mecca is restricted to Muslims only.",
            "Key religious sites include Masjid al-Haram (the Grand Mosque surrounding the Kaaba — the most visited place on Earth), Jabal al-Nour (Cave of Hira), Jabal Thawr, Mina (city of tents during Hajj season), and the plains of Arafat.",
            "We deliver to all areas of Mecca including the Grand Mosque precincts, Aziziah, Al Shoqiyah, Mina, and all major Makkah hotels (Hilton Makkah, Swissotel Al Maqam, Mövenpick Hajar Tower, and others in the Abraj Al-Bait Towers complex)."
          ],
          ar: [
            "مكة المكرمة أقدس مدينة في الإسلام، فريضة الحج مرة في العمر لكل مسلم مستطيع، وتُزار للعمرة على مدار العام. يقتصر الدخول إلى مكة على المسلمين فقط.",
            "المواقع الدينية الرئيسية: المسجد الحرام (الجامع الكبير المحيط بالكعبة المشرفة — أكثر أماكن الأرض زيارة)، جبل النور (غار حراء)، جبل ثور، منى (مدينة الخيام في موسم الحج)، وسهل عرفات.",
            "نوصل إلى جميع مناطق مكة بما فيها الأروقة المحيطة بالمسجد الحرام، العزيزية، الشوقية، منى، وجميع فنادق مكة الكبرى (هيلتون مكة، سويسوتيل المقام، موفنبيك هاجر، وغيرها في مجمع أبراج البيت)."
          ]
        }
      },
      {
        title: { en: "Dammam to Mecca Route & Rest Stops", ar: "مسار الدمام إلى مكة ومحطات الراحة" },
        body: {
          en: [
            "The Dammam–Mecca highway route covers 1,280 km via Riyadh, then westward through Taif mountain road or directly via Al Hada. Travel time is 12–13 hours including scheduled rest stops every 3–4 hours.",
            "Our vehicles for this route are fully prepared: pre-trip safety inspection, multi-zone AC, high-speed Wi-Fi, USB charging docks, prayer time alerts, and complimentary Zamzam water where available.",
            "We can arrange pickup directly from your home, office, or Dammam Airport (DMM) and deliver straight to your hotel's main entrance or the designated drop-off zones near Masjid al-Haram."
          ],
          ar: [
            "يغطي طريق الدمام-مكة 1280 كم عبر الرياض، ثم غرباً عبر طريق الطائف الجبلي أو مباشرة عبر الهدا. وقت السفر 12-13 ساعة مع محطات راحة منتظمة كل 3-4 ساعات.",
            "سياراتنا على هذا المسار جاهزة بالكامل: فحص أمان قبل الرحلة، تكييف متعدد المناطق، واي فاي سريع، شواحن USB، تنبيهات أوقات الصلاة، وماء زمزم مجاناً حيث متاح.",
            "يمكننا الاستلام مباشرة من منزلك أو مكتبك أو مطار الدمام (DMM) والتوصيل مباشرة إلى المدخل الرئيسي لفندقك أو المناطق المخصصة للنزول بجوار المسجد الحرام."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Mecca?", a: "Dammam to Mecca starts from 4,800 SAR for a Toyota Camry Sedan and 6,800 SAR for a GMC Yukon SUV. For families up to 8 passengers, the Hyundai Staria Van costs 7,800 SAR." },
        { q: "How long is the drive from Dammam to Mecca?", a: "Approximately 12 to 13 hours including rest stops. The route covers 1,280 km via Riyadh." },
        { q: "Can non-Muslims travel to Mecca?", a: "No. Entry to the Holy City of Mecca is restricted to Muslims only. Non-Muslim passengers can travel to Jeddah or Taif, which are located nearby." },
        { q: "Can you drop us directly at Masjid al-Haram (Grand Mosque)?", a: "Yes. We deliver to the designated drop-off zones surrounding Masjid al-Haram, all Abraj Al-Bait hotels, Aziziah, Al Shoqiyah, Mina, and all other Makkah locations." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى مكة؟", a: "يبدأ من ٤٨٠٠ ريالاً للكامري و٦٨٠٠ ريالاً ليوكن. للعائلات حتى 8 ركاب، الستاريا فان ٧٨٠٠ ريال." },
        { q: "كم تستغرق الرحلة من الدمام إلى مكة؟", a: "حوالي ١٢ إلى ١٣ ساعة مع توقفات الراحة. الطريق ١٢٨٠ كم عبر الرياض." },
        { q: "هل يمكن لغير المسلمين السفر إلى مكة؟", a: "لا. يقتصر الدخول إلى مكة المكرمة على المسلمين فقط. يمكن لغير المسلمين السفر إلى جدة أو الطائف المجاورتين." },
        { q: "هل توصلون مباشرة إلى المسجد الحرام؟", a: "نعم، نوصل إلى مناطق التوقف المحددة حول المسجد الحرام، وجميع فنادق أبراج البيت، والعزيزية والشوقية ومنى وجميع مواقع مكة." }
      ]
    }
  },

  {
    slug: "dammam-to-qassim",
    name: { en: "Dammam to Qassim Taxi", ar: "تاكسي من الدمام إلى القصيم" },
    metaTitle: {
      en: "Dammam to Qassim Taxi | Buraydah & Unayzah Intercity Transfer",
      ar: "تاكسي من الدمام إلى القصيم | توصيل بريدة وعنيزة بين المدن"
    },
    metaDescription: {
      en: "Direct private taxi from Dammam to Qassim Region — Buraydah, Unayzah, and Al Rass. 500 km, 5–6 hours on the Saudi highway network. Professional long-distance drivers.",
      ar: "تاكسي خاص مباشر من الدمام إلى منطقة القصيم — بريدة وعنيزة والرس. 500 كم، 5-6 ساعات على الطريق السريع السعودي. سائقون محترفون للمسافات الطويلة."
    },
    distance: { en: "500 km", ar: "٥٠٠ كم" },
    duration: { en: "5 - 6 Hours", ar: "٥ إلى ٦ ساعات" },
    basePrice: 1800,
    pricing: { sedan: 1800, suv: 2800, van: 3200, luxury: 6000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813470.0!2d43.9742!3d26.3260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f9b93b6a2e4cd%3A0x2b17b3e2d4c1f0a1!2sBuraydah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717100000006!5m2!1sen!2ssa",
    intro: {
      en: "Private intercity taxi from Dammam to Qassim — Saudi Arabia's agricultural heartland and home to Buraydah, Unayzah, and Al Rass. A 500 km highway journey through central Saudi Arabia, covering the Eastern Province to Najd region.",
      ar: "تاكسي بين المدن من الدمام إلى القصيم — قلب المملكة الزراعي وموطن بريدة وعنيزة والرس. رحلة 500 كم على الطريق السريع عبر وسط المملكة، من المنطقة الشرقية إلى منطقة نجد."
    },
    contentSections: [
      {
        title: { en: "Qassim Region — Buraydah, Dates Capital of the World", ar: "منطقة القصيم — بريدة، عاصمة التمور في العالم" },
        body: {
          en: [
            "Qassim Region is Saudi Arabia's second most populous region after Riyadh, centred on the cities of Buraydah (the regional capital) and Unayzah. The region is famous as the world's largest date palm-producing area — Buraydah hosts the Buraydah Dates Festival annually, one of the largest date markets in the world.",
            "Key destinations in Qassim include: Buraydah city centre, Unayzah Old Town (one of Arabia's most charming heritage cities), Al Rass city, Qassim University, and the King Saud University Qassim campus.",
            "The route from Dammam to Qassim follows the Eastern Ring Road through Riyadh then northwest on the Qassim Highway — a well-maintained, dual-carriageway route."
          ],
          ar: [
            "منطقة القصيم ثاني أكثر مناطق المملكة سكاناً بعد الرياض، تتمحور حول مدينتي بريدة (العاصمة الإقليمية) وعنيزة. تشتهر المنطقة بأنها أكبر منطقة إنتاج تمور في العالم — تستضيف بريدة مهرجان بريدة للتمور سنوياً، أحد أكبر أسواق التمور عالمياً.",
            "أبرز الوجهات في القصيم: مركز مدينة بريدة، عنيزة القديمة (من أجمل مدن التراث العربي)، مدينة الرس، جامعة القصيم، وحرم جامعة الملك سعود بالقصيم.",
            "يتبع الطريق من الدمام إلى القصيم الطريق الدائري الشرقي عبر الرياض ثم شمال غرباً على طريق القصيم السريع — مسار ممتاز ثنائي الاتجاه."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Qassim?", a: "Dammam to Qassim (Buraydah) starts from 1,800 SAR for a Sedan and 2,800 SAR for a GMC Yukon SUV." },
        { q: "How long does Dammam to Buraydah take by road?", a: "Approximately 5 to 6 hours on the Saudi highway network, covering 500 km via Riyadh direction then northwest to Qassim." },
        { q: "Do you serve Unayzah and Al Rass as well as Buraydah?", a: "Yes. We deliver to all cities in Qassim Region including Buraydah, Unayzah, Al Rass, Al Badayea, and all surrounding areas." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى القصيم؟", a: "يبدأ من ١٨٠٠ ريالاً للسيدان و٢٨٠٠ ريالاً ليوكن." },
        { q: "كم تستغرق رحلة الدمام إلى بريدة بالسيارة؟", a: "حوالي ٥ إلى ٦ ساعات، 500 كم عبر الرياض ثم شمال غرباً للقصيم." },
        { q: "هل تخدمون عنيزة والرس إضافة لبريدة؟", a: "نعم، نوصل إلى جميع مدن منطقة القصيم بما فيها بريدة وعنيزة والرس والبدائع وجميع المناطق المحيطة." }
      ]
    }
  },

  // ─── COMPREHENSIVE SAUDI + UAE COVERAGE ──────────────────────

  {
    slug: "dammam-to-taif",
    name: { en: "Dammam to Taif Taxi", ar: "تاكسي من الدمام إلى الطائف" },
    metaTitle: {
      en: "Dammam to Taif Taxi | City of Roses Mountain Transfer",
      ar: "تاكسي من الدمام إلى الطائف | مدينة الورد والجبال"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Taif — Al Shafa, Al Hada mountain resorts, Taif Roses, Souq Okaz, and Taif Regional Airport (TIF). 850 km highway transfer with experienced long-distance drivers.",
      ar: "تاكسي خاص من الدمام إلى الطائف — الشفا والهدا والمنتجعات الجبلية، ورد الطائف، سوق عكاظ، ومطار الطائف. 850 كم مع سائقين محترفين."
    },
    distance: { en: "850 km", ar: "٨٥٠ كم" },
    duration: { en: "8 - 9 Hours", ar: "٨ إلى ٩ ساعات" },
    basePrice: 3200,
    pricing: { sedan: 3200, suv: 4500, van: 5200, luxury: 8500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0!2d40.4168!3d21.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e979c93e3d27cd%3A0x6db7d7ef47ed65c1!2sTaif%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717200000001!5m2!1sen!2ssa",
    intro: {
      en: "Travel from Dammam to Taif — Saudi Arabia's beloved 'City of Roses' perched at 1,800 metres above sea level in the Hejaz Mountains. Escape the Eastern Province heat for Taif's cool mountain air, world-famous roses, and stunning Al Shafa and Al Hada resorts.",
      ar: "سافر من الدمام إلى الطائف — 'مدينة الورد' المحبوبة على ارتفاع ١٨٠٠ متر في جبال الحجاز. اهرب من حرارة المنطقة الشرقية إلى هواء الطائف الجبلي المنعش وورده العالمي الشهير ومنتجعات الشفا والهدا."
    },
    contentSections: [
      {
        title: { en: "Taif — Saudi Arabia's Mountain Resort City", ar: "الطائف — المدينة الجبلية والمنتجع الصيفي للمملكة" },
        body: {
          en: [
            "Taif (الطائف) is Saudi Arabia's famous summer retreat, renowned globally for producing 70% of the world's rose oil used in fine perfumes and oud. The city sits at 1,800 metres in the Hejaz Mountains, giving it a cool climate that contrasts with the heat of the surrounding lowlands.",
            "Top attractions include Al Shafa Mountain Resort (2,200m altitude), Al Hada Village and Cable Car, Al Rudaf Park, Souq Okaz (ancient Arabian poetry market recently revived), Shubra Palace Museum, Al-Taif Zoo, and the famous Taif Roses Festival held every spring.",
            "Taif Regional Airport (TIF) is also accessible directly from Dammam for airport-to-airport connections."
          ],
          ar: [
            "الطائف أشهر منتجع صيفي في المملكة العربية السعودية، وتشتهر عالمياً بإنتاج 70% من زيت الورد العالمي المستخدم في أرقى العطور والعود. تقع على ارتفاع 1800 متر في جبال الحجاز بمناخ بارد منعش.",
            "أبرز معالمها: منتجع الشفا الجبلي (2200م)، قرية الهدا والتلفريك، حديقة الردف، سوق عكاظ التاريخي، قصر شبرا المتحف، حديقة حيوان الطائف، ومهرجان ورد الطائف الربيعي الشهير.",
            "مطار الطائف الإقليمي (TIF) متاح للتوصيل المباشر من الدمام لرحلات الاتصال."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Taif?", a: "Dammam to Taif starts from 3,200 SAR for a Sedan and 4,500 SAR for a GMC Yukon SUV. No border fees — domestic Saudi route." },
        { q: "How long does Dammam to Taif take by road?", a: "Approximately 8 to 9 hours covering 850 km via the Saudi highway network through Riyadh then towards Mecca/Taif." },
        { q: "What is Taif famous for?", a: "Taif is famous for its cool mountain climate (1,800m altitude), the world-renowned Taif Roses used in luxury perfumes, Al Shafa and Al Hada mountain resorts, Souq Okaz ancient market, and being a leading Saudi summer destination." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى الطائف؟", a: "يبدأ من ٣٢٠٠ ريالاً للسيدان و٤٥٠٠ ريالاً ليوكن. لا رسوم حدود — طريق داخلي سعودي." },
        { q: "كم تستغرق الرحلة من الدمام إلى الطائف؟", a: "حوالي ٨ إلى ٩ ساعات، ٨٥٠ كم عبر الرياض باتجاه مكة والطائف." },
        { q: "بماذا تشتهر مدينة الطائف؟", a: "تشتهر الطائف بمناخها الجبلي المعتدل (١٨٠٠م)، ورودها العالمية المستخدمة في أفخر العطور، منتجعات الشفا والهدا، سوق عكاظ، وكونها المنتجع الصيفي الأول بالمملكة." }
      ]
    }
  },

  {
    slug: "dammam-to-yanbu",
    name: { en: "Dammam to Yanbu Taxi", ar: "تاكسي من الدمام إلى ينبع" },
    metaTitle: {
      en: "Dammam to Yanbu Taxi | Red Sea Port & Industrial City Transfer",
      ar: "تاكسي من الدمام إلى ينبع | مدينة الصناعة والبحر الأحمر"
    },
    metaDescription: {
      en: "Direct private taxi from Dammam to Yanbu — Yanbu Industrial City (Royal Commission), Yanbu Corniche, Red Sea diving sites, and Yanbu Airport (YNB). 1,200 km professional transfer.",
      ar: "تاكسي خاص مباشر من الدمام إلى ينبع — مدينة ينبع الصناعية، كورنيش ينبع، مواقع غوص البحر الأحمر، ومطار ينبع. ١٢٠٠ كم مع سائقين محترفين."
    },
    distance: { en: "1,200 km", ar: "١٢٠٠ كم" },
    duration: { en: "11 - 12 Hours", ar: "١١ إلى ١٢ ساعة" },
    basePrice: 4500,
    pricing: { sedan: 4500, suv: 6200, van: 7200, luxury: 12000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0!2d38.0618!3d24.0894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a3b93a56d87a6f%3A0x6db7d7ef47ed65c2!2sYanbu%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717200000002!5m2!1sen!2ssa",
    intro: {
      en: "Private transfer from Dammam to Yanbu (Yanbu al-Bahr) — Saudi Arabia's second major Red Sea port city and a critical industrial hub with refineries and petrochemical plants operated by Saudi Aramco and SABIC under the Royal Commission for Jubail and Yanbu (RCJY).",
      ar: "توصيل خاص من الدمام إلى ينبع (ينبع البحر) — ثاني موانئ البحر الأحمر السعودية وأحد مراكز الصناعة الكبرى بمصافي البترول والصناعات البتروكيماوية لأرامكو وسابك تحت الهيئة الملكية."
    },
    contentSections: [
      {
        title: { en: "Yanbu Industrial City & Red Sea Coastline", ar: "مدينة ينبع الصناعية وساحل البحر الأحمر" },
        body: {
          en: [
            "Yanbu Industrial City is Saudi Arabia's second-largest industrial city after Jubail, administered by the Royal Commission for Jubail and Yanbu (RCJY). The city hosts Saudi Aramco's Yanbu export terminal, major petrochemical plants, and one of the world's largest oil refineries (Yasref and Petro Rabigh).",
            "Beyond its industrial importance, Yanbu has a beautiful Red Sea coastline with clear waters ideal for snorkelling, diving, and beach tourism. The Yanbu Corniche is a popular waterfront promenade, and the Old Yanbu Historical Town preserves traditional Hejazi architecture.",
            "Yanbu Airport (YNB) is accessible directly from Dammam for airport-to-airport transfers."
          ],
          ar: [
            "ينبع الصناعية ثاني أكبر مدينة صناعية في المملكة بعد الجبيل، تديرها الهيئة الملكية للجبيل وينبع. تستضيف محطة تصدير أرامكو ومصافي البتروكيماويات الكبرى (ياسرف وبترو رابغ).",
            "إلى جانب أهميتها الصناعية، تمتلك ينبع ساحلاً على البحر الأحمر بمياه صافية مثالية للغوص والسياحة الشاطئية. كورنيش ينبع منتزه بحري شهير، وينبع البلد التاريخية تحفظ العمارة الحجازية التقليدية.",
            "مطار ينبع (YNB) متاح مباشرة من الدمام لتوصيل المطارات."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Yanbu?", a: "Dammam to Yanbu starts from 4,500 SAR for a Sedan and 6,200 SAR for a GMC Yukon. No border fees — domestic Saudi route." },
        { q: "How long does the drive from Dammam to Yanbu take?", a: "Approximately 11 to 12 hours, covering 1,200 km via Riyadh and the Madinah-Yanbu highway." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى ينبع؟", a: "يبدأ من ٤٥٠٠ ريالاً للسيدان و٦٢٠٠ ريالاً ليوكن. لا رسوم حدود." },
        { q: "كم تستغرق الرحلة من الدمام إلى ينبع؟", a: "حوالي ١١ إلى ١٢ ساعة، ١٢٠٠ كم عبر الرياض وطريق المدينة-ينبع." }
      ]
    }
  },

  {
    slug: "dammam-to-abha",
    name: { en: "Dammam to Abha Taxi", ar: "تاكسي من الدمام إلى أبها" },
    metaTitle: {
      en: "Dammam to Abha Taxi | Asir Mountain Tourism Transfer",
      ar: "تاكسي من الدمام إلى أبها | توصيل السياحة الجبلية بعسير"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Abha — Al Soudah Park, Green Mountain, Abha Cable Car, Asir National Park, and Abha International Airport (AHB). 1,400 km mountain transfer to Saudi Arabia's coolest city.",
      ar: "تاكسي خاص من الدمام إلى أبها — منتزه السودة، الجبل الأخضر، تلفريك أبها، المنتزه الوطني بعسير، ومطار أبها الدولي. ١٤٠٠ كم إلى أبرد مدن المملكة."
    },
    distance: { en: "1,400 km", ar: "١٤٠٠ كم" },
    duration: { en: "13 - 14 Hours", ar: "١٣ إلى ١٤ ساعة" },
    basePrice: 5200,
    pricing: { sedan: 5200, suv: 7200, van: 8200, luxury: 13500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0!2d42.5053!3d18.2164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb34c8ab3e7f2d%3A0x6db7d7ef47ed65c3!2sAbha%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717200000003!5m2!1sen!2ssa",
    intro: {
      en: "Journey from Dammam to Abha — capital of Asir Province and Saudi Arabia's most scenic mountain city. Sitting at 2,200 metres, Abha enjoys a cool, misty climate year-round and is a leading domestic tourism destination known for Al Soudah Park, cable cars, and traditional Asiri heritage.",
      ar: "رحلة من الدمام إلى أبها — عاصمة منطقة عسير وأكثر مدن المملكة جمالاً الجبلية. على ارتفاع ٢٢٠٠ متر، تتمتع أبها بمناخ بارد ضبابي طوال العام وهي وجهة سياحية داخلية متميزة تشتهر بمنتزه السودة والتلفريك والتراث العسيري."
    },
    contentSections: [
      {
        title: { en: "Abha — Saudi Arabia's Green Mountain City", ar: "أبها — مدينة المملكة الجبلية الخضراء" },
        body: {
          en: [
            "Abha (أبها) sits at 2,200 metres in the Asir Mountains, making it one of the coolest and most scenic cities in the Kingdom. The city receives significant rainfall and is covered in lush greenery — a rarity in Saudi Arabia — earning it the nickname 'Bride of the South' (عروس الجنوب).",
            "Al Soudah Park, located 30 km from Abha at 2,800 metres, is the highest point in Saudi Arabia and home to the spectacular Al Soudah cable car offering breathtaking mountain views. Other key attractions include the Green Mountain (Jabal Akhdar) with its illuminated terraced park, Abha Dam Lake, Heritage Village, and Asir National Park.",
            "Abha International Airport (AHB) is served directly from Dammam for airport-to-airport connections."
          ],
          ar: [
            "تقع أبها على ارتفاع 2200 متر في جبال عسير، وهي من أبرد وأجمل مدن المملكة. تحظى بأمطار وفيرة وخضرة نادرة في المملكة، مما أكسبها لقب 'عروس الجنوب'.",
            "منتزه السودة على بُعد 30 كم من أبها عند ارتفاع 2800م هو أعلى نقطة في المملكة ويضم تلفريك السودة الرائع. ومن معالمها الأخرى: الجبل الأخضر بحدائقه المدرجة المضاءة، بحيرة سد أبها، قرية التراث، والمنتزه الوطني بعسير.",
            "مطار أبها الدولي (AHB) متاح للتوصيل المباشر من الدمام."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Abha?", a: "Dammam to Abha starts from 5,200 SAR for a Sedan and 7,200 SAR for a GMC Yukon SUV." },
        { q: "Why is Abha a popular tourist destination?", a: "Abha is Saudi Arabia's leading mountain resort — at 2,200m altitude with cool year-round weather, stunning mountain scenery, Al Soudah Park cable car, green terraced valleys, and rich Asiri cultural heritage. It's completely different from any other Saudi city." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى أبها؟", a: "يبدأ من ٥٢٠٠ ريالاً للسيدان و٧٢٠٠ ريالاً ليوكن." },
        { q: "لماذا تعد أبها وجهة سياحية مميزة؟", a: "أبها منتجع جبلي على ارتفاع ٢٢٠٠م بمناخ بارد طوال العام، مناظر جبلية خلابة، تلفريك السودة، أودية خضراء مدرجة، وتراث عسيري أصيل — مختلفة تماماً عن أي مدينة سعودية أخرى." }
      ]
    }
  },

  {
    slug: "dammam-to-tabuk",
    name: { en: "Dammam to Tabuk Taxi", ar: "تاكسي من الدمام إلى تبوك" },
    metaTitle: {
      en: "Dammam to Tabuk Taxi | NEOM, AlUla & Red Sea Transfers",
      ar: "تاكسي من الدمام إلى تبوك | توصيل نيوم والعُلا والبحر الأحمر"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Tabuk — gateway to NEOM, Wadi Disah, Umluj Red Sea beaches, and Prince Sultan bin Abdulaziz Airport (TUU). 1,500 km northwest Saudi Arabia transfer.",
      ar: "تاكسي خاص من الدمام إلى تبوك — بوابة نيوم، وادي الدسه، شواطئ أملج بالبحر الأحمر، ومطار الأمير سلطان. ١٥٠٠ كم شمال غرب المملكة."
    },
    distance: { en: "1,500 km", ar: "١٥٠٠ كم" },
    duration: { en: "13 - 15 Hours", ar: "١٣ إلى ١٥ ساعة" },
    basePrice: 5500,
    pricing: { sedan: 5500, suv: 7500, van: 8500, luxury: 14000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0!2d36.5662!3d28.3838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a2de1e51ba73b7%3A0x6db7d7ef47ed65c4!2sTabuk%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717200000004!5m2!1sen!2ssa",
    intro: {
      en: "Transfer from Dammam to Tabuk — the gateway to Saudi Arabia's most ambitious projects including NEOM (the futuristic megacity), the ancient Nabataean wonders of AlUla and Hegra, and stunning Red Sea coastal towns like Umluj and Sharma.",
      ar: "توصيل من الدمام إلى تبوك — بوابة أضخم مشاريع المملكة بما فيها نيوم (المدينة المستقبلية)، عجائب الأنباط في العُلا والحِجر، ومدن الساحل الجميلة على البحر الأحمر كأملج وشرما."
    },
    contentSections: [
      {
        title: { en: "Tabuk — Gateway to NEOM & Northwest Saudi Arabia", ar: "تبوك — بوابة نيوم وشمال غرب المملكة" },
        body: {
          en: [
            "Tabuk Region is home to some of Saudi Arabia's most spectacular landscapes and Vision 2030 flagship projects. NEOM — the $500 billion futuristic megacity being built on the Red Sea coast — is located within Tabuk Region, making Tabuk the logistics hub for NEOM-related business travel.",
            "Wadi Disah (Valley of the Inscriptions) is a dramatic sandstone canyon with ancient rock art. Umluj, known as the 'Maldives of Saudi Arabia', offers pristine Red Sea beaches and clear turquoise waters. AlUla — home to the UNESCO World Heritage Hegra Nabataean tombs — is approximately 300 km south of Tabuk.",
            "Prince Sultan bin Abdulaziz Airport (TUU) in Tabuk is served directly from Dammam."
          ],
          ar: [
            "منطقة تبوك موطن بعض أروع مناظر المملكة الطبيعية ومشاريع رؤية 2030 الكبرى. نيوم — المدينة المستقبلية بـ500 مليار دولار على ساحل البحر الأحمر — تقع في نطاق منطقة تبوك، مما يجعلها مركز لوجستي للسفر التجاري.",
            "وادي الدسه مضيق رملي درامي بنقوش صخرية أثرية. أملج 'مالديف السعودية' بشواطئ بحر أحمر بكر ومياه فيروزية صافية. والعُلا — موطن مقابر الأنباط في الحِجر (يونسكو) — على بُعد 300 كم جنوب تبوك.",
            "مطار الأمير سلطان بن عبدالعزيز (TUU) بتبوك متاح مباشرة من الدمام."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Tabuk?", a: "Dammam to Tabuk starts from 5,500 SAR for a Sedan and 7,500 SAR for a GMC Yukon. No border fees — domestic Saudi route." },
        { q: "Can you take us to NEOM from Dammam?", a: "Yes. We provide transfers from Dammam to the Tabuk Region and NEOM access points. Contact us on WhatsApp for specific NEOM site requirements and current access routes." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى تبوك؟", a: "يبدأ من ٥٥٠٠ ريالاً للسيدان و٧٥٠٠ ريالاً ليوكن. لا رسوم حدود." },
        { q: "هل توصلون إلى نيوم من الدمام؟", a: "نعم، نقدم توصيلاً من الدمام إلى منطقة تبوك ونقاط الوصول لنيوم. تواصل عبر الواتساب للمتطلبات الخاصة بالموقع." }
      ]
    }
  },

  {
    slug: "dammam-to-hail",
    name: { en: "Dammam to Hail Taxi", ar: "تاكسي من الدمام إلى حائل" },
    metaTitle: {
      en: "Dammam to Hail Taxi | North Saudi Arabia Intercity Transfer",
      ar: "تاكسي من الدمام إلى حائل | توصيل شمال المملكة"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Hail — Jubbah Rock Art (UNESCO), Hail Castle, Samra Ancient City, and Ha'il Regional Airport (HAS). 800 km central Saudi Arabia highway transfer.",
      ar: "تاكسي خاص من الدمام إلى حائل — نقوش جبة الصخرية (يونسكو)، قلعة حائل، مدينة سمراء الأثرية، ومطار حائل. ٨٠٠ كم وسط المملكة."
    },
    distance: { en: "800 km", ar: "٨٠٠ كم" },
    duration: { en: "7 - 8 Hours", ar: "٧ إلى ٨ ساعات" },
    basePrice: 3000,
    pricing: { sedan: 3000, suv: 4200, van: 4900, luxury: 8000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0!2d41.6867!3d27.5219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157ef7b3a1f823cd%3A0x6db7d7ef47ed65c5!2sHail%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1717200000005!5m2!1sen!2ssa",
    intro: {
      en: "Direct taxi from Dammam to Hail — a historic north-central Saudi city known for its remarkable prehistoric rock art at Jubbah (UNESCO World Heritage site), ancient camel trading routes, and the dramatic landscapes of the Nafud Desert.",
      ar: "تاكسي مباشر من الدمام إلى حائل — مدينة تاريخية في وسط شمال المملكة تشتهر بنقوشها الصخرية قبل التاريخية في جبة (التراث العالمي لليونسكو) وطرق تجارة الإبل القديمة وتضاريس صحراء النفود."
    },
    contentSections: [
      {
        title: { en: "Hail — Gateway to Nafud Desert & Rock Art Heritage", ar: "حائل — بوابة صحراء النفود والتراث الصخري" },
        body: {
          en: [
            "Hail (حائل) is the capital of Ha'il Province in north-central Saudi Arabia, serving as the historical gateway to the Great Nafud Desert. The city is famous for being the home of the powerful Al Rashid dynasty and for producing some of Saudi Arabia's finest dates and finest falconry birds.",
            "Jubbah Rock Art (100 km north of Hail) is a UNESCO World Heritage Site featuring thousands of rock engravings spanning 10,000 years of human history — from prehistoric animals and ancient camel caravans to early Arabic inscriptions.",
            "Ha'il Regional Airport (HAS) provides connections from Dammam for airport-to-airport transfers."
          ],
          ar: [
            "حائل عاصمة منطقة حائل في وسط شمال المملكة، البوابة التاريخية لصحراء النفود الكبرى. تشتهر بكونها موطن أسرة آل رشيد القوية وبأجود تمورها وأعرق طيور الصقور.",
            "نقوش جبة الصخرية (100 كم شمال حائل) موقع تراث عالمي لليونسكو يضم آلاف النقوش الصخرية عبر 10000 سنة من التاريخ البشري — من الحيوانات قبل التاريخية إلى القوافل والنقوش العربية القديمة.",
            "مطار حائل الإقليمي (HAS) متاح للتوصيل من الدمام."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Hail?", a: "Dammam to Hail starts from 3,000 SAR for a Sedan and 4,200 SAR for a GMC Yukon. No border fees." },
        { q: "How long does Dammam to Hail take by road?", a: "Approximately 7 to 8 hours covering 800 km on the Saudi highway network." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى حائل؟", a: "يبدأ من ٣٠٠٠ ريالاً للسيدان و٤٢٠٠ ريالاً ليوكن." },
        { q: "كم تستغرق الرحلة من الدمام إلى حائل؟", a: "حوالي ٧ إلى ٨ ساعات، ٨٠٠ كم على الطرق السريعة السعودية." }
      ]
    }
  },

  {
    slug: "dammam-to-ajman",
    name: { en: "Dammam to Ajman Taxi", ar: "تاكسي من الدمام إلى عجمان" },
    metaTitle: {
      en: "Dammam to Ajman Taxi | UAE Emirate Transfer",
      ar: "تاكسي من الدمام إلى عجمان | توصيل إمارة عجمان"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Ajman, UAE — Ajman Corniche, Ajman Museum, Al Zorah Nature Reserve, and easy connection to Sharjah and Dubai. Cross-border transfer via Al Batha border.",
      ar: "تاكسي خاص من الدمام إلى عجمان بالإمارات — كورنيش عجمان، متحف عجمان، محمية الزوراء الطبيعية، وقرب الشارقة ودبي. عبور منفذ البطحاء."
    },
    distance: { en: "1,000 km", ar: "١٠٠٠ كم" },
    duration: { en: "9.5 - 10.5 Hours", ar: "٩.٥ إلى ١٠.٥ ساعات" },
    basePrice: 3800,
    pricing: { sedan: 3800, suv: 5200, van: 6000, luxury: 9500 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0!2d55.5136!3d25.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef581cf88d58d37%3A0x6db7d7ef47ed65c6!2sAjman%20UAE!5e0!3m2!1sen!2ssa!4v1717200000006!5m2!1sen!2ssa",
    intro: {
      en: "Direct transfer from Dammam to Ajman — the UAE's smallest emirate by area, located between Sharjah and Umm Al Quwain on the Arabian Gulf coast. Ajman is known for its relaxed atmosphere, Ajman Corniche, traditional dhow-building yards, and the beautiful Al Zorah Nature Reserve.",
      ar: "توصيل مباشر من الدمام إلى عجمان — أصغر إمارات الإمارات مساحةً، تقع بين الشارقة وأم القيوين على ساحل الخليج. تشتهر عجمان بجوها الهادئ وكورنيشها وأحواض بناء السفن التقليدية ومحمية الزوراء."
    },
    contentSections: [
      {
        title: { en: "Ajman — The Relaxed UAE Emirate", ar: "عجمان — إمارة الإمارات الهادئة" },
        body: {
          en: [
            "Ajman is the smallest of the UAE's seven emirates by land area but has a distinct character as one of the most relaxed and authentic Gulf coastal communities. The Ajman Corniche stretches along a beautiful beach bay, and the city retains traditional elements including active dhow (traditional boat) building yards.",
            "Ajman Museum, housed in an 18th-century fort, is one of the finest heritage museums in the UAE. Al Zorah Nature Reserve is a 5,600-acre protected mangrove and creek area with kayaking, birdwatching, and eco-tourism.",
            "Ajman is adjacent to Sharjah (15-minute drive) and Dubai (30-minute drive), making it an excellent base for exploring multiple UAE emirates."
          ],
          ar: [
            "عجمان أصغر إمارات الإمارات مساحةً لكنها تتميز بطابعها الهادئ الأصيل. يمتد كورنيش عجمان على طول خليج شاطئي جميل، وتحتفظ المدينة بعناصر تقليدية منها أحواض بناء السفن الخشبية النشطة.",
            "متحف عجمان في قلعة تعود للقرن الثامن عشر من أرقى متاحف التراث في الإمارات. محمية الزوراء منطقة قرم ومجرى مائي محمية تبلغ 5600 فدان للتجديف ومراقبة الطيور والسياحة البيئية.",
            "عجمان مجاورة للشارقة (15 دقيقة) ودبي (30 دقيقة) — قاعدة ممتازة لاستكشاف إمارات متعددة."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Ajman?", a: "Dammam to Ajman starts from 3,800 SAR for a Sedan and 5,200 SAR for a GMC Yukon SUV. All Al Batha border fees and road tolls are included." },
        { q: "Is Ajman close to Sharjah and Dubai?", a: "Yes. Ajman is 15 minutes from Sharjah and 30 minutes from Dubai. We can arrange combined deliveries to multiple UAE emirates if required." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى عجمان؟", a: "يبدأ من ٣٨٠٠ ريالاً للسيدان و٥٢٠٠ ريالاً ليوكن. تشمل رسوم منفذ البطحاء والطرق." },
        { q: "هل عجمان قريبة من الشارقة ودبي؟", a: "نعم. عجمان على بُعد 15 دقيقة من الشارقة و30 دقيقة من دبي. يمكننا ترتيب توصيل متعدد الإمارات عند الطلب." }
      ]
    }
  },

  {
    slug: "dammam-to-ras-al-khaimah",
    name: { en: "Dammam to Ras Al Khaimah Taxi", ar: "تاكسي من الدمام إلى رأس الخيمة" },
    metaTitle: {
      en: "Dammam to Ras Al Khaimah Taxi | Jebel Jais & RAK Airport",
      ar: "تاكسي من الدمام إلى رأس الخيمة | جبل جيس ومطار RAK"
    },
    metaDescription: {
      en: "Private taxi from Dammam to Ras Al Khaimah (RAK), UAE — Jebel Jais mountain (world's longest zipline), RAK Archaeological Sites, Dhayah Fort, and Ras Al Khaimah International Airport (RKT).",
      ar: "تاكسي خاص من الدمام إلى رأس الخيمة بالإمارات — جبل جيس (أطول زيب لاين عالمي)، المواقع الأثرية، قلعة الضاية، ومطار رأس الخيمة الدولي."
    },
    distance: { en: "1,050 km", ar: "١٠٥٠ كم" },
    duration: { en: "10 - 11 Hours", ar: "١٠ إلى ١١ ساعة" },
    basePrice: 4000,
    pricing: { sedan: 4000, suv: 5500, van: 6200, luxury: 10000 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0!2d55.9432!3d25.7895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f425fdf7f3a7%3A0x6db7d7ef47ed65c7!2sRas%20Al%20Khaimah%20UAE!5e0!3m2!1sen!2ssa!4v1717200000007!5m2!1sen!2ssa",
    intro: {
      en: "Transfer from Dammam to Ras Al Khaimah (RAK) — the northernmost and fastest-growing tourism emirate in the UAE. Known for the dramatic Hajar Mountains, Jebel Jais (UAE's highest peak at 1,934m), ancient forts, and some of the UAE's finest beaches.",
      ar: "توصيل من الدمام إلى رأس الخيمة (RAK) — أشمالي وأسرع إمارات الإمارات نمواً سياحياً. تشتهر بجبال الحجر الدرامية، جبل جيس (أعلى قمة في الإمارات 1934م)، القلاع الأثرية، وأجمل شواطئ الإمارات."
    },
    contentSections: [
      {
        title: { en: "Ras Al Khaimah — Adventure & Heritage Emirates", ar: "رأس الخيمة — إمارة المغامرة والتراث" },
        body: {
          en: [
            "Ras Al Khaimah is rapidly emerging as one of the UAE's top tourism destinations, offering a completely different experience from Dubai. Jebel Jais Mountain (1,934m) hosts the world's longest zipline (2.83km) and the region's highest hotel. The mountain is cooler in summer, making it ideal for outdoor activities.",
            "RAK has remarkable historical depth — Dhayah Fort (the only hilltop fort in the UAE) overlooks ancient agricultural plains, and the area around Khatt and Wadi Ghalilah has fascinating archaeological sites spanning thousands of years.",
            "Ras Al Khaimah International Airport (RKT) provides direct connections and is accessible for airport-to-airport transfers from Dammam."
          ],
          ar: [
            "رأس الخيمة تبرز سريعاً كأحد أبرز وجهات السياحة في الإمارات بتجربة مختلفة تماماً عن دبي. جبل جيس (1934م) يضم أطول زيب لاين في العالم (2.83كم) وأعلى فندق في المنطقة. الجبل أبرد صيفاً مثالي للأنشطة الخارجية.",
            "رأس الخيمة تمتلك عمقاً تاريخياً استثنائياً — قلعة الضاية (القلعة الجبلية الوحيدة في الإمارات) تطل على السهول الزراعية القديمة، ومنطقة خت ووادي غليلة بها مواقع أثرية تمتد آلاف السنين.",
            "مطار رأس الخيمة الدولي (RKT) متاح للتوصيل المباشر من الدمام."
          ]
        }
      }
    ],
    faqs: {
      en: [
        { q: "How much is a taxi from Dammam to Ras Al Khaimah?", a: "Dammam to RAK starts from 4,000 SAR for a Sedan and 5,500 SAR for a GMC Yukon SUV. All Al Batha border fees and tolls are included." },
        { q: "What is Ras Al Khaimah famous for?", a: "RAK is famous for Jebel Jais mountain with the world's longest zipline, beautiful beaches on both Arabian Gulf and Gulf of Oman sides, ancient archaeological sites, Dhayah hilltop fort, and a growing luxury resort scene." }
      ],
      ar: [
        { q: "كم تكلفة التاكسي من الدمام إلى رأس الخيمة؟", a: "يبدأ من ٤٠٠٠ ريالاً للسيدان و٥٥٠٠ ريالاً ليوكن. تشمل رسوم منفذ البطحاء والطرق." },
        { q: "بماذا تشتهر رأس الخيمة؟", a: "تشتهر رأس الخيمة بجبل جيس وأطول زيب لاين عالمي، شواطئ جميلة على الخليج العربي وخليج عُمان، مواقع أثرية، قلعة الضاية، وتطور منتجعات الفاخرة." }
      ]
    }
  }
];

