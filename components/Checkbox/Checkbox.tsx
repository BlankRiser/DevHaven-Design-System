import { ReactNode } from "react";

interface CheckboxProps {
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

export function Checkbox({ children }: CheckboxProps) {
  return <div>{children}</div>;
}
