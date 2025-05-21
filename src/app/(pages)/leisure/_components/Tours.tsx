'use client'
import { IllustrationManpowerSvg } from '@/assets/svg/IllustrationManpowerSvg'
import { TravelEssentialsImages } from '@/library/AllInProductsTravelEssentials'
import { LeisureToursImages } from '@/library/LeisureTours'
import { useEffect, useState } from 'react'
import TextReveal from '../../_components/TextReveal'
import { HoverTextAnimation } from './HoverTextAnimation'

interface ToursProps {
  productsVersion?: boolean
}
const Tours = ({ productsVersion = false }: ToursProps) => {
  const [isMobile, setIsMobile] = useState(false)

  // Create a duplicate array for looping
  const duplicatedImages = [...LeisureToursImages, ...LeisureToursImages]
  const duplicatedProductsImages = [...TravelEssentialsImages, ...TravelEssentialsImages]
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // continuous animation
  useEffect(() => {
    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    // cleanup / unmount
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full h-screen mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className={`relative h-screen flex flex-col items-center px-0 py-4 md:p-8 pb-0 bg-white`}>
        {/* Description */}
        <div className="relative h-[335px] w-full">
          {/* SVG First Overlay - Hidden on mobile */}

          {!isMobile ? (
            <div className="w-full">
              <div className="absolute left-[40%] top-[-300px] -rotate-12 w-full ">
                {/* <Image src={BackgroundSvg} alt="background" width={900} height={500} className="-rotate-35 w-full" /> */}
                <IllustrationManpowerSvg />
              </div>
              <div className="absolute left-[-20%] top-[-300px] -rotate-12 w-full ">
                {/* <Image src={BackgroundSvg} alt="background" width={900} height={500} className="-rotate-25 w-full" /> */}
                <IllustrationManpowerSvg />
              </div>
            </div>
          ) : (
            <div className="absolute left-[-25%] w-max top-[-380px] -rotate-35">
              {/* <Image src={BackgroundSvg} alt="background" width={900} height={500} /> */}
              <IllustrationManpowerSvg />
            </div>
          )}

          <TextReveal>
            <div className={`pt-[80px] md:pt-[54px] z-10 flex flex-col items-center`}>
              <h1 className={`text-[40px] md:text-[64px] font-semibold text-center text-[#14476F] mb-4`}>{productsVersion ? 'TRAVEL ESSENTIALS' : 'TOURS ONLINE BOOKING'}</h1>

              <p className={`text-base md:text-lg font-medium text-center text-black mb-1`}>
                {productsVersion ? (
                  <span className="md:text-[25px]">
                    Don&apos;t miss out on a travel necessity to <span className="font-semibold italic">take your journey to the next level!</span>
                  </span>
                ) : (
                  'Start your endless adventures by visiting'
                )}
              </p>
              {!productsVersion ? (
                <p className={`text-base md:text-lg font-medium text-center text-black mb-4`}>
                  your one-stop-shop at <HoverTextAnimation />
                </p>
              ) : (
                <></>
              )}
              {/* Button */}
              {!productsVersion && (
                <button
                  onClick={() => window.open('https://tours.walktheplanet.com/pages/contact', '_blank')}
                  className={`bg-[#00537F] hover:bg-[#00537F] text-white font-medium py-2 px-4 text-sm md:text-xl md:py-3 md:px-6 rounded-[24px]  mb-6 transition-colors duration-300 cursor-pointer`}
                >
                  Start exploring for your next getaway!
                </button>
              )}
            </div>
          </TextReveal>
        </div>

        <div className="flex-grow w-full overflow-hidden relative bg-white h-[90%]">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left and right gradients */}
            <div
              className="invisible md:visible absolute left-0 top-0 bottom-0 w-1/12 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, white, transparent)',
              }}
            ></div>
            <div
              className="invisible md:visible absolute right-0 top-0 bottom-0 w-1/12 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, white, transparent)',
              }}
            ></div>

            {/* Top curved white border */}
            <div
              className="absolute top-0 w-full h-[99px] z-10 bg-white max-[460px]:hidden"
              style={{
                borderBottomLeftRadius: '50% 100%',
                borderBottomRightRadius: '50% 100%',
              }}
            ></div>
            <div
              className="absolute top-0 w-full h-[75px] z-20 bg-white min-[491px]:hidden"
              style={{
                borderBottomLeftRadius: '100% 60%',
                borderBottomRightRadius: '100% 60%',
              }}
            ></div>

            {/* Bottom curved white border */}
            <div
              className="absolute bottom-0 w-full h-[50px] z-20 bg-white max-[490px]:hidden"
              style={{
                borderTopLeftRadius: '50% 100%',
                borderTopRightRadius: '50% 100%',
              }}
            ></div>
            <div
              className="absolute bottom-0 w-full h-[75px] z-20 bg-white min-[491px]:hidden"
              style={{
                borderTopLeftRadius: '90% 60%',
                borderTopRightRadius: '50% 60%',
              }}
            ></div>

            {/* Marquee container */}
            <div className="w-full h-full overflow-hidden">
              <div
                className="flex h-full animate-scroll"
                style={{
                  width: `${(productsVersion ? duplicatedProductsImages.length : duplicatedImages.length) * 2 * 21.33}%`, // doubled for infinite effect
                }}
              >
                {[
                  ...(productsVersion ? duplicatedProductsImages : duplicatedImages),
                  ...(productsVersion ? duplicatedProductsImages : duplicatedImages), // duplicate for infinite scroll
                ].map((image, index) => (
                  <div key={index} className="md:w-1/10 w-1/5 h-full flex-shrink-0 md:px-2 px-0">
                    <div
                      className="h-full w-full rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours
