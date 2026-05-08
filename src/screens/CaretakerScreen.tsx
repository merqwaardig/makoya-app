import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import InfoPageLayout from '../components/InfoPageLayout';

const HERO_URI =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80';

type Feature = {
  label: string;
  image: string;
};

const FEATURES: Feature[] = [
  {
    label: 'Kids Cource',
    image:
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Chakra Poster',
    image:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Healings',
    image:
      'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=600&q=80',
  },
];

const CaretakerScreen: React.FC = () => {
  return (
    <InfoPageLayout
      heroSource={{ uri: HERO_URI }}
      heroTitle="CARETAKER"
      pageTitle="Mr.Wuwai"
      websiteUrl="https://wuwai.org"
      instagramUrl="https://instagram.com/mr_wuwai"
    >
      <Text style={styles.body}>
        MrWuwai is renowned as a leading specialist in the field of chakra and
        energy, boasting an impressive track record of successfully treating
        over 500 individuals. His unique approach blends traditional wisdom
        with modern techniques, setting him apart in the realm of holistic
        healing.
      </Text>

      <Text style={styles.reviewsLabel}>Reviews</Text>

      <View style={styles.featuresRow}>
        {FEATURES.map((f) => (
          <TouchableOpacity
            key={f.label}
            style={styles.featureCard}
            activeOpacity={0.85}
          >
            <Image source={{ uri: f.image }} style={styles.featureImage} />
            <Text style={styles.featureLabel}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </InfoPageLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1A1A',
  },
  reviewsLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 24,
    marginBottom: 14,
  },
  featuresRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  featureCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  featureImage: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#EEEEEE',
  },
  featureLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1A1A',
    paddingVertical: 12,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default CaretakerScreen;
