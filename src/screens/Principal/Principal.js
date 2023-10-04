import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, {useState} from 'react';
import styles from './style'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Input from '../../components/Input/Input';
import { useNavigation } from "@react-navigation/native";
import ButtonNext from '../../components/ButtonNext/ButtonNext';
import Carousel from 'react-native-snap-carousel';
import Header from '../../components/Header';


export default function Principal(){

  const navigation = useNavigation();

  return(
    <Animatable.View animation="fadeInUp" style={styles.body}>
      <Header/>
    </Animatable.View>
      
  )
}