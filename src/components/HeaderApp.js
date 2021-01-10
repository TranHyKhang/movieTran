import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HeaderApp() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        appTitle: {
            fontSize: 30,
            color: 'red'
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>MovieTran</Text>
        </View>
    )
}
