import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function MyButton({title, _handleOnPress, styleButton}) {
    return (
        <TouchableOpacity onPress={_handleOnPress}>
            <View style={styleButton}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
