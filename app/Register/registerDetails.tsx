import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function RegisterDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/ahaz-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>More about you</Text>

      <Text style={styles.label}>Birthdate</Text>
      <View style={styles.dropdownRow}>
        <View style={styles.dropdown}>
          <Text style={styles.dropText}>Ye... ▼</Text>
        </View>
        <View style={styles.dropdown}>
          <Text style={styles.dropText}>M... ▼</Text>
        </View>
        <View style={styles.dropdown}>
          <Text style={styles.dropText}>Day ▼</Text>
        </View>
      </View>

      <Text style={styles.label}>Sex</Text>
      <View style={styles.radioRow}>
        <TouchableOpacity style={styles.radioButton}>
          <View style={styles.radioOuter} />
          <Text> Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton}>
          <View style={styles.radioOuter} />
          <Text> Female</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>← BACK</Text>
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
  subtitle: { fontSize: 16, color: "#777", marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 10, fontWeight: "500" },
  dropdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    width: "30%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  dropText: { color: "#888" },
  radioRow: { flexDirection: "row", marginBottom: 40 },
  radioButton: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#555",
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
  backText: { color: "white", fontWeight: "700" },
});
