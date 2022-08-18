import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'



const Notes = ({ navigation, route }) => {
    const { message, title } = route.params;
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
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
    },
})