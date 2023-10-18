import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        maxHeight: 110,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },
    actionButton: {
        display:'flex',
        flexDirection: 'column',
        width: 80,
        alignItems: 'center',
        marginRight: 10
    },
    areaButton:{
        backgroundColor: '#292928',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center'
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight:'bold',
        color: '#fff',
    }
})

export default styles