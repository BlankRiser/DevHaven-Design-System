import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  isSecondary?: boolean;
  isGhost?: boolean;
  isDanger?: boolean;
  href?: string;
  Icon?: string;
  onClick?: () => void;
  onFocus?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function Button({
  children,
  onClick,
  style,
  isDisabled,
  isSecondary,
  isGhost,
  isDanger,
  href,
  Icon,
  onFocus,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) {
  const universal = `h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6`;

  const disabledColors = `cursor-not-allowed bg-gray-200 text-gray-400`;

  const primaryColors = `bg-blue-600 focus:outline-[1px] focus:outline-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm font-medium text-white border-[1px] border-transparent focus:outline-none`;

  if (isDisabled) {
    return (
      <button
        type="button"
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={`  ${universal} ${disabledColors}`}
      >
        {children}
      </button>
    );
  }

  if (isSecondary && isDisabled) {
    const buttonStyle = ` h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6 
        bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600/10 active:bg-blue-800/10 focus:outline-[1px] focus:outline-blue-600 `;
  } else if (isSecondary) {
    const buttonStyle = ` 
    bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600/10 active:bg-blue-800/10 focus:outline-[1px] focus:outline-blue-600`;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={` h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6
      ${isDisabled && !isSecondary ? disabledColors : primaryColors}
      ${
        isSecondary
          ? "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600/10 active:bg-blue-800/10 focus:outline-[1px] focus:outline-blue-600 "
          : ""
      }
      `}
    >
      {children}
    </button>
  );
}
