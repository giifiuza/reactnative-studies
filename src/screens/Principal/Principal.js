import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, { useState } from 'react';
import styles from './style'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Input from '../../components/Input/Input';
import { useNavigation } from "@react-navigation/native";
import ButtonNext from '../../components/ButtonNext/ButtonNext';
import Carousel from 'react-native-snap-carousel';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import SectionCartao from '../../components/SectionCartao';
import SectionCredit from '../../components/SectionCredit';


export default function Principal() {

  const navigation = useNavigation();

  return (
    <Animatable.View animation="fadeInUp" style={styles.body}>
      <Header />
      <Slider />
      <SectionCartao />
      <SectionCredit />
    </Animatable.View>

  )
}