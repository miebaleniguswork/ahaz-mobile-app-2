import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import type { FormData, FormErrors } from "../../../types/_types";

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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Setup your login credentials</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={data.username ?? ""}
        onChangeText={(text) => updateData({ username: text })}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter username"
        placeholderTextColor="#999"
      />

      {data.username.length > 0 && data.username.length < 2 && (
        <Text style={styles.error}>Username must be at least 2 characters</Text>
      )}

      {errors?.username ? (
        <Text style={styles.error}>{errors.username}</Text>
      ) : null}

      <Text style={styles.label}>Password</Text>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passInput}
          value={data.password ?? ""}
          onChangeText={(text) => updateData({ password: text })}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter password"
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          onPress={() => setShowPassword((prev) => !prev)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#777"
          />
        </TouchableOpacity>
      </View>

      {data.password.length > 0 && data.password.length < 8 && (
        <Text style={styles.error}>Password must be at least 8 characters</Text>
      )}

      {errors?.password ? (
        <Text style={styles.error}>{errors.password}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 8,
    color: "#000",
    fontSize: 16,
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
  passInput: {
    flex: 1,
    color: "#000",
    fontSize: 16,
  },
  error: {
    color: "#D14343",
    marginBottom: 12,
    fontSize: 13,
  },
});