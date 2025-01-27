import { StatusBar } from 'expo-status-bar';
import {  View} from 'react-native';
import Styles from './styles/Styles.js';
import {MD3LightTheme, Text, Button, TextInput, PaperProvider} from 'react-native-paper';

const MyTheme = {
}

export default function App() {

  return (
   <PaperProvider theme={MyTheme }>
      <View style={Styles.container}>
      </View>
   </PaperProvider>
  );
}

