import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  size?: number;
}

const BeYouIcon: React.FC<Props> = ({ size = 44 }) => (
  <Image
    source={require('../../assets/Be-you.png')}
    style={[styles.image, { width: size, height: size }]}
    resizeMode="contain"
  />
);

const styles = StyleSheet.create({
  image: {
    // dimensions set inline
  },
});

export default BeYouIcon;
