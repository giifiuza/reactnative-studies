import { View, Text, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, {useState} from 'react';
import styles from './styles'

export default function Login(){
  const [cpf, setCpf] = useState("")

  return(
    <Animatable.View animation="fadeInUp" style={{backgroundColor: '#0E0E0C'}} >
      <View>
          <Text>Ficamos felizes em te ver novamente! Digite seu CPF para acessar sua conta</Text>
      </View>
      <TextInput
            placeholder="123.456.789-01"
            style={styles.input}
            onChangeText = {(cpf) => setCpf(cpf)}
            />
    </Animatable.View>
      
  )
}