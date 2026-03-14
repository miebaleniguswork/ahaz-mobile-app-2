import React, { useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { FormData, FormErrors } from "../../../types/_types";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors?: FormErrors;
}

type DropdownKind = "year" | "month" | "day" | null;

export default function RegisterMore({ data, updateData, errors }: Props) {
  const [open, setOpen] = useState<DropdownKind>(null);

  const years = useMemo(() => {
    const out: string[] = [];
    for (let y = 2016; y >= 1927; y -= 1) out.push(String(y));
    return out;
  }, []);

  const months = useMemo(
    () => [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    [],
  );

  const days = useMemo(() => {
    const out: string[] = [];
    for (let d = 1; d <= 30; d += 1) out.push(String(d));
    return out;
  }, []);

  const list = open === "year" ? years : open === "month" ? months : days;

  const onPick = (value: string) => {
    if (open === "year") updateData({ birthYear: value });
    if (open === "month") updateData({ birthMonth: value });
    if (open === "day") updateData({ birthDay: value });
    setOpen(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Birthdate</Text>

      <View style={styles.dropdownRow}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOpen("year")}
        >
          <Text style={styles.dropdownText}>{data.birthYear || "Year"}</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOpen("month")}
        >
          <Text style={styles.dropdownText}>{data.birthMonth || "Month"}</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOpen("day")}
        >
          <Text style={styles.dropdownText}>{data.birthDay || "Day"}</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>
      </View>
      {(!!errors?.birthYear || !!errors?.birthMonth || !!errors?.birthDay) && (
        <Text style={styles.error}>
          {errors?.birthYear || errors?.birthMonth || errors?.birthDay}
        </Text>
      )}

      <Text style={styles.label}>Sex</Text>

      <View style={styles.radioRow}>
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => updateData({ sex: "Male" })}
        >
          <View
            style={[
              styles.radioCircle,
              data.sex === "Male" && styles.selectedCircle,
            ]}
          >
            {data.sex === "Male" && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.radioLabel}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => updateData({ sex: "Female" })}
        >
          <View
            style={[
              styles.radioCircle,
              data.sex === "Female" && styles.selectedCircle,
            ]}
          >
            {data.sex === "Female" && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.radioLabel}>Female</Text>
        </TouchableOpacity>
      </View>
      {!!errors?.sex && <Text style={styles.error}>{errors.sex}</Text>}
      <Modal visible={open !== null} transparent animationType="fade">
        <Pressable style={styles.modalBackdrop} onPress={() => setOpen(null)}>
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <ScrollView
              style={styles.modalScroll}
              contentContainerStyle={styles.modalScrollContent}
              showsVerticalScrollIndicator
            >
              {list.map((value) => (
                <Pressable
                  key={value}
                  style={styles.modalItem}
                  onPress={() => onPick(value)}
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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
    width: "31%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  dropdownText: {
    color: "#999",
    fontSize: 14,
  },
  arrow: {
    fontSize: 10,
    color: "#ccc",
  },
  error: {
    color: "#D14343",
    marginBottom: 16,
    fontSize: 13,
  },
  radioRow: {
    flexDirection: "row",
    gap: 30,
    marginTop: 5,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: {
    borderColor: "#14a814",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#14a814",
  },
  radioLabel: {
    fontSize: 16,
    color: "#555",
  },
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
