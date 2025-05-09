import React from "react";

import TextReveal from "@/app/(pages)/_components/TextReveal";

const bg =
  "https://res.cloudinary.com/dmxvasob7/image/upload/v1745461999/cc46bdcce0720f77fcd7ca98f2890137ddd0abbf_uhujak.webp";

const bgMobile =
  "https://res.cloudinary.com/dmxvasob7/image/upload/v1746760744/Cruises_unjdkp.png";

function Cruise() {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Reversed background image */}
      {/* Desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] z-0"
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Mobile */}
      <div
        className="md:hidden block absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgMobile})` }}
      />

      {/* Overlay and content on top */}
      <div
        className="overlay flex absolute inset-0 top-0 z-10"
        style={{
          background:
            "linear-gradient(185.25deg, rgba(0, 169, 206, 0) 20.67%, rgba(255, 255, 255, 0.26304) 60.44%, #FFFFFF 82.53%)",
        }}
      >
        <div className="self-end w-full">
          <div className="max-w-[1440px] px-[80px] max-[490px]:px-[20px] py-[112px] max-[490px]:py-[80px] z-10">
            <div className="flex flex-col text-2xl max-[490px]:text-xl font-generalSans">
              <TextReveal>
                <p className="text-[64px] font-extrabold text-[#14476F] font-satoshi uppercase max-[490px]:text-[40px]">
                  CRUISES
                </p>
                <p className="flex flex-col gap-[14px] p-0 text-black max-[490px]:text-[16px]">
                  Experience the ultimate getaway at sea - luxury, adventure,
                  and relaxation all in one
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cruise;
