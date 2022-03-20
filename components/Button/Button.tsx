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

  if (isSecondary && isDisabled) {
    return (
      <button
        type="button"
        disabled
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={` h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6 
        cursor-not-allowed bg-transparent text-gray-400 border border-gray-400 `}
      >
        {children}
      </button>
    );
  }

  if (isSecondary) {
    return (
      <button
        type="button"
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={`h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6 
        bg-transparent focus:outline-[1px] focus:outline-blue-600 hover:bg-blue-600/10 active:bg-blue-800/10 text-sm font-medium text-blue-600 border-[1px] border-blue-600 focus:outline-none`}
      >
        {children}
      </button>
    );
  }
  if (isGhost && isDisabled) {
    return (
      <button
        type="button"
        disabled
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={`h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6 
        cursor-not-allowed bg-transparent text-gray-400`}
      >
        {children}
      </button>
    );
  }
  if (isGhost) {
    return (
      <button
        type="button"
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={`h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6 
        bg-transparent focus:outline-[1px] focus:outline-blue-600 hover:bg-gray-100 active:bg-gray-200 text-sm font-medium text-blue-600 focus:outline-none`}
      >
        {children}
      </button>
    );
  }

  if (isDisabled) {
    return (
      <button
        type="button"
        disabled
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

  return (
    <button
      type="button"
      onClick={onClick}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={` h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6 bg-blue-600 focus:outline-[1px] focus:outline-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm font-medium text-white border-[1px] border-transparent focus:outline-none`}
    >
      {children}
    </button>
  );
}
