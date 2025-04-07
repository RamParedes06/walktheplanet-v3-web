import React from "react";
import SmoothScroll from "../_components/SmoothScroll";
import Footer from "../_components/Footer";
import { EduImages } from "@/library/EduHero";
import Hero from "../corporate/_corporate/Hero";
import NetflixCarousel from "./_components/NetflixCarousel";

function edutourism() {
	return (
		<div className="snap-y snap-mandatory overflow-y-auto h-screen">
			<SmoothScroll>
				<section id="hero" className="snap-start">
					<Hero
						images={EduImages}
						title="EDUTOURISM"
						description={
							<div className="flex flex-col gap-3">
								<p>Your passion for travel drives us to break the mold of traditional learning and social challenges with immersive, tailor-made experiences.</p>
								<p>Each adventure brings students to new places, gain fresh insights, and unlock endless possibilities.</p>
							</div>
						}
					/>
				</section>
				<section>
					<NetflixCarousel />
				</section>

				<section id="footer" className="snap-start">
					<Footer />
				</section>
			</SmoothScroll>
		</div>
	);
}

export default edutourism;
