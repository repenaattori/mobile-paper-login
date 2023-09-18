import { StatusBar } from 'expo-status-bar';
import {  View} from 'react-native';
import Styles from './styles/Styles.js';
import {MD3LightTheme, Provider, Text, Button, TextInput} from 'react-native-paper';

const MyTheme = {
}

export default function App() {

  return (
   <Provider theme={MyTheme }>
      <View style={Styles.container}>
      </View>
   </Provider>
  );
}

