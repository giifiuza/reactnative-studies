import { StyleSheet, Text, View } from 'react-native';
import react from 'react';
import Routers from './routers'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App(){
  return(
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  )
}
