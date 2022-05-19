import React from "react";
import { iconList, iconRenderer } from "./iconList";

interface Props {
  size: number;
  name: keyof typeof iconList;
  color?: string;
  viewBox?: string;
  rotation?: string;
}

const Icon = (props: Props) => {
  const { size, name, color, viewBox } = props;
  return (
    <svg
      viewBox={viewBox || "0 0 32 32"}
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconRenderer(name, color || "#1C1C1E")}
    </svg>
  );
};

export default Icon;
