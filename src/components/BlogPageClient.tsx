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
    fontSize: "2.5rem",
    color: "#ffffff",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "var(--text-secondary)",
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
    color: "#ffffff",
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
    color: "#ffffff",
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

