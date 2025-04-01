import Image from "next/image";
import img0 from "@/assets/svg/contact/bgIllustration.svg";
import img1 from "@/assets/images/contact/one.webp";
import img2 from "@/assets/images/contact/seven.webp";
import img3 from "@/assets/images/contact/eleven.webp";
import img4 from "@/assets/images/contact/twelve.webp";
import img5 from "@/assets/images/contact/five.webp";
import img6 from "@/assets/images/contact/six.webp";

export default function TravelGallery() {
  return (
    <div className="w-full h-[1300px] bg-[#F2F2F2] flex flex-col">
      {/* Top White Space */}
      <div className="h-[88px] bg-[#F2F2F2] flex-shrink-0"></div>

      {/* Top Row of Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-[400px]">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={img5}
            alt="Travelers with backpacks on a road with arms raised"
            width={533}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={img6}
            alt="Tropical resort with palm trees and swimming pool"
            width={533}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={img1}
            alt="Woman with straw hat near a waterfall"
            width={533}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Center Text with Background */}
      <div className="h-[400px] flex flex-col items-center justify-center px-4 text-center relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${img0.src})` }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-blue-800 leading-relaxed">
            <span className="font-semibold">At WalkThePlanet</span> we are
            dedicated to making your travel{" "}
            <span className="font-semibold">seamless</span> and{" "}
            <span className="font-semibold">memorable</span>.
          </p>
          <p className="text-lg md:text-xl text-blue-800 leading-relaxed mt-4">
            Whether it&apos;s a business trip or events, a luxury getaway, or a
            carefully planned itinerary,
          </p>
          <p className="text-lg md:text-xl text-blue-800 leading-relaxed mt-4">
            we are here to assist you every step of the way.
          </p>
        </div>
      </div>

      {/* Bottom Row of Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-[400px]">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={img4}
            alt="Business meeting with professionals in formal attire"
            width={533}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={img3}
            alt="View from wooden boat of limestone cliffs and turquoise water"
            width={533}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={img2}
            alt="Couple with luggage at airport or station"
            width={533}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom White Space */}
      <div className="h-[88px] bg-[#F2F2F2] flex-shrink-0"></div>
    </div>
  );
}
