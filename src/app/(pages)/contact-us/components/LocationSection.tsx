import Link from "next/link";
import Image from "next/image";

import map from "@/assets/images/contact/BgMap.webp";

export default function LocationSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={map}
          alt="Map of our location"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16 max-w-xl">
        <h2 className="text-white text-lg font-semibold mb-4">
          You may visit us at
        </h2>

        <p className="text-white text-lg mb-8 leading-relaxed">
          1803-04 Philippine Stock Exchange Tower, 28th Street corner 5th
          Avenue, Bonifacio Global City, Taguig City, Metro Manila, Philippines,
          1634
        </p>

        <h2 className="text-white text-lg font-semibold mb-4">
          Operating hours
        </h2>

        <p className="text-white text-lg mb-10 leading-relaxed">
          Mondays - Fridays, 9:00 AM - 6:00 PM
        </p>

        <Link
          href="https://maps.google.com/?q=Philippine+Stock+Exchange+Tower+Bonifacio+Global+City"
          target="_blank"
          className="inline-block border-2 border-white text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 hover:bg-white/10 w-fit"
        >
          View us in Google Map!
        </Link>
      </div>
    </section>
  );
}
