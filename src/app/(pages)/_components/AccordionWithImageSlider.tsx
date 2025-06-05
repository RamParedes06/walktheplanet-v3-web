'use client'
import { CloudflareR2Storage } from '@/library/utils'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface AccordionItemData {
  id: number
  number: string
  title: string
  content: string
}

// Props for the Accordion component
interface AccordionProps {
  number: string
  title: string
  content: string
  isOpen: boolean
  toggleAccordion: () => void
}

// The Accordion component with updated styling
const Accordion: React.FC<AccordionProps> = ({ number, title, content, isOpen, toggleAccordion }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  return (
    <div className="border-b border-gray-200 border-opacity-30">
      <div onClick={toggleAccordion} className="flex justify-between items-center py-4 cursor-pointer">
        <div className="flex items-center font-generalSans  pb-5">
          <span className=" text-base md:text-xl  opacity-70 text-white  pr-4">{number}</span>
          <h3 className="font-semibold text-base md:text-2xl text-white">{title}</h3>
        </div>
        <button className="text-2xl focus:outline-none text-white">{isOpen ? '−' : '+'}</button>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 1000}px` : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="md:pl-9 pl-10 pb-5 text-white md:text-xl text-base">{content}</div>
      </div>
    </div>
  )
}

// The TextReveal component
interface TextRevealProps {
  children: React.ReactNode
}

const TextReveal: React.FC<TextRevealProps> = ({ children }) => {
  return <div className="opacity-100 transition-opacity duration-1000">{children}</div>
}

// Props for the main AccordionWithImageSlider component
interface AccordionWithImageSliderProps {
  images: string[]
  accordionItems: AccordionItemData[]
  captionText?: string
  leftSideClassName?: string
  rightSideClassName?: string
  textOverlayClassName?: string
}

const AccordionWithImageSlider: React.FC<AccordionWithImageSliderProps> = ({
  images,
  accordionItems,
  captionText = 'We prioritize your safety, comfort, and confidentiality in every arrangement to make your journeys smooth and worry-free',
  leftSideClassName = 'bg-black',
  textOverlayClassName = 'bg-gradient-to-t from-black/80 via-black/40 to-transparent',
}) => {
  const [openItem, setOpenItem] = useState<number | null>(0)
  const [slides, setSlides] = useState([{ id: 0, image: images[0], position: 'current' }])
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
        setSlides((prev) => [...prev, { id: openItem, image: images[openItem], position: 'next' }])

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
  }, [openItem, images, slides, isAnimating])

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
    <div className="flex flex-col md:flex-row w-full h-full md:h-screen">
      {/* Left side - Image with text overlay */}
      <div className={`w-full md:w-1/2 relative h-[428px] md:h-full overflow-hidden ${leftSideClassName}`}>
        {/* Render all slides */}
        {slides.map((slide, index) => (
          <div key={`${slide.id}-${index}`} className={`absolute inset-0 transition-all duration-600 ease-out ${getSlideClasses(slide.position)}`}>
            <Image src={slide.image} alt={`Slide ${slide.id}`} fill style={{ objectFit: 'cover' }} priority />
          </div>
        ))}

        {/* Text overlay with high z-index to stay on top */}
        {captionText && (
          <div className={`absolute bottom-0 left-0 p-6 md:p-12 lg:p-[112px_64px] w-full z-50 pointer-events-none ${textOverlayClassName}`}>
            <TextReveal>
              <p className="text-white leading-relaxed md:text-2xl text-xl italic max-w-[590px]">{captionText}</p>
            </TextReveal>
          </div>
        )}
      </div>

      {/* Right side - Accordion with teal-amber gradient background */}
      <div
        className={`w-full md:w-1/2 relative order-1`}
        style={{
          background: 'linear-gradient(90deg, #006FA9 0%, #599D6A 50%, #FE8840 100%), ' + 'linear-gradient(360deg, rgba(5, 18, 28, 0) 3.33%, rgba(20, 72, 113, 0.498536) 51.52%, #05121C 100%)',
        }}
      >
        {/* Gradient background using Tailwind classes */}
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `url('${CloudflareR2Storage}/reusable/Noise_jbbzkn.webp')`,
          }}
        ></div>

        {/* Content container */}
        <div className="relative h-full ">
          <div className="w-full h-full flex justify-center items-center bg-gradient-to-b from-black/60 via-black/20 to-transparent">
            <div className="md:py-8 lg:px-4 px-6 py-16 w-full max-w-2xl">
              {accordionItems.map((item) => (
                <Accordion key={item.id} number={item.number} title={item.title} content={item.content} isOpen={openItem === item.id} toggleAccordion={() => toggleAccordion(item.id)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionWithImageSlider
