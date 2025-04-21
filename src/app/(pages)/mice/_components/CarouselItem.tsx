"use client";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface SlideItem {
  title: string;
  desc: string;
  image: string;
}

interface CarouselSet {
  title: string;
  items: SlideItem[];
}

interface CarouselItemProps {
  set: CarouselSet;
  isActive: boolean;
  isCompleted: boolean;
  onActivate: (reason?: "completed") => void;
  forceCompleteAll?: boolean;
  showLastSlide?: boolean;
}

const CarouselItem = ({ set, isActive, isCompleted, onActivate, forceCompleteAll = false, showLastSlide = false }: CarouselItemProps) => {
  const slides = useMemo(() => set.items || [], [set.items]);
  const [activeIndex, setActiveIndex] = useState(0);
  //   const [isPaused, setIsPaused] = useState(false);
  const progressInterval = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);
  const [wasCompletedBefore, setWasCompletedBefore] = useState(false);
  const slideDuration = 5000; // 5 seconds per slide
  const progressUpdateFrequency = 50; // Update progress every 50ms
  const progressIncrement = (progressUpdateFrequency / slideDuration) * 100;
  //   const totalDuration = slideDuration * slides.length;

  // Safety check - ensure activeIndex is valid
  useEffect(() => {
    if (slides.length > 0 && activeIndex >= slides.length) {
      setActiveIndex(slides.length - 1);
    }
  }, [slides, activeIndex]);

  // Callback to tell parent component this set is completed
  const onSetCompleted = useCallback(() => {
    if (!wasCompletedBefore) {
      setWasCompletedBefore(true);
      setProgress(100);
      setTotalProgress(100);

      // Use an effect to call onActivate after render is complete
      const timer = setTimeout(() => {
        onActivate("completed");
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [wasCompletedBefore, onActivate]);

  // Function declarations using useCallback to avoid unnecessary re-renders
  const goToNextSlide = useCallback(() => {
    const nextIndex = activeIndex + 1;

    // If we've reached the end of this set's slides
    if (nextIndex >= slides.length) {
      // Mark this set as completed
      onSetCompleted();
      return;
    }

    setActiveIndex(nextIndex);
  }, [activeIndex, slides.length, onSetCompleted]);

  // Handle forceCompleteAll prop
  useEffect(() => {
    if (forceCompleteAll && isActive && !wasCompletedBefore && slides.length > 0) {
      if (progressInterval.current !== null) {
        clearInterval(progressInterval.current);
      }
      setActiveIndex(slides.length - 1);
      setProgress(100);
      setTotalProgress(100);
      setWasCompletedBefore(true);
      onActivate("completed");
    }
  }, [forceCompleteAll, isActive, wasCompletedBefore, slides.length, onActivate]);

  // Handle showLastSlide prop
  useEffect(() => {
    if (showLastSlide && slides.length > 0) {
      setActiveIndex(slides.length - 1);
      setProgress(100);
      setTotalProgress(100);
    }
  }, [showLastSlide, slides.length]);

  const startProgressTimer = useCallback(() => {
    // Don't start timer if no slides
    if (slides.length === 0) return;

    // Clear any existing interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    // Reset individual slide progress
    setProgress(0);

    // Don't start timer if paused or not active
    if (!isActive) return;

    // Start new timer
    progressInterval.current = window.setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + progressIncrement;

        // Update total progress
        setTotalProgress(() => {
          // Calculate new total based on current slide and progress
          const slideProgress = activeIndex * 100 + newProgress;
          return slideProgress / slides.length;
        });

        // If we've reached 100% for this slide, move to the next
        if (newProgress >= 100) {
          if (progressInterval.current !== null) {
            clearInterval(progressInterval.current);
          }
          goToNextSlide();
          return 0;
        }
        return newProgress;
      });
    }, progressUpdateFrequency);
  }, [
    activeIndex,
    isActive,
    // isPaused,
    progressIncrement,
    progressUpdateFrequency,
    slides.length,
    goToNextSlide,
  ]);

  // When a carousel becomes active, reset its progress if it wasn't completed
  useEffect(() => {
    if (isActive && !isCompleted && !wasCompletedBefore) {
      setProgress(0);
      setTotalProgress(0);
      setActiveIndex(0);
    }
  }, [isActive, isCompleted, wasCompletedBefore]);

  // Handle completion state changes, including resets
  useEffect(() => {
    if (isCompleted && !wasCompletedBefore && slides.length > 0) {
      // First time being marked as completed
      if (progressInterval.current !== null) {
        clearInterval(progressInterval.current);
      }
      setProgress(100);
      setTotalProgress(100);
      setActiveIndex(slides.length - 1); // Set to last slide when completed
      setWasCompletedBefore(true);
    } else if (!isCompleted && wasCompletedBefore) {
      // Reset from completed to not completed
      if (progressInterval.current !== null) {
        clearInterval(progressInterval.current);
      }
      setProgress(0);
      setTotalProgress(0);
      setActiveIndex(0); // Reset to first slide
      setWasCompletedBefore(false);

      // Start progress timer if this is also the active carousel
      if (isActive) {
        startProgressTimer();
      }
    } else if (isActive && wasCompletedBefore && slides.length > 0) {
      // Revisiting a completed carousel - allow navigation but keep progress bars filled
      if (progressInterval.current !== null) {
        clearInterval(progressInterval.current);
      }
      // Set to the last slide for completed carousels
      setActiveIndex(slides.length - 1);
    }
  }, [isCompleted, isActive, slides.length, wasCompletedBefore, startProgressTimer]);

  // Set up and clean up the interval
  useEffect(() => {
    if (isActive && !isCompleted && slides.length > 0) {
      startProgressTimer();
    } else if (progressInterval.current !== null) {
      clearInterval(progressInterval.current);
    }

    return () => {
      if (progressInterval.current !== null) {
        clearInterval(progressInterval.current);
      }
    };
  }, [activeIndex, isActive, isCompleted, startProgressTimer, slides.length]);

  // Navigation within completed carousels
  const goToSlide = (index: number) => {
    if (slides.length === 0) return;

    // Safety check for valid index
    if (index < 0 || index >= slides.length) return;

    // Allow navigation within completed carousels without resetting completion status
    if (wasCompletedBefore) {
      setActiveIndex(index);
      return;
    }

    // For active, uncompleted carousels - normal behavior
    if (index > activeIndex) {
      // User clicked a slide ahead of current - mark current as complete
      setProgress(100);
    }

    // Update total progress based on the new slide index
    setTotalProgress((index * 100) / slides.length);
    setActiveIndex(index);

    // Reset progress for the new slide
    setProgress(0);
    if (progressInterval.current !== null) {
      clearInterval(progressInterval.current);
    }
    startProgressTimer();
  };

  const handleClick = () => {
    // Only trigger onActivate if the card is NOT already completed
    if (!isCompleted) {
      onActivate();
    }
  };
  // Get current slide safely
  const currentSlide = slides.length > 0 && activeIndex < slides.length ? slides[activeIndex] : null;

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300" onClick={handleClick}>
      {/* Outer container for progress border */}
      <div className="absolute inset-0 rounded-3xl z-30 pointer-events-none overflow-hidden">
        {/* Base border with shadows - always visible */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            border: "10px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.08), 0px 4px 6px -1px rgba(0,0,0,0.1)",
          }}
        />
        {/* Progress border - shows the completion */}
        <div
          className="absolute inset-0 border-[10px] border-white border-opacity-50 rounded-3xl"
          style={{
            clipPath: `polygon(
              0 100%, 
              100% 100%, 
              100% ${Math.max(100 - totalProgress, 0)}%, 
              0 ${Math.max(100 - totalProgress, 0)}%
            )`,
          }}
        />
      </div>

      {/* Inner content with the ring */}
      <div className={`relative z-10 rounded-3xl overflow-hidden ${isActive ? "ring-2 ring-blue-500 " : ""}`}>
        {/* Current Slide */}
        <div className="relative">
          {/* In-Image Progress Bars (Instagram-style) */}
          <div className="absolute top-[30px] left-4 right-4 z-20 flex space-x-1">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-1 bg-[#FFFFFFA6] flex-1 rounded-full cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
              >
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width:
                      wasCompletedBefore || isCompleted || forceCompleteAll
                        ? "100%" // Show all progress bars filled when completed
                        : index === activeIndex
                        ? `${progress}%`
                        : index < activeIndex
                        ? "100%"
                        : "0%",
                    transition: index === activeIndex ? "width 0.1s linear" : "width 0.3s ease-out",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="relative z-10 w-full h-full  rounded-3xl">
            {currentSlide && currentSlide.image ? (
              <Image src={currentSlide.image} alt={currentSlide.title || "Slide image"} width={580} height={390} className="w-full h-full object-cover rounded-3xl " priority={isActive} />
            ) : (
              // Placeholder for when image is missing
              <div className="w-full h-96  rounded-3xl flex items-center justify-center">
                <span className="text-white">Loading...</span>
              </div>
            )}
          </div>

          <div className="absolute bottom-0 left-0 py-[64px] px-[32px] text-white z-10">
            <h2 className="text-2xl font-bold pb-3">{currentSlide?.title || "Slide Title"}</h2>
            <p className="text-base">{currentSlide?.desc || "Slide description"}</p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;