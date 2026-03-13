import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [phase, setPhase] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNext = () => {
    if (username.trim() === "") {
      setUsernameError("Please enter your username or email");
    } else {
      setUsernameError("");
      setPhase(2);
    }
  };

  const handleLogin = () => {
    if (password.trim() === "") {
      setPasswordError("Please enter your password");
    } else {
      setPasswordError("");
      console.log("Logging in with:", username, password);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Logo */}
      <View style={styles.logoArea}>
        <Image
          source={require("../../assets/images/ahaz-logo.png")}
          style={styles.logo}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.form}
      >
        {phase === 1 && (
          <>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Username or Email</Text>
              
              {/* Old input commented for reference */}
              {/*
              <TextInput
                style={[styles.input, usernameError ? styles.inputError : null]}
                placeholder="Enter username or email"
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                  if (text.trim() !== "") setUsernameError("");
                }}
              />
              */}
              
              {/* Working input */}
              <TextInput
                style={[styles.input, usernameError ? styles.inputError : null]}
                placeholder="Enter username or email"
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                  if (text.trim() !== "") setUsernameError("");
                }}
              />

              {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>NEXT</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
            
              onPress={() => router.push("/(auth)/passwordForgot")}

            >
              <Text style={styles.forgot}>FORGOTTEN PASSWORD?</Text>
            </TouchableOpacity>

            <View style={styles.createRow}>
              <Text style={styles.createText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => router.push("/(auth)/register/registerFlow")}
              >
                <Text style={styles.createLink}> CREATE NEW ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {phase === 2 && (
          <>
            <Text style={styles.label}>Password for {username}</Text>
            <TextInput
              style={[styles.input, passwordError ? styles.inputError : null]}
              placeholder="Enter password"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (text.trim() !== "") setPasswordError("");
              }}
            />
            {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <View style={styles.buttonContent}>
                <FontAwesome
                  name="lock"
                  size={18}
                  color="#fff"
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPhase(1)}
              style={{ marginTop: 10 }}
            >
              <Text style={styles.forgot}>← Back to Username</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(auth)/passwordForgot")}
            >
              <Text style={styles.forgot}>FORGOTTEN PASSWORD?</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 25 },
  logoArea: { alignItems: "center", marginTop: 60, marginBottom: 40 },
  logo: { width: 180, height: 80, resizeMode: "contain" },
  form: { paddingBottom: 40 },
  label: { fontSize: 14, marginBottom: 6, color: "#333" },
  inputWrapper: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    marginBottom: 12,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    height: 44,
    borderRadius: 6,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    width: "100%",

  },
  inputError: {
    borderColor: "#E53E3E",
  },
  errorText: {
    color: "#E53E3E",
    marginBottom: 12,
    fontSize: 12,
  },
  button: {
    backgroundColor: "#1E8E14",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "700", letterSpacing: 0.5 },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  forgot: { textAlign: "center", color: "#2B6CB0", marginTop: 15, fontSize: 13 },
  createRow: { flexDirection: "row", justifyContent: "center", marginTop: 35 },
  createText: { color: "#444" },
  createLink: { color: "#1E8E14", fontWeight: "600" },
});