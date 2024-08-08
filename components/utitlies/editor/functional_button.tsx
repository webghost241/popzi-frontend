import React from "react";
import { IconType } from "react-icons";

interface FunctionalButtonProps {
  icon: IconType;
  command: string;
  isActive: boolean;
  onClick: (command: string) => void;
}

const FunctionalButton: React.FC<FunctionalButtonProps> = ({
  icon: Icon,
  command,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(command)}
      className={`w-10 h-10 hidden md:flex items-center justify-center transition-all duration-200   
                ${
                  isActive
                    ? "bg-btnbg text-white"
                    : "bg-lightgrey text-textgrey"
                }  
                focus:outline-none `}
      style={{ width: "40px", height: "40px", borderRadius: "6px" }}
      aria-label={command}
    >
      <Icon />
    </button>
  );
};

export default FunctionalButton;
