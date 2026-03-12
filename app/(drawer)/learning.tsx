import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import AuthenticatedTopbar from "../../components/layout/AuthenticatedTopbar";

export default function Learning() {
  const avatarUri = "https://i.pravatar.cc/100";

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <AuthenticatedTopbar />

      <ScrollView>

        {/* Post Input */}
        <View style={styles.postBox}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />

          <TextInput
            placeholder="Miebale, any tips to share?"
            style={styles.input}
          />
        </View>

        {/* Example Post */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>N</Text>
              </View>

              <View>
                <Text style={styles.name}>NOVEL YIRGA</Text>
                <Text style={styles.username}>@NOVA37 · 1 month</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.follow}>FOLLOW</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.postTitle}>Be humble!</Text>

          <Text style={styles.postText}>
            Be stronger and wiser try it again and and u will be sucessfull in
            life.
          </Text>

          {/* Post actions */}
          <View style={styles.actions}>
            <Text>💚 3</Text>
            <Text>💬</Text>
            <Text>🔖</Text>
            <Text>🔁 1</Text>
          </View>
        </View>

        {/* Duplicate Post Example */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>N</Text>
              </View>

              <View>
                <Text style={styles.name}>NOVEL YIRGA</Text>
                <Text style={styles.username}>@NOVA37 · 1 month</Text>
              </View>
            </View>

            <Text style={styles.follow}>FOLLOW</Text>
          </View>

          <Text style={styles.postTitle}>Be humble!</Text>

          <Text style={styles.postText}>
            Be stronger and wiser try it again and and u will be sucessfull in
            life.
          </Text>

          <View style={styles.actions}>
            <Text>💚 3</Text>
            <Text>💬</Text>
            <Text>🔖</Text>
            <Text>🔁 1</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },

  postBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 12,
    padding: 10,
    borderRadius: 6,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
  },

  postCard: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 6,
  },

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  userInfo: {
    flexDirection: "row",
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  circleText: {
    fontWeight: "bold",
  },

  name: {
    fontWeight: "600",
  },

  username: {
    fontSize: 12,
    color: "#777",
  },

  follow: {
    color: "#2E7D32",
    fontWeight: "600",
  },

  postTitle: {
    fontWeight: "600",
    marginTop: 4,
  },

  postText: {
    marginTop: 4,
    color: "#444",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});