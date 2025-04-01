import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../../styles/studentlistStyles/CreateNewStudentStyles";

const CreateNewStudent = ({ onClose, newStudent, setNewStudent, onSubmit }) => {
  return (
    <View style={styles.formPanel}>
      <View style={styles.formHeader}>
        <Text style={styles.formTitle}>Create a New Student</Text>
        <TouchableOpacity onPress={onClose}>
          <MaterialIcons name="close" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.uploadBox}>
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>

      <ScrollView style={styles.formBody}>
        {[
          "firstName",
          "middleName",
          "lastName",
          "gender",
          "birthDate",
          "address",
          "yearSection",
          "adviser",
          "parent",
          "email",
          "contact",
        ].map((field, idx) => (
          <TextInput
            key={idx}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            style={styles.input}
            value={newStudent[field] || ""}
            onChangeText={(text) =>
              setNewStudent((prev) => ({ ...prev, [field]: text }))
            }
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateNewStudent;
