import React from "react";

interface TravelCarouselProps {
	images: string[];
	width?: number;
	height?: number;
}

const TravelCarousel: React.FC<TravelCarouselProps> = ({ images = [], width = 300, height = 300 }) => {
	if (!Array.isArray(images) || images.length === 0) return null;

	return (
		<div className="relative w-full overflow-hidden">
			<div className="flex animate-marquee">
				{[...images, ...images].map((image, index) => (
					<div
						key={index}
						className="flex-shrink-0 bg-cover bg-center"
						style={{
							backgroundImage: `url(${image})`,
							width: `${width}px`,
							height: `${height}px`,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default TravelCarousel;
