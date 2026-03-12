import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Packages from '../../components/home/Packages';

export default function PackagesDrawer() {
  return (
    <View style={styles.container}>
      <Packages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
