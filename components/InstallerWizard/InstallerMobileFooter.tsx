import React from "react";

interface InstallerMobileFooterProps {
  progress: number;
  steps: any[];
  step: number;
  isLastStep: boolean;
  isInstallable?: boolean;
  install?: () => void;
  handleNext: () => void;
  translations: any;
}

export const InstallerMobileFooter: React.FC<InstallerMobileFooterProps> = ({
  progress,
  steps,
  step,
  isLastStep,
  isInstallable,
  install,
  handleNext,
  translations,
}) => {
  return (
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
  );
};
