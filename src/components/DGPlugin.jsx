import React from "react";
import DGPluginPic from "../Assets/dg-plugin.svg";
import Ellipse from "../Assets/Ellipse.svg";
const DGPlugin = (props) => {
  return (
    <div className="flex xl:mt-20 lg:mt-16 w-full xl:gap-20 lg:gap-10">
      <div className="flex flex-col mt-7">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6 whitespace-nowrap">
          Diagram plugin{" "}
        </h1>
        <ul>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-[60px] lg:mb-28" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Enhanced Understanding:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Visual representation of information helps students understand
                complex topics and see the bigger picture.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-20 lg:mb-36" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Efficient Study:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Instead of manually creating mind maps, students can save time
                by letting the AI generate initial maps which they can then
                customize.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-20 lg:mb-40" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Memory Retention:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Visual aids like mind maps and diagrams are known to improve
                memory retention, making it easier for students to recall
                information during exams.
              </h1>
            </div>
          </div>
        </ul>
      </div>
      <img src={DGPluginPic} alt="" />
    </div>
  );
};
export default DGPlugin;
