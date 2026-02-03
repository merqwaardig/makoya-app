import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const HeartIcon: React.FC<Props> = ({ size = 18, color = '#D32F2F' }) => (
  <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <Path
      d="M9 15.5 C6 12.5 2 9.5 2 6.5 C2 4.5 3.5 3 5.5 3 C7 3 8 3.8 9 5 C10 3.8 11 3 12.5 3 C14.5 3 16 4.5 16 6.5 C16 9.5 12 12.5 9 15.5Z"
      stroke={color}
      strokeWidth={1.2}
      fill="none"
    />
  </Svg>
);

export default HeartIcon;
