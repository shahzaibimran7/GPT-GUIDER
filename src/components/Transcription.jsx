import React from "react";
import TranscriptionPic from "../Assets/transcription.svg";
import Ellipse from "../Assets/Ellipse.svg";

const Transcription = (props) => {
  return (
    <div className="flex xl:mt-20 lg:mt-16 w-full xl:gap-20 lg:gap-10">
      <img src={TranscriptionPic} alt="" />

      <div className="flex flex-col mt-[200px]">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6">
          Audio & video Transcription and summarizing
        </h1>

        <ul>
          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" className="lg:mb-20 xl:mt-2" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              upload an audio or Mp4 file and get the transcribed text with a
              summary.{" "}
            </li>
          </div>

          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" className="lg:mb-12 xl:mt-2" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              Upload a video and get the transcribed text with a summary.{" "}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Transcription;
