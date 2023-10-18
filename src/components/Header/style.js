
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#264C60',
        paddingTop: 50,
        paddingEnd: 16,
        paddingStart: 16,
        paddingBottom: 100,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    middle: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    info: {
        display: 'flex',
        marginLeft: 60,
    },
    username: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Inter-Bold'
    },
    subtitle: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Inter-Light'
    },
    all_saldo: {
        display: 'flex',
        top: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    saldo_text: {
        color: '#fff',
        fontFamily: 'Inter-Bold',
        fontSize: 14
    },
    saldo_sub: {
        color: '#fff',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
    },
    verSaldo: {
        color: '#fff',
        fontSize: 14
    },
})

export default styles;