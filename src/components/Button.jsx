import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({ buttonText }) {
  return (
    <TouchableHighlight style={styles.buttonContainer}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '80%'
    },
    button: {
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        padding: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#fff'
    }
});