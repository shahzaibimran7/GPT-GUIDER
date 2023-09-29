import React from "react";
import GptProfPic from "../assets/gpt-prof.svg";
import Ellipse from "../assets/Ellipse.svg";
const GptProf = (props) => {
  return (
    <div className="flex xl:mt-18 lg:mt-16 w-full gap-20">
      <div className="flex flex-col mt-7">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6">
          GPT Prof
        </h1>
        <ul>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="mb-20" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Real Time, Interactive Conversations:
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Experience a seamless and dynamic learning journey through
                real-time voice conversations with Chat GPT. It's like having a
                personal tutor at your fingertips.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="mb-20" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Accessibility for All:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Our platform is designed with inclusivity in mind. Whether you
                prefer text-based or voice-based learning, our solution caters
                to your needs, making education accessible to all students.
              </h1>
            </div>
          </div>
        </ul>
      </div>
      <img src={GptProfPic} alt="" />
    </div>
  );
};
export default GptProf;