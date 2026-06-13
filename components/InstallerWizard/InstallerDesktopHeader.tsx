import React from "react";

interface InstallerDesktopHeaderProps {
  translations: any;
  toggleLanguage: () => void;
  langSwitchLabel: string;
  nextLanguage: string;
  onFinish: () => void;
}

export const InstallerDesktopHeader: React.FC<InstallerDesktopHeaderProps> = ({
  translations,
  toggleLanguage,
  langSwitchLabel,
  nextLanguage,
  onFinish,
}) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-amber-600/50">
      <h1 className="text-lg font-bold text-amber-400">
        {translations.ui.installer.setup_guide}
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 text-sm font-semibold rounded bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label={langSwitchLabel}
        >
          {nextLanguage.toUpperCase()}
        </button>
        <button
          onClick={onFinish}
          className="text-gray-400 text-xl hover:text-white"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </header>
  );
};
