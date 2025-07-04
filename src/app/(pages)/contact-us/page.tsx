import ContactForm from "@/app/components/ContactForm";
import ContactSection from "@/app/components/ContactSection";
import FrequentlyAskedQuestion from "@/app/components/FrequentlyAskedQuestion";
import HeroSection from "@/app/components/HeroSection";
import LocationSection from "@/app/components/LocationSection";
import TravelGallery from "@/app/components/TravelGallery";
import TravelQuotation from "@/app/components/TravelQoutation";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/library/CorpoCTA";

import Footer from "../_components/Footer";
import CallToAction from "../corporate/_corporate/CallToAction";

const ContactPage = () => {
  return (
    <>
      <HeroSection />
      <TravelGallery />
      <ContactForm />
      <TravelQuotation />
      <FrequentlyAskedQuestion />
      <ContactSection />x
      <CallToAction
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        image6={image6}
        title="Got any travel plans in mind? We’re just one click away!"
        buttonLabel="Shop your travel needs here!"
      />
      <LocationSection />
      <Footer />
    </>
  );
};

export default ContactPage;
