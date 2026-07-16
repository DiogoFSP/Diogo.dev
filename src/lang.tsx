import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Lang = "pt" | "en";

const LangContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
  t: (pt: string, en: string) => string;
}>({
  lang: "pt",
  toggleLang: () => {},
  t: (pt) => pt,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("diogo-lang") as Lang) ?? "pt"
  );

  useEffect(() => {
    localStorage.setItem("diogo-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === "pt" ? "en" : "pt");
  };

  const t = (pt: string, en: string) => (lang === "en" ? en : pt);

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
