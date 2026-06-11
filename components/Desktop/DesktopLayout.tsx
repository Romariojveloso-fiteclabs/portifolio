import React from "react";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&h=1080&auto=format&fit=crop')] font-sans overflow-hidden">
      {children}
    </div>
  );
};
