"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { schemaBusiness, schemaLeisure } from "@/schema";
import bg from "@/assets/svg/contact/bgIllustration.svg";
import Modal from "./Modal";

const desktopBG = "";
const mobileBG =
  "https://res.cloudinary.com/dmxvasob7/image/upload/v1746606365/Frame_48098208_2_u6hdi6.png";

type LeisureFormData = z.infer<typeof schemaLeisure>;
type BusinessFormData = z.infer<typeof schemaBusiness>;

export default function ContactForm() {
  const [travelType, setTravelType] = useState<
    "Leisure Travel" | "Business Travel"
  >("Business Travel");

  const [successModal, setSuccessModal] = useState(false);
  const [failedModal, setFailedModal] = useState(false);

  const leisureForm = useForm<LeisureFormData>({
    resolver: zodResolver(schemaLeisure),
    mode: "onChange",
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
    mode: "onChange",
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

  const onCloseFailedModal = () => {
    setFailedModal(false);
  };

  const onCloseSucessModal = () => {
    setSuccessModal(false);
  };

  const onLeisureSubmit: SubmitHandler<LeisureFormData> = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/v2/wtp-contact-us`,
        { ...data, countryCode: "+63" }
      );

      leisureForm.reset();
      setSuccessModal(true);
    } catch (error) {
      console.log("Error submitting form:", error);
      setFailedModal(true);
    }
  };

  const onBusinessSubmit: SubmitHandler<BusinessFormData> = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/v2/wtp-contact-us`,
        { ...data, countryCode: "+63" }
      );

      businessForm.reset();
      setSuccessModal(true);
    } catch (error) {
      console.log("Error submitting form:", error);
      setFailedModal(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen">
      <section className="w-full lg:w-1/2 bg-[rgb(208,246,255)] flex flex-col justif-start md:justify-end relative overflow-hidden h-[366px] lg:h-full">
        <div
          className="absolute hidden md:block"
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
            className="bg-contain"
          />
        </div>
        <div className="absolute md:hidden block">
          <Image
            src={mobileBG}
            width={1024}
            height={1024}
            alt="Background Illustration"
            className="bg-contain"
          />
        </div>

        <div className="relative z-10 pr-6 py-15 mt-6 lg:px-20 ml-4 lg:ml-8 mb-6">
          <h1 className="text-[40px] lg:text-[64px] text-[#333] font-normal leading-none">
            LET&apos;S TALK
          </h1>
          <h1 className="text-[40px] lg:text-[64px] text-[#333] font-semibold leading-none mt-2">
            ABOUT TRAVEL
          </h1>
          <p className="text-base lg:text-[24px] mt-8 lg:mt-8 text-[#333]">
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
              className="space-y-4 lg:space-y-6 h-150 overflow-auto"
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
                  placeholder="Input namehere"
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
                  placeholder="Input namehere"
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
                  placeholder="Input namehere"
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
                <label
                  className={`block text-sm font-medium t ${
                    leisureForm.formState.errors.email
                      ? "text-red-500"
                      : "text-[#14476F] "
                  } mb-2 `}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Input email here"
                  {...leisureForm.register("email")}
                  className={`w-full border-b text-black   ${
                    leisureForm.formState.errors.email
                      ? "text-red-500"
                      : "text-[#14476F] "
                  } pb-2 focus:outline-none focus:border-gray-600`}
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
                  placeholder="input text here"
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
                className={`w-full text-white font-medium py-3 rounded-full ${
                  !leisureForm.formState.isValid
                    ? "bg-[#CCCCCC] opacity-50 pointer-events-none cursor-not-allowed"
                    : "bg-[#00537F] cursor-pointer"
                } transition-colors`}
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
                  placeholder="Input namehere"
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
                  placeholder="Input namehere"
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
                <label
                  className={`block text-sm font-medium t ${
                    businessForm.formState.errors.email
                      ? "text-red-500"
                      : "text-[#14476F] "
                  } mb-2 `}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Input email here"
                  {...businessForm.register("email")}
                  className={`w-full border-b border-[#14476F] ${
                    businessForm.formState.errors.email
                      ? "text-red-500"
                      : "text-[#14476F] "
                  } text-black pb-2 focus:outline-none focus:border-gray-600`}
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
                  placeholder="input text here"
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
                className={`w-full text-white font-medium py-3 rounded-full ${
                  !businessForm.formState.isValid
                    ? "bg-[#CCCCCC] opacity-50 pointer-events-none cursor-not-allowed"
                    : "bg-[#00537F] cursor-pointer"
                } transition-colors`}
              >
                Send to us
              </button>
            </form>
          )}
        </div>
      </section>

      {successModal && (
        <Modal
          iconSvg={
            <svg
              width="35"
              height="35"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6663 8L11.9997 22.6667L5.33301 16"
                stroke="#8CC152"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          iconBorder="#D8EACC"
          title="Thanks for reaching out!"
          description1="We've received your message."
          description2="We will get back to you as soon as possible"
          showModal={successModal}
          handleCloseModal={onCloseSucessModal}
        />
      )}

      {failedModal && (
        <Modal
          iconSvg={
            <svg
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="12"
                y1="12"
                x2="38"
                y2="38"
                stroke="#F27474"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <line
                x1="38"
                y1="12"
                x2="12"
                y2="38"
                stroke="#F27474"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          }
          iconBorder="#F27474"
          title="Something went wrong!"
          description1="We couldn’t send your message."
          description2="Please try again in a moment or try refreshing the page"
          showModal={failedModal}
          handleCloseModal={onCloseFailedModal}
        />
      )}
    </div>
  );
}
