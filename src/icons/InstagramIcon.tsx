import React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const InstagramIcon: React.FC<Props> = ({ size = 22, color = '#1A1A1A' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke={color}
      strokeWidth={1.6}
    />
    <Circle cx="12" cy="12" r="4" stroke={color} strokeWidth={1.6} />
    <Circle cx="17.5" cy="6.5" r="1" fill={color} />
  </Svg>
);

export default InstagramIcon;
