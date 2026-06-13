import type React from "react";
import { useMemo } from "react";

export const useDesktopGridStyle = (isMobile: boolean): React.CSSProperties => {
  return useMemo(
    () => ({
      position: "relative",
      width: "100%",
      height: "100%",
      userSelect: "none",
      minHeight: isMobile ? "960px" : "600px",
    }),
    [isMobile]
  );
};
