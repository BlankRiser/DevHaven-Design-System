import { SVGProps } from "react";

export default function Add(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={10}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.563 4.438V.5H4.438v3.938H.5v1.125h3.938V9.5h1.125V5.562H9.5V4.438H5.562Z"
        fill="#fff"
      />
    </svg>
  );
}
