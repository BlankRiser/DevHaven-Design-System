import { Disclosure } from "@headlessui/react";
import Chevron from "@/icons/Chevron";
import { ReactNode } from "react";

interface AccrodionProps {
  children?: ReactNode;
}

export function Accordion({ children }: AccrodionProps) {
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-transparent rounded-lg hover:bg-gray-100  active:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-75">
                <span>Title 1</span>
                <Chevron
                  width={10}
                  height={10}
                  className={`${
                    open ? "transform rotate-180" : ""
                  } text-purple-500 fill-blue-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If youre unhappy with your purchase for any reason, email us
                within 90 days and well refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <Chevron
                  width={10}
                  height={10}
                  className={`${
                    open ? "transform rotate-180" : ""
                  } text-purple-500 fill-blue-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
