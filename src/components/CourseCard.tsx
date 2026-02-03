import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ChevronRight from '../icons/ChevronRight';

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  progress: number;
  total: number;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon,
  title,
  progress,
  total,
  color,
}) => {
  const progressPercent = (progress / total) * 100;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
        <ChevronRight size={20} color="#CCCCCC" />
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${progressPercent}%`, backgroundColor: color },
            ]}
          />
        </View>
        <Text style={[styles.progressText, { color }]}>
          {progress < 10 ? `0${progress}` : progress}/{total} DAYS
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingTop: 18,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  progressContainer: {
    marginTop: 12,
  },
  progressTrack: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    borderRadius: 2,
  },
  progressText: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 6,
    letterSpacing: 0.5,
  },
});

export default CourseCard;
