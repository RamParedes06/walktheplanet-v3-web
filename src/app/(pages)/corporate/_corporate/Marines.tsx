import Image from 'next/image'
import React from 'react'
import TextReveal from '@/app/(pages)/_components/TextReveal'
import Marine from '@/assets/images/corporate/marine.png'

// interface PharmaceuticalProps {
// 	title?: string;
// 	description?: string;
// }

const Marines = () => {
  return (
    <div className="flex relative mx-auto h-screen">
      <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0)_64.52%,rgba(0,169,206,0.4)_100%)] w-full">
        <Image src={Marine} fill alt="image" className="object-cover" />
      </div>

      <div className="absolute top-0 max-w-full min-h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0)_64.52%,rgba(0,169,206,0.4)_100%)] w-full"></div>
      <div className="absolute bottom-0 max-w-full min-h-[412px] bg-[linear-gradient(180deg,rgba(5,18,28,0)_44.33%,rgba(5,18,28,0.8)_74.87%)] w-full">
        <div className="flex flex-col relative bottom-0 mt-50 max-[490px] px-4 max-[490px]:py-15">
          <TextReveal>
            <h2 className="font-bold text-[38px] md:text-[64px] text-white font-satoshi text-center  max-[490px] max-[490px]:text-start">MARINES</h2>
            <p className="font-generalSans italic text-center text-[13px] max-[490px]:text-start max-[490px]:text-[16px]  text-white text-base sm:text-base md:text-base lg:text-lg xl:text-2xl">
              Smooth-sailing trips for the whole crew on sea! <br />
              Reliable, convenient, and expertly-handled travel services for marines.
            </p>
          </TextReveal>
        </div>
      </div>
    </div>
  )
}

export default Marines
