import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components";

const Typography: NextPage = () => {
  return (
    <>
      <Head>
        <title>Midas - Typography</title>
        <meta name="components" content="DevHaven Custom Compoenets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className=" px-1 md:px-6 py-4 flex flex-col gap-8 w-full">
        <h1 className=" text-4xl mr-auto text-gray-800 dark:text-gray-300">
          Typography
        </h1>
        <div className=" flex flex-col md:flex-row justify-between items-baseline md:items-center bg-gray-200 px-2 md:px-6 rounded-lg">
          <div className="order-2 md:order-1 flex flex-col gap-2 p-4">
            <h2 className="text-6xl text-gray-800 font-medium">Inter</h2>
            <div className="flex gap-2">
              <span className="text-gray-600 font-normal">Regular</span>
              <span className="text-gray-600 font-medium">Medium</span>
              <span className="text-gray-600 font-semibold">Semibold</span>
              <span className="text-gray-600 font-bold">Bold</span>
            </div>
            <p className=" text-gray-600 ">
              &quot;Words have meaning. Type has spirit. The combination is
              spectacular. &quot;
            </p>
          </div>
          <h1 className="p-4 order-1 md:order-2 text-[10rem] md:mx-4 text-gray-800">
            Aa
          </h1>
        </div>
      </section>
      <section className="px-1 md:px-6  py-4 flex flex-col gap-8 w-full divide-y">
        <h2 className="text-2xl mr-auto text-gray-800 dark:text-gray-300 border-b border-gray-800 pb-4">
          Style
        </h2>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
            <h1 className="w-1/2 text-[4rem] leading-[130%] font-medium my-1">
              H1
            </h1>
            <div className="w-1/2">
              <p className="text-gray-400">&#8212; Medium(500)</p>
              <p className="text-gray-400">&#8212; 64px / 130%</p>
              <p className="text-gray-400">&#8212; LS:0 px</p>
            </div>
          </div>
          <p className="text-[4rem] font-medium xl:text-[4rem]">Header One</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
            <h2 className="w-1/2 text-5xl leading-[130%] font-normal my-1">
              H2
            </h2>
            <div className="w-1/2">
              <p className="text-gray-400">&#8212; Regular(400)</p>
              <p className="text-gray-400">&#8212; 48px / 130%</p>
              <p className="text-gray-400">&#8212; LS:0 px</p>
            </div>
          </div>
          <p className="text-5xl leading-[130%] font-normal">Header Two</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
            <h3 className="w-1/2 text-[2rem]  leading-[130%] font-normal my-1">
              H3
            </h3>
            <div className="w-1/2">
              <p className="text-gray-400">&#8212; Regular(400)</p>
              <p className="text-gray-400">&#8212; 32px / 130%</p>
              <p className="text-gray-400">&#8212; LS:0 px</p>
            </div>
          </div>
          <p className="text-[2rem] leading-[130%] font-normal">Header Three</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
            <h4 className="w-1/2 text-2xl leading-[130%] font-semibold my-1">
              H4
            </h4>
            <div className="w-1/2">
              <p className="text-gray-400">&#8212; SemiBold(600)</p>
              <p className="text-gray-400">&#8212; 24px / 130%</p>
              <p className="text-gray-400">&#8212; LS:0 px</p>
            </div>
          </div>
          <p className="text-2xl leading-[130%] font-semibold">Header Four</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
            <h5 className="w-1/2 text-xl leading-[130%] tracking-wide font-medium my-1">
              H5
            </h5>
            <div className="w-1/2">
              <p className="text-gray-400">&#8212; Medium(500)</p>
              <p className="text-gray-400">&#8212; 20px / 130%</p>
              <p className="text-gray-400">&#8212; LS:0.2 px</p>
            </div>
          </div>
          <p className="text-xl leading-[130%] tracking-wide font-medium">
            Header Five
          </p>
        </div>
      </section>
    </>
  );
};

export default Typography;
