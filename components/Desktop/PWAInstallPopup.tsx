import React from "react";
import { MdGetApp } from "react-icons/md";
import { useTranslations } from "../../context/LanguageContext";

interface PWAInstallPopupProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const PWAInstallPopup: React.FC<PWAInstallPopupProps> = ({
  onConfirm,
  onCancel,
}) => {
  const { translations } = useTranslations();

  return (
    <div className="fixed inset-0 bg-black/75 z-[10000] backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <div className="bg-neutral-950/90 border border-amber-500/30 rounded-lg shadow-2xl p-6 max-w-md w-full mx-4 flex flex-col items-center text-center backdrop-blur-md">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-500 animate-pulse">
          <MdGetApp size={36} />
        </div>

        <h2 className="text-xl font-bold text-amber-400 mb-2">
          {translations.ui.pwa.title}
        </h2>

        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
          {translations.ui.pwa.description}
        </p>

        <div className="flex items-center gap-3 w-full">
          <button
            onClick={onCancel}
            className="flex-1 py-2 px-4 rounded border border-neutral-700 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800 text-neutral-300 font-semibold text-sm transition-colors"
          >
            {translations.ui.pwa.cancel}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 px-4 rounded bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold text-sm transition-colors shadow-lg shadow-amber-600/20"
          >
            {translations.ui.pwa.confirm}
          </button>
        </div>
      </div>
    </div>
  );
};
