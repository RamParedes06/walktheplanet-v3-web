"use client";
import MenuSvg from "@/assets/svg/MenuSvg";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/images/Logo.png";

import { AnimatePresence } from "framer-motion";
import "@/styles/hero-horizontal-scroll.scss";

import corpImage1 from "@/assets/images/contact/heroBanner.webp";
import TextReveal from "../(pages)/_components/TextReveal";
import Marquee from "../(pages)/_components/Marquee";
import Menu from "../(pages)/_components/Menu";
const Hero = () => {
  // const corpImage1 = "http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcorporate-5.webp&version_id=null";

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

  return (
    <div className="relative">
      <div className="absolute right-[5%] bottom-[20%] z-50 fixed hidden sm:hidden md:hidden lg:block overflow-hidden">
        <div
          ref={headerRef}
          className={`bg-white flex items-center justify-between px-8 py-[18px] rounded-full w-[300px] lg:w-[436px]  ${
            isOpenDesktop ? "invisible" : "visible"
          }`}
        >
          <Image
            src={Logo}
            alt="logo"
            width={70}
            height={50}
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          <div onClick={toggleMenu} className="cursor-pointer">
            <MenuSvg />
          </div>
        </div>
      </div>
      <div className="relative w-screen h-[90vh] md:h-screen">
        {/* Full-screen background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${corpImage1.src})` }}
        ></div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full 
             bg-gradient-to-l from-transparent to-[rgba(18,60,140,0.4)] 
             lg:bg-gradient-to-l lg:from-transparent lg:from-[52.21%] lg:to-[rgba(18,60,140,0.4)] lg:to-[60.75%]"
        ></div>

        {/* Main text content */}
        <div className="max-w-[600px] absolute left-[5%] bottom-[10%] sm:bottom-[15%] z-10">
          <TextReveal>
            <h1 className="font-satoshi lg:text-[64px] text-[40px] font-semibold text-white">
              CONTACT US
            </h1>
            <p className="lg:text-2xl text-base font-generalSans text-white">
              Every journey is unique and every experience matters.
            </p>
          </TextReveal>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 w-full h-[10vh]">
          <Marquee variant="corporateHero" />
        </div>
      </div>

      <AnimatePresence>
        {isOpenDesktop && (
          <Menu toggleMenu={toggleMenu} headerRect={headerRect} />
        )}
      </AnimatePresence>
      {/* Mobile Menu Wrapper */}
      <div className="w-full relative overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto flex justify-between">
        {/* Only shown on mobile */}
        <div className="lg:hidden w-full">
          {/* Fixed Mobile Header */}
          <div className="fixed z-20 top-[70px] w-full flex items-center justify-center">
            <div
              ref={headerRefMobile}
              className={`flex items-center justify-between px-4 py-3 rounded-full w-[300px] lg:w-[436px] bg-white shadow-md transition-opacity duration-300 ${
                isOpenMobile ? "invisible" : "visible"
              }`}
            >
              <Image src={Logo} alt="logo" width={70} height={50} />
              <div onClick={toggleMenuMobile} className="cursor-pointer">
                <MenuSvg />
              </div>
            </div>
          </div>

          {/* Menu Component Overlay */}
          <AnimatePresence>
            {isOpenMobile && (
              <div className="fixed z-30 top-[130px] left-0 w-full">
                {/* Give some margin to appear below the header */}
                <Menu
                  toggleMenu={toggleMenuMobile}
                  headerRect={headerRectMobile}
                />
              </div>
            )}
          </AnimatePresence>

          {/* Push content down to avoid overlap */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
