'use client'
import bgMobile from '@/assets/images/about/bgMobile.svg'
import verctor from '@/assets/images/about/Vector 76.svg'
import background from '@/assets/svg/about/Background.svg'
import { CloudflareR2Storage } from '@/library/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CoreValues() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!isMounted) return null

  return (
    <section className="w-full">
      <div className="relative md:h-[310px] h-[332px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0e192b]"></div>

          <Image src={background} alt="Background pattern" fill className="hidden md:block object-right md:object-contain" priority />

          {/* Mobile background */}
          <Image src={bgMobile} alt="Background pattern" fill className="block md:hidden object-cover" priority />
        </div>

        <div className="flex flex-col items-center justify-center h-full relative ">
          <h2 className="text-white text-3xl md:py-15 md:text-5xl font-bold text-center relative md:block hidden">
            OUR CORE
            <span className="relative inline-block">
              <span className="ml-2">VALUES</span>
              <Image src={verctor} alt="vector" width={260} height={134} className="absolute left-1/2 -translate-x-1/2 mt-1 ml-4 top-full md:block hidden" />
            </span>
          </h2>

          <h2 className="text-white text-[40px] md:py-15 md:text-5xl font-[900] text-center relative md:hidden">
            OUR <br /> CORE
            <span className="relative inline-block">
              <span className="ml-2">VALUES</span>
            </span>
            <Image src={verctor} alt="vector" width={260} height={134} className="absolute left-1/2 -translate-x-1/2 mt-1 ml-3 top-full" />
          </h2>
        </div>
      </div>

      {/* Image grid with letter overlays */}
      <div className="grid grid-cols-1 md:grid-cols-4 relative md:gap-1 bg-black">
        {/* S Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image src={`${CloudflareR2Storage}/about-us/core-values/core1_mzfk00.webp`} alt="Person with raised arm celebrating" fill className="object-cover object-center md:object-left" />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">S</span>
          </div>
        </div>

        {/* I Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image src={`${CloudflareR2Storage}/about-us/core-values/core2_sxcxhg.webp`} alt="Person reading" fill className="object-cover object-center md:object-[33%_center]" />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">I</span>
          </div>
        </div>

        {/* P Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image src={`${CloudflareR2Storage}/about-us/core-values/core3_fbq1ma.webp`} alt="Person with luggage" fill className="object-cover object-center md:object-[66%_center]" />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">P</span>
          </div>
        </div>

        {/* A Image */}
        <div className="relative h-[300px] md:h-[600px] overflow-hidden">
          <Image src={`${CloudflareR2Storage}/about-us/core-values/core4_marhsx.webp`} alt="Person smiling" fill className="object-cover object-center md:object-right" />
          <div className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[200px] md:text-[400px] font-semibold opacity-70">A</span>
          </div>
        </div>
      </div>
    </section>
  )
}
