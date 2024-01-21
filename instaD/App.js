import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from './Components/TextInputComponent';
import ButtonComponent from './Components/ButtonComponent';
export default function App() {
  return (
    <View style={styles.container}>
     <TextInput/>
     <ButtonComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontColor:{
    color:'white'
  }
});
