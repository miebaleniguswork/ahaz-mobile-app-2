import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import type { FormData, FormErrors } from "./_types";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors?: FormErrors;
}

export default function RegisterName({ data, updateData, errors }: Props) {

 

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Welcome, enter your name</Text>

      <Text style={styles.label}>First name</Text>
      <TextInput
        placeholder="E.g. Selam"
        style={styles.input}
        value={data.firstName}
        onChangeText={(text) => updateData({ firstName: text })}
      />
      {!!errors?.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

      <Text style={styles.label}>Last name</Text>
      <TextInput
        placeholder="E.g. Mesele"
        style={styles.input}
        value={data.lastName}
        onChangeText={(text) => updateData({ lastName: text })}
      />
      {!!errors?.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 55,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 8,
  },
  error: {
    color: "#D14343",
    marginBottom: 12,
    fontSize: 13,
  },
});