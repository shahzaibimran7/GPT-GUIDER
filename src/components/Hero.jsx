import React from "react";
import HeriIcon from "../Assets/hero-image.svg";
import Avatars from "../Assets/avatars.svg";
import Ellipse from "../Assets/Ellipse.png";
import EllipseTopLeft from "../Assets/EllipseLeftTop.png";
import '../App.css'
const Hero = () => {
  return (
    <section className="xl:pt-[120px] lg:pt-[100px] flex justify-between hero-container ellipse-container">
<img src={Ellipse} alt="" className="ellipse"/>
<img src={EllipseTopLeft} alt="" className="ellipseTopLeft"/>
      <div className="flex flex-col">
        <h1 className="text-white text-4xl font-poppins font-bold xl:leading-[44px] lg:leading-[36px]">
          Save Your Time <span className="text-[#2CB49F]">&</span> Study Faster
        </h1>
        <h1 className="text-white text-[22px] font-poppins font-normal leading-[30px] pt-5">
          Increase your productivity, Elevate your learning<br></br> with the most
          comprehensive and<br></br> Powerful AI tools.
        </h1>

        <div className="xl:pt-12 lg:pt-10">
          <button className="py-[14px] px-14 border bg-Green-gradient border-[#07091E] rounded-[50px] text-white font-poppins font-medium text-base leading-6">
            Get Started
          </button>
        </div>
        <div className="flex pt-[142px]">
          <img src={Avatars} alt="" />
          <h1 className="text-white text-lg font-poppins font-semibold leading-[26px] ml-3 mt-1 whitespace-nowrap">
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
