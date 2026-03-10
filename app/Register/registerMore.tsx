import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RegisterMore() {
  const [sex, setSex] = useState<"Male" | "Female" | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Birthdate</Text>

      <View style={styles.dropdownRow}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Year</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Month</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Day</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Sex</Text>

      <View style={styles.radioRow}>
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => setSex("Male")}
        >
          <View style={[styles.radioCircle, sex === "Male" && styles.selectedCircle]}>
            {sex === "Male" && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.radioLabel}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => setSex("Female")}
        >
          <View style={[styles.radioCircle, sex === "Female" && styles.selectedCircle]}>
            {sex === "Female" && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.radioLabel}>Female</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    width: "31%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  dropdownText: {
    color: "#999",
    fontSize: 14,
  },
  arrow: {
    fontSize: 10,
    color: "#ccc",
  },
  radioRow: {
    flexDirection: "row",
    gap: 30,
    marginTop: 5,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: {
    borderColor: "#1E8E14",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#1E8E14",
  },
  radioLabel: {
    fontSize: 16,
    color: "#555",
  },
});