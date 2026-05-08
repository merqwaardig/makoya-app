import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackArrow from '../icons/BackArrow';
import LinkIcon from '../icons/LinkIcon';
import InstagramIcon from '../icons/InstagramIcon';
import BottomNavigation from './BottomNavigation';
import type { RootStackParamList } from '../../App';

type Nav = NativeStackNavigationProp<RootStackParamList>;

interface Props {
  heroSource: ImageSourcePropType;
  heroTitle?: string;
  pageTitle: string;
  websiteUrl?: string;
  instagramUrl?: string;
  children: React.ReactNode;
}

const InfoPageLayout: React.FC<Props> = ({
  heroSource,
  heroTitle = 'MAKOYA',
  pageTitle,
  websiteUrl,
  instagramUrl,
  children,
}) => {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Image source={heroSource} style={styles.heroImage} />
          <SafeAreaView style={styles.heroOverlay} edges={['top']}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              activeOpacity={0.7}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <BackArrow size={26} color="#FFFFFF" />
            </TouchableOpacity>
          </SafeAreaView>
          {!!heroTitle && <Text style={styles.heroTitle}>{heroTitle}</Text>}
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.pageTitle}>{pageTitle}</Text>
            <View style={styles.actions}>
              {!!websiteUrl && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(websiteUrl)}
                  style={styles.actionButton}
                  activeOpacity={0.7}
                >
                  <LinkIcon size={22} color="#1A1A1A" />
                </TouchableOpacity>
              )}
              {!!instagramUrl && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(instagramUrl)}
                  style={styles.actionButton}
                  activeOpacity={0.7}
                >
                  <InstagramIcon size={22} color="#1A1A1A" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {children}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

const HERO_HEIGHT = 360;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 0,
  },
  hero: {
    width: '100%',
    height: HERO_HEIGHT,
    backgroundColor: '#0A0A1A',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  backButton: {
    width: 40,
    height: 40,
    marginTop: 8,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    position: 'absolute',
    bottom: 28,
    left: 20,
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    backgroundColor: '#F7F7F7',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  bottomSpacer: {
    height: 140,
  },
});

export default InfoPageLayout;
