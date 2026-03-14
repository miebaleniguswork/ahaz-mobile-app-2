import DrawerScreenWrapper from "@/components/layout/DrawerScreenWrapper";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const COLORS = {
  primary: "#14a814",
  lightGreen: "#dcfddb",
  text: "#333",
  sub: "#777",
  border: "#e5e5e5",
};

export default function Profile() {
  const cover = "https://images.unsplash.com/photo-1519682337058-a94d519337bc";
  const avatar = "https://i.pravatar.cc/200";
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <DrawerScreenWrapper>
      <ScrollView style={styles.container}>
        {/* COVER */}
        <View>
          <Image source={{ uri: cover }} style={styles.cover} />

          {/* PROFILE IMAGE */}
          <View style={styles.avatarWrapper}>
            <Image source={{ uri: avatar }} style={styles.avatar} />

            <TouchableOpacity style={styles.cameraAvatar}>
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* COVER CAMERA */}
          <TouchableOpacity style={styles.cameraCover}>
            <Ionicons name="camera" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* EDIT BUTTON */}
        <View style={styles.editRow}>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editText}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>

        {/* NAME */}
        <View style={styles.info}>
          <Text style={styles.name}>Charlie Chaplin</Text>
          <Text style={styles.username}>@Charlie123</Text>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#777" />
            <Text style={styles.location}>MEKELLE</Text>
          </View>

          {/* DETAILS */}
          <View style={styles.detailsRow}>
            <Text style={styles.detail}>Born Jun 06, 2000</Text>
            <Text style={styles.detail}>Joined Dec 31, 2025</Text>
          </View>

          {/* ORGANIZATION */}
          <View style={styles.tag}>
            <View style={styles.addCircle}>
              <FontAwesome6 name="plus" size={10} color="#fff" />
            </View>
            <Text style={styles.tagText}>ORGANIZATION</Text>
          </View>

          {/* FOLLOW STATS */}
          <View style={styles.stats}>
            <Text style={styles.stat}>1 FOLLOWERS</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.stat}>0 FOLLOWING</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.stat}>0 LIKES</Text>
          </View>
        </View>

        {/* POST BOX */}
        <View style={styles.postBox}>
          <Image source={{ uri: avatar }} style={styles.postAvatar} />
          <TextInput
            style={styles.placeholder}
            placeholder="Miebale, any tips to share?"
            placeholderTextColor="#999"
          />
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "posts" && styles.activeTab]}
            onPress={() => setActiveTab("posts")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "posts" && styles.activeTabText,
              ]}
            >
              POSTS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "media" && styles.activeTab]}
            onPress={() => setActiveTab("media")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "media" && styles.activeTabText,
              ]}
            >
              MEDIA
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "favorites" && styles.activeTab]}
            onPress={() => setActiveTab("favorites")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "favorites" && styles.activeTabText,
              ]}
            >
              FAVORITE POSTS
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DrawerScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },

  cover: {
    width: "100%",
    height: 200,
  },

  avatarWrapper: {
    position: "absolute",
    left: 20,
    bottom: -40,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },

  cameraAvatar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#333",
    borderRadius: 15,
    padding: 8,
  },

  cameraCover: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 6,
  },

  editRow: {
    alignItems: "flex-end",
    marginTop: 10,
    paddingRight: 15,
  },

  editBtn: {
    backgroundColor: COLORS.lightGreen,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },

  editText: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  info: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.text,
  },

  username: {
    color: COLORS.sub,
    marginTop: 2,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  location: {
    marginLeft: 4,
    color: COLORS.sub,
  },

  detailsRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 15,
  },

  detail: {
    color: COLORS.sub,
    fontSize: 13,
  },

  tag: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: COLORS.border,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },

  tagText: {
    fontSize: 12,
    color: COLORS.text,
    backgroundColor: "#fffffff",
  },

  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  stat: {
    fontSize: 15,
    color: COLORS.sub,
  },

  dot: {
    marginHorizontal: 6,
    color: COLORS.sub,
  },

  postBox: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    marginTop: 20,
  },

  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },

  placeholder: {
    color: COLORS.sub,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },

  tab: {
    paddingVertical: 4,
  },

  tabText: {
    color: COLORS.sub,
    fontWeight: "500",
  },

  activeTab: {
    borderBottomWidth: 2,
    borderColor: COLORS.primary,
    paddingBottom: 4,
  },

  activeTabText: {
    color: COLORS.primary,
  },

  addCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#042f06",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
});
