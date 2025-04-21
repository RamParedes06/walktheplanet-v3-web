"use client";
import React, { useState } from "react";

interface NavigationButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavigationButton = ({
  className,
  children,
  onClick,
}: NavigationButtonProps) => {

  return (
    <button
      onClick={onClick}
      className={`opacity-65 hover:cursor-pointer hover:opacity-100 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
