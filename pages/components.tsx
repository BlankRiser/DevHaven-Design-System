import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components";

const Components: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="components" content="DevHaven Custom Compoenets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button />
    </div>
  );
};

export default Components;
