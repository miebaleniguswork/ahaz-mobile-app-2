import React, { useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import type { FormData, FormErrors } from "../../../types/_types";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors?: FormErrors;
}

export default function RegisterLocation({ data, updateData, errors }: Props) {
  const [open, setOpen] = useState(false);

  const options = useMemo(
    () => [
      "No i am not",
      "IDP from West Tigray",
      "IDP from Southern Tigray",
      "IDP from Eastern Tigray",
      "IDP from Central Tigray",
      "IDP from other part of Tigray",
      "Displaced from other regions",
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Info regarding your location</Text>

      <Text style={styles.label}>Which city are you from?</Text>
      <TextInput
        placeholder="E.g., Mekelle"
        style={styles.input}
        value={data.location}
        onChangeText={(text) => updateData({ location: text })}
      />
      {!!errors?.location && (
        <Text style={styles.error}>{errors.location}</Text>
      )}

      <Text style={styles.label}>Are you displaced from your home?</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setOpen(true)}>
        <Text style={styles.dropText}>
          {data.displacementStatus || "Select an option"}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>
      {!!errors?.displacementStatus && (
        <Text style={styles.error}>{errors.displacementStatus}</Text>
      )}

      <Modal visible={open} transparent animationType="fade">
        <Pressable style={styles.modalBackdrop} onPress={() => setOpen(false)}>
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <ScrollView
              style={styles.modalScroll}
              contentContainerStyle={styles.modalScrollContent}
              showsVerticalScrollIndicator
            >
              {options.map((value) => (
                <Pressable
                  key={value}
                  style={styles.modalItem}
                  onPress={() => {
                    updateData({ displacementStatus: value });
                    setOpen(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{value}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
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
  subtitle: { fontSize: 16, color: "#777", marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 8, fontWeight: "500" },
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
    marginBottom: 16,
    fontSize: 13,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  dropText: { fontSize: 16 },
  arrow: { color: "#888" },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 24,
    justifyContent: "center",
  },
  modalCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    maxHeight: "70%",
    overflow: "hidden",
  },
  modalScroll: {
    width: "100%",
  },
  modalScrollContent: {},
  modalItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalItemText: {
    fontSize: 16,
    color: "#222",
  },
});
