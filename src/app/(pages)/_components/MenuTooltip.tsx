import React, { useState } from "react";
import CopySvg from "@/assets/svg/copy.svg";
import ShareSvg from "@/assets/svg/share.svg";
import Image from "next/image";

interface MenuTooltipProps {
  copyLink: string;
}

const MenuTooltip = ({ copyLink }: MenuTooltipProps) => {
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyLink || "yawa");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="absolute left-0 top-full mt-2 z-10 ">
      {/* Triangle pointer at top left */}
      <div className="absolute -top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#FE8840] "></div>

      {/* Main tooltip container */}
      <div className="flex w-[90px] h-[40px] items-center justify-center p-6 bg-[#FE8840] rounded-xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex gap-4">
          {/* Copy Button */}
          <div className="relative tooltip-container">
            <button
              className="cursor-pointer flex items-center justify-center w-[24px] h-[24px] bg-white rounded-full transition-all duration-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 button-content"
              onClick={handleCopy}
              onMouseEnter={() => setShowCopyTooltip(true)}
              onMouseLeave={() => setShowCopyTooltip(false)}
              aria-label="Copy link"
            >
              <Image src={CopySvg} width={15} height={15} alt="Copy Button" />
            </button>

            {/* Copy Tooltip */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-4 shadow-lg transition-all duration-500 z-10 ${
                showCopyTooltip
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-90"
              } w-32 text-center`}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white border-opacity-90"></div>
              <p className="text-gray-800 text-sm font-medium">
                {copied ? "Copied!" : "Copy Link"}
              </p>
            </div>
          </div>

          {/* Open Link Button */}
          <div className="relative tooltip-container">
            <button
              className="cursor-pointer flex items-center justify-center w-[24px] h-[24px] bg-white rounded-full transition-all duration-400 hover:shadow-lg hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-300 button-content"
              aria-label="Open link"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/#compose",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Image src={ShareSvg} width={15} height={15} alt="Copy Button" />
            </button>

            {/* Open Link Tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-4 shadow-lg transition-all duration-500 z-10 opacity-0 invisible scale-90 group-hover:opacity-100 group-hover:visible group-hover:scale-100 w-32 text-center pointer-events-none">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white border-opacity-90"></div>
              <p className="text-gray-800 text-sm font-medium">Open Link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTooltip;
