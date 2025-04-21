import React from "react";
import Testimonials from "./_components/Testimonials";
import CallToAction from "../corporate/_corporate/CallToAction";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/library/CorpoCTA";
import Footer from "../_components/Footer";
import Hero from "../corporate/_corporate/Hero";
import { TravelStoriesHero } from "@/library/TravelStoriesHero";

const page = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Hero
        images={TravelStoriesHero}
        title="TRAVEL STORIES"
        description={
          <div className="lg:space-y-10 space-y-5">
            <p className="font-normal lg:text-[24px] text-base">
              From dreamy getaways to epic adventures, we make travel dreams
              come true.
            </p>
            <p className="font-normal lg:text-[24px] text-base">
              See why our clients can't stop raving about their unforgettable
              journeys with WalkThePlanet!
            </p>
          </div>
        }
      />
      <Testimonials />
      <CallToAction
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        image6={image6}
        title="Book with us. Your dream trip is just a click away!"
        buttonLabel="Start your next adventure with WalkThePlanet"
      />
      <Footer />
    </div>
  );
};

export default page;
