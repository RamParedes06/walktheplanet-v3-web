"use client";
import React, { useState } from "react";
import BgSwitchBtn from "./BgSwitchBtn";
import { AccomodationImages } from "@/library/AccomodationImages";

const Accomodations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const background = AccomodationImages[activeIndex].image;
  return (
    <div
      className="relative h-screen w-full flex justify-center transition-all ease-in-out"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute space-y-5 flex flex-col justify-center align-center my-[112px] sm:text-center text-left md:text-center lg:text-center xl:text-center 2xl:text-center">
        <h2 className="font-satoshi font-black sm:text-5xl ml-5 lg:text-5xl xl:text-[64px] text-[30px] ">
          ACCOMODATIONS
        </h2>
        <p className="font-generalSans font-medium sm:not-italic italic ml-5 xl:text-2xl text-base 2xl:max-w-full">
          Your dream getaway deserves the best - choose from our various lodging
          options
        </p>
      </div>
      <div className="flex justify-center w-full py-[112px] px-[80px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_69.32%,rgba(0,0,0,0.4)_84.66%,rgba(0,0,0,0.8)_100%)]">
        <div className="absolute h-[40px] space-x-[14px] space-y-3 bottom-60 sm:bottom-50 ml-5 md:bottom-25 2xl:bottom-25">
          {AccomodationImages.map((item, index) => (
            <BgSwitchBtn
              key={item.id}
              className={`sm:text-[16px] text-[14px] md:text-[16px] lg:text-base xl:text-base 2xl:text-base rounded-full ${
                index === activeIndex ? "bg-white text-[#00537F]" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.label}
            </BgSwitchBtn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accomodations;
