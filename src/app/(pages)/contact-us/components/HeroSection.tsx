"use client";
import MenuSvg from "@/assets/svg/MenuSvg";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/images/Logo.png";

import { AnimatePresence } from "framer-motion";
import "@/styles/hero-horizontal-scroll.scss";

import corpImage1 from "@/assets/images/contact/heroBanner.webp";
import TextReveal from "../../_components/TextReveal";
import Marquee from "../../_components/Marquee";
import Menu from "../../_components/Menu";
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

	console.log(isOpenDesktop);
	return (
		<div className="relative">
			{/* Logo Menu  */}
			{/* Header - only visible when not animating */}
			<div className="absolute right-[5%] bottom-[20%] z-50 hidden sm:hidden md:hidden lg:block overflow-hidden">
				{/* Header - only visible when menu is closed */}
				<div ref={headerRef} className={`bg-white flex items-center justify-between px-4  py-3 rounded-full w-[300px] lg:w-[436px]  ${isOpenDesktop ? "invisible" : "visible"}`}>
					<Image src={Logo} alt="logo" width={70} height={50} />
					<div onClick={toggleMenu} className="cursor-pointer">
						<MenuSvg />
					</div>
				</div>
			</div>
			<div className="relative w-screen h-screen">
				{/* Background image */}
				{/* <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${corpImage1})` }}
        ></div> */}

				<div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${corpImage1.src})` }}></div>

				{/* Gradient overlay with responsive classes */}
				<div
					className="absolute inset-0 w-full h-full 
               bg-gradient-to-l from-transparent to-[rgba(18,60,140,0.4)] 
               lg:bg-gradient-to-l lg:from-transparent lg:from-[52.21%] lg:to-[rgba(18,60,140,0.4)] lg:to-[60.75%]"
				></div>

				<div className="max-w-[600px] absolute bottom-[15%] left-[5%]">
					<TextReveal>
						<h1 className="font-satoshi lg:text-[64px] text-[40px] font-semibold text-white">CONTACT US</h1>
						<p className="lg:text-2xl text-base font-generalSans text-white">Every journey is unique and every experience matters.</p>
					</TextReveal>
				</div>

				<Marquee variant="corporateHero" />
			</div>

			<AnimatePresence>{isOpenDesktop && <Menu toggleMenu={toggleMenu} headerRect={headerRect} />}</AnimatePresence>

			{/* Mobile Menu  */}
			<div className=" w-full relative overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto flex justify-between">
				<div className="lg:hidden">
					{/* Logo Menu */}
					{/* Header - only visible when not animating */}
					<div className="fixed z-10 top-[70px]  w-full flex items-center justify-center ">
						{/* Header - only visible when menu is closed */}
						<div ref={headerRefMobile} className={` flex items-center justify-between px-4  py-3 rounded-full w-[300px] lg:w-[436px] bg-white ${isOpenMobile ? "invisible" : "visible"}`}>
							<Image src={Logo} alt="logo" width={70} height={50} />
							<div onClick={toggleMenuMobile} className="cursor-pointer">
								<MenuSvg />
								{/* </div> */}
							</div>
						</div>
					</div>
					{/* Menu Mobile View*/}
					<AnimatePresence>{isOpenMobile && <Menu toggleMenu={toggleMenuMobile} headerRect={headerRectMobile} />}</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Hero;
