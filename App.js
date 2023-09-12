import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, Platform } from 'react-native';
import Constants from 'expo-constants'

export default function App() {
  return (
    <SafeAreaView style= {styles.container}>
      <Text>Open up App.js to start working on your program!</Text>
      <StatusBar style='auto' 
      backgroundColor='red'
      //hidden={true}
      />
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
