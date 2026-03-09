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
}

export default function RegisterName({ data, updateData, nextStep }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/ahaz-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>Welcome, enter your name</Text>

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}> LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>First name</Text>
      <TextInput
        placeholder="E.g., Selam"
        style={styles.input}
        value={data.firstName}
        onChangeText={(text) => updateData({ firstName: text })}
      />

      <Text style={styles.label}>Last name</Text>
      <TextInput
        placeholder="E.g., Mesele"
        style={styles.input}
        value={data.lastName}
        onChangeText={(text) => updateData({ lastName: text })}
      />

      <TouchableOpacity style={styles.button} onPress={nextStep}>
        <Text style={styles.buttonText}>NEXT →</Text>
      </TouchableOpacity>

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
    width: 200,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { fontSize: 16, color: "#777", marginBottom: 20 },
  loginRow: { flexDirection: "row", marginBottom: 30, alignItems: "center" },
  loginText: { fontSize: 16 },
  loginLink: { color: "#2B6CB0", fontWeight: "600" },
  label: { fontSize: 16, marginBottom: 8, fontWeight: "500" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 55,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E8E14",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "700" },
  footer: {
    textAlign: "center",
    color: "#1E8E14",
    marginTop: 40,
    fontSize: 12,
  },
});
