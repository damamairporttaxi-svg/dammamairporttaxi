"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale } from "../data/translations";

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof translations["en"]) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load language preference from local storage if available
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale === "en" || savedLocale === "ar") {
      setLocaleState(savedLocale);
    } else {
      // detect browser language or default to en
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "ar") {
        setLocaleState("ar");
      }
    }
  }, []);

  // Update HTML tag direction and lang attribute whenever locale changes
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    
    // Also add a class to the body for language specific fonts
    if (locale === "ar") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
    
    localStorage.setItem("locale", locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: keyof typeof translations["en"]): string => {
    const dict = translations[locale] || translations["en"];
    return dict[key] || translations["en"][key] || String(key);
  };

  const isRtl = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

