"use client";
import React, { useEffect, useState, useRef } from "react";
import { LeisureOBImages } from "@/library/LeisureOnlineBooking";
import Image from "next/image";
import background from "@/assets/svg/BgIllustrationOnlineBooking.svg";
import TextReveal from "../../_components/TextReveal";

const OnlineBooking = () => {
  // Get first and last five images
  const firstFiveImages = LeisureOBImages.slice(0, 5);
  const lastFiveImages = LeisureOBImages.slice(5, 10);

  // For mobile view
  const firstThreeImages = LeisureOBImages.slice(0, 5);

  // Track the position and animation status
  const [topImagesPosition, setTopImagesPosition] = useState(0);
  // Start of bottom carousel
  const [bottomImagesPosition, setBottomImagesPosition] = useState(-10000);
  
  // Refs for container widths and image sets
  const topContainerRef = useRef<HTMLDivElement>(null);
  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const topImagesRef = useRef<HTMLDivElement>(null);
  const bottomImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //  ANIMATION SPEED
    const moveStep = 1;
    
    // Get width of single image for calculations
    const getImageSetWidth = (
      imagesRef: React.RefObject<HTMLDivElement | null>, 
      images: Array<string>
    ) => {
      if (!imagesRef.current) return 0;
      const firstChild = imagesRef.current.children[0] as HTMLElement;
      const singleItemWidth = firstChild.offsetWidth;
      const gap = 1; // images gap
      return (singleItemWidth + gap) * images.length;
    };

    // Top Carousel animation
    const animateTopCarousel = () => {
      const imageSetWidth = getImageSetWidth(topImagesRef, firstFiveImages);
      
      if (imageSetWidth === 0) return; 
      
      setTopImagesPosition((prevPosition: number): number => {
        // reset
        if (prevPosition >= imageSetWidth) {
          return prevPosition - imageSetWidth;
        }
        return prevPosition + moveStep;
      });
    };

    // Animation function for bottom carousel (left to right)
    const animateBottomCarousel = () => {
      const imageSetWidth = getImageSetWidth(bottomImagesRef, lastFiveImages);
      
      if (imageSetWidth === 0) return;
      
      setBottomImagesPosition((prevPosition) => {
        //  left-to-right movement (opposite of top carousel)
        const newPosition = prevPosition + moveStep;
        
        //  reset
        if (newPosition >= imageSetWidth) {
          return newPosition - imageSetWidth;
        }
        
        return newPosition;
      });
    };

    // animation frames
    let topAnimationFrame : number ;
    let bottomAnimationFrame : number;
    
    const animateTop = () => {
      animateTopCarousel();
      topAnimationFrame = requestAnimationFrame(animateTop);
    };
    
    const animateBottom = () => {
      animateBottomCarousel();
      bottomAnimationFrame = requestAnimationFrame(animateBottom);
    };
    
    // Start animations
    topAnimationFrame = requestAnimationFrame(animateTop);
    bottomAnimationFrame = requestAnimationFrame(animateBottom);

    // Cleanup animation frames 
    return () => {
      cancelAnimationFrame(topAnimationFrame);
      cancelAnimationFrame(bottomAnimationFrame);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstFiveImages.length, lastFiveImages.length]);

  // Create duplicated sets of images for seamless infinite scrolling
  const displayTopImages = [...firstFiveImages, ...firstFiveImages, ...firstFiveImages];
  const displayBottomImages = [...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages];

  return (
    <>
      {/* Desktop layout */}
      <div className="bg-white h-screen flex-col overflow-hidden py-16 hidden md:flex">
        {/* Top Images - moving right to left */}
        <div 
          ref={topContainerRef}
          className="w-full overflow-hidden h-1/4"
        >
          <div
            ref={topImagesRef}
            className="flex gap-1 h-full"
            style={{
              transform: `translateX(-${topImagesPosition}px)`,
              transition: "transform 0.01s linear",
              width: "max-content", 
            }}
          >
            {displayTopImages.map((image, index) => (
              <div key={index} className="relative h-full">
                <Image
                  width={600}
                  height={300}
                  src={image}
                  alt={`Carousel image ${index}`}
                  className="object-cover h-full"
                />
              </div>
            ))}
          </div>
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

        {/* Bottom Images - moving left to right */}
        <div 
          ref={bottomContainerRef}
          className="w-full overflow-hidden h-1/4"
        >
          <div
            ref={bottomImagesRef}
            className="flex gap-1 h-full"
            style={{
              transform: `translateX(${bottomImagesPosition}px)`,
              transition: "transform 0.01s linear",
              width: "max-content", 
            }}
          >
            {displayBottomImages.map((imageUrl, index) => (
              <div key={index} className="relative">
                <Image
                  src={imageUrl}
                  alt={`Leisure image ${index}`}
                  width={600}
                  height={300}
                  className="object-cover object-center h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col justify-between py-10 md:py-0 w-full md:hidden bg-white h-screen">
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
        <div className="px-6 py-20 bg-white relative ">
          {/* Background SVG */}
          <div className="absolute top-[-110px] right-[-160px] z-0 overflow-hidden rotate-40">
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
            <h1 className="text-3xl font-bold text-[#00537F] mb-3">
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
            src={lastFiveImages[0]}
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