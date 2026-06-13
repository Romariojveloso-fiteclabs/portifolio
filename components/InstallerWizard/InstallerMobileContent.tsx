import React from "react";

interface InstallerMobileContentProps {
  Icon: React.FC<{ className?: string }> | null;
  currentStep: { title: string; description: string };
}

export const InstallerMobileContent: React.FC<InstallerMobileContentProps> = ({
  Icon,
  currentStep,
}) => {
  return (
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
  );
};
