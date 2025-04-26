import Image from "next/image";
import Link from "next/link";

export default function TravelBanner() {
  return (
    <div className="relative w-full h-[364px] py-12 px-4 overflow-hidden bg-white border-t border-b border-blue-200">
      {/* Background pattern - map/travel outline */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/placeholder.svg?height=400&width=1400"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Top right photos - 2 photos */}
      <div className="absolute top-0 right-0 transform -rotate-2 z-20">
        <div className="relative w-40 h-28 md:w-48 md:h-32 bg-white p-1 shadow-md">
          <Image
            src="/placeholder.svg?height=150&width=200"
            alt="Woman with camera and hat"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute top-0 right-32 transform rotate-2 z-10">
        <div className="relative w-40 h-28 md:w-48 md:h-32 bg-white p-1 shadow-md">
          <Image
            src="/placeholder.svg?height=150&width=200"
            alt="Person hiking on rocks"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom left photos - 3 photos in staggered arrangement */}
      <div className="absolute bottom-0 left-0 transform rotate-2 z-20">
        <div className="relative w-40 h-28 md:w-48 md:h-32 bg-white p-1 shadow-md">
          <Image
            src="/placeholder.svg?height=150&width=200"
            alt="Pool resort with lounge chairs"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-32 transform -rotate-2 z-10">
        <div className="relative w-40 h-28 md:w-48 md:h-32 bg-white p-1 shadow-md">
          <Image
            src="/placeholder.svg?height=150&width=200"
            alt="Safari landscape view"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-64 transform rotate-1 z-30">
        <div className="relative w-40 h-28 md:w-48 md:h-32 bg-white p-1 shadow-md">
          <Image
            src="/placeholder.svg?height=150&width=200"
            alt="Person with hat on safari"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto text-center relative z-10 py-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-500 mb-8">
          Got any travel plans in mind? We&apos;re just one click away!
        </h2>

        <Link
          href="/shop"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200"
        >
          Shop your travel needs here!
        </Link>
      </div>
    </div>
  );
}
