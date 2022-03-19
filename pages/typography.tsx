import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components";

const Typography: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="components" content="DevHaven Custom Compoenets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-4 flex flex-col gap-8 ">
        <h1 className=" text-4xl mr-auto text-gray-800 dark:text-gray-300">
          Typography
        </h1>
        <div className="flex justify-center items-center bg-gray-200 px-6 rounded-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-6xl text-gray-800 font-medium">Inter</h2>
            <div className="flex gap-2">
              <span className="text-gray-600 font-normal">Regular</span>
              <span className="text-gray-600 font-medium">Medium</span>
              <span className="text-gray-600 font-semibold">Semibold</span>
              <span className="text-gray-600 font-bold">Bold</span>
            </div>
            <p className="text-gray-600">
              &quot;Words have meaning. Type has spirit. The combination is
              spectacular. &quot;
            </p>
          </div>
          <h1 className="text-[10rem] mx-4 text-gray-800">Aa</h1>
        </div>
      </section>
      <section className="py-4 flex flex-col gap-8 w-full">
        <h2 className="text-2xl mr-auto text-gray-800 dark:text-gray-300 border-b border-gray-800 pb-4">
          Style
        </h2>
        <div className="flex ">
          <div className="w-1/4">
            <h1 className="text-xl font-bold my-1">H1</h1>
            <p className="text-gray-600">Inter Bold</p>
            <p className="text-gray-600">32/auto</p>
            <p className="text-gray-600">LS:0.5 px</p>
          </div>
          <p className="text-xl font-bold w-[32rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            dignissimos!
          </p>
        </div>
        <div className="flex ">
          <div className="w-1/4">
            <h1 className="text-lg font-bold my-1">H2</h1>
            <p className="text-gray-600">Inter Bold</p>
            <p className="text-gray-600">28/auto</p>
            <p className="text-gray-600">LS:0.5 px</p>
          </div>
          <p className="text-lg font-bold w-[28rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            dignissimos!
          </p>
        </div>
      </section>
    </>
  );
};

export default Typography;
