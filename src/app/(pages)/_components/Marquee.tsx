import React from "react";
import "../../../styles/marquee.scss";
type MarqueeProps = {
  variant?: "homeHero" | "corporateHero";
  gradient?: string;
};
const Marquee = ({ variant, gradient = "bg-gradient-to-r from-[#0A2472] via-[#00A9CE] to-[#FF7A00]" }: MarqueeProps) => {
  return (
    <>
      {/* scroll animation!!  */}
      {variant === "homeHero" ? (
        <>
          {/* scroll animation for home hero page */}
          <div className="wrapper top-wrapper bg-[#ffc000]">
            <div className="marquee text-sm lg:text-[16px]">
              <p>
                {
                  "Explore more, spend less! Get 20% off educational tours today! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Book now and enjoy 10% off your next adventure\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Travel smarter, save bigger! Get free upgrades on select packages!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0"
                }
              </p>
              <p>
                {
                  "Explore more, spend less! Get 20% off educational tours today! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Book now and enjoy 10% off your next adventure\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Travel smarter, save bigger! Get free upgrades on select packages!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0"
                }
              </p>
            </div>
          </div>
          <div className="wrapper bottom-wrapper">
            <div className="marquee text-sm lg:text-[16px]">
              <p>
                {
                  "Explore more, spend less! Get 20% off educational tours today! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Book now and enjoy 10% off your next adventure\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Travel smarter, save bigger! Get free upgrades on select packages!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0"
                }
              </p>
              <p>
                {
                  "Explore more, spend less! Get 20% off educational tours today! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Book now and enjoy 10% off your next adventure\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Travel smarter, save bigger! Get free upgrades on select packages!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0"
                }
              </p>
            </div>
          </div>
          {/* End of infinite scroll animation  */}
        </>
      ) : (
        <>
          {/* scroll animation for corporate hero page */}
          <div className={`wrapper bottom-wrapper overflow-hidden ${gradient} !text-white font-semibold`}>
            <div className="marquee">
              <p>
                {
                  "GET FREE UPGRADES ON SELECTED PACKAGES \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0BOOK NOW AND ENJOY 10% OFF YOUR NEXT ADVENTURE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SPEND LESS, TRAVEL MORE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0"
                }
              </p>
              <p>
                {
                  "GET FREE UPGRADES ON SELECTED PACKAGES \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0BOOK NOW AND ENJOY 10% OFF YOUR NEXT ADVENTURE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SPEND LESS, TRAVEL MORE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0"
                }
              </p>
              <p>
                {
                  "GET FREE UPGRADES ON SELECTED PACKAGES \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0BOOK NOW AND ENJOY 10% OFF YOUR NEXT ADVENTURE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SPEND LESS, TRAVEL MORE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0"
                }
              </p>
            </div>
          </div>

          {/* End of infinite scroll animation  */}
        </>
      )}
    </>
  );
};

export default Marquee;
