import React from "react";
import Hero from "../corporate/_corporate/Hero";
import { EduImages } from "@/library/EduHero";

const LeisurePage = () => {
  return (
    <div>
      {" "}
      <Hero
        images={EduImages}
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
    </div>
  );
};

export default LeisurePage;
