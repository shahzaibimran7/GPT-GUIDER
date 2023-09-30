import React from "react";
import Sparkles from "../Assets/noto_sparkles.svg";
const Card = (props) => {
  return (
    <div className="w-[360px] custom-border h-[330px] text-white bg-black rounded-[3.125rem] flex flex-col justify-center items-center overflow-hidden">
      <img
        src={props.icon}
        alt="Icon"
        // style={{
        //   maxHeight: "100%",
        //   maxWidth: "100%",
        //   margin: "0",
        //   padding: "0",
        // }}
        className="-mt-16"
      />
      <div className="text-center -mt-16">
        <div className="leading-8 text-white py-[1rem] text-2xl font-poppins font-bold">
          {props.isProf ? (
            <span className="flex gap-2 justify-center items-center">
              {props.title} {props.isProf && <img src={Sparkles} alt="/" />}
            </span>
          ) : (
            props.title
          )}
        </div>
        <div className="font-medium px-5 text-base font-poppins text-center">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
