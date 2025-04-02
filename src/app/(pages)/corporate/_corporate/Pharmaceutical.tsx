import Image from "next/image";
import React from "react";
import TextReveal from "@/app/(pages)/_components/TextReveal";

interface PharmaceuticalProps {
	title?: string;
	description?: string;
}

const Pharmaceutical = ({ title, description }: PharmaceuticalProps = { title: "Title", description: "Description" }) => {
	return (
		<div className="flex relative mx-auto h-screen">
			<div className="bg-[linear-gradient(0deg,rgba(0,0,0,0)_64.52%,rgba(0,169,206,0.4)_100%)] w-full">
				<Image
					src={"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2FPharmaceutical.webp"}
					fill
					alt="image"
					className="object-cover"
				/>
			</div>

			<div className="absolute top-0 max-w-full min-h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0)_64.52%,rgba(0,169,206,0.4)_100%)] w-full"></div>
			<div className="absolute bottom-0 max-w-full min-h-[412px] bg-[linear-gradient(180deg,rgba(5,18,28,0)_44.33%,rgba(5,18,28,0.8)_74.87%)] w-full">
				<div className="flex flex-col relative bottom-0 mt-50 max-[490px]:p-5 max-[490px]:py-15">
					<TextReveal>
						<h2 className="font-satoshi font-bold text-2xl text-white text-center max-[490px]:text-start max-[490px]:text-[40px] sm:text-2xl lg:text-6xl md:text-4xl xl:text-7xl">
							{title}PHARMACEUTICAL
						</h2>
						<p className="font-generalSans italic text-center max-[490px]:text-start max-[490px]:text-[16px]  text-white text-base sm:text-base md:text-base lg:text-lg xl:text-2xl">
							{description}
							Science thrives on discovery, and we honor your dedication to progress. <br /> Conduct trials, connect globally, and share insights<b>— safe, exclusive travel is on us!</b>
						</p>
					</TextReveal>
				</div>
			</div>
		</div>
	);
};

export default Pharmaceutical;
