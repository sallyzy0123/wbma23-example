import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
const App = () => {
  //console.log('App starting!')
  return (
    <View style={styles.container}>
      <Text>Hello world!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
