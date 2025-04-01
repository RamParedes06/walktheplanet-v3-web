import React from "react";
import CircleSvg from "@/assets/svg/CicleSvg";

function ScrollText() {
	return (
		<div className="top-scroll h-14 flex items-center overflow-hidden border-t border-b border-white/40 bg-[#FFC000] backdrop-blur-[4.2px] relative">
			<div className=" wrap flex items-center gap-6 whitespace-nowrap animate-[scroll-left_20s_linear_infinite]">
				<span className="flex gap-6 items-center justify-center min-w-max">
					<CircleSvg width={10} height={10} />
					<p className="text-black">Travel smarter, save bigger! Get free upgrades on select packages!</p>
				</span>
				<span className="flex gap-6 items-center justify-center min-w-max">
					<CircleSvg width={10} height={10} />
					<p className="text-black">Book now and enjoy 10% off your next adventure</p>
				</span>
				<span className="flex gap-6 items-center justify-center min-w-max">
					<CircleSvg width={10} height={10} />
					<p className="text-black">Explore more, spend less! Get 60% off educational tours today!</p>
				</span>
				<span className="flex gap-6 items-center justify-center min-w-max">
					<CircleSvg width={10} height={10} />
					<p className="text-black">Travel smarter, save bigger! Get free upgrades on select packages!</p>
				</span>
				<span className="flex gap-6 items-center justify-center min-w-max">
					<CircleSvg width={10} height={10} />
					<p className="text-black">Book now and enjoy 10% off your next adventure</p>
				</span>
				<span className="flex gap-6 items-center justify-center min-w-max">
					<CircleSvg width={10} height={10} />
					<p className="text-black">Explore more, spend less! Get 60% off educational tours today!</p>
				</span>
				<span className="flex gap-6 items-center justify-center min-w-max">
					<CircleSvg width={10} height={10} />
					<p className="text-black">Travel smarter, save bigger! Get free upgrades on select packages!</p>
				</span>
			</div>
		</div>
	);
}

export default ScrollText;
