"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		container: scrollRef,
	});

	//eslint-disable-next-line
	const smoothScroll = useSpring(scrollYProgress, {
		damping: 15,
		stiffness: 100,
		mass: 0.5,
	});

	useEffect(() => {
		const handleScroll = () => {
			document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.div
			ref={scrollRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				overflowY: "scroll",
				scrollBehavior: "smooth",
			}}
		>
			{children}
		</motion.div>
	);
};

export default SmoothScroll;
