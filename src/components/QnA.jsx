import React from "react";
import QnAPic from "../assets/qna.svg";
import Ellipse from "../assets/Ellipse.svg";

const QnA = (props) => {
  return (
    <div className="flex xl:mt-18 lg:mt-16 w-full gap-20">
      <div className="flex flex-col mt-[200px]">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6">
          Questions & Answers Generator{" "}
        </h1>

        <ul>
          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              generates diverse test questions for self-assessment purposes.
              These questions cover various topics, ensuring comprehensive
              understanding and preparation for exams or assessments.
            </li>
          </div>
        </ul>
      </div>
      <img src={QnAPic} alt="" />
    </div>
  );
};

export default QnA;
