"use client";
import React, { useEffect, useState } from "react";
import { LeisureOBImages } from "@/library/LeisureOnlineBooking";
import BackgroundSvg from "@/assets/svg/BGIllustrationManpower.svg";
import Image from "next/image";

const Tours = () => {
  // State to control animation
  const [position, setPosition] = useState(0);

  // Create a duplicate array to allow seamless looping
  const duplicatedImages = [...LeisureOBImages, ...LeisureOBImages];

  // Set up continuous animation
  useEffect(() => {
    // Animation speed - smaller number = faster
    const animationSpeed = 0.03;
    let animationId: any;

    const animate = () => {
      setPosition((prevPosition) => {
        // Reset position when we've moved the width of the original images
        if (prevPosition >= 100) {
          return 0;
        }
        return prevPosition + animationSpeed;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Clean up animation frame on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-screen mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-full flex flex-col items-center p-8 pb-0 bg-white">
        {/* SVG Top Overlay  */}
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

        <div className="pt-[64px] z-10 flex flex-col items-center">
          <h1 className="md:text-[64px] font-semibold text-center text-[#14476F] mb-6">
            TOURS ONLINE BOOKING
          </h1>

          <p className="text-lg text-center text-black mb-2">
            Start your endless adventures by visiting
          </p>
          <p className="text-lg text-center text-black mb-6">
            your one-stop-shop at{" "}
            <a
              href="https://tours.walktheplanet.com"
              className="text-[#006FA9] hover:underline"
            >
              tours.walktheplanet.com
            </a>
          </p>

          <button className="bg-[#00537F] hover:bg-[#00537F] text-white font-medium py-3 px-6 rounded-full mb-8 transition-colors duration-300 cursor-pointer">
            Grab yours now, for limited offers!
          </button>
        </div>
        {/* Marquee Slideshow */}
        <div className="flex-grow w-full overflow-hidden relative bg-white">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left and right gradients */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1/12 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white, transparent)",
              }}
            ></div>
            <div
              className="absolute right-0 top-0 bottom-0 w-1/12 z-20 pointer-events-none"
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
                className="flex h-full"
                style={{
                  transform: `translateX(-${position}%)`,
                  width: `${duplicatedImages.length * 33.33}%`, // Each image takes ~33.33% of viewport width
                  gap: "30px",
                }}
              >
                {duplicatedImages.map((image, index) => (
                  <div key={index} className="w-1/10 h-full flex-shrink-0 px-2">
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
