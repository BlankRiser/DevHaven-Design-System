import { SVGProps } from "react";

export default function Add(props: SVGProps<SVGSVGElement>) {
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
      <path d="M5.563 4.438V.5H4.438v3.938H.5v1.125h3.938V9.5h1.125V5.562H9.5V4.438H5.562Z" />
    </svg>
  );
}
