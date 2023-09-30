import React from "react";
import ChatPdfPic from "../Assets/chat-pdf.svg";
import Ellipse from "../Assets/Ellipse.svg";
const ChatPdf = (props) => {
  return (
    <div className="flex xl:mt-18 lg:mt-16 w-full gap-20">
      <div className="flex flex-col mt-7">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6 whitespace-nowrap">
          Chat With PDF
        </h1>
        <ul>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-[56px] lg:mb-36" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Education:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Summarize textbooks, clarify concepts, prepare for exams, ask
                questions based on your books, and answer (MCQs).
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-[56px] lg:mb-28" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Research:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                You can upload PDFs in any language and receive answers in your
                preferred language.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-[56px] lg:mb-28" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Any language:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Upload scientific papers and academic articles to obtain the
                information you need for your research.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-10 lg:mb-20" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7 ">
                Sources included:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7 xl:mb-3">
                Every answer will include the sources of the relevant pages.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-[56px] lg:mb-28" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                Simple and Secure:{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Fast, easy, free and secure! Files are stored in a secure cloud
                storage and will never be shared.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="xl:mb-32 lg:mb-72" />
            <div className="flex flex-col">
              <li className=" text-white font-poppins text-lg font-medium leading-7">
                OCR Feature: save your time and effort{" "}
              </li>
              <h1 className="text-white font-poppins text-lg font-normal leading-7">
                Quickly extract text from images or scanned documents shared by
                users, reducing manual data entry.
              </h1>
              <h1 className="text-white font-poppins text-lg font-normal leading-7 mt-3">
                No need to write long question just scan or take photo of your
                question and get answers quickly.
              </h1>
            </div>
          </div>
        </ul>
      </div>
      <img src={ChatPdfPic} alt="" />
    </div>
  );
};
export default ChatPdf;
