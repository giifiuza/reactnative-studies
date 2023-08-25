import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e388da',
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
        backgroundColor:'#6a3e7d',
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:50,
    },
    foto:{
        width:150,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        fontSize:20, 
        fontFamily:'Arial', 
        fontWeight:'bold', 
        borderRadius:5
    },
    imagem:{
        width:100,
        height:130,
        borderRadius:10,
    }
})

export default styles