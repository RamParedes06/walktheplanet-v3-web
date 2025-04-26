import React from "react";
import ManuGrid from "./ManuGrid";
import { ManuOffers } from "@/library/ManuOffers";
import TextReveal from "@/app/(pages)/_components/TextReveal";
import bgmobile from "@/assets/images/ManuBgMobile.png";

function Manufacturing() {
  return (
    <>
      <div className="relative">
        <div className=" max-[489px]:hidden">
          <ManuGrid items={ManuOffers} />
        </div>
        <div
          className="min-[491px]:hidden h-screen bg-white bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgmobile.src})` }}
        />
        <div className="absolute overlay h-screen flex top-0 left-0 right-0 bg-[linear-gradient(204.25deg,rgba(0,169,206,0)_23.67%,rgba(255,255,255,0.496)_45.44%,#ffffff_67.53%)] z-10">
          <div className="self-end  w-full">
            <div className=" md:px-[80px] px-4 max-[490px] max-[490px]:py-10 py-[112px] z-10 ">
              <TextReveal>
                <p className="font-[900] text-[39px] md:text-[64px] text-[#14476F] font-satoshi text-center md:text-start  max-[490px] max-[490px]:text-start uppercase">
                  Manufacturing
                </p>
                <div className="text-[#333] text-[16px] md:text-2xl max-[490px]:text-[16px] font-generalSans">
                  Stay competitive globally while we handle your travel
                  logistics—complex schedules,
                  <br /> frequent trips, and evolving needs.
                  <i>
                    <span className="font-semibold">
                      {" "}
                      You focus on business, and we’ll take care of the journey
                    </span>
                    .
                  </i>
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manufacturing;
