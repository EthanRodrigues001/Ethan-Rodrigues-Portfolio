import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 px-4 w-full">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="w-full mt-12 sm:border-x-0 md:border-x-5 lg:border-x-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-row lg:items-center p-3 py-4 md:p-4 lg:p-6 sm:gap-6 lg:gap-2 gap-2">
              <div className="border border-white/[.2] rounded-xl bg-gradient-to-r from-[#161a31] to-[#06091f] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center p-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-10 w-6"
                />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start text-base md:text-lg font-bold">
                  {card.title}
                </h1>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
