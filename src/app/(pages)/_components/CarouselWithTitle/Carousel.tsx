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
			<div className="flex animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: "30s" }}>
				{[...images, ...images].map((image, index) => (
					<div key={index} className="flex-shrink-0 w-1/3 h-[500px]">
						<div className="relative w-full h-full">
							<Image src={image} alt={`carousel-image-${index}`} fill className="object-cover" loading="lazy" />
						</div>
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
					width: 200%; /* because we double the images */
				}
			`}</style>
		</div>
	);
};

export default Carousel;
