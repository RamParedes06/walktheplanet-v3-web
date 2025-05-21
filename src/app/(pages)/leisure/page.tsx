import { LeisureImages, LeisureImagesMobile } from '@/library/LeisureHero'
import Footer from '../_components/Footer'
import Hero from '../corporate/_corporate/Hero'
import LiveSelling from './_components/LiveSelling'
import OnlineBooking from './_components/OnlineBooking'
import Tours from './_components/Tours'

const LeisurePage = () => {
  return (
    <div>
      {/* Section 1 - Hero  */}
      {/* Desktop */}
      <div className="hidden lg:block">
        <Hero
          images={LeisureImages}
          title="LEISURE"
          description={
            <div className="flex flex-col gap-3">
              <p>
                Whether you crave sun-drenched beaches, cultural adventures, or tranquil retreats, your <span className="text-[#7EE7FC]"> perfect escape starts here.</span>
              </p>
            </div>
          }
          gradient="bg-gradient-to-r from-[#FAAE19] via-[#198A6F] to-[#14476F]"
        />
      </div>

      <div className="lg:hidden">
        <Hero
          images={LeisureImagesMobile}
          title="LEISURE"
          description={
            <div className="flex flex-col gap-3">
              <p>
                Whether you crave sun-drenched beaches, cultural adventures, or tranquil retreats, your <span className="text-[#7EE7FC]"> perfect escape starts here.</span>
              </p>
            </div>
          }
          gradient="bg-gradient-to-r from-[#FAAE19] via-[#198A6F] to-[#14476F]"
        />
      </div>
      {/* Mobile */}
      {/* Section 2 - Online booking  */}
      <OnlineBooking />
      {/* Section 3 - Tiktok Live Selling  */}
      <LiveSelling />
      {/* Section 4 - Tours Online Booking  */}
      <Tours />
      {/* Section 5 - Footer  */}
      <Footer />
    </div>
  )
}

export default LeisurePage
