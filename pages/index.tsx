import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components";
import Add from "../icons/Add";
import { ThemeToggle } from "../members/ThemeToggle";
import { ComponentWrapper } from "../wrappers/ComponentWrapper";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DevHaven</title>
        <meta name="description" content="Generated by create next app" />
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

export default Home;
