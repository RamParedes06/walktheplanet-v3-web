"use client";
import React, { useEffect, useState } from "react";
import { IgOpportunities } from "@/library/IgOpportunities";

const bg = "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1744089867/InstagramBg_ktopbj.png";
const overlay = "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1744089957/LetterBg_cbmiri.png";

function InstagramCards() {
	const [activeIndexes, setActiveIndexes] = useState([0, 0, 0]);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		if (isComplete) return;

		const interval = setInterval(() => {
			setActiveIndexes((prev) => {
				const newIndexes = [...prev];
				const currentIndex = prev[currentCardIndex];
				const itemLength = IgOpportunities[currentCardIndex].items.length;

				if (currentIndex < itemLength - 1) {
					newIndexes[currentCardIndex] = currentIndex + 1;
				} else {
					if (currentCardIndex < IgOpportunities.length - 1) {
						setCurrentCardIndex(currentCardIndex + 1);
					} else {
						setIsComplete(true);
					}
				}

				return newIndexes;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, [activeIndexes, currentCardIndex, isComplete]);

	const handleCardClick = (index: number) => {
		// Set the clicked card as active and do not reset the progress of other cards
		setCurrentCardIndex(index);
	};

	return (
		<div className="h-screen relative">
			{/* Background */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			{/* White overlay */}
			<div className="absolute inset-0 bg-white opacity-40 z-10" />

			{/* Main content */}
			<div
				className="absolute inset-0 z-20"
				style={{
					backgroundImage: `url(${overlay})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="h-full flex flex-col justify-center items-center gap-10 px-8">
					<p className="text-center italic text-2xl font-generalSans font-medium max-w-4xl">
						We view each corporate occasion as a crucial opportunity for your organization to reach its goals.
						<br />
						From event management to travel arrangements, we craft unforgettable experiences that help you achieve your desired results
					</p>

					<div className="flex gap-8">
						{IgOpportunities.map((card, i) => {
							const currentItem = card.items[activeIndexes[i]];

							return (
								<div
									key={card.id}
									className={`w-[390px] h-[580px] rounded-xl shadow-lg relative overflow-hidden bg-center bg-cover  duration-700 border-6 border-white ${
										currentCardIndex === i || isComplete ? "opacity-100" : "opacity-100"
									}`}
									style={{
										backgroundImage: `url(${currentItem.image})`,
									}}
									onClick={() => handleCardClick(i)} // Click handler
								>
									{/* Progress bar */}
									<div className="absolute top-4 left-4 right-4 flex gap-1 z-30">
										{card.items.map((_, idx) => (
											<div key={idx} className={`h-[4px] flex-1 rounded-full bg-white/30 relative overflow-hidden`}>
												<div
													className={`absolute left-0 top-0 h-full bg-white transition-all duration-5000 ease-linear ${
														activeIndexes[i] === idx && currentCardIndex === i ? "w-full" : activeIndexes[i] > idx ? "w-full" : "w-0"
													}`}
												/>
											</div>
										))}
									</div>

									{/* Caption */}
									<div className="absolute bottom-0 left-0 right-0 p-4 py-10 text-white">
										<h3 className="text-lg font-semibold">{currentItem.title}</h3>
										<p className="text-sm">{currentItem.desc}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default InstagramCards;
