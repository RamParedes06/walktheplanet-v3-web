import React from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
	images: (string | StaticImageData)[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
	if (!Array.isArray(images) || images.length === 0) return null;

	return (
		<div className="relative w-full overflow-hidden">
			<div className="flex animate-marquee ">
				{[...images, ...images].map((image, index) => (
					<div key={index} className="flex-shrink-0">
						<Image src={image} alt={`carousel-image-${index}`} loading="lazy" width={400} height={400} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
