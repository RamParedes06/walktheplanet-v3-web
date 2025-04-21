import React from "react";
import SmoothScroll from "../_components/SmoothScroll";
import { aboutUsHero } from "@/library/CorpHero";
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

import StorySection from "@/app/components/StorySection";
import WhoWeAreSection from "@/app/components/WhoWeAre";
import Travel from "@/app/components/Travel";
import CoreValues from "@/app/components/CoreValues";

const AboutUs = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen">
      <SmoothScroll>
        <section id="hero" className="snap-start">
          <Hero
            images={aboutUsHero}
            title="ABOUT US"
            description={
              <p>
                <span className="text-[#7EE7FC] ">
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
        <section id="story-section" className="snap-start bg-white">
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
      </SmoothScroll>
    </div>
  );
};

export default AboutUs;
