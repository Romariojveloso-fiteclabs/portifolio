import { useState, useEffect } from "react";
import { Language } from "../types";

export const useFormattedTime = (language: Language) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString(
    language === Language.EN
      ? "en-US"
      : language === Language.FR
        ? "fr-FR"
        : language === Language.ES
          ? "es-ES"
          : "pt-BR",
    {
      hour: "2-digit",
      minute: "2-digit",
    },
  );

  return formattedTime;
};
