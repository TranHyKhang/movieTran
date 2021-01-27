import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function RenderDrawerItem({title, icon}) {
    return (
        <View style={styles.container}>
            <View>
                {title}
            </View>
            <View style={styles.icon}>
                {icon}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue',
        width: 275

    },
    icon: {
        marginLeft: 40,
    }
})
