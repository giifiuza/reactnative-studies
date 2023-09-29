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


export default function Login(){

  const navigation = useNavigation();

  return(
    <Animatable.View animation="fadeInUp" style={styles.body}>
      
    </Animatable.View>
      
  )
}