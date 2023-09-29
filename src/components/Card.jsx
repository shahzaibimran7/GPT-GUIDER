import React from "react";

const Card = (props) => {
  return (
    <div className="w-[360px] custom-border h-[330px] text-white bg-black rounded-[3.125rem] flex flex-col justify-center items-center overflow-hidden">
      <img
        src={props.icon}
        alt="Icon"
        height={120}
        width={160}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          margin: "0",
          padding: "0",
        }}
      />
      <div className="text-center">
        <div className="leading-8 text-white py-[1rem] text-2xl font-poppins font-bold">
          {props.title}
        </div>
        <div className="font-medium px-5 text-base font-poppins text-center">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
