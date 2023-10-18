import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './style'


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Slider() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <Image style={{ height: 40, width: 40 }} source={require('../../assets/pix.png')}/>
                </View>
                <Text style={styles.labelButton}>Pix</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <FontAwesome5 name="money-bill-alt" size={24} color="white" />                
                </View>
                <Text style={styles.labelButton}>Transferir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={24} color="white" />
                </View>
                <Text style={styles.labelButton}>Pagar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <FontAwesome5 name="hand-holding-usd" size={24} color="white" />    
                </View>
                <Text style={styles.labelButton}>Empréstimo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Image style={{ height: 40, width: 40 }} source={require('../../assets/caixinha.png')}/>
                </View>
                <Text style={styles.labelButton}>Caixinha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Image style={{ height: 40, width: 40 }} source={require('../../assets/depositar.png')}/>                
                </View>
                <Text style={styles.labelButton}>Depositar</Text>
            </TouchableOpacity>

        </ScrollView>


    )
}

