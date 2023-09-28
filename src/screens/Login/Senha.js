import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, {useState} from 'react';
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Input from '../../components/Input/Input';
import { useNavigation } from "@react-navigation/native";
import ButtonNext from '../../components/ButtonNext/ButtonNext';


export default function Senha(){

  const navigation = useNavigation();

  return(
    <Animatable.View animation="fadeInUp" style={styles.body}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Welcome')}
       >
        <AntDesign name="close" size={26} color="white" marginTop={70} marginLeft={20}/>
      </TouchableOpacity>
      
      <View>
          <Text style={styles.txt}>Digite sua senha para entra no aplicativo </Text>
          <Input />
          <TouchableOpacity > 
            <Text style={styles.subTxt}
            onPress={() => navigation.navigate('Dados')}
            >
              Esqueceu a senha  {'>'} </Text>
          </TouchableOpacity>
      </View>
      
      <ButtonNext />
    </Animatable.View>
      
  )
}