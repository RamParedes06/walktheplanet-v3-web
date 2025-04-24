"use client";
import React, { useEffect, useState } from "react";
import { FlightImagesDomestic, FlightImagesInternational } from "@/library/FlightCarousel";
import Image from "next/image";

const CAROUSEL_INTERVAL = 3000;

function FlightCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const [isDomestic, setIsDomestic] = useState(true); // New state to track the active tab

	const flightImages = isDomestic ? FlightImagesDomestic : FlightImagesInternational; // Choose images based on the active tab
	const TOTAL_IMAGES = flightImages.length;
	const TOTAL_DURATION = CAROUSEL_INTERVAL * TOTAL_IMAGES;

	// Handle image cycling every 3s
	useEffect(() => {
		const imageInterval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % TOTAL_IMAGES);
		}, CAROUSEL_INTERVAL);

		return () => clearInterval(imageInterval);
		// eslint-disable-next-line
	}, [isDomestic]); // Restart interval when the active tab changes

	// Handle progress bar
	useEffect(() => {
		let start = Date.now();

		const updateProgress = () => {
			const elapsed = Date.now() - start;
			const newProgress = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
			setProgress(newProgress);

			if (newProgress >= 100) {
				// Instantly reset and restart
				setTimeout(() => {
					start = Date.now();
					setProgress(0);
					requestAnimationFrame(updateProgress);
				}, 50);
			} else {
				requestAnimationFrame(updateProgress);
			}
		};

		requestAnimationFrame(updateProgress);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return () => cancelAnimationFrame(updateProgress as any);
		// eslint-disable-next-line
	}, [isDomestic]);

	const getImage = (offset = 0) => {
		const index = (activeIndex + offset + TOTAL_IMAGES) % TOTAL_IMAGES;
		return flightImages[index];
	};

	return (
		<div
			className="relative h-screen w-full flex flex-col justify-center items-center text-white bg-cover bg-center"
			style={{
				backgroundImage: `url(${flightImages[activeIndex].image})`,
				transition: "background-image 1s ease-in-out",
			}}
		>
			<div className="absolute bg-[linear-gradient(180deg,_rgba(5,18,28,0)_44.33%,_rgba(5,18,28,0.8)_74.87%),_linear-gradient(180deg,_rgba(0,0,0,0)_66.26%,_rgba(16,62,28,0.2)_100%)]">
				<div className=" p-10 rounded-xl flex flex-col gap-50 items-center w-full max-w-[1000px]">
					{/* Title */}
					<div className="text-center flex flex-col gap-2">
						<h1 className="uppercase text-[64px] font-bold font-satoshi">Flights</h1>
						<p className="italic text-2xl">
							Book and fly <span className="font-medium">anytime, anywhere!</span>
						</p>
						<p className="italic text-2xl">
							We’ve got <span className="font-medium">great deals</span> for your next adventure!
						</p>
					</div>
					<div className="carousel-container flex flex-col items-center gap-30">
						{/* Carousel */}
						<div className="relative flex items-end justify-center gap-6 w-full">
							{/* Side images */}
							{[-2, -1].map((offset) => {
								const { image, title } = getImage(offset);
								return (
									<div
										key={title}
										className="w-[132px] h-[100px] ring-2 ring-white rounded-xl bg-cover bg-center opacity-60 transition-all duration-500"
										style={{ backgroundImage: `url(${image})` }}
										title={title}
									/>
								);
							})}

							{/* Center image */}
							<div className="w-[180px] h-[120px] ring-2 ring-white rounded-xl overflow-hidden flex items-center justify-center">
								<Image
									src={flightImages[activeIndex].image}
									alt={flightImages[activeIndex].title}
									className="w-full h-full object-cover transition-opacity duration-500"
									width={180}
									height={120}
									loading="lazy"
								/>
							</div>

							{/* Side images */}
							{[1, 2].map((offset) => {
								const { image, title } = getImage(offset);
								return (
									<div
										key={title}
										className="w-[132px] h-[100px] ring-2 ring-white rounded-xl bg-cover bg-center opacity-60 transition-all duration-500"
										style={{ backgroundImage: `url(${image})` }}
										title={title}
									/>
								);
							})}
						</div>

						<div className="progress-button flex flex-col items-center gap-10 w-full">
							{/* Progress Bar */}
							<div className="w-full max-w-[824px] h-1 bg-white/20 rounded-full overflow-hidden  ">
								<div
									className="h-full bg-white transition-all"
									style={{
										width: `${progress}%`,
										transition: progress === 0 ? "none" : "width 100ms linear",
									}}
								></div>
							</div>

							{/* Tabs */}
							<div className="flex gap-5 text-lg font-medium">
								<span
									className={`cursor-pointer  ${isDomestic ? "border-0" : "text-white/60 hover:text-white"} pb-1`}
									onClick={() => setIsDomestic(true)} // Switch to domestic flights
								>
									Domestic Flights
								</span>
								<span
									className={`cursor-pointer ${!isDomestic ? "border-0" : "text-white/60 hover:text-white"}`}
									onClick={() => setIsDomestic(false)} // Switch to international flights
								>
									International Flights
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlightCarousel;
