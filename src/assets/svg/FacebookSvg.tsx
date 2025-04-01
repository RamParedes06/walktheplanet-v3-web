import React from "react";
import { SvgProps } from "./SvgProps";

const FacebookSvg = ({ width = 15, height = 15 }: SvgProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group transition-all duration-200">
			{/* Outer Circle - Turns White on Hover */}
			<circle cx="12" cy="12" r="11.5" className="transition-all duration-200 stroke-white stroke-opacity-85 group-hover:fill-white" />

			{/* Facebook "f" - Turns #006FA9 on Hover */}
			<path
				d="M12.932 17.9981V12.5341H14.7753L15.0493 10.3948H12.932V9.03211C12.932 8.41478 13.104 7.99211 13.99 7.99211H15.1127V6.08478C14.5664 6.02624 14.0174 5.99797 13.468 6.00011C11.8387 6.00011 10.72 6.99478 10.72 8.82078V10.3908H8.88867V12.5301H10.724V17.9981H12.932Z"
				className="transition-all duration-200 fill-white group-hover:fill-[#006FA9]"
			/>
		</svg>
	);
};

export default FacebookSvg;
