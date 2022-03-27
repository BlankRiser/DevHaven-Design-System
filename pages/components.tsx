import type { NextPage } from "next";
import Head from "next/head";
import { Accordion, Button } from "../components";
import Add from "../icons/Add";
import { ComponentWrapper } from "../wrappers/ComponentWrapper";

const Components: NextPage = () => {
  return (
    <>
      <Head>
        <title>Midas - Components</title>
        <meta name="components" content="DevHaven Custom Componets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentWrapper description="Button Variants">
        <Button
          onClick={() => {
            alert("nkjnsdkc");
          }}
        >
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

      <ComponentWrapper description="Typography Elements">
        <h1 className="text-6xl">header 1</h1>
        <h2 className="text-5xl">header 2</h2>
        <h3 className="text-4xl">header 3</h3>
        <h4 className="text-2xl">header 4</h4>
        <h5 className="text-xl">header 5</h5>
        <p className="text-sub-01">subtitle 1</p>
        <p className="text-sub-02">subtitle 2</p>
        <p className="text-sub-03">subtitle 3</p>
        <p className="text-body-1">body-1</p>
        <p className="text-body-2">body-2</p>
        <p className="text-body-3">body-3</p>
        <p className="text-button">button</p>
        <p className="text-caption">button</p>
        <p className="text-caption">captions</p>
        <p className="text-label">labels</p>
        <p className="text-helper">helper-text</p>
      </ComponentWrapper>

      <Accordion />
    </>
  );
};

export default Components;
