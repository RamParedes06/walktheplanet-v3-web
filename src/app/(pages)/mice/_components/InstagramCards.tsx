'use client'
import { IgOpportunities } from '@/library/IgOpportunities'
import { CloudflareR2Storage } from '@/library/utils'
import { useEffect, useState } from 'react'
import CarouselItem from './CarouselItem'

const bg = CloudflareR2Storage + '/mice/Desktop/Value%20Propositions/Background_ab0byk.png'
const overlay = CloudflareR2Storage + '/mice/Desktop/Value%20Propositions/Letter_Background_sot3ir.png'

function InstagramCards() {
  // Desktop State
  const [activeSetIndex, setActiveSetIndex] = useState(0)
  const [completedSets, setCompletedSets] = useState(IgOpportunities.map(() => false))

  // Mobile State
  const [activeSetIndexMobile, setActiveSetIndexMobile] = useState(0)
  const [completedSetsMobile, setCompletedSetsMobile] = useState(IgOpportunities.map(() => false))

  // Force completion flags
  const [forceCompleteMobile, setForceCompleteMobile] = useState(false)
  const [showLastSlideMobile, setShowLastSlideMobile] = useState(false)

  // Desktop - Handle set activation
  const handleSetActivation = (index: number, reason: string | null | undefined) => {
    if (reason === 'completed') {
      // Auto-advance to the next set when current set completes
      const nextSetIndex = (activeSetIndex + 1) % IgOpportunities.length

      // Mark current set as completed
      const newCompletedSets = [...completedSets]
      newCompletedSets[activeSetIndex] = true
      setCompletedSets(newCompletedSets)

      // Activate the next set
      setActiveSetIndex(nextSetIndex)
    } else if (index !== activeSetIndex) {
      // Manual selection of a different set
      const newCompletedSets = [...completedSets]

      // Key change: If jumping ahead, mark all cards in between as completed
      if (index > activeSetIndex) {
        // Mark all cards from current to selected (exclusive) as completed
        for (let i = activeSetIndex; i < index; i++) {
          newCompletedSets[i] = true
        }
      }

      setCompletedSets(newCompletedSets)
      setActiveSetIndex(index)
    }
  }

  // Check if all sets are completed and reset if needed
  useEffect(() => {
    const allCompleted = completedSets.every((isCompleted) => isCompleted)
    if (allCompleted) {
      // Reset the component to start over without user interaction
      const timer = setTimeout(() => {
        setCompletedSets(IgOpportunities.map(() => false))
        setActiveSetIndex(0)
      }, 1000) // 1 second delay before restarting

      return () => clearTimeout(timer)
    }
  }, [completedSets])

  // Mobile - Handle set activation
  const handleSetActivationMobile = (index: number, reason: string | null | undefined) => {
    console.log('Mobile activation called with:', index, reason)

    // Safety check
    if (index < 0 || index >= IgOpportunities.length) {
      console.error('Invalid index:', index)
      return
    }

    // Handle automatic completion from within the card
    if (reason === 'completed') {
      // Mark the current card as completed
      const newCompletedSetsMobile = [...completedSetsMobile]
      newCompletedSetsMobile[activeSetIndexMobile] = true
      setCompletedSetsMobile(newCompletedSetsMobile)

      // Reset the force complete flag
      setForceCompleteMobile(false)

      // Auto-advance to next card if available
      const nextIndex = activeSetIndexMobile + 1
      if (nextIndex < IgOpportunities.length) {
        setActiveSetIndexMobile(nextIndex)
      }
    }
  }

  // Mobile - Mark a card as completed
  const markCardAsCompleted = (index: number) => {
    if (index >= 0 && index < IgOpportunities.length) {
      const newCompletedSetsMobile = [...completedSetsMobile]
      newCompletedSetsMobile[index] = true
      setCompletedSetsMobile(newCompletedSetsMobile)
    }
  }

  // Mobile - Next button handler
  const handleNext = () => {
    if (activeSetIndexMobile < IgOpportunities.length - 1) {
      // First, force complete all slides in the current card
      setForceCompleteMobile(true)

      // Mark current card as fully completed
      markCardAsCompleted(activeSetIndexMobile)

      // Reset show last slide flag
      setShowLastSlideMobile(false)

      // Use setTimeout to ensure state updates before advancing
      setTimeout(() => {
        // Navigate to next card
        setActiveSetIndexMobile(activeSetIndexMobile + 1)

        // Reset force complete flag after navigation
        setForceCompleteMobile(false)
      }, 50)
    }
  }

  // Mobile - Prev button handler
  const handlePrev = () => {
    if (activeSetIndexMobile > 0) {
      // Navigate to previous card
      const prevIndex = activeSetIndexMobile - 1

      // Mark previous card as completed
      markCardAsCompleted(prevIndex)

      // Set flag to show the last slide of the previous card
      setShowLastSlideMobile(true)

      // Navigate to previous card
      setActiveSetIndexMobile(prevIndex)
    }
  }

  return (
    <div className="h-screen relative">
      {/* Background elements */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-white opacity-40 z-10" />
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 36.35%, rgba(51, 51, 51, 0.3) 68.16%, rgba(0, 0, 0, 1) 100%), 
                            linear-gradient(180deg, #006FA9 0%, rgba(255, 175, 128, 0.5) 50%, rgba(0, 83, 127, 0) 100%)`,
        }}
      ></div>

      {/* Main content */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${overlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-full flex flex-col justify-center items-center gap-10">
          <p className="flex flex-col gap-2 lg:gap-0 text-left lg:text-center italic text-base font-generalSans font-medium lg:text-2xl max-w-[1280px] lg:px-8 px-[20px]">
            <span> We view each corporate occasion as a crucial opportunity for your organization to reach its goals.</span>

            <span>
              From event management to travel arrangements, <br /> we craft unforgettable experiences that help you achieve your desired results
            </span>
          </p>

          {/* Desktop View - Multiple Cards */}
          <div className="lg:flex md:flex gap-8 lg:w-[80%] w-[100%] hidden px-[5%]">
            {IgOpportunities.map((set, index) => (
              <div className="w-full" key={set.id}>
                <CarouselItem
                  set={set}
                  isActive={index === activeSetIndex}
                  isCompleted={completedSets[index]}
                  onActivate={(reason) => handleSetActivation(index, reason)}
                  forceCompleteAll={false}
                  showLastSlide={false}
                />
              </div>
            ))}
          </div>

          {/* Mobile View - Single Card */}
          <div className="relative w-[90%] mx-auto">
            <div className="lg:hidden md:hidden">
              {/* Important: Only render the active card for mobile */}
              <div className="w-full">
                <CarouselItem
                  set={IgOpportunities[activeSetIndexMobile]}
                  isActive={true} // Always active since we only show one
                  isCompleted={completedSetsMobile[activeSetIndexMobile]}
                  onActivate={(reason) => handleSetActivationMobile(activeSetIndexMobile, reason)}
                  forceCompleteAll={forceCompleteMobile}
                  showLastSlide={showLastSlideMobile}
                />
              </div>

              <div className="flex justify-end space-x-2 mt-5">
                <button
                  onClick={handlePrev}
                  className={`text-white px-4 py-1 rounded-md ${activeSetIndexMobile === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/50'}`}
                  disabled={activeSetIndexMobile === 0}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className={`text-white px-4 py-1 rounded-md ${activeSetIndexMobile === IgOpportunities.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/50'}`}
                  disabled={activeSetIndexMobile === IgOpportunities.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramCards
