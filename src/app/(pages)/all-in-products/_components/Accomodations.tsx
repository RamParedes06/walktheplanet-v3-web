"use client";
import React, { useState } from "react";
import BgSwitchBtn from "./BgSwitchBtn";
import { AccomodationImages } from "@/library/AccomodationImages";

const Accomodations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const background = AccomodationImages[activeIndex].image;
  return (
    <div
      className="relative h-screen w-full flex justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute space-y-5 flex flex-col text-center justify-center align-center my-[112px]">
        <h2 className="font-satoshi font-black sm:text-4xl lg:text-5xl xl:text-[64px] text-[30px] ">
          ACCOMODATIONS
        </h2>
        <p className="font-generalSans font-medium xl:text-2xl text-base">
          Your dream getaway deserves the best - choose from our various lodging
          options
        </p>
      </div>

      <div className="absolute h-[40px] space-x-[14px] space-y-3 bottom-60 sm:bottom-50 ml-5 md:bottom-50 2xl:bottom-25 bottom-40">
        {AccomodationImages.map((item, index) => (
          <BgSwitchBtn
            key={item.id}
            className={`rounded-full ${
              index === activeIndex ? "bg-white text-[#00537F]" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </BgSwitchBtn>
        ))}
      </div>
    </div>
  );
};

export default Accomodations;
