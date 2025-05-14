import React from "react";
import Image from "next/image";
import bg from "@/assets/svg/BGCTA.png";

interface CallToActionProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  title: string;
  title1?: string;
  buttonLabel: string;
}

function CallToAction({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  title,
  title1,
  buttonLabel,
}: CallToActionProps) {
  return (
    <div
      className="h-[30vh] md:h-[364px]  bg-white relative bg-no-repeat bg-right  max-[490px]:bg-center bg-contain  max-[490px]:bg-cover overflow-hidden "
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="overlay absolute top-0 left-0 right-0 bottom-0 ">
        <div className="relative h-full w-full flex flex-col gap-8  max-[490px]:gap-2 items-center justify-center z-2">
          <p className="text-base md:text-2xl text-[#FE6000] font-semibold font-generalSans  max-[490px]:p-5  max-[490px]:text-center whitespace-pre-line md:whitespace-normal">
            {title}
            <br />
            {title1}
          </p>
          <a href="/contact-us">
            <span className="cta-button px-4 py-3.5 bg-[#FE6000] rounded-full text-white font-semibold md:text-xl text-base">
              {buttonLabel}
            </span>
          </a>

          <Image
            src={image4}
            alt="image1"
            width={186}
            height={200}
            className="border-9 border-white shadow-xl absolute -top-45 right-25 rotate-15 z-3 transition-all ease-in-out hover:translate-y-40 hover:-translate-x-20 hover:scale-110 hover:z-5 max-[490px]:hidden"
          />
          <Image
            src={image5}
            alt="image2"
            width={186}
            height={200}
            className="border-9 overflow-hidden border-white shadow-xl absolute -top-25 right-5 rotate-25 z-2 transition-all ease-in-out hover:translate-y-40 hover:-translate-x-20 hover:scale-110 hover:z-5  max-[490px]:hidden"
          />
          <Image
            src={image6}
            alt="image3"
            width={186}
            height={200}
            className="border-9 border-white shadow-xl absolute -top-30 -right-20 rotate-30 z-1 transition-all ease-in-out hover:translate-y-40 hover:-translate-x-20 hover:scale-110 hover:z-5  max-[490px]:hidden"
          />
          <Image
            src={image1}
            alt="image3"
            width={186}
            height={200}
            className="border-9 border-white shadow-xl absolute top-40 -left-20 rotate-17 z-3 transition-all ease-in-out hover:-translate-y-20 hover:translate-x-20 hover:scale-110 hover:z-5  max-[490px]:hidden"
          />
          <Image
            src={image2}
            alt="image3"
            width={186}
            height={200}
            className="border-9 object-center border-white shadow-xl absolute top-60 left-4 rotate-23 z-2 transition-all ease-in-out hover:-translate-y-20 hover:translate-x-20 hover:scale-110 hover:z-5  max-[490px]:hidden"
          />
          <Image
            src={image3}
            alt="image3"
            width={186}
            height={200}
            className="border-9 border-white shadow-xl absolute top-60 left-30 rotate-26 z-1 transition-all ease-in-out hover:-translate-y-20 hover:translate-x-20 hover:scale-110 hover:z-5  max-[490px]:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
