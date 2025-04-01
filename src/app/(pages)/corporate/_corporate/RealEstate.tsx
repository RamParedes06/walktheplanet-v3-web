import React from "react";
import Image from "next/image";
import TextReveal from "@/app/(pages)/_components/TextReveal";
function RealEstate() {
	return (
		<div className="relative w-full h-screen  mx-auto">
			<Image
				src="http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2FRealEstate.webp&version_id=null"
				alt="real estate"
				layout="fill"
				objectFit="cover"
				className="object-cover"
			/>

			<div
				className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 lg:pb-20 text-left w-full z-10 px-4 "
				style={{
					background: "linear-gradient(180deg, rgba(5, 18, 28, 0) 44.33%, rgba(5, 18, 28, 0.8) 74.87%)",
				}}
			>
				<TextReveal>
					<div className="flex flex-col items-center max-w-[1440px] mx-auto">
						<h1 className="text-white w-full text-[40px]  lg:text-4xl xl:text-[64px] font-semibold mb-4  text-left lg:text-center">REAL ESTATE</h1>
						<p className="text-white italic text-2xl max-[490px]:text-[16px] lg:text-2xl mb-2  sm:max-w-[700px] text-left">
							Grow your network and explore markets <span className="font-semibold">anywhere in the world!</span>
						</p>
						<p className="text-white italic text-2xl max-[490px]:text-[16px] lg:text-2xl mb-2 text-left ">
							Visit properties, attend industry conferences - <span className="font-semibold">we&apos;ll take care of your hassle-free travel.</span>
						</p>
					</div>
				</TextReveal>
			</div>
		</div>
	);
}
export default RealEstate;
