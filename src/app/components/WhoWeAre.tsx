import Image from 'next/image'
import image01 from '@/assets/images/about/Image 01.png'
import image02 from '@/assets/images/about/Image 02.png'
import image03 from '@/assets/images/about/Image 03.png'
import bg from '@/assets/images/about/BGIllustration.svg'
import bgMobile from '@/assets/images/about/g10.png'

export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col w-full max-w-full mx-auto pt-5 md:pt-10 bg-white">
      <div className="relative bg-white">
        {/* Top Images */}
        <div className="flex w-full h-[500px] md:h-[500px] gap-1">
          {/* Mobile: show only first image */}
          <div className="relative w-full md:hidden">
            <Image src={image01} alt="People kayaking in orange life vests" fill className="object-cover" />
          </div>

          {/* Desktop: show 3 images side-by-side */}
          <div className="hidden md:flex w-full gap-1">
            <div className="relative w-1/3">
              <Image src={image01} alt="People kayaking in orange life vests" fill className="object-cover" />
            </div>
            <div className="relative w-1/2">
              <Image src={image02} alt="Group photo at an event" fill className="object-cover" />
            </div>
            <div className="relative w-1/3">
              <Image src={image03} alt="Person rock climbing on indoor wall" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 -bottom-5 md:-bottom-15 flex items-end justify-center pointer-events-none">
          <h2 className="text-[45px] md:text-[150px] font-bold text-white tracking-[0.03em] text-center uppercase">who we are?</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="relative py-[64px] md:py-[112px] px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-start  italic">
          <p className="text-[16px] md:text-[24px] text-gray-800 leading-relaxed mb-4">
            <span className="font-semibold">WalkThePlanet</span> is a startup
            <span className="font-semibold"> travel agency </span>
            that meticulously curates <span className="font-semibold">accessible,</span>
          </p>

          <p className="text-[16px] md:text-[24px] text-gray-800 leading-relaxed">
            <span className="font-semibold">hassle-free, </span> and <span className="font-semibold">exciting local and international travel and tour packages </span>tailored to fit{' '}
            <span className="font-semibold">every budget, style, and pace.</span>
          </p>
          <br />
          <p className="text-[16px] md:text-[24px] text-gray-800 leading-relaxed">
            Turning travel dreams into reality since <span className="font-semibold">2022, </span> we’re dedicated to{' '}
            <span className="font-semibold">connecting travelers to unforgettable, once-in-a-lifetime experiences </span> both in the Philippines and around the world.
          </p>
          <br />
          <p className="text-[16px] md:text-[24px] text-gray-800 leading-relaxed">
            <span className="font-semibold">Life is short. The world is calling. Let WalkThePlanet take you on your next dream trip NOW!</span>
          </p>
        </div>

        {/* Background Illustration */}
        <div className="absolute bottom-0 right-0 w-full h-full md:w-full md:h-full pointer-events-none opacity-20">
          <Image src={bg} alt="Travel-themed background illustration" fill className="md:object-right md:object-contain hidden md:block" />

          <Image src={bgMobile} alt="Travel-themed background illustration" fill className="object-right object-cover md:hidden" />
        </div>
      </div>
    </div>
  )
}
