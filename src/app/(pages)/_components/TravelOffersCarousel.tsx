import React from "react";

interface TravelCarouselProps {
	images: string[];
	width?: number;
	height?: number;
	className?: string;
}

const TravelCarousel: React.FC<TravelCarouselProps> = ({ images = [], width = 500, height = 300, className = "" }) => {
	if (!Array.isArray(images) || images.length === 0) return null;

	return (
		<div className="relative w-full overflow-hidden ${className}">
			<div className="flex animate-marquee">
				{[...images, ...images].map((image, index) => (
					<div
						key={index}
						className={`flex-shrink-0 bg-cover bg-center ${className}`}
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
