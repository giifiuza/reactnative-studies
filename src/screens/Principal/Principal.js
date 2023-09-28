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
      <TouchableOpacity
       onPress={() => navigation.navigate('Welcome')}
       >
        <AntDesign name="close" size={26} color="white" marginTop={70} marginLeft={20}/>
      </TouchableOpacity>
      
      <View>
          <Text style={styles.txt}>Ficamos felizes em te ver novamente! {'\n'}Digite seu CPF para acessar sua conta</Text>
          <TouchableOpacity > 
            <Text style={styles.subTxt}
            onPress={() => navigation.navigate('Welcome')}
            >
              Novo por aqui? Peça seu cartão  {'>'} </Text>
          </TouchableOpacity>
          {/* <FontAwesome name="fighter-jet" size={24} color="#f00" /> */}
      </View>
      <Input />
      <ButtonNext
      page="Senha"
      />
    </Animatable.View>
      
  )
}