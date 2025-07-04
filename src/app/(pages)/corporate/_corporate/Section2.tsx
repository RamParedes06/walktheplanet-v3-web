import React from "react";
import bgsection from "@/assets/images/Section2.png";
import TextReveal from "@/app/(pages)/_components/TextReveal";

function Section2() {
	return (
		<div className="h-screen bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url(${bgsection.src})` }}>
			<div className="overlay flex absolute inset-0 top-0 bg-gradient-to-b from-transparent via-[rgba(5,18,28,0.4)] to-[rgba(5,18,28,0.8)] ">
				<div className="self-end  w-full">
					<div className="max-w-[1440px]  px-[80px] max-[490px]:px-[20px] py-[112px] max-[490px]:py-[80px] z-10">
						<div className="flex flex-col text-2xl max-[490px]:text-xl font-generalSans">
							<TextReveal>
								<p className="flex flex-col gap-[14px] p-0 text-white">
									<i>
										Your choice of flexibility allows us to <span className="font-semibold">customize journeys without cutting corners on quality. </span>
									</i>

									<i>
										From <span className="font-semibold"> flights and hotel booking to documentation</span>, we handle everything so you can save time
									</i>

									<i>and money and stay focused on getting the job done.</i>
								</p>
							</TextReveal>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section2;
