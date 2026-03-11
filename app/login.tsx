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
    onLogin: () => void;
    onCreateAccount: () => void;
    onForgotPassword: () => void;
  }
  
  export default function LoginLayout({
    children,
    onLogin,
    onCreateAccount,
    onForgotPassword,
  }: Props) {
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
  
        {/* Scroll Form */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.form}
        >
          {children}
  
          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
  
          {/* Forgot Password */}
          <TouchableOpacity onPress={onForgotPassword}>
            <Text style={styles.forgot}>FORGOTTEN PASSWORD?</Text>
          </TouchableOpacity>
  
          {/* Create Account */}
          <View style={styles.createRow}>
            <Text style={styles.createText}>Don't have an account?</Text>
            <TouchableOpacity onPress={onCreateAccount}>
              <Text style={styles.createLink}> CREATE NEW ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 25,
    },
  
    logoArea: {
      alignItems: "center",
      marginTop: 60,
      marginBottom: 30,
    },
  
    logo: {
      width: 180,
      height: 80,
      resizeMode: "contain",
    },
  
    form: {
      paddingBottom: 40,
    },
  
    button: {
      backgroundColor: "#1E8E14",
      height: 44,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2,
      marginTop: 20,
    },
  
    buttonText: {
      color: "#fff",
      fontWeight: "700",
      letterSpacing: 0.5,
    },
  
    forgot: {
      textAlign: "center",
      color: "#2B6CB0",
      marginTop: 15,
      fontSize: 13,
    },
  
    createRow: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 35,
    },
  
    createText: {
      color: "#444",
    },
  
    createLink: {
      color: "#1E8E14",
      fontWeight: "600",
    },
  });