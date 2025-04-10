import { EduImages } from "@/library/EduHero";
import React from "react";
import Footer from "../_components/Footer";

import SmoothScroll from "../_components/SmoothScroll";
import Hero from "../corporate/_corporate/Hero";
import FrequentlyAskedQuestion from "@/app/components/FrequentlyAskedQuestion";
import { image1, image2, image3, image4, image5, image6 } from "@/library/CorpoCTA";
import CallToAction from "../corporate/_corporate/CallToAction";
import Quotes from "../edutourism/_components/Quotes";
import InstagramCards from "./_components/InstagramCards";

function page() {
	return (
		<div className="snap-y snap-mandatory overflow-y-auto h-screen">
			<SmoothScroll>
				<section id="hero" className="snap-start">
					<Hero
						images={EduImages}
						title="M.I.C.E."
						description={
							<div className="flex flex-col gap-3">
								<p>
									<span className="text-[#7EE7FC] ">Tailor-made experience</span> that understand and support
									<br /> your business aspirations .
								</p>
							</div>
						}
					/>
				</section>
				<section>
					<InstagramCards />
				</section>
				<section>
					<Quotes
						title={
							<div className="italic">
								<p>M.I.C.E fuels connections, bringing leaders, brands, and innovators together.</p>
								<span className="text-semibold">Create impact with your events and let WalkThePlanet take care of travel, venues, and logistics.</span>
							</div>
						}
					/>
				</section>
				<section>
					<FrequentlyAskedQuestion />
				</section>
				<section>
					<CallToAction
						image1={image1}
						image2={image2}
						image3={image3}
						image4={image4}
						image5={image5}
						image6={image6}
						title="Plan your events with ease, book now! "
						buttonLabel="Plan your events with us today!"
					/>
				</section>

				<section id="footer" className="snap-start">
					<Footer />
				</section>
			</SmoothScroll>
		</div>
	);
}

export default page;
