import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const FundamentIcon: React.FC<Props> = ({ size = 40, color = '#D32F2F' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    {/* Rounded square with stop symbol */}
    <Rect x="6" y="6" width="28" height="28" rx={6} stroke={color} strokeWidth={2} fill="none" />
    {/* Inner square / stop button */}
    <Rect x="14" y="14" width="12" height="12" rx={2} fill={color} />
  </Svg>
);

export default FundamentIcon;
