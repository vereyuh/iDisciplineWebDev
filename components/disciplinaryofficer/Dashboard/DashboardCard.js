import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../../../styles/DashboardStyles';

const DashboardCard = ({ title, count, color, icon }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <MaterialIcons name={icon} size={32} color="#FFF" />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardCount}>{count}</Text>
    </View>
  );
};

export default DashboardCard;
