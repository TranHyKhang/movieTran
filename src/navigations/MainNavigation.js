import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import DrawerStack from './DrawerStack';
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