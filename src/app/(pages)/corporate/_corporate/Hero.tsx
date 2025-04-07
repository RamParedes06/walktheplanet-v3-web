"use client";
import MenuSvg from "@/assets/svg/MenuSvg";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Logo from "@/assets/images/Logo.png";
import { AnimatePresence } from "framer-motion";
import "../../../../styles/hero-horizontal-scroll.scss";
import Marquee from "../../_components/Marquee";
import TextReveal from "../../_components/TextReveal";
import Menu from "../../_components/Menu";

const Hero = () => {
	const corpImages = [
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcorporate-5.webp&version_id=null",
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcorporate-1.webp&version_id=null",
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcorporate-3.webp&version_id=null",
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcorporate-4.webp&version_id=null",
	];

	const [currentImage, setCurrentImage] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [direction, setDirection] = useState("next"); // 'next' or 'prev'

	// For fixing lint warning about useCallback
	const getNextIndex = useCallback((current: number) => (current === corpImages.length - 1 ? 0 : current + 1), [corpImages.length]);

	const getPrevIndex = (current: number) => (current === 0 ? corpImages.length - 1 : current - 1);

	useEffect(() => {
		const handleNextImage = () => {
			if (isAnimating) return;
			setDirection("next");
			setIsAnimating(true);

			setTimeout(() => {
				setCurrentImage(getNextIndex(currentImage));
				setIsAnimating(false);
			}, 500);
		};

		const interval = setInterval(() => {
			if (!isAnimating) {
				handleNextImage();
			}
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, [currentImage, isAnimating, getNextIndex]);

	// This function determines which class to apply to each image
	const getImageClasses = (index: number) => {
		// The visible image
		if (index === currentImage) {
			return isAnimating ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0";
		}

		// Next image (always enters from right)
		if (direction === "next" && index === getNextIndex(currentImage)) {
			return isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full";
		}

		// Previous image (we'll bring it from right too for consistency)
		if (direction === "prev" && index === getPrevIndex(currentImage)) {
			return isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full";
		}

		// All other images - keep them at the right side
		return "opacity-0 translate-x-full";
	};

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

	return (
		<>
			{/* Logo Menu  */}
			{/* Header - only visible when not animating */}
			<div className="fixed right-[5%] bottom-[20%] z-50 hidden sm:hidden md:hidden lg:block">
				{/* Header - only visible when menu is closed */}
				<div ref={headerRef} className={`bg-white flex items-center justify-between px-8 py-[18px] shadow-xl  rounded-full w-[300px] lg:w-[436px]  ${isOpenDesktop ? "invisible" : "visible"}`}>
					<Image src={Logo} alt="logo" width={70} height={50} />
					<div onClick={toggleMenu} className="cursor-pointer">
						<MenuSvg />
					</div>
				</div>
			</div>

			<AnimatePresence>{isOpenDesktop && <Menu toggleMenu={toggleMenu} headerRect={headerRect} />}</AnimatePresence>

			<div className="relative">
				<div className="relative w-screen h-screen overflow-hidden">
					{corpImages.map((image, index) => (
						<div
							key={index}
							className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500 ${getImageClasses(index)}`}
							style={{ backgroundImage: `url(${image})` }}
						></div>
					))}

					{/* Gradient overlay with responsive classes */}
					<div
						className="absolute inset-0 w-full h-full 
               bg-gradient-to-l from-transparent to-[rgba(18,60,140,0.4)] 
               lg:bg-gradient-to-l lg:from-transparent lg:from-[52.21%] lg:to-[rgba(18,60,140,0.4)] lg:to-[60.75%]"
					></div>

					<div className="max-w-[600px] absolute bottom-[15%] left-[5%]">
						<TextReveal>
							<h1 className="font-satoshi lg:text-[64px] text-[40px] font-semibold">CORPORATE AND BUSINESS</h1>
							<p className="lg:text-2xl text-base font-generalSans">
								{" "}
								<span className="text-[#7EE7FC] ">Seamless travel experience</span> tailor-made for your corporate and business goals.
							</p>
						</TextReveal>
					</div>

					<Marquee variant="corporateHero" />
				</div>

				{/* Mobile Menu  */}
				<div className=" w-full relative overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto flex justify-between">
					<div className="lg:hidden">
						{/* Logo Menu */}
						{/* Header - only visible when not animating */}
						<div className="fixed z-99 top-[70px]  w-full flex items-center justify-center ">
							{/* Header - only visible when menu is closed */}
							<div
								ref={headerRefMobile}
								className={`flex items-center justify-between px-4  py-3 rounded-full w-[300px] lg:w-[436px] bg-white ${isOpenMobile ? "invisible" : "visible"}`}
							>
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
		</>
	);
};

export default Hero;
