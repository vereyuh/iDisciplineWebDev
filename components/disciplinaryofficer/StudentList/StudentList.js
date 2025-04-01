import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import slstyles from "../../../styles/StudentlistStyle";


const StudentList = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [students, setStudents] = useState([
    { id: "00001", firstName: "John", lastName: "Doe", violations: 0, irSubmitted: 0 },
    { id: "00002", firstName: "Jane", lastName: "Smith", violations: 1, irSubmitted: 2 },
    { id: "00003", firstName: "Alex", lastName: "Johnson", violations: 0, irSubmitted: 1 },
  ]);

  return (
    <View style={slstyles.container}>
      {/* Top Bar */}
      <View style={slstyles.topBar}>
        <TextInput style={slstyles.searchBar} placeholder="Search Here" />
        <TouchableOpacity>
          <MaterialIcons name="message" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title & Year Dropdown */}
      <View style={slstyles.header}>
        <Text style={slstyles.title}>Students</Text>
        <View style={slstyles.yearDropdown}>
          <Picker selectedValue={selectedYear} onValueChange={(itemValue) => setSelectedYear(itemValue)}>
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2022" value="2022" />
          </Picker>
        </View>
      </View>

      {/* Add Student Button */}
      <TouchableOpacity style={slstyles.addButton}>
        <Text style={slstyles.addButtonText}>Add Student</Text>
      </TouchableOpacity>

      {/* Student List */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={slstyles.studentRow}>
            
            <Text style={slstyles.studentText}>{item.id}</Text>
            <Text style={slstyles.studentText}>{item.firstName}</Text>
            <Text style={slstyles.studentText}>{item.lastName}</Text>
            <Text style={slstyles.studentText}>{item.violations}</Text>
            <Text style={slstyles.studentText}>{item.irSubmitted}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StudentList;
