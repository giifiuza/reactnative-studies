import { View, Text, Button, Image, FlatList} from "react-native";
import styles from './styles.js'
import { Shadow } from "react-native-shadow-2";
const img = require('./damon.jpg')

export default function TelaImages({navigation}){
  const lista = [
    {
      name: 'Conrad',
      year: 19,
      photo: 1
    },
    {
      name: 'Damon',
      year: 148,
      photo: 2
    },
    {
      name: 'Stefan',
      year: 146,
      photo: 3
    },
    {
      name: 'Giovanna',
      year: 18,
      photo: 4
    },
    {
      name: 'Esther',
      year: 18,
      photo: 5
    },
    {
      name: 'Jeremiah',
      year: 18,
      photo: 6
    },

  ]
  return(
    <View style={styles.container}>
      <View>
        <FlatList 
          numColumns={2}
          data={lista}
          renderItem={({item}) =>{
            return(
              <View style={[styles.foto, styles.shadowProp]}>
                <Image source={require('../../assets/image-'+item.photo+'.png')} style={styles.img}/>
                {item.name}
              </View>
           
            )
          }}
        
        
        />
      </View>
    </View>
  )
}