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
          <Add className="fill-gray-50" width={10} height={10} />
          Primary Icon
        </Button>

        <Button>Primary</Button>
        <Button isDisabled>Disabled Primary</Button>
        <Button isSecondary>
          <Add className="fill-blue-600" width={10} height={10} />
          Secondary
        </Button>
        <Button isSecondary>Secondary</Button>
        <Button isSecondary isDisabled>
          Disabled Secondary
        </Button>
        <Button isGhost>Ghost</Button>
        <Button isGhost isDisabled>
          Disabled Ghost
        </Button>
      </ComponentWrapper>
    </>
  );
};

export default Components;
