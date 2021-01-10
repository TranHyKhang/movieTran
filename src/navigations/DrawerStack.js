import React from 'react';

import UserScreen from '../screens/UserScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export const getDrawer = () => {}



export default function DrawerStack() {
    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="User" component={UserScreen}/>
            <Drawer.Screen
            name="Home" component={HomeScreen}/>

        </Drawer.Navigator>
    )
}
