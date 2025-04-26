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
    <div className="w-full min-h-auto bg-[#F2F2F2] flex flex-col py-6">
      <div className="h-[60px] bg-[#F2F2F2] flex-shrink-0"></div>
      <div className="flex flex-row flex-nowrap overflow-x-auto md:overflow-visible w-full gap-2 md:px-0">
        <div className="snap-start flex-shrink-0 w-[90%] max-w-[353px] h-[300px] md:w-1/3 md:max-w-none">
          <Image
            src={img5}
            alt="Travelers with backpacks on a road with arms raised"
            width={470}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="snap-start flex-shrink-0 w-[90%] max-w-[353px] h-[300px] md:w-1/3 md:max-w-none">
          <Image
            src={img6}
            alt="Travelers with backpacks on a road with arms raised"
            width={470}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="snap-start flex-shrink-0 w-[90%] max-w-[353px] h-[300px] md:w-1/3 md:max-w-none">
          <Image
            src={img1}
            alt="Travelers with backpacks on a road with arms raised"
            width={470}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* other content here */}

      <div className="h-[400px] flex flex-col items-center justify-center px-4 text-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${img0.src})` }}
        ></div>

        <div className="relative z-10">
          <p className="text-md md:text-xl text-[#00537F] leading-relaxed italic">
            At {""}
            <span className="font-semibold">WalkThePlanet</span> we are
            dedicated to making your travel{" "}
            <span className="font-semibold">seamless</span> and{" "}
            <span className="font-semibold">memorable</span>.
          </p>
          <p className="text-md md:text-xl text-[#00537F] leading-relaxed mt-4 italic">
            Whether it&apos;s a business trip or events, a luxury getaway, or a
            carefully planned itinerary,
          </p>
          <p className="text-md md:text-xl text-[#00537F] leading-relaxed mt-4 font-semibold italic">
            we are here to assist you every step of the way
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-nowrap overflow-x-auto md:overflow-visible w-full gap-2 md:px-0">
        <div className="snap-start flex-shrink-0 w-[90%] max-w-[353px] h-[300px] md:w-1/3 md:max-w-none">
          <Image
            src={img4}
            alt="Travelers with backpacks on a road with arms raised"
            width={470}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="snap-start flex-shrink-0 w-[90%] max-w-[353px] h-[300px] md:w-1/3 md:max-w-none">
          <Image
            src={img3}
            alt="Travelers with backpacks on a road with arms raised"
            width={470}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>{" "}
        <div className="snap-start flex-shrink-0 w-[90%] max-w-[353px] h-[300px] md:w-1/3 md:max-w-none">
          <Image
            src={img2}
            alt="Travelers with backpacks on a road with arms raised"
            width={470}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="h-[60px] bg-[#F2F2F2] flex-shrink-0"></div>
    </div>
  );
}
