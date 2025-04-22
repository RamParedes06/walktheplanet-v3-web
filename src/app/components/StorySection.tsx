"use client";

const StorySection = () => {
  return (
    <div className="w-full py-8 md:py-16 bg-white text-gray-800">
      {/* OUR STORY */}
      <div className="flex flex-col items-center text-center md:text-left md:items-center md:flex-row md:gap-12 px-6 py-8 md:h-[396px] md:px-[80px]">
        <h2 className="text-[40px] md:text-4xl font-bold md:font-extrabold text-[#00537F] mb-4 md:mb-0 md:w-1/3">
          OUR STORY
        </h2>
        <p className="text-base md:text-[32px] leading-relaxed md:w-4/6 md:px-10">
          Since 2022, we&apos;ve{" "}
          <span className="text-orange-500 font-semibold">
            thoughtfully crafted unique journeys
          </span>{" "}
          for individual and group travelers, connecting them to unforgettable
          experiences in the Philippines and worldwide.
        </p>
      </div>
      {/* OUR MISSION */}
      <div className="border-b-2 border-t-2 border-[#E0E0E0] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00537F] hover:to-[#297A55] hover:text-white bg-white text-gray-800 py-8 px-6 text-center md:text-left md:py-[112px] md:px-[80px]">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-2 md:gap-6">
          <div className="text-xl md:text-3xl font-semibold mb-2 md:mb-0 md:w-3/6">
            01
          </div>
          <div className="md:w-5/6">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">OUR MISSION</h3>
            <p className="text-base md:text-lg leading-relaxed">
              Accelerating digital innovation through unparalleled experiences,
              leaving positive travel footprints globally.
            </p>
          </div>
        </div>
      </div>
      {/* OUR VISION */}
      <div className="border-b-2 border-[#E0E0E0] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00537F] hover:to-[#297A55] hover:text-white bg-white text-gray-800 py-8 px-6 text-center md:text-left md:py-[112px] md:px-[80px]">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-2 md:gap-6">
          <div className="text-xl md:text-3xl font-semibold mb-2 md:mb-0 md:w-3/6">
            02
          </div>
          <div className="md:w-5/6">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">OUR VISION</h3>
            <p className="text-base md:text-lg leading-relaxed">
              To revolutionize socially responsible travel through technology
              that elevates the tourism world by connecting people and cultures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
