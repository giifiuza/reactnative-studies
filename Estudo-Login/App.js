import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import App from './ThirdPage';
import { View } from 'react-native-animatable';


export default function App() {
  return (
    <View>
      <App />
    </View>
    // <NavigationContainer>
    //   <StatusBar backgroundColor="#38a69d" barStyle="light-content"/>
    //   <Routes/>
    // </NavigationContainer>
  );
}
