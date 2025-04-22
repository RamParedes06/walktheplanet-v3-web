"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type ScrollRevealProps = {
	children: ReactNode;
	className?: string;
	rotateOnHover?: boolean; // New prop to control rotation on hover
};

const variants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, rotateOnHover = false }) => {
	return (
		<div className="group">
			<motion.div
				className={`p-2 md:p-4 bg-white max-h-[410px] h-full overflow-hidden object-center text-white flex items-center transition-transform duration-100 ${
					rotateOnHover ? "group-hover:-rotate-3" : ""
				}`}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.2 }}
				variants={variants}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default ScrollReveal;
