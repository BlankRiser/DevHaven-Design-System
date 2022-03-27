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
    <div className="h-screen max-w-7xl m-4 mx-auto sm:px-6 xl:max-w-[90rem] xl:px-0 flex flex-col items-center ">
      <section className="sticky top-2 w-full rounded bg-gray-600/10 dark:bg-gray-900/70 flex justify-center">
        <nav className="rounded flex items-center gap-4 p-2 text-gray-600 dark:text-gray-300 ">
          <Link href="/">
            <a
              className={`${
                pathname === "/"
                  ? " border-b border-yellow-400"
                  : "border-b border-gray-200"
              }`}
            >
              Home{" "}
            </a>
          </Link>
          <Link href="/typography">
            <a
              className={`${
                pathname === "/typography"
                  ? " border-b border-yellow-400"
                  : "border-b border-gray-200"
              }`}
            >
              Typography
            </a>
          </Link>
          <Link href="/components">
            <a
              className={`${
                pathname === "/components"
                  ? " border-b border-yellow-400"
                  : "border-b border-gray-200"
              }`}
            >
              Components
            </a>
          </Link>
          <ThemeToggle />
        </nav>
      </section>
      {children}
    </div>
  );
}
