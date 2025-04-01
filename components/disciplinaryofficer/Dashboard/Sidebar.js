import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import styles from "../../../styles/DashboardStyles";

const Sidebar = () => {
  const navigation = useNavigation(); // Get navigation instance

  const menuItems = [
    { name: "Dashboard", icon: "home", screen: "Dashboard" },
    { name: "Student List", icon: "people", screen: "StudentList" }, // Navigate to Student List
    { name: "Violations", icon: "gavel", screen: "StudentsViolations" },
    { name: "Incident Reports", icon: "report", screen: "Dashboard" },
    { name: "Appointments", icon: "calendar-today", screen: "Dashboard" },
    { name: "Handbook", icon: "book", screen: "Dashboard" },
    { name: "Logout", icon: "logout", screen: "Login" },
  ];

  return (
    <View style={styles.sidebar}>
      <View style={styles.profile}>
        <Text style={styles.userName}>User</Text>
        <Text style={styles.userPosition}>Position</Text>
      </View>

      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem} onPress={() => navigation.navigate(item.screen)}>
          <MaterialIcons name={item.icon} size={24} color="#FFF" />
          <Text style={styles.menuText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Sidebar;
