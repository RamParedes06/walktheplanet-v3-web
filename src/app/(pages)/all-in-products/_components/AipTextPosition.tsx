import React from "react";

interface AipTextProps {
  title: string;
  description: string;
  className?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

const AipTextPosition = ({
  title,
  description,
  children,
  className,
  variant = "primary",
}: AipTextProps) => {
  const variants = {
    primary: "flex flex-col space-y-5",
    secondary: "flex flex-col text-left px-[24px] space-y-5",
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      <h2 className="font-satoshi font-bold sm:text-5xl ml-5 lg:text-5xl xl:text-[64px] text-[30px]">
        {title}
      </h2>
      <p className="font-generalSans font-medium sm:not-italic italic ml-5 xl:text-2xl text-base">
        {description}
      </p>
      {children}
    </div>
  );
};

export default AipTextPosition;
