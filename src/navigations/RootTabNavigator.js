import React from 'react'
import { View, Text } from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import AntDesign from 'react-native-vector-icons/AntDesign'

import HomeStack from './HomeStack';
import SearchScreen from './SearchScreen';


import HomeScreen from '../screens/HomeScreen'
import DrawerStack from './DrawerStack'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function RootTabNavigator() {
    return (
        // <Tab.Navigator>
        //     <Tab.Screen
        //         name="Home"
        //         component={HomeStack}
        //         options={{
        //             tabBarIcon: (
        //                 () => <AntDesign name="home" size={30}/>
        //             ),
        //             tabBarLabel: (
        //                 () => <Text style={{display: 'none'}}></Text>
        //             )
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Search"
        //         component={SearchScreen}
        //         options={{
        //             tabBarIcon: (
        //                 () => <AntDesign name="search1" size={30}/>
        //             ),
        //             tabBarLabel: (
        //                 () => <Text style={{display: 'none'}}></Text>
        //             )
        //         }}
        //     />
        // </Tab.Navigator>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Drawer" component={DrawerStack}/>
        </Stack.Navigator>
    )
}
