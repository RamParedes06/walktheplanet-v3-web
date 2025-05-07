import React, { JSX } from "react";
import Image from "next/image";

import illustration from "@/assets/svg/BGIllustration.svg";
import TextReveal from "@/app/(pages)/_components/TextReveal";
import Carousel from "./Carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useIsMobile from "@/hooks/useIsMobile";

// ✅ Update this type
interface CarouselImage {
  url: string;
  title: string;
}

interface CarouselProps {
  title: JSX.Element | string;
  description: JSX.Element;
  images: CarouselImage[]; // updated type here
  backgroundImage?: string | StaticImport;
  version?: boolean;
}

function CarouselTitle({
  title,
  description,
  images,
  backgroundImage,
  version,
}: CarouselProps) {
  const isMobile = useIsMobile();
  return (
    <div className="h-screen bg-white overflow-hidden">
      <div
        className="h-[40%] max-[490px]:h-[45%] relative overflow-hidden flex items-start max-[490px]:bg-center"
        style={{ backgroundImage: `url(${illustration})` }}
      >
        <div className="p-20 w-full max-[490px]:p-0">
          {backgroundImage &&
            (isMobile ? (
              <Image
                src="https://res.cloudinary.com/dmxvasob7/image/upload/v1746611346/Frame_48098208_3_htlsct.png"
                alt="images"
                width={1024}
                height={200}
                className="absolute"
              />
            ) : (
              <Image
                src={backgroundImage}
                alt="image"
                width={1200}
                height={1200}
                className={
                  version
                    ? "absolute -top-50 -right-30 rotate-110"
                    : "absolute top-0 right-0"
                }
              />
            ))}
          <div className="flex flex-col gap-2 max-[490px]:px-5 max-[490px]:gap-5 mt-30 md:mt-0">
            <TextReveal>
              <div className="text-[64px] max-[490px]:text-[35px] font-extrabold text-[#14476F] font-satoshi uppercase">
                <span className="text-[40px] md:text-[64px]">{title}</span>
              </div>
              <div className="text-black text-2xl max-[490px]:text-[16px] ">
                {description}
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
      <div className="h-[60%] max-[490px]:h-[55%]">
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default CarouselTitle;
