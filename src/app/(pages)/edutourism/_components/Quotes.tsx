import React, { JSX } from "react";
import bg from "@/assets/images/bgEduQuotes.png";

interface QuotesProps {
	title: JSX.Element;
}

function Quotes({ title }: QuotesProps) {
	return (
		<div className="quotes h-[40vh] bg-contain bg-center bg-white bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${bg.src})` }}>
			<div className="text-3xl text-[#14476F] text-center italic">{title}</div>
		</div>
	);
}

export default Quotes;
