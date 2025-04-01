import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Sidebar from "../Dashboard/Sidebar";
import CreateNewStudent from "./CreateNewStudent";
import DetailStudentPanel from "./DetailStudentPanel";

import slstyles from "../../../styles/studentlistStyles/StudentlistStyle";
import layoutStyles from "../../../styles/studentlistStyles/StudentListLayoutStyles";

const StudentList = () => {
  const [students, setStudents] = useState([
    {
      id: "00000",
      firstName: "First Name",
      lastName: "Last Name",
      violations: "-------------",
      irSubmitted: "-------------",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [newStudent, setNewStudent] = useState({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    address: "",
    yearSection: "",
    adviser: "",
    parent: "",
    email: "",
    contact: "",
    photo: null,
  });

  const handleAddStudent = () => {
    const fullStudent = {
      id: Date.now().toString(),
      firstName: newStudent.firstName,
      lastName: newStudent.lastName,
      violations: "-------------",
      irSubmitted: "-------------",
    };
    setStudents([...students, fullStudent]);
    setNewStudent({});
    setShowForm(false);
  };

  return (
    <View style={layoutStyles.container}>
      <Sidebar />

      <View style={layoutStyles.content}>
        {/* Header */}
        <View style={slstyles.header}>
          <Text style={slstyles.title}>Students</Text>
          <View style={slstyles.countBubble}>
            <Text style={slstyles.countText}>{students.length}</Text>
          </View>
          <TextInput placeholder="Search Here" style={slstyles.searchInput} />
          <TouchableOpacity onPress={() => console.log("Chat clicked")}>
            <MaterialIcons name="chat-bubble" size={24} style={slstyles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Notifications clicked")}>
            <MaterialIcons name="notifications" size={24} style={slstyles.icon} />
          </TouchableOpacity>
        </View>

        {/* Filter Bar */}
        <View style={slstyles.filterBar}>
          <TouchableOpacity style={slstyles.dropdown}>
            <Text style={slstyles.dropdownText}>Year</Text>
            <MaterialIcons name="arrow-drop-down" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={slstyles.addButton} onPress={() => setShowForm(true)}>
            <Text style={slstyles.addButtonText}>Add Student</Text>
          </TouchableOpacity>
        </View>

        {/* Table Header */}
        <View style={slstyles.tableHeader}>
          <Text style={slstyles.tableHeaderCell}>Photo</Text>
          <Text style={slstyles.tableHeaderCell}>Student ID</Text>
          <Text style={slstyles.tableHeaderCell}>First Name</Text>
          <Text style={slstyles.tableHeaderCell}>Last Name</Text>
          <Text style={slstyles.tableHeaderCell}>No of Violations</Text>
          <Text style={slstyles.tableHeaderCell}>No of IR Submitted</Text>
        </View>

        {/* Student List */}
        <FlatList
          data={students}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedStudent(item);
                setShowDetails(true);
              }}
            >
              <View style={slstyles.studentRow}>
                <MaterialIcons name="check-box" size={20} style={slstyles.checkbox} />
                <Text style={slstyles.cell}>{item.id}</Text>
                <Text style={slstyles.cell}>{item.firstName}</Text>
                <Text style={slstyles.cell}>{item.lastName}</Text>
                <Text style={slstyles.cell}>{item.violations}</Text>
                <Text style={slstyles.cell}>{item.irSubmitted}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Modals */}
      {showForm && (
        <CreateNewStudent
          onClose={() => setShowForm(false)}
          newStudent={newStudent}
          setNewStudent={setNewStudent}
          onSubmit={handleAddStudent}
        />
      )}

      {showDetails && selectedStudent && (
        <DetailStudentPanel
          student={selectedStudent}
          onClose={() => setShowDetails(false)}
        />
      )}
    </View>
  );
};

export default StudentList;
