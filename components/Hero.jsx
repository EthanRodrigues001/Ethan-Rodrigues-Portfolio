import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <main>
      <div className="rounded-md flex md:items-center md:justify-center pt-32 pb-40 bg-black-100 antialiased bg-grid-white/[0.03] relative overflow-hidden ">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>

        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <div className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mx-auto pb-2">
            Made with Next.js
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2">
            Exploring Mern ...
          </h1>
          <div className="mt-4 font-normal text-base text-white-200 max-w-lg text-center mx-auto">
            <TextGenerateEffect
              words={`Hi! I'm Ethan. This is my first Next.js app made using Aeternity UI, which makes this website so cool :)`}
            />
          </div>
          <div className="mt-4 font-normal text-base text-white-200 max-w-lg pt-2 text-center mx-auto">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
