import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/App/Home/Home";
import Settings from '../Screens/App/Settings/Settings';
import Themes from '../Screens/App/Settings/Screens/Themes';

const AppStack = createNativeStackNavigator()

const AppNavigation = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Settings" component={Settings} />
        <AppStack.Screen name="Themes" component={Themes} />
    </AppStack.Navigator>
)

export default AppNavigation