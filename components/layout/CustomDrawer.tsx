import {
    DrawerContentScrollView,
    DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/ahaz-logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Profile */}
      <View style={styles.profile}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Miebale Nigus</Text>
      </View>

      {/* Drawer Items */}

      <DrawerItem
        label="Social"
        icon={({ color, size }) => (
          <Ionicons name="people-outline" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("social")}
      />

      <DrawerItem
        label="Learning"
        icon={({ color, size }) => (
          <Ionicons name="school-outline" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("learning")}
      />

      <DrawerItem
        label="Jobs"
        icon={({ color, size }) => (
          <Ionicons name="briefcase-outline" size={size} color={color} />
        )}
        onPress={() => {}}
      />

      <DrawerItem
        label="CV Builder"
        icon={({ color, size }) => (
          <MaterialIcons name="layers" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("cvbuilder")}
      />

      <DrawerItem
        label="Messages"
        icon={({ color, size }) => (
          <Ionicons name="chatbubble-outline" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("messages")}
      />

      <DrawerItem
        label="Feedback"
        icon={({ color, size }) => (
          <Feather name="message-square" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("feedback")}
      />

      <DrawerItem
        label="Packages"
        icon={({ color, size }) => (
          <Ionicons name="pricetag-outline" size={size} color={color} />
        )}
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
  paddingVertical: 20,
},

logo: {
  height: 50,
  resizeMode: "contain",
},

  
  profile: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
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
    marginTop: 20,
    padding: 16,
    color: "#777",
    fontSize: 12,
  },
});