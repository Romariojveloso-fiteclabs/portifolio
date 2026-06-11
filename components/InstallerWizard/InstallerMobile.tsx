import React from "react";

interface InstallerMobileProps {
  toggleLanguage: () => void;
  langSwitchLabel: string;
  langSwitchText: string;
  onFinish: () => void;
  Icon: React.FC<{ className?: string }> | null;
  currentStep: { title: string; description: string };
  progress: number;
  steps: any[];
  step: number;
  handleNext: () => void;
  isLastStep: boolean;
  translations: any;
  isInstallable?: boolean;
  install?: () => void;
}

export const InstallerMobile: React.FC<InstallerMobileProps> = ({
  toggleLanguage,
  langSwitchLabel,
  langSwitchText,
  onFinish,
  Icon,
  currentStep,
  progress,
  steps,
  step,
  handleNext,
  isLastStep,
  translations,
  isInstallable,
  install,
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex flex-col p-4 animate-fade-in text-white text-center">
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
      <main className="flex-grow flex flex-col items-center justify-center gap-6 px-4 overflow-hidden">
        {Icon && (
          <div className="flex-shrink-0">
            <Icon className="w-24 h-24 text-gray-100 drop-shadow-lg" />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-semibold mb-3">{currentStep.title}</h2>
          <p className="text-gray-300 leading-relaxed">
            {currentStep.description}
          </p>
        </div>
      </main>
      <footer className="w-full flex flex-col items-center gap-4 pb-4 flex-shrink-0">
        <div className="w-full max-w-xs px-4">
          <div className="bg-gray-700 rounded-full h-1.5 w-full">
            <div
              className="bg-amber-500 h-1.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              role="progressbar"
            ></div>
          </div>
        </div>
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                step === index ? "bg-amber-500 scale-125" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        {isLastStep && isInstallable && install && (
          <button
            onClick={install}
            className="w-full max-w-xs px-4 py-3 text-base font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-slate-950 transition-colors mb-2"
          >
            Instalar RomaOS
          </button>
        )}
        <button
          onClick={handleNext}
          className="w-full max-w-xs px-4 py-3 text-base font-semibold rounded-lg bg-amber-700 hover:bg-amber-600 transition-colors"
        >
          {isLastStep
            ? translations.ui.installer.start_exploring
            : translations.ui.installer.next}
        </button>
      </footer>
    </div>
  );
};
