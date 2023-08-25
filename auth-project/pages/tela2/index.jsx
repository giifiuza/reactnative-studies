import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './styles'

export default function Tela2({navigation, route}){

    const {foto, nome, usuario} = route.params
    console.log("foto: ", foto)
    console.log("nome: ", nome)
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Tela 2</Text>
            </View>
            
                <Text>
                    {nome}
                </Text>
                <Image source={require('../../assets/image-'+ foto +'.png')} style={styles.imagem}/>
       
           <View style={styles.btn}>
                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={() => navigation.navigate('Tela3', {usuario:usuario})}
                >
                    <Text style={{ fontSize: 25 }}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
