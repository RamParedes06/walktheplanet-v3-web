'use client'
import React from 'react'
import { motion } from 'motion/react'
import { LinkPreview } from './LinkPreview'

export function HoverTextAnimation() {
  return (
    <LinkPreview url="https://tours.walktheplanet.com/">
      <a target="_blank" href="https://tours.walktheplanet.com" className="text-[#006FA9] hover:underline italic">
        tours.walktheplanet.com
      </a>
    </LinkPreview>
  )
}
