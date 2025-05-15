import React from "react";

import Image from "next/image";

import illustration from "@/assets/svg/BGIllustration.svg";
import TextReveal from "@/app/(pages)/_components/TextReveal";
import Carousel from "@/app/(pages)/_components/Carousel";

const images = [
  "http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Travel%20Agency%201.webp&version_id=null",
  "http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Travel%20Agency%202.webp&version_id=null",
  "http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Travel%20Agency%203.webp&version_id=null",
  "http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Travel%20Agency%204.webp&version_id=null",
  "http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Travel%20Agency%205.webp&version_id=null",
];

function TravelAgencies() {
  return (
    <div className="h-screen bg-white">
      <div
        className="max-[490px] relative overflow-hidden flex items-center"
        style={{ backgroundImage: `url(${illustration})` }}
      >
        <div className="p-20 w-full max-[490px]:p-0">
          <Image
            src="https://res.cloudinary.com/dmxvasob7/image/upload/v1746674853/Frame_48098208_4_nc72nh.png"
            alt=""
            width={1200}
            height={1200}
            className="absolute -top-5  -right-0 md:-right-10 "
          />

          <div className="flex flex-col gap-2 max-[490px] max-[490px]:gap-5 px-4 py-10">
            <TextReveal>
              <p className="font-[900] text-[38px] md:text-[64px] max-[490px]font-extrabold text-[#14476F] font-satoshi  uppercase">
                Travel Agencies
              </p>
              <p className="text-black text-16px md:text-2xl max-[490px] ">
                Want to level up your agencys income? <br />
                Power your business by offering our
                <i>
                  <span className="font-semibold">
                    {" "}
                    unique and curated travel packages
                  </span>
                </i>
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
      <div className="h-[60%]">
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default TravelAgencies;
