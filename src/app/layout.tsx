import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://dammamairporttaxi.com"),
  title: {
    default: "Dammam Airport Taxi | Premium GCC Transfer & Chauffeur Services",
    template: "%s | Dammam Airport Taxi",
  },
  description: "Book premium airport taxis & GCC border crossing transfers from Dammam King Fahd International Airport (DMM) to Bahrain, Kuwait, UAE, Riyadh, Khobar, Jubail. 24/7 VIP Chauffeur.",
  keywords: ["dammam airport taxi", "taxi to bahrain", "dammam to bahrain taxi", "dammam to kuwait taxi", "dammam to riyadh taxi", "dammam airport to khobar", "gcc border crossing taxi", "dammam chauffeur service"],
  alternates: {
    canonical: "https://dammamairporttaxi.com",
  },
  openGraph: {
    siteName: "Dammam Airport Taxi",
    locale: "en_US",
    type: "website",
    title: "Dammam Airport Taxi | Premium GCC Transfer & Chauffeur Services",
    description: "Book premium airport taxis & GCC border crossing transfers from Dammam to Bahrain, Kuwait, UAE, Riyadh & more. 24/7 VIP Chauffeur.",
    url: "https://dammamairporttaxi.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dammam Airport Taxi - Premium GCC Transfer Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dammam Airport Taxi | Premium GCC Transfer & Chauffeur Services",
    description: "Book premium airport taxis & GCC border crossing transfers from Dammam. 24/7 VIP Chauffeur.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global LocalBusiness schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Dammam Airport Taxi",
    "url": "https://dammamairporttaxi.com",
    "logo": "https://dammamairporttaxi.com/logo.png",
    "image": "https://dammamairporttaxi.com/hero-bg.jpg",
    "description": "Premium airport transfers and cross-border taxi services from Dammam to Bahrain, Kuwait, Qatar, Riyadh, and Eastern Province cities.",
    "telephone": "+966501234567",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Dammam"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bahrain"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Eastern Province"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kuwait"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Riyadh"
      }
    ],
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dammam Airport Taxi Service",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd International Airport Road",
        "addressLocality": "Dammam",
        "addressRegion": "Eastern Province",
        "postalCode": "31141",
        "addressCountry": "SA"
      }
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VBNPLM50HY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VBNPLM50HY');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x4qcvk0v5k");
          `}
        </Script>
      </body>
    </html>
  );
}


