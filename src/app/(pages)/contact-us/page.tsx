import ContactForm from "@/app/components/ContactForm";
import ContactSection from "@/app/components/ContactSection";
import FrequentlyAskedQuestion from "@/app/components/FrequentlyAskedQuestion";
import HeroSection from "@/app/components/HeroSection";
import LocationSection from "@/app/components/LocationSection";
import TravelGallery from "@/app/components/TravelGallery";
import TravelQuotation from "@/app/components/TravelQoutation";
import Footer from "../_components/Footer";

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
  );
};

export default ContactPage;
