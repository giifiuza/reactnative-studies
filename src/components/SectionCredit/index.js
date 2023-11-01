import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'



export default function SectionCredit() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.texto}>Cartão de crédito</Text>
                <View>
                    <Text style={{ color: '#fff', fontFamily: 'Inter-Medium' }}>Fatura atual</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Inter-Bold', fontSize: 16 }}>R$100,00</Text>
                </View>
                <View style={{bottom: 10}}>
                    <Text style={{ color: '#fff', top: 20, fontSize: 12 }}> Limite disponível de <Text style={{ color: '#0077B6' }}> R$1000,00</Text></Text>
                    <Text style={{ color: '#fff', top: 20, fontSize: 12 }}> Limite adicional para pix e boletos: <Text style={{ color: '#0077B6' }}> R$100,00</Text></Text>
                </View>

            </View>
        </TouchableOpacity>

    )
};

