import React from 'react';

import UserScreen from '../screens/UserScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';

import DrawerContent from '../screens/DrawerContent';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const {width} = Dimensions.get('screen');


export default function DrawerStack() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}
            drawerType={'slide'}
            drawerStyle={{width: width * 0.8}}
        >
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="User" component={UserScreen}/>
        </Drawer.Navigator>
    )
}
