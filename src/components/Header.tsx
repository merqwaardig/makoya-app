import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HamburgerIcon from '../icons/HamburgerIcon';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hamburger}>
        <HamburgerIcon size={24} color="#1A1A1A" />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome back Michael!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  hamburger: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});

export default Header;
