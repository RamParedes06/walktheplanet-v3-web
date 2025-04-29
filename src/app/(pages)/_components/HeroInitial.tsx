"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Logo from "@/assets/images/Logo.png";
import MenuSvg from "@/assets/svg/MenuSvg";
import { TbMessage2Heart } from "react-icons/tb";
import { PiBriefcaseMetal } from "react-icons/pi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { FaBusAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/hero-horizontal-scroll.scss";
import "@/styles/slider.scss";

//! Slides
import Menu from "./Menu";
import { IconType } from "react-icons";
import Marquee from "./Marquee";

interface Tab {
  id: string;
  title: string;
  image: StaticImageData | string;
  description: string;
  svg: IconType;
  buttonText1: string;
  buttonText2: string;
  link: string;
}

const tabs: Tab[] = [
  {
    id: "edutourism",
    title: "EDUTOURISM",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744095169/Hero1Figma_xcgzrt.png",
    description:
      "Immersive tours for all levels of education to enrich your students' knowledge.",
    svg: LuGraduationCap,
    buttonText1: "See where learning takes you",
    buttonText2: "Contact Us",
    link: "/edutourism",
  },
  {
    id: "corporate",
    title: "CORPORATE AND BUSINESS",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096416/Corporate_Business_1_4_dab6y2.png",
    description:
      "Personalized services suited for all corporate and business travel needs.",
    svg: PiBriefcaseMetal,
    buttonText1: "See how we elevate your business",
    buttonText2: "Contact Us",
    link: "/corporate",
  },
  {
    id: "mice",
    title: "M.I.C.E",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096418/MICE_1_2_c65uoh.png",
    description:
      "Meticulously planned events designed for your organization's success.",
    svg: HiOutlinePresentationChartLine,
    buttonText1: "Explore Solutions",
    buttonText2: "Contact Us",
    link: "/mice",
  },
  {
    id: "travelpackage",
    title: "TRAVEL PACKAGE ESSENTIALS",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096417/Travel_Essentials_Global_Data_Sim_1_1_ieqaf6.png",
    description:
      "One SIM, 190+ destinations connecting you anywhere in the world.",
    svg: FaBusAlt,
    buttonText1: "Find out what to pack",
    buttonText2: "Contact Us",
    link: "/leisure",
  },
  {
    id: "liveselling",
    title: "LIVE SELLING",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096026/Live_Selling_Tiktok_zjfzai.png",
    description:
      "Exclusive rates and awesome discounts right at your fingertips! Book now on our TikTok live selling hours.",
    svg: TbMessage2Heart,
    buttonText1: "Capture discounts and live updates",
    buttonText2: "Contact Us",
    link: "https://www.tiktok.com/@walktheplanetinc",
  },
  {
    id: "onlinestore",
    title: "ONLINE STORE",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744094662/Online_Store_t1xmy8.png",
    description:
      "One-stop shop packed with an array of options for all travelers. Explore our selections at tours.walktheplanet.com",
    svg: RiShoppingCart2Line,
    buttonText1: "See what's new in store",
    buttonText2: "Contact Us",
    link: "/all-in-products",
  },
  {
    id: "aboutus",
    title: "ABOUT US",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744267728/hero-aboutus_rjysnm.png",
    description:
      "Exclusive Travel, Unique Experiences. Get to know who we are and where we play.",
    svg: AiOutlineHeart,
    buttonText1: "Find out what drives us",
    buttonText2: "Contact Us",
    link: "/about-us",
  },
];

export default function Hero() {
  //! For the full screen menu animation
  const [isOpenDesktop, setIsOpenDesktop] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  //! For Navigation Menu
  const headerRef = useRef<HTMLDivElement>(null);
  const headerRefMobile = useRef<HTMLDivElement>(null);
  const [headerRect, setHeaderRect] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const [headerRectMobile, setHeaderRectMobile] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const toggleMenu = () => {
    if (!isOpenDesktop && headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setHeaderRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    setIsOpenDesktop(!isOpenDesktop);
  };

  const toggleMenuMobile = () => {
    if (!isOpenMobile && headerRefMobile.current) {
      const rect = headerRefMobile.current.getBoundingClientRect();
      setHeaderRectMobile({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    setIsOpenMobile(!isOpenMobile);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpenDesktop || isOpenMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenDesktop, isOpenMobile]);

  //! For horizontal content
  const racesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialSetupDone, setInitialSetupDone] = useState(false); // Add this state to track initial setup

  //! Sliding animation for the tabs
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [initialRender, setInitialRender] = useState(true);

  // Modified goToSlide function to handle animation state
  const goToSlide = (index: number) => {
    // Prevent clicking during animation
    if (isAnimating || activeIndex === index) return;

    setIsAnimating(true);

    // Set the active index
    setActiveIndex(index);

    const races = racesRef.current;
    if (!races) {
      setIsAnimating(false);
      return;
    }

    // Calculate the slide position manually - each slide is 100vw
    const slideWidth = window.innerWidth;
    const targetPosition = -(index * slideWidth);

    // Animate the slide transition
    gsap.to(races, {
      x: targetPosition,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    // Animate description elements
    const descriptions = document.querySelectorAll(".description");

    // First hide all descriptions
    gsap.set(descriptions, {
      opacity: 0,
      y: 150,
    });

    // Then reveal the current description
    gsap.to(descriptions[index], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "circ.out",
      delay: 0.1, // Small delay to sync with slide transition
    });
  };

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Only run the setup after the component is mounted and only once
    if (mounted && !initialSetupDone) {
      const races = racesRef.current;
      if (!races) return;

      // Important: Instead of using ScrollTrigger to pin, use CSS
      // This avoids issues with click handling
      if (heroContainerRef.current) {
        heroContainerRef.current.style.height = "100vh";
        heroContainerRef.current.style.width = "100%";
        heroContainerRef.current.style.position = "relative";
        heroContainerRef.current.style.overflow = "hidden";
      }

      // Set initial positioning for slides (only on first run)
      const currentIndex = activeIndex;
      const slideWidth = window.innerWidth;
      const targetPosition = -(currentIndex * slideWidth);
      
      gsap.set(races, { x: targetPosition }); // Position at current active index

      // Set initial state for all description elements
      const descriptions = document.querySelectorAll(".description");
      gsap.set(descriptions, {
        opacity: 0,
        y: 150,
        position: "absolute", 
        top: "0%",
        left: "0%",
        width: "100%",
      });

      // Only show the active description initially
      gsap.to(descriptions[activeIndex], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "circ.out",
      });

      // Make sure each slide takes up the full viewport width
      const racesDivs = document.querySelectorAll(".racesDiv");
      gsap.set(racesDivs, {
        width: window.innerWidth,
      });

      // Make races container have the correct width
      races.style.width = `${window.innerWidth * tabs.length}px`;
      
      // Mark initial setup as done
      setInitialSetupDone(true);
    }
  }, [mounted, activeIndex, initialSetupDone]);
  
  // Separate useEffect for window resize handling
  useEffect(() => {
    if (!mounted) return;
    
    const races = racesRef.current;
    if (!races) return;
    
    // Update slide widths on window resize
    const handleResize = () => {
      // Update each slide width
      const racesDivs = document.querySelectorAll(".racesDiv");
      gsap.set(racesDivs, {
        width: window.innerWidth,
      });

      // Update total races container width
      races.style.width = `${window.innerWidth * tabs.length}px`;

      // Update the current slide position
      const currentIndex = activeIndex;
      const slideWidth = window.innerWidth;
      const targetPosition = -(currentIndex * slideWidth);

      gsap.set(races, {
        x: targetPosition,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, activeIndex]);

  useEffect(() => {
    if (!tabsContainerRef.current || !slideRef.current) return;

    const buttons = tabsContainerRef.current.querySelectorAll("button");
    if (buttons.length === 0 || activeIndex >= buttons.length) return;

    const activeButton = buttons[activeIndex];

    // Position the sliding indicator
    slideRef.current.style.transform = `translateX(${activeButton.offsetLeft}px)`;
    slideRef.current.style.width = `${activeButton.offsetWidth}px`;

    // Remove initial render flag after first positioning
    if (initialRender) {
      setInitialRender(false);
    }
  }, [activeIndex, initialRender]);

  return (
    <>
      {/* Logo Menu  */}
      <div className="fixed right-[5%] bottom-[20%] z-50 hidden sm:hidden md:hidden lg:block ">
        {/* Header - only visible when menu is closed */}
        <div
          ref={headerRef}
          className={`bg-white flex items-center justify-between px-8 py-[18px] shadow-xl rounded-full w-[300px] lg:w-[436px]  ${
            isOpenDesktop ? "invisible" : "visible"
          }`}
        >
          <Image
            src={Logo}
            onClick={() => window.location.replace("/")}
            className="cursor-pointer"
            alt="logo"
            width={70}
            height={50}
          />
          <div onClick={toggleMenu} className="cursor-pointer">
            <MenuSvg />
          </div>
        </div>
      </div>

      {/* Menu Desktop View */}
      <div className="hero-container bg-white relative" ref={heroContainerRef}>
        {/* tabs and logos  */}
        <div className="absolute lg:left-[5%] lg:bottom-[20%] bottom-[10%] w-full lg:w-max z-50 flex flex-col lg:flex-row justify-between items-center gap-4 mt-1 ">
          <div
            className="flex flex-wrap justify-center lg:justify-start gap-2.5 lg:gap-4 lg:max-w-[850px] max-w-[350px] relative"
            ref={tabsContainerRef}
          >
            <div
              ref={slideRef}
              className={`absolute bg-white rounded-full z-10 pointer-events-none ${
                initialRender ? "" : "transition-all duration-300 ease-in-out"
              }`}
              style={{ top: "2px" }}
            />
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`cursor-pointer lg:px-4 lg:py-2 px-2.5 py-1 rounded-full flex items-center gap-2 sm:gap-3 text-sm transition whitespace-nowrap hover:text-black hover:bg-white  ${
                  activeIndex === index ? "text-black bg-white" : "text-white"
                }`}
                onMouseEnter={() => {
                  setHoveredTab(index);
                }}
                onMouseLeave={() => {
                  setHoveredTab(-1);
                }}
                onClick={() => {
                  goToSlide(index);
                }}
              >
                <tab.svg
                  color={
                    activeIndex === index || hoveredTab === index
                      ? "black"
                      : "white"
                  }
                  className="lg:block hidden"
                />
                <p>{tab.title}</p>
              </button>
            ))}
          </div>
        </div>

        <div
          className="racesWrapper w-full max-w-full mx-auto flex justify-between relative"
          ref={wrapperRef}
        >
          {/* Marquee animation  */}
          <Marquee variant="homeHero" />
          {/* End of infinite scroll animation  */}

          <div className="races !max-h-[100vh] w-full flex" ref={racesRef}>
            {tabs.map((tab, index: number) => (
              <div key={index} className="racesDiv relative">
                <Image
                  key={index}
                  src={tab.image}
                  alt={`Images ${index}`}
                  width={1920}
                  height={150}
                  className="h-screen object-cover"
                  style={{ zIndex: 0 }}
                />

                <div
                  className="description-container absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.201792) 50.45%, rgba(0, 0, 0, 0.4) 100%),
                      linear-gradient(180deg, rgba(0, 0, 0, 0) 67.7%, rgba(0, 0, 0, 0.399908) 86.53%, rgba(0, 0, 0, 0.8) 105.36%),
                      linear-gradient(0deg, rgba(0, 0, 0, 0) 81.66%, rgba(0, 0, 0, 0.4) 110.95%)`,
                  }}
                >
         <div
                    className="lg:h-[55%] h-[90%] description flex flex-col gap-5   justify-center items-center lg:items-start lg:pl-[6%] w-full "
                    data-index={index}
                  >
                    <div className="w-full max-w-[85%] lg:max-w-[100%]">
                      <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-semibold text-center lg:text-left satoshi">
                        {tabs[index].title}
                      </h2>
                      <p className="text-white text-base sm:text-lg lg:text-xl mx-auto sm:mx-0 mt-5 text-center lg:text-left">
                        {tabs[index].description}
                      </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-8 justify-center lg:justify-start w-full max-w-[310px] sm:max-w-[360px] lg:max-w-[500px]">
                      <button
                        onClick={() => (window.location.href = tabs[index].link)}
                        className="px-6 py-4 bg-[#D0F6FF] text-[#00537F] font-bold rounded-xl text-sm sm:text-base cursor-pointer h-min w-full lg:w-auto"
                      >
                        {tab.buttonText1}
                      </button>
                      <button
                        onClick={() => (window.location.href = "/contact-us")}
                        className="px-6 py-4 bg-white text-[#333] font-bold rounded-xl text-sm sm:text-base cursor-pointer h-min w-full lg:w-auto"
                      >
                        {tab.buttonText2}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpenDesktop && (
          <Menu toggleMenu={toggleMenu} headerRect={headerRect} />
        )}
      </AnimatePresence>

      {/* Mobile Menu  */}
      <div className="w-full relative overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto flex justify-between">
        <div className="lg:hidden">
          {/* Logo Menu */}
          <div className="fixed z-10 top-[70px] w-full flex items-center justify-center">
            {/* Header - only visible when menu is closed */}
            <div
              ref={headerRefMobile}
              className={`flex items-center justify-between px-4 py-3 rounded-full w-[300px] lg:w-[436px] bg-white ${
                isOpenMobile ? "invisible" : "visible"
              }`}
            >
              <Image src={Logo} alt="logo" width={70} height={50} />
              <div onClick={toggleMenuMobile} className="cursor-pointer">
                <MenuSvg />
              </div>
            </div>
          </div>
          {/* Menu Mobile View*/}
          <AnimatePresence>
            {isOpenMobile && (
              <Menu
                toggleMenu={toggleMenuMobile}
                headerRect={headerRectMobile}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}