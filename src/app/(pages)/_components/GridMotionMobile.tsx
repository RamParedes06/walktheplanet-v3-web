// import eligibility from "@/assets/images/EligibilitySection.png";
import { CloudflareR2Storage } from '@/library/utils'
import Image from "next/image";

function GridMotionMobile() {
  const images = [
    CloudflareR2Storage + '/homepage/eligibility/Card-2_zs4not.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card-1_twpap0.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card_ffs8g2.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card-1_twpap0.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card_ffs8g2.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card-3_ovtswt.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card_ffs8g2.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card-3_ovtswt.webp',
    CloudflareR2Storage + '/homepage/eligibility/Card_ffs8g2.webp',
  ]
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black min-[770px]:hidden overflow-hidden">
      <div className="absolute top-0 left-0 z-10 bg-gradient-to-t from-transparent via-[rgba(0,0,0,0)] via-[70%] to-[rgba(0,0,0,3)] h-full w-full"></div>
      <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] via-[70%] to-[rgba(0,0,0,3)] h-full w-full"></div>
      <div className="grid grid-cols-3 gap-4 scale-170 -rotate-6">
        {images.map((src, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
            <Image src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={1000} height={1000} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridMotionMobile;
