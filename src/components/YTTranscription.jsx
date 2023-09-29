import React from "react";
import YTTranscriptionPic from "../assets/yt-transcription.svg";
import Ellipse from "../assets/Ellipse.svg";

const YTTranscription = (props) => {
  return (
    <div className="flex xl:mt-18 lg:mt-16 w-full gap-20">
      <img src={YTTranscriptionPic} alt="" />

      <div className="flex flex-col mt-[200px]">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6">
          YouTube video Transcription and summarizing{" "}
        </h1>

        <ul>
          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" className="lg:mb-20 xl:mt-2" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              Transcribe and summarize you tube videos just by provide URL of
              video.{" "}
            </li>
          </div>

          <div className="lg:flex lg:gap-3 lg:mb-6">
            <img src={Ellipse} alt="" className="lg:mb-32 xl:mt-2" />
            <li className="text-white font-poppins text-lg font-medium leading-7">
              Save your time and effort and say good bye to manual transcription
              and time-consuming video content analysis.{" "}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default YTTranscription;
