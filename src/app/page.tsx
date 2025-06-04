"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
// import HomePage from "./(pages)/Homepage/page";
import { partners } from "@/app/partners";
import { HomeOffers } from "@/library/HomePartner";
import BeliefsMobile from "./(pages)/_components/BeliefMobile";
import Beliefs from "./(pages)/_components/beliefs";
import InfiniteMenu from "./(pages)/_components/discVertShaderSource";
import Footer from "./(pages)/_components/Footer";
import GridMotion from "./(pages)/_components/GridMotion";
import GridMotionMobile from "./(pages)/_components/GridMotionMobile";
import Hero from "./(pages)/_components/HeroInitial";
import TravelOffersV2 from "./(pages)/_components/TravelOffersV2";

const logo = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/Logo-Only_u5157y.png'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F2F2F2]">
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="Google Logo" width={206} height={206} className="mb-4" />
            <div></div>
            <p className="text-lg font-[500] text-black">Loading...</p>
            <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} className="h-1 bg-[#000000] rounded-full mt-4 w-full max-w-2xl" />
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <TravelOffersV2 />
          <Beliefs />
          <BeliefsMobile />
          <InfiniteMenu items={partners} />
          <GridMotion items={HomeOffers} />
          <GridMotionMobile />
          <Footer />
        </>
      )}
    </div>
  );
}
