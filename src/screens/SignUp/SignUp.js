import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
import * as Animatable from 'react-native-animatable'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import Input from '../../components/Input/Input';
import ButtonNext from '../../components/ButtonNext/ButtonNext';


export default function SignUp() {
    const navigation = useNavigation();

    return(
        <Animatable.View animation="fadeInUp" style={styles.body}>
        <TouchableOpacity
         onPress={() => navigation.navigate('Welcome')}
         >
          <AntDesign name="close" size={26} color="white" marginTop={70} marginLeft={20}/>
        </TouchableOpacity>
        
        <View>
            <Text style={styles.txt}>Boas-vindas à Alpha Bank! Para começar, qual o seu CPF?</Text>
            <Text style={styles.subTxt}> É necessário para dar início ao cadastro </Text>
        </View>
        <Input 
        placeh={"123.456.789-31"}
        style={{marginTop: 50}}/>
        <ButtonNext
        page="Dados"
        />
      </Animatable.View>
    )
}