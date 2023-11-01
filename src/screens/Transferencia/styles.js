import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#254A5A',
    },
    texto: {
        color: '#fff',
        fontWeight: "bold",
        paddingBottom: 10,
        fontSize: 16
    },
    middle:{
        backgroundColor: '#0E0E0C', 
        flex:2, 
        top: 50, 
        borderTopRightRadius: 50, 
        borderTopLeftRadius: 50, 
        borderWidth: 3,
        borderColor:'#A3A1A1'
    }

})

export default styles;