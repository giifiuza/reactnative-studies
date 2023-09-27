import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import styles from './style'
import { useNavigation } from "@react-navigation/native";

const ButtonNext = ({ page }) => {
  const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(page)}>
            <Text style={styles.txt}>Próximo</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonNext
