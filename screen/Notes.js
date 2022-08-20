import React from 'react'

import { View, Text, StyleSheet } from 'react-native'



const Notes = ({ route }) => {
    const { message, title } = route.params.note;
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>{message}</Text>
        </View>
    )
}

export default Notes

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
    },
})