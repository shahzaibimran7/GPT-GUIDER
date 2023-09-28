import React from "react";
import BrowsingPluginPic from "../assets/browsing-plugin.svg";
import Ellipse from "../assets/Ellipse.svg";

const BrowsingPlugin = (props) => {
  return (
    <div className="flex xl:mt-18 lg:mt-16 w-full gap-20">
      <img src={BrowsingPluginPic} alt="" />

      <div className="flex flex-col mt-[200px]">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6">
          Browsing Plugin
        </h1>

        <ul>
          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              Search and summarize the web.
            </li>
          </div>

          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              Gain immediate and updated knowledge.
            </li>
          </div>

          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              Generate articles, from one or more URLs.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default BrowsingPlugin;
