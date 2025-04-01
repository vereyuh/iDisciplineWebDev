import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Sidebar from './Sidebar';
import DashboardCard from './DashboardCard';


import styles from '../../../styles/DashboardStyles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>for the last 30 days</Text>

        {/* Cards Section */}
        <View style={styles.cardContainer}>
          <DashboardCard title="Violation" count={0} color="#FF6B6B" icon="gavel" />
          <DashboardCard title="Incident Reports" count={0} color="#1DD1A1" icon="report" />
          <DashboardCard title="Appointment" count={0} color="#54A0FF" icon="calendar-today" />
        </View>

        {/* Chart and Offenders Section */}
        
      </View>
    </View>
  );
};

export default Dashboard;
