import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { ThemeToggle } from "../members/ThemeToggle";

interface Props {
  children: ReactNode;
}

export function PageWrapper({ children }: Props) {
  const { pathname } = useRouter();
  return (
    <div className="h-screen max-w-3xl m-4 mx-auto sm:px-6 xl:max-w-[90rem] xl:px-0 flex flex-col items-center ">
      <nav className="flex items-center gap-2 p-2 text-gray-600 dark:text-gray-300">
        <Link href="/">
          <a
            className={`${
              pathname === "/" ? "px-1 border-b border-gray-300" : ""
            }`}
          >
            Home{" "}
          </a>
        </Link>
        <Link href="/typography">
          <a
            className={`${
              pathname === "/typography" ? "px-1 border-b border-gray-300" : ""
            }`}
          >
            Typography
          </a>
        </Link>
        <Link href="/components">
          <a
            className={`${
              pathname === "/components" ? "px-1 border-b border-gray-300" : ""
            }`}
          >
            Components
          </a>
        </Link>
      </nav>
      <ThemeToggle />
      {children}
    </div>
  );
}
