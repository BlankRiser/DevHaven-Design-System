import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  description?: string;
}
export function ComponentWrapper({ children, description }: Props) {
  return (
    <div className="my-2 relative w-full h-1/3 bg-gray-01 flex flex-col justify-center items-center">
      <p className="bg-gray-02 p-2 absolute bottom-0 right-0">{description}</p>
      {children}
    </div>
  );
}
