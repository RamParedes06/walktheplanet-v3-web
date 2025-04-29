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
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/library/CorpoCTA";
import Emergency from "./_corporate/Emergency";
import Footer from "../_components/Footer";
// import SmoothScroll from "../_components/SmoothScroll";
import { corpoHero } from "@/library/CorpHero";

function Corporate() {
  return (
    <>
      {/* <div className="snap-y snap-mandatory overflow-y-auto h-screen">
       <SmoothScroll> */}
      <section id="hero" className="snap-start">
        <Hero
          images={corpoHero}
          title="CORPORATE AND BUSINESS"
          description={
            <p>
              <span className="text-[#7EE7FC] ">
                Seamless travel experience
              </span>{" "}
              tailor-made for your corporate and business goals.
            </p>
          }
        />
      </section>
      <section id="section2" className="snap-start">
        <Section2 />
      </section>
      <section id="travel-agencies" className="snap-start">
        <TravelAgencies />
      </section>
      <section id="real-estate" className="snap-start">
        <RealEstate />
      </section>
      <section id="cargo-logistics" className="snap-start">
        <CargoLogistics />
      </section>
      <section id="business-advertising-media" className="snap-start">
        <BusinessAdvertisingMedia />
      </section>
      <section id="manpower" className="snap-start">
        <Manpower />
      </section>
      <section id="pharmaceutical" className="snap-start">
        <Pharmaceutical />
      </section>
      <section id="insurance" className="snap-start">
        <Insurance />
      </section>
      <section id="infrastructure" className="snap-start">
        <Infrastracture />
      </section>
      <section id="manufacturing" className="snap-start">
        <Manufacturing />
      </section>
      <section id="emergency" className="snap-start">
        <Emergency />
      </section>
      <section id="call-to-action" className="snap-start">
        <CallToAction
          url="/contact-us"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
          image6={image6}
          title={`Book your next corporate\nand business travel with us!`}
          buttonLabel="Inquire to us today!"
        />
      </section>
      <section id="footer" className="snap-start">
        <Footer />
      </section>
      {/* </SmoothScroll> */}
      {/* </div> */}
    </>
  );
}

export default Corporate;
