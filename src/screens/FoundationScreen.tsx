import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackArrow from '../icons/BackArrow';
import BottomNavigation from '../components/BottomNavigation';
import type { RootStackParamList } from '../../App';

const RED = '#BD151B';
const RED_BG = '#A8141A';
const GREEN = '#3D9A6B';
const TEXT = '#1A1A1A';
const SOFT_BG = '#F7F7F7';
const CARD_BG = '#FFFFFF';
const WHITE = '#FFFFFF';

const HERO = require('../../assets/01_kids_Foundation/header.jpg');
const SHARE_ICON = require('../../assets/01_kids_Foundation/share.png');
const MUDRA = require('../../assets/01_kids_Foundation/mudra.png');
const EXAMPLE_1 = require('../../assets/01_kids_Foundation/example_image_01.jpg');
const EXAMPLE_2 = require('../../assets/01_kids_Foundation/example_image_02.jpg');
const ORGANS = require('../../assets/01_kids_Foundation/organen.png');
const HERBS_BG = require('../../assets/01_kids_Foundation/backround_herbs.jpg');
const I_AM = require('../../assets/01_kids_Foundation/Iam.jpg');
const CHAKRA_LOGO = require('../../assets/01_kids_Foundation/1e_Chakra_logo.png');

type Nav = NativeStackNavigationProp<RootStackParamList>;

// --- Reusable bits ---
const NumberedList: React.FC<{ items: { label?: string; text: string }[]; color?: string; textColor?: string }> = ({
  items,
  color = RED,
  textColor = TEXT,
}) => (
  <View style={{ marginTop: 4 }}>
    {items.map((item, i) => (
      <Text key={i} style={[styles.listLine, { color: textColor }]}>
        <Text style={[styles.listNum, { color }]}>
          {String(i + 1).padStart(2, '0')}.{' '}
        </Text>
        {item.label ? (
          <>
            <Text style={[styles.listLabel, { color: textColor }]}>{item.label}: </Text>
            {item.text}
          </>
        ) : (
          item.text
        )}
      </Text>
    ))}
  </View>
);

const InfoLine: React.FC<{ label: string; value: string; color?: string }> = ({
  label,
  value,
  color = TEXT,
}) => (
  <Text style={[styles.infoLine, { color }]}>
    <Text style={styles.infoLabel}>{label}: </Text>
    {value}
  </Text>
);

const SectionHeading: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = RED,
}) => <Text style={[styles.sectionHeading, { color }]}>{children}</Text>;

const Subtitle: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = TEXT,
}) => <Text style={[styles.subtitle, { color }]}>{children}</Text>;

const Paragraph: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = TEXT,
}) => <Text style={[styles.paragraph, { color }]}>{children}</Text>;

// --- Main screen ---
const FoundationScreen: React.FC = () => {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Image source={HERO} style={styles.heroImage} />
          <SafeAreaView style={styles.heroOverlay} edges={['top']}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <BackArrow size={26} color={WHITE} />
            </TouchableOpacity>
          </SafeAreaView>
          <Text style={styles.heroTitle}>THE FOUNDATION</Text>
        </View>

        {/* Top info card */}
        <View style={styles.topCard}>
          <View style={styles.topCardHeader}>
            <Text style={styles.chakraName}>Root Chakra</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={SHARE_ICON} style={styles.shareIcon} />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 8 }}>
            <InfoLine label="Element" value="Earth" />
            <InfoLine label="Survival" value="I am, Grounded" />
            <InfoLine label="Crystals" value="Red Jasper, Obsidian, Hematit" />
          </View>

          <View style={styles.affirmationRow}>
            <View style={{ flex: 1 }}>
              <InfoLine label="Affirmation" value="I AM" />
              <InfoLine label="Mantra" value="LAM" />
              <InfoLine label="Energy" value="Yang (male)" />
              <InfoLine label="Aura Layer" value="Physical body" />
            </View>
            <Image source={MUDRA} style={styles.mudraImage} resizeMode="contain" />
          </View>
        </View>

        {/* DARE TO SHARE */}
        <View style={styles.section}>
          <SectionHeading>DARE TO SHARE</SectionHeading>
          <NumberedList
            items={[
              { label: 'Feelings', text: 'How do you feel now' },
              { label: 'Thoughts', text: 'what do you think about' },
              { label: 'Be Happy', text: 'Personal Ai Coach' },
            ]}
          />
        </View>

        {/* ASSIGNMENTS */}
        <View style={styles.section}>
          <SectionHeading>ASSIGNMENTS</SectionHeading>
          <NumberedList
            items={[
              { text: 'Make a visionboard' },
              { text: 'Set some goals' },
              { text: 'Take care of a plant' },
              { text: 'Money management' },
              { text: 'Time management' },
            ]}
          />
        </View>

        {/* TIPS TO GROUND */}
        <View style={styles.section}>
          <SectionHeading>TIPS TO GROUND</SectionHeading>
          <NumberedList
            items={[
              { text: 'Go outside. Beach or Forest' },
              { text: 'Walk barefoot. Jump up and down.' },
              { text: 'Hugh a tree. Feel the texture' },
            ]}
          />
        </View>

        {/* AFFIRMATIONS */}
        <View style={styles.section}>
          <SectionHeading>AFFIRMATIONS</SectionHeading>
          <Paragraph>I AM grounded in this reality</Paragraph>
          <Paragraph>I AM safe. I AM healthy</Paragraph>
        </View>

        {/* GET CREATIVE */}
        <View style={styles.section}>
          <SectionHeading>GET CREATIVE</SectionHeading>
          <Paragraph>
            Dare to Share. Show what you made to other kids. Let's create and
            inspire :-)
          </Paragraph>
          <TouchableOpacity style={styles.greenButton} activeOpacity={0.85}>
            <Text style={styles.greenButtonText}>UPLOAD YOUR CREATION</Text>
          </TouchableOpacity>
        </View>

        {/* Example images */}
        <View style={styles.exampleRow}>
          <Image source={EXAMPLE_1} style={styles.exampleImage} resizeMode="cover" />
          <Image source={EXAMPLE_2} style={styles.exampleImage} resizeMode="cover" />
        </View>

        {/* Red marker square */}
        <View style={styles.markerWrapper}>
          <View style={styles.redSquare} />
        </View>

        {/* Chakra in balance */}
        <View style={styles.section}>
          <Text style={styles.bigTitle}>Chakra in balance</Text>

          <View style={styles.balanceBlock}>
            <Subtitle>Healthy chakra</Subtitle>
            <Paragraph>
              Strength, vitality, feeling safe, patient, stability, structure,
              action, discipline, strong foundation
            </Paragraph>
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle>Connected to</Subtitle>
            <Paragraph>
              Smell, safety, security, trust, survival needs, money, home, job,
              vitality
            </Paragraph>
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle>Emotional balance</Subtitle>
            <Paragraph>Balanced, stable, trust, survival, security</Paragraph>
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle>Mental balance</Subtitle>
            <Paragraph>
              Foundation, contentedness, groundedness, inability to let go,
              abundance
            </Paragraph>
          </View>
        </View>

        {/* Chakra in imbalance — red bg */}
        <View style={styles.imbalanceSection}>
          <Text style={[styles.bigTitle, { color: WHITE }]}>
            Chakra in imbalance
          </Text>

          <View style={styles.balanceBlock}>
            <Subtitle color={WHITE}>Blocked chakra</Subtitle>
            <Paragraph color={WHITE}>
              Money issues, addictions, low self-esteem
            </Paragraph>
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle color={WHITE}>Emotional balance</Subtitle>
            <Paragraph color={WHITE}>
              Balanced, stable, trust, survival, security
            </Paragraph>
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle color={WHITE}>Mental balance</Subtitle>
            <Paragraph color={WHITE}>
              Foundation, contentedness, anxiety groundedness, inability to let
              go, insecurity, vagueness, low self-esteem, uncertainty, financial
              stress, procrastination
            </Paragraph>
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle color={WHITE}>Physical</Subtitle>
            <Paragraph color={WHITE}>
              Lower back pain, cold feet, poor circulation
              {'\n'}Chronic fatigue, feeling weak
              {'\n'}Digestive problems, constipation
            </Paragraph>
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle color={WHITE}>Advice blocked chakra</Subtitle>
            <NumberedList
              color={WHITE}
              textColor={WHITE}
              items={[
                { text: 'Sit in nature' },
                { text: 'plant a garden' },
                { text: 'do something physical' },
                { text: 'receive a massage' },
              ]}
            />
          </View>
        </View>

        {/* Body Connection */}
        <View style={styles.section}>
          <Text style={styles.bigTitle}>Body Connection</Text>
          <View style={{ marginTop: 8 }}>
            <InfoLine label="Nerve" value="Sacral Plexus" />
            <InfoLine label="Glands" value="Adrenals" />
            <InfoLine label="System" value="Skeleton, lymph, elimination" />
          </View>
          <View style={styles.balanceBlock}>
            <Subtitle>Organs</Subtitle>
            <Paragraph>
              Vagina, penis, legs, bones, hips, knees, feet, spine, intestines,
              legs
            </Paragraph>
          </View>
          <Image source={ORGANS} style={styles.organsImage} resizeMode="contain" />
        </View>

        {/* Food — herbs background */}
        <View style={styles.foodSection}>
          <Image source={HERBS_BG} style={styles.foodBgImage} resizeMode="cover" />
          <View style={styles.foodOverlay} />
          <View style={styles.foodInner}>
            <Text style={[styles.bigTitle, { color: WHITE }]}>Food</Text>

            <View style={styles.balanceBlock}>
              <Subtitle color={WHITE}>Herbs</Subtitle>
              <Paragraph color={WHITE}>
                Sage, coriander, calendula, gardenia, vanilla, carob, sesame
                seeds
              </Paragraph>
            </View>
            <View style={styles.balanceBlock}>
              <Subtitle color={WHITE}>Foods</Subtitle>
              <Paragraph color={WHITE}>
                Ashwagandha, cinnamon, ginger, rosemary, cayenne, hot paprika
              </Paragraph>
            </View>
            <Text style={[styles.foodLine, { color: WHITE }]}>
              <Text style={styles.foodLabel}>Vitamin: </Text>D
            </Text>
            <Text style={[styles.foodLine, { color: WHITE }]}>
              <Text style={styles.foodLabel}>Cell salt: </Text>Calcium Phosphate
            </Text>
          </View>
        </View>

        {/* I AM | Earth */}
        <View style={styles.iAmWrapper}>
          <Image source={I_AM} style={styles.iAmImage} resizeMode="contain" />
        </View>

        {/* Chakra symbol */}
        <View style={styles.chakraSymbolWrapper}>
          <Image
            source={CHAKRA_LOGO}
            style={styles.chakraSymbol}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.closingText}>Be fully present to the moment</Text>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

const HERO_HEIGHT = 240;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: SOFT_BG },

  // Hero
  hero: {
    width: '100%',
    height: HERO_HEIGHT,
    backgroundColor: '#1A1A1A',
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
    bottom: 22,
    left: 20,
    fontSize: 28,
    fontWeight: '800',
    color: WHITE,
    letterSpacing: 1,
  },

  // Top card
  topCard: {
    backgroundColor: SOFT_BG,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
  },
  topCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  chakraName: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT,
  },
  shareIcon: {
    width: 22,
    height: 22,
    tintColor: TEXT,
  },
  affirmationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  mudraImage: {
    width: 64,
    height: 64,
    marginLeft: 12,
  },

  // Sections
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 4,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 6,
  },
  bigTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT,
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: TEXT,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 21,
    color: TEXT,
  },

  // Info lines
  infoLine: {
    fontSize: 14,
    lineHeight: 22,
    color: TEXT,
  },
  infoLabel: {
    fontWeight: '700',
  },

  // Numbered list
  listLine: {
    fontSize: 14,
    lineHeight: 22,
    color: TEXT,
  },
  listNum: {
    fontWeight: '700',
  },
  listLabel: {
    fontWeight: '700',
  },

  // Balance / imbalance blocks
  balanceBlock: {
    marginTop: 16,
  },

  // Imbalance (red bg)
  imbalanceSection: {
    backgroundColor: RED_BG,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    marginTop: 24,
  },

  // Get Creative button
  greenButton: {
    backgroundColor: GREEN,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
  },
  greenButtonText: {
    color: WHITE,
    fontWeight: '700',
    letterSpacing: 1.2,
    fontSize: 14,
  },

  // Examples
  exampleRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 16,
    gap: 10,
  },
  exampleImage: {
    flex: 1,
    minWidth: 0,
    height: 200,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
  },

  // Red square marker
  markerWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 4,
  },
  redSquare: {
    width: 16,
    height: 16,
    backgroundColor: RED,
    borderRadius: 2,
  },

  // Organs image (948x192 banner - 5 icons in a row)
  organsImage: {
    width: '100%',
    aspectRatio: 948 / 192,
    alignSelf: 'center',
    marginTop: 16,
  },

  // Food section
  foodSection: {
    marginTop: 28,
    paddingVertical: 28,
    paddingHorizontal: 20,
    minHeight: 320,
    overflow: 'hidden',
    position: 'relative',
  },
  foodBgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  foodOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  foodInner: {
    position: 'relative',
  },
  foodLine: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 4,
  },
  foodLabel: {
    fontWeight: '700',
  },

  // I AM | Earth (945x150 banner)
  iAmWrapper: {
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  iAmImage: {
    width: '100%',
    aspectRatio: 945 / 150,
  },

  // Chakra symbol
  chakraSymbolWrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  chakraSymbol: {
    width: 280,
    height: 280,
  },

  closingText: {
    textAlign: 'center',
    fontSize: 14,
    color: TEXT,
    marginTop: 16,
    marginBottom: 8,
  },

  bottomSpacer: {
    height: 140,
  },
});

export default FoundationScreen;
