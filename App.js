import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * LandingScreen is the main entry point for the Business App.
 * It showcases the value proposition, highlights key features,
 * and provides quick access to primary actions.
 */
const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <HeroSection />
        <FeatureSection />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

/** Header with app name and subtle background */
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.appName}>BusinessSuite</Text>
  </View>
);

/** Hero section with primary call-to-action */
const HeroSection = () => (
  <View style={styles.hero}>
    <Text style={styles.heroTitle}>Skalieren Sie Ihr Business smarter.</Text>
    <Text style={styles.heroSubtitle}>
      Alle Kennzahlen, Teams und Prozesse an einem Ort – sicher, schnell und immer verfügbar.
    </Text>
    <TouchableOpacity style={styles.ctaButton} activeOpacity={0.85}>
      <Text style={styles.ctaText}>Jetzt starten</Text>
    </TouchableOpacity>
  </View>
);

/** Feature cards grouped in a vertical list */
const FeatureSection = () => (
  <View style={styles.features}>
    <Text style={styles.sectionTitle}>Top Features</Text>
    <View style={styles.featureCard}>
      <View style={styles.iconPlaceholder} />
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>Insights in Echtzeit</Text>
        <Text style={styles.featureDescription}>
          Live-Dashboards mit klaren KPIs für schnelle Entscheidungen ohne manuelle Reports.
        </Text>
      </View>
    </View>
    <View style={styles.featureCard}>
      <View style={styles.iconPlaceholder} />
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>Team Kollaboration</Text>
        <Text style={styles.featureDescription}>
          Aufgaben, Kommentare und Freigaben nahtlos bündeln und in Echtzeit synchronisieren.
        </Text>
      </View>
    </View>
    <View style={styles.featureCard}>
      <View style={styles.iconPlaceholder} />
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>Sichere Datenräume</Text>
        <Text style={styles.featureDescription}>
          DSGVO-konforme Speicherung, versionierte Dokumente und granulare Zugriffsrechte.
        </Text>
      </View>
    </View>
  </View>
);

/** Footer with legal links */
const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerLink}>Datenschutz</Text>
    <Text style={styles.footerDivider}>|</Text>
    <Text style={styles.footerLink}>AGB</Text>
    <Text style={styles.footerDivider}>|</Text>
    <Text style={styles.footerLink}>Impressum</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  container: {
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#0A2540',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 24,
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0A2540',
    letterSpacing: 0.5,
  },
  hero: {
    backgroundColor: '#0A2540',
    padding: 24,
    borderRadius: 16,
    marginBottom: 28,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
    lineHeight: 34,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#E6EDF5',
    lineHeight: 22,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#4F9CF9',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  features: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0A2540',
    marginBottom: 16,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    shadowColor: '#0A2540',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  iconPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E6EDF5',
    marginRight: 12,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0A2540',
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerLink: {
    fontSize: 14,
    color: '#4F9CF9',
    fontWeight: '600',
  },
  footerDivider: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#9CA3AF',
  },
});

export default LandingScreen;
