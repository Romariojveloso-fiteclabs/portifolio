import React from "react";
import { TaskbarFooter } from "./Taskbar/TaskbarFooter";
import type { TaskbarProps } from "../types";

export const Taskbar: React.FC<TaskbarProps> = (props) => {
  return <TaskbarFooter {...props} />;
};
