import ContactForm from "@/app/(pages)/contact-us/components/ContactForm";
import ContactSection from "@/app/(pages)/contact-us/components/ContactSection";
import FrequentlyAskedQuestion from "@/app/(pages)/contact-us/components/FrequentlyAskedQuestion";
import HeroSection from "@/app/(pages)/contact-us/components/HeroSection";
import LocationSection from "@/app/(pages)/contact-us/components/LocationSection";
import TravelGallery from "@/app/(pages)/contact-us/components/TravelGallery";
import TravelQuotation from "@/app/(pages)/contact-us/components/TravelQoutation";
import { image1, image2, image3, image4, image5, image6 } from "@/library/CorpoCTA";

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
			<ContactSection />
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
