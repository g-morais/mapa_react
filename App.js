import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import { 
  
  requestForegroundPermissionsAsync ,
  getCurrentPositionAsync,
  LocationObject
} from 'expo-location';

import { styles } from './styles';

export default function App() {
  const [location, setLocation] = useState(null);

  async function requestLocationPermissions(){
    const { granted } = await requestForegroundPermissionsAsync();

    if(granted){
      const getCurrentPosition = await getCurrentPositionAsync();
      setLocation(getCurrentPosition);
    }
  }
  
  useEffect(() => {
    requestLocationPermissions();
  }, []);

  const windowHeight = Dimensions.get('window').height;
  const halfScreenHeight = windowHeight / 2;

  return (
    <View style={styles.container}>

      <MapView
      style={styles.map}
      />

    </View>
  );
}