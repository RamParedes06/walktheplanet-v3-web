"use client";
import useIsMobile from "@/hooks/useIsMobile";
import React, { useState } from "react";

const bgDomestic = "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1745472642/Tilted_Container_iq7eje.png";
const bgInternational = "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1745476015/international_zrcmuz.png";

function ToursPackages() {
	const [isDomestic, setIsDomestic] = useState(true);
	const isMobile = useIsMobile();

	const backgroundImage = isDomestic ? bgDomestic : bgInternational;

	return (
		<div className="h-screen bg-black bg-cover bg-center bg-no-repeat relative transition-all ease-in-out" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
				<div className="flex flex-col gap-10 text-2xl font-generalSans z-1 items-center">
					<div className="flex flex-col gap-5">
						<p className="text-[64px] font-bold text-white font-satoshi uppercase text-center max-[490px]:text-[40px]">
							TOURS AND
							<br /> TRAVEL PACKAGES
						</p>
						<p className="text-center max-[490px]:text-[16px] px-1">
							{isMobile ? (
								<i>
									Get the keys to a complete and <span className="font-semibold">hassle-free experience</span> - unlock your dream escape <br /> with our all-in packages!
								</i>
							) : (
								<i>
									Get the keys to a complete and <span className="font-semibold">hassle-free experience</span> <br /> - unlock your dream escape with our all-in packages!
								</i>
							)}
						</p>
					</div>
					<div className="buttons flex gap-10 max-[490px]:flex-col max-[490px]:gap-5">
						<button
							onClick={() => setIsDomestic(true)}
							className={`px-[24px] py-4 rounded-2xl max-[490px]:rounded-full flex items-center justify-center text-[16px] font-semibold cursor-pointer ${
								isDomestic ? "bg-white text-[#00537F]" : "bg-[#FFFFFF33] border-2 backdrop-blur-sm border-white text-white"
							}`}
						>
							Domestic Packages
						</button>
						<button
							onClick={() => setIsDomestic(false)}
							className={`px-[24px] py-4 rounded-2xl max-[490px]:rounded-full  flex items-center text-[16px] font-semibold cursor-pointer ${
								!isDomestic ? "bg-white text-[#00537F]" : "bg-[#FFFFFF33] border-2 backdrop-blur-sm border-white text-white"
							}`}
						>
							International Packages
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToursPackages;
