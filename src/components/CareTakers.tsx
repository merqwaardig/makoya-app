import React, { useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, Animated } from 'react-native';
import MapSection from './MapSection';
import ChevronRight from '../icons/ChevronRight';
import HeartIcon from '../icons/HeartIcon';

interface CareTakerCardProps {
  name: string;
  role: string;
  time: string;
  likes: number;
  avatarSource: ImageSourcePropType;
  shakeAnim: Animated.Value;
}

const CareTakerCard: React.FC<CareTakerCardProps> = ({
  name,
  role,
  time,
  likes,
  avatarSource,
  shakeAnim,
}) => (
  <Animated.View style={[styles.card, { transform: [{ translateX: shakeAnim }] }]}>
    <View style={styles.cardTop}>
      <Image source={avatarSource} style={styles.avatar} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardRole}>{role}</Text>
        <Text style={styles.cardTime}>{time}</Text>
      </View>
    </View>
    <View style={styles.cardDivider} />
    <View style={styles.cardBottom}>
      <View style={styles.likesRow}>
        <HeartIcon size={16} color="#D32F2F" />
        <Text style={styles.likesText}>{likes}</Text>
      </View>
      <ChevronRight size={16} color="#CCCCCC" />
    </View>
  </Animated.View>
);

const CareTakers: React.FC = () => {
  const talisShake = useRef(new Animated.Value(0)).current;
  const mrwuwaiShake = useRef(new Animated.Value(0)).current;

  const triggerShake = useCallback((anim: Animated.Value) => {
    Animated.sequence([
      Animated.timing(anim, { toValue: -6, duration: 50, useNativeDriver: true }),
      Animated.timing(anim, { toValue: 6, duration: 50, useNativeDriver: true }),
      Animated.timing(anim, { toValue: -5, duration: 50, useNativeDriver: true }),
      Animated.timing(anim, { toValue: 5, duration: 50, useNativeDriver: true }),
      Animated.timing(anim, { toValue: -3, duration: 50, useNativeDriver: true }),
      Animated.timing(anim, { toValue: 3, duration: 50, useNativeDriver: true }),
      Animated.timing(anim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleMarkerPress = useCallback((id: string) => {
    if (id === 'talis') {
      triggerShake(talisShake);
    } else if (id === 'mrwuwai') {
      triggerShake(mrwuwaiShake);
    }
  }, [talisShake, mrwuwaiShake, triggerShake]);

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>CareTakers</Text>
        <ChevronRight size={20} color="#999999" />
      </View>
      <View style={styles.mapContainer}>
        <MapSection onMarkerPress={handleMarkerPress} />
        {/* Overlay cards */}
        <View style={styles.cardsOverlay}>
          <CareTakerCard
            name="Talis"
            role="Human Design Guru"
            time="30 min ago"
            likes={13}
            avatarSource={require('../../assets/Talis.png')}
            shakeAnim={talisShake}
          />
          <CareTakerCard
            name="Mr.Wuwai"
            role="Energy Specialist"
            time="50 min ago"
            likes={21}
            avatarSource={require('../../assets/MrWuwai.png')}
            shakeAnim={mrwuwaiShake}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  mapContainer: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    height: 260,
    backgroundColor: '#B3DAF1',
  },
  cardsOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 12,
    right: 12,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    marginRight: 8,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  cardRole: {
    fontSize: 11,
    fontWeight: '500',
    color: '#1A1A1A',
    marginTop: 1,
  },
  cardTime: {
    fontSize: 10,
    color: '#999999',
    marginTop: 2,
  },
  cardDivider: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    marginVertical: 8,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likesText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1A1A1A',
  },
});

export default CareTakers;
