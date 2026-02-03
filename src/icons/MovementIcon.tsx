import React from 'react';
import Svg, { Circle } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const MovementIcon: React.FC<Props> = ({ size = 40, color = '#F4511E' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    {/* Outer ring */}
    <Circle cx="20" cy="20" r="15" stroke={color} strokeWidth={2} fill="none" />
    {/* Inner filled circle */}
    <Circle cx="20" cy="20" r="8" fill={color} />
  </Svg>
);

export default MovementIcon;
