"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HomePage from "./(pages)/Homepage/page";

const logo = "https://res.cloudinary.com/dxg7sn3cy/image/upload/v1743581836/Logo-Only_xy7mel.png";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust timing as needed
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-[#F2F2F2]">
			{isLoading ? (
				<div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
					<div className="flex flex-col items-center">
						<Image src={logo} alt="Google Logo" width={206} height={206} className="mb-4" />
						<div></div>
						<p className="text-lg font-[500] text-black">Loading...</p>
						<motion.div
							initial={{ width: "0%" }}
							animate={{ width: "100%" }}
							transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
							className="h-1 bg-[#000000] rounded-full mt-4 w-full max-w-2xl"
						/>
					</div>
				</div>
			) : (
				<HomePage />
			)}
		</div>
	);
}
