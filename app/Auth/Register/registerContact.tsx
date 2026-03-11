import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import type { FormData, FormErrors } from "../../../types/_types";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors?: FormErrors;
}

export default function RegisterContact({ data, updateData, errors }: Props) {
  const [countryCode, setCountryCode] = useState<CountryCode>("ET");
  const [phone, setPhone] = useState(data.phone);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter valid email address"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={data.email}
        onChangeText={(text) => updateData({ email: text })}
      />
      {!!errors?.email && <Text style={styles.error}>{errors.email}</Text>}

      <Text style={styles.label}>Mobile Number</Text>

      <View style={styles.phoneContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCode
          withCallingCodeButton
          containerButtonStyle={styles.countryButton}
          onSelect={(country: Country) => {
            setCountryCode(country.cca2);
          }}
        />

        <TextInput
          placeholder="Enter a phone number"
          style={styles.phoneInput}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
            updateData({ phone: text });
          }}
        />
      </View>
      {!!errors?.phone && <Text style={styles.error}>{errors.phone}</Text>}
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
    marginBottom: 8,
  },
  error: {
    color: "#D14343",
    marginBottom: 12,
    fontSize: 13,
  },
  phoneContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    marginBottom: 30,
    alignItems: "center",
  },
  countryButton: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: "#ddd",
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
