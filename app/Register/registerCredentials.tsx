import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import type { FormData, FormErrors } from "./_types";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors?: FormErrors;
}

export default function RegisterCredentials({
  data,
  updateData,
  errors,
}: Props) {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Setup your login credentials</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={data.username}
        onChangeText={(text) => updateData({ username: text })}
        autoCapitalize="none"
      />
      {!!errors?.username && <Text style={styles.error}>{errors.username}</Text>}

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passInput}
          secureTextEntry={!isPasswordVisible}
          value={data.password}
          onChangeText={(text) => updateData({ password: text })}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Text style={styles.eyeIcon}>{isPasswordVisible ? "👁️" : "👁️‍🗨️"}</Text>
        </TouchableOpacity>
      </View>
      {!!errors?.password && <Text style={styles.error}>{errors.password}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    marginBottom: 8,
  },
  error: {
    color: "#D14343",
    marginBottom: 12,
    fontSize: 13,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 8,
  },
  passInput: { flex: 1 },
  eyeIcon: { fontSize: 18 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  backButton: {
    backgroundColor: "#888",
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: "#1E8E14",
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: { color: "white", fontWeight: "700" },
});
