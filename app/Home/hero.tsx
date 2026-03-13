import React, { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import RegistrationFlow from "../(auth)/register/registerFlow";

export function RegisterPage() {
  return <RegistrationFlow />;
}

const Hero = () => {
  const slideAnim = useRef(new Animated.Value(40)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, opacityAnim]);

  return (
    <View style={[styles.container, { paddingTop: 0 }]}>
      <ImageBackground
        source={require("../../assets/images/ahaz-hero.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: opacityAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.title}>
            Bridge the gap,{"\n"}Learn from anywhere,{"\n"}anytime
          </Text>
          <Text style={styles.subtitle}>
            Learn & connect at Ahazawi, a gateway to a brighter future.
          </Text>
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity
              style={styles.createButton}
              onPress={() => router.push("/Register/registerFlow")}
            >
              <Text style={styles.createButtonText}>Create  Account </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.sample}
              onPress={() => router.push("/(auth)/register/registerFlow")}
            >
              <Text style={styles.createButtonText}>Create Account </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => router.push("/(auth)/login")}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sample: {
    borderBottomColor: "green",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#28a745",
    borderRadius: 20,
    // paddingTop: 20,
    // paddingLeft: 20,
    paddingVertical: 14,
    paddingHorizontal: 35,
  },

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
    gap: 12,
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
    borderBlockColor: "#28a745",
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
  },

  createButton: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#28a745",
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
  },

  loginButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Hero;
