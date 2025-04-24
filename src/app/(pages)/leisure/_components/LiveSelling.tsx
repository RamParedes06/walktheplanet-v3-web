"use client";
import React from "react";
import TextReveal from "../../_components/TextReveal";

const LiveSelling = () => {
  const image =
    "https://res.cloudinary.com/dmxvasob7/image/upload/v1744774791/LiveSellingTiktok_tzywel.webp";
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="h-full flex flex-col justify-end items-start md:items-center gap-[64px] px-[32px] md:px-[80px] py-[112px]">
        <TextReveal>
          <div className="flex flex-col gap-5">
            <h1 className="md:text-[64px] text-[40px] font-semibold">
              TIKTOK LIVE SELLING
            </h1>
            <p className="text-base md:text-2xl font-medium md:text-center italic md:not-italic">
              Premium offers just for you! <br /> Catch our stream for greater
              travel details
            </p>
          </div>
          <button
            onClick={() =>
              window.open("https://www.tiktok.com/@walktheplanetinc", "_blank")
            }
            className="md:self-center w-max bg-white text-[#00537F] md:text-base text-[14px] p-4 mt-5 rounded-[24px] md:rounded-[14px] font-semibold cursor-pointer"
          >
            Grab yours now, for limited time offers
          </button>
        </TextReveal>
      </div>
    </div>
  );
};

export default LiveSelling;
