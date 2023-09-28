import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, {useState} from 'react';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Input from '../../components/Input/Input';
import { useNavigation } from "@react-navigation/native";
import ButtonNext from '../../components/ButtonNext/ButtonNext';
import { Ionicons } from '@expo/vector-icons';


export default function Dados(){

  const navigation = useNavigation();

  return(
    <Animatable.View animation="fadeInUp" style={styles.body}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Welcome')}
       >
        <Ionicons name="arrow-back-outline" size={30} color="white" marginTop={60} marginLeft={20}/>
      </TouchableOpacity>
      
      <View>
          <Text style={styles.txt}>Preencha os dados a seguir para darmos continuidade com o cadastro</Text>
          <Text style={styles.subTxt}>Dados Pessoais</Text>
          <Text style={styles.subTxt2}>Nome completo</Text>
          <Input placeh={'Nome completo'} style={{top: 35}}/>
          <Text style={styles.subTxt2}>Email</Text>
          <Input placeh={'fulano@mail.com'} style={{top: 35}}/>
          <Text style={styles.subTxt2}>Número de telefone</Text>
          <Input placeh={'(19)98765-4321'} style={{top: 35}}/>
          
      </View>
      
      <ButtonNext style={{marginTop: 80}} />
    </Animatable.View>
      
  )
}