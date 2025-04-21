import ContactForm from "@/app/components/ContactForm";
import HeroSection from "@/app/components/HeroSection";
import Footer from "../_components/Footer";
import { image1, image2, image3, image4, image5, image6 } from "@/library/CorpoCTA";
import CallToAction from "../corporate/_corporate/CallToAction";
import ContactSection from "./components/ContactSection";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";
import LocationSection from "./components/LocationSection";
import TravelGallery from "./components/TravelGallery";
import TravelQuotation from "./components/TravelQoutation";

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
