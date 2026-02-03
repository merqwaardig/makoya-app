import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const SunIcon: React.FC<Props> = ({ size = 40, color = '#FFFFFF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    {/* Center circle */}
    <Circle cx="20" cy="20" r="7" stroke={color} strokeWidth={1.5} fill="none" />
    {/* Sun rays */}
    <Line x1="20" y1="5" x2="20" y2="10" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1="20" y1="30" x2="20" y2="35" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1="5" y1="20" x2="10" y2="20" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1="30" y1="20" x2="35" y2="20" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    {/* Diagonal rays */}
    <Line x1="9.4" y1="9.4" x2="12.9" y2="12.9" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1="27.1" y1="27.1" x2="30.6" y2="30.6" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1="30.6" y1="9.4" x2="27.1" y2="12.9" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1="12.9" y1="27.1" x2="9.4" y2="30.6" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
  </Svg>
);

export default SunIcon;
