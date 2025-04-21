"use client";
import React, { useState } from "react";
import TextReveal from "../../_components/TextReveal";
import NavigationButton from "./NavigationButton";

interface TestimonialProps {
  id: number;
  message: string;
  user: string;
  image: string;
  title: string;
}

const Testimonials = () => {
  const userTestimonials: TestimonialProps[] = [
    {
      id: 1,
      title: "TESTIMONIALS",
      message:
        "Thank you again for all your hard work, patience, and courage in delivering a memorable activities week trip",
      user: "- International School’s Review",
      image:
        "https://res.cloudinary.com/dmxvasob7/image/upload/v1744774301/testimonials1_mzspfo.webp",
    },
    {
      id: 2,
      title: "TESTIMONIALS",
      message:
        "Overall, the transaction was smooth, from flights and hotel transfers to van rentals for tours and other arrangements. I also appreciate that my request to extend my stay from 3 to 4 days was accommodated. Thank you!",
      user: "- Claudio Rugay (Client for Coron Package)",
      image:
        "https://res.cloudinary.com/dmxvasob7/image/upload/v1744774300/testimonials2_wkzfcp.webp",
    },
    {
      id: 3,
      title: "TESTIMONIALS",
      message:
        "Very smooth! Magmula sa booking process hanggang sa makauwi kami, very accommodating kayong lahat, pati ang staff ninyo sa Hong Kong, kaya masayang-masaya ang senior citizen. Kung puwede lang mag-book every month! Isa pa sa nagustuhan ko, kahit medyo rush, naitawid nang maayos ang travel. Good job, guys! Until our next travel. Discount po ha",
      user: "- Joven Caluag (Client for 4D3N Hong Kong Land Arrangement po with Disneyland)",
      image:
        "https://res.cloudinary.com/dmxvasob7/image/upload/v1744774304/testimonials3_zzxcmp.webp",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const current = userTestimonials[currentSlide];

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % userTestimonials.length);
  const handlePrev = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? userTestimonials.length - 1 : prev - 1
    );

  return (
    <div
      className="h-screen w-full relative bg-cover bg-center transition-all duration-500 bg-[linear-gradient(180deg,rgba(5,18,28,0)_44.33%,rgba(5,18,28,0.8)_74.87%)]"
      style={{
        backgroundImage: `url(${current.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex w-full min-h-[484px] absolute py-[112px] px-[10px] bottom-0 bg-[linear-gradient(180deg,rgba(5,18,28,0)_44.33%,rgba(5,18,28,0.8)_74.87%)] lg:px-[80px]">
        <div className="absolute max-w-screen bottom-25 sm: bottom-0 mx-0 mx-[10px]">
          <TextReveal>
            <h2 className="font-bold text-3xl text-white font-satoshi lg:text-6xl text-[40px] font-semibold">
              {current.title}
            </h2>

            <p className="italic mx-[10px] font-medium text-base text-white font-generalSans lg:text-2xl text-base font-generalSans">
              {current.message}
            </p>
            <p className="opacity-65 italic text-base text-white font-generalSans">
              {current.user}
            </p>
          </TextReveal>
        </div>

        <div className="absolute bottom-10 right-10 sm:right-10 md:right-16 lg:right-20 flex justify-end space-x-3 sm:space-x-5 mt-5">
          <NavigationButton onClick={handlePrev}>Prev</NavigationButton>
          <NavigationButton onClick={handleNext}>Next</NavigationButton>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
