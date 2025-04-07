import React from "react";
import bgsection from "@/assets/images/INFRASTRUCTURE.png";
import TextReveal from "@/app/(pages)/_components/TextReveal";

function Infrastructure() {
	return (
		<div className="h-screen bg-red-200 bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url(${bgsection.src})` }}>
			<div className="overlay flex absolute inset-0 top-0 bg-gradient-to-b from-transparent via-[rgba(5,18,28,0.4)] to-[rgba(5,18,28,0.8)] ">
				<div className="self-end  w-full">
					<div className="max-w-[1440px] mx-auto px-[80px]  max-[490px]:px-5 py-[112px]  max-[490px]:py-15 z-10">
						<TextReveal>
							<p className="font-bold text-[64px] text-white font-satoshi text-center  max-[490px]:text-[40px]  max-[490px]:text-start">INFRASTRUCTURE</p>
							<div className="text-white flex flex-col items-center gap-2 text-2xl  max-[490px]:text-[16px]  max-[490px]:items-start">
								<i>As you drive innovation, we ensure your journey is just as progressive. </i>
								<i>From feasibility studies to onsite supervision our all-in travel services </i>
								<i>provide hassle-free booking wherever the location is.</i>
							</div>
						</TextReveal>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Infrastructure;
