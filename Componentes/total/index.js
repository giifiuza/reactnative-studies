import { View, Text, Button } from "react-native";
import styles from './styles.js'

export default function Total({route, navigation}){
  const {total} = route.params
  return(
    <View style={styles.container}>
      <Text style={styles.txt}> O dobro é de {total} é: {total*2}</Text>
      <Button 
        title='Tela 4'
        onPress={()=>navigation.navigate('TelaImages')}
      />
    </View>
    
  )
}