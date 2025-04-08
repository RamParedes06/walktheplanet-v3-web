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
import { HomeOffers } from "@/library/HomePartner";

//! Slides

import Menu from "./Menu";
import { IconType } from "react-icons";
import Beliefs from "./beliefs";
import InfiniteMenu from "./discVertShaderSource";
import { partners } from "@/app/partners";
import GridMotion from "./GridMotion";
import GridMotionMobile from "./GridMotionMobile";
import Footer from "./Footer";
import BeliefsMobile from "./BeliefMobile";
import Marquee from "./Marquee";
import TravelOffersV2 from "./TravelOffersV2";

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
		image: "https://res.cloudinary.com/dmxvasob7/image/upload/v1744094660/EduTourism_sig6gy.png",
		// edutorism,
		description: "Immersive tours for all levels of education to enrich your students’ knowledge.",
		svg: LuGraduationCap,
		buttonText1: "See where learning takes you",
		buttonText2: "Contact Us",
		link: "/edutourism",
	},
	{
		id: "corporate",
		title: "CORPORATE & BUSINESS",
		image: "https://res.cloudinary.com/dmxvasob7/image/upload/v1744095169/Hero1Figma_xcgzrt.png",
		// corporate,
		description: "Personalized services suited for all corporate and business travel needs.",
		svg: PiBriefcaseMetal,
		buttonText1: "See how we elevate your business",
		buttonText2: "Contact Us",
		link: "/corporate",
	},
	{
		id: "mice",
		title: "M.I.C.E",
		image: "https://res.cloudinary.com/dmxvasob7/image/upload/v1744094664/MICE_hszdlj.png",
		// mice,
		description: "Meticulously planned events designed for your organization’s success.",
		svg: HiOutlinePresentationChartLine,
		buttonText1: "Explore Solutions",
		buttonText2: "Contact Us",
		link: "/mice",
	},
	{
		id: "travelpackage",
		title: "TRAVEL PACKAGE ESSENTIALS",
		image: "https://res.cloudinary.com/dmxvasob7/image/upload/v1744094663/Travel_Package_Essentials_libo0p.png",
		// travel,
		description: "One SIM, 190+ destinations connecting you anywhere in the world.",
		svg: FaBusAlt,
		buttonText1: "Find out what to pack",
		buttonText2: "Contact Us",
		link: "#",
	},
	{
		id: "liveselling",
		title: "LIVE SELLING",
		image: "https://res.cloudinary.com/dmxvasob7/image/upload/v1744095321/LiveSelling_t3jgmq.png",
		// liveselling,
		description: "Exclusive rates and awesome discounts right at your fingertips! Book now on our TikTok live selling hours.",
		svg: TbMessage2Heart,
		buttonText1: "Capture discounts and live updates",
		buttonText2: "Contact Us",
		link: "#",
	},
	{
		id: "onlinestore",
		title: "ONLINE STORE",
		image: "https://res.cloudinary.com/dmxvasob7/image/upload/v1744094662/Online_Store_t1xmy8.png",
		// onlinestore,
		description: "One-stop shop packed with an array of options for all travelers. Explore our selections at tours.walktheplanet.com",
		svg: RiShoppingCart2Line,
		buttonText1: "See what's new in store",
		buttonText2: "Contact Us",
		link: "#",
	},
	{
		id: "aboutus",
		title: "ABOUT US",
		image: "https://res.cloudinary.com/dmxvasob7/image/upload/v1744094662/About_Us_vaia05.png",
		// aboutus,
		description: "Exclusive Travel, Unique Experiences. Get to know who we are and where we play.",
		svg: AiOutlineHeart,
		buttonText1: "Find out what drives us",
		buttonText2: "Contact Us",
		link: "#",
	},
];

export default function Hero() {
  // const [activeIndex, setActiveIndex] = useState(0);
  //! For the full screen menu animation
  const [isOpenDesktop, setIsOpenDesktop] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  //! Slide Section
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollDelta = useRef(0);
  // const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const totalScrollRequired = 1000;
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const target = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
          document.body.style.overflow = "";

          // Only reset if user scrolls upwards to the top
          if (scrollProgressRef.current < 0) {
            scrollDelta.current = 0;
            scrollProgressRef.current = 0;
            // setScrollProgress(0);
          }
        }
      },
      { threshold: 0.9 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isActive) return;

      const currentProgress = scrollProgressRef.current;

      // Prevent scrolling if section is fully collapsed or fully expanded
      if (
        (currentProgress <= 0 && e.deltaY < 0) ||
        (currentProgress >= 1 && e.deltaY > 0)
      ) {
        document.body.style.overflow = "";
        return;
      }

      e.preventDefault();
      document.body.style.overflow = "hidden";

      scrollDelta.current += e.deltaY;
      scrollDelta.current = Math.max(
        0,
        Math.min(scrollDelta.current, totalScrollRequired)
      );

      const progress = scrollDelta.current / totalScrollRequired;
      scrollProgressRef.current = progress;
      // setScrollProgress(progress);

      //  a delay before enabling scrolling
      if (progress >= 1) {
        setTimeout(() => {
          document.body.style.overflow = "";
        }, 2000); // Delay to prevent skipping
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isActive]);

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

  //! For horizontal scroll effect
  const racesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number>();

  //! Sliding animation for the tabs
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [initialRender, setInitialRender] = useState(true);

  const goToSlide = (index: number) => {
    // Set the active index
    setActiveIndex(index);

    // Get the ScrollTrigger instance
    const st = ScrollTrigger.getById("main-scroll");

    if (st) {
      const targetPosition =
        st.start + (st.end - st.start) * (index / (tabs.length - 1));
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Only run the animation after the component is mounted
    if (mounted) {
      const races = racesRef.current;

      // Function to calculate the scroll amount based on current dimensions
      const getScrollAmount = () => {
        const racesWidth = races!.scrollWidth;
        return -(racesWidth - window.innerWidth);
      };

      // Create the horizontal scrolling animation
      const tween = gsap.to(races, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      // Create the ScrollTrigger
      const st = ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`, // Use absolute value and ensure it's positive
        pin: true,
        animation: tween,
        scrub: 1,
        id: "main-scroll",
        invalidateOnRefresh: true,
        markers: false,
        anticipatePin: 1,
        // fastScrollEnd: true,
        // preventOverlaps: true,
        snap: {
          snapTo: (value) => {
            // Calculate the closest snap point (7 images = 7 points from 0 to 1)
            const snapPoints = [];
            for (let i = 0; i < tabs.length; i++) {
              snapPoints.push(i / (tabs.length - 1));
            }
            // Find the closest snap point
            const closest = snapPoints.reduce((prev, curr) => {
              return Math.abs(curr - value) < Math.abs(prev - value)
                ? curr
                : prev;
            });
            return closest;
          },
          duration: 0.2,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          // Calculate which slide is active based on the progress
          const progress = self.progress;
          const rawIndex = progress * (tabs.length - 1);
          const currentIndex = Math.round(rawIndex);
          setActiveIndex(currentIndex);
        },

        onRefresh: () => {
          // Update the animation target when window is resized
          tween.vars.x = getScrollAmount();
          tween.invalidate();
        },
      });

      // Set initial state for all descriptions
      gsap.set(".description", {
        opacity: 0,
        y: 150,
        position: "absolute",
        top: "0%",
        left: "0%",
        width: "100%",
      });

      // Select all description elements
      const descriptions = document.querySelectorAll(".description");

      // Create individual animations for each description
      descriptions.forEach((desc, index) => {
        gsap.to(desc, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "circ.out",
          scrollTrigger: {
            trigger: desc.parentElement, // The container holding the description
            containerAnimation: tween,
            start: "left center",
            toggleActions: "restart none restart reverse",
            id: `desc-${index}`,
            markers: false,
          },
        });
      });

      //! Cards travel offers
      const calculateSpacer = () => {
        // For larger screens, use larger spacing
        if (window.innerWidth >= 1200) {
          return 80; // 15% of viewport height on large screens
        }
        // For medium screens
        else if (window.innerWidth > 768) {
          return 50; // 12% of viewport height on medium screens
        }
        // For smaller screens and mobile devices
        else {
          return 50; // 8% of viewport height on small screens
        }
      };

      // Set the dynamic spacer
      const spacer = calculateSpacer();

      // const spacer = 50;
      const cards = gsap.utils.toArray<HTMLElement>(".card");
      // Set width for all cards to be the same
      // gsap.set(cards, {
      //   width: "100%", // Set all cards to the same width (adjust percentage as needed)
      // });

      // // First card starts visible
      // gsap.set(cards[0], {
      //   width: "100%", // First card starts at full width
      // });

      // Position other cards off-screen initially
      gsap.set(cards.slice(1), {
        y: (index) => window.innerHeight / 2 + spacer * index,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".travel-section",
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=300%",
          markers: false,
        },
      });

      // Animate width AND position
      tl.fromTo(
        ".card:not(:first-child)",
        {
          y: (index) => window.innerHeight / 2 + spacer * index,
          width: "100%", // Starting width for non-first cards
          stagger: 0.5,
          backgroundColor: (index, element) => {
            // Get the original background color from inline style or computed style
            const bgColor =
              element.style.backgroundColor ||
              window.getComputedStyle(element).backgroundColor;
            return bgColor; // Keep original background color initially
          },
        },
        {
          y: (index) => spacer * (index + 1),
          width: "100%", // Ending width - same as starting to maintain consistency
          backgroundColor: (index, element) => {
            // Get the original background color
            const bgColor =
              element.style.backgroundColor ||
              window.getComputedStyle(element).backgroundColor;

            // Create a more opaque version by adding alpha channel
            // This preserves the color but makes it more solid
            if (bgColor.includes("rgba")) {
              // If already has transparency, modify it
              return bgColor.replace(
                /rgba\((\d+,\s*\d+,\s*\d+),\s*[\d.]+\)/,
                "rgba($1, 0.9)"
              );
            } else if (bgColor.includes("rgb")) {
              // Convert rgb to rgba
              return bgColor.replace(/rgb/, "rgba").replace(/\)/, ", 0.9)");
            }
            return bgColor;
          },
          stagger: 0.5,
        }
      );

      // Clean up
      return () => {
        st.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.id && trigger.vars.id.startsWith("desc-")) {
            trigger.kill();
          }
        });
      };
    }
  }, [mounted]);

  useEffect(() => {
    if (!tabsContainerRef.current || !slideRef.current) return;

    const buttons = tabsContainerRef.current.querySelectorAll("button");
    if (buttons.length === 0 || activeIndex >= buttons.length) return;

    const activeButton = buttons[activeIndex];

    // Position the sliding background using CSS
    // Add slight padding to ensure it fully covers the text
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
      {/* Header - only visible when not animating */}
      <div className="fixed right-[5%] bottom-[20%] z-50 hidden sm:hidden md:hidden lg:block ">
        {/* Header - only visible when menu is closed */}
        <div
          ref={headerRef}
          className={`bg-white flex items-center justify-between px-8 py-[18px] shadow-xl rounded-full w-[300px] lg:w-[436px]  ${
            isOpenDesktop ? "invisible" : "visible"
          }`}
        >
          <Image src={Logo} alt="logo" width={70} height={50} />
          <div onClick={toggleMenu} className="cursor-pointer">
            <MenuSvg />
          </div>
        </div>
      </div>

      {/* Menu Desktop View */}
      <div className="hero-container  bg-white" ref={heroContainerRef}>
        {/* tabs and logos  */}
        <div className="fixed lg:left-[5%] lg:bottom-[20%] bottom-[10%] w-full lg:w-max z-50 flex flex-col lg:flex-row justify-between items-center gap-4 mt-1">
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
          className="racesWrapper  w-full lg:overflow-hidden  max-w-full mx-auto flex justify-between relative"
          ref={wrapperRef}
        >
          {/* scroll animation!!  */}
          <Marquee variant="homeHero" />
          {/* End of infinite scroll animation  */}

          <div className="races !max-h-[100vh]  w-full" ref={racesRef}>
            {tabs.map((tab, index: number) => (
              <div key={index} className="racesDiv">
                <Image
                  key={index}
                  src={tab.image}
                  alt={`Images ${index}`}
                  width={1920}
                  height={150}
                  // className="relative object-center object-cover"
                  style={{ zIndex: 0 }}
                />

                <div
                  className="description-container  w-full  "
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
                    <div className="max-w-[90%] lg:max-w-[100%]">
                      <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold text-center lg:text-left satoshi">
                        {tabs[index].title}
                      </p>
                      <p
                        className={`text-white lg:text-xl sm:text-lg ${
                          index <= 3
                            ? "max-w-3xl"
                            : index == 6
                            ? "max-w-[24rem]"
                            : "max-w-xl"
                        } text-center sm:text-left mx-auto sm:mx-0 mt-5`}
                      >
                        {tabs[index].description}
                      </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-8 justify-center sm:justify-start w-full max-w-[350px] lg:max-w-[500px]">
                      <button
                        onClick={() =>
                          (window.location.href = tabs[index].link)
                        }
                        className="px-6 py-4 bg-[#D0F6FF] text-[#00537F] font-bold rounded-xl text-sm sm:text-base cursor-pointer h-min"
                      >
                        {tab.buttonText1}
                      </button>
                      <button
                        onClick={() => (window.location.href = "/contact-us")}
                        className="px-6 py-4 bg-white text-[#333] font-bold rounded-xl text-sm sm:text-base cursor-pointer h-min"
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

      {/* For smooth introduction of the vertical scroll  */}

      <TravelOffersV2 />
      <Beliefs />
      <BeliefsMobile />
      <InfiniteMenu items={partners} />
      <GridMotion items={HomeOffers} />
      <GridMotionMobile />
      <Footer />

      {/* Mobile Menu  */} 
      <div className=" w-full relative overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto flex justify-between">
        <div className="lg:hidden">
          {/* Logo Menu */}
          {/* Header - only visible when not animating */}
          <div className="fixed z-10 top-[70px]  w-full flex items-center justify-center ">
            {/* Header - only visible when menu is closed */}
            <div
              ref={headerRefMobile}
              className={` flex items-center justify-between px-4  py-3 rounded-full w-[300px] lg:w-[436px] bg-white ${
                isOpenMobile ? "invisible" : "visible"
              }`}
            >
              <Image src={Logo} alt="logo" width={70} height={50} />
              <div onClick={toggleMenuMobile} className="cursor-pointer">
                <MenuSvg />
                {/* </div> */}
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
