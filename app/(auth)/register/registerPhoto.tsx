import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

import type { FormData, FormErrors } from "../../../types/_types";

type Props = {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors?: FormErrors;
};

const difficulties = [
  "No",
  "Difficulty: seeing",
  "Difficulty: hearing",
  "Difficulty: walking",
  "Difficulty: remembering",
  "Difficulty: communicating",
  "Difficulty: learning",
  "Other",
];

export default function RegisterPhoto({ data, updateData, errors }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) return alert("Permission denied!");
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      updateData({ photo: result.assets[0].uri });
    }
  };

  const handleDifficultySelect = (option: string) => {
    updateData({ difficulty: option });
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.subtitle}>Upload your photo</Text>
        <Text style={styles.label}>Profile picture (optional)</Text>
        <TouchableOpacity style={styles.uploadRow} onPress={pickImage}>
          <Ionicons
            name="attach-outline"
            size={22}
            color="#555"
            style={{ marginRight: 10 }}
          />

          <Text style={styles.uploadInput}>
            {data.photo ? ".jpg selected" : "Upload .jpg"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Do you experience any difficulty?</Text>

        <TouchableOpacity
          style={[
            styles.dropdown,
            errors?.difficulty && { borderColor: "red" },
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text>{data.difficulty || "Select difficulty"}</Text>
          <Ionicons name="chevron-down-outline" size={20} color="#555" />
        </TouchableOpacity>

        {errors?.difficulty && (
          <Text style={styles.errorText}>{errors.difficulty}</Text>
        )}
      </ScrollView>

      {/* Modal outside ScrollView */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {difficulties.map((option) => (
                <View key={option} style={{ marginBottom: 8 }}>
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => handleDifficultySelect(option)}
                  >
                    <Text>{option}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginTop: 6,
    fontSize: 13,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 40,
  },
  subtitle: { fontSize: 16, color: "#777", marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 12 },
  uploadRow: { flexDirection: "row", alignItems: "center", marginBottom: 25 },
  clipIcon: { fontSize: 24, marginRight: 10 },
  uploadInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    height: 45,
    padding: 10,
    color: "#555",
  },
  preview: { width: 80, height: 80, borderRadius: 8 },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    height: 45,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
  },
  modalOption: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
