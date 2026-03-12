import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface AvatarProps {
  source?: { uri: string } | number;
  size?: number;
  name?: string;
}

export default function Avatar({ source, size = 50, name }: AvatarProps) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {source ? (
        <Image source={source} style={[styles.image, { width: size, height: size }]} />
      ) : (
        <View style={[styles.placeholder, { width: size, height: size }]}>
          <Text style={[styles.text, { fontSize: size * 0.4 }]}>
            {name ? name.charAt(0).toUpperCase() : 'U'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 25,
  },
  placeholder: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    color: '#666',
    fontWeight: 'bold',
  },
});
