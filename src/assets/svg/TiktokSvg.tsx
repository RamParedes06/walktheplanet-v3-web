import React from "react";
import { SvgProps } from "./SvgProps";

const TiktokSvg = ({ width = 15, height = 15 }: SvgProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group transition-all duration-200">
			{/* Outer Circle - Turns White on Hover */}
			<circle cx="12" cy="12" r="11.5" stroke="white" strokeOpacity="0.85" className="transition-all duration-200 group-hover:fill-white" />

			{/* TikTok Icon - Turns #006FA9 on Hover */}
			<path
				d="M15.0648 7.88C14.6092 7.35968 14.3581 6.6916 14.3582 6H12.2982V14.2667C12.2826 14.7141 12.0938 15.1381 11.7717 15.449C11.4495 15.7599 11.0192 15.9336 10.5715 15.9333C9.62482 15.9333 8.83815 15.16 8.83815 14.2C8.83815 13.0533 9.94482 12.1933 11.0848 12.5467V10.44C8.78482 10.1333 6.77148 11.92 6.77148 14.2C6.77148 16.42 8.61148 18 10.5648 18C12.6582 18 14.3582 16.3 14.3582 14.2V10.0067C15.1935 10.6066 16.1964 10.9284 17.2248 10.9267V8.86667C17.2248 8.86667 15.9715 8.92667 15.0648 7.88Z"
				fill="white"
				className="transition-all duration-200 group-hover:fill-[#006FA9]"
			/>
		</svg>
	);
};

export default TiktokSvg;
