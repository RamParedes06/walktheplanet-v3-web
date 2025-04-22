"use client";
import React, { useEffect, useState } from "react";
import { LeisureToursImages } from "@/library/LeisureTours";
import BackgroundSvg from "@/assets/svg/BGIllustrationManpower.svg";
import Image from "next/image";
import TextReveal from "../../_components/TextReveal";

interface ToursProps {
  productsVersion?: boolean;
}
const Tours = ({ productsVersion = false }: ToursProps) => {
  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Create a duplicate array for looping
  const duplicatedImages = [...LeisureToursImages, ...LeisureToursImages];

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // continuous animation
  useEffect(() => {
    const animationSpeed = 0.03;
    let animationId: number;

    const animate = () => {
      setPosition((prevPosition) => {
        // reset position when we've moved the width of the original images
        if (prevPosition >= 100) {
          return 0;
        }
        return prevPosition + animationSpeed;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // cleanup / unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-screen mx-auto rounded-lg shadow-lg overflow-hidden">
      <div
        className={`relative h-full flex flex-col items-center px-0 py-4 md:p-8 pb-0 bg-white`}
      >
        {/* SVG First Overlay - Hidden on mobile */}
        {!isMobile ? (
          <>
            <div className="absolute left-0 -top-80 w-max">
              <Image
                src={BackgroundSvg}
                alt="background"
                width={900}
                height={500}
                className="-rotate-35 w-full"
              />
            </div>

            <div className="absolute -right-110 -top-80 w-max">
              <Image
                src={BackgroundSvg}
                alt="background"
                width={900}
                height={500}
                className="-rotate-25 w-full"
              />
            </div>
          </>
        ) : (
          <div className="absolute left-0 w-max -top-60 -rotate-35">
            <Image
              src={BackgroundSvg}
              alt="background"
              width={900}
              height={500}
            />
          </div>
        )}

        {/* Description */}
        <TextReveal>
          <div
            className={`pt-[64px] md:pt-[54px] z-10 flex flex-col items-center`}
          >
            <h1
              className={`text-[40px] md:text-[64px] font-semibold text-center text-[#14476F] mb-4`}
            >
              {productsVersion ? "TRAVEL ESSENTIALS" : "TOURS ONLINE BOOKING"}
            </h1>

            <p
              className={`text-base md:text-lg font-medium text-center text-black mb-1`}
            >
              {!productsVersion ? (
                <>
                  Don&apos;t miss out on a travel necessity to{" "}
                  <span className="font-semibold">
                    take your journey to the next level!
                  </span>
                </>
              ) : (
                "Start your endless adventures by visiting"
              )}
            </p>
            {!productsVersion ? (
              <p
                className={`text-base md:text-lg font-medium text-center text-black mb-4`}
              >
                your one-stop-shop at{" "}
                <a
                  href="https://tours.walktheplanet.com"
                  className="text-[#006FA9] hover:underline"
                >
                  tours.walktheplanet.com
                </a>
              </p>
            ) : (
              <></>
            )}
            {/* Button */}
            {!productsVersion && (
              <button
                className={`bg-[#00537F] hover:bg-[#00537F] text-white font-medium py-2 px-4 text-sm md:py-3 md:px-6 rounded-full mb-6 transition-colors duration-300 cursor-pointer`}
              >
                {isMobile
                  ? "Book it now and get your trip ready!"
                  : "Grab yours now, for limited offers!"}
              </button>
            )}
          </div>
        </TextReveal>

        <div className="flex-grow w-full overflow-hidden relative bg-white">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left and right gradients */}
            <div
              className="invisible md:visible absolute left-0 top-0 bottom-0 w-1/12 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white, transparent)",
              }}
            ></div>
            <div
              className="invisible md:visible absolute right-0 top-0 bottom-0 w-1/12 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(to left, white, transparent)",
              }}
            ></div>

            {/* Top curved white border */}
            <div
              className="absolute top-0 w-full h-[75px] z-50 bg-white"
              style={{
                borderBottomLeftRadius: "50% 100%",
                borderBottomRightRadius: "50% 100%",
              }}
            ></div>

            {/* Bottom curved white border */}
            <div
              className="absolute bottom-0 w-full h-[75px] z-50 bg-white"
              style={{
                borderTopLeftRadius: "50% 100%",
                borderTopRightRadius: "50% 100%",
              }}
            ></div>

            {/* Marquee container */}
            <div className="w-full h-full overflow-hidden">
              <div
                className="flex h-full md:gap-30 gap-0"
                style={{
                  transform: `translateX(-${position}%)`,
                  width: `${duplicatedImages.length * 33.33}%`, // each image ay ~33.33% of viewport width
                }}
              >
                {duplicatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="md:w-1/10 w-1/5 h-full flex-shrink-0 md:px-2 px-0"
                  >
                    <div
                      className="h-full w-full rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
