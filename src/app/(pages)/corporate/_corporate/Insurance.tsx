import React from "react";

import Image from "next/image";

import illustration from "@/assets/svg/BGIllustration.svg";
import TextReveal from "@/app/(pages)/_components/TextReveal";
import Carousel from "@/app/(pages)/_components/Carousel";

const images = [
	"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%201.webp&version_id=null",
	"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%202.webp&version_id=null",
	"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%203.webp&version_id=null",
	"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%204.webp&version_id=null",
	"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%205.webp&version_id=null",
	"http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%206.webp&version_id=null",
];

function Insurance() {
	return (
		<div className="h-screen bg-white">
			<div className="h-[40%]  max-[490px]:h-[30%] relative overflow-hidden flex items-center" style={{ backgroundImage: `url(${illustration})` }}>
				<div className="p-20 w-full max-[490px]:p-5">
					<Image src={illustration} alt="" width={1200} className="absolute -top-145 -right-110 " />
					<div className="flex flex-col gap-2 max-[490px]:p-0">
						<TextReveal>
							<p className="text-[64px] font-bold text-[#14476F] font-satoshi max-[490px]:text-[40px]">INSURANCE</p>
							<p className="text-black text-2xl  max-[490px]:text-[16px]">
								Your mission is to protect lives—ours is to
								<i>
									<strong> reward your dedication</strong>
								</i>
								.
								<br /> We ensure your team enjoys
								<i>
									<strong> top-tier incentives </strong>
								</i>
								while you
								<i>
									<strong> travel the world,</strong>
								</i>
								<br /> making a difference every step of the way.
							</p>
						</TextReveal>
					</div>
				</div>
			</div>
			<div className="h-[60%">
				<Carousel images={images} />
			</div>
		</div>
	);
}

export default Insurance;
