'use client'
import MenuSvg from '@/assets/svg/MenuSvg'
import Image from 'next/image'
import React, { JSX, useCallback, useEffect, useRef, useState } from 'react'
import Logo from '@/assets/images/Logo.png'
import { AnimatePresence } from 'framer-motion'
import '../../../../styles/hero-horizontal-scroll.scss'
import Marquee from '../../_components/Marquee'
import TextReveal from '../../_components/TextReveal'
import Menu from '../../_components/Menu'

interface HeroProps {
  images: string[]
  title: string
  description?: JSX.Element
  gradient?: string
}

const Hero = ({ images, title, description, gradient = 'bg-gradient-to-r from-[#0A2472] via-[#00A9CE] to-[#FF7A00]' }: HeroProps) => {
  const corpImages = images

  const [currentImage, setCurrentImage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  //Check if the menu is visible
  const [isMenuVisible, setIsMenuVisible] = useState(true)

  // For fixing lint warning about useCallback
  const getNextIndex = useCallback((current: number) => (current === corpImages.length - 1 ? 0 : current + 1), [corpImages.length])

  const getPrevIndex = (current: number) => (current === 0 ? corpImages.length - 1 : current - 1)

  useEffect(() => {
    const handleNextImage = () => {
      if (isAnimating) return
      setDirection('next')
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentImage(getNextIndex(currentImage))
        setIsAnimating(false)
      }, 500)
    }

    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNextImage()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentImage, isAnimating, getNextIndex])

  // This function determines which class to apply to each image
  const getImageClasses = (index: number) => {
    // The visible image
    if (index === currentImage) {
      return isAnimating ? 'opacity-0' : 'opacity-100'
    }

    // Next image (always enters from right)
    if (direction === 'next' && index === getNextIndex(currentImage)) {
      return isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0'
    }

    // Previous image (we'll bring it from right too for consistency)
    if (direction === 'prev' && index === getPrevIndex(currentImage)) {
      return isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0'
    }

    // All other images - keep them at the right side
    return 'opacity-0'
  }

  //! For the full screen menu animation
  const [isOpenDesktop, setIsOpenDesktop] = useState(false)
  const [isOpenMobile, setIsOpenMobile] = useState(false)
  //! For Navigation Menu
  const headerRef = useRef<HTMLDivElement>(null)
  const headerRefMobile = useRef<HTMLDivElement>(null)
  const headerContainerRef = useRef<HTMLDivElement>(null)
  const headerContainerMobileRef = useRef<HTMLDivElement>(null)
  const [headerRect, setHeaderRect] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  const [headerRectMobile, setHeaderRectMobile] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  const toggleMenu = () => {
    if (!isOpenDesktop && headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect()
      setHeaderRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      })
    }
    setIsOpenDesktop(!isOpenDesktop)
  }

  const toggleMenuMobile = () => {
    if (!isOpenMobile && headerRefMobile.current) {
      const rect = headerRefMobile.current.getBoundingClientRect()
      setHeaderRectMobile({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      })
    }
    setIsOpenMobile(!isOpenMobile)
  }

  useEffect(() => {
    if (isOpenDesktop || isOpenMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpenDesktop, isOpenMobile])

  //! For hiding the menu header as it reaches the footer section

  // intersection observer for footer
  useEffect(() => {
    const footerElement = document.querySelector('footer')
    if (!footerElement) return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05, // trigger when 10% of the footer is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // hide menu when footer is visible, else show it
        setIsMenuVisible(!entry.isIntersecting)
      })
    }, observerOptions)

    observer.observe(footerElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  // apply visibility classes based the state of isMenuVisible!!
  useEffect(() => {
    if (headerContainerRef.current) {
      if (isMenuVisible) {
        headerContainerRef.current.classList.remove('opacity-0', 'pointer-events-none')
        headerContainerRef.current.classList.add('opacity-100')
      } else {
        headerContainerRef.current.classList.add('opacity-0', 'pointer-events-none')
        headerContainerRef.current.classList.remove('opacity-100')
      }
    }

    if (headerContainerMobileRef.current) {
      if (isMenuVisible) {
        headerContainerMobileRef.current.classList.remove('opacity-0', 'pointer-events-none')
        headerContainerMobileRef.current.classList.add('opacity-100')
      } else {
        headerContainerMobileRef.current.classList.add('opacity-0', 'pointer-events-none')
        headerContainerMobileRef.current.classList.remove('opacity-100')
      }
    }
  }, [isMenuVisible])

  return (
    <>
      <div ref={headerContainerRef} className="fixed right-[5%] bottom-[20%] z-50 hidden sm:hidden md:hidden lg:block transition-opacity duration-300">
        <div ref={headerRef} className={`bg-white flex items-center justify-between px-8 py-[18px] shadow-xl  rounded-full w-[300px] lg:w-[436px]  ${isOpenDesktop ? 'invisible' : 'visible'}`}>
          <Image src={Logo} onClick={() => window.location.replace('/')} className="cursor-pointer" alt="logo" width={70} height={50} />
          <div onClick={toggleMenu} className="cursor-pointer">
            <MenuSvg />
          </div>
        </div>
      </div>

      <AnimatePresence>{isOpenDesktop && <Menu toggleMenu={toggleMenu} headerRect={headerRect} />}</AnimatePresence>

      <div className="relative w-screen h-[90vh] md:h-screen">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${corpImages})` }}>
          {corpImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500 ${getImageClasses(index)}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}

          {/* Gradient overlay with responsive classes */}
          <div
            className="absolute inset-0 w-full h-full 
               bg-gradient-to-l from-transparent to-[rgba(18,60,140,0.4)] 
               lg:bg-gradient-to-l lg:from-transparent lg:from-[52.21%] lg:to-[rgba(18,60,140,0.4)] lg:to-[60.75%]"
          ></div>

          <div className="max-w-[600px] absolute bottom-[15%] left-[5%]">
            <TextReveal>
              <p className="font-satoshi lg:text-[64px] text-[40px] font-semibold max-[490px]:text-[35px]">{title}</p>
              <div className="lg:text-2xl text-base font-generalSans">{description}</div>
            </TextReveal>
          </div>

          <div className="absolute bottom-0 w-full h-[10vh]">
            <Marquee variant="corporateHero" gradient={gradient} />
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className=" w-full relative overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto flex justify-between">
          <div className="lg:hidden">
            {/* Logo Menu */}
            {/* Header - only visible when not animating */}
            <div ref={headerContainerMobileRef} className="fixed z-99 top-[70px]  w-full flex items-center justify-center transition-opacity duration-300">
              {/* Header - only visible when menu is closed */}
              <div ref={headerRefMobile} className={`flex items-center justify-between px-4  py-3 rounded-full w-[300px] lg:w-[436px] bg-white ${isOpenMobile ? 'invisible' : 'visible'}`}>
                <Image src={Logo} alt="logo" width={70} height={50} />
                <div onClick={toggleMenuMobile} className="cursor-pointer">
                  <MenuSvg />
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* Menu Mobile View*/}
            <AnimatePresence>{isOpenMobile && <Menu toggleMenu={toggleMenuMobile} headerRect={headerRectMobile} />}</AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
