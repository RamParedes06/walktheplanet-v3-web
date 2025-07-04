'use client'
import { useEffect, useRef, useState } from 'react'

import TextReveal from '@/app/(pages)/_components/TextReveal'
import background from '@/assets/svg/BGIllustrationManpower.svg'
import { CloudflareR2Storage } from '@/library/utils'
import Image from 'next/image'

const Manpower = () => {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const images = [
    CloudflareR2Storage + '/corporate/manpower/cabin-crew-air-hostess-working-airplane-airline-transportation-tourism-concept.webp',
    CloudflareR2Storage + '/corporate/manpower/confident-asian-male-security-guard-safeguarding-careers-ensuring-outdoor-protection-urb.webp',
    CloudflareR2Storage + '/corporate/manpower/Corporate%20%26%20Business%20Manpower%20Agencies%20and%20OFW%20Deployment%204.webp',
    CloudflareR2Storage + '/corporate/manpower/nurse-portrait-hospital.webp',
  ]

  useEffect(() => {
    if (!carouselRef.current) return

    const carousel = carouselRef.current

    if (isPaused) {
      carousel.style.animationPlayState = 'paused'
    } else {
      carousel.style.animationPlayState = 'running'
    }
  }, [isPaused])

  useEffect(() => {
    // Add animation keyframes dynamically
    const style = document.createElement('style')
    style.innerHTML = `
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% * ${images.length}));
          }
        }
      `
    document.head.appendChild(style)

    // Apply initial animation
    if (carouselRef.current) {
      carouselRef.current.style.animation = 'carousel 20s linear infinite'
    }

    return () => {
      document.head.removeChild(style)
    }
  }, [images.length])

  return (
    <div className="relative w-screen h-screen">
      {/* Background Images Container */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col sm:flex-row bg-white  overflow-hidden">
        {/* First Background Image */}
        <div className="w-full sm:w-[50%] h-auto sm:h-full lg:translate-x-90 translate-x-50">
          <Image src={background} alt="background" width={500} height={500} className="w-full h-full object-cover bg-fixed" />
        </div>

        {/* Second Background Image - Carousel Container */}
        <div className="w-full sm:w-[50%] h-full relative overflow-hidden">
          {/* Left-to-right gradient that stays fixed in container on desktop */}
          <div className="hidden lg:block absolute top-0 left-0 h-full w-70 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

          {/* Top-to-bottom gradient that stays fixed in container on mobile */}
          <div className="block lg:hidden absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>

          {/* Invisible overlay for hover detection that covers everything */}
          <div className="absolute inset-0 z-30 pointer-events-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={{ background: 'transparent' }}></div>

          {/* Carousel slider */}
          <div ref={carouselRef} className="flex h-full">
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0" style={{ width: '100%' }}>
                <Image width={1000} height={1000} alt={`Carousel Image ${index + 1}`} src={image} className="object-cover w-full h-full" priority={index < 2} />
              </div>
            ))}

            {/* Duplicate first few images forda infinite loop */}
            {images.slice(0, 2).map((image, index) => (
              <div key={`duplicate-${index}`} className="min-w-full h-full flex-shrink-0" style={{ width: '100%' }}>
                <Image width={1000} height={1000} alt={`Carousel Image ${index + 1}`} src={image} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay with Content */}
        <div className="absolute top-0 left-0 right-0 h-full z-10 flex ">
          {/* Content Container */}
          <div className="lg:max-w-[55%] py-[30px] px-[24px] lg:py-[112px] lg:px-[80px] h-full flex flex-col lg:justify-end justify-start">
            <TextReveal>
              <div>
                <p className="font-[900] lg:text-[64px] text-[30px] text-[#14476F] font-satoshi uppercase">Manpower agencies & OFW Deployment</p>
                <div className="text-black lg:text-2xl text-base font-generalSans lg:flex lg:flex-col lg:gap-5">
                  <p>Discover top talent and connect them with the best opportunities, locally and globally. </p>
                  <p>
                    <span className="font-semibold"> We help you navigate the world, </span>
                    seamlessly linking the right people with the right careers.
                  </p>
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Manpower
