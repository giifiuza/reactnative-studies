import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#90b05a',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    caixa:{
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
    },
    title:{
        fontSize: 40,
        fontWeight:'bold'
    },
    btnOk:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        height:50,
        backgroundColor:'#5b6943',
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:50,
    }
})

export default styles