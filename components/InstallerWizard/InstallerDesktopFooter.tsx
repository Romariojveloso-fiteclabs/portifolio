import React from "react";

interface InstallerDesktopFooterProps {
  translations: any;
  progress: number;
  isLastStep: boolean;
  isInstallable?: boolean;
  install?: () => void;
  handleBack: () => void;
  step: number;
  handleNext: () => void;
}

export const InstallerDesktopFooter: React.FC<InstallerDesktopFooterProps> = ({
  translations,
  progress,
  isLastStep,
  isInstallable,
  install,
  handleBack,
  step,
  handleNext,
}) => {
  return (
    <footer className="bg-black/50 p-4 flex justify-between items-center gap-4">
      <div className="flex-grow">
        <div
          className="bg-gray-700 rounded-full h-2 w-full"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="bg-amber-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-1.5 text-right pr-1">
          {translations.ui.installer.progress}: {Math.round(progress)}%
        </p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        {isLastStep && isInstallable && install && (
          <button
            onClick={install}
            className="px-4 py-2 text-sm font-semibold rounded bg-amber-600 hover:bg-amber-500 text-slate-950 transition-colors"
          >
            Instalar RomaOS
          </button>
        )}
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="px-4 py-2 text-sm font-semibold rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {translations.ui.installer.back}
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm font-semibold rounded bg-amber-700 hover:bg-amber-600 transition-colors"
        >
          {isLastStep
            ? translations.ui.installer.finish
            : translations.ui.installer.next}
        </button>
      </div>
    </footer>
  );
};
