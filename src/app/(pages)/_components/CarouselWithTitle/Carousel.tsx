"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageItem {
	url: string | StaticImageData;
	title: string;
}

interface CarouselProps {
	images: ImageItem[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
	if (!Array.isArray(images) || images.length === 0) return null;

	return (
		<div className="relative w-full overflow-hidden group">
			<div className="flex animate-marquee group-hover:[animation-play-state:paused] min-w-max" style={{ animationDuration: "30s" }}>
				{[...images, ...images].map((image, index) => (
					<div key={index} className="flex-shrink-0 w-[600px] sm:w-[400px] h-[480px] max-[490px]:h-[400px]">
						<div className="relative w-full h-full">
							<Image src={image.url} alt={`carousel-image-${index}`} fill className="object-cover" loading="lazy" />
							<div className="absolute bottom-4 left-4  text-white text-3xl px-2 py-1 rounded-md">{image.title}</div>
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
				}
			`}</style>
		</div>
	);
};

export default Carousel;
