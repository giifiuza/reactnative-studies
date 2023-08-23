import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import React, {useState} from 'react';

export default function SignIn(){
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("")

    const confirmarLogin = () => {
        if(user === 'Senai' && password ==='senai123'){
            alert ('Login Realizado!')
        } else {
            alert('Informações inválidas. Tente novamente')
        }
    };
    return(
        <View style={styles.container}>
            <Animatable.View 
            animation="fadeInLeft" 
            delay={500} 
            style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput
            placeholder="fulano@mail.com"
            style={styles.input}
            onChangeText = {(text) => setUser(text)}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
            placeholder="Sua senha"
            secureTextEntry={true}
            style={styles.input}
            onChangeText = {(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button}  onPress={confirmarLogin}> 
            <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}> 
            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#0077B6',
        fontFamily: 'arial'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
        fontWeight: 'bold'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: '#0077B6',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf:'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
})