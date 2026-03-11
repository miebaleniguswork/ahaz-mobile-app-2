import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
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
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Top Section */}
      <View style={styles.topArea}>
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
      </View>

      {/* Scrollable Form */}
      <ScrollView
        style={styles.formScroll}
        contentContainerStyle={styles.formContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          {prevStep && (
            <TouchableOpacity style={styles.backButton} onPress={prevStep}>
              <View style={styles.buttonInner}>
                <Text style={styles.buttonIcon}>←</Text>
                <Text style={styles.buttonText}>BACK</Text>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>NEXT</Text>
              <Text style={styles.buttonIcon}>→</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>
          Terms of Service  • Privacy Policy • Deletion Instructions
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },

  topArea: {
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

  formScroll: {
    flex: 1,
  },

  formContent: {
    paddingBottom: 20,
  },

  buttonContainer: {
    // marginTop: 10,
    marginBottom: 50,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backButton: {
    backgroundColor: "#888",
    width: "44%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },

  nextButton: {
    backgroundColor: "#1E8E14",
    width: "44%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },

  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 14,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 0.5,
  },

  buttonIcon: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  footerContainer: {
    alignItems: "center",
    paddingBottom: 5,
  },

  footer: {
    color: "#1E8E14",
    fontSize: 12,
    textAlign: "center",
  },
});