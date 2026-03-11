import React, { useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { router } from "expo-router";

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
      
      <Image
        source={require("../assets/images/ahaz-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <ActivityIndicator size="large" color="#ffffff" />

      <Text style={styles.footer}>Made by Ahaz</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },

  footer: {
    position: "absolute",
    bottom: 40,
    color: "#fff",
    fontSize: 14,
  },
});