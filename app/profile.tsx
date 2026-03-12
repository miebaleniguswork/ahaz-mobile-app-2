import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AuthenticatedTopbar from "./Auth/AuthenticatedTopbar";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>

            <AuthenticatedTopbar
        onMenuPress={() => console.log("open drawer")}
        onSearchPress={() => console.log("search")}
        onNotificationPress={() => console.log("notifications")}
      />
      
      {/* HEADER */}
      {/* <View style={styles.header}>
        <Ionicons name="menu" size={24} color="#333" />
        <View style={styles.headerRight}>
          <Ionicons name="search" size={22} color="#333" />
          <Ionicons name="square-outline" size={22} color="#333" />
          <Ionicons name="notifications-outline" size={22} color="#333" />
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.smallAvatar}
          />
        </View>
      </View> */}

      {/* COVER */}
      <View style={styles.coverContainer}>
        <Image
          source={{
            uri: "https://picsum.photos/600/250",
          }}
          style={styles.cover}
        />

        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>

      {/* USER INFO */}
      <View style={styles.info}>
        <Text style={styles.name}>Miebale Nigus</Text>
        <Text style={styles.username}>@Miebale123</Text>

        <View style={styles.row}>
          <FontAwesome name="map-marker" size={14} color="#777" />
          <Text style={styles.meta}> MEKELLE</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.meta}>🎂 Born Jun 06, 2000</Text>
          <Text style={styles.meta}> ✦ Joined Dec 31, 2025</Text>
        </View>

        <TouchableOpacity style={styles.orgBtn}>
          <Text style={styles.orgText}>ORGANIZATION</Text>
        </TouchableOpacity>

        <View style={styles.stats}>
          <Text style={styles.stat}>1 FOLLOWERS</Text>
          <Text style={styles.stat}>0 FOLLOWING</Text>
          <Text style={styles.stat}>0 LIKES</Text>
        </View>
      </View>

      {/* POST INPUT */}
      <View style={styles.postBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.postAvatar}
        />
        <Text style={styles.postPlaceholder}>
          Miebale, any tips to share?
        </Text>
      </View>

      {/* TABS */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>POSTS</Text>
        <Text style={styles.tab}>MEDIA</Text>
        <Text style={styles.tab}>FAVORITE POSTS</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  smallAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },

  coverContainer: {
    position: "relative",
    backgroundColor: "#fff",
  },

  cover: {
    width: "100%",
    height: 150,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    left: 16,
    bottom: -50,
    borderWidth: 4,
    borderColor: "#fff",
  },

  editBtn: {
    position: "absolute",
    right: 16,
    bottom: 10,
    backgroundColor: "#C8E6C9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },

  editText: {
    fontWeight: "600",
    fontSize: 12,
    color: "#1E8E14",
  },

  info: {
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
  },

  username: {
    color: "#777",
    marginBottom: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  meta: {
    color: "#777",
    fontSize: 13,
  },

  orgBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 10,
  },

  orgText: {
    fontSize: 12,
    fontWeight: "600",
  },

  stats: {
    flexDirection: "row",
    marginTop: 12,
    gap: 18,
  },

  stat: {
    fontSize: 12,
    color: "#777",
  },

  postBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 12,
  },

  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  postPlaceholder: {
    color: "#777",
  },

  tabs: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 10,
    paddingHorizontal: 16,
    gap: 20,
  },

  tab: {
    paddingVertical: 12,
    color: "#777",
  },

  activeTab: {
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#1E8E14",
    fontWeight: "600",
  },
});