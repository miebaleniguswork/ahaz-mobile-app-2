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

export default function RegisterContact() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <Text style={styles.subtitle}>Contact information</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter valid email address"
        style={styles.input}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.phoneContainer}>
        <View style={styles.flagPlaceholder}>
          <Text>🇪🇹 ▼</Text>
        </View>
        <TextInput
          placeholder="Enter a phone number"
          style={styles.phoneInput}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>← BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>NEXT →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Terms of Service · Privacy Policy · Deletion Instruction
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 60,
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
  loginRow: { flexDirection: "row", marginBottom: 25 },
  loginLink: { color: "#2B6CB0", fontWeight: "600" },
  label: { fontSize: 16, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    marginBottom: 30,
  },
  flagPlaceholder: {
    paddingHorizontal: 10,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  phoneInput: { flex: 1, paddingHorizontal: 15 },
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
  backText: { color: "white", fontWeight: "700" },
  footer: {
    textAlign: "center",
    color: "#1E8E14",
    marginTop: 40,
    fontSize: 12,
  },
});
