import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RegisterLayout from "./layout";

export default function RegisterMore() {
  const [sex, setSex] = useState<"Male" | "Female" | null>(null);

  const handleNext = () => {
    console.log("Proceeding to next step...");
  };

  const handleBack = () => {
    console.log("Going back...");
  };

  return (
    <RegisterLayout
      title="More about you"
      step={4} // Example step number
      totalSteps={6}
      nextStep={handleNext}
      prevStep={handleBack}
    >
      <View style={styles.content}>
        <Text style={styles.label}>Birthdate</Text>
        <View style={styles.dropdownRow}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Ye...</Text>
          </View>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>M...</Text>
          </View>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Day</Text>
          </View>
        </View>

        <Text style={styles.label}>Sex</Text>
        <View style={styles.radioRow}>
          <TouchableOpacity 
            style={styles.radioButtonContainer} 
            onPress={() => setSex("Male")}
          >
            <View style={[styles.radioCircle, sex === "Male" && styles.selectedCircle]} />
            <Text style={styles.radioLabel}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.radioButtonContainer} 
            onPress={() => setSex("Female")}
          >
            <View style={[styles.radioCircle, sex === "Female" && styles.selectedCircle]} />
            <Text style={styles.radioLabel}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RegisterLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    fontWeight: "500",
  },
  dropdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 12,
    width: "30%",
    backgroundColor: "#F9F9F9",
  },
  dropdownText: {
    color: "#888",
  },
  radioRow: {
    flexDirection: "row",
    gap: 20,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#888",
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: "#1E8E14",
    borderColor: "#1E8E14",
  },
  radioLabel: {
    fontSize: 16,
    color: "#777",
  },
});