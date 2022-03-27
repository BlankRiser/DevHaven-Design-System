import { SVGProps } from "react";

export default function Chevron(props: SVGProps<SVGSVGElement>) {
  const { className, width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 6 0 1 .7.3 5 4.6 9.3.3l.7.7-5 5Z" />
    </svg>
  );
}
