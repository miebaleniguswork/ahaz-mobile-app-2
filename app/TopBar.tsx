import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TopBar = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.fixedContainer}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/ahaz-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity>
          <Feather name="menu" size={30} color="#333" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  fixedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    overflow: "visible", // allows logo to overflow
  },
  content: {
    height: 60, // compact TopBar
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    overflow: "visible",
  },
  logoContainer: {
    borderBlockColor: "#eee",
    flexDirection: "row",
    alignItems: "flex-start", // aligns text with top of logo
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    // marginLeft: 10,
    marginTop: 35, // vertically center text relative to overflowing logo
  },
});