import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import InfoPageLayout from '../components/InfoPageLayout';

const openUrl = (url: string) => {
  Linking.openURL(url);
};

const HERO_URI =
  'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80';

const AboutScreen: React.FC = () => {
  return (
    <InfoPageLayout
      heroSource={{ uri: HERO_URI }}
      pageTitle="About"
      websiteUrl="https://merqwaardig.com"
      instagramUrl="https://instagram.com/makoya"
    >
      <Text style={styles.body}>
        Makoya originated from something very simple:{' '}
        <Text style={styles.bold}>life</Text> itself. With everything that goes
        with it: highs and lows, beautiful days and difficult lessons. It arose
        from my search for <Text style={styles.bold}>balance</Text>. For{' '}
        <Text style={styles.bold}>self-love</Text>. For{' '}
        <Text style={styles.bold}>growth</Text>. For living from your heart,
        with <Text style={styles.bold}>passion</Text> and a clear{' '}
        <Text style={styles.bold}>purpose in life</Text>.
      </Text>

      <Text style={[styles.body, styles.spacedLarge]}>
        <Text style={styles.bold}>Michael  Verhaar</Text> (the Creator)
      </Text>

      <Text style={[styles.body, styles.spaced]}>
        <Text
          style={styles.bold}
          onPress={() => openUrl('https://merqwaardig.com')}
        >
          Merqwaardig.com
        </Text>
        {' - Creative Agency\n'}
        <Text
          style={styles.bold}
          onPress={() => openUrl('https://wuwai.org')}
        >
          Wuwai.org
        </Text>
        {' - Connect, Create, Elevate\n'}
        <Text
          style={styles.bold}
          onPress={() => openUrl('https://thewellderness.org')}
        >
          theWellderness.org
        </Text>
        {' - Playground for Growth'}
      </Text>
    </InfoPageLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1A1A',
  },
  bold: {
    fontWeight: '700',
  },
  spaced: {
    marginTop: 18,
  },
  spacedLarge: {
    marginTop: 28,
  },
});

export default AboutScreen;
