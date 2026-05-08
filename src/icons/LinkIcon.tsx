import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const LinkIcon: React.FC<Props> = ({ size = 22, color = '#1A1A1A' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M10 14 L14 10"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
    />
    <Path
      d="M9 7 L11 5 A3 3 0 0 1 15 5 L18 8 A3 3 0 0 1 18 12 L16 14"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 17 L13 19 A3 3 0 0 1 9 19 L6 16 A3 3 0 0 1 6 12 L8 10"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LinkIcon;
