import React from "react";
import SmoothScroll from "../_components/SmoothScroll";
import { corpoHero } from "@/library/CorpHero";
import Hero from "../corporate/_corporate/Hero";
import Footer from "../_components/Footer";
import CallToAction from "../corporate/_corporate/CallToAction";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/library/CorpoCTA";
import TravelAgencies from "../corporate/_corporate/TravelAgencies";

const AboutUs = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen">
      <SmoothScroll>
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
        <section id="travel-agencies" className="snap-start">
          <TravelAgencies />
        </section>
        <section id="call-to-action" className="snap-start">
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
        </section>
        <section id="footer" className="snap-start">
          <Footer />
        </section>
      </SmoothScroll>
    </div>
  );
};

export default AboutUs;
