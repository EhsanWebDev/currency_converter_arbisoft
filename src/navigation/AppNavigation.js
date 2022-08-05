import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/App/Home/Home";
import Settings from '../Screens/App/Settings/Settings';
import Themes from '../Screens/App/Settings/Screens/Themes';
import { APP_ROUTES } from './AppRoutes';

const AppStack = createNativeStackNavigator()

const AppNavigation = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name={APP_ROUTES.APP_DASHBOARD} component={Home} />
        <AppStack.Screen name={APP_ROUTES.APP_SETTINGS_SCREEN} component={Settings} />
        <AppStack.Screen name={APP_ROUTES.APP_THEMES_SCREEN} component={Themes} />
    </AppStack.Navigator>
)

export default AppNavigation