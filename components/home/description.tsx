import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import Reveal from "../Reveal";

type Props = {
  revealProgress: SharedValue<number>;
};

const Description = ({ revealProgress }: Props) => {
  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <Reveal progress={revealProgress} delay={0}>
        <Image
          source={require("../../assets/images/ahaz-team.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </Reveal>

      <View style={styles.content}>
        {/* TITLE */}
        <Reveal progress={revealProgress} delay={0.1}>
          <Text style={styles.title}>
            Ahazawi: a Digital Learning Platform for Everyone
          </Text>
        </Reveal>

        {/* SUBTITLE */}
        <Reveal progress={revealProgress} delay={0.2}>
          <Text style={styles.subtitle}>
            We bridge the gap in education. Learn from anywhere anytime.
          </Text>
        </Reveal>

        {/* FEATURES */}
        <Reveal progress={revealProgress} delay={0.3}>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="#28a745"
              />
              <Text style={styles.featureText}>
                Explore a vast library of self-paced courses and set your own
                learning schedule.
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="#28a745"
              />
              <Text style={styles.featureText}>
                Choose from independent study, interactive online classes with
                teachers.
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="#28a745"
              />
              <Text style={styles.featureText}>
                Earn recognized certifications through standardized exams.
              </Text>
            </View>
          </View>
        </Reveal>

        {/* BUTTON */}
        <Reveal progress={revealProgress} delay={0.45}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Read More</Text>
            <Ionicons
              name="arrow-forward"
              size={18}
              color="#fff"
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </Reveal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingTop: 40,
  },
  heroImage: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 34,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    marginBottom: 25,
  },
  featureList: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  featureText: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginLeft: 10,
    flex: 1,
  },
  closingText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#15b01a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonIcon: {
    marginLeft: 8,
  },
});

export default Description;
