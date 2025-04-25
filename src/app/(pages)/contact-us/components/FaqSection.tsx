"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  // const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="flex items-center justify-center w-full h-full bg-gradient-to-b from-blue-900 via-teal-800 to-yellow-500 text-white px-4 md:px-20">
      <div className="py-10 space-y-6 w-full max-w-screen-md">
        {/* FAQ Item 1 */}
        <div className="border-b border-white/20 py-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleItem("faq-1")}
          >
            <div className="flex items-start gap-6">
              <span className="text-white/70 font-medium">01</span>
              <h3 className="text-[16px] px-2 md:text-lg md:font-medium">
                <span className="font-bold">
                  What are the partners and affiliations of WalkThePlanet?
                </span>
              </h3>
            </div>
            <button className="flex-shrink-0">
              {openItem === "faq-1" ? (
                <FaMinus className="w-5 h-5 text-white" />
              ) : (
                <FaPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <div
            className={`transition-all duration-300 ${
              openItem === "faq-1"
                ? "opacity-100 mt-4 max-h-[500px]"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="pl-6 sm:pl-12 pr-4 text-white/90 space-y-3 text-sm sm:text-base">
              <p>WalkThePlanet is an accredited member of the followings:</p>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Department of Tourism (DOT)</li>
                <li>Philippine Hop-On Hop-Off (HOHO by DOT-NCR)</li>
                <li>Philippine Tour Operators Association (PHILTOA)</li>
                <li>
                  National Association of Independent Travel Agencies (NAITAS)
                </li>
                <li>Tourism Promotions Board</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-white/20 py-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleItem("faq-2")}
          >
            <div className="flex items-start gap-6">
              <span className="text-white/70 font-medium">02</span>
              <h3 className="text-[16px] px-2 md:text-lg md:font-medium">
                <span className="font-bold">How can I find WalkThePlanet?</span>
              </h3>
            </div>
            <button className="flex-shrink-0">
              {openItem === "faq-2" ? (
                <FaMinus className="w-5 h-5 text-white" />
              ) : (
                <FaPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              openItem === "faq-2"
                ? "opacity-100 mt-4"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="pl-12 pr-4 text-white/90 space-y-4">
              <p>
                You can visit us at 1803-04 Philippine Stock Exchange Tower,
                28th Street corner 5th Avenue, Bonifacio Global City, Taguig
                City, Metro Manila, Philippines
              </p>
              <p>
                We accommodate walk-in from{" "}
                <span className="font-semibold">
                  MONDAYS to FRIDAYS, 9:00 AM to 6:00 PM
                </span>
                .
              </p>
              <p>
                We highly recommend wearing{" "}
                <span className="font-semibold">smart casual</span> or{" "}
                <span className="font-semibold">business attire</span> as per
                building dress code requirements.
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/place/Philippine+Stock+Exchange+Tower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline"
                >
                  Click here to find us on Google Map!
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 3 - The one with lots of content */}
        <div className="border-b border-white/20 py-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleItem("faq-3")}
          >
            <div className="flex items-start gap-6">
              <span className="text-white/70 font-medium">03</span>
              <h3 className="text-[16px] px-2 md:text-lg md:font-medium">
                <span className="font-bold">
                  How can I know more about WalkThePlanet?
                </span>
              </h3>
            </div>
            <button className="flex-shrink-0">
              {openItem === "faq-3" ? (
                <FaMinus className="w-5 h-5 text-white" />
              ) : (
                <FaPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* This is the key change - no max-height limitation for this content-heavy item */}
          <div
            className={`transition-opacity duration-300 ${
              openItem === "faq-3"
                ? "opacity-100 mt-4"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="pl-12 pr-4 text-white/90 space-y-4">
              <p>You may inquire and book with us through the following:</p>

              <div className="space-y-1">
                <p className="text-white/70 font-medium">Via Online Booking</p>
                <p>
                  For flights and hotels:{" "}
                  <a
                    href="https://www.galago.com.ph/"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.galago.com.ph/
                  </a>
                </p>
                <p>
                  For tours and more:{" "}
                  <a
                    href="https://www.tours.walktheplanet.com/"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.tours.walktheplanet.com/
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-white/70 font-medium">Via Email</p>
                <p>
                  Leisure travel:{" "}
                  <a
                    href="mailto:customersupport@walktheplanet.com"
                    className="text-cyan-300 underline"
                  >
                    customersupport@walktheplanet.com
                  </a>
                </p>
                <p>
                  Corporate and business travel:{" "}
                  <span className="text-cyan-300 underline">walktheplanet</span>
                </p>
                <p>
                  Travel agent and partner:{" "}
                  <a
                    href="mailto:partners@walktheplanet.com"
                    className="text-cyan-300 underline"
                  >
                    partners@walktheplanet.com
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-white/70 font-medium">Via Social Media</p>
                <p>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/walktheplanetinc"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.facebook.com/walktheplanetinc
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/walktheplanetinc"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.instagram.com/walktheplanetinc
                  </a>
                </p>
                <p>
                  TikTok:{" "}
                  <a
                    href="https://www.tiktok.com/@walktheplanetinc?lang=en"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.tiktok.com/@walktheplanetinc?lang=en
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/company/walktheplanet/"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/company/walktheplanet/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="border-b border-white/20 py-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleItem("faq-4")}
          >
            <div className="flex items-start gap-6">
              <span className="text-white/70 font-medium">04</span>
              <h3 className="text-[16px] px-2 md:text-lg md:font-medium">
                <span className="font-bold">
                  What payment methods are available?
                </span>
              </h3>
            </div>
            <button className="flex-shrink-0">
              {openItem === "faq-4" ? (
                <FaMinus className="w-5 h-5 text-white" />
              ) : (
                <FaPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              openItem === "faq-4"
                ? "opacity-100 mt-4"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="pl-12 pr-4 ml-1 text-white/90">
              <div>
                <p className="mb-4 font-medium">
                  We accept the following payment methods:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cash</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Credit / Debit Cards (POS)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cheque</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Credit / Debit Cards (Online)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Local Bank Transfers</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>E-Wallets (GCash, PayMaya)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Bank Wire Transfer</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>QR PH</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white">
                  Note: if you do not see the payment method that fits your
                  needs, <br />
                  please feel free to contact us at{" "}
                  <a
                    href="mailto:customersupport@walktheplanet.com"
                    className="text-[#7EE7FC] underline"
                  >
                    customersupport@walktheplanet.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div className="border-b border-white/20 py-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleItem("faq-5")}
          >
            <div className="flex items-start gap-6">
              <span className="text-white/70 font-medium">05</span>
              <h3 className="text-[16px] px-2 md:text-lg md:font-medium">
                <span className="font-bold">
                  How does WalkThePlanet customize travel packages?
                </span>
              </h3>
            </div>
            <button className="flex-shrink-0">
              {openItem === "faq-5" ? (
                <FaMinus className="w-5 h-5 text-white" />
              ) : (
                <FaPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              openItem === "faq-5"
                ? "opacity-100 mt-4"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="pl-12 pr-4 text-white/90">
              <p>
                We tailor each travel experience to match your unique needs and
                preferences, whether for individuals or groups. Our team
                carefully curates itineraries, accommodations, travel
                essentials, documentation and relevant services to ensure a
                seamless and memorable journey.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 6 */}
        <div className="border-b border-white/20 py-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleItem("faq-6")}
          >
            <div className="flex items-start gap-6">
              <span className="text-white/70 font-medium">06</span>
              <h3 className="text-[16px] px-2 md:text-lg md:font-medium">
                <span className="font-bold">
                  How can I find the latest travel promos from WalkThePlanet?
                </span>
              </h3>
            </div>
            <button className="flex-shrink-0">
              {openItem === "faq-6" ? (
                <FaMinus className="w-5 h-5 text-white" />
              ) : (
                <FaPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* This is the key change - no max-height limitation for this content-heavy item */}
          <div
            className={`transition-opacity duration-300 ${
              openItem === "faq-6"
                ? "opacity-100 mt-4"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="pl-12 pr-4 text-white/90 space-y-4">
              <p>
                To keep yourself updated with our latest travel packages and
                exclusive promos, you may catch us on our official{" "}
                <span className="underline text-[#7EE7FC]">Facebook, </span>
                <span className="underline text-[#7EE7FC]">
                  {" "}
                  Instagram{" "}
                </span>{" "}
                and
                <span className="underline text-[#7EE7FC]"> TikTok </span>
                accounts.
              </p>

              <div className="space-y-1">
                <p>
                  You may also join our WalkThePlanet Facebook Community for
                  travel opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Item 7 */}
        <div className="border-b border-white/20 py-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleItem("faq-7")}
          >
            <div className="flex items-start gap-6">
              <span className="text-white/70 font-medium">07</span>
              <h3 className="text-[16px] px-2 md:text-lg md:font-medium">
                <span className="font-bold">
                  Tell us more about your thoughts with WalkThePlanet?
                </span>
              </h3>
            </div>
            <button className="flex-shrink-0">
              {openItem === "faq-7" ? (
                <FaMinus className="w-5 h-5 text-white" />
              ) : (
                <FaPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* This is the key change - no max-height limitation for this content-heavy item */}
          <div
            className={`transition-opacity duration-300 ${
              openItem === "faq-7"
                ? "opacity-100 mt-4"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="pl-12 pr-4 text-white/90 space-y-4">
              <div className="space-y-1">
                <p className="text-white/70 font-medium">For B2C Customer</p>
                <p>
                  <a
                    href="https://www.galago.com.ph/"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    customersupport@walktheplanet.com
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-white/70 font-medium">
                  For Corporate Client
                </p>
                <p>
                  <a
                    href="https://www.galago.com.ph/"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    corp@walktheplanet.com
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-white/70 font-medium">For M.I.C.E Client</p>
                <p>
                  <a
                    href="https://www.galago.com.ph/"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mice@walktheplanet.com
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-white/70 font-medium">
                  For Travel Agent and Partner
                </p>
                <p>
                  <a
                    href="partners@walktheplanet.com"
                    className="text-cyan-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    partners@walktheplanet.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
