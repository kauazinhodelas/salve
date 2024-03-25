import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Kauah from './src/componentes/kauah/main';
import Kauag from './src/componentes/kauag/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Kauah/>
      <Kauag/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
