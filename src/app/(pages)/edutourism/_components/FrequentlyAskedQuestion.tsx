"use client";
import { useState } from "react";
import TextReveal from "../../_components/TextReveal";
import { AccordionItem, ImageSlide } from "../../_components/Accordion";
import { EduEmergencyImages } from "@/library/EduEmergencyImages";

 
interface AccordionItemData {
  id: number;
  number: string;
  title: string;
  content: string;
}
 
const FrequentlyAskedQuestion = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
 
  const accordionData: AccordionItemData[] = [
    {
      id: 0,
      number: "01",
      title: "EMERGENCY RESPONSE",
      content: "Protocols for pre-to-post travel safety.",
    },
    {
      id: 1,
      number: "02",
      title: "HELICOPTER SERVICES",
      content: "For emergency medical flights with advanced life support.",
    },
    {
      id: 2,
      number: "03",
      title: "ESTABLISHED SAFETY PARTNERSHIPS",
      content: "To ensure responsible and well-prepared travel experiences.",
    },
    {
      id: 3,
      number: "04",
      title: "ROAD TRAFFIC AND SAFETY ASSISTANCE",
      content: "Throughout all educational tours",
    },
    
  ];
 
  const toggleAccordion = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
      return;
    }
 
    setOpenItem(index);
  };
 
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left side - Image slideshow */}
      <div className="relative w-full md:w-1/2 h-screen">
        <ImageSlide openItem={openItem} images={EduEmergencyImages} />
 
        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-[112px_64px] w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-50 pointer-events-none">
          <TextReveal>
            <p className="text-white leading-relaxed md:text-2xl text-xl italic max-w-[590px]">
              We prioritize your safety, comfort, and confidentiality in every
              corporate and business travel arrangement to make your journeys
              smooth and worry-free
            </p>
          </TextReveal>
        </div>
      </div>
 
      {/* Right side - Accordion list */}
      <div className="w-full md:w-1/2 relative order-1">
        {/* Mobile-only gradient background */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: `
              linear-gradient(90deg, #FF7A00 0%, #599D6A 50%, #00A9CE 100%),
              linear-gradient(360deg, rgba(5, 18, 28, 0) 3.33%, rgba(10, 36, 114, 0.498536) 51.52%, #05121C 100%)
            `,
            backgroundBlendMode: "overlay",
          }}
        ></div>
 
        {/* Desktop background */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-900 to-teal-500"></div>
 
        <div className="relative h-full">
          <div className="w-full h-full flex justify-center items-center bg-gradient-to-b from-black/60 via-black/20 to-transparent">
            <div className="md:py-8 lg:px-4 px-6 py-16 w-full max-w-2xl">
              {accordionData.map((item) => (
                <AccordionItem
                  key={item.id}
                  number={item.number}
                  title={item.title}
                  content={item.content}
                  isOpen={openItem === item.id}
                  toggleAccordion={() => toggleAccordion(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default FrequentlyAskedQuestion;