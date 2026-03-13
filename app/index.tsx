import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {

  useEffect(() => {
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      await SplashScreen.hideAsync();

      router.replace("/home");
    };

    prepare();
  }, []);

  return (
  <View style={styles.container}>
    
    <View style={styles.centerContent}>
      <Image
        source={require("../assets/images/ahaz-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <ActivityIndicator size="large" color="#1E8E14" />
    </View>

    <Text style={styles.footer}>Made by Ahaz</Text>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  centerContent: {
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 100,
    // marginBottom: 10,
    // backgroundColor: "red"
  },

  footer: {
    position: "absolute",
    bottom: 60,
    color: "#1E8E14",
    fontSize: 14,
  },
});