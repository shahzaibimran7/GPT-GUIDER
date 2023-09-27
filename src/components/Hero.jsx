import React from "react";

const Hero = () => {
  return (
    <div className="xl:pt-[120px] lg:pt-[100px] flex justify-between xl:pb-18 lg:pb-16">
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
          <h1 className="text-white text-lg font-poppins font-semibold leading-[26px]">
            Trusted by more than 100K{" "}
            <span className="text-[#2CB49F]">users</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
