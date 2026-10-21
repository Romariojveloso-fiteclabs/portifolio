import type { FC } from "react";
import styles from "./CaatingaIcon.module.css";

export const CaatingaIcon: FC<{ className?: string }> = ({ className }) => (
  <img
    src={`${import.meta.env.BASE_URL}caatinga-icon.png`}
    alt=""
    width={64}
    height={64}
    draggable={false}
    className={`${styles.icon} ${className ?? ""}`}
  />
);
