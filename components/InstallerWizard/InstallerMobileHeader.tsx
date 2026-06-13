import React from "react";

interface InstallerMobileHeaderProps {
  toggleLanguage: () => void;
  langSwitchLabel: string;
  langSwitchText: string;
  onFinish: () => void;
}

export const InstallerMobileHeader: React.FC<InstallerMobileHeaderProps> = ({
  toggleLanguage,
  langSwitchLabel,
  langSwitchText,
  onFinish,
}) => {
  return (
    <header className="w-full flex justify-between items-center flex-shrink-0">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 text-sm font-semibold rounded-lg bg-amber-900/70 hover:bg-amber-800/70 transition-colors"
        aria-label={langSwitchLabel}
      >
        {langSwitchText}
      </button>
      <button
        onClick={onFinish}
        className="text-gray-400 text-3xl hover:text-white"
        aria-label="Close"
      >
        &times;
      </button>
    </header>
  );
};
