import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/App/Home/Home";
import Settings from '../Screens/App/Settings/Settings';

const AppStack = createNativeStackNavigator()

const AppNavigation = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Settings" component={Settings} />
    </AppStack.Navigator>
)

export default AppNavigation