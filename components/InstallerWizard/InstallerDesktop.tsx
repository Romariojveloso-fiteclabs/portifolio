import React from "react";

interface InstallerDesktopProps {
  translations: any;
  toggleLanguage: () => void;
  langSwitchLabel: string;
  nextLanguage: string;
  onFinish: () => void;
  Icon: React.FC<{ className?: string }> | null;
  currentStep: { title: string; description: string };
  progress: number;
  handleBack: () => void;
  step: number;
  handleNext: () => void;
  isLastStep: boolean;
}

export const InstallerDesktop: React.FC<InstallerDesktopProps> = ({
  translations,
  toggleLanguage,
  langSwitchLabel,
  nextLanguage,
  onFinish,
  Icon,
  currentStep,
  progress,
  handleBack,
  step,
  handleNext,
  isLastStep,
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-lg bg-gray-900/95 text-white rounded-lg shadow-2xl border border-amber-600/50 flex flex-col overflow-hidden">
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

        <main className="p-6 sm:p-8 flex-grow flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
          {Icon && (
            <div className="flex-shrink-0">
              <Icon className="w-24 h-24 text-gray-100 drop-shadow-lg" />
            </div>
          )}
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-2">{currentStep.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {currentStep.description}
            </p>
          </div>
        </main>

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
      </div>
    </div>
  );
};
