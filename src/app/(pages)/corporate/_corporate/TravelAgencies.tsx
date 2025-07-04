import Image from 'next/image'

import Carousel from '@/app/(pages)/_components/Carousel'
import TextReveal from '@/app/(pages)/_components/TextReveal'
import illustration from '@/assets/svg/BGIllustration.svg'
import { CloudflareR2Storage } from '@/library/utils'

const images = [
  CloudflareR2Storage + '/corporate/travel-agencies/CBT1_ekkf7e.webp',
  CloudflareR2Storage + '/corporate/travel-agencies/CBT2_epa8vy.webp',
  CloudflareR2Storage + '/corporate/travel-agencies/CBT3_rnpic3.webp',
  CloudflareR2Storage + '/corporate/travel-agencies/CBT4_erjkln.webp',
  CloudflareR2Storage + '/corporate/travel-agencies/CBT5_eamboo.webp',
]

function TravelAgencies() {
  return (
    <div className="h-screen bg-white">
      <div className="max-[490px] relative overflow-hidden flex items-center" style={{ backgroundImage: `url(${illustration})` }}>
        <div className="p-20 w-full max-[490px]:p-0">
          <Image src={illustration} alt="" width={1200} className="absolute -top-145 -right-110 " />
          <div className="flex flex-col gap-2 max-[490px] max-[490px]:gap-5 px-4 py-10">
            <TextReveal>
              <p className="font-[900] text-[38px] md:text-[64px] max-[490px]font-extrabold text-[#14476F] font-satoshi  uppercase">Travel Agencies</p>
              <p className="text-black text-16px md:text-2xl max-[490px] ">
                Want to level up your agencys income? <br />
                Power your business by offering our
                <i>
                  <span className="font-semibold"> unique and curated travel packages</span>
                </i>
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
      <div className="h-[60%]">
        <Carousel images={images} />
      </div>
    </div>
  )
}

export default TravelAgencies
