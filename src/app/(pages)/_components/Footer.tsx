"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/assets/images/Logo-Footer.png";
import FacebookSvg from "@/assets/svg/FacebookSvg";
import InstagramSvg from "@/assets/svg/InstagramSvg";
import TiktokSvg from "@/assets/svg/TiktokSvg";
import LinkedInSvg from "@/assets/svg/LinkedInSvg";
import Link from "next/link";

function Footer() {
	const pathname = usePathname();
	return (
		<>
			<div className=" bg-[#00537F]  w-full">
				<div className="max-w-[1280px] mx-auto py-24">
					<div className="gap-4 flex justify-between max-[490px]:flex-wrap  max-[490px]:items-center max-[490px]:justify-center">
						<div className="">
							<div className="flex flex-col justify-between h-full max-w-[230px] max-[490px]:text-center max-[490px]:items-center max-[490px]:sticky max-[490px]:top-5">
								<Image src={logo} width={200} height={138} alt="walktheplanet inc" loading="lazy" />
								<p className="max-[490px]:hidden text-white">Unit 1803 PSE Tower 28th Street 5th Avenue Bonifacio Global City, Fort Bonifacio, City of Taguig</p>
							</div>
						</div>
						<div className="flex flex-col max-[490px]:text-center max-[490px]:mt-15">
							<div className=" text-white pb-20 border-b-1 border-amber-100">
								<h2 className="text-lg md:text-xl font-semibold mb-6">Send us an email</h2>

								<div className="flex flex-col md:flex-row md:justify-between gap-10">
									<div className="space-y-10">
										<div>
											<p className="">For partnership</p>
											<p className="underline">partners@walktheplanet.com</p>
										</div>
										<div>
											<p className="">For airline partnership</p>
											<p className="underline">airline.partners@walktheplanet.com</p>
										</div>
										<div>
											<p className="">For M.I.C.E</p>
											<p className="underline">M.I.C.E@walktheplanet.com</p>
										</div>
										<div>
											<p className="">For EduTourism</p>
											<p className="underline">edutourism@walktheplanet.com</p>
										</div>
									</div>

									<div className="space-y-10">
										<div>
											<p className="">For Sales</p>
											<p className="underline">corpsales@walktheplanet.com</p>
										</div>
										<div>
											<p className="">For marketing</p>
											<p className="underline">marketing@walktheplanet.com</p>
										</div>
										<div>
											<p className="">For operations</p>
											<p className="underline">customersupport@walktheplanet.com</p>
										</div>
										<div>
											<p className=" mb-1">Connect with us</p>
											<div className="flex gap-4 max-[490px]:justify-center max-[490px]:mt-4">
												<a href="https://www.facebook.com/walktheplanetinc">
													<FacebookSvg width={24} height={24} />
												</a>
												<a href="https://www.instagram.com/walktheplanetinc/">
													<InstagramSvg width={24} height={24} />
												</a>
												<a href="https://www.tiktok.com/@walktheplanetinc">
													<TiktokSvg width={24} height={24} />
												</a>
												<a href="https://ph.linkedin.com/company/walktheplanet?trk=public_post_feed-actor-name">
													<LinkedInSvg width={24} height={24} />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className=" text-white pt-20">
								<h2 className="text-lg md:text-xl font-semibold mb-6">Quick links</h2>

								<div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-12">
									<div className="space-y-10 flex flex-col">
										<Link href="/" className={`hover:underline ${pathname === "/" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											Home
										</Link>
										<a href="/edutourism" className={`hover:underline ${pathname === "/edutourism" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											EduTourism
										</a>
										<a href="/mice" className={`hover:underline ${pathname === "/mice" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											M.I.C.E
										</a>
									</div>

									<div className="space-y-10 flex flex-col">
										
										<a href="/corporate" className={`hover:underline ${pathname === "/corporate" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											Corporate and Business
										</a>
										<a href="/travel-stories" className={`hover:underline ${pathname === "/travel-stories" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											Travel Stories
										</a>
										<a href="/leisure" className={`hover:underline ${pathname === "/leisure" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											Leisure travel offerings
										</a>
									</div>

									<div className="space-y-10 flex flex-col">
										<a href="/all-in-products" className={`hover:underline ${pathname === "/all-in-products" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											All-in services
										</a>
										<a href="/about-us" className={`hover:underline ${pathname === "/about-us" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											About us
										</a>
										<a href="/contact-us" className={`hover:underline ${pathname === "/contact-us" ? "font-medium" : "font-light text-[#FFFFFFA6]"}`}>
											Contact us
										</a>
									</div>
									<p className="min-[481px]:hidden max-[490]:text-[9px] mt-15 text-white">
										Unit 1803 PSE Tower 28th Street 5th Avenue Bonifacio Global City, Fort Bonifacio, City of Taguig
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#124064] h-[50px] flex justify-start items-center">
					<div className="max-w-[1280px] mx-auto text-white">© 2023 WalkThePlanet, Inc. All rights reserved.</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
