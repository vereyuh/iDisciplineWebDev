import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./components/auth/LoginScreen";
import Dashboard from "./components/disciplinaryofficer/Dashboard/Dashboard";
import StudentList from "./components/disciplinaryofficer/StudentList/StudentList";
import StudentsViolations from "./components/disciplinaryofficer/Violations/StudentViolations";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="StudentList" component={StudentList} /> 
        <Stack.Screen name="StudentsViolations" component={StudentsViolations} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
