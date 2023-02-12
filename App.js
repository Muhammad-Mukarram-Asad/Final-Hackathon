import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from './Common_Screens/HomeScreen';
import Signup from './Common_Screens/Signup';
import Login from './Common_Screens/Login';
import All_Products from './Admin_Interface_Screen/All_Products';
import Navigator from './Navigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <All_Products />
      {/* <Navigator /> */}

    </SafeAreaView>
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
