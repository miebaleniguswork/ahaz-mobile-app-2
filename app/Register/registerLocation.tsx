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

interface Props {
  data: any;
  updateData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function RegisterLocation({
  data,
  updateData,
  nextStep,
  prevStep,
}: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/ahaz-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>Info regarding your location</Text>

      <Text style={styles.label}>Which city are you from?</Text>
      <TextInput
        placeholder="E.g., Mekelle"
        style={styles.input}
        value={data.location}
        onChangeText={(text) => updateData({ location: text })}
      />

      <Text style={styles.label}>Are you displaced from your home?</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropText}>No I am not</Text>
        <Text style={styles.arrow}>▼</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backButton} onPress={prevStep}>
          <Text style={styles.buttonText}>← BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
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
  label: { fontSize: 16, marginBottom: 8, fontWeight: "500" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  dropText: { fontSize: 16 },
  arrow: { color: "#888" },
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
