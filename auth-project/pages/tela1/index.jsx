import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Tela1({navigation, route}) {

    const {total} = route.params
    var db = total * 2

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Tela 1</Text>
            </View>
            <View>
                <Text>
                    {total}
                </Text>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={() => navigation.navigate('Tela2', {dobro:db})}
                >
                    <Text style={{ fontSize: 25 }}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
