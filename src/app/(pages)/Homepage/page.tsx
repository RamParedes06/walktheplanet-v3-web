"use client";
import React from "react";
import Hero from "../_components/Hero";

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
