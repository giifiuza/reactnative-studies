import { View, Text, Button } from "react-native";
import styles from './styles.js'

export default function Home({route, navigation}){
  const {total} = route.params
  return(
    <View style={styles.container}>
      <Text style={styles.txt}>{total}</Text>
      <Button 
        title='Login'
        onPress={()=>navigation.navigate('Total', {total: total})}
      />
    </View>
  )
}