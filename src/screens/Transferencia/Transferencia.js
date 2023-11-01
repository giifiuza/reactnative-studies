import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import Topo from "../../components/Topo";


export default function Transferencia() {
    return (
        <View style={styles.container}>
            <Topo nome="Transferência" />
    
            <View style={styles.middle}>
                <Text>Qual valor do pix?</Text>

            </View>
        </View>
    )
};

