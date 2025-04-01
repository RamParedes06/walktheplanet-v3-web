import React from "react";
import { SvgProps } from "./SvgProps";

const LinkedInSvg = ({ width = 15, height = 15 }: SvgProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group transition-all duration-200">
			{/* Outer Circle - Turns White on Hover */}
			<circle cx="12" cy="12" r="11.5" stroke="white" strokeOpacity="0.85" className="transition-all duration-200 group-hover:fill-white" />

			{/* LinkedIn Icon - Turns #006FA9 on Hover */}
			<path
				d="M9.05208 7.91823C9.05193 8.22765 8.92886 8.52433 8.70996 8.74301C8.49106 8.9617 8.19425 9.08447 7.88483 9.08431C7.57541 9.08416 7.27873 8.96109 7.06005 8.74219C6.84136 8.52329 6.7186 8.22648 6.71875 7.91706C6.7189 7.60764 6.84197 7.31096 7.06087 7.09227C7.27977 6.87359 7.57658 6.75082 7.886 6.75098C8.19542 6.75113 8.4921 6.8742 8.71079 7.0931C8.92947 7.312 9.05224 7.60881 9.05208 7.91823ZM9.08708 9.94823H6.75375V17.2516H9.08708V9.94823ZM12.7737 9.94823H10.4521V17.2516H12.7504V13.4191C12.7504 11.2841 15.5329 11.0857 15.5329 13.4191V17.2516H17.8371V12.6257C17.8371 9.02656 13.7188 9.16073 12.7504 10.9282L12.7737 9.94823Z"
				fill="white"
				className="transition-all duration-200 group-hover:fill-[#006FA9]"
			/>
		</svg>
	);
};

export default LinkedInSvg;
