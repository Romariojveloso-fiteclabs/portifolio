import React from "react";

interface WindowResizerProps {
  handleResizeStart: (e: React.MouseEvent<HTMLDivElement>, direction: string) => void;
}

const DIRECTIONS = ["n", "s", "e", "w", "nw", "ne", "sw", "se"] as const;

export const WindowResizer: React.FC<WindowResizerProps> = ({ handleResizeStart }) => {
  return (
    <>
      {DIRECTIONS.map((dir) => (
        <div
          key={dir}
          className={`resizer resizer-${dir}`}
          onMouseDown={(e) => handleResizeStart(e, dir)}
        />
      ))}
    </>
  );
};
