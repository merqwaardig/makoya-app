import React from 'react';
import { Text, StyleSheet } from 'react-native';
import InfoPageLayout from '../components/InfoPageLayout';

const HERO_URI =
  'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80';

const MissionVisionScreen: React.FC = () => {
  return (
    <InfoPageLayout
      heroSource={{ uri: HERO_URI }}
      pageTitle="Mission & Vision"
      websiteUrl="https://makoya.app"
      instagramUrl="https://instagram.com/makoya"
    >
      <Text style={styles.sectionLabel}>Mission</Text>
      <Text style={styles.body}>
        We connect people with the right guidance, tools and community, so that
        self-care, healing and personal growth become accessible to everyone,
        from the inside out.
      </Text>

      <Text style={[styles.sectionLabel, styles.sectionLabelSpaced]}>
        Vision
      </Text>
      <Text style={styles.body}>
        A world in which we live from the heart again: connected to ourselves,
        each other and nature, with an ecosystem that comes together digitally
        and physically (app, therapists and theWellderness).
      </Text>
    </InfoPageLayout>
  );
};

const styles = StyleSheet.create({
  sectionLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  sectionLabelSpaced: {
    marginTop: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1A1A',
  },
});

export default MissionVisionScreen;
