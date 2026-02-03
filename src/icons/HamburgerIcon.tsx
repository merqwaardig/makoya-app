import React from 'react';
import Svg, { Rect, Path, G } from 'react-native-svg';

interface Props {
  size?: number;
}

const HamburgerIcon: React.FC<Props> = ({ size = 24 }) => {
  const scale = size / 23;
  const height = 17 * scale;
  return (
    <Svg width={size} height={height} viewBox="0 0 23 17" fill="none">
      <G fill="#3D3D3D">
        <Rect x="0" y="0" width="22" height="2" rx={1} />
        <Rect x="0" y="7" width="22" height="2" rx={1} />
        <Rect x="0" y="14" width="22" height="2" rx={1} />
      </G>
    </Svg>
  );
};

export default HamburgerIcon;
