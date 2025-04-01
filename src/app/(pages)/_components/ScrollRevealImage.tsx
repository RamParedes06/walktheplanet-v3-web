"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { DirectionAwareHover } from "./direction-aware-hover";

type ScrollRevealProps = {
	children: ReactNode;
	className?: string;
	rotateOnHover?: boolean; // New prop to control rotation on hover
};

const variants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, rotateOnHover = false }) => {
	return (
		<div className="group">
			<motion.div
				className={`p-4 bg-white max-h-[410px] h-full overflow-hidden object-center flex items-center transition-transform duration-300 ${rotateOnHover ? "group-hover:-rotate-3" : ""}`}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.2 }}
				variants={variants}
			>
				<DirectionAwareHover imageUrl="/mountains.jpg">
					<p className="font-bold text-xl">In the mountains</p>
					<p className="font-normal text-sm">$1299 / night</p>
				</DirectionAwareHover>
				{children}
			</motion.div>
		</div>
	);
};

export default ScrollReveal;
