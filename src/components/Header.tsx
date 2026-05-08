import React, { useRef, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HamburgerIcon from '../icons/HamburgerIcon';
import type { RootStackParamList } from '../../App';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const Header: React.FC = () => {
  const navigation = useNavigation<Nav>();
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      rotateAnim.setValue(0);
    }, [rotateAnim])
  );

  const handlePress = useCallback(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Menu');
    });
  }, [navigation, rotateAnim]);

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
