"use client";
import React from "react";
import SmoothScroll from "../_components/SmoothScroll";
import Footer from "../_components/Footer";
import { EduImages } from "@/library/EduHero";
import Hero from "../corporate/_corporate/Hero";
import NetflixCarousel from "./_components/NetflixCarousel";
import Quotes from "./_components/Quotes";
import CallToAction from "../corporate/_corporate/CallToAction";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/library/eduCTA";
import { emergencyImages, accordionData } from "@/library/EmergencyEdutourism";
import AccordionWithImageSlider from "../_components/AccordionWithImageSlider";
import useIsMobile from "@/hooks/useIsMobile";

function Edutourism() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* <div className="snap-y snap-mandatory overflow-y-auto"> */}
      {/* <SmoothScroll> */}
      <section id="hero" className="snap-start">
        <Hero
          gradient="bg-gradient-to-r from-[#FAAE19] via-[#198A6F] to-[#14476F]"
          images={EduImages}
          title="EDUTOURISM"
          description={
            <div className="flex flex-col gap-3 pr-5">
              <p>
                Your passion for travel drives us to break the mold of
                traditional learning and social challenges with immersive,
                tailor-made experiences.
              </p>
              <p>
                Each adventure brings students to new places, gain fresh
                insights, and unlock endless possibilities.
              </p>
            </div>
          }
        />
      </section>
      <section>
        <NetflixCarousel />
      </section>
      <section>
        <Quotes
          title={
            isMobile ? (
              <div className="flex flex-col gap-3 text-[16px]">
                <p className="font-medium">
                  Your students&apos;
                  <span className="font-bold">
                    safety, comfort, and <br /> confidentialit
                  </span>{" "}
                  are our priority <br />
                  to ensure each moment is unique and memorable
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 text-2xl">
                <p className="font-medium">
                  Your students’
                  <span className="font-bold">
                    {" "}
                    safety, comfort, and confidentiality
                  </span>{" "}
                  are our priority <br />
                  to ensure each moment is unique and memorable
                </p>
              </div>
            )
          }
        />
      </section>
      <section>
        {/* Emergency Section (Accordion with Slider)  */}
        <AccordionWithImageSlider
          images={emergencyImages}
          accordionItems={accordionData}
          captionText=""
          rightSideClassName="bg-gradient-to-br from-teal-900 via-emerald-700 to-amber-500"
        />
      </section>
      <section>
        <CallToAction
          url="/contact-us"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
          image6={image6}
          title="Discover amazing places and learn something new"
          buttonLabel="Plan your tours with us today!"
        />
      </section>
      {/* </SmoothScroll> */}
      {/* </div> */}
      <section id="footer" className="snap-start">
        <Footer />
      </section>
    </>
  );
}

export default Edutourism;
