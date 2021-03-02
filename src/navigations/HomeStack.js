import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode='none'>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
            />
            <Stack.Screen
                name="DetailMovie"
                component={MovieDetailScreen}
            />
        </Stack.Navigator>
    )
}
