"use client";

import { useEffect, useRef, FC, JSX } from "react";
import { gsap } from "gsap";

interface HomeGridProps {
	items?: (string | JSX.Element)[];
}

const HomeGrid: FC<HomeGridProps> = ({ items = [] }) => {
	const gridRef = useRef<HTMLDivElement>(null);
	const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
	//eslint
	const mouseXRef = useRef<number>(0);

	// Ensure the grid has 28 items (4 rows x 7 columns) by default
	const totalItems = 28;
	const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
	const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

	useEffect(() => {
		gsap.ticker.lagSmoothing(0);

		const handleMouseMove = (e: MouseEvent): void => {
			mouseXRef.current = e.clientX;
		};

		const updateMotion = (): void => {
			const maxMoveAmount = 300;
			const baseDuration = 0.8; // Base duration for inertia
			const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // Different inertia for each row, outer rows slower

			rowRefs.current.forEach((row, index) => {
				if (row) {
					const direction = index % 2 === 0 ? 1 : -1;
					const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

					gsap.to(row, {
						x: moveAmount,
						duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
						ease: "power3.out",
						overwrite: "auto",
					});
				}
			});
		};

		const removeAnimationLoop = gsap.ticker.add(updateMotion);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			removeAnimationLoop();
		};
	}, []);

	return (
		<div ref={gridRef} className="h-full w-full overflow-hidden  relative max-[769px]:hidden">
			<div className="absolute top-0 left-0 z-10 bg-gradient-to-t from-transparent via-[rgba(0,0,0,0)] via-[70%] to-[rgba(0,0,0,0.6)] h-full w-full"></div>
			<div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] via-[70%] to-[rgba(0,0,0,0.6)] h-full w-full"></div>
			<section
				className="w-full h-screen overflow-hidden relative flex items-center justify-center"
				style={{
					background: " #000000",
				}}
			>
				{/* Noise overlay */}
				<div className="absolute inset-0 pointer-events-none z-[4]  bg-[length:250px]"></div>
				<div className="gap-4 flex-none relative min-[1441px]:w-[150vw] max-[1442px]:w-[250vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[2]">
					{Array.from({ length: 4 }, (_, rowIndex) => (
						<div
							key={rowIndex}
							className="grid gap-4 grid-cols-7"
							ref={(el) => {
								rowRefs.current[rowIndex] = el;
							}}
						>
							{Array.from({ length: 7 }, (_, itemIndex) => {
								const content = combinedItems[rowIndex * 1 + itemIndex];
								return (
									<div key={itemIndex} className="relative">
										<div className="relative w-full h-full overflow-hidden rounded-[25px]  flex items-center justify-center text-white text-[1.5rem]">
											{typeof content === "string" && content.startsWith("http") ? (
												<div className="w-full h-full bg-cover bg-center absolute top-0 left-0" style={{ backgroundImage: `url(${content})` }}></div>
											) : (
												<div className="p-4 text-center z-[1]">{content}</div>
											)}
										</div>
									</div>
								);
							})}
						</div>
					))}
				</div>
				<div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
			</section>
		</div>
	);
};

export default HomeGrid;
