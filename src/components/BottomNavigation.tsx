import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SpecialistsIcon from '../icons/SpecialistsIcon';
import MakoyaIcon from '../icons/MakoyaIcon';
import BeYouIcon from '../icons/BeYouIcon';

const BottomNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navRow}>
        {/* Specialists — inactive */}
        <TouchableOpacity style={styles.navItem}>
          <SpecialistsIcon size={44} />
          <Text style={styles.navLabel}>SPECIALISTS</Text>
        </TouchableOpacity>

        {/* Makoya — center */}
        <TouchableOpacity style={styles.navItem}>
          <MakoyaIcon size={48} />
          <Text style={styles.navLabel}>MAKOYA</Text>
        </TouchableOpacity>

        {/* Be | You — active */}
        <TouchableOpacity style={styles.navItem}>
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
    height: 72,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
