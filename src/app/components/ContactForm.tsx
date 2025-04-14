"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { schemaBusiness, schemaLeisure } from "@/schema";
import bg from "@/assets/svg/contact/bgIllustration.svg";

type LeisureFormData = z.infer<typeof schemaLeisure>;
type BusinessFormData = z.infer<typeof schemaBusiness>;

export default function ContactForm() {
  const [travelType, setTravelType] = useState<
    "Leisure Travel" | "Business Travel"
  >("Business Travel");

  const leisureForm = useForm<LeisureFormData>({
    resolver: zodResolver(schemaLeisure),
    defaultValues: {
      travelType: "Leisure Travel",
      email: "",
      phoneNumber: "",
      comment: "",
      firstName: "",
      middleName: "",
      lastName: "",
    },
  });

  const businessForm = useForm<BusinessFormData>({
    resolver: zodResolver(schemaBusiness),
    defaultValues: {
      travelType: "Business Travel",
      email: "",
      phoneNumber: "",
      comment: "",
      companyName: "",
      clientName: "",
    },
  });

  const handleTabChange = (type: "Leisure Travel" | "Business Travel") => {
    setTravelType(type);
    if (type === "Leisure Travel") {
      leisureForm.reset({
        travelType: "Leisure Travel",
        email: "",
        phoneNumber: "",
        comment: "",
        firstName: "",
        middleName: "",
        lastName: "",
      });
    } else {
      businessForm.reset({
        travelType: "Business Travel",
        email: "",
        phoneNumber: "",
        comment: "",
        companyName: "",
        clientName: "",
      });
    }
  };

  const onLeisureSubmit: SubmitHandler<LeisureFormData> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/v2/wtp-contact-us`,
        { ...data, countryCode: "+63" }
      );
      console.log("Form submitted successfully:", response);
      leisureForm.reset();
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const onBusinessSubmit: SubmitHandler<BusinessFormData> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/v2/wtp-contact-us`,
        { ...data, countryCode: "+63" }
      );
      console.log("Form submitted successfully:", response);
      businessForm.reset();
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen">
      <section className="w-full lg:w-1/2 bg-[rgb(208,246,255)] flex flex-col justify-end relative overflow-hidden h-auto lg:h-full">
        <div
          className="absolute"
          style={{
            width: "1024px",
            height: "1024px",
            top: "-300px",
            right: "-350px",
          }}
        >
          <Image
            src={bg}
            width={1024}
            height={1024}
            alt="Background Illustration"
            className="opacity-70"
          />
        </div>

        <div className="relative z-10 px-6 py-15 lg:px-20 ml-4 lg:ml-8 mb-6">
          <h1 className="text-3xl lg:text-[64px] text-[#333] font-normal leading-none">
            LET&apos;S TALK
          </h1>
          <h1 className="text-3xl lg:text-[64px] text-[#333] font-semibold leading-none mt-2">
            ABOUT TRAVEL
          </h1>
          <p className="text-base lg:text-[24px] mt-4 lg:mt-8 text-[#333]">
            Let us handle the details while you focus on enjoying the journey.
            We look forward to crafting your travel experience!
          </p>
        </div>
      </section>

      {/* Right Section */}
      <section className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-6">
        {/* Form */}
        <div className="w-full max-w-md lg:max-w-lg p-6 lg:p-8">
          {/* Toggle Buttons */}
          <div className="flex w-full border border-[#14476F] rounded-full overflow-hidden mt-10 mb-5 lg:mb-5">
            <button
              type="button"
              className={`cursor-pointer w-full py-2 lg:py-3 px-4 font-semibold text-sm transition-all duration-300 ${
                travelType === "Leisure Travel"
                  ? "bg-[#14476F] text-white"
                  : "bg-white text-[#14476F]"
              }`}
              onClick={() => handleTabChange("Leisure Travel")}
            >
              Leisure Travel
            </button>
            <button
              type="button"
              className={`cursor-pointer w-full py-2 lg:py-3 px-4 font-semibold text-sm transition-all duration-300 ${
                travelType === "Business Travel"
                  ? "bg-[#14476F] text-white"
                  : "bg-white text-[#14476F]"
              }`}
              onClick={() => handleTabChange("Business Travel")}
            >
              Business Travel
            </button>
          </div>

          {/* Conditional Form Rendering */}
          {travelType === "Leisure Travel" ? (
            <form
              onSubmit={leisureForm.handleSubmit(onLeisureSubmit)}
              className="space-y-4 lg:space-y-6  overflow-auto"
            >
              {/* Hidden travel type field */}
              <input
                type="hidden"
                {...leisureForm.register("travelType")}
                value="Leisure Travel"
              />

              {/* Leisure Travel Fields */}
              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Input first name here"
                  {...leisureForm.register("firstName")}
                  className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {leisureForm.formState.errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {leisureForm.formState.errors.firstName?.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Middle Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Input middle name here"
                  {...leisureForm.register("middleName")}
                  className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {leisureForm.formState.errors.middleName && (
                  <p className="text-red-500 text-xs mt-1">
                    {leisureForm.formState.errors.middleName?.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Input last name here"
                  {...leisureForm.register("lastName")}
                  className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {leisureForm.formState.errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {leisureForm.formState.errors.lastName?.message}
                  </p>
                )}
              </div>

              {/* Common Fields */}
              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Input email here"
                  {...leisureForm.register("email")}
                  className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {leisureForm.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {leisureForm.formState.errors.email?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  placeholder="Input phone number here"
                  {...leisureForm.register("phoneNumber")}
                  className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {leisureForm.formState.errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {leisureForm.formState.errors.phoneNumber?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Comment
                </label>
                <input
                  type="text"
                  placeholder="Add your comment here"
                  {...leisureForm.register("comment")}
                  className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {leisureForm.formState.errors.comment && (
                  <p className="text-red-500 text-xs mt-1">
                    {leisureForm.formState.errors.comment?.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#CCCCCC] text-white font-medium py-3 rounded-full hover:bg-[#00537F] transition-colors"
              >
                Send to us
              </button>
            </form>
          ) : (
            <form
              onSubmit={businessForm.handleSubmit(onBusinessSubmit)}
              className="space-y-4 lg:space-y-6 h-150 overflow-auto"
            >
              {/* Hidden travel type field */}
              <input
                type="hidden"
                {...businessForm.register("travelType")}
                value="Business Travel"
              />

              {/* Business Travel Fields */}
              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Input company name here"
                  {...businessForm.register("companyName")}
                  className="w-full border-b border-[#14476F] text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {businessForm.formState.errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessForm.formState.errors.companyName?.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Client Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Input client name here"
                  {...businessForm.register("clientName")}
                  className="w-full border-b border-[#14476F] text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {businessForm.formState.errors.clientName && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessForm.formState.errors.clientName?.message}
                  </p>
                )}
              </div>

              {/* Common Fields */}
              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Input email here"
                  {...businessForm.register("email")}
                  className="w-full border-b border-[#14476F] text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {businessForm.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessForm.formState.errors.email?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Input phone number here"
                  {...businessForm.register("phoneNumber")}
                  className="w-full border-b text-black pb-2 focus:outline-none focus:border-gray-600"
                />
                {businessForm.formState.errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessForm.formState.errors.phoneNumber?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#14476F] mb-2">
                  Comment
                </label>
                <input
                  placeholder="Add your comment here"
                  {...businessForm.register("comment")}
                  className="w-full border-b border-[#14476F] text-black focus:outline-none focus:border-gray-600 pb-2"
                />
                {businessForm.formState.errors.comment && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessForm.formState.errors.comment?.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#CCCCCC] text-white font-medium py-3 rounded-full hover:bg-[#00537F] transition-colors"
              >
                Send to us
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
