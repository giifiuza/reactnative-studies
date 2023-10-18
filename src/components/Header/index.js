import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header() {
    return (
        <View style={styles.all}>
            <View style={styles.container}>
                <View style={styles.middle}>
                    <View style={styles.content}>
                        <Image style={{ height: 40, width: 40, marginRight: 10 }} source={require('../../assets/logo.png')} />
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.username}>Olá Giovanna</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.subtitle}>Acessar minha conta {'>'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity>
                    <Ionicons name="eye-off-outline" size={24} color="white" marginLeft={100} />
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="bells" size={24} color="white" />
                </TouchableOpacity>
                


            </View>
            <TouchableOpacity>
                <View style={styles.all_saldo}>
                    <View>
                        <Text style={styles.saldo_text}>Saldo disponível</Text>
                        <Text style={styles.saldo_sub}>R$100,00</Text>
                    </View>
                    <View>
                        <Text style={styles.verSaldo}>{'>'}</Text>
                    </View>
                </View>
            </TouchableOpacity>


        </View>


    )
}

