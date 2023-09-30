import React from "react";
import Twitter from "../Assets/twitter.svg";
import Facebook from "../Assets/facebook.svg";
import LinkedIn from "../Assets/Linkedin.svg";

const Footer = () => {
  return (
    <div className="flex flex-col pb-24">
      <footer className="flex justify-between xl:mt-24 lg:mt-16 w-full">
        <a
          href="/"
          className="text-white text-center font-poppins font-semibold text-2xl leading-[32px] pt-2"
        >
          <span className="text-[#00B6BD] text-shadow-custom text-shadow-lg">
            GPT
          </span>{" "}
          <span className="text-shadow-custom text-shadow-lg">Guider</span>
        </a>{" "}
        <div className="flex flex-col">
          <h1 className="text-lg font-poppins font-bold leading-7 text-white ">
            Home
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Features
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Pricing{" "}
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            About us{" "}
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-poppins font-bold leading-7 text-white ">
            Terms
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Privacy Policy
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Terms and Conditions{" "}
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Copyright Policy{" "}
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Security{" "}
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-poppins font-bold leading-7 text-white ">
            Support
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            FAQs
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Contact us{" "}
          </h1>
          <h1 className="text-base font-poppins mt-6 leading-6 text-white">
            Help{" "}
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-poppins font-bold leading-7 text-white ">
            Follow us{" "}
          </h1>
          <div className="flex gap-3 mt-6">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
      </footer>
      <div className="mt-10">
        <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="10"
            y1="50"
            x2="100%"
            y2="50"
            style={{
              strokeWidth: "1px",
              stroke: "rgba(255, 255, 255, 0.30)",
              filter: "drop-shadow(0px 4px 30px rgba(78, 227, 157, 0.50))",
            }}
          />
        </svg>
      </div>
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-[#F7F6F2] font-poppins text-sm leading-5 font-normal">
          Copyright © 2023 GPT Guider All rights reserved
        </h1>
      </div>
    </div>
  );
};
export default Footer;
