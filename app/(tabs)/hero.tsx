import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height } = Dimensions.get("window");

const Hero = () => {
  const insets = useSafeAreaInsets();
  const topBarHeight = 60;

  return (
    <View style={[styles.container, { paddingTop: 0 }]}>
      <ImageBackground
        source={require("../../assets/images/ahaz-hero.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Bridge the gap,{"\n"}Learn from anywhere,{"\n"}anytime
          </Text>
          <Text style={styles.subtitle}>
            Learn & connect at Ahazawi, a gateway to a brighter future.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.outlineButton}>
              <Text style={styles.outlineButtonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filledButton}>
              <Text style={styles.filledButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 650, // Increased height for a longer hero section
    width: "100%",
  },
  background: {
    flex: 1,
  },
  
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textWrapper: {
    // marginTop: 50, // Push content down to avoid the TopBar
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: 48,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#F0F0F0",
    marginBottom: 40,
    lineHeight: 26,
    maxWidth: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  outlineButton: {
    borderWidth: 1.5,
    borderColor: "#28a745",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 15,
  },
  outlineButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  filledButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  filledButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Hero;
