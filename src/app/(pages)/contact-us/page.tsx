import ContactForm from '@/app/components/ContactForm'

import Hero from '@/app/(pages)/contact-us/components/Hero'
import Footer from '../_components/Footer'
import ContactSection from './components/ContactSection'
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion'
import LocationSection from './components/LocationSection'
import TravelGallery from './components/TravelGallery'
import TravelQuotation from './components/TravelQoutation'

const bg = process.env.NEXT_PUBLIC_ASSETS + '/contact/heroBanner_rx9i7u.webp'

const ContactPage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <Hero
        images={bg}
        title="Contact Us"
        description={
          <div className="flex flex-col gap-3">
            <p>Your journey is unique and your experience matters.</p>
          </div>
        }
        gradient="bg-gradient-to-r from-[#FAAE19] via-[#198A6F] to-[#14476F]"
      />
      <TravelGallery />
      <ContactForm />
      <TravelQuotation />
      <FrequentlyAskedQuestion />
      <ContactSection />
      <LocationSection />
      <Footer />
    </>
  )
}

export default ContactPage
