"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StickyCTA } from "../../components/StickyCTA";

export default function PrivacyPolicyPage() {
  const { locale } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>
            {locale === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
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
                ? "Dammam Airport Taxi (operated by Haram Taxi Service, Eastern Province, Saudi Arabia) is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information."
                : "تاكسي مطار الدمام (تشغله شركة خدمة حرم تاكسي، المنطقة الشرقية، المملكة العربية السعودية) ملتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها."}
            </p>

            <h2>{locale === "en" ? "1. Information We Collect" : "١. المعلومات التي نجمعها"}</h2>
            <p>
              {locale === "en"
                ? "We collect information you provide directly when booking a taxi transfer. This includes: full name, WhatsApp / phone number, pickup and drop-off locations, travel date and time, number of passengers and luggage, vehicle class preference, flight number (for airport pickups), and any special requests (e.g. child seat, corporate invoice)."
                : "نجمع المعلومات التي تقدمها مباشرةً عند حجز التوصيل، وتشمل: الاسم الكامل، رقم الواتساب/الهاتف، مواقع الاستلام والتوصيل، تاريخ ووقت السفر، عدد الركاب والأمتعة، تفضيل فئة السيارة، رقم الرحلة (للاستلام من المطار)، وأي طلبات خاصة."}
            </p>

            <h2>{locale === "en" ? "2. How We Use Your Information" : "٢. كيف نستخدم معلوماتك"}</h2>
            <p>
              {locale === "en"
                ? "We use collected information solely to: process and confirm your taxi booking, dispatch the correct vehicle and driver, track your flight status for airport pickups, send you driver contact information and vehicle details, issue corporate tax invoices upon request, and respond to customer service enquiries."
                : "نستخدم المعلومات التي نجمعها فقط من أجل: معالجة حجزك وتأكيده، إرسال السيارة والسائق المناسبَين، تتبع رحلتك الجوية لاستلامات المطار، إرسال معلومات الاتصال بالسائق وتفاصيل السيارة، إصدار الفواتير الضريبية المؤسسية عند الطلب، والرد على استفسارات خدمة العملاء."}
            </p>

            <h2>{locale === "en" ? "3. WhatsApp Communications" : "٣. التواصل عبر واتساب"}</h2>
            <p>
              {locale === "en"
                ? "Our primary communication channel is WhatsApp (+966 56 948 7569). By initiating contact with us on WhatsApp, you consent to receiving booking confirmations, driver details, and service updates via this platform. We do not send unsolicited marketing messages. You may opt out of communications at any time by informing us on WhatsApp."
                : "قناة التواصل الرئيسية لدينا هي واتساب (+966 56 948 7569). بتواصلك معنا عبر واتساب، فإنك توافق على تلقي تأكيدات الحجز وتفاصيل السائق وتحديثات الخدمة عبر هذه المنصة. لا نرسل رسائل تسويقية غير مرغوب فيها. يمكنك إلغاء الاشتراك في التواصل في أي وقت بإبلاغنا على واتساب."}
            </p>

            <h2>{locale === "en" ? "4. Data Sharing" : "٤. مشاركة البيانات"}</h2>
            <p>
              {locale === "en"
                ? "We do not sell, trade, or rent your personal information to third parties. Booking data is shared only with the assigned driver to complete your transfer. For corporate accounts, invoicing data is shared with your company's finance department as requested. We do not share data with advertising networks or analytics companies."
                : "لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. تُشارَك بيانات الحجز فقط مع السائق المكلف لإتمام توصيلك. بالنسبة للحسابات المؤسسية، تُشارَك بيانات الفوترة مع قسم مالية شركتك حسب الطلب. لا نشارك البيانات مع شبكات الإعلانات أو شركات التحليلات."}
            </p>

            <h2>{locale === "en" ? "5. Data Retention" : "٥. الاحتفاظ بالبيانات"}</h2>
            <p>
              {locale === "en"
                ? "We retain booking records for a period of 12 months for customer service and corporate invoicing purposes. After this period, personal data is deleted or anonymised. Corporate account records are retained for 5 years as required by Saudi tax regulations (Zakat, Tax and Customs Authority — ZATCA)."
                : "نحتفظ بسجلات الحجز لمدة 12 شهراً لأغراض خدمة العملاء والفوترة المؤسسية. بعد هذه الفترة، يتم حذف البيانات الشخصية أو إخفاء هويتها. يتم الاحتفاظ بسجلات الحسابات المؤسسية لمدة 5 سنوات وفق متطلبات الأنظمة الضريبية السعودية (هيئة الزكاة والضريبة والجمارك — زاتكا)."}
            </p>

            <h2>{locale === "en" ? "6. GPS & Location Data" : "٦. بيانات GPS والموقع"}</h2>
            <p>
              {locale === "en"
                ? "Our vehicles are equipped with GPS tracking devices for safety and operational dispatch purposes. Location data is used solely to monitor driver routes, ensure passenger safety, and provide estimated arrival times. GPS records are not shared with any external parties and are deleted after 30 days."
                : "سياراتنا مجهزة بأجهزة تتبع GPS لأغراض السلامة والإرسال التشغيلي. تُستخدم بيانات الموقع فقط لمراقبة مسارات السائقين وضمان سلامة الركاب وتوفير أوقات وصول مقدرة. لا تُشارَك سجلات GPS مع أي أطراف خارجية ويتم حذفها بعد 30 يوماً."}
            </p>

            <h2>{locale === "en" ? "7. Cookies & Website Analytics" : "٧. ملفات تعريف الارتباط والتحليلات"}</h2>
            <p>
              {locale === "en"
                ? "Our website uses essential cookies to remember your language preference (English or Arabic) and maintain session state. We may use anonymised analytics data to understand general site usage patterns and improve our service. No personally identifiable information is included in analytics data."
                : "يستخدم موقعنا ملفات تعريف الارتباط الأساسية لتذكر تفضيل لغتك (الإنجليزية أو العربية) والحفاظ على حالة الجلسة. قد نستخدم بيانات تحليلية مجهولة الهوية لفهم أنماط الاستخدام العامة للموقع وتحسين خدمتنا. لا تتضمن بيانات التحليلات أي معلومات تعريفية شخصية."}
            </p>

            <h2>{locale === "en" ? "8. Your Rights" : "٨. حقوقك"}</h2>
            <p>
              {locale === "en"
                ? "You have the right to: request access to the personal data we hold about you, request correction of inaccurate data, request deletion of your personal data (subject to legal retention requirements), withdraw consent for communications at any time, and lodge a complaint with the relevant Saudi data protection authority."
                : "لديك الحق في: طلب الوصول إلى البيانات الشخصية التي نحتفظ بها عنك، وطلب تصحيح البيانات غير الدقيقة، وطلب حذف بياناتك الشخصية (مع مراعاة متطلبات الاحتفاظ القانونية)، وسحب الموافقة على الاتصالات في أي وقت، وتقديم شكوى إلى هيئة حماية البيانات السعودية المختصة."}
            </p>

            <h2>{locale === "en" ? "9. Children's Privacy" : "٩. خصوصية الأطفال"}</h2>
            <p>
              {locale === "en"
                ? "Our services are intended for adults (18+) or minors accompanied by a parent or legal guardian. We do not knowingly collect personal data from unaccompanied minors under 18. If you believe we have inadvertently collected such data, please contact us immediately to have it removed."
                : "خدماتنا مخصصة للبالغين (18+) أو القاصرين المصحوبين بولي أمر. نحن لا نجمع عن قصد بيانات شخصية من قاصرين غير مصحوبين دون سن 18. إذا كنت تعتقد أننا جمعنا مثل هذه البيانات عن طريق الخطأ، يرجى الاتصال بنا فوراً لحذفها."}
            </p>

            <h2>{locale === "en" ? "10. Changes to This Policy" : "١٠. التغييرات على هذه السياسة"}</h2>
            <p>
              {locale === "en"
                ? "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The 'Last Updated' date at the top of this page indicates when the policy was last revised. Continued use of our services after changes are posted constitutes your acceptance of the updated policy."
                : "قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري لتعكس التغييرات في ممارساتنا أو المتطلبات القانونية. يُشير تاريخ 'آخر تحديث' أعلى هذه الصفحة إلى آخر تعديل على السياسة."}
            </p>

            <h2>{locale === "en" ? "11. Contact Us" : "١١. اتصل بنا"}</h2>
            <p>
              {locale === "en"
                ? "For any questions or requests regarding this Privacy Policy or your personal data, contact us: WhatsApp: +966 56 948 7569 | Email: haramtaxiservice@gmail.com | Operating Hours: 24/7, 365 days a year."
                : "لأي أسئلة أو طلبات بخصوص سياسة الخصوصية هذه أو بياناتك الشخصية، تواصل معنا: واتساب: 7569 948 56 966+ | البريد الإلكتروني: haramtaxiservice@gmail.com | ساعات العمل: 24/7، 365 يوماً في السنة."}
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
    color: "#ffffff",
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

