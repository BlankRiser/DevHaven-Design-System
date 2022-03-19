import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components";
import Add from "../icons/Add";
import { ComponentWrapper } from "../wrappers/ComponentWrapper";

const Components: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="components" content="DevHaven Custom Compoenets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentWrapper description="Button Variants">
        <Button>
          <Add />
          Primary Icon
        </Button>

        <Button>Primary</Button>
        <Button isDisabled>Disabled</Button>
        <Button isSecondary>Secondary</Button>
        <Button isSecondary isDisabled>
          Secondary
        </Button>
      </ComponentWrapper>
    </>
  );
};

export default Components;
