"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
	images: (string | StaticImageData)[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
	if (!Array.isArray(images) || images.length === 0) return null;

	return (
		<div className="relative w-full overflow-hidden group">
			<div
				className="flex animate-marquee group-hover:[animation-play-state:paused] min-w-max"
				style={{ animationDuration: "30s" }} // slower speed
			>
				{[...images, ...images].map((image, index) => (
					<div key={index} className="flex-shrink-0 w-[400px] h-[400px] scroll-snap-align-start">
						<Image src={image} alt={`carousel-image-${index}`} width={400} height={400} className=" object-cover w-full h-full" loading="lazy" />
					</div>
				))}
			</div>

			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-marquee {
					animation: marquee linear infinite;
				}
			`}</style>
		</div>
	);
};

export default Carousel;
