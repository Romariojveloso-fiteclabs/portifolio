import React from "react";

interface WindowControlsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
}

export const WindowControls: React.FC<WindowControlsProps> = ({
  onMinimize,
  onMaximize,
  onClose,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onMinimize}
        className="window-control w-5 h-5 rounded-full bg-green-600 hover:bg-green-500 transition-colors"
        title="Minimize"
        aria-label="Minimize window"
      />
      <button
        onClick={onMaximize}
        className="window-control w-5 h-5 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors"
        title="Maximize"
        aria-label="Maximize window"
      />
      <button
        onClick={onClose}
        className="window-control w-5 h-5 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors"
        title="Close"
        aria-label="Close window"
      />
    </div>
  );
};
