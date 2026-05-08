import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HamburgerIcon from '../icons/HamburgerIcon';
import ChevronRight from '../icons/ChevronRight';
import BottomNavigation from '../components/BottomNavigation';
import type { RootStackParamList } from '../../App';

type Nav = NativeStackNavigationProp<RootStackParamList>;

type Item = {
  label: string;
  comingSoon?: boolean;
  route?: keyof RootStackParamList;
};

type Section = {
  title: string;
  items: Item[];
};

const SECTIONS: Section[] = [
  {
    title: 'BE  |  YOU',
    items: [
      { label: 'Progress', comingSoon: true },
      { label: 'Profile' },
    ],
  },
  {
    title: 'SERVICES',
    items: [
      { label: 'CareTakers' },
      { label: 'Products', comingSoon: true },
    ],
  },
  {
    title: 'KIDS CLUB',
    items: [
      { label: 'Be | You Course', comingSoon: true },
      { label: 'Family Healings' },
    ],
  },
  {
    title: 'MAKOYA',
    items: [
      { label: 'About', route: 'About' },
      { label: 'Mision & Vision', route: 'MissionVision' },
    ],
  },
];

const MenuScreen: React.FC = () => {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.header}
            activeOpacity={0.7}
          >
            <View style={styles.iconRotated}>
              <HamburgerIcon size={22} />
            </View>
            <Text style={styles.menuLabel}>Menu</Text>
          </TouchableOpacity>

          {SECTIONS.map((section) => (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.sectionInner}>
                {section.items.map((item, idx) => (
                  <React.Fragment key={item.label}>
                    <TouchableOpacity
                      style={styles.row}
                      disabled={item.comingSoon || !item.route}
                      activeOpacity={0.6}
                      onPress={() => item.route && navigation.navigate(item.route)}
                    >
                      <View style={styles.rowLeft}>
                        <Text style={styles.itemLabel}>{item.label}</Text>
                        {item.comingSoon && (
                          <Text style={styles.comingSoon}>(is coming soon)</Text>
                        )}
                      </View>
                      <ChevronRight size={18} color="#999999" />
                    </TouchableOpacity>
                    {idx < section.items.length - 1 && <View style={styles.divider} />}
                  </React.Fragment>
                ))}
              </View>
            </View>
          ))}

          <View style={styles.bottomSpacer} />
        </ScrollView>

        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 28,
  },
  iconRotated: {
    transform: [{ rotate: '90deg' }],
    marginRight: 14,
  },
  menuLabel: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
    paddingHorizontal: 16,
    marginBottom: 8,
    letterSpacing: 0.4,
  },
  sectionInner: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flex: 1,
  },
  itemLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#1A1A1A',
  },
  comingSoon: {
    fontSize: 13,
    color: '#B0B0B0',
    marginLeft: 8,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#D8D8D8',
  },
  bottomSpacer: {
    height: 116,
  },
});

export default MenuScreen;
