"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface ImageSlideProps {
  openItem: number | null;
  images: string[];
}

const ImageSlide: React.FC<ImageSlideProps> = ({ openItem, images }) => {
  const [slides, setSlides] = useState([
    { id: 0, image: images[0], position: "current" },
  ]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (openItem !== null) {
      const currentImageIndex = slides.findIndex(
        (slide) => slide.id === openItem && slide.position === "current"
      );

      if (currentImageIndex === -1 && !isAnimating) {
        setIsAnimating(true);

        setSlides((prev) => [
          ...prev,
          { id: openItem, image: images[openItem], position: "next" },
        ]);

        setTimeout(() => {
          setSlides((prev) =>
            prev.map((slide) => {
              if (slide.position === "current")
                return { ...slide, position: "prev" };
              if (slide.position === "next")
                return { ...slide, position: "current" };
              return slide;
            })
          );

          setTimeout(() => {
            setSlides((prev) =>
              prev.filter((slide) => slide.position !== "prev")
            );
            setIsAnimating(false);
          }, 600);
        }, 50);
      }
    }
  }, [openItem, images, slides, isAnimating]);

  const getSlideClasses = (position: string) => {
    switch (position) {
      case "prev":
        return "transform -translate-y-full opacity-30 z-10";
      case "current":
        return "transform translate-y-0 opacity-100 z-20";
      case "next":
        return "transform translate-y-full opacity-30 z-10";
      default:
        return "";
    }
  };

  return (
    <div className="w-full md:relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={`${slide.id}-${index}`}
          className={`absolute inset-0 transition-all duration-600 ease-out ${getSlideClasses(
            slide.position
          )}`}
        >
          <Image
            src={slide.image}
            alt="Emergency Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ))}
    </div>
  );
};

// Accordion toggling
interface AccordionItemProps {
  number: string;
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  number,
  title,
  content,
  isOpen,
  toggleAccordion,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200 border-opacity-30">
      <div
        onClick={toggleAccordion}
        className="flex justify-between items-center py-4 cursor-pointer"
      >
        <div className="flex items-center font-generalSans pb-5">
          <span className="text-xl opacity-70 text-white pr-4">{number}</span>
          <h3 className="font-semibold text-xl md:text-2xl text-white">
            {title}
          </h3>
        </div>
        <button className="text-2xl focus:outline-none text-white">
          {isOpen ? "−" : "+"}
        </button>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || 1000}px`
            : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="md:pl-9 pl-10 pb-5 text-white md:text-xl text-base">
          {content}
        </div>
      </div>
    </div>
  );
};

export { ImageSlide, AccordionItem };
