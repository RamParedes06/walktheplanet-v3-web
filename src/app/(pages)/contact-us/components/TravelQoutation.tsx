import Image from "next/image";
import qoutationMobile from "@/assets/images/contact/Qoutation Mobile.png";
import qoutation from "@/assets/images/contact/Qoutation Section.png";

export default function TravelQuotation() {
  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={qoutation}
          alt="Tropical beach scene with cocktails"
          fill
          className="md:block hidden"
          priority
        />

        <Image
          src={qoutationMobile}
          alt="Tropical beach scene with cocktails"
          fill
          className="md:hidden object-fill opacity-90"
          priority
        />

        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#00537F] to-[#00537F00]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full flex-col md:flex-row md:justify-start ">
        <div className="w-full px-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-xl px-2">
            <h2 className="text-white text-[16px] md:text-2xl md:font-medium mb-4">
              For us to better provide a{" "}
              <span className="text-sky-300 font-medium italic">quotation</span>
              ,
              <br /> you may simply share the following details,
              <br /> we&apos;ll get back to you within two business days
            </h2>

            <div className="mt-8 space-y-2">
              <div className="flex items-start gap-6">
                <span className="text-white  text-[16px] md:text-2xl md:font-medium ">
                  01
                </span>
                <span className="text-white text-[16px] md:text-2xl">
                  Your desired travel service
                </span>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-white  text-[16px] md:text-2xl md:font-medium ">
                  02
                </span>
                <span className="text-white text-[16px] md:text-2xl">
                  Destination
                </span>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-white  text-[16px] md:text-2xl md:font-medium ">
                  03
                </span>
                <span className="text-white text-[16px] md:text-2xl">
                  Preferred travel dates
                </span>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-white  text-[16px] md:text-2xl md:font-medium ">
                  04
                </span>
                <span className="text-white text-[16px] md:text-2xl">
                  Number of travelers
                </span>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-white  text-[16px] md:text-2xl md:font-medium">
                  05
                </span>
                <span className="text-white text-[16px] md:text-2xl md:font-normal">
                  Preferred budget (if applicable)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
