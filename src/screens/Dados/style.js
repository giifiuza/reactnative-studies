import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body:{
        backgroundColor:'#0E0E0C',
        flex: 1
    },
    input:{
        borderWidth: 1,
        borderColor: '#0077B6',
        height: 50,
        marginBottom: 12,
        fontSize: 16,
        color: '#ffffff',
        borderRadius: 15,
        padding: 10,
        margin: 20

    },
    txt:{
        color:'#ffffff',
        fontFamily: 'Inter-SemiBold',
        fontSize: 30,
        padding: 10,
        marginTop: 30,
        marginLeft:20
    },
    subTxt:{
        color:'#868686',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        marginLeft: 30,
        top: 8 
    },
    subTxt2:{
        color:'#9A9999',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        marginLeft: 30,
        top: 40
    },

})

export default styles
