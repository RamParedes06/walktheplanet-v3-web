export default function ContactSection() {
  return (
    <section className="w-full bg-[#333333] text-white px-6 md:px-12 py-16 relative">
      {/* Large background text - positioned absolutely to the entire section */}
      <div className="flex flex-col justify-center items-center absolute inset-0 overflow-hidden pointer-events-none h-[348px]">
        <div className="top-30 text-[150px] sm:text-[150px] md:text-[200px] lg:text-[290px] text-gray-600/30 font-medium absolute right-0 w-full">
          <div className="relative w-full h-[348px] overflow-hidden bg-[#333333]">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[21vw] leading-none text-gray-600/30 font-medium tracking-tight pointer-events-none -translate-x-[5vw]">
              ONTACT U
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="w-full relative text-[40px] md:text-[64px]">
        <div className="relative z-10">
          <h2 className="text-white font-medium">REACH US</h2>
          <h1 className="text-white font-bold mt-2 sm:text-[40px] md:text-[64px]">
            <span className="sm:hidden">INSTANTLY!</span>
            <span className="hidden sm:inline">INSTANTENOEUSLY!</span>
          </h1>
        </div>
      </div>

      {/* Contact Items */}
      <div className="space-y-8 mt-56">
        {/* Item 1 */}
        <div className="flex border-b border-gray-700 pb-8 gap-10">
          <div className="md:w-[100px] text-[18px]">01</div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="text-[20px] font-medium md:w-[400px]">
              <div className="flex flex-row md:flex-col gap-2">
                <div className="text-[16px] md:text-[20px]">For Travel</div>
                <div className="text-[16px] md:text-[20px]">
                  Agents and Partners
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-gray-400 text-[16px]">Email</div>
                <div className="text-white text-[16px] md:text-[20px]">
                  partners@walktheplanet.com
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:gap-20">
                <div>
                  <div className="text-gray-400 text-[16px]">Mobile</div>
                  <div className="text-white text-[16px] md:text-[20px]">
                    +63 917 100 6039
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-[16px]">Mobile</div>
                  <div className="text-white text-[16px] md:text-[20px]">
                    +63 945 568 5674
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex border-b border-gray-700 pb-8 gap-10">
          <div className="md:w-[100px] text-[18px]">02</div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="text-[20px] font-medium md:w-[400px]">
              <div className="flex flex-row md:flex-col gap-2">
                <div className="text-[16px] md:text-[20px]">
                  Airline Partnerships
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-gray-400 text-[16px]">Email</div>
                <div className="text-white text-[16px] md:text-[20px]">
                  airline.partners@walktheplanet.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex border-b border-gray-700 pb-8 gap-10">
          <div className="md:w-[100px] text-[18px]">03</div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="text-[20px] font-medium md:w-[400px]">
              <div className="flex flex-row md:flex-col gap-2">
                <div className="text-[16px] md:text-[20px]">M.I.C.E</div>
                <div className="text-[16px] md:text-[20px]">
                  Inquiry and Support
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-gray-400 text-[16px]">Email</div>
                <div className="text-white text-[16px] md:text-[20px]">
                  mice@walktheplanet.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex border-b border-gray-700 pb-8 gap-10">
          <div className="md:w-[100px] text-[18px]">04</div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="text-[20px] font-medium md:w-[400px]">
              <div className="flex flex-row md:flex-col gap-2">
                <div className="text-[16px] md:text-[20px]">EduTourism</div>
                <div className="text-[16px] md:text-[20px]">
                  Inquiry and Support
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-gray-400 text-[16px]">Email</div>
                <div className="text-white text-[16px] md:text-[20px]">
                  edutourism@walktheplanet.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex border-b border-gray-700 pb-8 gap-10">
          <div className="md:w-[100px] text-[18px]">05</div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="text-[20px] font-medium md:w-[400px]">
              <div className="flex flex-row md:flex-col gap-2">
                <div className="text-[16px] md:text-[20px]">B2B Corporate</div>
                <div className="text-[16px] md:text-[20px]">
                  WalkThePlanet Sales
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-gray-400 text-[16px]">Email</div>
                <div className="text-white text-[16px] md:text-[20px]">
                  corpsales@walktheplanet.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div className="flex border-b border-gray-700 pb-8 gap-10">
          <div className="md:w-[100px] text-[18px]">06</div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="text-[20px] font-medium md:w-[400px]">
              <div className="flex flex-row md:flex-col gap-2">
                <div className="text-[16px] md:text-[20px]">B2C Corporate</div>
                <div className="text-[16px] md:text-[20px]">
                  Inquiry and Support
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-gray-400 text-[16px]">Email</div>
                <div className="text-white text-[16px] md:text-[20px]">
                  customersupport@walktheplanet.com
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                <div>
                  <div className="text-gray-400 text-[16px]">Mobile</div>
                  <div className="text-white text-[16px] md:text-[20px]">
                    +63 917 137 9923
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-[16px]">Mobile</div>
                  <div className="text-white text-[16px] md:text-[20px]">
                    +63 945 168 7802
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-[16px]">Tel</div>
                  <div className="text-white text-[16px] md:text-[20px]">
                    +63 2 8559 0720
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 7 */}
        <div className="flex pb-8 gap-10">
          <div className="md:w-[100px] text-[18px]">07</div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="text-[20px] font-medium md:w-[400px]">
              <div className="flex flex-row md:flex-col gap-2">
                <div className="text-[16px] md:text-[20px]">
                  Marketing Collaboration
                </div>
                <div className="text-[16px] md:text-[20px]">
                  and Partnership
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-gray-400 text-[16px]">Email</div>
                <div className="text-white text-[16px] md:text-[20px]">
                  marketing@walktheplanet.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
