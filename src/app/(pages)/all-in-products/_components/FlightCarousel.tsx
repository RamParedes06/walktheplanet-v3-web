"use client";
import React, { useEffect, useRef, useState } from "react";
import { FlightImagesDomestic, FlightImagesInternational } from "@/library/FlightCarousel";
import Image from "next/image";

const CAROUSEL_INTERVAL = 3000;

function FlightCarousel() {
	const [isDomestic, setIsDomestic] = useState(true);
	const flightImages = isDomestic ? FlightImagesDomestic : FlightImagesInternational;
	const TOTAL_IMAGES = flightImages.length;

	const [progress, setProgress] = useState(0);
	const progressRef = useRef(0);
	const startTimeRef = useRef<number | null>(null);
	const duration = CAROUSEL_INTERVAL * TOTAL_IMAGES;

	const progressStep = 100 / TOTAL_IMAGES;
	const activeIndex = Math.floor(progress / progressStep) % TOTAL_IMAGES;

	// ✅ Real-time smooth progress animation
	useEffect(() => {
		let animationFrameId: number;
		startTimeRef.current = performance.now();

		const animate = () => {
			const now = performance.now();
			if (startTimeRef.current !== null) {
				const elapsed = now - startTimeRef.current;
				let newProgress = (elapsed / duration) * 100;

				if (newProgress >= 100) {
					startTimeRef.current = now;
					newProgress = 0;
				}

				if (Math.abs(progressRef.current - newProgress) > 0.1) {
					progressRef.current = newProgress;
					setProgress(newProgress);
				}
			}
			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrameId);
	}, [duration, isDomestic]);

	const jumpToSlide = (index: number) => {
		const newProgress = index * progressStep;
		progressRef.current = newProgress;
		setProgress(newProgress);
		startTimeRef.current = performance.now() - (newProgress / 100) * duration;
	};

	const getImage = (offset = 0) => {
		const index = (activeIndex + offset + TOTAL_IMAGES) % TOTAL_IMAGES;
		return flightImages[index];
	};

	return (
		<div className="relative h-screen w-full flex flex-col justify-center items-center text-white bg-black overflow-hidden">
			{flightImages.map((item, index) => (
				<div
					key={index}
					className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
					style={{ backgroundImage: `url(${item.image})`, zIndex: 0 }}
				/>
			))}

			<div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(5,18,28,0)_44.33%,_rgba(5,18,28,0.8)_74.87%),_linear-gradient(180deg,_rgba(0,0,0,0)_66.26%,_rgba(16,62,28,0.2)_100%)] z-10" />

			<div className="relative z-20 p-10 rounded-xl flex flex-col gap-50 items-center w-full max-w-[1000px]">
				<div className="text-center flex flex-col gap-2">
					<h1 className="uppercase text-[64px] font-bold font-satoshi max-[490px]:text-[40px]">Flights</h1>
					<p className="italic text-2xl max-[490px]:text-[16px]">
						Book and fly <span className="font-medium">anytime, anywhere!</span>
					</p>
					<p className="italic text-2xl max-[490px]:text-[16px]">
						We’ve got <span className="font-medium">great deals</span> for your next adventure!
					</p>
				</div>

				<div className="carousel-container flex flex-col items-center gap-30 max-[490px]:gap-5">
					{/* button when mobile */}
					<div className="flex gap-5 text-lg font-medium min-[491px]:hidden">
						<span
							className={`cursor-pointer ${isDomestic ? "text-white" : "text-white/60 hover:text-white"} pb-1`}
							onClick={() => {
								setIsDomestic(true);
								setProgress(0);
								startTimeRef.current = performance.now();
							}}
						>
							Domestic Flights
						</span>
						<span
							className={`cursor-pointer ${!isDomestic ? "text-white" : "text-white/60 hover:text-white"}`}
							onClick={() => {
								setIsDomestic(false);
								setProgress(0);
								startTimeRef.current = performance.now();
							}}
						>
							International Flights
						</span>
					</div>
					<div className="relative flex items-end justify-center gap-6 w-full p-1">
						{[-2, -1].map((offset) => {
							const { image, title } = getImage(offset);
							const index = (activeIndex + offset + TOTAL_IMAGES) % TOTAL_IMAGES;
							return (
								<div key={title} className="flex flex-col items-center gap-2">
									<div
										key={title}
										className="w-[132px] h-[100px] ring-2 ring-white rounded-xl bg-cover bg-center opacity-60 transition-all duration-500 cursor-pointer"
										style={{ backgroundImage: `url(${image})` }}
										title={title}
										onClick={() => jumpToSlide(index)}
									/>
									<div>{title}</div>
								</div>
							);
						})}

						<div className="flex flex-col items-center">
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
							<div>{flightImages[activeIndex].title}</div>
						</div>

						{[1, 2].map((offset) => {
							const { image, title } = getImage(offset);
							const index = (activeIndex + offset + TOTAL_IMAGES) % TOTAL_IMAGES;
							return (
								<div key={title} className="flex flex-col items-center gap-2">
									<div
										key={title}
										className="w-[132px] h-[100px] ring-2 ring-white rounded-xl bg-cover bg-center opacity-60 transition-all duration-500 cursor-pointer"
										style={{ backgroundImage: `url(${image})` }}
										title={title}
										onClick={() => jumpToSlide(index)}
									/>
									<div>{title}</div>
								</div>
							);
						})}
					</div>

					<div className=" flex flex-col items-center gap-10 w-full max-w-[824px] max-[490px]:pt-20">
						<div className="w-full max-[490px]:max-w-[400px] h-1 bg-white/20 rounded-full overflow-hidden">
							<div className="h-full bg-white" style={{ width: `${progress}%` }}></div>
						</div>

						{/* button when desktop */}
						<div className="flex gap-5 text-lg font-medium max-[490px]:hidden">
							<span
								className={`cursor-pointer ${isDomestic ? "text-white" : "text-white/60 hover:text-white"} pb-1`}
								onClick={() => {
									setIsDomestic(true);
									setProgress(0);
									startTimeRef.current = performance.now();
								}}
							>
								Domestic Flights
							</span>
							<span
								className={`cursor-pointer ${!isDomestic ? "text-white" : "text-white/60 hover:text-white"}`}
								onClick={() => {
									setIsDomestic(false);
									setProgress(0);
									startTimeRef.current = performance.now();
								}}
							>
								International Flights
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlightCarousel;
