'use client'
import React, { useState } from 'react'
import { MerchandiseImages } from '@/library/MerchandiseImages'
import AipTextPosition from './AipTextPosition'
import BgSwitchBtn from './BgSwitchBtn'

const Merchandise = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const background = MerchandiseImages[activeIndex]?.image
  return (
    <div
      className="relative h-screen w-full flex justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(5,18,28,0) 0%, rgba(5,18,28,0.6) 20%, rgba(5,18,28,1) 100%)',
        }}
        className="absolute bottom-0 w-full py-[112px] space-y-10 sm:text-center text-left"
      >
        <AipTextPosition title="MERCHANDISE" description="Travel with style! Browse through our exclusive travel must-haves!" />

        <div className="flex flex-col ml-5 sm:flex-col gap-2 md:flex-row justify-center sm:space-x-1">
          {MerchandiseImages.map((item, index) => (
            <BgSwitchBtn
              key={item.id}
              className={`sm:text-[16px] text-[14px] px-[24px]  md:text-[16px] lg:text-base xl:text-base 2xl:text-base rounded-full ${index === activeIndex ? 'bg-white text-[#00537F]' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.label}
            </BgSwitchBtn>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Merchandise
