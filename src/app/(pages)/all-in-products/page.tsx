"use client";
import { image1, image2, image3, image4, image5, image6 } from "@/library/AllInProductsCTA";
import { GroupImages } from "@/library/GroupInclusive";
import { ProductsImages } from "@/library/ProductsHero";
import { TranspoImages } from "@/library/TransportationImages";
import CarouselTitle from "../_components/CarouselWithTitle/CarouselTitle";
import Footer from "../_components/Footer";
import SmoothScroll from "../_components/SmoothScroll";
import CallToAction from "../corporate/_corporate/CallToAction";
import Hero from "../corporate/_corporate/Hero";
import Tours from "../leisure/_components/Tours";
import Accomodations from "./_components/Accomodations";
import Cruise from "./_components/Cruise";
import Documentation from "./_components/Documentation";
import FlightCarousel from "./_components/FlightCarousel";
import Merchandise from "./_components/Merchandise";
import ToursPackages from "./_components/ToursPackages";
import useIsMobile from "@/hooks/useIsMobile";

function AllInProducts() {
	const isMobile = useIsMobile();

	return (
		<div className=" h-screen all-in-products">
			<SmoothScroll>
				<Hero
					images={ProductsImages}
					title="ALL-IN-PRODUCTS"
					description={
						<div className="flex flex-col">
							{isMobile ? (
								<span>
									Explore our personalized travel services designed <br /> for worry-free experiences. We arrange flights,
									<br /> stays, transfers and more so you can save money
									<br /> and time while you explore amazing destinations.
								</span>
							) : (
								<span>
									<p className="font-medium text-2xl text-[#7EE7FC]">Explore our personalized travel services</p> designed for worry-free experiences. We arrange flights, stays,
									transfers and more so you can save money and time while you explore amazing destinations.
								</span>
							)}
						</div>
					}
				/>
				<FlightCarousel />
				<CarouselTitle title="TRANSPORTATION" description={<p>Water, air, and land - move smoothly and hassle-free for an incredible journey</p>} images={TranspoImages} />
				<Accomodations />
				<Cruise />
				<Documentation />
				<CarouselTitle
					title={
						isMobile ? (
							<span>
								Group <br /> Inclusive Tours
							</span>
						) : (
							<span> Group Inclusive Tours</span>
						)
					}
					description={<p>Unforgettable group adventures - top destinations, expert guides, and custom itineraries all for you!</p>}
					images={GroupImages}
				/>
				<ToursPackages />

				{/* Section 9 - Travel Essentials  */}
				<Tours productsVersion />

				<Merchandise />
				{/* Section 10 - Merchandise  */}

				{/* Section 11 - Call to Action  */}
				<CallToAction
					url="https://tours.walktheplanet.com/"
					image1={image4}
					image2={image5}
					image3={image6}
					image4={image1}
					image5={image2}
					image6={image3}
					title="Got any travel plans in mind? We’re just one click away!"
					buttonLabel="Shop your travel needs here!"
				/>

				<Footer />
			</SmoothScroll>
		</div>
	);
}

export default AllInProducts;
