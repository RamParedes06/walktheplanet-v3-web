import React from "react";
// import SmoothScroll from "../_components/SmoothScroll";
import { aboutUsHero, aboutUsHeroMobile } from "@/library/CorpHero";

import Footer from "../_components/Footer";

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/app/components/CorpoCTA";

import StorySection from "@/app/components/StorySection";
import WhoWeAreSection from "@/app/components/WhoWeAre";
import Travel from "@/app/components/Travel";
import CoreValues from "@/app/components/CoreValues";
import CallToAction from "@/app/components/CallToAction";
import Hero from "@/app/components/Hero";

const AboutUs = () => {
  return (
    <>
      {/* <div className="snap-y snap-mandatory overflow-y-auto h-screen">
      <SmoothScroll> */}
      {/* Desktop */}
      <section id="hero" className="hidden md:block snap-start">
        <Hero
          images={aboutUsHero}
          title="ABOUT US"
          description={
            <p>
              <span className="text-white">
                Bringing Every Juan Closer to Their Dream
              </span>{" "}
              Destinations.
            </p>
          }
        />
      </section>
      {/* Mobile */}
      <section id="hero" className="md:hidden block snap-start">
        <Hero
          images={aboutUsHeroMobile}
          title="ABOUT US"
          description={
            <p>
              <span className="text-white">
                Bringing Every Juan Closer to Their Dream
              </span>{" "}
              Destinations.
            </p>
          }
        />
      </section>
      <section id="who-we-are" className="snap-start bg-white">
        <WhoWeAreSection />
      </section>
      <section id="travel" className="snap-start bg-white">
        <Travel />
      </section>

      <section id="story-section" className="snap-start bg-white">
        <StorySection />
      </section>

      <section id="core-values" className="snap-start bg-white">
        <CoreValues />
      </section>

      <section id="call-to-action" className="snap-start">
        <CallToAction
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
          image6={image6}
          title="Partner with us, and your success is our ultimate priority"
          buttonLabel="Partner with WalkThePlanet today!"
        />
      </section>
      <section id="footer" className="snap-start">
        <Footer />
      </section>
      {/* </SmoothScroll>
    </div> */}
    </>
  );
};

export default AboutUs;
