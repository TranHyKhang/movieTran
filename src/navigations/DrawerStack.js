import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';
import { Dimensions } from 'react-native';

import FavoritesScreen from '../screens/FavoritesScreen';
import UserScreen from '../screens/UserScreen';
import HomeStack from './HomeStack';


const Drawer = createDrawerNavigator();

const {width} = Dimensions.get('screen');


export default function DrawerStack() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}
            drawerType={'slide'}
            drawerStyle={{width: width * 0.8}}
        >
            <Drawer.Screen name="Home" component={HomeStack}/>
            <Drawer.Screen name="User" component={UserScreen}/>
            <Drawer.Screen name="Favorite" component={FavoritesScreen}/>
        </Drawer.Navigator>
    )
}
