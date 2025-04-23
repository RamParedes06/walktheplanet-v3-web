"use client";

interface SuccessModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
  iconSvg: React.ReactNode;
  iconBorder: string;
  title: string;
  description1: string;
  description2: string;
}

export default function Modal({
  showModal,
  handleCloseModal,
  iconSvg,
  iconBorder,
  title,
  description1,
  description2,
}: SuccessModalProps) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 flex flex-col items-center">
        <div
          style={{ borderColor: iconBorder }}
          className={`w-20 h-20 rounded-full border-4 flex items-center justify-center mb-6`}
        >
          {iconSvg}
        </div>
        <h2 className="text-2xl font-medium text-gray-800 mb-2">{title}</h2>
        <p className="text-center text-gray-600 mb-8">
          {description1}
          <br />
          {description2}
        </p>
        <button
          onClick={handleCloseModal}
          className="bg-[#2E6DA4] text-white font-medium py-3 px-8 rounded-full w-full cursor-pointer"
        >
          Back to Site
        </button>
      </div>
    </div>
  );
}
