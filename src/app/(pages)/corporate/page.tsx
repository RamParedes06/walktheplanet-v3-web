// import DraggableCarousel from "@/app/components/DraggableCarousel";
import React from "react";
import Pharmaceutical from "./_corporate/Pharmaceutical";
import BusinessAdvertisingMedia from "./_corporate/BusinessAdvertisingMedia";
import Infrastracture from "./_corporate/Infrastracture";
import Section2 from "./_corporate/Section2";

import RealEstate from "./_corporate/RealEstate";
import TravelAgencies from "./_corporate/TravelAgencies";
import Insurance from "./_corporate/Insurance";
import Manufacturing from "./_corporate/Manufacturing";
import CargoLogistics from "./_corporate/CargoLogistics";
import Manpower from "./_corporate/Manpower";
import Hero from "./_corporate/Hero";
import CallToAction from "./_corporate/CallToAction";
import { image1, image2, image3, image4, image5, image6 } from "@/library/CorpoCTA";
import Emergency from "./_corporate/Emergency";
import Footer from "../_components/Footer";

function Corporate() {
	return (
		<div>
			<Hero />
			<Section2 />
			<TravelAgencies />
			<RealEstate />
			<CargoLogistics />
			<BusinessAdvertisingMedia />
			<Manpower />
			<Pharmaceutical />
			<Insurance />
			<Infrastracture />
			<Manufacturing />
			<Emergency />
			<CallToAction
				image1={image1}
				image2={image2}
				image3={image3}
				image4={image4}
				image5={image5}
				image6={image6}
				title="Book your next corporate and business travel with us!"
				buttonLabel="Inquire to us today!"
			/>
			<Footer />
		</div>
	);
}

export default Corporate;
