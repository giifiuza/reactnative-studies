import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import styles from './style'
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";


const ButtonNext = ({ page, style }) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#0077B6',
        borderRadius: 15, 
        left: 130,
        top: 50,
        ...style
    },
    txt:{
        color:'#ffffff',
        fontFamily: 'Inter-Bold',
        fontSize: 15,
        borderRadius: 15,
    }
})
  return (
    <View>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(page)}>
            <Text style={styles.txt}>Próximo</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonNext
