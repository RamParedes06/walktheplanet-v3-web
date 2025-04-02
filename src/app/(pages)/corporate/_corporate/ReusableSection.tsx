import React, { ReactNode } from "react";
import TextReveal from "@/app/(pages)/_components/TextReveal";

interface Props {
	title?: string;
	description?: ReactNode;
	backgroundImage?: string;
	position?: "left" | "center" | "right";
}

//! How to use
// <ReusableSection
//   title="hi there"
//   backgroundImage={bg}
//   position="center" // left | center | right
//   description={<p>This is a <span className="font-semibold">custom</span> description.</p>}
// />

const ReusableSection: React.FC<Props> = ({ title, description, backgroundImage, position }) => {
	// Determine positioning classes
	const containerClasses = `
    max-w-[1440px] px-[80px] py-[112px] z-10
    ${position === "center" ? "mx-auto" : ""}
    ${position === "right" ? "ml-auto" : ""}
  `;

	const textAlignClass = position === "center" ? "text-center" : position === "right" ? "text-right" : "text-left";

	return (
		<section className="p-6 bg-gray-100 h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="overlay flex absolute inset-0 top-0 bg-gradient-to-b from-transparent via-[rgba(5,18,28,0.4)] to-[rgba(5,18,28,0.8)]">
				<div className="self-end w-full">
					<div className={containerClasses.trim()}>
						<TextReveal>
							<p className={`font-bold text-[64px] text-white font-satoshi uppercase ${textAlignClass}`}>{title}</p>
							<div className={`flex flex-col gap-2 text-2xl ${textAlignClass}`}>{description}</div>
						</TextReveal>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReusableSection;
