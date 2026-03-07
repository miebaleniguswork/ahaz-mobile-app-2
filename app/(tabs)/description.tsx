import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Standard for checkmark icons

const Description = () => {
  return (
    <View style={styles.container}>
      {/* Hero Image Section */}
      <Image 
        source={require('../../assets/images/ahaz-team.png')} 
        style={styles.heroImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        {/* Main Title */}
        <Text style={styles.title}>
          Ahazawi: a Digital Learning Platform for Everyone
        </Text>

        {/* Sub-headline */}
        <Text style={styles.subtitle}>
          We bridge the gap in education. Learn from anywhere anytime.
        </Text>

        {/* Feature List */}
        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#28a745" />
            <Text style={styles.featureText}>
              Explore a vast library of self-paced courses and set your own learning schedule.
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#28a745" />
            <Text style={styles.featureText}>
              Choose from independent study, interactive online classes with teachers, or a blend of both.
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#28a745" />
            <Text style={styles.featureText}>
              Earn recognized certifications through standardized exams to showcase your knowledge.
            </Text>
          </View>
        </View>

        {/* Closing Statement */}
        <Text style={styles.closingText}>
          Start, learn, connect, and thrive with Ahazawi, your gateway to your brighter future.
        </Text>

        {/* CTA Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Read More</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingTop: 40,
  },
  heroImage: {
    width: '100%',
    height: 250, // Adjust based on your preference
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 34,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 25,
  },
  featureList: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  featureText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginLeft: 10,
    flex: 1, // Ensures text wraps correctly next to the icon
  },
  closingText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#15b01a', // The specific green from your button
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'flex-start', // Keeps button size to content
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: 8,
  },
});

export default Description;