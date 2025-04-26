import { MiceImages } from "@/library/MiceHero";
import React from "react";
import Footer from "../_components/Footer";
import SmoothScroll from "../_components/SmoothScroll";
import Hero from "../corporate/_corporate/Hero";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/library/MiceCTA";
import CallToAction from "../corporate/_corporate/CallToAction";
import Quotes from "../edutourism/_components/Quotes";
import InstagramCards from "./_components/InstagramCards";
import { emergencyImages, accordionData } from "@/library/EmergencyMice";
import AccordionWithImageSlider from "../_components/AccordionWithImageSlider";
function page() {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen">
      <SmoothScroll>
        <section id="hero" className="snap-start">
          <Hero
            images={MiceImages}
            title="M.I.C.E."
            description={
              <div className="flex flex-col gap-3">
                <p>
                  <span className="text-[#7EE7FC] ">
                    Tailor-made experience
                  </span>{" "}
                  that understand and support
                  <br /> your business aspirations .
                </p>
              </div>
            }
          />
        </section>
        <section>
          <InstagramCards />
        </section>
        <section>
          <Quotes
            title={
              <div className="flex flex-col lg:gap-0 gap-3 italic text-base lg:text-2xl px-[32px]  max-w-[364px] lg:max-w-full">
                <p>
                  M.I.C.E fuels connections, bringing leaders, brands, and
                  innovators together.
                </p>
                <span className="font-semibold">
                  Create impact with your events and let WalkThePlanet take care
                  of travel, venues, and logistics.
                </span>
              </div>
            }
          />
        </section>
        <section>
          {/* Emergency Section (Accordion with Slider)  */}
          <AccordionWithImageSlider
            images={emergencyImages}
            accordionItems={accordionData}
            captionText="We prioritize your safety, comfort, and confidentiality in arranging your M.I.C.E travel needs to make every journey unforgettable and worry-free."
            rightSideClassName="bg-gradient-to-br from-teal-900 via-emerald-700 to-amber-500 "
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
            title="Plan your events with ease, book now! "
            buttonLabel="Plan your events with us today!"
          />
        </section>

        <section id="footer" className="snap-start">
          <Footer />
        </section>
      </SmoothScroll>
    </div>
  );
}

export default page;
