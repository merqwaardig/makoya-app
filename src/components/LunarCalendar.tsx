import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chakra3Icon from '../icons/Chakra3Icon';

const LunarCalendar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>28 DAY LUNAR CALENDAR</Text>
        <Text style={styles.subtitle}>
          It's Sunday - Day of the Sun - 3e chakra - Solar Plexus
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Chakra3Icon size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#F5B400',
    borderRadius: 20,
    height: 96,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 18,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LunarCalendar;
