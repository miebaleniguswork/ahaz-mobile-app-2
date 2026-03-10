import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/ahaz-logo.png")}
        style={styles.logo}
      />

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account?</Text>
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
        {prevStep && (
          <TouchableOpacity style={styles.backButton} onPress={prevStep}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Terms of Service • Privacy Policy • Deletion Instructions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
    alignItems: "center",
  },

  loginText: {
    fontSize: 15,
    color: "#444",
    alignItems: "center",
  },

  loginLink: {
    color: "#2B6CB0",
    fontWeight: "600",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },

  stepRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
  },

  stepText: {
    fontSize: 14,
    color: "#999",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

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

  buttonText: {
    color: "white",
    fontWeight: "700",
  },

  backText: {
    color: "white",
    fontWeight: "700",
  },

  footer: {
    textAlign: "center",
    color: "#1E8E14",
    marginTop: 40,
    fontSize: 12,
  },
});