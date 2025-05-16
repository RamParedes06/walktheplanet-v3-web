import React from 'react'

import Image from 'next/image'

import illustration from '@/assets/svg/BGIllustration.svg'
import TextReveal from '@/app/(pages)/_components/TextReveal'
import Carousel from '@/app/(pages)/_components/Carousel'

const images = [
  'http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%201.webp&version_id=null',
  'http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%202.webp&version_id=null',
  'http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%203.webp&version_id=null',
  'http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%204.webp&version_id=null',
  'http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%205.webp&version_id=null',
  'http://47.245.126.170:30085/api/v1/buckets/walktheplanet-assets/objects/download?preview=true&prefix=wtp-landing-page%2Fcorporate%2Fcarousel%2FCorporate%20%26%20Business%20Insurance%206.webp&version_id=null',
]

const bgDesktop = 'https://res.cloudinary.com/dmxvasob7/image/upload/v1747364618/Frame_48098208_6_ezu6mk.png'
const bgMobile = 'https://res.cloudinary.com/dmxvasob7/image/upload/v1747365110/Frame_48098208_1_z9ukxu.svg'

function Insurance() {
  return (
    <div className="h-screen bg-white">
      <div className="h-[332px] md:h-[430px]  relative overflow-hidden flex items-center">
        <div className="p-20 w-full max-[490px]:p-5">
          <Image src={bgDesktop} height={872} alt="" width={872} className="hidden md:block absolute -top-0 -right-0 " />
          <Image src={bgMobile} height={872} alt="" width={872} className="md:hidden block absolute -top-0 -right-0 " />
          <div className="flex flex-col gap-2 max-[490px]:p-0">
            <TextReveal>
              <p className="text-[64px] font-extrabold text-[#14476F] font-satoshi max-[490px]:text-[40px]">INSURANCE</p>
              <p className="text-black text-2xl  max-[490px]:text-[16px]">
                Your mission is to protect lives—ours is to
                <i>
                  <span className="font-semibold"> reward your dedication</span>
                </i>
                .
                <br /> We ensure your team enjoys
                <i>
                  <span className="font-semibold"> top-tier incentives </span>
                </i>
                while you
                <i>
                  <span className="font-semibold"> travel the world,</span>
                </i>
                <br /> making a difference every step of the way.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
      <div className="h-[60%">
        <Carousel images={images} />
      </div>
    </div>
  )
}

export default Insurance
