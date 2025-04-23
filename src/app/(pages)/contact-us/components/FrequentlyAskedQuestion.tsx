"use client";

import Image from "next/image";

import bg from "@/assets/svg/contact/bgIllustration.svg";
import FAQSection from "./FaqSection";

export default function FrequentlyAskedQuestion() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto">
      <section className="w-full lg:w-1/2 bg-[#E7F0FF] flex flex-col justify-end relative overflow-hidden h-auto">
        <div
          className="absolute"
          style={{
            width: "1190px",
            height: "1190px",
            top: "-300px",
            right: "-350px",
          }}
        >
          <Image src={bg} alt="Background Illustration" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-2 py-20 md:px-10 lg:px-20 ml-4 lg:ml-8 mb-6">
          <h1 className="text-[20px] md:text-3xl lg:text-[32px] text-[#333] font-normal leading-none">
            FREQUENTLY
          </h1>
          <h1 className="text-[40px] md:text-3xl lg:text-[64px] text-[#333] font-semibold leading-none mt-2">
            ASKED QUESTION
          </h1>
          <p className="text-base lg:text-[24px] mt-4 lg:mt-8 text-[#333]">
            Before you pack your bags, get the details you need for a
            stress-free trip
          </p>
        </div>
      </section>

      {/* Right Section */}
      <section className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center min-h-screen">
        {/* Form */}
        <FAQSection />
      </section>
    </div>
  );
}
