"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import GridGlobe from "@/components/ui/GridGlobe";
import Image from "next/image";
import {
  IconMoodHappy,
  IconClipboardCopy,
  IconWorldWww,
  IconSignature,
  IconSparkles,
} from "@tabler/icons-react";
import { EvervaultCard } from "@/components/ui/hower-card";

import dynamic from "next/dynamic";

const Ecard = dynamic(() => import("@/components/ui/evervault-card"), {
  ssr: false,
});

const Skeleton = () => (
  // <Ecard className="dark:border-white/[0.1] border-[1px] border-transparent rounded-xl min-h-[6rem] " />

  <EvervaultCard
    className="dark:border-white/[0.1] border-[1px] border-transparent rounded-xl min-h-[6rem]"
    text="hover"
  />
);

const Globecont = () => (
  <div className="sm:w-24 sm:h-24 md:h-full md:w-full lg:h-full lg:w-full  rounded-xl">
    <GridGlobe />
  </div>
);

const Grid4 = () => (
  <BackgroundGradientAnimation className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img src="/ethan.png" alt="/ethan.png" className="" />
  </BackgroundGradientAnimation>
);

const GridImg2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative dark:border-white/[0.1] border-[1px] border-transparent">
    <img src="/grid.svg" alt="/grid.svg" className="w-full h-full" />
    <img src="/b4.svg" alt="/b4.svg" className="absolute inset-x-0 bottom-0" />
  </div>
);
const GridImg3 = () => (
  <div className="bg-[#04071D] flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative dark:border-white/[0.1] border-[1px] border-transparent">
    <img src="/grid.svg" alt="/grid.svg" className="w-full h-full" />
    <img
      src="/b5.svg"
      alt="/b5.svg"
      className="absolute bottom-0 right-0 md:w-44 w-32"
    />
  </div>
);
const items = [
  {
    id: 1,
    title: "Here is a 3D globe I made in 5 minutes",
    description: "Find India :)",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2 bg-blue-200",
    header: <Globecont />,
    icon: <IconSparkles className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 2,
    title: "I'm very fascinated by 'Modern Web UI'",
    description: "",
    className: "md:row-span-1  bg-blue-200",
    header: <GridImg2 />,
    icon: <IconMoodHappy className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 3,
    title: "Currently rebuilding the Blingo App",
    description: "www.blingo.tech",
    className: "md:row-span-1  bg-blue-200",
    header: <GridImg3 />,
    icon: <IconWorldWww className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 4,
    title: "",
    description: "",
    header: <Grid4 />,
    className: "md:row-span-1  bg-blue-200",
  },

  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "Email me ur idea.",
    className: "md:col-span-2 bg-blue-200",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];

const Grid = () => {
  return (
    <div className="pl-4 pr-4 pb-4">
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Grid;
