import React, { useRef, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import HamburgerIcon from '../icons/HamburgerIcon';

const Header: React.FC = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = useCallback(() => {
    const toValue = isOpen ? 0 : 1;
    Animated.timing(rotateAnim, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  }, [isOpen, rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.hamburger}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <HamburgerIcon size={24} />
        </Animated.View>
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
    width: 28,
    height: 28,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});

export default Header;
