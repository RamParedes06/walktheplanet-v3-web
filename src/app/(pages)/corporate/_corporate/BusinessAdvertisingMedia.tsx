import React from "react";
import Image from "next/image";
import TextReveal from "@/app/(pages)/_components/TextReveal";

// const bg_section = "http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fimage1.webp";

const BusinessAdvertisingMedia = () => {
	return (
		<div
			className="flex justify-center mx-auto 
        sm:flex-row flex-col h-screen relative
      "
		>
			<div className="w-full h-full relative">
				<Image
					src={"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fimage1.webp"}
					fill
					alt="image1"
					className="bg-black object-cover"
				/>
			</div>

			<div className="w-full h-full relative">
				<Image
					src={"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fimage2.webp&version_id=null"}
					fill
					alt="image2"
					className="bg-black object-cover"
				/>
			</div>

			<div className="w-full h-full relative">
				<Image
					src={"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fimage3.webp&version_id=null"}
					fill
					alt="image3"
					className="bg-black object-cover"
				/>
			</div>

			<div className="flex flex-col justify-center mx-auto absolute  h-[25%] max-[490px]:h-[30%]   bottom-0 bg-gradient-to-b from-[rgba(5,18,28,0)] via-[rgba(5,18,28,0.8)] to-[rgba(0,169,206,0.8)] w-full">
				<div className="flex justify-center flex-col mx-auto max-w-[1440px] max-[490px]:p-5 ">
					<TextReveal>
						<h2 className="font-satoshi font-bold text-center max-[490px]:text-[40px] max-[490px]:text-start text-[64px] sm:text-2xl md:text-4xl lg:6xl xl:text-[64px] text-white">
							ADVERTISING AND MEDIA
						</h2>
						<p className="font-generalSans sm:text-base lg:text-2xl xl:text-xl italic text-center max-[490px]:text-start text-white">
							You craft powerful and authentic marketing campaigns
							<span className="font-medium">—we deliver effortless travel arrangements.</span> <br /> Let’s make an impact together!
						</p>
					</TextReveal>
				</div>
			</div>
		</div>
	);
};

export default BusinessAdvertisingMedia;
