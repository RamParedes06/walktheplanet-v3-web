// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Logo from "@/assets/images/Logo.png";
// // import { tabs } from "./Hero";
// import MenuSvg from "@/assets/svg/MenuSvg";
// import ScrollVelocity from "./ScrollVelocity";

// export default function Hero() {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<div className="w-screen p-8 max-[480px]:p-0 max-w-[1900px] min-[481px]:hidden">
// 			<div className="relative w-full h-screen overflow-hidden rounded-xl max-[480px]:rounded-none max-w-full mx-auto">
// 				{/* Image Slider */}
// 				<motion.div className="absolute inset-0 flex h-screen w-full" initial={false} animate={{ x: `-${activeIndex * 100}%` }} transition={{ duration: 2, ease: "easeInOut" }}>
// 					{tabs.map((tab, index) => (
// 						<div key={tab.id + index} className="relative w-full h-full flex-shrink-0 overflow-hidden">
// 							<motion.div
// 								className="absolute inset-0 bg-cover bg-center flex flex-col justify-between"
// 								style={{
// 									backgroundImage: `url(${tab.image.src})`,
// 									backgroundSize: "cover",
// 									backgroundRepeat: "no-repeat",
// 									backgroundPosition: "center center",
// 								}}
// 								animate={{
// 									backgroundPositionX: `calc(1% - ${activeIndex * 0}px)`,
// 								}}
// 								transition={{ duration: 2.5, ease: "easeInOut" }}
// 							>
// 								<div className="bg-[#FFC000] py-3">
// 									<ScrollVelocity
// 										texts={["Explore more, spend less! Get 20% off educational tours today! "]}
// 										className="custom-scroll-text "
// 										textColor="black"
// 										textSize="10"
// 										numCopies={17}
// 										damping={12}
// 									/>
// 								</div>
// 								<div className="bg-[#FFC000] py-3">
// 									<ScrollVelocity
// 										texts={["Explore more, spend less! Get 20% off educational tours today! "]}
// 										className="custom-scroll-text "
// 										textColor="black"
// 										textSize="10"
// 										numCopies={17}
// 										damping={12}
// 									/>
// 								</div>
// 							</motion.div>
// 						</div>
// 					))}
// 				</motion.div>

// 				{/* Content Overlay */}
// 				<div className="absolute inset-0 flex flex-col justify-between px-4 sm:px-8 lg:px-12 py-12 sm:py-20 max-w-screen-2xl mx-auto text-white">
// 					<div className="bg-white mt-5 flex items-center justify-between px-4 sm:px-6 py-6 rounded-full w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[438px] max-[480px]:sticky max-[480px]:top-5">
// 						<Image src={Logo} alt="logo" width={70} height={50} />
// 						<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
// 							<MenuSvg />
// 						</div>
// 					</div>
// 					<AnimatePresence mode="wait">
// 						<motion.div
// 							key={tabs[activeIndex].id}
// 							initial={{ y: 50, opacity: 0 }}
// 							animate={{ y: 0, opacity: 1 }}
// 							exit={{ y: -50, opacity: 0 }}
// 							transition={{ duration: 0.8, ease: "easeInOut" }}
// 						>
// 							<div className="flex flex-col gap-15 sm:gap-8">
// 								<div>
// 									<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left">{tabs[activeIndex].title}</h1>
// 									<p className="mt-4 text-base sm:text-lg max-w-2xl text-center sm:text-left mx-auto sm:mx-0">{tabs[activeIndex].description}</p>
// 								</div>
// 								<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
// 									<button className="px-6 py-4 bg-[#D0F6FF] text-[#00537F] font-bold rounded-xl text-sm sm:text-base">{tabs[activeIndex].buttonText1}</button>
// 									<button className="px-6 py-4 bg-white text-[#333] font-bold rounded-xl text-sm sm:text-base">{tabs[activeIndex].buttonText2}</button>
// 								</div>
// 							</div>
// 						</motion.div>
// 					</AnimatePresence>

// 					{/* Tabs & Logo Menu */}
// 					<div className="flex flex-col gap-2 w-full mt-10">
// 						<div className="flex flex-wrap justify-center gap-2 mb-5">
// 							{tabs.map((tab, index) => (
// 								<button
// 									key={tab.id}
// 									className={`px-2 py-1 rounded-full flex items-center gap-2 sm:gap-3 text-[14px] transition whitespace-nowrap ${
// 										activeIndex === index ? "bg-white text-black" : "text-white"
// 									}`}
// 									onClick={() => setActiveIndex(index)}
// 								>
// 									<tab.svg color={activeIndex === index ? "black" : "white"} />
// 									<p>{tab.title}</p>
// 								</button>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
