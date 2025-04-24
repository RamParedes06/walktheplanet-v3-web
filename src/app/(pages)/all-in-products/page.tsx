import React from "react";
import SmoothScroll from "../_components/SmoothScroll";
import Hero from "../corporate/_corporate/Hero";
import { ProductsImages } from "@/library/ProductsHero";
import FlightCarousel from "./_components/FlightCarousel";
import CarouselTitle from "../_components/CarouselWithTitle/CarouselTitle";
import { TranspoImages } from "@/library/TransportationImages";
import { GroupImages } from "@/library/GroupInclusive";
import Cruise from "./_components/Cruise";
import Accomodations from "./_components/Accomodations";
import Tours from "../leisure/_components/Tours";
import CallToAction from "../corporate/_corporate/CallToAction";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/library/AllInProductsCTA";
import Footer from "../_components/Footer";

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
                <p className="font-medium text-2xl text-[#7EE7FC]">
                  Explore our personalized travel services
                </p>{" "}
                designed for worry-free experiences. We arrange flights, stays,
                transfers and more so you can save money and time while you
                explore amazing destinations.
              </span>
            </div>
          }
        />
        <FlightCarousel />
        <CarouselTitle
          title="TRANSPORTATION"
          description={
            <p>
              Water, air, and land - move smoothly and hassle-free for an
              incredible journey
            </p>
          }
          images={TranspoImages}
        />
        <Cruise />
        <Accomodations />
        <CarouselTitle
          title="GROUP INCLUSIVE TOURS"
          description={
            <p>
              Unforgettable group adventures - top destinations, expert guides,
              and custom itineraries all for you!
            </p>
          }
          images={GroupImages}
        />

        {/* Section 9 - Travel Essentials  */}
        <Tours productsVersion />

        {/* Section 10 - Merchandise  */}

        {/* Section 11 - Call to Action  */}
        <CallToAction
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
