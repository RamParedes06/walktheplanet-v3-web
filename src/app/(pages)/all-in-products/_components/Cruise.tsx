import React from "react";

import TextReveal from "@/app/(pages)/_components/TextReveal";

const bg = "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1745461597/Cruise_eht5yv.webp";

function Cruise() {
	return (
		<div className="h-screen bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url(${bg})` }}>
			<div className="overlay flex absolute inset-0 top-0 bg-gradient-to-bl from-cyan-500/0 via-white/10 to-white">
				<div className="self-end  w-full">
					<div className="max-w-[1440px]  px-[80px] max-[490px]:px-[20px] py-[112px] max-[490px]:py-[80px] z-10">
						<div className="flex flex-col text-2xl max-[490px]:text-xl font-generalSans">
							<TextReveal>
								<p className="text-[64px] font-extrabold text-[#14476F] font-satoshi uppercase">CRUISES</p>
								<p className="flex flex-col gap-[14px] p-0 text-black">Experience the ultimate getaway at sea - luxury, adventure, and relaxation all in one</p>
							</TextReveal>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cruise;
