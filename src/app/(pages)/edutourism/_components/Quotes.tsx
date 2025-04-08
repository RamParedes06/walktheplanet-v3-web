import React from "react";
import bg from "@/assets/images/bgEduQuotes.png";

function Quotes() {
	return (
		<div className="quotes h-[40vh] bg-contain bg-center bg-white bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${bg.src})` }}>
			<p className="text-3xl text-[#14476F] text-center italic">
				Your students’ <span className="font-semibold">safety, comfort, and confidentiality</span> are our priorityt <br /> ensure each moment is unique and memorable
			</p>
		</div>
	);
}

export default Quotes;
