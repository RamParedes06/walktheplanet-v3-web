import React, { JSX } from "react";

import Image, { StaticImageData } from "next/image";

import illustration from "@/assets/svg/BGIllustration.svg";
import TextReveal from "@/app/(pages)/_components/TextReveal";
import Carousel from "./Carousel";

interface CarouselProps {
	title: string;
	description: JSX.Element;
	images: (string | StaticImageData)[];
}

function CarouselTitle({ title, description, images }: CarouselProps) {
	return (
		<div className="h-screen bg-white overflow-hidden">
			<div className="h-[50%] max-[490px]:h-[30%] relative overflow-hidden flex items-center" style={{ backgroundImage: `url(${illustration})` }}>
				<div className="p-20 w-full max-[490px]:p-0 ">
					<Image src={illustration} alt="" width={1200} className="absolute -top-145 -right-110 " />
					<div className="flex flex-col gap-2 max-[490px]:px-5 max-[490px]:gap-5">
						<TextReveal>
							<p className="text-[64px] max-[490px]:text-[40px] font-extrabold text-[#14476F] font-satoshi  uppercase">{title}</p>
							<div className="text-black text-2xl max-[490px]:text-[16px] ">{description}</div>
						</TextReveal>
					</div>
				</div>
			</div>
			<div className="h-[60%]">
				<Carousel images={images} />
			</div>
		</div>
	);
}

export default CarouselTitle;
