export interface AccordionItemData {
  id: number;
  number: string;
  title: string;
  content: string;
}

//images 
export const emergencyImages = [
  "https://res.cloudinary.com/dmxvasob7/image/upload/v1744270642/edu-emergency1_ve4jl5.webp",
  "https://res.cloudinary.com/dmxvasob7/image/upload/v1744270641/edu-emergency2_lychp5.webp",
  "https://res.cloudinary.com/dmxvasob7/image/upload/v1744270648/edu-emergency3_nkvass.webp",
  "https://res.cloudinary.com/dmxvasob7/image/upload/v1744270642/edu-emergency4_hahswi.webp"
];

//accordion data
export const accordionData: AccordionItemData[] = [
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
