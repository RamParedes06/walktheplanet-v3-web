import ContactForm from '@/app/components/ContactForm'

import Footer from '../_components/Footer'
import ContactSection from './components/ContactSection'
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion'
import LocationSection from './components/LocationSection'
import TravelGallery from './components/TravelGallery'
import TravelQuotation from './components/TravelQoutation'
import Hero from '@/app/(pages)/contact-us/components/Hero'

const bg = 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744005549/heroBanner_rx9i7u.webp'

const ContactPage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <Hero
        images={bg}
        title="CONTACT US"
        description={
          <div className="flex flex-col gap-3">
            <p>Every journey is unique and every experience matters.</p>
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
