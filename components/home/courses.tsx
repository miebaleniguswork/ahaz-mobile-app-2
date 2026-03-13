import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PopularCourses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.overhead}>COURSES</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.mainTitle}>POPULAR COURSES</Text>

      {/* Course Card */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/ahaz-hero.png")}
          style={styles.courseImage}
        />

        <View style={styles.cardBody}>
          <View style={styles.metaRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Digital Literacy</Text>
            </View>
            <Text style={styles.priceText}>ETB 499.99</Text>
          </View>

          <Text style={styles.courseTitle}>Digital Literacy and IT Skills</Text>
          <Text style={styles.courseDescription}>
            This course aims to provide learners with foundational digital
            literacy and IT skills essential for navigating today's
            technology-driven world...
          </Text>

          <View style={styles.divider} />

          <View style={styles.instructorRow}>
            <Image
              source={require("../../assets/images/ahaz-hero.png")}
              style={styles.instructorAvatar}
            />
            <Text style={styles.instructorName}>Asmelash Girmay</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  overhead: { fontSize: 12, color: "#888", letterSpacing: 1 },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#28a745",
    marginLeft: 10,
    opacity: 0.3,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseImage: { width: "100%", height: 200 },
  cardBody: { padding: 15 },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  tag: {
    backgroundColor: "#28a745",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  tagText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  priceText: { fontSize: 16, fontWeight: "bold", color: "#666" },
  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 15,
  },
  divider: { height: 1, backgroundColor: "#eee", marginVertical: 10 },
  instructorRow: { flexDirection: "row", alignItems: "center" },
  instructorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  instructorName: { fontSize: 14, fontWeight: "bold", color: "#444" },
});

export default PopularCourses;
