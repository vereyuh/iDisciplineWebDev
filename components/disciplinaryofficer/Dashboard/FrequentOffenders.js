import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../../styles/dashboardStyles';

const offenders = Array(6).fill({ name: 'User', position: 'Position' });

const FrequentOffenders = () => {
  return (
    <View style={styles.offendersContainer}>
      <Text style={styles.offendersTitle}>Frequent Offenders</Text>
      <Text style={styles.offendersSubtitle}>for the whole school year</Text>
      {offenders.map((offender, index) => (
        <View key={index} style={styles.offenderItem}>
          <Image source={require('../../assets/icon.png')} style={styles.offenderAvatar} />
          <View>
            <Text style={styles.offenderName}>{offender.name}</Text>
            <Text style={styles.offenderPosition}>{offender.position}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default FrequentOffenders;
