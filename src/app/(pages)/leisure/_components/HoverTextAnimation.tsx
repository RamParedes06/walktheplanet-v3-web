'use client'
import { LinkPreview } from './LinkPreview'

export function HoverTextAnimation() {
  return (
    <LinkPreview url="https://tours.walktheplanet.com/">
      <span className="text-[#006FA9] hover:underline italic">tours.walktheplanet.com</span>
    </LinkPreview>
  )
}
