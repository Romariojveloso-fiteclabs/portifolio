import React, { useState, useEffect, useRef } from "react";
import { Language } from "../../types";

interface TaskbarClockProps {
  setLanguage: (lang: Language) => void;
  language: Language;
  formattedTime: string;
}

export const TaskbarClock: React.FC<TaskbarClockProps> = ({
  setLanguage,
  language,
  formattedTime,
}) => {
  const [batteryLevel, setBatteryLevel] = useState(() => Math.floor(Math.random() * 88) + 12);
  const [isCharging, setIsCharging] = useState(() => Math.random() < 0.35);
  const [isOnline, setIsOnline] = useState(() => Math.random() < 0.90);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    const intervalId = setInterval(() => {
      setBatteryLevel((prev) => {
        if (isCharging) {
          return prev < 100 ? prev + 1 : 100;
        } else {
          return prev > 1 ? prev - 1 : 1;
        }
      });
    }, 45000);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      clearInterval(intervalId);
    };
  }, [isCharging]);

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case Language.PT:
        return "pt-BR";
      case Language.EN:
        return "en-US";
      case Language.FR:
        return "fr-FR";
      case Language.ES:
        return "es-ES";
      default:
        return "pt-BR";
    }
  };

  const getLanguageHeaderLabel = (lang: Language) => {
    switch (lang) {
      case Language.PT:
        return "Idioma";
      case Language.EN:
        return "Language";
      case Language.FR:
        return "Langue";
      case Language.ES:
        return "Idioma";
      default:
        return "Idioma";
    }
  };

  const getSelectLanguageTooltip = (lang: Language) => {
    switch (lang) {
      case Language.PT:
        return "Selecionar Idioma";
      case Language.EN:
        return "Select Language";
      case Language.FR:
        return "Sélectionner la Langue";
      case Language.ES:
        return "Seleccionar Idioma";
      default:
        return "Selecionar Idioma";
    }
  };

  return (
    <div className="flex items-center h-full flex-shrink-0 relative" ref={langRef}>
      <button
        onClick={() => setIsLangDropdownOpen((prev) => !prev)}
        className={`h-full px-4 text-xs font-bold flex items-center gap-1.5 transition-colors ${
          isLangDropdownOpen
            ? "bg-amber-800/80 text-amber-100"
            : "bg-gray-900 hover:bg-amber-800/60 text-gray-200"
        }`}
        title={getSelectLanguageTooltip(language)}
      >
        <span>{getLanguageLabel(language).toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${
            isLangDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {isLangDropdownOpen && (
        <div className="absolute bottom-full mb-1.5 right-0 w-28 bg-zinc-950/95 border border-amber-600/50 rounded-lg shadow-2xl p-1.5 flex flex-col gap-1 z-50 animate-fade-in backdrop-blur-md">
          <div className="px-2 py-0.5 text-[9px] font-bold text-amber-500/80 tracking-wider uppercase border-b border-zinc-800 mb-1">
            {getLanguageHeaderLabel(language)}
          </div>

          <button
            onClick={() => {
              setLanguage(Language.PT);
              setIsLangDropdownOpen(false);
            }}
            className={`w-full px-2.5 py-1.5 text-xs font-semibold rounded flex items-center justify-between transition-all ${
              language === Language.PT
                ? "bg-amber-600/20 text-amber-400 border border-amber-500/30"
                : "text-gray-300 hover:bg-zinc-800 border border-transparent"
            }`}
          >
            <span>pt-BR</span>
            {language === Language.PT && (
              <svg
                className="w-3 h-3 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => {
              setLanguage(Language.EN);
              setIsLangDropdownOpen(false);
            }}
            className={`w-full px-2.5 py-1.5 text-xs font-semibold rounded flex items-center justify-between transition-all ${
              language === Language.EN
                ? "bg-amber-600/20 text-amber-400 border border-amber-500/30"
                : "text-gray-300 hover:bg-zinc-800 border border-transparent"
            }`}
          >
            <span>en-US</span>
            {language === Language.EN && (
              <svg
                className="w-3 h-3 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => {
              setLanguage(Language.FR);
              setIsLangDropdownOpen(false);
            }}
            className={`w-full px-2.5 py-1.5 text-xs font-semibold rounded flex items-center justify-between transition-all ${
              language === Language.FR
                ? "bg-amber-600/20 text-amber-400 border border-amber-500/30"
                : "text-gray-300 hover:bg-zinc-800 border border-transparent"
            }`}
          >
            <span>fr-FR</span>
            {language === Language.FR && (
              <svg
                className="w-3 h-3 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => {
              setLanguage(Language.ES);
              setIsLangDropdownOpen(false);
            }}
            className={`w-full px-2.5 py-1.5 text-xs font-semibold rounded flex items-center justify-between transition-all ${
              language === Language.ES
                ? "bg-amber-600/20 text-amber-400 border border-amber-500/30"
                : "text-gray-300 hover:bg-zinc-800 border border-transparent"
            }`}
          >
            <span>es-ES</span>
            {language === Language.ES && (
              <svg
                className="w-3 h-3 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        </div>
      )}

      <div className="flex items-center h-full px-2 gap-2 border-l border-gray-800">
        <div
          className="flex items-center px-1"
          title={
            isOnline
              ? language === Language.PT
                ? "Rede Conectada (Online)"
                : "Network Connected (Online)"
              : language === Language.PT
                ? "Desconectado (Offline)"
                : "Disconnected (Offline)"
          }
        >
          {isOnline ? (
            <svg
              className="w-5 h-5 text-emerald-500 transition-colors hover:text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-1.46-1.92-2.35-4.31-2.35-6.9 0-6.63 5.37-12 12-12s12 5.37 12 12c0 2.59-.89 4.98-2.35 6.9l-1.62-1.79C21.26 16.07 22 14.12 22 12c0-4.97-4.03-9-9-9zm0 4c-2.76 0-5 2.24-5 5 0 1.15.4 2.2 1.05 3.05l1.45-1.6C9.17 13.04 9 12.54 9 12c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .54-.17 1.04-.51 1.45l1.45 1.6c.65-.85 1.05-1.9 1.05-3.05 0-2.76-2.24-5-5-5zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-red-500 transition-colors hover:text-red-400 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.64 15.19c-.42-.35-4.97-4.04-11.64-4.04-.57 0-1.12.03-1.66.08L21.43 22l2.21-2.4c.53-.58.53-1.49 0-2.07l-.01-2.34zM12 3c-4.97 0-9 4.03-9 9 0 1.76.51 3.4 1.38 4.79l1.43-1.57C5.29 14.28 5 13.17 5 12c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.17-.29 2.28-.81 3.22l1.43 1.57C20.49 15.4 21 13.76 21 12c0-4.97-4.03-9-9-9zm0 8c-.55 0-1 .45-1 1 0 .21.07.41.18.57l1.39 1.53c.27-.3.43-.7.43-1.1 0-.55-.45-1-1-1zM2.81 2.81L1.39 4.22l5.3 5.3c-.63.78-.99 1.73-.99 2.76 0 2.48 2.02 4.49 4.49 4.49.19 0 .37-.02.56-.05l4.89 4.89 1.41-1.41L2.81 2.81z" />
            </svg>
          )}
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer select-none"
          title={`${batteryLevel}% — ${
            isCharging
              ? language === Language.PT
                ? "Carregando"
                : "Charging"
              : language === Language.PT
                ? "Descarregando"
                : "Not Charging"
          }`}
        >
          <div className="relative flex items-center">
            <div className="w-6 h-3.5 border border-zinc-400 rounded-xs relative flex items-center p-[1px] bg-zinc-950/45">
              <div
                className={`h-full rounded-3xs transition-all ${
                  isCharging
                    ? "bg-amber-400 animate-pulse"
                    : batteryLevel <= 20
                      ? "bg-red-500"
                      : batteryLevel <= 50
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                }`}
                style={{ width: `${Math.max(10, Math.min(100, batteryLevel))}%` }}
              />
              {isCharging && (
                <svg
                  className="w-2.5 h-2.5 text-zinc-100 absolute inset-0 m-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 21h-1l1-7H7.5l5-10h1l-1 7h3.5l-5 10z" />
                </svg>
              )}
            </div>
            <div className="w-[1.5px] h-1.5 bg-zinc-400 rounded-r-3xs ml-[1px]" />
          </div>
          <span className="text-[11px] font-mono text-zinc-300 hidden sm:inline">
            {batteryLevel}%
          </span>
        </div>
      </div>

      <div className="h-full px-3 bg-black/50 flex items-center text-sm">
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};
