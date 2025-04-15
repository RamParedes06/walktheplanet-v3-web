"use client";
import React, { useEffect, useState } from "react";
import travelOffers from "@/assets/images/travel_offers.webp";
import TravelCarousel from "./TravelOffersCarousel";
import { TravelSlides } from "@/library/TravelSlides";
import { LocalSlides } from "@/library/LocalSlides";
import { InternationalSlides } from "@/library/InternationalSlides";
import { DocumentSlides } from "@/library/DocumentSlides";

const TravelOffersV2 = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Call once to set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="travel-section">
        {" "}
        {/* New parent container */}
        <div
          className="travel-offers-container bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${travelOffers.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Black overlay with low opacity */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="cards-parent h-[275px] lg:h-[230px] bg-cover bg-center flex justify-center items-center relative z-10 ">
            <div className="wrap marquee-container  mt-20 lg:mt-0 w-full overflow-hidden">
              <div className="marquee text-[32px] lg:text-8xl font-semibold text-white opacity-90">
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">
                  {" OUR TRAVEL OFFERS "}
                </p>
                <span
                  className="inline-block"
                  style={{ width: "100px" }}
                ></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">
                  {" OUR TRAVEL OFFERS "}
                </p>
                <span
                  className="inline-block"
                  style={{ width: "100px" }}
                ></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">
                  {" OUR TRAVEL OFFERS "}
                </p>
                <span
                  className="inline-block"
                  style={{ width: "100px" }}
                ></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">
                  {" OUR TRAVEL OFFERS "}
                </p>
                <span
                  className="inline-block  "
                  style={{ width: "100px" }}
                ></span>
                <p className="drop-shadow-xl inline-bloc text-[32px] lg:text-[64px] ">
                  {" OUR TRAVEL OFFERS "}
                </p>
                <span
                  className="inline-block"
                  style={{ width: "100px" }}
                ></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">
                  {" OUR TRAVEL OFFERS "}
                </p>
              </div>
            </div>
          </div>

          <div className="cardss ">
            <div
              className="card "
              style={{ backgroundColor: "#E5F1F6B2", color: "black" }}
            >
              <p className="satoshi font-medium text-md lg:text-xl p-5 lg:p-[32px_40px]">
                TRAVEL PACKAGE ESSENTIALS
              </p>
              <div className="slider-container relative mt-4 ">
                <TravelCarousel
                  images={TravelSlides}
                  height={isMobileView ? 160 : 300}
                />

                <div className="absolute top-0 left-20 max-[490px]:left-5 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">
                    GLOBAL DATA SIM
                  </p>
                  <p className="text-black text-2xl -[16px] satoshi max-[490px]:text-[14px]">
                    One SIM for every destination.
                    <br /> Roam your way anytime, anywhere.
                  </p>

                  <button
                    className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://tours.walktheplanet.com/collections/global-data-sim")
                    }
                  >
                    Get Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ backgroundColor: "#FE6000B2", zIndex: 2 }}
            >
              <p className="satoshi font-medium text-md lg:text-xl p-5 lg:p-[32px_40px]">
                LOCAL DESTINATIONS
              </p>

              <div className="slider-container relative ">
                <TravelCarousel
                  images={LocalSlides}
                  height={isMobileView ? 179 : 300}
                />

                <div className="absolute top-0 min-[1440px]:left-155 max-[490px]:left-5 min-[1200px]:left-125 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">
                    PALAWAN TOUR
                  </p>
                  <p className="text-black text-2xl -[16px] w-full satoshi max-[490px]:text-[14px]">
                    The Philippines’ best-kept secrets.
                    <br /> Pack your bags and uncover your adventure.
                  </p>

                  <button
                    className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://tours.walktheplanet.com/collections/local-destinations")
                    }
                  >
                    Get Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ backgroundColor: "#333333B2", zIndex: 3 }}
            >
              <p className="satoshi font-medium text-md lg:text-xl p-5 lg:p-[32px_40px]">
                {" "}
                INTERNATIONAL DESTINATIONS
              </p>

              <div className="slider-container relative ">
                <TravelCarousel
                  images={InternationalSlides}
                  height={isMobileView ? 160 : 300}
                />
                <div className="absolute top-0 left-20 max-[490px]:left-5 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">
                    PARIS TOUR
                  </p>
                  <p className="text-black text-2xl -[16px] satoshi max-[490px]:text-[14px]">
                    Sought-after global attractions.
                    <br />
                    Travel with us and see the world.
                  </p>

                  <button
                    className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://tours.walktheplanet.com/collections/international-destinations")
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card "
              style={{ backgroundColor: "#00537FB2", zIndex: 4 }}
            >
              <p className="satoshi font-medium text-md lg:text-xl p-5 lg:p-[32px_40px]">
                {" "}
                TRAVEL DOCUMENTATION{" "}
              </p>
              <div className="slider-container relative ">
                <TravelCarousel
                  images={DocumentSlides}
                  height={isMobileView ? 180 : 300}
                />

                <div className="absolute top-0 min-[1440px]:left-155 max-[490px]:left-5 min-[1200px]:left-125 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">
                    VISA PROCESSING
                  </p>
                  <p className="text-black text-2xl -[16px] satoshi max-[490px]:text-[14px]">
                    Visa processing and immigration requirements
                    <br /> handled with ease.
                  </p>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://tours.walktheplanet.com/pages/contact")
                    }
                    className="px-6 py-2 bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-spacer lg:h-[200px] !h-[150px]"></div>
        </div>
      </div>
    </div>
  );
};

export default TravelOffersV2;
