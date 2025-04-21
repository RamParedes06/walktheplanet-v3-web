import React from "react";
import bgbeliefs from "@/assets/images/our_beliefs_bg.webp";

import unforgetable1 from "@/assets/images/unforgetable1.png";
import unforgetable2 from "@/assets/images/unforgetable2.png";
import tailor1 from "@/assets/images/tailor1.png";
import tailor2 from "@/assets/images/tailor2.png";
import immersive1 from "@/assets/images/immersive1.png";
import immersive2 from "@/assets/images/immersive2.png";

import { DirectionAwareHover } from "./direction-aware-hover";
import ScrollVelocity from "./ScrollVelocity";
import ScrollReveal from "./ScrollReveal";

const cards = [
	{
		id: 1,
		title: "UNFORGETTABLE JOURNEYS",
		description: "We offer curated products for travelers to leave footprints on untouched attractions.",
		images: [unforgetable1, unforgetable2],
		bgColor: "#FE6000", // Light peach
	},
	{
		id: 2,
		title: "TAILOR-MADE EXPERIENCES",
		description: "We customize trails of activities that enable tourists to bring home unforgettable memories.",
		images: [tailor1, tailor2],
		bgColor: "#333333", // Light green
	},
	{
		id: 3,
		title: "IMMERSIVE COMMUNITY",
		description: "We take steps with communities in promoting tours that preserve their cultural heritage.",
		images: [immersive1, immersive2],
		bgColor: "#14476F", // Soft orange
	},
];

function BeliefsMobile() {
	return (
		<div className="space-y-10 pb-40 min-[481px]:hidden" style={{ backgroundImage: `url(${bgbeliefs.src})` }}>
			<ScrollVelocity texts={["OUR BELIEFS"]} className="custom-scroll-text pt-15" textColor="black" />
			<div className="text-center text-2xl max-w-6xl mx-auto max-[480px]:text-[15px] max-[480px]:text-start max-[480px]:flex max-[480px]:flex-col max-[480px]:gap-3 max-[480px]:px-3 text-[#333333A6] ">
				Your love for travel inspires the way for our passion to create unforgettable journeys.
				<div>
					<p> We craft tailor-made experiences in the Philippines and the world, immersing you in culture, diversity,</p>
					<p>and sustainability. Be part of a meaningful community.</p>
				</div>
				<p>Let’s explore together. We walk the Planet!</p>
			</div>

			<div className="max-w-[1280px] mx-auto p-8 bg-[#F2F2F2] space-y-10 ">
				{cards.map((card) => (
					<React.Fragment key={card.id}>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
							{/* Text section appears first on mobile */}
							<ScrollReveal rotateOnHover>
								<div className=" p-11 flex flex-col gap-8 h-full px-8" style={{ backgroundColor: card.bgColor }}>
									<h3 className="text-[28px] font-bold text-white">{card.title}</h3>
									<h6 className="font-medium text-[24px] text-white">{card.description}</h6>
								</div>
							</ScrollReveal>

							{/* Image section - Side by side on mobile, stacked on larger screens */}
							<div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
								<ScrollReveal className="overflow-hidden">
									<DirectionAwareHover imageUrl={card.images[0]}>
										<p className="text-[20px] font-bold">Quiet alleys, Timeless Charm</p>
										<p>Step into a side of Venice few ever see</p>
									</DirectionAwareHover>
								</ScrollReveal>
								<ScrollReveal>
									<DirectionAwareHover imageUrl={card.images[1]}>
										<p className="text-[20px] font-bold">Beyond the slopes</p>
										<p>Experience Mayon’s raw beauty in secret locations</p>
									</DirectionAwareHover>
								</ScrollReveal>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default BeliefsMobile;
