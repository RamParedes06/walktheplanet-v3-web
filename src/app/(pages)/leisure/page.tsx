import React from "react";
import Hero from "../corporate/_corporate/Hero";
import { LeisureImages } from "@/library/LeisureHero";
import Footer from "../_components/Footer";
import OnlineBooking from "./_components/OnlineBooking";
import LiveSelling from "./_components/LiveSelling";

const LeisurePage = () => {
  return (
    <div>
      {" "}
      {/* Section 1 - Hero  */}
      <Hero
        images={LeisureImages}
        title="LEISURE"
        description={
          <div className="flex flex-col gap-3">
            <p>
              Whether you crave sun-drenched beaches, cultural adventures, or
              tranquil retreats, your{" "}
              <span className="text-[#7EE7FC]">
                {" "}
                perfect escape starts here.
              </span>
            </p>
          </div>
        }
      />
      {/* Section 2 - Online booking  */}
      <OnlineBooking />

      {/* Section 3 - Tiktok Live Selling  */}
      <LiveSelling/> 
      {/* Section 5 - Footer  */}
      <Footer />
    </div>
  );
};

export default LeisurePage;
