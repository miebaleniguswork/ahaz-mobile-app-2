// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from "react-native";

// export default function Register() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image
//         source={require("../assets/images/ahaz-logo.png")}
//         style={styles.logo}
//       />

//       <Text style={styles.title}>Create Your Account</Text>
//       <Text style={styles.subtitle}>Welcome, enter your name</Text>

//       <View style={styles.loginRow}>
//         <Text style={styles.loginText}>Already have an account?</Text>
//         <TouchableOpacity>
//           <Text style={styles.loginLink}> LOGIN</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.label}>First name</Text>
//       <TextInput
//         placeholder="E.g., Selam"
//         style={styles.input}
//         value={firstName}
//         onChangeText={setFirstName}
//       />

//       <Text style={styles.label}>Last name</Text>
//       <TextInput
//         placeholder="E.g., Mesele"
//         style={styles.input}
//         value={lastName}
//         onChangeText={setLastName}
//       />

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>NEXT →</Text>
//       </TouchableOpacity>

//       <Text style={styles.footer}>
//         Terms of Service · Privacy Policy · Deletion Instruction
//       </Text>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 25,
//     paddingTop: 80,
//   },
//   logo: {
//     width: 60,
//     height: 60,
//     resizeMode: "contain",
//     alignSelf: "center",
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 34,
//     fontWeight: "700",
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: "#777",
//     marginBottom: 20,
//   },
//   loginRow: {
//     flexDirection: "row",
//     marginBottom: 35,
//   },
//   loginText: {
//     fontSize: 16,
//   },
//   loginLink: {
//     color: "#2B6CB0",
//     fontWeight: "600",
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 12,
//     height: 60,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 25,
//   },
//   button: {
//     backgroundColor: "#1E8E14",
//     height: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "700",
//   },
//   footer: {
//     marginTop: 40,
//     textAlign: "center",
//     color: "#1E8E14",
//     fontSize: 14,
//   },
// });

// import React, { useState } from "react";
// import {
//     Image,
//     ScrollView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";

// export default function Register() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
      
//       {/* Logo */}
//       <Image
//         source={require("../assets/images/ahaz-logo.png")}
//         style={styles.logo}
//       />

//        {/* Login row */}
//       <View style={styles.loginRow}>
//         <Text style={styles.loginText}>Already have an account?</Text>
//         <TouchableOpacity>
//           <Text style={styles.loginLink}> LOGIN</Text>
//         </TouchableOpacity>
//       </View>


//       {/* Title */}
//       <Text style={styles.title}>Create Your Account</Text>
//       <Text style={styles.subtitle}>Welcome, enter your name</Text>

     

//       {/* First name */}
//       <Text style={styles.label}>First name</Text>
//       <TextInput
//         placeholder="E.g., Selam"
//         style={styles.input}
//         value={firstName}
//         onChangeText={setFirstName}
//       />

//       {/* Last name */}
//       <Text style={styles.label}>Last name</Text>
//       <TextInput
//         placeholder="E.g., Mesele"
//         style={styles.input}
//         value={lastName}
//         onChangeText={setLastName}
//       />

//       {/* Button */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>NEXT →</Text>
//       </TouchableOpacity>

//       {/* Footer */}
//       <Text style={styles.footer}>
//         Terms of Service · Privacy Policy · Deletion Instruction
//       </Text>

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#fff",
//     padding: 25,
//     // paddingTop: 80,
//   },

//   logo: {
//     width: 200,
//     height: 200,
//     resizeMode: "contain",
//     alignSelf: "center",
//     // marginBottom: 30,

//   },

//   title: {
//     fontSize: 34,
//     fontWeight: "700",
//     marginBottom: 10,
//   },

//   subtitle: {
//     fontSize: 18,
//     color: "#777",
//     marginBottom: 20,
//   },

//   loginRow: {
//     flexDirection: "row",
//     marginBottom: 35,
//     alignItems: "center"
//   },

//   loginText: {
//     fontSize: 16,
//   },

//   loginLink: {
//     color: "#2B6CB0",
//     fontWeight: "600",
//   },

//   label: {
//     fontSize: 18,
//     marginBottom: 8,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 12,
//     height: 60,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 25,
//   },

//   button: {
//     backgroundColor: "#1E8E14",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     marginTop: 10,
//   },

//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "700",
//   },

//   footer: {
//     textAlign: "center",
//     color: "#1E8E14",
//     marginTop: 40,
//     fontSize: 14,
//   },
// });


import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

export default function RegisterName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/images/ahaz-logo.png")} style={styles.logo} />
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>Welcome, enter your name</Text>

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity><Text style={styles.loginLink}> LOGIN</Text></TouchableOpacity>
      </View>

      <Text style={styles.label}>First name</Text>
      <TextInput placeholder="E.g., Selam" style={styles.input} value={firstName} onChangeText={setFirstName} />

      <Text style={styles.label}>Last name</Text>
      <TextInput placeholder="E.g., Mesele" style={styles.input} value={lastName} onChangeText={setLastName} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT →</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Terms of Service · Privacy Policy · Deletion Instruction</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", padding: 25, paddingTop: 60 },
  logo: { width: 200, height: 100, resizeMode: "contain", alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "#777", marginBottom: 20 },
  loginRow: { flexDirection: "row", marginBottom: 30, alignItems: "center" },
  loginText: { fontSize: 16 },
  loginLink: { color: "#2B6CB0", fontWeight: "600" },
  label: { fontSize: 16, marginBottom: 8, fontWeight: "500" },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, height: 55, paddingHorizontal: 15, fontSize: 16, marginBottom: 20 },
  button: { backgroundColor: "#1E8E14", height: 55, justifyContent: "center", alignItems: "center", borderRadius: 8, marginTop: 10 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "700" },
  footer: { textAlign: "center", color: "#1E8E14", marginTop: 40, fontSize: 12 },
});