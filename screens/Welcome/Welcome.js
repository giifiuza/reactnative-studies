import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './style'
import Font, { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { useNavigation } from "@react-navigation/native";

// SplashScreen.preventAutoHideAsync();

export default function Welcome() {

    const [fontsLoaded, fontError] = useFonts({
        'Inter-Black': require('../../fonts/Inter-Black.ttf'),
        'Inter-Bold': require('../../fonts/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('../../fonts/Inter-ExtraBold.ttf'),
        'Inter-ExtraLight': require('../../fonts/Inter-ExtraLight.ttf'),
        'Inter-Light': require('../../fonts/Inter-Light.ttf'),
        'Inter-Medium': require('../../fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('../../fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('../../fonts/Inter-SemiBold.ttf'),
        'Inter-Thin': require('../../fonts/Inter-Thin.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/welcome.png')} resizeMode='cover' style={styles.image}>
                    <Text style={styles.title}>Controle seu {'\n'}futuro financeiro facilmente</Text>
                    <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.txt}>Começar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn2}
                    >
                        <Text style={styles.txt2}>Entrar na minha conta</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    );
}
