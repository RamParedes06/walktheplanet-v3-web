import React from 'react';
import { SvgProps } from './SvgProps';

const MenuSvg = ({ width = 40, height = 32, color = '#333' }: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16H28M4 8H28M4 24H28" stroke="#333333" strokeWidth="2.03175" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default MenuSvg;
