import React from 'react';
import { SvgProps } from './SvgProps';

const MiceSvg = ({ width = 15, height = 15, color = '#ffffff' }: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_156_787)">
      <path d="M1.66663 1.66663H18.3333" stroke="#333333" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M7.5 8.75004L8.57741 7.67263C8.85519 7.39485 8.99408 7.25596 9.16667 7.25596C9.33926 7.25596 9.47814 7.39485 9.75592 7.67263L10.2441 8.16079C10.5219 8.43856 10.6607 8.57745 10.8333 8.57745C11.0059 8.57745 11.1448 8.43856 11.4226 8.16078L12.5 7.08337" stroke="#333333" strokeOpacity="0.85" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M10 17.5L10 14.1667" stroke="#333333" strokeOpacity="0.85" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8.33337 18.3333L10 17.5" stroke="#333333" strokeOpacity="0.85" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M11.6667 18.3333L10 17.5" stroke="#333333" strokeOpacity="0.85" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M16.6667 1.66663V8.74996C16.6667 11.3034 16.6667 12.5801 15.8299 13.3734C14.993 14.1666 13.6462 14.1666 10.9524 14.1666H9.04766C6.35392 14.1666 5.00705 14.1666 4.17021 13.3734C3.33337 12.5801 3.33337 11.3034 3.33337 8.74996V1.66663" stroke="#333333" strokeOpacity="0.85" stroke-width="1.5"/>
    </g>
    <defs>
      <clipPath id="clip0_156_787">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  );
};

export default MiceSvg;
