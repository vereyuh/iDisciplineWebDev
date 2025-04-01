import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../../styles/studentlistStyles/DetailPanelStyle";

const DetailStudentPanel = ({ student, onClose }) => {
  return (
    <View style={styles.detailPanel}>
      <View style={styles.detailHeader}>
        <Text style={styles.detailTitle}>Student Details</Text>
        <TouchableOpacity onPress={onClose}>
          <MaterialIcons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>

      {/* Card 1 */}
      <View style={styles.card}>
        <View style={styles.studentInfo}>
          <View style={styles.avatarPlaceholder} />
          <View>
            <Text style={styles.nameText}>
              {student.firstName} {student.lastName}
            </Text>
            <Text style={styles.smallText}>Student No: {student.id}</Text>
            <Text style={styles.smallText}>Year & Section: 4 - Lotus</Text>
            <Text style={styles.smallText}>School Year: 2024-2025</Text>
          </View>
        </View>
      </View>

      {/* Card 2 */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Student Report</Text>
        <Text style={styles.link}>Violation Record</Text>
      </TouchableOpacity>

      {/* Card 3 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Behavior Report</Text>
        <Text style={styles.smallText}>
          This student is in immediate need of counseling
        </Text>
      </View>
    </View>
  );
};

export default DetailStudentPanel;
