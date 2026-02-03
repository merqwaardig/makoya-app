import React from 'react';
import Svg, { Circle, Rect, G } from 'react-native-svg';

interface Props {
  size?: number;
}

const Chakra1Icon: React.FC<Props> = ({ size = 30 }) => (
  <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
    {/* Red filled circle */}
    <Circle cx="15" cy="15" r="15" fill="#BD151B" fillRule="nonzero" />
    {/* White square inside */}
    <G transform="translate(6.5217, 6.5217)" stroke="#FFFFFF">
      <Rect x="0.5" y="0.5" width="15.9565217" height="15.9565217" fill="none" />
    </G>
  </Svg>
);

export default Chakra1Icon;
