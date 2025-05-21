import ContactForm from '@/app/components/ContactForm'
import HeroSection from '@/app/(pages)/contact-us/components/HeroSection'
import Footer from '../_components/Footer'
import ContactSection from './components/ContactSection'
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion'
import LocationSection from './components/LocationSection'
import TravelGallery from './components/TravelGallery'
import TravelQuotation from './components/TravelQoutation'

const ContactPage = () => {
  return (
    <>
      <HeroSection />
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
