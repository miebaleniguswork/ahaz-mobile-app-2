import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type FormData = {
  firstName: string
  lastName: string
  location: string
  username: string
  password: string
}

interface Props {
  data: FormData
  updateData: (data: Partial<FormData>) => void
}

export default function RegisterName({ data, updateData }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Welcome, enter your name</Text>

      <Text style={styles.label}>First name</Text>
      <TextInput
        placeholder="E.g., Selam"
        style={styles.input}
        value={data.firstName}
        onChangeText={(text) => updateData({ firstName: text })}
      />

      <Text style={styles.label}>Last name</Text>
      <TextInput
        placeholder="E.g., Mesele"
        style={styles.input}
        value={data.lastName}
        onChangeText={(text) => updateData({ lastName: text })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 25
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 55,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20
  }
});