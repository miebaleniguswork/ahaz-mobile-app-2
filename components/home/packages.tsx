import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const packages = [
  {
    id: "1",
    name: "Basic",
    subtitle: "Limited access to courses",
    features: [
      "Access to basic study materials",
      "Community forum access",
      "Monthly progress reports",
    ],
    color: "#0f3d3e",
    filled: false,
  },
  {
    id: "2",
    name: "Standard",
    subtitle: "Access to all courses",
    features: [
      "Everything in Basic Package",
      "Premium study materials",
      "Monthly webinars",
      "Instructor feedback",
      "CV Builder tool",
      "Priority email support",
    ],
    color: "#1aa31a",
    filled: true,
  },
  {
    id: "3",
    name: "Premium",
    subtitle: "Unlimited access to all courses",
    features: [
      "Everything in Standard Package",
      "1-on-1 mentorship",
      "Personalized learning plans",
      "Exclusive courses",
      "Certification exam fee waiver",
      "Early course access",
      "Direct messaging support",
    ],
    color: "#6e6e6e",
    filled: false,
  },
  {
    id: "4",
    name: "Family",
    subtitle: "Multiple accounts",
    features: [
      "Everything in Premium",
      "Family progress dashboard",
      "Group study sessions",
    ],
    color: "#2bbbd8",
    filled: false,
  },
  {
    id: "5",
    name: "Enterprise",
    subtitle: "For organizations",
    features: [
      "Employee course access",
      "Enterprise analytics",
      "Dedicated account manager",
      "Corporate training programs",
    ],
    color: "#e91e63",
    filled: false,
  },
  {
    id: "6",
    name: "Freemium",
    subtitle: "Free",
    features: ["Upgrade discounts", "Limited course previews"],
    color: "#1a29c7",
    filled: false,
  },
];

const Packages = () => {
  return (
    // packages: explore our plans for the following
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.overhead}>COURSES</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.mainTitle}>POPULAR COURSES</Text>
      {packages.map((item, index) => (
        <Animated.View
          key={item.id}
          entering={FadeInUp.delay(index * 120).springify()}
        >
          <View style={styles.card}>
            <View style={[styles.topBar, { backgroundColor: item.color }]} />

            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>

            <View style={styles.features}>
              {item.features.map((f, i) => (
                <Text key={i} style={styles.feature}>
                  • {f}
                </Text>
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                { borderColor: item.color },
                item.filled && { backgroundColor: item.color },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: item.color },
                  item.filled && { color: "#fff" },
                ]}
              >
                SUBSCRIBE
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      ))}
    </View>
  );
};

export default Packages;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f6f6f6",
  },

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
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    padding: 20,
  },

  topBar: {
    height: 8,
    marginBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    color: "#777",
    marginBottom: 15,
  },

  features: {
    marginBottom: 20,
  },

  feature: {
    fontSize: 14,
    marginBottom: 6,
    color: "#444",
  },

  button: {
    borderWidth: 1,
    borderColor: "#1aa31a",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
    color: "#1aa31a",
    letterSpacing: 1,
  },
});
