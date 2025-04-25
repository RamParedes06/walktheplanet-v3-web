"use client";
import { DocumentationImages } from "@/library/DocumentationImages";
import React, { useState } from "react";
import BgSwitchBtn from "./BgSwitchBtn";

const Documentation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const background = DocumentationImages[activeIndex].image;

  return (
    <div
      className="relative h-screen w-full transition-all ease-in-out"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-screen bg-[linear-gradient(180deg,rgba(5,18,28,0)_63.73%,rgba(5,18,28,0.4)_100%),linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.2)_24.04%,rgba(0,0,0,0)_48.08%),linear-gradient(180deg,rgba(5,18,28,0)_44.33%,rgba(5,18,28,0.8)_74.87%)]">
        <div className="absolute w-full bottom-0 flex flex-col justify-center align-center px-0 sm:px-[80px] space-y-8 sm:space-y-10">
          <h2 className="font-satoshi font-black sm:text-5xl ml-5 lg:text-5xl xl:text-[64px] text-[30px] ">
            DOCUMENTATION
          </h2>
          <p className="font-generalSans font-normal flex flex-col sm:flex-row sm:not-italic italic ml-5 xl:text-2xl text-base 2xl:max-w-full">
            <span>
              Worry-free planning <b>starts here! </b>
            </span>
            &nbsp;
            <span>
              Let our experts help you in handling your travel requirements.
            </span>
          </p>

          <div className="w-full py-[85px]">
            <div className="absolute h-[40px] space-x-[14px] space-y-3 bottom-30 sm:bottom-20 ml-5 md:bottom-25 2xl:bottom-25">
              {DocumentationImages.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Documentation;
