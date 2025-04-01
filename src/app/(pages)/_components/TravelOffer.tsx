import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/slider.scss";
import background from "@/assets/images/travel_offers.webp";
import { travel1, travel2, travel3, local1, local2, local3, international1, international2, international3, travelSlide1, travelSlide2, travelSlide3 } from "@/app/constant";

function TravelOffer() {
	const [sectionHeight, setSectionHeight] = useState(2300);
	const [bgColor, setBgColor] = useState("#E5F1F6");

	useEffect(() => {
		const userAgent = navigator.userAgent;
		if (userAgent.includes("Edg")) {
			setSectionHeight(2000);
			setBgColor("#ADD8E6"); // Light Blue for Edge
		} else if (userAgent.includes("Firefox")) {
			setSectionHeight(2300);
			setBgColor("#FFA07A"); // Light Salmon for Firefox
		} else if (userAgent.includes("Chrome")) {
			setSectionHeight(1800);
			setBgColor("#90EE90"); // Light Green for Chrome
		} else if (userAgent.includes("Safari")) {
			setSectionHeight(2300);
			setBgColor("#FFD700"); // Gold for Safari
		} else if (userAgent.includes("OPERA") || userAgent.includes("Opera")) {
			setSectionHeight(2000);
			setBgColor("#FF69B4"); // Hot Pink for Opera
		}
	}, []);
	return (
		<>
			<div className=" w-screen relative" style={{ height: `calc(${sectionHeight}px + 100vh)`, backgroundColor: bgColor }}>
				<div className="sticky top-0 left-0 right-0 h-[100vh] bg-cover bg-center z-1 overflow-hidden" style={{ backgroundImage: `url(${background.src})` }}>
					<div className="min-[1442px]:h-[30.1vh]  max-[1441px]:h-[33.1vh]"></div>
					<div className="h-[80vh] bg-[#E5F1F6ab] backdrop-blur-sm">
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
				<div className="sticky min-[1442px]:top-90 max-[1441px]:top-94.5 left-0 right-0 bg-[#1c779eab] backdrop-blur-sm  max-[1201px]:h-[59svh] min-[1200px]:h-[59svh] min-[1441px]:h-[62.5svh] z-2">
					<p className="text-white text-2xl max-w-[1280px] mx-auto pt-6 satoshi font-bold text-center md:text-left min-[1200px]:pl-15 min-[1440px]:pl-0 flex flex-col gap-4">
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

						<div className="absolute top-0 left-155 right-0 white-overlay p-4 md:p-16 bg-white max-w-[668px] w-full  flex flex-col gap-4">
							<p className="text-black text-3xl  satoshi font-bold">PALAWAN TOUR</p>
							<p className="text-black text-2xl -[16px] satoshi">
								The Philippines’ best-kept secrets.
								<br /> Pack your bags and uncover your adventure.
							</p>
							<button className="px-6 py-2   bg-[#006FA9] text-white rounded-full max-w-[228px]">Book Now</button>
						</div>
					</div>
				</div>
				<div className="sticky min-[1442px]:top-108 max-[1441px]:top-111.5 max-[490px]:top-112.5 left-0 right-0 bg-[#5f9ea0ab] backdrop-blur-sm  max-[1201px]:h-[110svh] min-[1200px]:h-[51.5svh]  min-[1441px]:h-[55svh] max-[490px]:h-[52svh] z-3">
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
				<div className="sticky min-[1442px]:top-125 max-[1441px]:top-129.5 max-[490px]:top-130  left-0 right-0 bg-[#ff6347ab] backdrop-blur-sm  max-[1201px]:h-[45svh] min-[1200px]:h-[45.5svh]  min-[1441px]:h-[48svh] z-4">
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
		</>
	);
}

export default TravelOffer;
