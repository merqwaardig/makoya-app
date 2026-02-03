import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ActionCards from '../components/ActionCards';
import LunarCalendar from '../components/LunarCalendar';
import CourseCard from '../components/CourseCard';
import CareTakers from '../components/CareTakers';
import BottomNavigation from '../components/BottomNavigation';
import Chakra1Icon from '../icons/Chakra1Icon';
import Chakra2Icon from '../icons/Chakra2Icon';

const DashboardScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <ActionCards />
          <LunarCalendar />

          {/* Be You - Course Section */}
          <Text style={styles.sectionTitle}>Be You  -  Course</Text>

          <CourseCard
            icon={<Chakra1Icon size={36} />}
            title="Fundament - Level 1"
            progress={8}
            total={28}
            color="#BD151B"
          />

          <CourseCard
            icon={<Chakra2Icon size={36} />}
            title="Movement - Level 2"
            progress={19}
            total={28}
            color="#F35822"
          />

          <CareTakers />

          {/* Bottom spacing for nav */}
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 4,
  },
  bottomSpacer: {
    height: 116,
  },
});

export default DashboardScreen;
