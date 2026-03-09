
import { View , Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";


import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const Footer = () => {
  // Helper function to handle links (emails, phones, websites)
  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150x40?text=Ahazawi+Logo' }} // Replace with your actual local or remote image asset
          style={styles.logo}
        />

        {/* Description */}
        <Text style={styles.description}>
          Ahaz is more than just a digital learning platform; its a space where learners can grow their skills and connect with like-minded professionals to shape their careers.
        </Text>

        {/* Contact Section */}
        <Text style={styles.sectionTitle}>Contact</Text>
        
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Phone: </Text>
          <TouchableOpacity onPress={() => handlePress('tel:+251978680000')}>
            <Text style={styles.contactValue}>+251 978 68 00 00</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Email: </Text>
          <TouchableOpacity onPress={() => handlePress('mailto:info@ahazawi.com')}>
            <Text style={styles.contactValue}>info@ahazawi.com</Text>
          </TouchableOpacity>
        </View>

        {/* Social Icons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="facebook-f" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="linkedin-in" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="github" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="youtube" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="telegram-plane" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="whatsapp" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="tiktok" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Address Section */}
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.addressText}>Kahsa Building Floor 3,</Text>
        <Text style={styles.addressText}>Near Abreha Castle,</Text>
        <Text style={styles.addressText}>Mekelle, Tigrai, Ethiopia</Text>
      </View>

      {/* Copyright Bar */}
      <View style={styles.copyrightBar}>
        <Text style={styles.copyrightText}>
          <Text style={styles.copyrightBold}>Ahaz Platforms </Text>
          © 2026.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fafafa', // Light off-white background
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 160,
    height: 45,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 24,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
  },
  contactValue: {
    fontSize: 15,
    color: '#28a745', // Green color from the design
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 35,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  addressText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 26,
  },
  copyrightBar: {
    backgroundColor: '#f1f1f1', // Slightly darker grey for the very bottom
    paddingVertical: 20,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 14,
    color: '#555',
  },
  copyrightBold: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Footer;