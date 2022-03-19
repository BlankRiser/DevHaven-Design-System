import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageWrapper({ children }: Props) {
  return (
    <div className="h-screen max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 flex flex-col justify-center items-center ">
      {children}
    </div>
  );
}
