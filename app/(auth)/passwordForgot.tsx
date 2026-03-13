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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Simple email validation regex
  const validateEmail = (value: any) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
  };

  const handleSend = () => {
    if (email.trim() === "") {
      setError("Please enter your email");
    } else if (!validateEmail(email.trim())) {
      setError("Please enter a valid email");
    } else {
      setError("");
      // Handle sending verification code here
      console.log("Sending verification code to:", email);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/ahaz-logo.png")}
            style={styles.logo}
          />
        </View>
        
        {/* LOGIN LINK */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Remember your password? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.loginLink}> LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* TITLE */}
        <Text style={styles.title}>Account Recovery</Text>


        {/* DESCRIPTION */}
        <Text style={styles.subtitle}>
          Enter your email to receive a verification code
        </Text>

        {/* EMAIL INPUT */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, error ? styles.inputError : null]}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (text.trim() !== "") setError("");
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        {/* SEND BUTTON */}
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scroll: {
    padding: 25,
    paddingBottom: 40,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 40,
  },

  logo: {
    width: 180,
    height: 80,
    resizeMode: "contain",
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },

  loginText: {
    color: "#555",
  },

  loginLink: {
    color: "#2B6CB0",
    fontWeight: "600",
  },

  subtitle: {
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
  },

  inputWrapper: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 45,
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    width: "100%",
  },

  inputError: {
    borderColor: "#E53E3E",
  },

  errorText: {
    color: "#E53E3E",
    marginTop: 6,
    fontSize: 12,
  },

  button: {
    backgroundColor: "#1E8E14",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});