"use client";
import React from "react";

interface NavigationButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const NavigationButton = ({
  className,
  children,
  onClick,
  disabled,
}: NavigationButtonProps) => {
  return (
    <button onClick={onClick} className={` ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default NavigationButton;
