import React from "react";

interface DesktopLayoutProps {
  children: React.ReactNode;
  isMobile?: boolean;
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children, isMobile }) => {
  const bgClass = isMobile
    ? "bg-[url('/wallpaper_mobile.png')]"
    : "bg-[url('/wallpaper.png')]";

  return (
    <div className={`w-full h-full bg-cover bg-center ${bgClass} font-sans overflow-hidden`}>
      {children}
    </div>
  );
};
