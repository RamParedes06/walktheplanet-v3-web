import React, { useEffect, useState } from "react";
import background from "@/assets/images/travel_offers.webp";
import "@/styles/slider.scss";
import Image from "next/image";
import travelSlide1 from "@/assets/images/travel-package-slide.png";
import travelSlide2 from "@/assets/images/travel-package-slide2.png";
import travelSlide3 from "@/assets/images/travel-package-slide3.png";
import local1 from "@/assets/images/local-destination1.png";
import local2 from "@/assets/images/local-destination2.png";
import local3 from "@/assets/images/local-destination3.png";
import international1 from "@/assets/images/international1.png";
import international2 from "@/assets/images/international2.png";
import international3 from "@/assets/images/international3.png";
import travel1 from "@/assets/images/travel1.png";
import travel2 from "@/assets/images/travel2.png";
import travel3 from "@/assets/images/travel3.png";

// import ScrollVelocity from "./ScrollVelocity";

function FloatingDiv() {
	const [sectionHeight, setSectionHeight] = useState(2300);

	useEffect(() => {
		const userAgent = navigator.userAgent;
		if (userAgent.includes("Edg")) {
			setSectionHeight(2000);
		} else if (userAgent.includes("Firefox")) {
			setSectionHeight(2300);
		} else if (userAgent.includes("Chrome")) {
			setSectionHeight(1500);
		} else if (userAgent.includes("Safari")) {
			setSectionHeight(2300);
		} else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
			setSectionHeight(2000);
		}
	}, []);

	return (
		<div style={{ height: `calc(${sectionHeight}px + 100vh)` }} className="relative w-full ">
			<div className="sticky z-1 top-0 left-0 right-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }}>
				<div className=" h-[30vh] flex items-center">
					{/* <ScrollVelocity texts={["OUR TRAVEL OFFERS"]} className="custom-scroll-text uppercase  text-white" damping={0.1} numCopies={10} /> */}
				</div>
				<div className="relative -top-[30px] min-[1440px]:h-[70vh] min-[1200px]:h-[70vh]  max-[480px]:h-[70vh] left-0 right-0 bottom-0 bg-[#E5F1F6ab] backdrop-blur-sm  transition-all duration-300 ease-out z-2">
					<div className=" mx-auto mt-7">
						<p className="text-white text-2xl max-w-[1280px] mx-auto pt-6 satoshi font-bold text-center md:text-left min-[1200px]:pl-15 min-[1440px]:pl-0 flex flex-col gap-4 ">
							TRAVEL PACKAGE ESSENTIALS
						</p>

						<div className="slider-container relative mt-4 ">
							<div className="image-slider">
								<div className="carousel-container">
									<div className="wrap">
										<Image src={travelSlide1} alt="" loading="lazy" />
										<Image src={travelSlide2} alt="" loading="lazy" />
										<Image src={travelSlide3} alt="" loading="lazy" />
										<Image src={travelSlide1} alt="" loading="lazy" />
										<Image src={travelSlide2} alt="" loading="lazy" />
										<Image src={travelSlide3} alt="" loading="lazy" />
									</div>
								</div>
							</div>

							<div className="absolute top-0 left-20 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] w-full  flex flex-col gap-4">
								<p className="text-black text-3xl  satoshi font-bold">GLOBAL DATA SIM</p>
								<p className="text-black text-2xl -[16px] satoshi">
									One SIM for every destination.
									<br /> Roam your way anytime, anywhere.
								</p>
								<button className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px]">Get Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Layer 1 */}

			{/* Layer 2 - Floating and sticking 20px from the top */}
			<div className="sticky min-[1440px]:top-[345px] min-[1440px]:h-[63vh] min-[1200px]:top-[345px] min-[1200px]:h-[63vh] max-[480px]:top-[346px] max-[480px]:h-[63vh] left-0 right-0 bottom-0 bg-[#1c779eab] backdrop-blur-sm  transition-all duration-300 ease-out z-3">
				<div className=" mx-auto mt-7">
					<p className="text-white text-2xl max-w-[1280px] mx-auto pt-6 satoshi font-bold text-center md:text-left min-[1200px]:pl-15 min-[1440px]:pl-0  flex flex-col gap-4">
						LOCAL DESTINATIONS
					</p>

					<div className="slider-container relative mt-4 ">
						<div className="image-slider">
							<div className="carousel-container">
								<div className="wrap">
									<Image src={local1} alt="" loading="lazy" />
									<Image src={local2} alt="" loading="lazy" />
									<Image src={local3} alt="" loading="lazy" />
									<Image src={local1} alt="" loading="lazy" />
									<Image src={local2} alt="" loading="lazy" />
									<Image src={local3} alt="" loading="lazy" />
								</div>
							</div>
						</div>

						<div className="absolute top-0 min-[1440px]:left-155 min-[1200px]:left-125 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] ] w-full  flex flex-col gap-4">
							<p className="text-black text-3xl  satoshi font-bold">PALAWAN TOUR</p>
							<p className="text-black text-2xl -[16px] satoshi">
								The Philippines’ best-kept secrets.
								<br /> Pack your bags and uncover your adventure.
							</p>
							<button className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px]">Get Now</button>
						</div>
					</div>
				</div>
			</div>
			<div className="sticky min-[1440px]:top-[415px] min-[1440px]:h-[56vh] min-[1200px]:top-[417px] min-[1200px]:h-[56vh] max-[480px]:top-[418px] max-[480px]:h-[56vh] left-0 right-0 bottom-0 bg-[#5f9ea0ab] backdrop-blur-sm  transition-all duration-300 ease-out z-4">
				<div className=" mx-auto mt-7">
					<p className="text-white text-2xl max-w-[1280px] mx-auto pt-6 satoshi font-bold text-center md:text-left min-[1200px]:pl-15 min-[1440px]:pl-0 flex flex-col gap-4">
						INTERNATIONAL DESTINATIONS
					</p>

					<div className="slider-container relative mt-4 ">
						<div className="image-slider">
							<div className="carousel-container">
								<div className="wrap">
									<Image src={international1} alt="" loading="lazy" />
									<Image src={international2} alt="" loading="lazy" />
									<Image src={international3} alt="" loading="lazy" />
									<Image src={international1} alt="" loading="lazy" />
									<Image src={international2} alt="" loading="lazy" />
									<Image src={international3} alt="" loading="lazy" />
								</div>
							</div>
						</div>

						<div className="absolute top-0 left-20 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] w-full  flex flex-col gap-4">
							<p className="text-black text-3xl  satoshi font-bold">PARIS TOUR</p>
							<p className="text-black text-2xl -[16px] satoshi">
								Sought-after global attractions.
								<br />
								Travel with us and see the world.
							</p>
							<button className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px]">Book Now</button>
						</div>
					</div>
				</div>
			</div>

			<div className="sticky min-[1440px]:top-[485px] min-[1440px]:h-[49vh] min-[1200px]:top-[485px] min-[1200px]:h-[49vh] max-[480px]:top-[490px] max-[480px]:h-[49vh] left-0 right-0 bottom-0 bg-[#ff6347ab] backdrop-blur-sm  transition-all duration-300 ease-out z-5">
				<div className=" mx-auto mt-7">
					<p className="text-white text-2xl max-w-[1280px] mx-auto pt-6 satoshi font-bold text-center md:text-left min-[1200px]:pl-15 min-[1440px]:pl-0 flex flex-col gap-4">
						TRAVEL DOCUMENTATION
					</p>

					<div className="slider-container relative mt-4 ">
						<div className="image-slider">
							<div className="carousel-container">
								<div className="wrap">
									<Image src={travel1} alt="" loading="lazy" />
									<Image src={travel2} alt="" loading="lazy" />
									<Image src={travel3} alt="" loading="lazy" />
									<Image src={travel1} alt="" loading="lazy" />
									<Image src={travel2} alt="" loading="lazy" />
									<Image src={travel3} alt="" loading="lazy" />
								</div>
							</div>
						</div>

						<div className="absolute top-0 min-[1440px]:left-155 min-[1200px]:left-125 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] w-full  flex flex-col gap-4">
							<p className="text-black text-3xl  satoshi font-bold">VISA PROCESSING</p>
							<p className="text-black text-2xl -[16px] satoshi">
								Visa processing and immigration requirements
								<br /> handled with ease.
							</p>
							<button className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px]">Book Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FloatingDiv;
