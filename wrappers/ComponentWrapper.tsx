import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  description?: string;
}
export function ComponentWrapper({ children, description }: Props) {
  return (
    <div
      className="rounded-lg m-2 py-12 p-2 relative  
    bg-gray-100 dark:bg-gray-700
    hover:bg-gray-100/50  dark:hover:bg-gray-700/90
    hover:border 
    hover:border-gray-200 dark:hover:border-gray-500
     flex justify-center items-center gap-4 flex-wrap "
    >
      <p
        className="cursor-pointer 
        bg-gray-200 dark:bg-gray-800
      hover:bg-gray-300 dark:hover:bg-gray-600
      text-gray-600 dark:text-gray-300
      p-2 rounded-br-lg absolute bottom-0 right-0 text-sm font-semibold "
      >
        {description}
      </p>
      {children}
    </div>
  );
}
