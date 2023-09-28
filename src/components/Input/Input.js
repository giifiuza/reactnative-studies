import React, {useState} from 'react';
    import { StyleSheet } from "react-native";
import {Text, View, TextInput} from 'react-native'
import styles from './style'

const Input = ({ placeh, style}) => {
    const [cpf, setCpf] = useState("")

    const styles = StyleSheet.create({
        input:{
        borderWidth: 1,
        borderColor: '#0077B6',
        height: 50,
        marginBottom: 12,
        fontSize: 16,
        color: '#ffffff',
        borderRadius: 15,
        padding: 10,
        margin: 20,
        ...style
        }
    })
    
  return (
    <View>
        <TextInput
            placeholder={placeh}
            placeholderTextColor="#525151" 
            style={styles.input}
            onChangeText = {(cpf) => setCpf(cpf)}
            />
    </View>
  );
};

export default Input