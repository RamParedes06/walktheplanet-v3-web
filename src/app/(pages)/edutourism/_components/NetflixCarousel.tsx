"use client";
import React, { useEffect, useState, useRef } from "react";
import { netflixCarousel } from "@/library/EduNetflixCarousel";

function NetflixCarousel() {
	const totalSlides = netflixCarousel.length;
	const durationPerSlide = 5000; // 5 seconds per slide

	const [progress, setProgress] = useState(0); // 0-100%
	const progressRef = useRef(0);
	const startTimeRef = useRef<number | null>(null);
	// const animationFrameRef = useRef<number | null>(null);

	const progressStep = 100 / totalSlides;
	const activeIndex = Math.floor(progress / progressStep) % totalSlides;

	// Ensure that `current` is properly defined before rendering
	const current = netflixCarousel[activeIndex] || { image: "", title: "", desc: "" };

	// Smooth animation using requestAnimationFrame
	useEffect(() => {
		startTimeRef.current = performance.now(); // <-- START automatically!

		const interval = setInterval(() => {
			const now = performance.now();
			if (startTimeRef.current !== null) {
				const elapsed = now - startTimeRef.current;
				const newProgress = (elapsed / (durationPerSlide * totalSlides)) * 100;

				if (newProgress >= 100) {
					startTimeRef.current = now;
					progressRef.current = 0;
					setProgress(0);
				} else {
					progressRef.current = newProgress;
					setProgress(newProgress);
				}
			}
		}, 100); // Update every 100ms

		return () => clearInterval(interval);
	}, [totalSlides]);

	// Manual control updates progress & resets animation start time
	const jumpToSlide = (index: number) => {
		const newProgress = index * progressStep;
		progressRef.current = newProgress;
		setProgress(newProgress);
		startTimeRef.current = performance.now() - (newProgress / 100) * durationPerSlide * totalSlides;
	};

	const handleNext = () => {
		const nextIndex = (activeIndex + 1) % totalSlides;
		jumpToSlide(nextIndex);
	};

	const handlePrev = () => {
		const prevIndex = (activeIndex - 1 + totalSlides) % totalSlides;
		jumpToSlide(prevIndex);
	};

	// Handle image click to jump to the clicked slide
	const handleImageClick = (index: number) => {
		jumpToSlide(index);
	};

	return (
		<div className="relative h-screen flex flex-col justify-center bg-black overflow-hidden">
			{/* Fade transition background image layer */}
			<div
				key={activeIndex} // Important for forcing re-render
				className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 opacity-0 animate-fadeIn z-0"
				style={{ backgroundImage: `url(${current.image})` }}
			/>
			<div className="absolute inset-0 top-0 bg-gradient-to-b z-1" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0.04%, rgba(0, 0, 0, 0.5) 66.87%)" }}>
				<div className="title-container flex flex-col gap-3 items-start justify-end p-20 h-[60vh]">
					<p className="title uppercase font-generalSans text-[64px] font-medium">{current.title}</p>
					<p className="description font-generalSans text-[20px] max-w-3xl">{current.desc}</p>
				</div>

				<div className="progressbar px-5">
					<div className="text-white flex gap-10 justify-end px-20">
						<span onClick={handlePrev} className="p-2.5 text-[16px] cursor-pointer ">
							Prev
						</span>
						<span onClick={handleNext} className="p-2.5 text-[16px] cursor-pointer ">
							Next
						</span>
					</div>

					<div className="progress mt-4 mb-4 px-20">
						<div className="h-1 bg-white/30 w-full relative overflow-hidden rounded-full">
							<div className="absolute top-0 left-0 h-1 bg-white transition-all" style={{ width: `${progress}%` }} />
						</div>
					</div>
				</div>

				<div className="carousel h-[30vh] px-20  flex gap-5 items-center justify-center overflow-x-auto max-[490px]:hidden">
					{netflixCarousel.map((item, index) => (
						<div key={index} className="relative w-[555px] h-[318px] max-[2120px]:w-[655px] max-[2120px]:h-[240px] rounded-xl p-[1px] backdrop-blur-sm border border-white/30">
							<div
								onClick={() => handleImageClick(index)} // Handle click to jump to the selected slide
								className={`w-full h-full bg-cover bg-center bg-no-repeat rounded-xl p-5 cursor-pointer flex items-end transition-all duration-500 ${
									activeIndex === index ? "hover:opacity-100 scale-105" : "opacity-60 hover:opacity-100"
								}`}
								style={{ backgroundImage: `url(${item.image})` }}
							>
								<span
									className={`px-3 py-1.5 text-[16px] uppercase rounded-full text-black transition-all duration-300 ${
										activeIndex === index ? "bg-white" : "bg-white/20 backdrop-blur-sm text-white"
									}`}
								>
									{item.title}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default NetflixCarousel;
