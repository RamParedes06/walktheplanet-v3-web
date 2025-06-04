import LogoSvg from '@/assets/svg/WTPLogo.svg'
import ArrowUpRight from '@/assets/svg/arrow-up-right.svg'
import FacebookSvg from '@/assets/svg/facebook-btn.svg'
import FacebookColorSvg from '@/assets/svg/facebook-color-btn.svg'
import InstagramSvg from '@/assets/svg/instagram-btn.svg'
import InstagramColorSvg from '@/assets/svg/instagram-color-btn.svg'
import LinkedInSvg from '@/assets/svg/linked-in.svg'
import LinkedInColorSvg from '@/assets/svg/linkedin-color-btn.svg'
import TiktokSvg from '@/assets/svg/tiktok-btn.svg'
import TiktokColorSvg from '@/assets/svg/tiktok-color-btn.svg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import MenuTooltip from './MenuTooltip'

type ExpandableMenuProps = {
  toggleMenu: () => void
  headerRect: {
    top: number
    left: number
    width: number
    height: number
  }
}

// Define column structure
interface NavColumn {
  items: NavItem[]
}

// Define the navigation item type
interface NavItem {
  title: string
  href: string
  highlighted?: boolean
  active?: boolean
  image?: string
}

// Contact template  for individual emails and labels
function ContactTemplate({ forLabel, email }: { forLabel: string; email: string }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowTooltip(false)
      }
    }

    // Add event listener when tooltip is shown
    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showTooltip])

  return (
    <div className="mb-4 relative cursor-pointer" ref={containerRef}>
      <p className="text-gray-500 text-sm mb-1">{forLabel}</p>
      <p className="text-gray-700" onClick={() => setShowTooltip(true)}>
        {email}
      </p>
      <div
        className={`absolute left-0 top-full mt-2 z-10 transition-all duration-300 ease-in-out transform ${
          showTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        <MenuTooltip copyLink={email} />
      </div>
    </div>
  )
}
const ExpandableMenu = ({ toggleMenu, headerRect }: ExpandableMenuProps) => {
  const pathname = usePathname()
  const homeImage = 'https://wtp-assets.oldhat.xyz/menu/menu-home.webp'
  const productsImage = 'https://wtp-assets.oldhat.xyz/menu/menu-products.webp'
  const contactImage = 'https://wtp-assets.oldhat.xyz/menu/menu-contact.webp'

  const [isFacebookHovered, setIsFacebookHovered] = useState(false)
  const [isInstagramHovered, setIsInstagramHovered] = useState(false)
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false)
  const [isTiktokHovered, setIsTiktokHovered] = useState(false)
  const [imageDisplay, setImageDisplay] = useState<string>(homeImage)
  const [isContactUsHovered, setIsContactUsHovered] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [currentImage, setCurrentImage] = useState(imageDisplay)

  // Track changes to imageDisplay
  useEffect(() => {
    // When imageDisplay changes, trigger animation
    setIsChanging(true)

    // After a brief delay, update the actual image
    const timer = setTimeout(() => {
      setCurrentImage(imageDisplay)
      // Allow a small delay for the new image to load before fading in
      setTimeout(() => setIsChanging(false), 50)
    }, 300) // Duration of fade-out

    return () => clearTimeout(timer)
  }, [imageDisplay])

  const contacts = [
    { forLabel: 'For Partnership', email: 'partners@walktheplanet.com' },
    {
      forLabel: 'For Airline Partnership',
      email: 'airline.partners@walktheplanet.com',
    },
    { forLabel: 'For M.I.C.E', email: 'M.I.C.E@walktheplanet.com' },
    { forLabel: 'For EduTourism', email: 'edutourism@walktheplanet.com' },
    { forLabel: 'For Sales', email: 'corpsales@walktheplanet.com' },
    { forLabel: 'For Marketing', email: 'marketing@walktheplanet.com' },
    { forLabel: 'For Operations', email: 'customersupport@walktheplanet.com' },
  ]

  const leftColumn: NavColumn = {
    items: [
      {
        title: 'HOME',
        href: '/',
        highlighted: true,
        image: homeImage,
      },
      {
        title: 'LEISURE',
        href: '/leisure',
        highlighted: true,
        image: homeImage,
      },
      // { title: "B2C PORTAL", href: "#", image: homeImage },
      // { title: "LIVE SELLING", href: "#", image: homeImage },
      // { title: "TRAVELKADA", href: "#", image: homeImage },
      // { title: "OTHER PRODUCTS", href: "#", image: homeImage },
      {
        title: 'EDUTOURISM',
        href: '/edutourism',
        highlighted: true,
        image: 'https://wtp-assets.oldhat.xyz/menu/menu-edutourism.webp',
      },
      {
        title: 'M.I.C.E',
        href: '/mice',
        highlighted: true,
        image: 'https://wtp-assets.oldhat.xyz/menu/menu-mice.webp',
      },
      {
        title: 'CORP & BUSINESS',
        href: '/corporate',
        highlighted: true,
        image: 'https://wtp-assets.oldhat.xyz/menu/menu-corp.webp',
      },
      {
        title: 'TRAVEL STORIES',
        href: '/travel-stories',
        highlighted: true,
        image: 'https://wtp-assets.oldhat.xyz/menu/menu-success.webp',
      },
      {
        title: 'ALL-IN PRODUCTS',
        href: '/all-in-products',
        highlighted: true,
        image: productsImage,
      },
      {
        title: 'ABOUT US',
        href: '/about-us',
        highlighted: true,
        image: 'https://wtp-assets.oldhat.xyz/about-us/hero/about1_ircbzf.webp',
      },
    ],
  }

  // Right column navigation items
  // const rightColumn: NavColumn = {
  //   items: [
  //     {
  //       title: "ALL-IN PRODUCTS",
  //       href: "/all-in-products",
  //       highlighted: true,
  //     },
  // { title: "TRAVEL INSURANCE", href: "#" },
  // { title: "GROUP INCLUSIVE TOURS", href: "#" },
  // { title: "TOURS", href: "#" },
  // { title: "TRAVEL ESSENTIALS", href: "#" },
  // { title: "SPECIAL INTEREST", href: "#" },
  // { title: "MERCHANDISE", href: "#" },
  // { title: "INTERNSHIP PROGRAM", href: "#" },
  //     { title: "ABOUT US", href: "/about-us" },
  //   ],
  // };

  // Helper function to check if a menu item is active based on URL
  const isActive = (href: string): boolean => {
    // For home page
    if (href === '/' && pathname === '/') {
      return true
    }

    // For other pages, check if the pathname starts with the href
    // This ensures '/corporate' matches both '/corporate' and '/corporate/something'
    return href !== '/' && pathname === href
  }

  return (
    <motion.div
      className="fixed z-60"
      initial={{
        top: headerRect.top,
        left: headerRect.left,
        width: headerRect.width,
        height: headerRect.height,
        borderRadius: '9999px',
        backgroundColor: 'white',
      }}
      animate={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 0,
      }}
      exit={{
        top: headerRect.top,
        left: headerRect.left,
        width: headerRect.width,
        height: headerRect.height,
        borderRadius: '9999px',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Content container - Updated for mobile scrolling */}
      <motion.div
        className="w-screen h-screen !overflow-hidden "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.15, duration: 0.2 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.15 },
        }}
      >
        {/* Added overflow-y-auto to the outer container for mobile */}
        <div className="font-satoshi w-screen h-screen overflow-hidden z-30 bg-white lg:pb-[32px] pb-[120px] lg:p-[32px] py-0">
          {/* Header menu for mobile view  */}
          <div className=" justify-between flex lg:hidden p-6">
            {/* Logo in expanded view */}
            <div className="flex">
              <Image src={LogoSvg} onClick={() => window.location.replace('/')} className="cursor-pointer" alt="logo" width={100} height={46} />
            </div>
            {/* Close button */}
            <div className="cursor-pointer" onClick={toggleMenu}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Start of the  body (gray bg) */}
          <div className="w-full h-full px-[28px] py-[28px] bg-[#FAFAFA] lg:pb-0 pb-[15px]">
            <div className="w-full h-full max-w-[1280px] mx-auto flex flex-col  gap-[32px]">
              {/* Header of the menu */}
              <div className=" justify-between hidden lg:flex">
                {/* Logo in expanded view */}
                <div className="flex cursor-pointer">
                  <Image src={LogoSvg} onClick={() => window.location.replace('/')} alt="logo" width={206} height={96} />
                </div>
                {/* Close button */}
                <div className="cursor-pointer" onClick={toggleMenu}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Updated Body layout for mobile scrolling */}
              <div className="flex lg:gap-[48px]  overflow-y-auto h-full">
                {/* Image Section  */}
                <div className="relative !w-[600px] hidden lg:block ">
                  <Image
                    src={currentImage}
                    alt="logo"
                    width={600}
                    height={600}
                    className={` !w-[600px]  md:h-[90%] h-full object-cover absolute transition-all duration-500 ease-in-out ${isChanging ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}
                  />
                </div>

                {/* Updated with max-height and overflow for mobile */}
                <div className=" flex w-full flex-col gap-2 overflow-y-auto md:h-[90%] h-[95%] ">
                  {/* Menu content (three columns) */}
                  {/* Discover pages section  */}
                  <div className=" mb-5 ">
                    <p className="text-[#333333A6] font-semibold">DISCOVER PAGES</p>
                  </div>

                  <div className="justify-between flex flex-col h-full">
                    {/* Three columns section  */}
                    <div className="flex justify-around w-full md:flex-row flex-col  gap-6 md:gap-0">
                      {/* First Column */}

                      <div className="w-[50%] flex flex-col gap-5 ">
                        {leftColumn.items.map((item, index) => {
                          const active = isActive(item.href)
                          return (
                            <div key={`left-${index}`} className="relative group ">
                              <Link
                                href={item.href}
                                onMouseEnter={() => setImageDisplay(item.image ? item.image : '')}
                                className={`  text-base transition-all duration-200 hover:text-[#00537F] inline-flex items-center ${
                                  item.highlighted ? 'text-[#00537F] font-medium active:font-semibold' : 'text-gray-700 hover:text-[#333333] hover:font-medium active:font-medium'
                                } ${active ? 'underline' : 'no-underline group-hover:translate-x-6'}`}
                              >
                                {item.title}
                              </Link>

                              <div
                                className={`${
                                  pathname === item.href || item.active
                                    ? 'hidden'
                                    : 'absolute left-0 bottom-[25%] opacity-0 transform scale-75 translate-y-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
                                }`}
                              >
                                <Image
                                  src={ArrowUpRight}
                                  alt="Arrow Up Right"
                                  width={10}
                                  height={10}
                                  className={`${
                                    !item.highlighted
                                      ? 'brightness-75 sepia-100 hue-rotate-180' // Cobalt to black
                                      : ''
                                  }`}
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* All-in Products Section / Second Column */}
                      {/* <div className="w-full  flex flex-col gap-3">
                      {rightColumn.items.map((item, index) => {
                        const active = isActive(item.href);
                        return (
                          <div
                            key={`right-${index}`}
                            className="relative group"
                          >
                            <Link
                              onMouseEnter={() =>
                                setImageDisplay(productsImage)
                              }
                              href={item.href}
                              key={`right-${index}`}
                              className={`text-base transition-all duration-200 hover:text-[#00537F] inline-flex items-center ${
                                item.highlighted
                                  ? "text-[#00537F] font-medium active:font-semibold"
                                  : "text-gray-700 hover:text-[#333333] hover:font-medium active:font-medium"
                              } ${
                                active
                                  ? "underline"
                                  : "no-underline group-hover:translate-x-6"
                              }`}
                            >
                              {item.title}
                            </Link>
                            <div
                              className={`${
                                pathname === item.href || item.active
                                  ? "hidden"
                                  : "absolute left-0 bottom-[25%] opacity-0 transform scale-75 translate-y-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                              }`}
                            >
                              <Image
                                src={ArrowUpRight}
                                alt="Arrow Up Right"
                                width={10}
                                height={10}
                                className={`${
                                  !item.highlighted
                                    ? "brightness-75 sepia-100 hue-rotate-180"
                                    : ""
                                }`}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div> */}

                      {/* Contact Us Section / Third Column */}
                      <div className="w-full  flex flex-col ">
                        <div className="relative group">
                          <p
                            onClick={() => (window.location.href = '/contact-us')}
                            onMouseEnter={() => {
                              setIsContactUsHovered(true)
                              setImageDisplay(contactImage)
                            }}
                            onMouseLeave={() => setIsContactUsHovered(false)}
                            className={`mb-5 md:mb-0 active:font-semibold text-base cursor-pointer transition-all duration-200 text-[#00537F] font-medium hover:text-[#00537F] inline-flex items-center ${
                              pathname === '/contact-us' ? 'underline' : 'no-underline group-hover:translate-x-6'
                            }`}
                          >
                            CONTACT US
                          </p>
                          <div
                            className={`${
                              pathname === '/contact-us' || !isContactUsHovered
                                ? 'hidden'
                                : 'absolute left-0 bottom-[25%] opacity-0 transform scale-75 translate-y-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
                            }`}
                          >
                            <Image src={ArrowUpRight} alt="Arrow Up Right" width={10} height={10} />
                          </div>
                        </div>

                        {/* Third column (Contacts) */}
                        <div className="md:grid md:grid-cols-2 md:gap-4 md:w-full md:justify-between md:mt-5 ">
                          {contacts.map((contact, index) => (
                            <ContactTemplate key={index} forLabel={contact.forLabel} email={contact.email} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connect with us  */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between  md:mt-0">
                      <div className="flex flex-col gap-4 ">
                        <p className="text-[#333333A6] font-semibold">CONNECT WITH US</p>

                        <div className="flex gap-5">
                          {/* FACEBOOK BUTTON  */}
                          <div className="relative w-8 h-8">
                            {/* Base image */}
                            <Image
                              src={FacebookSvg}
                              width={32}
                              height={32}
                              alt="facebook-link"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsFacebookHovered(true)}
                              onMouseLeave={() => setIsFacebookHovered(false)}
                              style={{ opacity: isFacebookHovered ? 0 : 1 }}
                            />

                            {/* Colored image (appears on hover) */}
                            <Image
                              src={FacebookColorSvg}
                              width={32}
                              height={32}
                              alt="facebook-link-color"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsFacebookHovered(true)}
                              onMouseLeave={() => setIsFacebookHovered(false)}
                              style={{ opacity: isFacebookHovered ? 1 : 0 }}
                              onClick={() => window.open('https://www.facebook.com/walktheplanetinc', '_blank', 'noopener,noreferrer')}
                            />
                          </div>

                          {/* INSTAGRAM BUTTON  */}
                          <div className="relative w-8 h-8">
                            {/* Base image */}
                            <Image
                              src={InstagramSvg}
                              width={32}
                              height={32}
                              alt="instagram-link"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsInstagramHovered(true)}
                              onMouseLeave={() => setIsInstagramHovered(false)}
                              style={{ opacity: isInstagramHovered ? 0 : 1 }}
                            />

                            {/* Colored image (appears on hover) */}
                            <Image
                              src={InstagramColorSvg}
                              width={32}
                              height={32}
                              alt="instagram-link-color"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsInstagramHovered(true)}
                              onMouseLeave={() => setIsInstagramHovered(false)}
                              style={{ opacity: isInstagramHovered ? 1 : 0 }}
                              onClick={() => window.open('https://www.instagram.com/walktheplanetinc/', '_blank', 'noopener,noreferrer')}
                            />
                          </div>

                          {/* TIKTOK BUTTON  */}
                          <div className="relative w-8 h-8">
                            {/* Base image */}
                            <Image
                              src={TiktokSvg}
                              width={32}
                              height={32}
                              alt="tiktok-link"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsTiktokHovered(true)}
                              onMouseLeave={() => setIsTiktokHovered(false)}
                              style={{ opacity: isTiktokHovered ? 0 : 1 }}
                            />

                            {/* Colored image (appears on hover) */}
                            <Image
                              src={TiktokColorSvg}
                              width={32}
                              height={32}
                              alt="tiktok-link-color"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsTiktokHovered(true)}
                              onMouseLeave={() => setIsTiktokHovered(false)}
                              style={{ opacity: isTiktokHovered ? 1 : 0 }}
                              onClick={() => window.open('https://www.tiktok.com/@walktheplanetinc', '_blank', 'noopener,noreferrer')}
                            />
                          </div>

                          {/* LINKEDIN BUTTON  */}
                          <div className="relative w-8 h-8">
                            {/* Base image */}
                            <Image
                              src={LinkedInSvg}
                              width={32}
                              height={32}
                              alt="linkedin-link"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsLinkedInHovered(true)}
                              onMouseLeave={() => setIsLinkedInHovered(false)}
                              style={{ opacity: isLinkedInHovered ? 0 : 1 }}
                            />

                            {/* Colored image (appears on hover) */}
                            <Image
                              src={LinkedInColorSvg}
                              width={32}
                              height={32}
                              alt="linkedin-link-color"
                              className="cursor-pointer absolute transition-opacity duration-300"
                              onMouseEnter={() => setIsLinkedInHovered(true)}
                              onMouseLeave={() => setIsLinkedInHovered(false)}
                              style={{ opacity: isLinkedInHovered ? 1 : 0 }}
                              onClick={() => window.open('https://ph.linkedin.com/company/walktheplanet?trk=public_post_feed-actor-name', '_blank', 'noopener,noreferrer')}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end">
                        <div>
                          <p className="text-[#333333A6] font-medium">© 2025 WalkThePlanet INC.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ExpandableMenu
