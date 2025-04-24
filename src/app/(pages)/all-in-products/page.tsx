import React from "react";
import SmoothScroll from "../_components/SmoothScroll";
import Hero from "../corporate/_corporate/Hero";
import { ProductsImages } from "@/library/ProductsHero";
import FlightCarousel from "./_components/FlightCarousel";
import CarouselTitle from "../_components/CarouselWithTitle/CarouselTitle";
import { TranspoImages } from "@/library/TransportationImages";
import Cruise from "./_components/Cruise";
import Accomodations from "./_components/Accomodations";

function AllInProducts() {
	return (
		<div className=" h-screen all-in-products">
			<SmoothScroll>
				<Hero
					images={ProductsImages}
					title="ALL-IN-PRODUCTS"
					description={
						<div className="flex flex-col">
							<span>
								<p className="font-medium text-2xl text-[#7EE7FC]">Explore our personalized travel services</p> designed for worry-free experiences. We arrange flights, stays,
								transfers and more so you can save money and time while you explore amazing destinations.
							</span>
						</div>
					}
				/>
				<FlightCarousel />
				<CarouselTitle title="TRANSPORTATION" description={<p>Water, air, and land - move smoothly and hassle-free for an incredible journey</p>} images={TranspoImages} />
				<Cruise />
				<Accomodations />
			</SmoothScroll>
		</div>
	);
}

export default AllInProducts;
