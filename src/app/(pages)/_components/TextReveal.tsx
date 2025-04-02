"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type TextRevealProps = {
	children: ReactNode;
	className?: string;
	rotateOnHover?: boolean; // New prop to control rotation on hover
};

const variants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const TextReveal: React.FC<TextRevealProps> = ({ children, rotateOnHover = false }) => {
	return (
		<div className="group">
			<motion.div
				className={`flex flex-col gap-2 max-[490px]:gap-5 overflow-hidden transition-transform duration-100 ${rotateOnHover ? "group-hover:-rotate-3" : ""}`}
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

export default TextReveal;
