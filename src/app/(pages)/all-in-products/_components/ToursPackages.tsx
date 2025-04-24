import React from "react";

const bg = "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1745472642/Tilted_Container_iq7eje.png";

function ToursPackages() {
	return (
		<div className="h-screen bg-black bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${bg})` }}>
			<div className="absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
				<div className="flex flex-col gap-10 text-2xl font-generalSans z-1 items-center">
					<div className="flex flex-col gap-5">
						<p className="text-[64px] font-extrabold text-white font-satoshi uppercase text-center">
							TOURS AND
							<br /> TRAVEL PACKAGES
						</p>
						<p className="text-center">
							<i>
								Get the keys to a complete and <span className="font-semibold">hassle-free experience</span> <br /> - unlock your dream escape with our-all-in packages!
							</i>
						</p>
					</div>
					<div className="buttons flex gap-10">
						<span className="px-[24px] py-4 bg-white text-[#00537F] text-[16px] font-semibold rounded-2xl flex items-center">Domestic Packages</span>
						<span className="px-[24px] py-4 bg-[#FFFFFF33] border-2 border-white text-white text-[16px] font-semibold rounded-2xl flex items-center">International Packages</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToursPackages;
