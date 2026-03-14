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

import DrawerScreenWrapper from "@/components/layout/DrawerScreenWrapper";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const COLORS = {
  ahaz600: "#14a814",
  text: "#444",
  bg: "#f1f1f1",
};

export default function Learning() {
  const avatarUri = "https://i.pravatar.cc/100";

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commented, setCommented] = useState(false);

  return (
    <DrawerScreenWrapper>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* flex:row with left being Courses and right being the filter */}
          <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Courses</Text>
            <View style={styles.postBox}>
              {/* <Image source={{ uri: avatarUri }} style={styles.avatar} /> */}

              <TextInput
                placeholder="Type to filter"
                placeholderTextColor="#888"
                style={styles.input}
              />

              <Ionicons name="options-outline" size={18} color="#999" />
            </View>
          </View>
          <View>{/* Post input */}</View>

          {/* Course card */}
          <View style={styles.card}>
            <Image
              source={require("@/assets/images/course.png")}
              style={styles.courseImage}
            />

            <Text style={styles.courseTitle}>Computer Essentials</Text>
            <View style={styles.courseInfo}>
              <Text style={styles.courseSub}>Digital Skill</Text>

              <View style={styles.priceTag}>
                <Text style={styles.priceText}>Br. 699.99</Text>
              </View>
            </View>

            <View style={styles.bottomRow}>
              <TouchableOpacity onPress={() => router.push("/enroll")}>
                <Text style={styles.enroll}>ENROLL</Text>
              </TouchableOpacity>

              <View style={styles.actions}>
                {/* LIKE */}
                <TouchableOpacity onPress={() => setLiked(!liked)}>
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    size={20}
                    color={liked ? COLORS.ahaz600 : COLORS.text}
                  />
                </TouchableOpacity>

                {/* SHARE (always outline) */}
                <TouchableOpacity>
                  <Entypo name="share" size={20} color={COLORS.text} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </DrawerScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 12
  },

  postBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 6,
    gap: 10,
    width: 200,
    height: 38,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 38,
    color: "#888",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 6,
    paddingBottom: 12,
  },

  courseImage: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  courseTitle: {
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 12,
  },

  courseSub: {
    color: "#777",
    marginHorizontal: 12,
    marginTop: 2,
  },

  priceTag: {
    backgroundColor: "#f1fdf0",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 12,
    marginTop: 6,
  },

  priceText: {
    color: "#84f184",
    fontSize: 12,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 12,
  },

  enroll: {
    color: "#14a814",
    fontWeight: "600",
  },

  actions: {
    flexDirection: "row",
    gap: 16,
  },

  courseInfo: {
    // marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 20,
    padding: 12,
  },
});
