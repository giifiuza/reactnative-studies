import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'



export default function SectionCartao() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image style={{ height: 40, width: 40, marginRight: 10, marginLeft: 10 }} source={require('../../assets/cartoes.png')} />
                <Text style={styles.texto}>Meus cartões</Text>
            </View>
        </TouchableOpacity>

    )
};
