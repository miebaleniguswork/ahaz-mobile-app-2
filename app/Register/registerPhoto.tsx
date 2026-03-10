import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterPhoto() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>Upload your photo</Text>

      <Text style={styles.label}>Add profile picture (optional)</Text>
      <View style={styles.uploadRow}>
        <Text style={styles.clipIcon}>📎</Text>
        <TextInput style={styles.uploadInput} editable={false} />
      </View>

      <Text style={styles.label}>Do you experience any difficulty?</Text>
      <View style={styles.dropdown}>
        <Text>No</Text>
        <Text>▼</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 40,
  },
  logo: {
    width: 180,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { fontSize: 16, color: "#777", marginBottom: 20 },

  label: { fontSize: 16, marginBottom: 12 },
  uploadRow: { flexDirection: "row", alignItems: "center", marginBottom: 25 },
  clipIcon: { fontSize: 24, marginRight: 10 },
  uploadInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    height: 45,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    height: 45,
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  backButton: {
    backgroundColor: "#888",
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: "#1E8E14",
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: { color: "white", fontWeight: "700" },
});
