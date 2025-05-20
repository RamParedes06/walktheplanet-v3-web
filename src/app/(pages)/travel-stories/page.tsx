import React from 'react'
import Testimonials from './_components/Testimonials'
import CallToAction from '../corporate/_corporate/CallToAction'
import { image1, image2, image3, image4, image5, image6 } from '@/library/CorpoCTA'
import Footer from '../_components/Footer'
import Hero from '../corporate/_corporate/Hero'
import { TravelStoriesHero, TravelStoriesHeroMobile } from '@/library/TravelStoriesHero'

const page = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <Hero
          gradient="bg-gradient-to-r from-[#14476F] via-[#00A9CE] to-[#FFC000]"
          images={TravelStoriesHero}
          title="TRAVEL STORIES"
          description={
            <div className="lg:space-y-10 space-y-5">
              <p className="font-normal lg:text-[24px] text-base">From dreamy getaways to epic adventures, we make travel dreams come true.</p>
              <p className="font-normal lg:text-[24px] text-base">See why our clients can&apos;t stop raving about their unforgettable journeys with WalkThePlanet!</p>
            </div>
          }
        />
      </div>
      {/* Mobile */}
      <div className="lg:hidden block">
        <Hero
          gradient="bg-gradient-to-r from-[#14476F] via-[#00A9CE] to-[#FFC000]"
          images={TravelStoriesHeroMobile}
          title="TRAVEL STORIES"
          description={
            <div className="lg:space-y-10 space-y-5">
              <p className="font-normal lg:text-[24px] text-base">From dreamy getaways to epic adventures, we make travel dreams come true.</p>
              <p className="font-normal lg:text-[24px] text-base">See why our clients can&apos;t stop raving about their unforgettable journeys with WalkThePlanet!</p>
            </div>
          }
        />
      </div>

      <Testimonials />
      <CallToAction
        url="/contact-us"
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        image6={image6}
        title={`Book with us.\nYour dream trip is just a click away!`}
        buttonLabel="Start your next adventure with WalkThePlanet"
      />
      <Footer />
    </>
  )
}

export default page
