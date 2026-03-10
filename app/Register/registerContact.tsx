import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";

type FormData = {
  firstName: string;
  lastName: string;
  location: string;
  username: string;
  password: string;
};

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
}

export default function RegisterContact({}: Props) {
  const [countryCode, setCountryCode] = useState<CountryCode>("ET");
  const [callingCode, setCallingCode] = useState<string>("251");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter valid email address"
        style={styles.input}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Mobile Number</Text>

      <View style={styles.phoneContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCode
          withCallingCodeButton
          onSelect={(country: Country) => {
            setCountryCode(country.cca2);
            setCallingCode(country.callingCode[0]);
          }}
        />

        <TextInput
          placeholder="Enter a phone number"
          style={styles.phoneInput}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
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
  subtitle: { fontSize: 16, color: "#777", marginBottom: 20 },
  loginLink: { color: "#2B6CB0", fontWeight: "600" },
  label: { fontSize: 16, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    marginBottom: 30,
  },
  flagPlaceholder: {
    paddingHorizontal: 10,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  phoneInput: { flex: 1, paddingHorizontal: 15 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
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
  buttonText: { color: "white", fontWeight: "700" },
  backText: { color: "white", fontWeight: "700" },
  footer: {
    textAlign: "center",
    color: "#1E8E14",
    marginTop: 40,
    fontSize: 12,
  },
});
