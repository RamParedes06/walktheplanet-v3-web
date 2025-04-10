"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
	id: string;
	number: string;
	question: string;
	answer: string;
}

export default function FAQSection() {
	const [openItem, setOpenItem] = useState<string | null>(null);

	const toggleItem = (id: string) => {
		setOpenItem(openItem === id ? null : id);
	};

	const faqItems: FAQItem[] = [
		{
			id: "faq-1",
			number: "01",
			question: "EMERGENCY RESPONSE",
			answer: "Protocols for pre-to-post travel safety.",
		},
		{
			id: "faq-2",
			number: "02",
			question: "HELICOPTER SERVICES",
			answer: "For emergency medical flights with advanced life support. ",
		},
		{
			id: "faq-3",
			number: "03",
			question: "ESTABLISHED SAFETY PARTNERSHIPS",
			answer: "To ensure responsible and well-prepared travel experiences. ",
		},
		{
			id: "faq-4",
			number: "04",
			question: "ROAD TRAFFIC AND SAFETY ASSISTANCE",
			answer: "Throughout all educational tours ",
		},
	];

	return (
		<section className="flex items-center justify-center w-full h-full bg-gradient-to-b from-blue-900 via-teal-800 to-yellow-500 text-white px-4 md:px-20">
			<div className="max-w-4xl mx-auto py-10">
				{faqItems.map((item) => (
					<div key={item.id} className="border-b border-white/20 py-10 md:py-4">
						<div className="flex justify-between items-center cursor-pointer py-10" onClick={() => toggleItem(item.id)}>
							<div className="flex items-start gap-6">
								<button className="flex-shrink-0">{openItem === item.id ? <FaMinus className="w-5 h-5 text-white" /> : <FaPlus className="w-5 h-5 text-white" />}</button>
								<h3 className="text-[16px] px-6 md:text-lg md:font-medium">{item.question}</h3>
							</div>
							<span className="text-white/70 font-medium">{item.number}</span>
						</div>
						<div className={`overflow-hidden transition-all duration-300 ${openItem === item.id ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
							<p className="pl-12 text-white/80">{item.answer}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
