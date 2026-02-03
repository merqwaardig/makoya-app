import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import SpecialistsIcon from '../icons/SpecialistsIcon';
import MakoyaIcon from '../icons/MakoyaIcon';
import BeYouIcon from '../icons/BeYouIcon';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FooterBg: React.FC = () => (
  <Svg
    width={SCREEN_WIDTH}
    height={66}
    viewBox="0 0 375 66"
    preserveAspectRatio="none"
    style={styles.bgSvg}
  >
    <Path
      d="M187.5,0 C270.794279,0 342.542278,8.399235 375.004376,20.484662 L375.000205,66 L0.498205031,66 L0.497295053,49.700667 L-0.000794969098,49.516 L-0.0037949691,20.484446 C32.4585784,8.399135 104.206219,0 187.5,0 Z"
      fill="#FFFFFF"
    />
  </Svg>
);

const BottomNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <FooterBg />
      <View style={styles.navRow}>
        {/* Specialists — inactive */}
        <TouchableOpacity style={styles.navItemSide}>
          <SpecialistsIcon size={44} />
          <Text style={styles.navLabel}>SPECIALISTS</Text>
        </TouchableOpacity>

        {/* Makoya — center, elevated on the arch */}
        <TouchableOpacity style={styles.navItemCenter}>
          <MakoyaIcon size={48} />
          <Text style={styles.navLabel}>MAKOYA</Text>
        </TouchableOpacity>

        {/* Be | You — active */}
        <TouchableOpacity style={styles.navItemSide}>
          <BeYouIcon size={44} />
          <Text style={[styles.navLabel, styles.navLabelActive]}>BE | YOU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 98,
  },
  bgSvg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 14,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 98,
  },
  navItemSide: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  navItemCenter: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 30,
  },
  navLabel: {
    fontSize: 9,
    fontWeight: '600',
    color: '#999999',
    marginTop: 2,
    letterSpacing: 0.8,
  },
  navLabelActive: {
    color: '#1A1A1A',
  },
});

export default BottomNavigation;
