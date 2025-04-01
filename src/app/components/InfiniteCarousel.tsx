"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

const InfiniteCarousel = () => {
	const [isPaused, setIsPaused] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);

	const images = [
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fmanpower-original%2Fcabin-crew-air-hostess-working-airplane-airline-transportation-tourism-concept.webp&version_id=null",
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fmanpower-original%2Fconfident-asian-male-security-guard-safeguarding-careers-ensuring-outdoor-protection-urb.webp&version_id=null",
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fmanpower-original%2FCorporate%20%26%20Business%20Manpower%20Agencies%20and%20OFW%20Deployment%204.webp&version_id=null",
		"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fmanpower-original%2Fnurse-portrait-hospital.webp&version_id=null",
	];

	useEffect(() => {
		if (!carouselRef.current) return;

		const carousel = carouselRef.current;

		if (isPaused) {
			carousel.style.animationPlayState = "paused";
		} else {
			carousel.style.animationPlayState = "running";
		}
	}, [isPaused]);

	useEffect(() => {
		// Add animation keyframes dynamically
		const style = document.createElement("style");
		style.innerHTML = `
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% * ${images.length}));
          }
        }
      `;
		document.head.appendChild(style);

		// Apply initial animation
		if (carouselRef.current) {
			carouselRef.current.style.animation = "carousel 20s linear infinite";
		}

		return () => {
			document.head.removeChild(style);
		};
	}, [images.length]);

	return (
		<div className="relative w-screen h-screen">
			{/* Background Images Container */}

			{/* First Background Image */}

			{/* Second Background Image - Carousel Container */}

			{/* Left-to-right gradient that stays fixed in container on desktop */}

			{/* Invisible overlay for hover detection that covers everything */}
			<div className="absolute inset-0 z-30 pointer-events-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={{ background: "transparent" }}></div>

			{/* Carousel slider */}
			<div ref={carouselRef} className="flex h-full">
				{images.map((image, index) => (
					<div key={index} className="min-w-full h-full flex-shrink-0" style={{ width: "50%" }}>
						<Image width={500} height={500} alt={`Carousel Image ${index + 1}`} src={image} className="object-cover w-50 h-50" priority={index < 4} />
					</div>
				))}

				{/* Duplicate first few images forda infinite loop */}
				{images.slice(0, 4).map((image, index) => (
					<div key={`duplicate-${index}`} className="min-w-full h-50 flex-shrink-0" style={{ width: "100%" }}>
						<Image width={500} height={500} alt={`Carousel Image ${index + 4}`} src={image} className="object-cover w-full h-full" />
					</div>
				))}
			</div>
		</div>
	);
};
export default InfiniteCarousel;
