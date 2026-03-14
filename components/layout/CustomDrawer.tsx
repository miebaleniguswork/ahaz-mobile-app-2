import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function CustomDrawer(props: any) {
  const activeRoute = props.state.routeNames[props.state.index];

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/ahaz-logo.png")}
          style={styles.logo}
        />
      </View>
      {/* Drawer Items */}
      {/* Profile */}
      {/* this is not profile picture only. this is drawerItem with profile picture but the text gets green if clicked just as the other drawer items. i have tried to make it part of the many drawer items(which is the first one below)*/}

      <DrawerItem
        label={() => (
          <Text
            style={{
              color: activeRoute === "profile" ? "#14a814" : "#777",
              fontWeight: "600",
              
            }}
          >
            Miebale
          </Text>
        )}
        icon={() => (
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }} // dynamic profile picture
            style={styles.avatar}
          />
        )}

        // i want margin top 20 for the whole drawer item
        style={[activeRoute === "profile" ? styles.activeItem : styles.item, { marginTop: 20 }]}

        onPress={() => props.navigation.navigate("profile")}
      />
      <DrawerItem
        label="Social"
        labelStyle={{
          color: activeRoute === "social" ? "#14a814" : "#777",
        }}
        icon={({ size }) => (
          <Ionicons
            name="people-outline"
            size={size}
            color={activeRoute === "social" ? "#14a814" : "#777"}
          />
        )}
        style={activeRoute === "social" ? styles.activeItem : styles.item}
        onPress={() => props.navigation.navigate("social")}
      />

      <DrawerItem
        label="Learning"
        labelStyle={{
          color: activeRoute === "learning" ? "#14a814" : "#777",
        }}
        icon={({ size }) => (
          <MaterialIcons
            name="workspace-premium"
            size={size}
            color={activeRoute === "learning" ? "#14a814" : "#777"}
          />
        )}
        style={activeRoute === "learning" ? styles.activeItem : styles.item}
        onPress={() => props.navigation.navigate("learning")}
      />
      <DrawerItem
        label="Jobs"
        labelStyle={{
          color: activeRoute === "jobs" ? "#14a814" : "#777",
        }}
        icon={({ size }) => (
          <Ionicons
            name="briefcase-outline"
            size={size}
            color={activeRoute === "jobs" ? "#14a814" : "#777"}
          />
        )}
        style={activeRoute === "jobs" ? styles.activeItem : styles.item}
        onPress={() => props.navigation.navigate("jobs")}
      />
      <DrawerItem
        label="CV Builder"
        labelStyle={{
          color: activeRoute === "cvbuilder" ? "#14a814" : "#777",
        }}
        icon={({ size }) => (
          <MaterialIcons
            name="layers"
            size={size}
            color={activeRoute === "cvbuilder" ? "#14a814" : "#777"}
          />
        )}
        style={activeRoute === "cvbuilder" ? styles.activeItem : styles.item}
        onPress={() => props.navigation.navigate("cvbuilder")}
      />
      <DrawerItem
        label="Messages"
        labelStyle={{
          color: activeRoute === "messages" ? "#14a814" : "#777",
        }}
        icon={({ size }) => (
          <MaterialCommunityIcons
            name="message"
            size={size}
            color={activeRoute === "messages" ? "#14a814" : "#777"}
          />
        )}
        style={activeRoute === "messages" ? styles.activeItem : styles.item}
        onPress={() => props.navigation.navigate("messages")}
      />
      <DrawerItem
        label="Feedback"
        labelStyle={{
          color: activeRoute === "feedback" ? "#14a814" : "#777",
        }}
        icon={({ size }) => (
          <Entypo
            name="reply"
            size={size}
            color={activeRoute === "feedback" ? "#14a814" : "#777"}
          />
        )}
        style={activeRoute === "feedback" ? styles.activeItem : styles.item}
        onPress={() => props.navigation.navigate("feedback")}
      />
      <DrawerItem
        label="Packages"
        labelStyle={{
          color: activeRoute === "packages" ? "#14a814" : "#777",
        }}
        icon={({ size }) => (
          <MaterialCommunityIcons
            name="crown"
            size={size}
            color={activeRoute === "packages" ? "#14a814" : "#777"}
          />
        )}
        style={activeRoute === "packages" ? styles.activeItem : styles.item}
        onPress={() => props.navigation.navigate("packages")}
      />
      {/* Footer */}
      <Text style={styles.footer}>Ahaz Platforms © 2026.</Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  //   logoContainer: {
  //     // flexDirection: "row",
  //     alignItems: "center",
  //     padding: 10,
  //   },

  //   logo: {
  //     width: 100,
  //     height: 100,
  //     // marginRight: 8,
  //   },

  logoContainer: {
    alignItems: "center",
    paddingTop: 10,
  },

  logo: {
    height: 40,
    resizeMode: "contain",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
    paddingTop: 20,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    fontWeight: "600",
  },

  footer: {
    marginTop: 200,
    padding: 16,
    color: "#777",
    fontSize: 20,
  },

  // item: {
  //   borderRightWidth: 6,
  //   borderRightColor: "transparent",
  // },

  // activeItem: {
  //   borderRightColor: "#14a814",
  // },

  item: {
    borderRightWidth: 6,
    borderRightColor: "transparent",
    borderRadius: 0,
  },

  activeItem: {
    borderRightWidth: 6,
    borderRightColor: "#14a814",
    backgroundColor: "#f1fdf0",
    borderRadius: 0,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
