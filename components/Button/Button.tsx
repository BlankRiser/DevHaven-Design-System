import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
  ...props
}: ButtonProps) {
  const universal = `h-12 rounded-sm flex justify-center items-center gap-4 py-3 px-6`;

  const disabledColors = `cursor-not-allowed bg-gray-02 text-gray-04`;

  const primaryColors = `bg-blue-06 focus:outline-[1px] focus:outline-blue-06 hover:bg-blue-07 active:bg-blue-08 text-sm font-medium text-white border-[1px] border-transparent focus:outline-none`;

  if (isSecondary && isDisabled) {
    return (
      <button
        type="button"
        disabled
        {...props}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={` 
        cursor-not-allowed bg-transparent text-gray-04 border border-gray-04 `}
      >
        {children}
      </button>
    );
  }

  if (isSecondary) {
    return (
      <button
        type="button"
        {...props}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={` 
        bg-transparent focus:outline-[1px] focus:outline-blue-06 hover:bg-blue-06/10 active:bg-blue-08/10 text-sm font-medium text-blue-06 border-[1px] border-blue-06 focus:outline-none`}
      >
        {children}
      </button>
    );
  }
  if (isGhost && isDisabled) {
    return (
      <button
        type="button"
        {...props}
        disabled
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={`
        cursor-not-allowed bg-transparent text-gray-04`}
      >
        {children}
      </button>
    );
  }
  if (isGhost) {
    return (
      <button
        type="button"
        {...props}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={`
        bg-transparent focus:outline-[1px] focus:outline-blue-06 hover:bg-gray-100 active:bg-gray-200 text-sm font-medium text-blue-06 focus:outline-none`}
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
        {...props}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        className={`   ${disabledColors}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      // onClick={onClick}
      {...props}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`  ${primaryColors}`}
    >
      {children}
    </button>
  );
}
