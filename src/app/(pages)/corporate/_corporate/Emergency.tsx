"use client";
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { Accordion } from "../../_components/Accordion";
import TextReveal from "../../_components/TextReveal";

interface AccordionItemData {
  id: number;
  number: string;
  title: string;
  content: string;
}

const Emergency = () => {
  // Memoize the emergency images array to prevent unnecessary re-renders
  const emergencyImages = useMemo(
    () => [
      'https://wtp-assets.oldhat.xyz/emergency/corporate-business-emergency-responsive.webp',
      'https://wtp-assets.oldhat.xyz/emergency/car-road.webp',
      'https://wtp-assets.oldhat.xyz/emergency/beautiful-girl-standing-airport.webp',
      'https://wtp-assets.oldhat.xyz/emergency/high-angle-view-woman-using-mobile-phone-table.webp',
      'https://wtp-assets.oldhat.xyz/emergency/portrait-male-security-guard-with-radio-station.webp',
    ],
    []
  )

  const accordionData: AccordionItemData[] = [
    {
      id: 0,
      number: '01',
      title: 'EMERGENCY RESPONSE',
      content: 'Protocols for pre-to-post travel safety.',
    },
    {
      id: 1,
      number: '02',
      title: 'HELICOPTER SERVICES',
      content: 'Provide emergency medical flights with advanced life support',
    },
    {
      id: 2,
      number: '03',
      title: 'CHARTERED FLIGHTS',
      content: 'Provide personalized and luxurious travel experience',
    },
    {
      id: 3,
      number: '04',
      title: 'ESTABLISHED SAFETY PARTNERSHIPS',
      content: 'To ensure responsible and well-prepared travel experiences.',
    },
    {
      id: 4,
      number: '05',
      title: 'PROTECTION AGENTS',
      content: 'Are provided to ensure your safety during corporate and business travels.',
    },
  ]

  const [openItem, setOpenItem] = useState<number | null>(0)
  const [slides, setSlides] = useState([{ id: 0, image: emergencyImages[0], position: 'current' }])
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle transitions when accordion changes
  useEffect(() => {
    if (openItem !== null) {
      // Don't do anything if this image is already showing
      const currentImageIndex = slides.findIndex((slide) => slide.id === openItem && slide.position === 'current')

      if (currentImageIndex === -1 && !isAnimating) {
        // Start animation
        setIsAnimating(true)

        // Add new slide (position it below the viewport initially)
        setSlides((prev) => [...prev, { id: openItem, image: emergencyImages[openItem], position: 'next' }])

        // Wait a moment for the new slide to be added to the DOM
        setTimeout(() => {
          // Move slides to their animation positions
          setSlides((prev) =>
            prev.map((slide) => {
              if (slide.position === 'current') return { ...slide, position: 'prev' }
              if (slide.position === 'next') return { ...slide, position: 'current' }
              return slide
            })
          )

          // After animation completes, clean up old slides
          setTimeout(() => {
            setSlides((prev) => prev.filter((slide) => slide.position !== 'prev'))
            setIsAnimating(false)
          }, 600)
        }, 50)
      }
    }
  }, [openItem, emergencyImages, slides, isAnimating])

  //   const toggleAccordion = (index: number) => {
  //     setOpenItem(openItem === index ? null : index);
  //   };

  const toggleAccordion = (index: number) => {
    // If tapping the same item, toggle it
    if (openItem === index) {
      setOpenItem(null)
      return
    }

    // Only allow toggle if not currently animating
    if (!isAnimating) {
      setOpenItem(index)
    }
  }

  // Helper function to get CSS classes based on slide position
  const getSlideClasses = (position: string) => {
    switch (position) {
      case 'prev':
        return 'transform -translate-y-full opacity-30 z-10'
      case 'current':
        return 'transform translate-y-0 opacity-100 z-20'
      case 'next':
        return 'transform translate-y-full opacity-30 z-10'
      default:
        return ''
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen">
      {/* Left side - Image with text overlay */}
      <div className="w-full  md:w-1/2 relative h-[400px] md:h-screen overflow-hidden bg-black">
        {/* Render all slides */}
        {slides.map((slide, index) => (
          <div key={`${slide.id}-${index}`} className={`absolute inset-0 transition-all duration-600 ease-out ${getSlideClasses(slide.position)}`}>
            <Image src={slide.image} alt="Emergency Background" fill style={{ objectFit: 'cover' }} priority />
          </div>
        ))}

        {/* Text overlay with high z-index to  stay on top */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-[112px_64px] w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-50 pointer-events-none">
          <TextReveal>
            <p className="text-white text-[20px] leading-relaxed md:text-2xl text-xl italic max-w-[590px] pb-10">
              We prioritize your safety, comfort, and confidentiality in every corporate and business travel arrangement to make your journeys smooth and worry-free
            </p>
          </TextReveal>
        </div>
      </div>

      {/* Right side - Accordion */}
      <div className="w-full md:w-1/2 relative order-1">
        {/* Mobile-only gradient background */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #FF7A00 0%, #599D6A 50%, #00A9CE 100%),
              linear-gradient(360deg, rgba(5, 18, 28, 0) 3.33%, rgba(10, 36, 114, 0.498536) 51.52%, #05121C 100%),
              url('https://wtp-assets.oldhat.xyz/reusable/Noise_jbbzkn.webp')
            `,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Desktop gradient background */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-900 to-teal-500"></div>

        {/* Content container */}
        <div className="relative h-full ">
          <div
            className="w-full h-full flex justify-center items-center bg-gradient-to-b from-black/60 via-black/20 to-transparent "
            style={{
              backgroundImage: `url('https://wtp-assets.oldhat.xyz/reusable/Noise_jbbzkn.webp')`,
            }}
          >
            <div className="md:py-8 lg:px-4 px-6 py-16 w-full max-w-2xl">
              {accordionData.map((item) => (
                <Accordion key={item.id} number={item.number} title={item.title} content={item.content} isOpen={openItem === item.id} toggleAccordion={() => toggleAccordion(item.id)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Emergency;
