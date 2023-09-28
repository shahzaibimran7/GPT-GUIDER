import React from "react";
import DocumentOCRPic from "../assets/document-ocr.svg";
import Ellipse from "../assets/Ellipse.svg";
const DocumentOCR = (props) => {
  return (
    <div className="flex xl:mt-18 lg:mt-16 w-full gap-20">
      <img src={DocumentOCRPic} alt="" />
      <div className="flex flex-col mt-[200px]">
        <h1 className="text-white font-poppins text-4xl font-bold leading-[48px] mb-6">
          DOCUMENT OCR AI{" "}
        </h1>
        <ul>
          <div className="flex gap-3 mb-6">
            <img src={Ellipse} alt="" className="mb-14" />
            <li className=" text-white font-poppins text-lg font-medium leading-7">
              converts scanned and handwritten texts into digital formats. high
              accuracy for both documents and handwritten content, streamlining
              data conversion and accessibility.{" "}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default DocumentOCR;
