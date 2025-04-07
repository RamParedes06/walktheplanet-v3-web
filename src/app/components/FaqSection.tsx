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
      question: "What are the partners and affiliations of WalkThePlanet?",
      answer:
        "WalkThePlanet partners with various hotels, airlines, tour operators, and local businesses worldwide to provide comprehensive travel services. Our affiliations include major international travel associations and sustainable tourism initiatives.",
    },
    {
      id: "faq-2",
      number: "02",
      question: "How can I find WalkThePlanet?",
      answer:
        "You can find WalkThePlanet through our website, mobile app, social media channels, or by visiting one of our physical locations in major cities. Our customer service is also available 24/7 via phone and email.",
    },
    {
      id: "faq-3",
      number: "03",
      question: "How can I know more about WalkThePlanet?",
      answer:
        "To learn more about WalkThePlanet, you can browse our website, subscribe to our newsletter, follow us on social media, or contact our customer service team directly for specific information about our services and offerings.",
    },
    {
      id: "faq-4",
      number: "04",
      question: "What payment methods are available?",
      answer:
        "WalkThePlanet accepts various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and in some locations, we offer installment payment plans for larger bookings.",
    },
    {
      id: "faq-5",
      number: "05",
      question: "How does WalkThePlanet customize travel packages?",
      answer:
        "WalkThePlanet customizes travel packages based on your preferences, budget, and travel goals. Our travel experts work with you to create personalized itineraries that include accommodations, transportation, activities, and special experiences tailored to your interests.",
    },
    {
      id: "faq-6",
      number: "06",
      question: "How can I find the latest travel promos from WalkThePlanet?",
      answer:
        "You can find our latest travel promotions by subscribing to our newsletter, checking our website's 'Deals' section, following us on social media, or enabling notifications on our mobile app for real-time updates on special offers.",
    },
    {
      id: "faq-7",
      number: "07",
      question: "Tell us more about your thoughts with WalkThePlanet?",
      answer:
        "We value your feedback! You can share your thoughts about WalkThePlanet through our customer satisfaction surveys, by leaving reviews on our website or social media, or by contacting our customer service team directly with your comments and suggestions.",
    },
  ];

  return (
    <section className="flex items-center justify-center w-full h-full bg-gradient-to-b from-blue-900 via-teal-800 to-yellow-500 text-white px-4 md:px-20">
      <div className="max-w-4xl mx-auto py-10">
        {faqItems.map((item) => (
          <div key={item.id} className="border-b border-white/20 py-10 md:py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-start gap-6">
                <span className="text-white/70 font-medium">{item.number}</span>
                <h3 className="text-[16px] px-6 md:text-lg md:font-medium">
                  {item.question}
                </h3>
              </div>
              <button className="flex-shrink-0">
                {openItem === item.id ? (
                  <FaMinus className="w-5 h-5 text-white" />
                ) : (
                  <FaPlus className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === item.id
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pl-12 text-white/80">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
