import React from "react";
import BrowsingPluginPic from "../assets/browsing-plugin.svg";
import Ellipse from "../assets/Ellipse.svg";

const BrowsingPlugin = (props) => {
  return (
    <div className="flex xl:mt-18 lg:mt-16 w-full xl:gap-20 lg:gap-10">
      <img src={BrowsingPluginPic} alt="" />

      <div className="flex flex-col mt-[200px]">
        <h1 className="text-white font-poppins xl:text-4xl lg:text-3xl font-bold xl:leading-[48px] lg:leading-[36px] mb-6 whitespace-nowrap">
          Browsing Plugin
        </h1>

        <ul>
          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" className="lg:mb-5 xl:mt-2" />
            <li className="text-white font-poppins xl:text-lg lg:text-base font-medium leading-7">
              Search and summarize the web.
            </li>
          </div>

          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" className="lg:mb-5 xl:mt-2" />
            <li className="text-white font-poppins xl:text-lg lg:text-base font-medium leading-7">
              Gain immediate and updated knowledge.
            </li>
          </div>

          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" className="lg:mb-5 xl:mt-2" />
            <li className="text-white font-poppins xl:text-lg lg:text-base font-medium leading-7">
              Generate articles, from one or more URLs.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default BrowsingPlugin;
