import React from 'react';
import { SvgProps } from './SvgProps';

const TravelPackageSvg = ({ width = 15, height = 15, color = 'none' }: SvgProps) => {
  return (
    <svg width={width}height={height} viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_156_1468)">
      <path d="M3.33325 8.33329C3.33325 5.1906 3.33325 3.61925 4.30956 2.64294C5.28587 1.66663 6.85722 1.66663 9.99992 1.66663C13.1426 1.66663 14.714 1.66663 15.6903 2.64294C16.6666 3.61925 16.6666 5.1906 16.6666 8.33329V9.99996C16.6666 13.1427 16.6666 14.714 15.6903 15.6903C14.714 16.6666 13.1426 16.6666 9.99992 16.6666C6.85722 16.6666 5.28587 16.6666 4.30956 15.6903C3.33325 14.714 3.33325 13.1427 3.33325 9.99996V8.33329Z" stroke="white" stroke-opacity="0.65" stroke-width="1.5"/>
      <path d="M3.33325 10.8334H16.6666" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.9167 13.3334H14.1667" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.83325 13.3334H7.08325" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 16.25V17.5C5 17.9602 5.3731 18.3333 5.83333 18.3333H7.08333C7.54357 18.3333 7.91667 17.9602 7.91667 17.5V16.6667" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.9999 16.25V17.5C14.9999 17.9602 14.6268 18.3333 14.1666 18.3333H12.9166C12.4563 18.3333 12.0833 17.9602 12.0833 17.5V16.6667" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.6667 7.5H17.5001C17.9603 7.5 18.3334 7.8731 18.3334 8.33333V9.16667C18.3334 9.42896 18.2099 9.67595 18.0001 9.83333L16.6667 10.8333" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.33341 7.5H2.50008C2.03984 7.5 1.66675 7.8731 1.66675 8.33333V9.16667C1.66675 9.42896 1.79024 9.67595 2.00008 9.83333L3.33341 10.8333" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.25 4.16663H3.75" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_156_1468">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  );
};

export default TravelPackageSvg;
