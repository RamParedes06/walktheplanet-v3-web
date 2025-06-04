import { DirectionAwareHover } from '@/app/(pages)/_components/direction-aware-hover'
import ScrollReveal from '@/app/(pages)/_components/ScrollReveal'
import ScrollVelocity from '@/app/(pages)/_components/ScrollVelocity'
import immersive1 from '@/assets/images/immersive1.png'
import immersive2 from '@/assets/images/immersive2.png'
import tailor1 from '@/assets/images/tailor1.png'
import tailor2 from '@/assets/images/tailor2.png'
import unforgetable1 from '@/assets/images/unforgetable1.png'
import unforgetable2 from '@/assets/images/unforgetable2.png'
import React from 'react'

const cards = [
  {
    id: 1,
    title: 'UNFORGETTABLE JOURNEYS',
    description: 'We offer curated products for travelers to leave footprints on untouched attractions.',
    images: [unforgetable1, unforgetable2],
  },
  {
    id: 2,
    title: 'TAILOR-MADE EXPERIENCES',
    description: 'We customize trails of activities that enable tourists to bring home unforgettable memories.',
    images: [tailor1, tailor2],
  },
  {
    id: 3,
    title: 'IMMERSIVE COMMUNITY',
    description: 'We take steps with communities in promoting tours that preserve their cultural heritage.',
    images: [immersive1, immersive2],
  },
]

function Beliefs() {
  return (
    <div
      className="space-y-10 max-[480px]:hidden pt-30 bg-cover bg-center"
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_ASSETS}/homepage/our beliefs/Background_jbvryv.png')`,
      }}
    >
      <ScrollVelocity texts={['OUR BELIEFS']} className="custom-scroll-text" />
      <p className="text-center max-w-6xl mx-auto text-[#333333A6] satoshi">
        Your love for travel inspires the way for our passion to create unforgettable journeys.
        <br /> We craft tailor-made experiences in the Philippines and the world, immersing you in culture, diversity,
        <br /> and sustainability. Be part of a meaningful community.
        <br /> Let’s explore together. We walk the Planet!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1280px] mx-auto p-8 bg-[#F2F2F2] mb-15">
        {cards.map((card, index) => (
          <React.Fragment key={card.id}>
            {index === 0 && (
              <>
                <ScrollReveal rotateOnHover>
                  <div className="bg-[#FE6000] p-11 flex flex-col gap-8 h-full px-8">
                    <h3 className="text-[28px] font-bold text-white">{card.title}</h3>
                    <h6 className="font-medium text-[24px] text-white">{card.description}</h6>
                  </div>
                </ScrollReveal>
                <ScrollReveal className="overflow-hidden">
                  <DirectionAwareHover imageUrl={card.images[0]}>
                    <p className="text-[20px] font-bold">Quiet alleys, Timeless Charm</p>
                    <p>Step into a side of Venice few ever see</p>
                  </DirectionAwareHover>
                </ScrollReveal>
                <ScrollReveal>
                  <DirectionAwareHover imageUrl={card.images[1]}>
                    <p className="text-[20px] font-bold">Beyond the slopes</p>
                    <p>Experience Mayon’s raw beauty in secret locations</p>
                  </DirectionAwareHover>
                </ScrollReveal>
              </>
            )}
            {index === 1 && (
              <>
                <ScrollReveal className="overflow-hidden">
                  <DirectionAwareHover imageUrl={card.images[0]}>
                    <p className="text-[20px] font-bold">Glide through the skies</p>
                    <p>Adventure begins where the ground ends</p>
                  </DirectionAwareHover>
                </ScrollReveal>
                <ScrollReveal rotateOnHover>
                  <div className="bg-[#333333] p-11 flex flex-col gap-8 h-full px-8">
                    <h3 className="text-[28px] font-bold text-white">{card.title}</h3>
                    <h6 className="font-medium text-[24px] text-white">{card.description}</h6>
                  </div>
                </ScrollReveal>
                <ScrollReveal className="overflow-hidden">
                  <DirectionAwareHover imageUrl={card.images[1]}>
                    <p className="text-[20px] font-bold">Stride through scenic route</p>
                    <p>Uncover hidden gems one step at a time</p>
                  </DirectionAwareHover>
                </ScrollReveal>
              </>
            )}
            {index === 2 && (
              <>
                <ScrollReveal className="overflow-hidden">
                  <DirectionAwareHover imageUrl={card.images[0]}>
                    <p className="text-[20px] font-bold">Walk with indigenous wisdom</p>
                    <p>Connect with local artisans, farmers, and storytellers. </p>
                  </DirectionAwareHover>
                </ScrollReveal>
                <ScrollReveal className="overflow-hidden">
                  <DirectionAwareHover imageUrl={card.images[1]}>
                    <p className="text-[20px] font-bold">Beyond the tourist path</p>
                    <p>See the Philippines through its people’s eyes.</p>
                  </DirectionAwareHover>
                </ScrollReveal>
                <ScrollReveal rotateOnHover>
                  <div className="bg-[#14476F] p-11 flex flex-col gap-8 h-full px-8">
                    <h3 className="text-[28px] font-bold text-white">{card.title}</h3>
                    <h6 className="font-medium text-[24px]">{card.description}</h6>
                  </div>
                </ScrollReveal>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Beliefs
