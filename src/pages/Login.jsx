import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import Button from '../components/Button'

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                style={styles.iconImage}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
            />
            <Text style={styles.title}>Login</Text>
            <Button
                buttonText={'Entrar'}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconImage: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 48,
        fontWeight: '800'
    }
})