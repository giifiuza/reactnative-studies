import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image: {
        flex:1,
        justifyContent:'center'
    },
    title:{
        width: '90%',
        fontSize: 48,
        color: '#ffffff',
        padding: 30,
        fontFamily: 'Inter-SemiBold',
        top: '10%'
    },
    btn:{
        width: 200,
        height: 50,
        backgroundColor: '#000000',
        top:'20%',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ffffff',
        left: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn2:{
        top:'23%',
        left: 141
    },
    txt:{
        color: '#ffffff',
        fontFamily: 'Inter-SemiBold',
        fontSize: 20
    },
    txt2:{
        fontFamily:'Inter-SemiBold',
        fontSize:13,
        color: '#ffffff'
    }
})



export default styles