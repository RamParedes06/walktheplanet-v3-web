import React from "react";
import eligibility from "@/assets/images/EligibilitySection.png";
import Image from "next/image";

function GridMotionMobile() {
	return (
		<div className="min-[481px]:hidden">
			<Image key="img-grid-1" src={eligibility} alt="Grid 1" width={428} height={926} />
		</div>
	);
}

export default GridMotionMobile;
