"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StickyCTA } from "../../components/StickyCTA";

export default function TermsPage() {
  const { locale } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Terms of Service" : "شروط الخدمة"}
          </h1>
          <p style={styles.heroSub}>
            {locale === "en" ? "Last updated: May 24, 2026" : "آخر تحديث: ٢٤ مايو ٢٠٢٦"}
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container" style={styles.container}>
          <div style={styles.content}>

            <p style={{ fontSize: "0.9rem", backgroundColor: "rgba(245,197,24,0.06)", border: "1px solid rgba(245,197,24,0.2)", borderRadius: "8px", padding: "1rem 1.2rem" }}>
              {locale === "en"
                ? "These Terms of Service govern your use of Dammam Airport Taxi (operated by Haram Taxi Service, Eastern Province, Saudi Arabia). By booking our services you agree to these terms in full."
                : "تحكم شروط الخدمة هذه استخدامك لخدمة تاكسي مطار الدمام (تشغلها خدمة حرم تاكسي، المنطقة الشرقية، المملكة العربية السعودية). بحجزك خدماتنا فإنك توافق على هذه الشروط كاملةً."}
            </p>

            <h2>{locale === "en" ? "1. Agreement to Terms" : "١. الموافقة على الشروط"}</h2>
            <p>
              {locale === "en"
                ? "By accessing our website, submitting a booking form, or communicating with us via WhatsApp for the purpose of arranging a transfer, you agree to comply with and be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please refrain from using our services."
                : "بالوصول إلى موقعنا الإلكتروني أو تقديم نموذج حجز أو التواصل معنا عبر واتساب لترتيب عملية توصيل، فإنك توافق على الالتزام بشروط الخدمة هذه وسياسة الخصوصية لدينا."}
            </p>

            <h2>{locale === "en" ? "2. Bookings & Confirmations" : "٢. الحجوزات والتأكيدات"}</h2>
            <p>
              {locale === "en"
                ? "All bookings are subject to vehicle availability. A booking is confirmed only upon receipt of a written confirmation message from our dispatch team via WhatsApp. Verbal agreements or unconfirmed enquiries do not constitute a binding booking. We reserve the right to decline any booking at our discretion. Corporate bookings via email or purchase order are binding upon written acknowledgement from our corporate team."
                : "تخضع جميع الحجوزات لمدى توفر السيارات. لا يُعدّ الحجز مؤكداً إلا عند استلام رسالة تأكيد مكتوبة من فريق العمليات عبر واتساب. الاتفاقيات الشفهية أو الاستفسارات غير المؤكدة لا تُشكّل حجزاً ملزماً."}
            </p>

            <h2>{locale === "en" ? "3. Pricing, Tolls & Taxes" : "٣. الأسعار ورسوم الطرق والضرائب"}</h2>
            <p>
              {locale === "en"
                ? "All quoted fares are fixed rates for the complete door-to-door journey in the specified vehicle class. Saudi highway toll fees and airport parking fees are included. VAT (15%) is included in all quoted prices for consumer bookings. Corporate accounts receive separate VAT-itemised invoices. GCC border crossing tolls (e.g. King Fahd Causeway fee ~35 SAR) are included for cross-border routes. Passengers are solely responsible for their own visa fees, border exit/re-entry visa costs, and any personal customs duties."
                : "جميع الأسعار المقتبسة هي أسعار ثابتة لرحلة الباب إلى الباب الكاملة. رسوم الطرق السريعة السعودية وأسعار موقف المطار مشمولة. ضريبة القيمة المضافة (15٪) مشمولة في جميع الأسعار المقتبسة. رسوم عبور حدود الخليج مشمولة للمسارات عبر الحدود. الركاب مسؤولون فقط عن رسوم تأشيراتهم الشخصية ورسوم تأشيرات الخروج/العودة وأي رسوم جمركية شخصية."}
            </p>

            <h2>{locale === "en" ? "4. Cancellation Policy" : "٤. سياسة الإلغاء"}</h2>
            <p>
              {locale === "en"
                ? "Free cancellation is available up to 6 hours before the scheduled pickup time for standard bookings. For same-day bookings cancelled within 2 hours of the pickup, a 50% cancellation fee applies. No-shows (passenger does not appear and does not contact us) are charged at 100% of the agreed fare. For GCC cross-border bookings cancelled within 12 hours of departure, a 25% service fee applies. Modifications to pickup time, destination, or vehicle class are free of charge provided adequate notice is given."
                : "يتوفر الإلغاء المجاني حتى 6 ساعات قبل موعد الاستلام المحدد للحجوزات العادية. للحجوزات في نفس اليوم التي تُلغى خلال ساعتين من الاستلام، يُطبّق رسم إلغاء بنسبة 50٪. حالات عدم الحضور تُحسب بنسبة 100٪ من الأجر المتفق عليه. يمكن تعديل وقت الاستلام أو الوجهة أو فئة السيارة مجاناً بإشعار كافٍ."}
            </p>

            <h2>{locale === "en" ? "5. Airport Pickups & Flight Tracking" : "٥. الاستلام من المطار وتتبع الرحلات"}</h2>
            <p>
              {locale === "en"
                ? "For airport pickup bookings, we provide complimentary real-time flight tracking using the flight number provided at booking. The 60-minute free waiting period begins from the actual landing time of the aircraft, as recorded by the airport. If your flight is cancelled or diverted, please contact us via WhatsApp as soon as possible. Cancellation due to flight cancellation is free of charge if notified within 2 hours of the original scheduled landing time."
                : "لحجوزات الاستلام من المطار، نقدم تتبعاً مجانياً للرحلات في الوقت الفعلي باستخدام رقم الرحلة المقدم عند الحجز. تبدأ فترة الانتظار المجانية البالغة 60 دقيقة من وقت الهبوط الفعلي للطائرة. إذا ألغيت رحلتك أو حوّلت، يرجى الاتصال بنا عبر واتساب في أقرب وقت ممكن."}
            </p>

            <h2>{locale === "en" ? "6. Vehicle & Passenger Capacity" : "٦. سعة السيارة والركاب"}</h2>
            <p>
              {locale === "en"
                ? "Vehicles must not be loaded beyond their stated passenger and luggage capacity. Camry Sedan: max 4 passengers, 3 standard bags. GMC Yukon: max 6 passengers, 5 bags. Hyundai Staria Van: max 8 passengers, 7 bags. Excess passengers or luggage beyond vehicle capacity will require an additional vehicle, which will be charged separately. Child safety seats are provided complimentary upon advance request — please specify at the time of booking."
                : "يجب عدم تحميل السيارات أكثر من سعتها المحددة للركاب والأمتعة. كامري سيدان: 4 ركاب كحد أقصى، 3 حقائب قياسية. جي إم سي يوكن: 6 ركاب، 5 حقائب. هيونداي ستاريا: 8 ركاب، 7 حقائب. مقاعد أمان الأطفال متوفرة مجاناً عند الطلب المسبق."}
            </p>

            <h2>{locale === "en" ? "7. Passenger Conduct" : "٧. سلوك الركاب"}</h2>
            <p>
              {locale === "en"
                ? "Passengers must behave in a respectful and lawful manner throughout the journey. We reserve the right to terminate a journey without refund if a passenger: is visibly under the influence of alcohol or controlled substances, behaves aggressively or threatens the driver, causes damage to the vehicle, or requests the driver to violate traffic laws. Smoking (including e-cigarettes), eating hot food, and consuming alcohol are strictly prohibited inside all our vehicles."
                : "يجب أن يتصرف الركاب باحترام وبطريقة مشروعة طوال الرحلة. نحتفظ بالحق في إنهاء الرحلة بدون استرداد إذا كان الراكب يتصرف بعدوانية أو يلحق الضرر بالسيارة أو يطلب من السائق انتهاك قوانين المرور. يُمنع التدخين وتناول الطعام الساخن وشرب الكحول منعاً باتاً داخل سياراتنا."}
            </p>

            <h2>{locale === "en" ? "8. GCC Cross-Border Travel" : "٨. السفر عبر حدود دول الخليج"}</h2>
            <p>
              {locale === "en"
                ? "Passengers are solely responsible for possessing all valid travel documents required for GCC border crossings, including valid passports, Exit/Re-Entry visas (for Saudi residents), and destination country entry visas. Dammam Airport Taxi is not liable for any delays, denials of entry, or costs arising from a passenger's failure to hold the correct documentation. Our drivers will provide guidance at border crossings but cannot be held responsible for immigration decisions."
                : "الركاب مسؤولون وحدهم عن امتلاك جميع وثائق السفر الصالحة المطلوبة لعبور حدود دول الخليج، بما في ذلك جوازات السفر الصالحة وتأشيرات الخروج والعودة وتأشيرات دخول دولة الوجهة. لا يتحمل تاكسي مطار الدمام مسؤولية أي تأخيرات أو رفض دخول أو تكاليف ناجمة عن عدم امتلاك الركاب للوثائق الصحيحة."}
            </p>

            <h2>{locale === "en" ? "9. Liability Limitation" : "٩. تحديد المسؤولية"}</h2>
            <p>
              {locale === "en"
                ? "Dammam Airport Taxi carries full commercial liability insurance as required by the Saudi Transport General Authority. In the event of an incident, compensation is governed by the applicable Saudi insurance regulations. We are not liable for delays caused by traffic, road closures, adverse weather, or GCC border congestion. We are not liable for loss of or damage to passenger property left in the vehicle."
                : "يحمل تاكسي مطار الدمام تأمين المسؤولية التجارية الكامل وفق متطلبات الهيئة العامة للنقل في المملكة. لسنا مسؤولين عن التأخيرات الناجمة عن حركة المرور أو إغلاق الطرق أو الأحوال الجوية السيئة أو ازدحام حدود الخليج."}
            </p>

            <h2>{locale === "en" ? "10. Corporate Accounts" : "١٠. الحسابات المؤسسية"}</h2>
            <p>
              {locale === "en"
                ? "Corporate accounts are governed by a separate service agreement. Monthly invoices are issued within the first 5 working days of the following month. Payment terms are Net 30 days from invoice date unless otherwise agreed. Late payment may result in suspension of priority dispatch services. All corporate invoices are VAT-compliant under Saudi ZATCA regulations."
                : "تخضع الحسابات المؤسسية لاتفاقية خدمة منفصلة. تصدر الفواتير الشهرية خلال أول 5 أيام عمل من الشهر التالي. شروط الدفع صافي 30 يوماً من تاريخ الفاتورة ما لم يُتفق على خلاف ذلك. جميع الفواتير المؤسسية متوافقة مع متطلبات زاتكا السعودية."}
            </p>

            <h2>{locale === "en" ? "11. Governing Law" : "١١. القانون الواجب التطبيق"}</h2>
            <p>
              {locale === "en"
                ? "These Terms of Service are governed by the laws of the Kingdom of Saudi Arabia. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts of the Eastern Province, Saudi Arabia. For corporate disputes, mediation through the Saudi Centre for Commercial Arbitration (SCCA) may be agreed by both parties."
                : "تخضع شروط الخدمة هذه لقوانين المملكة العربية السعودية. تخضع أي نزاعات تنشأ عن استخدام خدماتنا للاختصاص القضائي الحصري لمحاكم المنطقة الشرقية بالمملكة."}
            </p>

            <h2>{locale === "en" ? "12. Contact Us" : "١٢. اتصل بنا"}</h2>
            <p>
              {locale === "en"
                ? "For questions about these Terms, contact us: WhatsApp: +966 56 948 7569 | Email: haramtaxiservice@gmail.com | Available 24/7, 365 days a year."
                : "للاستفسار عن هذه الشروط: واتساب: 7569 948 56 966+ | البريد الإلكتروني: haramtaxiservice@gmail.com | متاحون 24/7 طوال العام."}
            </p>

          </div>
        </div>
      </section>

      <StickyCTA />
      <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url('/hero-bg.jpg') center/cover no-repeat",
    padding: "4rem 0",
    borderBottom: "1px solid var(--border-color)",
    textAlign: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  heroTitle: {
    fontSize: "2.2rem",
    color: "#000000",
  },
  heroSub: {
    fontSize: "0.95rem",
    color: "var(--text-muted)",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    color: "var(--text-secondary)",
    lineHeight: "1.7",
  },
};

