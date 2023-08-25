import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import app from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = getAuth(app);

    const signin = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='Password'
                    onChangeText={setPassword}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={signin}
                >
                    <Text style={{ fontSize: 25 }}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}