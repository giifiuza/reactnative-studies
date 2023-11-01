import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'



export default function Topo({nome}) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Ionicons name="arrow-back-outline" size={30} color="white" marginTop={60} marginLeft={20} />
                <Text style={styles.texto}>{nome}</Text>
            </View>
        </TouchableOpacity>

    )
};

