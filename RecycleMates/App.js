import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const splashImage = require('./assets/Splash/RMIcon.png');


export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDF5D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
