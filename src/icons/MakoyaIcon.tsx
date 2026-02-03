import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  size?: number;
}

const MakoyaIcon: React.FC<Props> = ({ size = 48 }) => (
  <Image
    source={require('../../assets/Makoya.png')}
    style={{ width: size, height: size }}
    resizeMode="contain"
  />
);

export default MakoyaIcon;
