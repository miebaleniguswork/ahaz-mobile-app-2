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
    onSend: () => void;
    onLogin: () => void;
  }
  
  export default function RecoveryLayout({
    children,
    onSend,
    onLogin,
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
  
        {/* Title */}
        <Text style={styles.title}>Account Recovery</Text>
  
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Remember your password?</Text>
          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.loginLink}> LOGIN</Text>
          </TouchableOpacity>
        </View>
  
        <Text style={styles.subtitle}>
          Enter your email to get a verification code
        </Text>
  
        {/* Form */}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
  
          <TouchableOpacity style={styles.button} onPress={onSend}>
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
      padding: 25,
    },
  
    logoArea: {
      alignItems: "center",
      marginTop: 60,
      marginBottom: 20,
    },
  
    logo: {
      width: 180,
      height: 80,
      resizeMode: "contain",
    },
  
    title: {
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 10,
    },
  
    loginRow: {
      flexDirection: "row",
      marginBottom: 20,
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
    },
  
    button: {
      backgroundColor: "#6BCB77",
      height: 44,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2,
      marginTop: 10,
    },
  
    buttonText: {
      color: "#fff",
      fontWeight: "700",
    },
  });