import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckInIcon from '../icons/CheckInIcon';
import DiaryIcon from '../icons/DiaryIcon';
import SelfCareIcon from '../icons/SelfCareIcon';

interface ActionCardProps {
  icon: React.ReactNode;
  label: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, label }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.iconWrapper}>{icon}</View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const ActionCards: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActionCard icon={<CheckInIcon size={44} color="#1A1A1A" />} label="Check-in" />
      <ActionCard icon={<DiaryIcon size={44} color="#1A1A1A" />} label="Dairy" />
      <ActionCard icon={<SelfCareIcon size={44} color="#1A1A1A" />} label="SelfCare" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  card: {
    width: 105,
    height: 96,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  iconWrapper: {
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1A1A1A',
  },
});

export default ActionCards;
