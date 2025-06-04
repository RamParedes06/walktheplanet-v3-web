import Image from "next/image";

export default function Travel() {
  return (
    <div className="relative w-full h-[1024px] overflow-hidden">
      <Image src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS}/about-us/tagline/tagline1_ega3lm.webp`} alt="Traveler pointing at the sky" fill className="object-cover" priority />
      <div className="absolute bottom-[10%] left-10 md:left-16">
        <h2 className="text-white text-3xl md:text-7xl font-bold tracking-wide">TRAVEL</h2>
        <h1 className="text-white text-6xl md:text-[200px] font-semibold tracking-wide leading-tight">SMARTER</h1>
      </div>
    </div>
  )
}
