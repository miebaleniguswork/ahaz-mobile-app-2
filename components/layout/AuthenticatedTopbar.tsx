import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onMenuPress?: () => void;
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
  avatarUri?: string;
};

export default function AuthenticatedTopbar({
  onMenuPress,
  onSearchPress,
  onNotificationPress,
  avatarUri,
}: Props) {
return (
    <View style={styles.container}>
      
      {/* Burger */}
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={26} color="#333" />
      </TouchableOpacity>

      <View style={styles.right}>
        {/* Search */}
        <TouchableOpacity onPress={onSearchPress}>
          <Ionicons name="search" size={22} color="#333" />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={22} color="#333" />
        </TouchableOpacity>

        {/* Avatar */}
        <TouchableOpacity>
          <Image
            source={{
              uri:
                avatarUri ||
                "https://i.pravatar.cc/100",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
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
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});