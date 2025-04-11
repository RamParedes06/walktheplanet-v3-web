"use client";
import React, { useEffect, useState } from "react";
import { IgOpportunities } from "@/library/IgOpportunities";
import CarouselItem from "./CarouselItem";

const bg =
  "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1744089867/InstagramBg_ktopbj.png";
const overlay =
  "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1744089957/LetterBg_cbmiri.png";

function InstagramCards() {
  // const [activeIndexes, setActiveIndexes] = useState([0, 0, 0]);
  // const [currentCardIndex, setCurrentCardIndex] = useState(0);
  // const [isComplete, setIsComplete] = useState(false);

  // useEffect(() => {
  // 	const interval = setInterval(() => {
  // 		setActiveIndexes((prev) => {
  // 			const newIndexes = [...prev];
  // 			const currentIndex = prev[currentCardIndex];
  // 			const itemLength = IgOpportunities[currentCardIndex].items.length;

  // 			if (currentIndex < itemLength - 1) {
  // 				newIndexes[currentCardIndex] = currentIndex + 1;
  // 			} else {
  // 				if (currentCardIndex < IgOpportunities.length - 1) {
  // 					setCurrentCardIndex(currentCardIndex + 1);
  // 				} else {
  // 					setIsComplete(true);
  // 				}
  // 			}

  // 			return newIndexes;
  // 		});
  // 	}, 5000);

  // 	return () => clearInterval(interval);
  // }, [activeIndexes, currentCardIndex, isComplete]);

  // const handleCardClick = (index: number) => {
  // 	setCurrentCardIndex(index);
  // };

  // Main view state - which set is currently being viewed
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  //   const [completedSets, setCompletedSets] = useState(
  //     IgOpportunities.map(() => false)
  //   );

  // In InstagramCards.tsx
  const [completedSets, setCompletedSets] = useState(
    IgOpportunities.map(() => false) // Make sure this is creating an array of false values
  );

  // Add to render temporarily
  console.log("Active Set:", activeSetIndex);
  console.log("Completed Sets:", completedSets);

  // Handle set activation and automatic advancement
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
      if (completedSets[index]) {
        // If clicking on a previously completed set, make it active but don't change completion status
        setActiveSetIndex(index);
      } else {
        // Mark current set as completed when moving to a new, uncompleted set
        const newCompletedSets = [...completedSets];
        newCompletedSets[activeSetIndex] = true;
        setCompletedSets(newCompletedSets);
        setActiveSetIndex(index);
      }
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

  // Reset all carousels and start from the beginning
  const resetAllCarousels = () => {
    setCompletedSets(IgOpportunities.map(() => false));
    setActiveSetIndex(0);
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
          <p className="text-center italic text-2xl font-generalSans font-medium max-w-4xl">
            We view each corporate occasion as a crucial opportunity for your
            organization to reach its goals.
            <br />
            From event management to travel arrangements, we craft unforgettable
            experiences that help you achieve your desired results
          </p>

          <div className="flex gap-8">
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
        </div>
      </div>
    </div>
  );
}

export default InstagramCards;
