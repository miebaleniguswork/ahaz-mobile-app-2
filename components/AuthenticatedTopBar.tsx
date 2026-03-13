import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  onMenuPress?: () => void;
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
  avatarUri?: string;
};


import { DrawerActions } from "@react-navigation/core";
import { useNavigation } from "expo-router";

export default function AuthenticatedTopbar({ avatarUri }: Props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={["top"]} style={styles.safeContainer}>
      <View style={styles.container}>

        {/* Burger */}
    

<TouchableOpacity
  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
>
  <Ionicons name="menu" size={26} color="#333" />
</TouchableOpacity>

        <View style={styles.right}>
          <TouchableOpacity>
            <Ionicons name="search" size={22} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={22} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{ uri: avatarUri || "https://i.pravatar.cc/100" }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  container: {
    height: 70,              // slightly larger bar
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
});