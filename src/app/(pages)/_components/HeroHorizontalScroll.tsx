// "use client";

// import { useRef, useEffect, useState } from "react";
// import edutorism from "@/assets/images/EDUTOURISM.webp";
// import corporate from "@/assets/images/CORPORATE.webp";
// import mice from "@/assets/images/MICE.webp";
// import travel from "@/assets/images/TRAVEL.webp";
// import liveselling from "@/assets/images/LIVE.webp";
// import onlinestore from "@/assets/images/STORE.webp";
// import aboutus from "@/assets/images/ABOUT.webp";
// import "../../../../styles/hero-horizontal-scroll.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// interface Tab {
//   id: string | number;
//   image: string;
//   title: string;
//   description: string;
//   buttonText1: string;
//   buttonText2: string;
//   svg: any;
// }

// interface HorizontalScrollProps {
//   tabs?: Tab[];
// }

// const HeroHorizontalScroll = () => {
//   const racesRef = useRef<HTMLDivElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     // Register GSAP plugins
//     gsap.registerPlugin(ScrollTrigger);

//     // Only run the animation after the component is mounted
//     if (mounted) {
//       const races = racesRef.current;

//       // Function to calculate the scroll amount based on current dimensions
//       const getScrollAmount = () => {
//         const racesWidth = races!.scrollWidth;
//         return -(racesWidth - window.innerWidth);
//       };

//       // Create the horizontal scrolling animation
//       const tween = gsap.to(races, {
//         x: getScrollAmount,
//         duration: 3,
//         ease: "none",
//       });

//       // Create the ScrollTrigger
//       const st = ScrollTrigger.create({
//         trigger: wrapperRef.current,
//         start: 0,
//         end: () => `+=${Math.abs(getScrollAmount())}`, // Use absolute value and ensure it's positive
//         pin: true,
//         animation: tween,
//         scrub: 1,
//         invalidateOnRefresh: true,
//         markers: true,
//         onRefresh: () => {
//           // Update the animation target when window is resized
//           tween.vars.x = getScrollAmount();
//           tween.invalidate();
//         },
//       });

//       // Clean up
//       return () => {
//         st.kill();
//       };
//     }
//   }, [mounted]);

//   const images = [
//     edutorism,
//     corporate,
//     mice,
//     travel,
//     liveselling,
//     onlinestore,
//     aboutus,
//   ];

//   return (
//     <>
//       {/* <div className="space-50vh lightBG"></div> */}

//       <div className="racesWrapper" ref={wrapperRef}>
//         <div className="races" ref={racesRef}>
//           {images.map((image, index) => (
//             <Image
//               key={index}
//               src={images[index]}
//               alt={`Images ${index}`}
//               className=" object-cover"
//               width={3500}
//               height={500}
//             />
//           ))}
//           {/* <h2>Monaco</h2>
//           <h2>Austria</h2>
//           <h2>Hungary</h2>
//           <h2>Netherlands</h2>
//           <h2>Japan</h2> */}
//         </div>
//       </div>

//       <div className="space-100vh lightBG"></div>
//       <div className="brand" style={{ backgroundColor: "black" }}></div>
//     </>
//   );
// };

// export default HeroHorizontalScroll;
