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

export default function RegisterPhoto() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/ahaz-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>Upload your photo</Text>

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}> LOGIN</Text>
        </TouchableOpacity>
      </View>

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

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.buttonText}>← BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>NEXT →</Text>
        </TouchableOpacity>
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
  loginRow: { flexDirection: "row", marginBottom: 30 },
  loginText: { fontSize: 16 },
  loginLink: { color: "#2B6CB0", fontWeight: "600" },
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
