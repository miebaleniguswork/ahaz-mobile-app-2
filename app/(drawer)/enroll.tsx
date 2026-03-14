import DrawerScreenWrapper from "@/components/layout/DrawerScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Enroll() {
  return (
    <DrawerScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#333" />
          </TouchableOpacity>

          <Text style={styles.title}>Enroll</Text>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => router.push("/enroll-payment")}
          >
            {/* navigate to enroll-payment */}
            <Text style={styles.nextText}>NEXT</Text>
          </TouchableOpacity>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.course}>Programming With PHP</Text>

          <View style={styles.row}>
            <Text>✓ Tuition fee</Text>
            <Text>999</Text>
          </View>

          <View style={styles.row}>
            <Text style={{ fontWeight: "600" }}>Total (in )</Text>
            <Text style={{ fontWeight: "600" }}>999</Text>
          </View>
        </View>
      </View>
    </DrawerScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  nextBtn: {
    backgroundColor: "#14a814",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  nextText: {
    color: "#fff",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 20,
    borderRadius: 6,
  },

  course: {
    fontSize: 16,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
