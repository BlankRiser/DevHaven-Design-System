import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function ButtonDisabled({ children, onClick, style }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`w-24 h-12 text-center rounded-sm bg-blue-06 focus:outline-[1px] focus:outline-blue-06 hover:bg-blue-07 active:bg-blue-08 
      py-3 px-6 text-sm font-medium text-white border-[1px] border-transparent focus:outline-none`}
    >
      {children}
    </button>
  );
}
