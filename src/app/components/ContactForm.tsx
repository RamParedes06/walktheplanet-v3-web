"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import bg from "@/assets/svg/contact/bgIllustration.svg";

const schema = z.object({
	firstName: z.string().min(1, "First name is required"),
	middleName: z.string().min(1, "Middle name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	phoneNumber: z.string().min(1, "Phone number is required"),
	comment: z.string().optional(),
	companyName: z.string().optional(),
	clientName: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
	const [travelType, setTravelType] = useState<"leisure" | "business">("leisure");

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: FormData) => {
		try {
			const response = await axios.post("http://47.245.126.170:30088/api/v2/wtp-contact-us", data);
			console.log("Form submitted successfully:", response);
			reset();
		} catch (error) {
			console.log("Error submitting form:", error);
		}
	};

	return (
		<div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen">
			<section className="w-full lg:w-1/2 bg-[#D0F6FF] flex flex-col justify-end relative overflow-hidden h-auto lg:h-full">
				<div
					className="absolute"
					style={{
						width: "1024px",
						height: "1024px",
						top: "-300px",
						right: "-350px",
					}}
				>
					<Image src={bg} alt="Background Illustration" className="opacity-70" />
				</div>

				<div className="relative z-10 px-6 py-15 lg:px-20 ml-4 lg:ml-8 mb-6">
					<h1 className="text-3xl lg:text-[64px] text-[#333] font-normal leading-none">LET&apos;S TALK</h1>
					<h1 className="text-3xl lg:text-[64px] text-[#333] font-semibold leading-none mt-2">ABOUT TRAVEL</h1>
					<p className="text-base lg:text-[24px] mt-4 lg:mt-8 text-[#333]">
						Let us handle the details while you focus on enjoying the journey. We look forward to crafting your travel experience!
					</p>
				</div>
			</section>

			{/* Right Section */}
			<section className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-6 lg:p-8 min-h-screen">
				{/* Form */}
				<div className="w-full max-w-md">
					{/* Toggle Buttons */}
					<div className="flex mb-6 lg:mb-10 bg-gray-100 rounded-full p-1">
						<button
							className={`cursor-pointer w-1/2 py-2 lg:py-3 px-4 rounded-full font-medium transition-colors ${
								travelType === "leisure" ? "bg-[#333] text-white" : "bg-transparent text-[#333]"
							}`}
							onClick={() => setTravelType("leisure")}
						>
							Leisure Travel
						</button>
						<button
							className={`cursor-pointer w-1/2 py-2 lg:py-3 px-4 rounded-full font-medium transition-colors ${
								travelType === "business" ? "bg-[#333] text-white" : "bg-transparent text-[#333]"
							}`}
							onClick={() => setTravelType("business")}
						>
							Business Travel
						</button>
					</div>

					{/* Form Fields */}
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-4 lg:space-y-6 h-150 overflow-auto" // Set fixed height and make the form scrollable
					>
						{/* Leisure Travel Fields */}
						{travelType === "leisure" && (
							<>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										First Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="Input first name here"
										{...register("firstName")}
										className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
									/>
									{errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Middle Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="Input middle name here"
										{...register("middleName")}
										className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
									/>
									{errors.middleName && <p className="text-red-500 text-xs mt-1">{errors.middleName.message}</p>}
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Last Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="Input last name here"
										{...register("lastName")}
										className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
									/>
									{errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
								</div>
							</>
						)}

						{/* Business Travel Fields */}
						{travelType === "business" && (
							<>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
									<input
										type="text"
										placeholder="Input company name here"
										{...register("companyName")}
										className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
									/>
									{errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
									<input
										type="text"
										placeholder="Input client name here"
										{...register("clientName")}
										className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
									/>
									{errors.clientName && <p className="text-red-500 text-xs mt-1">{errors.clientName.message}</p>}
								</div>
							</>
						)}

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Email <span className="text-red-500">*</span>
							</label>
							<input type="email" placeholder="Input email here" {...register("email")} className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600" />
							{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Phone Number <span className="text-red-500">*</span>
							</label>
							<input type="tel" placeholder="+63 - 0000 - 000 - 000" {...register("phoneNumber")} className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600" />
							{errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
							<textarea
								placeholder="Input text here"
								{...register("comment")}
								className="text-black w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500 resize-none"
								rows={2}
							></textarea>
						</div>

						{/* Submit Button */}
						<button type="submit" className="w-full bg-gray-300 text-gray-700 font-medium py-3 rounded-full mt-6 lg:mt-8 hover:bg-gray-400 transition-colors">
							Send to us
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
