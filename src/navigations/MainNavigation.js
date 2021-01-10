import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import RootTabNavigator from './RootTabNavigator'
import DrawerStack from './DrawerStack';
import HomeStack from './HomeStack';
import {createStackNavigator} from '@react-navigation/stack'


const RootStack = createStackNavigator();


const MainNavigation = () => {  
    return (
        <NavigationContainer>
          <DrawerStack/>
        </NavigationContainer>
    )
}

export default MainNavigation;