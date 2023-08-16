import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container:{
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    txt:{
        fontSize: 20,

    },
    foto:{
        width: 150,
        height:200,
        alignItems: "center",
        justifyContent: "center",
        margin:10,
        fontSize: 20,
        backgroundColor: '#ffffff',
        borderRadius:10

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    img: {
        width:100,
        height:130,
        borderRadius:10
    }
})

export default styles