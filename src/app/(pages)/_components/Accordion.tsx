"use client";
import { useRef} from "react";

interface AccordionItemProps {
  number: string;
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

export const Accordion = ({
  number,
  title,
  content,
  isOpen,
  toggleAccordion,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200 border-opacity-30">
      <div
        onClick={toggleAccordion}
        className="flex justify-between items-center py-4 cursor-pointer"
      >
        <div className="flex items-center font-generalSans  pb-5">
          <span className="text-xl opacity-70 text-white  pr-4">{number}</span>
          <h3 className="font-semibold text-xl md:text-2xl text-white">{title}</h3>
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
        <div className="md:pl-9 pl-10 pb-5 text-white md:text-xl text-base">{content}</div>
      </div>
    </div>
  );
};
