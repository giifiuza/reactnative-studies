import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function SectionCartao() {
    return (
    <View styles>
        <Image style={{ height: 40, width: 40 }} source={require('../../assets/cartoes.png')}/>
        <Text>Meus cartões</Text>
    </View>
)};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#292928',
        width: 120,

    }

})