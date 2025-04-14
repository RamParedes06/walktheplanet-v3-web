"use client";
import React, { useEffect, useState } from "react";
import { IgOpportunities } from "@/library/IgOpportunities";
import CarouselItem from "./CarouselItem";

const bg =
  "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1744089867/InstagramBg_ktopbj.png";
const overlay =
  "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1744089957/LetterBg_cbmiri.png";

function InstagramCards() {
  // Main view state - which set is currently being viewed
  const [activeSetIndex, setActiveSetIndex] = useState(0);

  // In InstagramCards.tsx
  const [completedSets, setCompletedSets] = useState(
    IgOpportunities.map(() => false) // Make sure this is creating an array of false values
  );

  // Mobile Responsiveness
  const [activeSetIndexMobile, setActiveSetIndexMobile] = useState(0);
  const [completedSetsMobile, setCompletedSetsMobile] = useState(
    IgOpportunities.map(() => false) // Make sure this is creating an array of false values
  );

  // Get current set to display
  const currentSet = IgOpportunities[activeSetIndexMobile];

  // Handle set activation (advancement nung cards)
  const handleSetActivation = (
    index: number,
    reason: string | null | undefined
  ) => {

  
    if (reason === "completed") {
      
      // Auto-advance to the next set when current set completes
      const nextSetIndex = (activeSetIndex + 1) % IgOpportunities.length;

      // Mark current set as completed
      const newCompletedSets = [...completedSets];
      newCompletedSets[activeSetIndex] = true;
      setCompletedSets(newCompletedSets);

      // Activate the next set
      setActiveSetIndex(nextSetIndex);
    } else if (index !== activeSetIndex) {
      // Manual selection of a different set
      const newCompletedSets = [...completedSets];

      // Key change: If jumping ahead, mark all cards in between as completed
      if (index > activeSetIndex) {
        // Mark all cards from current to selected (exclusive) as completed
        for (let i = activeSetIndex; i < index; i++) {
          newCompletedSets[i] = true;
        }
      }

      setCompletedSets(newCompletedSets);
      setActiveSetIndex(index);
    }
  };

  // Check if all sets are completed and reset if needed
  useEffect(() => {
    const allCompleted = completedSets.every((isCompleted) => isCompleted);
    if (allCompleted) {
      // Reset the component to start over without user interaction
      const timer = setTimeout(() => {
        setCompletedSets(IgOpportunities.map(() => false));
        setActiveSetIndex(0);
      }, 1000); // 1 second delay before restarting

      return () => clearTimeout(timer);
    }
  }, [completedSets]);

  //! MOBILE RESPONSIVENESS
  const handleSetActivationMobile = (
    index: number,
    reason: string | null | undefined
  ) => {
    setActiveSetIndexMobile(index);
    if (!completedSetsMobile[index]) {
      const newCompletedSetsMobile = [...completedSetsMobile];
      newCompletedSetsMobile[index] = true;
      setCompletedSetsMobile(newCompletedSetsMobile);
    }
  };

  const handleNext = () => {
    if (activeSetIndexMobile < IgOpportunities.length - 1) {
      handleSetActivationMobile(activeSetIndexMobile + 1, "navigation");
    }
  };

  const handlePrev = () => {
    if (activeSetIndexMobile > 0) {
      handleSetActivationMobile(activeSetIndexMobile - 1, "navigation");
    }
  };

  return (
    <div className="h-screen relative">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white opacity-40 z-10" />

      <div
        className="absolute inset-0 z-10 "
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 36.35%, rgba(51, 51, 51, 0.3) 68.16%, rgba(0, 0, 0, 1) 100%), 
                            linear-gradient(180deg, #006FA9 0%, rgba(255, 175, 128, 0.5) 50%, rgba(0, 83, 127, 0) 100%)`,
        }}
      ></div>

      {/* Main content */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${overlay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex flex-col justify-center items-center gap-10 px-8">
          <p className="text-center italic text-base font-generalSans font-medium lg:text-2xl max-w-4xl">
            We view each corporate occasion as a crucial opportunity for your
            organization to reach its goals.
            <br />
            From event management to travel arrangements, we craft unforgettable
            experiences that help you achieve your desired results
          </p>

          <div className="lg:flex gap-8 hidden">
            {IgOpportunities.map((set, index) => (
              <div className="w-full" key={set.id}>
                <CarouselItem
                  set={set}
                  isActive={index === activeSetIndex}
                  isCompleted={completedSets[index]}
                  onActivate={(reason) => handleSetActivation(index, reason)}
                />
              </div>
            ))}
          </div>

          {/* Mobile responsive  */}
          <div className="relative w-[95%] mx-auto">
            <div className="lg:hidden">
              <div className="w-full">
                <CarouselItem
                  set={currentSet}
                  isActive={true}
                  isCompleted={completedSetsMobile[activeSetIndexMobile]}
                  onActivate={(reason) =>
                    handleSetActivationMobile(activeSetIndexMobile, reason)
                  }
                />
              </div>

              <div className=" flex justify-end space-x-2 mt-5">
                <button
                  onClick={handlePrev}
                  className={` text-white px-4 py-1 rounded-md ${
                    activeSetIndexMobile === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white/50"
                  }`}
                  disabled={activeSetIndexMobile === 0}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className={` text-white px-4 py-1 rounded-md ${
                    activeSetIndexMobile === IgOpportunities.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white/50"
                  }`}
                  disabled={activeSetIndexMobile === IgOpportunities.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramCards;
