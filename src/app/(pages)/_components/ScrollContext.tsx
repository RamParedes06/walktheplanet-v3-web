"use client";
import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";

// Define the context with Lenis or null
const SmoothScrollerContext = createContext<Lenis | null>(null);

// Custom hook for accessing the smooth scroller context
export const useSmoothScroller = () => useContext(SmoothScrollerContext);

// Define props for the ScrollContext component
interface ScrollContextProps {
	children: ReactNode;
	className?: string;
}

export default function ScrollContext({ className, children }: ScrollContextProps) {
	const [lenisRef, setLenis] = useState<Lenis | null>(null);
	const [rafState, setRaf] = useState<number | null>(null);

	useEffect(() => {
		const scroller = new Lenis();
		let rf: number;

		function raf(time: number) {
			scroller.raf(time);
			requestAnimationFrame(raf);
		}
		//eslint-disable-next-line
		rf = requestAnimationFrame(raf);
		setRaf(rf);
		setLenis(scroller);

		return () => {
			if (lenisRef) {
				cancelAnimationFrame(rafState!);
				lenisRef.destroy();
			}
		};
		// eslint-disable-next-line
	}, []);

	return (
		<SmoothScrollerContext.Provider value={lenisRef}>
			<div className={className}>{children}</div>
		</SmoothScrollerContext.Provider>
	);
}
