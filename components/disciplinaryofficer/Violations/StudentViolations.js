import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Sidebar from "../Dashboard/Sidebar";
import layoutStyles from "../../../styles/studentlistStyles/StudentListLayoutStyles"; // for row layout
import styles from "../../../styles/studentviolationStyles/StudentViolationStyles";



const filterOptions = ["Minor Offense", "Major Offense", "Grade Level", "No. of Violations"];

const StudentsViolations = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [violations, setViolations] = useState([
    {
      id: "1",
      status: "Unresolved",
      caseNo: "00000",
      firstName: "First Name",
      lastName: "Last Name",
      type: "-------------",
      grade: "Grade 6",
    },
    {
      id: "2",
      status: "Resolved",
      caseNo: "00001",
      firstName: "First Name",
      lastName: "Last Name",
      type: "-------------",
      grade: "Grade 6",
    },
  ]);

  const filtered = violations.filter(
    v =>
      v.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.caseNo.includes(searchTerm)
  );

  return (
    <View style={layoutStyles.container}>
      <Sidebar />

      <View style={layoutStyles.content}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Students Violations</Text>
            <View style={styles.countBubble}>
              <Text style={styles.countText}>{violations.length}</Text>
            </View>
          </View>

          <View style={styles.iconRow}>
            <TouchableOpacity onPress={() => console.log("Chat clicked")}>
              <MaterialIcons name="chat-bubble" size={24} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Notifications clicked")}>
              <MaterialIcons name="notifications" size={24} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search + Filters */}
        <View style={styles.searchFilterRow}>
          <View style={styles.searchBar}>
            <MaterialIcons name="search" size={20} color="#999" />
            <TextInput
              placeholder="Search Here"
              value={searchTerm}
              onChangeText={setSearchTerm}
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Recent</Text>
            <MaterialIcons name="arrow-drop-down" size={20} />
          </TouchableOpacity>

          {filterOptions.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterChip,
                selectedFilter === filter && styles.filterChipActive,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  selectedFilter === filter && styles.filterChipTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Violation Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddViolation")}
        >
          <Text style={styles.addButtonText}>Add Violation</Text>
        </TouchableOpacity>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Status</Text>
          <Text style={styles.tableHeaderCell}>Case No.</Text>
          <Text style={styles.tableHeaderCell}>First Name</Text>
          <Text style={styles.tableHeaderCell}>Last Name</Text>
          <Text style={styles.tableHeaderCell}>Type</Text>
          <Text style={styles.tableHeaderCell}>Grade Level</Text>
        </View>

        {/* Table Rows */}
        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.violationRow}>
              <View style={styles.statusCell}>
                <MaterialIcons
                  name={item.status === "Resolved" ? "check-circle" : "error-outline"}
                  size={16}
                  color={item.status === "Resolved" ? "#14C18B" : "#FFC107"}
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
              <Text style={styles.cell}>{item.caseNo}</Text>
              <Text style={styles.cell}>{item.firstName}</Text>
              <Text style={styles.cell}>{item.lastName}</Text>
              <Text style={styles.cell}>{item.type}</Text>
              <Text style={styles.cell}>{item.grade}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default StudentsViolations;
