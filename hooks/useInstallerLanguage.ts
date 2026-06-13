import { useMemo } from "react";
import { Language } from "../types";
import { useTranslations } from "../context/LanguageContext";

export const useInstallerLanguage = () => {
  const { language } = useTranslations();

  const languageOrder = useMemo(
    () => [Language.PT, Language.EN, Language.FR, Language.ES],
    []
  );

  const nextLanguage = useMemo(() => {
    return languageOrder[
      (languageOrder.indexOf(language) + 1) % languageOrder.length
    ];
  }, [language, languageOrder]);

  const langSwitchLabel = useMemo(() => {
    return language === Language.PT
      ? "Mudar para Ingles"
      : language === Language.EN
        ? "Switch to French"
        : language === Language.FR
          ? "Passer à l'espagnol"
          : "Cambiar a portugués";
  }, [language]);

  const langSwitchText = useMemo(() => {
    return nextLanguage === Language.PT
      ? "Portugues"
      : nextLanguage === Language.EN
        ? "English"
        : nextLanguage === Language.FR
          ? "Francais"
          : "Español";
  }, [nextLanguage]);

  return {
    nextLanguage,
    langSwitchLabel,
    langSwitchText,
  };
};
