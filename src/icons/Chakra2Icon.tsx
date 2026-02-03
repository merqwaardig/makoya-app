import React from 'react';
import Svg, { Circle, Ellipse, G } from 'react-native-svg';

interface Props {
  size?: number;
}

const Chakra2Icon: React.FC<Props> = ({ size = 30 }) => (
  <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
    {/* Orange filled circle */}
    <Circle cx="15" cy="15" r="15" fill="#F35822" fillRule="nonzero" />
    {/* White circle and ellipse inside */}
    <G transform="translate(3.2609, 3.2609)" stroke="#FFFFFF" fill="none">
      <Circle cx="11.7391304" cy="11.7391304" r="11.7391304" />
      <Ellipse cx="11.7391304" cy="9.7826087" rx="11.0869565" ry="9.7826087" />
    </G>
  </Svg>
);

export default Chakra2Icon;
