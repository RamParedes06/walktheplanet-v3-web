"use client";
import background from "@/assets/svg/BgIllustrationOnlineBooking.svg";
import { LeisureOBImages } from "@/library/LeisureOnlineBooking";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import TextReveal from "../../_components/TextReveal";

const OnlineBooking = () => {
  // Get first and last five images
  const firstFiveImages = LeisureOBImages.slice(0, 5);
  const lastFiveImages = LeisureOBImages.slice(5, 10);

  // Desktop initial position
  const [topImagesPosition, setTopImagesPosition] = useState(0);
  const [bottomImagesPosition, setBottomImagesPosition] = useState(-10000);
  
  // Mobile initial position
  const [mobileTopImagesPosition, setMobileTopImagesPosition] = useState(0);
  const [mobileBottomImagesPosition, setMobileBottomImagesPosition] = useState(-10000);
  
  // Refs desktop
  const topContainerRef = useRef<HTMLDivElement>(null);
  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const topImagesRef = useRef<HTMLDivElement>(null);
  const bottomImagesRef = useRef<HTMLDivElement>(null);

  // Refs for mobile image containers
  const mobileTopImagesRef = useRef<HTMLDivElement>(null);
  const mobileBottomImagesRef = useRef<HTMLDivElement>(null);

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

  // Mobile carousel animation - using different variables
  useEffect(() => {
    // Animation speed for mobile
    const mobileMoveStep = 0.7;

    // Get width of single image for calculations (mobile)
    const getMobileImageWidth = (
      imagesRef: React.RefObject<HTMLDivElement | null>,
      images: Array<string>
    ) => {
      if (!imagesRef.current) return 0;
      const firstChild = imagesRef.current.children[0] as HTMLElement;
      const singleItemWidth = firstChild.offsetWidth;
      const gap = 1; // images gap
      return (singleItemWidth + gap) * images.length;
    };

    // Mobile top carousel animation (right to left)
    const animateMobileTopCarousel = () => {
      const imageSetWidth = getMobileImageWidth(mobileTopImagesRef, firstFiveImages);
      
      if (imageSetWidth === 0) return;
      
      setMobileTopImagesPosition((prevPosition: number): number => {
        // reset
        if (prevPosition >= imageSetWidth) {
          return prevPosition - imageSetWidth;
        }
        return prevPosition + mobileMoveStep;
      });
    };

    // Mobile bottom carousel animation (left to right)
    const animateMobileBottomCarousel = () => {
      const imageSetWidth = getMobileImageWidth(mobileBottomImagesRef, lastFiveImages);
      
      if (imageSetWidth === 0) return;
      
      setMobileBottomImagesPosition((prevPosition) => {
        // left-to-right
        const newPosition = prevPosition + mobileMoveStep;
        
        // Reset position when it moves too far to the right
        if (newPosition > imageSetWidth) {
          // Jump back much further to the left to ensure images are always visible
          return -2 * imageSetWidth;
        }

        return newPosition;
      });
    };

    // animation frames for mobile
    let mobileTopAnimationFrame: number;
    let mobileBottomAnimationFrame: number;
    
    const animateMobileTop = () => {
      animateMobileTopCarousel();
      mobileTopAnimationFrame = requestAnimationFrame(animateMobileTop);
    };

    const animateMobileBottom = () => {
      animateMobileBottomCarousel();
      mobileBottomAnimationFrame = requestAnimationFrame(animateMobileBottom);
    };

    // Start mobile animations
    mobileTopAnimationFrame = requestAnimationFrame(animateMobileTop);
    mobileBottomAnimationFrame = requestAnimationFrame(animateMobileBottom);

    // Cleanup
    return () => {
      cancelAnimationFrame(mobileTopAnimationFrame);
      cancelAnimationFrame(mobileBottomAnimationFrame);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstFiveImages.length, lastFiveImages.length]);

  // Duplicated sets of images for desktop
  const displayTopImages = [...firstFiveImages, ...firstFiveImages, ...firstFiveImages];
  const displayBottomImages = [...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages];

  // Images for mobile
  const mobileTopImages = [...firstFiveImages, ...firstFiveImages, ...firstFiveImages];
  const mobileBottomImages = [...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages, ...lastFiveImages];

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

              <button onClick={() => window.open("https://galago.com.ph/", "_blank")} className="w-max bg-[#00537F] text-white px-[32px] py-[14px] rounded-[14px] text-lg font-medium hover:bg-[#00537F] cursor-pointer transition-colors">
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
        {/* Top image carousel */}
        <div className="w-full h-64 relative z-10 overflow-hidden">
          <div
            ref={mobileTopImagesRef}
            className="flex gap-1 h-full"
            style={{
              transform: `translateX(-${mobileTopImagesPosition}px)`,
              transition: "transform 0.01s linear",
              width: "max-content",
            }}
          >
            {mobileTopImages.map((image, index) => (
              <div key={index} className="relative h-full">
                <Image
                  width={400}
                  height={240}
                  src={image}
                  alt={`Mobile carousel image ${index}`}
                  className="object-cover h-full"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
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

            <button onClick={() => window.open("https://galago.com.ph/", "_blank")} className="bg-[#00537F] text-white px-6 py-3 rounded-[24px] text-base font-medium hover:bg-opacity-90 cursor-pointer transition-colors w-full">
              Book it now and get your trip ready!
            </button>
          </div>
        </div>

        {/* Bottom image carousel - moving left to right */}
        <div className="w-full h-64 relative overflow-hidden">
          <div
            ref={mobileBottomImagesRef}
            className="flex gap-1 h-full"
            style={{
              transform: `translateX(${mobileBottomImagesPosition}px)`,
              transition: "transform 0.01s linear",
              width: "max-content",
            }}
          >
            {mobileBottomImages.map((image, index) => (
              <div key={index} className="relative h-full">
                <Image
                  width={400}
                  height={240}
                  src={image}
                  alt={`Mobile bottom carousel image ${index}`}
                  className="object-cover h-full"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineBooking;