import Image from 'next/image'

import Carousel from '@/app/(pages)/_components/Carousel'
import TextReveal from '@/app/(pages)/_components/TextReveal'
import illustration from '@/assets/svg/BGIllustration.svg'

const images = [
  process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/corporate/corporate-insurance/Corporate%20%26%20Business%20Insurance%201.webp',
  process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/corporate/corporate-insurance/Corporate%20%26%20Business%20Insurance%202.webp',
  process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/corporate/corporate-insurance/Corporate%20%26%20Business%20Insurance%203.webp',
  process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/corporate/corporate-insurance/Corporate%20%26%20Business%20Insurance%204.webp',
  process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/corporate/corporate-insurance/Corporate%20%26%20Business%20Insurance%205.webp',
  process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/corporate/corporate-insurance/Corporate%20%26%20Business%20Insurance%206.webp',
]

function Insurance() {
  return (
    <div className="h-screen bg-white">
      <div className="h-[40%]  max-[490px]:h-[30%] relative overflow-hidden flex items-center" style={{ backgroundImage: `url(${illustration})` }}>
        <div className="p-20 w-full max-[490px]:p-5">
          <Image src={illustration} alt="" width={1200} className="absolute -top-145 -right-110 " />
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
