import React from "react";
import { LeisureOBImages } from "@/library/LeisureOnlineBooking";
import Image from "next/image";
import background from "@/assets/svg/BgIllustrationOnlineBooking.svg";
import TextReveal from "../../_components/TextReveal";

const OnlineBooking = () => {
  // Get first three images
  const firstThreeImages = LeisureOBImages.slice(0, 3);

  // Get last three images
  const lastThreeImages = LeisureOBImages.slice(3, 6);

  return (
    <>
      {/* Desktop layout */}
      <div className="bg-white h-screen flex-col overflow-hidden py-16 hidden md:flex">
        {/* Top Images  */}
        <div className="flex w-full gap-1 h-1/4">
          {firstThreeImages.map((imageUrl, index) => (
            <div key={index} className="w-1/3 relative">
              <Image
                src={imageUrl}
                alt={`Leisure image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex px-20 flex-1 items-center relative">
          {/* Left side content */}
     
            <div className="w-1/2">
            <TextReveal>
              <h1 className="text-5xl lg:text-6xl font-semibold text-[#00537F] mb-4 leading-18">
                FLIGHTS AND HOTEL
                <br />
                ONLINE BOOKING
              </h1>
              <p className="text-xl mb-8 text-black">
                Easy travels just got easier! Book today, travel tomorrow.
              </p>

              <button className="w-max bg-[#00537F] text-white px-8 py-4 rounded-[24px] text-lg font-medium hover:bg-[#00537F] cursor-pointer transition-colors">
                Book it now and get your trip ready!
              </button>
              </TextReveal>
            </div>


          {/* Background SVG  */}
          <div className="w-2/5 h-full absolute top-0 right-0">
            <Image
              src={background}
              alt="background"
              width={500}
              height={500}
              className="opacity-20 w-full h-full object-cover bg-fixed"
            />
          </div>
        </div>

        {/* Bottom Images */}
        <div className="flex w-full gap-1 h-1/4">
          {lastThreeImages.map((imageUrl, index) => (
            <div key={index} className="w-1/3 relative">
              <Image
                src={imageUrl}
                alt={`Leisure image ${index + 4}`}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col w-full md:hidden bg-white">
        {/* Top image */}
        <div className="w-full h-64 relative z-10">
          <Image
            src={firstThreeImages[0]}
            alt="Person booking travel"
            fill
            className="object-cover"
            priority={true}
          />
        </div>

        {/* Content - Middle section */}
        <div className=" px-6 py-8 bg-white relative">
          {/* Background SVG */}
          <div className=" absolute top-[-110px] right-[-160px]  z-0  overflow-hidden rotate-40">
            <Image
              src={background}
              alt="background"
              width={400}
              height={500}
              className="opacity-20 w-[400px] h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-[#00537F] mb-3  ">
              FLIGHTS
              <br />
              AND HOTEL
              <br />
              ONLINE BOOKING
            </h1>
            <p className="text-base mb-6 text-gray-700">
              Easy travels just got easier!
              <br />
              Book today, travel tomorrow.
            </p>

            <button className="bg-[#00537F] text-white px-6 py-3 rounded-[24px] text-base font-medium hover:bg-opacity-90 cursor-pointer transition-colors w-full">
              Book it now and get your trip ready!
            </button>
          </div>
        </div>

        {/* Bottom image */}
        <div className="w-full h-64 relative">
          <Image
            src={lastThreeImages[0]}
            alt="Person at travel destination"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </>
  );
};

export default OnlineBooking;
