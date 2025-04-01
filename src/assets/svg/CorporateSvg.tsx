import React from 'react';
import { SvgProps } from './SvgProps';

const CorporateSvg = ({ width = 15, height = 15 }: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_156_1181)">
<path d="M1.66675 11.6667C1.66675 8.52397 1.66675 6.95262 2.64306 5.97631C3.61937 5 5.19072 5 8.33342 5H11.6667C14.8094 5 16.3808 5 17.3571 5.97631C18.3334 6.95262 18.3334 8.52397 18.3334 11.6667C18.3334 14.8094 18.3334 16.3807 17.3571 17.357C16.3808 18.3333 14.8094 18.3333 11.6667 18.3333H8.33341C5.19072 18.3333 3.61937 18.3333 2.64306 17.357C1.66675 16.3807 1.66675 14.8094 1.66675 11.6667Z" stroke="white" stroke-opacity="0.65" stroke-width="1.5"/>
<path d="M13.3334 4.99996C13.3334 3.42861 13.3334 2.64294 12.8453 2.15478C12.3571 1.66663 11.5714 1.66663 10.0001 1.66663C8.42873 1.66663 7.64306 1.66663 7.1549 2.15478C6.66675 2.64294 6.66675 3.42861 6.66675 4.99996" stroke="white" stroke-opacity="0.65" stroke-width="1.5"/>
<path d="M1.66675 9.16663L18.3334 9.16663" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round"/>
<path d="M1.66675 14.1666L18.3334 14.1666" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_156_1181">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
  );
};

export default CorporateSvg;
