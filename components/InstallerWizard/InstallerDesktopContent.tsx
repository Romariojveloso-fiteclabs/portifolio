import React from "react";

interface InstallerDesktopContentProps {
  Icon: React.FC<{ className?: string }> | null;
  currentStep: { title: string; description: string };
}

export const InstallerDesktopContent: React.FC<InstallerDesktopContentProps> = ({
  Icon,
  currentStep,
}) => {
  return (
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
  );
};
