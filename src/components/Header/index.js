import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={{height:40, width:40, marginRight: 10}} source={require('../../assets/logo.png')} />
                <View style={styles.logo}>
                    <Text style={styles.username}>Olá Giovanna</Text>
                    <TouchableOpacity>
                        <Text style={styles.subtitle}>Acessar minha conta {'>'}</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Ionicons name="eye-off-outline" size={27} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#264C60',
        paddingTop: StatusBarHeight,
        display: 'flex',
        // flexDirection: 'row',
        paddingEnd: 16,
        paddingStart: 16,
        paddingBottom: 100
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    logo:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    username:{
        fontSize:18,
        color: '#fff',
        fontFamily: 'Inter-Bold'
    },
    subtitle:{
        fontSize:18,
        color: '#fff',
        fontFamily: 'Inter-Light'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44 / 2,
    }
})