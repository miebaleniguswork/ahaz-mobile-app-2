import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DrawerScreenWrapper from "@/components/layout/DrawerScreenWrapper";

export default function Payment() {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: "bank", label: "Bank Transfer" },
    { id: "wallet", label: "Digital Wallet (telebirr, CBEbirr)" },
    { id: "cash", label: "Cash" },
  ];

  return (
    <DrawerScreenWrapper>
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Enroll</Text>

        <TouchableOpacity style={styles.enrollBtn}>
          <Text style={styles.enrollText}>ENROLL</Text>
        </TouchableOpacity>
      </View>

      {/* PAYMENT CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>Payment options</Text>
        <Text style={styles.subtitle}>How would you like to pay?</Text>

        {options.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.optionRow}
            onPress={() => setSelected(item.id)}
          >
            <Ionicons
              name={
                selected === item.id ? "radio-button-on" : "radio-button-off"
              }
              size={20}
              color={selected === item.id ? "#14a814" : "#777"}
            />

            <Text style={styles.optionText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </DrawerScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  enrollBtn: {
    backgroundColor: "#7bc47f",
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  enrollText: {
    color: "#fff",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 20,
    borderRadius: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 20,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 10,
  },

  optionText: {
    fontSize: 14,
    color: "#444",
  },
});
