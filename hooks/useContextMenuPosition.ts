import { useLayoutEffect, useState } from "react";
import type { RefObject } from "react";

export const useContextMenuPosition = (
  x: number,
  y: number,
  ref: RefObject<HTMLElement | null>,
  defaultWidth = 192,
  defaultHeight = 120
) => {
  const [coords, setCoords] = useState({ x, y });

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const menuWidth = rect.width || defaultWidth;
      const menuHeight = rect.height || defaultHeight;

      let posX = x;
      let posY = y;

      if (x + menuWidth > window.innerWidth) {
        posX = window.innerWidth - menuWidth - 8;
      }
      if (y + menuHeight > window.innerHeight) {
        posY = window.innerHeight - menuHeight - 8;
      }

      setCoords({ x: posX, y: posY });
    }
  }, [x, y, ref, defaultWidth, defaultHeight]);

  return coords;
};
