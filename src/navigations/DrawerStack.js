import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';
import { Dimensions } from 'react-native';

import FavoritesScreen from '../screens/FavoritesScreen';
import UserScreen from '../screens/UserScreen';
import HomeStack from './HomeStack';
import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

const {width} = Dimensions.get('screen');


export default function DrawerStack() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}
            drawerType={'slide'}
            drawerStyle={{width: width * 0.8}}
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={HomeStack}/>
            <Drawer.Screen name="User" component={UserScreen}/>
            {/* <Drawer.Screen name="HomeScreen" component={HomeScreen}/> */}
            <Drawer.Screen name="Favorite" component={FavoritesScreen}/>
        </Drawer.Navigator>
    )
}
