import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native'
import styles from './style'

const Input = () => {
    const [cpf, setCpf] = useState("")

  return (
    <View>
        <TextInput
            placeholder="123.456.789-01"
            placeholderTextColor="#525151" 
            style={styles.input}
            onChangeText = {(cpf) => setCpf(cpf)}
            />
    </View>
  );
};

export default Input