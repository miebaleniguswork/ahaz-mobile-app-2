import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  children: React.ReactNode;
  title?: string;
  step: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep?: () => void;
}

export default function RegisterLayout({
  children,
  title,
  step,
  totalSteps,
  nextStep,
  prevStep,
}: Props) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../../assets/images/ahaz-logo.png")}
          style={styles.logo}
        />

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account ?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}> LOGIN</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Create Your Account</Text>

        <View style={styles.stepRow}>
          <Text style={styles.subtitle}>{title}</Text>
          <Text style={styles.stepText}>
            {step}/{totalSteps}
          </Text>
        </View>

        {children}

        <View style={styles.buttonRow}>
          {prevStep ? (
            <TouchableOpacity style={styles.backButton} onPress={prevStep}>
              <View style={styles.buttonInner}>
                <Ionicons name="arrow-back" size={20} color="#fff" />
                <Text style={styles.buttonText}>BACK</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ width: "44%" }} />
          )}

          <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          Terms of Service • Privacy Policy • Deletion Instructions
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    paddingHorizontal: 25,
    paddingTop: 100,
    paddingBottom: 40,
  },

  logo: {
    width: 160,
    height: 70,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 15,
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  loginText: { fontSize: 15, color: "#444" },

  loginLink: { color: "#2B6CB0", fontWeight: "600" },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 6,
  },

  stepRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  subtitle: { fontSize: 15, color: "#777" },

  stepText: { fontSize: 13, color: "#999" },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  backButton: {
    backgroundColor: "#888",
    width: "44%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  nextButton: {
    backgroundColor: "#1E8E14",
    width: "44%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  footer: {
    color: "#1E8E14",
    fontSize: 12,
    textAlign: "center",
    marginTop: 30,
  },
});