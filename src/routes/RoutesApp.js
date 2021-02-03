import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../pages/Home/main';

const { Navigator, Screen } = createStackNavigator();

function RoutesApp() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Home" component={Home} />
                
            </Navigator>
        </NavigationContainer>
    );
}

export default RoutesApp;