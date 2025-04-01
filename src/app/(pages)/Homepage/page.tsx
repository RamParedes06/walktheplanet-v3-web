"use client";
import React from "react";
import Hero from "../_components/Hero";
// import Beliefs from "./_components/beliefs";
// import InfiniteMenu from "./_components/discVertShaderSource";
// import { partners } from "@/app/partners";
// import GridMotion from "./_components/GridMotion";
// import { offers } from "@/app/offers";
// import GridMotionMobile from "./_components/GridMotionMobile";
// import Footer from "./_components/Footer";
// import BeliefsMobile from "./_components/BeliefMobile";
// import TravelOffer from "./_components/TravelOffer";
// import InfiniteScroll from "./_components/InfiniteScroll";
// import FloatingDiv from "./_components/FloatingDiv";

function HomePage() {
	return (
		//! Removed h-screen and w-screen for hero animation
		<>
			<div className="w-full h-full">
				<Hero />
			</div>

			{/* Temporarily hidden for smooth vertical scroll of homepage  */}
			{/* <div className="h-screen w-screen overflow-x-hidden overflow-y-auto scroll-smooth snap-y snap-mandatory"> */}
			{/* <FloatingDiv />
        <Beliefs />
        <BeliefsMobile />
        <InfiniteMenu items={partners} />
        <GridMotion items={offers} />
        <GridMotionMobile />
        <Footer /> */}
			{/* </div> */}
		</>
	);
}

export default HomePage;
