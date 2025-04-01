"use client";

import { useEffect, useRef, useState } from "react";
import background from "@/assets/images/travel_offers.webp";
import Image from "next/image";
import "@/styles/slider.scss";
import travelSlide1 from "@/assets/images/travel-package-slide.png";
import travelSlide2 from "@/assets/images/travel-package-slide2.png";
import travelSlide3 from "@/assets/images/travel-package-slide3.png";
// import ScrollVelocity from "./ScrollVelocity";

export default function ScrollSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const scrollDelta = useRef(0);
	const [scrollProgress, setScrollProgress] = useState(0);
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
						setScrollProgress(0);
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
			if ((currentProgress <= 0 && e.deltaY < 0) || (currentProgress >= 1 && e.deltaY > 0)) {
				document.body.style.overflow = "";
				return;
			}

			e.preventDefault();
			document.body.style.overflow = "hidden";

			scrollDelta.current += e.deltaY;
			scrollDelta.current = Math.max(0, Math.min(scrollDelta.current, totalScrollRequired));

			const progress = scrollDelta.current / totalScrollRequired;
			scrollProgressRef.current = progress;
			setScrollProgress(progress);

			// Introduce a delay before enabling scrolling
			if (progress >= 1) {
				setTimeout(() => {
					document.body.style.overflow = "";
				}, 600); // Delay to prevent skipping
			}
		};

		window.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("wheel", handleWheel);
		};
	}, [isActive]);

	//! Height of the Layers via px
	//! Base heights in vh for better responsiveness
	const baseHeight2 = 17.1; // 22vh instead of pixels
	const baseHeight3 = 11.4;
	const baseHeight4 = 5.7;

	// Convert vh to dynamic heights
	const height2 = `calc(${baseHeight2}vh + ${Math.min(scrollProgress * (68 / (1 / 3)), 68)}%)`;
	const height3 = `calc(${baseHeight3}vh + ${Math.min(Math.max((scrollProgress - 1 / 3) * (68 / (1 / 3)), 0), 68)}%)`;
	const height4 = `calc(${baseHeight4}vh + ${Math.min(Math.max((scrollProgress - 2 / 3) * (68 / (1 / 3)), 0), 68)}%)`;

	return (
		<>
			<div ref={sectionRef} className="h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }}>
				<div className="h-[30vh] flex items-center pointer-events-none">{/* <ScrollVelocity texts={["HAHHAHHAHHAhahah"]} className="pointer-events-none text-white" /> */}</div>
				<div className="h-[70vh]  relative">
					{/* Layer 1 - Static, Open by Default */}
					<div className="absolute left-0 right-0 bottom-0 bg-[#E5F1F6] transition-all duration-300 ease-out z-10" style={{ height: "100%" }}>
						<div className="max-w-[1280px] mx-auto mt-7">
							<p className="text-white text-2xl satoshi font-bold text-center md:text-left flex flex-col gap-4">TRAVEL PACKAGE ESSENTIALS</p>

							<div className="slider-container relative mt-4">
								<div className="image-slider">
									<div className="carousel-container">
										<div className="wrap">
											<Image src={travelSlide1} alt="" loading="lazy" />
											<Image src={travelSlide2} alt="" loading="lazy" />
											<Image src={travelSlide3} alt="" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="absolute top-0 left-0 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] md:max-w-[338px] flex flex-col gap-4">
									<p className="text-black text-3xl md:text-lg satoshi font-bold">PALAWAN TOUR</p>
									<p className="text-black text-2xl md:text-[16px] satoshi">
										The Philippines’ best-kept secrets.
										<br /> Pack your bags and uncover your adventure.
									</p>
									<button className="px-6 py-2 md:px-1 md:py-1 md:text-[14px] bg-[#006FA9] text-white rounded-full max-w-[228px] md:max-w-[108px]">Explore Now</button>
								</div>
							</div>
						</div>
					</div>

					{/* Layer 2 */}
					<div className="absolute left-0 right-0 bottom-0 bg-[#FE6000] transition-all duration-300 ease-out z-20" style={{ height: height2 }}>
						<div className="max-w-[1280px] mx-auto mt-7">
							<p className="text-white text-2xl satoshi font-bold text-center md:text-left flex flex-col gap-4">LOCAL DESTINATIONS</p>

							<div className="slider-container relative mt-4">
								<div className="image-slider">
									<div className="carousel-container">
										<div className="wrap">
											<Image src={travelSlide1} alt="" loading="lazy" />
											<Image src={travelSlide2} alt="" loading="lazy" />
											<Image src={travelSlide3} alt="" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 left-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] md:max-w-[338px] flex flex-col gap-4">
									<p className="text-black text-3xl md:text-lg satoshi font-bold">PALAWAN TOUR</p>
									<p className="text-black text-2xl md:text-[16px] satoshi">
										The Philippines’ best-kept secrets.
										<br /> Pack your bags and uncover your adventure.
									</p>
									<button className="px-6 py-2 md:px-1 md:py-1 md:text-[14px] bg-[#006FA9] text-white rounded-full max-w-[228px] md:max-w-[108px]">Explore Now</button>
								</div>
							</div>
						</div>
					</div>

					{/* Layer 3 */}
					<div className="absolute left-0 right-0 bottom-0 bg-[#333333] transition-all duration-300 ease-out z-30" style={{ height: height3 }}>
						<div className="max-w-[1280px] mx-auto mt-7">
							<p className="text-white text-2xl satoshi font-bold text-center md:text-left flex flex-col gap-4">INTERNATIONAL DESTINATIONS</p>

							<div className="slider-container relative mt-4">
								<div className="image-slider">
									<div className="carousel-container">
										<div className="wrap">
											<Image src={travelSlide1} alt="" loading="lazy" />
											<Image src={travelSlide2} alt="" loading="lazy" />
											<Image src={travelSlide3} alt="" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="absolute top-0 left-0 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] md:max-w-[338px] flex flex-col gap-4">
									<p className="text-black text-3xl md:text-lg satoshi font-bold">INTERNATIONAL DESTINATIONS</p>
									<p className="text-black text-2xl md:text-[16px] satoshi">
										The Philippines’ best-kept secrets.
										<br /> Pack your bags and uncover your adventure.
									</p>
									<button className="px-6 py-2 md:px-1 md:py-1 md:text-[14px] bg-[#006FA9] text-white rounded-full max-w-[228px] md:max-w-[108px]">Explore Now</button>
								</div>
							</div>
						</div>
					</div>

					{/* Layer 4 */}
					<div className="absolute left-0 right-0 bottom-0 bg-[#00537F] transition-all duration-300 ease-out z-40" style={{ height: height4 }}>
						<div className="max-w-[1280px] mx-auto mt-7">
							<p className="text-white text-2xl satoshi font-bold text-center md:text-left flex flex-col gap-4">TRAVEL DOCUMENTATION</p>

							<div className="slider-container relative mt-4">
								<div className="image-slider">
									<div className="carousel-container">
										<div className="wrap">
											<Image src={travelSlide1} alt="" loading="lazy" />
											<Image src={travelSlide2} alt="" loading="lazy" />
											<Image src={travelSlide3} alt="" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="absolute top-0 left-0 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] md:max-w-[338px] flex flex-col gap-4">
									<p className="text-black text-3xl md:text-lg satoshi font-bold">PALAWAN TOUR</p>
									<p className="text-black text-2xl md:text-[16px] satoshi">
										The Philippines’ best-kept secrets.
										<br /> Pack your bags and uncover your adventure.
									</p>
									<button className="px-6 py-2 md:px-1 md:py-1 md:text-[14px] bg-[#006FA9] text-white rounded-full max-w-[228px] md:max-w-[108px]">Explore Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
