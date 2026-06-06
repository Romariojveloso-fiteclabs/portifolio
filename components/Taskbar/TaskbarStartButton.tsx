import React from "react";

interface TaskbarStartButtonProps {
  onClick: () => void;
  label: string;
}

export const TaskbarStartButton: React.FC<TaskbarStartButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 h-full font-bold text-base bg-gray-900 hover:bg-amber-800/60 rounded-sm transition-colors flex items-center gap-2 flex-shrink-0"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
      {label}
    </button>
  );
};
