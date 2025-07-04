import React from "react";
import ManuGrid from "./ManuGrid";
import { CargoOffers } from "@/library/CargoOffers";
import TextReveal from "@/app/(pages)/_components/TextReveal";
import bgmobile from "@/assets/images/MenuBgMobile.png";

function CargoLogistics() {
  return (
    <>
      <div className="relative">
        <div className=" max-[489px]:hidden">
          <ManuGrid items={CargoOffers} />
        </div>
        <div
          className="min-[491px]:hidden h-screen bg-white bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgmobile.src})` }}
        />
        <div className="absolute overlay h-screen flex top-0 left-0 right-0 bg-[linear-gradient(190.25deg,rgba(0,169,206,0)_45.60%,rgba(255,255,255,0.496)_55.44%,#ffffff_67.53%)] z-10">
          <div className="self-end  w-full">
            <div className="  px-[80px] max-[490px]:px-[20px]  py-[112px] z-10 ">
              <TextReveal>
                <p className="font-[900] text-[64px] max-[490px]:text-[40px] text-[#14476F]  font-satoshi uppercase">
                  CARGO <br />
                  AND LOGISTICS
                </p>
                <div className="text-black  text-2xl max-[490px]:text-[16px] font-generalSans">
                  Need to visit your sites or oversee the supply chain?
                  <br /> Just contact us and
                  <i>
                    <span className="font-semibold">
                      {" "}
                      we&apos;ll provide your travel needs anytime{" "}
                    </span>
                  </i>
                  your business requires.
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CargoLogistics;
