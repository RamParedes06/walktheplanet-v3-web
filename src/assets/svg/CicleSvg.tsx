import React from 'react';
import { SvgProps } from './SvgProps';

const CircleSvg = ({ width = 15, height = 15, color = 'none' }: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 10 10" fill={color} xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="4.5" stroke="#333"/>
    </svg>
  );
};

export default CircleSvg;
