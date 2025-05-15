'use client'
import travelOffers from '@/assets/images/travel_offers.webp'
import { DocumentSlides } from '@/library/DocumentSlides'
import { InternationalSlides } from '@/library/InternationalSlides'
import { LocalSlides } from '@/library/LocalSlides'
import { TravelSlides } from '@/library/TravelSlides'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import TravelCarousel from './TravelOffersCarousel'

const TravelOffersV2 = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    // update state based on window width
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    // Call once (initial state)
    handleResize()
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  //! Travel Offers Animation GSAP
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Only run the animation after the component is mounted
    if (mounted) {
      //! Cards travel offers
      const calculateSpacer = () => {
        // For larger screens, use larger spacing
        if (window.innerWidth >= 1200) {
          return 80 // 15% of viewport height on large screens
        }
        // For medium screens
        else if (window.innerWidth > 768) {
          return 50 // 12% of viewport height on medium screens
        }
        // For smaller screens and mobile devices
        else {
          return 60
        }
      }

      // Set the dynamic spacer
      const spacer = calculateSpacer()

      // const spacer = 50;
      const cards = gsap.utils.toArray<HTMLElement>('.card')

      // Position other cards off-screen initially
      gsap.set(cards.slice(1), {
        y: (index) => window.innerHeight / 2 + spacer * index,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.travel-section',
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=300%',
          markers: false,
        },
      })

      // Animate width AND position
      tl.fromTo(
        '.card:not(:first-child)',
        {
          y: (index) => window.innerHeight / 2 + spacer * index,
          width: '100%', // Starting width for non-first cards
          stagger: 0.5,
          backgroundColor: (index, element) => {
            // Get the original background color from inline style or computed style
            const bgColor = element.style.backgroundColor || window.getComputedStyle(element).backgroundColor
            return bgColor // Keep original background color initially
          },
        },
        {
          y: (index) => spacer * (index + 1),
          width: '100%', // Ending width - same as starting to maintain consistency
          backgroundColor: (index, element) => {
            // Get the original background color
            const bgColor = element.style.backgroundColor || window.getComputedStyle(element).backgroundColor

            // Create a more opaque version by adding alpha channel
            // This preserves the color but makes it more solid
            if (bgColor.includes('rgba')) {
              // If already has transparency, modify it
              return bgColor.replace(/rgba\((\d+,\s*\d+,\s*\d+),\s*[\d.]+\)/, 'rgba($1, 0.9)')
            } else if (bgColor.includes('rgb')) {
              // Convert rgb to rgba
              return bgColor.replace(/rgb/, 'rgba').replace(/\)/, ', 0.9)')
            }
            return bgColor
          },
          stagger: 0.5,
        }
      )

      // Clean up
      //   return () => {
      // 	ScrollTrigger.getAll().forEach((trigger) => {
      // 	  if (trigger.vars.id && trigger.vars.id.startsWith("desc-")) {
      // 		trigger.kill();
      // 	  }
      // 	});
      //   };
    }
  }, [mounted])
  return (
    <div>
      <div className="travel-section h-screen">
        {' '}
        {/*  parent container */}
        {/* Black overlay with low opacity */}
        <div className="absolute inset-0  bg-black opacity-30 h-screen"></div>
        <div
          className="travel-offers-container bg-cover bg-center bg-fixed h-screen"
          style={{
            backgroundImage: `url(${travelOffers.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="cards-parent h-[30vh] lg:h-[27vh] bg-cover bg-center flex justify-center items-center relative z-10">
            <div className="wrap marquee-container  mt-20 lg:mt-0 w-full overflow-hidden">
              <div className="marquee text-[32px] lg:text-8xl font-semibold text-white opacity-90">
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">{' OUR TRAVEL OFFERS '}</p>
                <span className="inline-block" style={{ width: '100px' }}></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">{' OUR TRAVEL OFFERS '}</p>
                <span className="inline-block" style={{ width: '100px' }}></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">{' OUR TRAVEL OFFERS '}</p>
                <span className="inline-block" style={{ width: '100px' }}></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">{' OUR TRAVEL OFFERS '}</p>
                <span className="inline-block  " style={{ width: '100px' }}></span>
                <p className="drop-shadow-xl inline-bloc text-[32px] lg:text-[64px] ">{' OUR TRAVEL OFFERS '}</p>
                <span className="inline-block" style={{ width: '100px' }}></span>
                <p className="drop-shadow-xl inline-block text-[32px] lg:text-[64px] ">{' OUR TRAVEL OFFERS '}</p>
              </div>
            </div>
          </div>

          <div className="cardss ">
            <div
              className="card "
              style={{
                backgroundColor: 'rgba(229, 241, 246, 0.9)',
                color: 'black',
                zIndex: 1,
              }}
            >
              <p className="satoshi font-medium text-md lg:text-xl p-5  lg:p-[32px_40px]">TRAVEL PACKAGE ESSENTIALS</p>
              <div className="slider-container relative mt-4 ">
                <TravelCarousel images={TravelSlides} height={isMobileView ? 212 : 314} />

                <div className="absolute top-0 left-20 max-[490px]:left-5 right-0 white-overlay  p-8 h-[212px] md:h-full  md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">GLOBAL DATA SIM</p>
                  <p className="text-black text-2xl -[16px] satoshi max-[490px]:text-[14px]">
                    One SIM for every destination.
                    <br /> Roam your way anytime, anywhere.
                  </p>

                  <button
                    className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                    onClick={() => (window.location.href = 'https://tours.walktheplanet.com/collections/global-data-sim')}
                  >
                    Get Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: 'rgba(254, 96, 0, 0.9)', zIndex: 2 }}>
              <p className="satoshi font-medium text-md lg:text-xl p-5 lg:p-[32px_40px]">LOCAL DESTINATIONS</p>

              <div className="slider-container relative ">
                <TravelCarousel images={LocalSlides} height={isMobileView ? 212 : 314} />

                <div className="absolute top-0 min-[1440px]:left-155 max-[490px]:left-5 min-[1200px]:left-125 right-0 white-overlay p-8 h-[212px] md:h-full md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">PALAWAN TOUR</p>
                  <p className="text-black text-2xl -[16px] w-full satoshi max-[490px]:text-[14px]">
                    The Philippines’ best-kept secrets.
                    <br /> Pack your bags and uncover your adventure.
                  </p>

                  <button
                    className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                    onClick={() => (window.location.href = 'https://tours.walktheplanet.com/collections/local-destinations')}
                  >
                    Get Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: 'rgba(51, 51, 51, 0.9)', zIndex: 3 }}>
              <p className="satoshi font-medium text-md lg:text-xl p-5 lg:p-[32px_40px]"> INTERNATIONAL DESTINATIONS</p>

              <div className="slider-container relative ">
                <TravelCarousel images={InternationalSlides} height={isMobileView ? 212 : 314} />
                <div className="absolute top-0 left-20 max-[490px]:left-5 right-0 white-overlay  p-8 h-[212px] md:h-full  md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">PARIS TOUR</p>
                  <p className="text-black text-2xl -[16px] satoshi max-[490px]:text-[14px]">
                    Sought-after global attractions.
                    <br />
                    Travel with us and see the world.
                  </p>

                  <button
                    className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                    onClick={() => (window.location.href = 'https://tours.walktheplanet.com/collections/international-destinations')}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card "
              style={{
                backgroundColor: 'rgba(0, 83, 127, 0.9)',
                zIndex: 4,
                position: 'relative',
                paddingBottom: '20px',
              }}
            >
              <p className="satoshi font-medium text-md lg:text-xl p-5 lg:p-[32px_40px]"> TRAVEL DOCUMENTATION </p>
              <div className="slider-container relative ">
                <TravelCarousel images={DocumentSlides} height={isMobileView ? 212 : 314} />

                <div className="absolute top-0 min-[1440px]:left-155 max-[490px]:left-5 min-[1200px]:left-125 right-0 white-overlay  p-8 h-[212px] md:h-full  md:p-16 bg-white max-w-[668px] max-[490px]:max-w-[300px] w-full  flex flex-col gap-4">
                  <p className="text-black text-3xl  satoshi font-bold max-[490px]:text-[16px]">VISA PROCESSING</p>
                  <p className="text-black text-2xl -[16px] satoshi max-[490px]:text-[14px]">
                    Visa processing and immigration requirements
                    <br /> handled with ease.
                  </p>
                  <button
                    onClick={() => (window.location.href = 'https://tours.walktheplanet.com/pages/contact')}
                    className="px-6 py-2 bg-[#006FA9] text-white rounded-full max-w-[228px] max-[490px]:max-w-[130px] cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-spacer lg:h-[200px] !h-[150px]"></div>
        </div>
      </div>
    </div>
  )
}

export default TravelOffersV2
