'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import background from '@/assets/svg/about/Background.svg'
import bgMobile from '@/assets/images/about/bgMobile.svg'
import verctor from '@/assets/images/about/Vector 76.svg'

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

          {/* Background image container */}
          <div className="absolute inset-0 bg-no-repeat bg-cover bg-right hidden md:block" style={{ backgroundImage: `url(${background.src})` }}></div>

          {/* Mobile background */}
          <div className="absolute inset-0 bg-no-repeat bg-cover md:hidden" style={{ backgroundImage: `url(${bgMobile.src})` }}></div>
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
        <div className="relative h-[404px] md:h-[600px] overflow-hidden">
          <div className="group absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:via-black/50 hover:to-black/80 active:from-transparent active:via-black/50 active:to-black/80 z-10 flex items-end">
            <div className="opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out text-white p-[64px_24px]">
              <p className="text-2xl italic font-medium">Social Responsibility</p>
              <p className="text-base pt-2">Travel with purpose</p>
            </div>
          </div>

          <Image
            src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205398/core1_mzfk00.webp"
            alt="Person with raised arm celebrating"
            fill
            className="object-cover object-center md:object-left"
          />
          {/* Gradient overlay behind letter  */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/1 to-[#05121C]/80">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[364px] md:text-[400px] font-semibold opacity-70 ">S</span>
          </div>
        </div>

        {/* I Image */}
        <div className="relative h-[404px] md:h-[600px] overflow-hidden">
          <div className="group absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:via-black/50 hover:to-black/80 active:from-transparent active:via-black/50 active:to-black/80 z-10 flex items-end">
            <div className="opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out text-white p-[64px_24px]">
              <p className="text-2xl italic font-medium">Innovation</p>
              <p className="text-base pt-2">Smarter, better travel</p>
            </div>
          </div>
          <Image src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205397/core2_sxcxhg.webp" alt="Person reading" fill className="object-cover object-center md:object-[33%_center]" />
          {/* Gradient overlay behind letter  */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/1 to-[#05121C]/80">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[364px] md:text-[400px] font-semibold opacity-70">I</span>
          </div>
        </div>

        {/* P Image */}
        <div className="relative h-[404px] md:h-[600px] overflow-hidden">
          <div className="group absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:via-black/50 hover:to-black/80 active:from-transparent active:via-black/50 active:to-black/80 z-10 flex items-end">
            <div className="opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out text-white p-[64px_24px]">
              <p className="text-2xl italic font-medium">Passion</p>
              <p className="text-base pt-2">Driven by adventure</p>
            </div>
          </div>
          <Image src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205396/core3_fbq1ma.webp" alt="Person with luggage" fill className="object-cover object-center md:object-[66%_center]" />
          {/* Gradient overlay behind letter  */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/1 to-[#05121C]/80">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[364px] md:text-[400px] font-semibold opacity-70">P</span>
          </div>
        </div>

        {/* A Image */}
        <div className="relative h-[404px] md:h-[600px] overflow-hidden">
          <div className="group absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:via-black/50 hover:to-black/80 active:from-transparent active:via-black/50 active:to-black/80 z-10 flex items-end">
            <div className="opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out text-white p-[64px_24px]">
              <p className="text-2xl italic font-medium">Agility</p>
              <p className="text-base pt-2">Always improving</p>
            </div>
          </div>
          <Image src="https://res.cloudinary.com/dmxvasob7/image/upload/v1745205397/core4_marhsx.webp" alt="Person smiling" fill className="object-cover object-center md:object-right" />
          {/* Gradient overlay behind letter  */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/1 to-[#05121C]/80">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] md:translate-y-[190px] text-white text-[364px] md:text-[400px] font-semibold opacity-70">A</span>
          </div>
        </div>
      </div>
    </section>
  )
}
