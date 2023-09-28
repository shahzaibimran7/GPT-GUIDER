import React from "react";
import HeriIcon from "../assets/hero-image.svg";
import Avatars from "../assets/avatars.svg";
const Hero = () => {
  return (
    <section className="xl:pt-[120px] lg:pt-[100px] flex justify-between ">
      <div className="flex flex-col">
        <h1 className="text-white text-4xl font-poppins font-bold xl:leading-[44px] lg:leading-[36px]">
          Save Your Time <span className="text-[#2CB49F]">&</span> Study Faster
        </h1>
        <h1 className="text-white text-[22px] font-poppins font-normal leading-[30px] pt-5">
          Increase your productivity, Elevate your learning with the most
          comprehensive and Powerful AI tools.
        </h1>

        <div className="xl:pt-12 lg:pt-10">
          <button className="py-[14px] px-14 border bg-Green-gradient border-[#07091E] rounded-[50px] text-white font-poppins font-medium text-base leading-6">
            Get Started
          </button>
        </div>
        <div className="flex pt-[142px]">
          <img src={Avatars} alt="" />
          <h1 className="text-white text-lg font-poppins font-semibold leading-[26px] ml-3 mt-1">
            Trusted by more than 100K{" "}
            <span className="text-[#2CB49F]">users</span>
          </h1>
        </div>
      </div>
      <img src={HeriIcon} alt="" />
    </section>
  );
};

export default Hero;
