import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from 'react';
import styles from './styles.js'

export default function Login({navigation}){
  const [number, setNumber] = useState(0);
  const [numberSec, setNumberSec] = useState(0);

  function soma(){
    let setTotal = Number(number)+Number(numberSec);
    return setTotal
  }
  return(
    <View style={styles.container}>
      <Text style={styles.txt}>First number</Text>
      <TextInput 
        style={styles.input}
        placeholder="Number 1"
        onChangeText={number => setNumber(number)}
      />
      <Text style={styles.txt}>Second number</Text>
      <TextInput 
        style={styles.input}
        placeholder="Number 2"
        onChangeText={numberSec => setNumberSec(numberSec)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.botao}
        
        /*onPress={() => (setTotal(soma()))}*/
        onPress={()=>navigation.navigate('Home', {total: soma()})}
      >
        <Text style={{fontSize:20, color: '#ffffff', fontWeight: 'bold'}}>OK</Text>
        </TouchableOpacity>
    </View>
  )
}