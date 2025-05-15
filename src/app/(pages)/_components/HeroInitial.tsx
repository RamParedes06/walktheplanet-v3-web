"use client";
import Logo from "@/assets/images/Logo.png";
import MenuSvg from "@/assets/svg/MenuSvg";
import "@/styles/hero-horizontal-scroll.scss";
import "@/styles/slider.scss";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { tabs } from "@/library/Tab";
import Marquee from "./Marquee";
import Menu from "./Menu";

export default function Hero() {
  //! For the full screen menu animation
  const [isOpenDesktop, setIsOpenDesktop] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true); // State to control menu visibility

  //! For Navigation Menu
  const headerRef = useRef<HTMLDivElement>(null);
  const headerRefMobile = useRef<HTMLDivElement>(null);
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const headerContainerMobileRef = useRef<HTMLDivElement>(null);
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

  // Set up intersection observer for footer
  useEffect(() => {
    const footerElement = document.querySelector("footer");
    if (!footerElement) return;

    const observerOptions = {
      root: null, // viewport as root
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the footer is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Hide menu when footer is visible, show when it's not
        setIsMenuVisible(!entry.isIntersecting);
      });
    }, observerOptions);

    observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Apply visibility classes based on isMenuVisible state
  useEffect(() => {
    if (headerContainerRef.current) {
      if (isMenuVisible) {
        headerContainerRef.current.classList.remove("opacity-0", "pointer-events-none");
        headerContainerRef.current.classList.add("opacity-100");
      } else {
        headerContainerRef.current.classList.add("opacity-0", "pointer-events-none");
        headerContainerRef.current.classList.remove("opacity-100");
      }
    }

    if (headerContainerMobileRef.current) {
      if (isMenuVisible) {
        headerContainerMobileRef.current.classList.remove("opacity-0", "pointer-events-none");
        headerContainerMobileRef.current.classList.add("opacity-100");
      } else {
        headerContainerMobileRef.current.classList.add("opacity-0", "pointer-events-none");
        headerContainerMobileRef.current.classList.remove("opacity-100");
      }
    }
  }, [isMenuVisible]);

  //! For horizontal content
  const racesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialSetupDone, setInitialSetupDone] = useState(false);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  //! Sliding animation for the tabs
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [initialRender, setInitialRender] = useState(true);

  // Clear any existing autoplay interval
  const clearAutoPlayInterval = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    clearAutoPlayInterval();

    autoPlayIntervalRef.current = setInterval(() => {
      if (!isAnimating) {
        const nextIndex = (activeIndex + 1) % tabs.length;
        goToSlide(nextIndex);
      }
    }, 3000);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isAnimating, clearAutoPlayInterval]);

  const goToSlide = useCallback(
    (index: number) => {
      // Prevent clicking during animation or going to the same slide
      if (isAnimating || activeIndex === index) return;
      setIsAnimating(true);
      setActiveIndex(index);

      const races = racesRef.current;
      if (!races) {
        setIsAnimating(false);
        return;
      }

      // Calculate the slide position - each slide is 100vw
      const slideWidth = window.innerWidth;
      const targetPosition = -(index * slideWidth);

      gsap.to(races, {
        x: targetPosition,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      const descriptions = document.querySelectorAll(".description");

      // hide all descriptions
      gsap.set(descriptions, {
        opacity: 0,
        y: 150,
      });

      // reveal the current description
      gsap.to(descriptions[index], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "circ.out",
        delay: 0.1,
      });
    },
    [isAnimating, activeIndex]
  );

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      // Cleanup on unmount
      clearAutoPlayInterval();
    };
  }, [clearAutoPlayInterval]);

  // Setup after mounting
  useEffect(() => {
    // Only run the setup after the component is mounted and only once
    if (mounted && !initialSetupDone) {
      const races = racesRef.current;
      if (!races) return;

      // Setup container styles
      if (heroContainerRef.current) {
        heroContainerRef.current.style.height = "100vh";
        heroContainerRef.current.style.width = "100%";
        heroContainerRef.current.style.position = "relative";
        heroContainerRef.current.style.overflow = "hidden";
      }

      // Set initial positioning for slides
      const slideWidth = window.innerWidth;
      const targetPosition = -(activeIndex * slideWidth);

      gsap.set(races, { x: targetPosition });

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
      setInitialSetupDone(true);
    }
  }, [mounted, activeIndex, initialSetupDone]);

  // Start autoplay after setup is complete
  useEffect(() => {
    if (mounted && initialSetupDone && !isOpenDesktop && !isOpenMobile) {
      startAutoPlay();
    }

    return () => {
      clearAutoPlayInterval();
    };
  }, [mounted, initialSetupDone, isOpenDesktop, isOpenMobile, startAutoPlay, clearAutoPlayInterval]);

  useEffect(() => {
    if (!mounted) return;

    const races = racesRef.current;
    if (!races) return;

    const handleResize = () => {
      // Update each slide width
      const racesDivs = document.querySelectorAll(".racesDiv");
      gsap.set(racesDivs, {
        width: window.innerWidth,
      });

      // Update total races container width
      races.style.width = `${window.innerWidth * tabs.length}px`;

      // Update the current slide position
      const slideWidth = window.innerWidth;
      const targetPosition = -(activeIndex * slideWidth);

      gsap.set(races, {
        x: targetPosition,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, activeIndex]);

  // Update tab slider position
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

  // Pause/restart autoplay on menu open/close
  useEffect(() => {
    if (isOpenDesktop || isOpenMobile) {
      clearAutoPlayInterval();
    } else if (mounted && initialSetupDone) {
      startAutoPlay();
    }
  }, [isOpenDesktop, isOpenMobile, mounted, initialSetupDone, clearAutoPlayInterval, startAutoPlay]);

  return (
    <>
      {/* Logo Menu - Desktop */}
      <div 
        ref={headerContainerRef}
        className="fixed right-[5%] bottom-[20%] z-50 hidden sm:hidden md:hidden lg:block transition-opacity duration-300"
      >
        {/* Header - only visible when menu is closed */}
        <div 
          ref={headerRef} 
          className={`bg-white flex items-center justify-between px-8 py-[18px] shadow-xl rounded-full w-[300px] lg:w-[436px] ${isOpenDesktop ? "invisible" : "visible"}`}
        >
          <Image src={Logo} onClick={() => window.location.replace("/")} className="cursor-pointer" alt="logo" width={70} height={50} />
          <div onClick={toggleMenu} className="cursor-pointer">
            <MenuSvg />
          </div>
        </div>
      </div>

      {/* Menu Desktop View */}
      <div className="hero-container bg-white relative" ref={heroContainerRef}>
        {/* tabs and logos  */}
        <div className="absolute lg:left-[5%] lg:bottom-[20%] bottom-[10%] z-10 w-full lg:w-max flex flex-col lg:flex-row justify-between items-center gap-4 mt-1 ">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 lg:gap-4 lg:max-w-[850px] max-w-[350px] relative" ref={tabsContainerRef}>
            <div ref={slideRef} className={`absolute bg-white rounded-full z-10 pointer-events-none ${initialRender ? "" : "transition-all duration-300 ease-in-out"}`} style={{ top: "2px" }} />
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`cursor-pointer lg:px-4 lg:py-2 px-2.5 py-1 rounded-full flex items-center gap-2 sm:gap-3 text-sm transition whitespace-nowrap hover:text-black hover:bg-white  ${activeIndex === index ? "text-black bg-white" : "text-white"}`}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(-1)}
                onClick={() => {
                  // Clear the current interval before changing slide
                  clearAutoPlayInterval();
                  goToSlide(index);
                  // Restart autoplay after manual navigation
                  startAutoPlay();
                }}
              >
                <tab.svg color={activeIndex === index || hoveredTab === index ? "black" : "white"} className="lg:block hidden" />
                <p>{tab.title}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="racesWrapper w-full max-w-full mx-auto flex justify-between relative" ref={wrapperRef}>
          {/* Marquee animation  */}
          <Marquee variant="homeHero" />
          {/* End of infinite scroll animation  */}

          <div className="races !max-h-[100vh] w-full flex" ref={racesRef}>
            {tabs.map((tab, index: number) => (
              <div key={index} className="racesDiv relative">
                <Image key={index} src={tab.image} alt={`Images ${index}`} width={1920} height={150} className="h-screen object-cover" style={{ zIndex: 0 }} />

                <div
                  className="description-container absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.201792) 50.45%, rgba(0, 0, 0, 0.4) 100%),
                      linear-gradient(180deg, rgba(0, 0, 0, 0) 67.7%, rgba(0, 0, 0, 0.399908) 86.53%, rgba(0, 0, 0, 0.8) 105.36%),
                      linear-gradient(0deg, rgba(0, 0, 0, 0) 81.66%, rgba(0, 0, 0, 0.4) 110.95%)`,
                  }}
                >
                  <div className="lg:h-[55%] h-[90%] description flex flex-col gap-5 justify-center items-center lg:items-start lg:pl-[6%] w-full" data-index={index}>
                    <div className="w-full  lg:max-w-[100%]">
                      <h2 className="text-white text-[32px] sm:text-[32px] lg:text-6xl font-semibold text-center lg:text-left satoshi">{tabs[index].title}</h2>
                      <p className="text-white text-sm lg:text-xl mx-auto lg:mx-0 max-w-[80%] lg:max-w-full mt-5 text-center lg:text-left">
                        {tabs[index].description} <br />
                        {tabs[index].description1}{" "}
                        <a href="https://tours.walktheplanet.com/" target="_blank" rel="noopener noreferrer">
                          <span className="underline">{tabs[index].customLink}</span>
                        </a>
                      </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-8 justify-center lg:justify-start w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[500px]">
                      <button onClick={() => (window.location.href = tabs[index].link)} className="px-6 py-4 bg-[#D0F6FF] text-[#00537F] font-bold rounded-xl text-sm sm:text-base cursor-pointer h-min w-full lg:w-auto">
                        {tab.buttonText1}
                      </button>
                      <button onClick={() => (window.location.href = "/contact-us")} className="px-6 py-4 bg-white text-[#333] font-bold rounded-xl text-sm sm:text-base cursor-pointer h-min w-full lg:w-auto">
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
      <AnimatePresence>{isOpenDesktop && <Menu toggleMenu={toggleMenu} headerRect={headerRect} />}</AnimatePresence>

      {/* Mobile Menu  */}
      <div className="w-full relative overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto flex justify-between z-50">
        <div className="lg:hidden">
          {/* Logo Menu */}
          <div 
            ref={headerContainerMobileRef}
            className="fixed z-10 top-[70px] w-full flex items-center justify-center transition-opacity duration-300"
          >
            {/* Header - only visible when menu is closed */}
            <div ref={headerRefMobile} className={`flex items-center justify-between px-4 py-3 rounded-full w-[300px] lg:w-[436px] bg-white ${isOpenMobile ? "invisible" : "visible"}`}>
              <Image src={Logo} alt="logo" width={70} height={50} />
              <div onClick={toggleMenuMobile} className="cursor-pointer">
                <MenuSvg />
              </div>
            </div>
          </div>
          {/* Menu Mobile View*/}
          <AnimatePresence>{isOpenMobile && <Menu toggleMenu={toggleMenuMobile} headerRect={headerRectMobile} />}</AnimatePresence>
        </div>
      </div>
    </>
  );
}