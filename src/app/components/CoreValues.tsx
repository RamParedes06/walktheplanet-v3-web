"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import verctor from "@/assets/images/about/Vector 76.svg";

export default function CoreValues() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <section className="w-full">
      {/* Header section with dark background */}
      <div className="bg-[#0a1220] py-12 md:py-[112px] px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl py-15 md:text-5xl font-bold text-center">
            OUR CORE VALUES
          </h2>
          <div className="flex justify-center mt-2">
            <Image height={134} width={234} alt="vector" src={verctor} />
          </div>
        </div>
      </div>

      {/* Image grid with letter overlays */}
      <div className="grid grid-cols-1 md:grid-cols-4 relative">
        {/* S Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205398/core1_mzfk00.webp"
            alt="Person with raised arm celebrating"
            fill
            className="object-cover object-center md:object-left"
          />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">
              S
            </span>
          </div>
        </div>

        {/* I Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205397/core2_sxcxhg.webp"
            alt="Person reading"
            fill
            className="object-cover object-center md:object-[33%_center]"
          />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">
              I
            </span>
          </div>
        </div>

        {/* P Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205396/core3_fbq1ma.webp"
            alt="Person with luggage"
            fill
            className="object-cover object-center md:object-[66%_center]"
          />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">
              P
            </span>
          </div>
        </div>

        {/* A Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205397/core4_marhsx.webp"
            alt="Person smiling"
            fill
            className="object-cover object-center md:object-right"
          />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">
              A
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
