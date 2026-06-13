import { useState, useEffect, useCallback } from "react";
import { DESKTOP_ICONS_CONFIG } from "../data/config";
import type { DesktopIconType } from "../types";

const LOCAL_STORAGE_KEY = "romaos_desktop_state";

interface SavedIconState {
  id: string;
  gridX: number;
  gridY: number;
  createdAt: number;
  type: "window" | "link";
  url?: string;
}

const getInitialIconsState = (isMobile: boolean): SavedIconState[] => {
  return DESKTOP_ICONS_CONFIG.map((icon, index) => {
    let gridX = 0;
    let gridY = 0;

    if (isMobile) {
      gridX = index % 3;
      gridY = Math.floor(index / 3);
    } else {
      gridX = Math.floor(index / 5);
      gridY = index % 5;
    }

    return {
      id: icon.id,
      gridX,
      gridY,
      createdAt: Date.now() - (DESKTOP_ICONS_CONFIG.length - index) * 1000,
      type: icon.type,
      url: icon.url,
    };
  });
};

export const useDesktopIcons = (isMobile: boolean, translations: any) => {
  useEffect(() => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      // Ignora erros de segurança em iframes de terceiros
    }
  }, []);

  const [iconsState, setIconsState] = useState<SavedIconState[]>(() => {
    return getInitialIconsState(isMobile);
  });

  const getIconLabel = useCallback(
    (icon: SavedIconState) => {
      const configLabel =
        translations.desktop_icons?.[
          icon.id as keyof typeof translations.desktop_icons
        ];
      return configLabel || icon.id;
    },
    [translations]
  );

  const onUpdateIconPosition = useCallback(
    (id: string, gridX: number, gridY: number) => {
      setIconsState((prev) => {
        const targetIndex = prev.findIndex((icon) => icon.id === id);
        if (targetIndex === -1) return prev;

        const updated = [...prev];
        const targetIcon = updated[targetIndex];

        const occupantIndex = updated.findIndex(
          (icon) =>
            icon.id !== id &&
            icon.gridX === gridX &&
            icon.gridY === gridY
        );

        if (occupantIndex !== -1) {
          const occupant = updated[occupantIndex];
          updated[occupantIndex] = {
            ...occupant,
            gridX: targetIcon.gridX,
            gridY: targetIcon.gridY,
          };
        }

        updated[targetIndex] = {
          ...targetIcon,
          gridX,
          gridY,
        };

        return updated;
      });
    },
    []
  );

  const onSortIcons = useCallback(
    (criteria: "name" | "date") => {
      setIconsState((prev) => {
        const sorted = [...prev].sort((a, b) => {
          if (criteria === "name") {
            const labelA = getIconLabel(a).toLowerCase();
            const labelB = getIconLabel(b).toLowerCase();
            return labelA.localeCompare(labelB);
          } else {
            return a.createdAt - b.createdAt;
          }
        });

        const maxRows = isMobile ? 8 : 5;
        return sorted.map((icon, index) => {
          const gridX = Math.floor(index / maxRows);
          const gridY = index % maxRows;
          return {
            ...icon,
            gridX,
            gridY,
          };
        });
      });
    },
    [getIconLabel, isMobile]
  );

  const onResetDesktop = useCallback(() => {
    setIconsState(getInitialIconsState(isMobile));
  }, [isMobile]);

  const icons: DesktopIconType[] = iconsState.map((state) => {
    const configIcon = DESKTOP_ICONS_CONFIG.find((c) => c.id === state.id);
    return {
      id: state.id,
      label: getIconLabel(state),
      icon: configIcon?.icon || (() => null),
      type: state.type,
      url: state.url,
      gridX: state.gridX,
      gridY: state.gridY,
      createdAt: state.createdAt,
    };
  });

  return {
    icons,
    onSortIcons,
    onResetDesktop,
    onUpdateIconPosition,
  };
};
