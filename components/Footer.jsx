import { FaEnvelope } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-purple">Me</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I will be very Intrested to do a porject for you. Together we acheive
          our goals.
        </p>
        <a href="mailto:ethanrodrigues25@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaEnvelope />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mx-10 mt-16 md:flex-row flex-col justify-between items-center">
        <p className="pb-2 md:text-base text-sm md:font-normal font-light">
          Made with ❤️️ By Ethan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.link} key={info.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
