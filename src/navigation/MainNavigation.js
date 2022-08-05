import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import Splash from '../Screens/Splash/Splash';
import { APP_ROUTES } from './AppRoutes';

const Stack = createNativeStackNavigator()

const MainNavigation = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name={APP_ROUTES.SPLASH_SCREEN} component={Splash} />
        <Stack.Screen name={APP_ROUTES.AUTH_STACK} component={AuthNavigation} />
        <Stack.Screen name={APP_ROUTES.APP_MAIN_STACK} component={AppNavigation} />
    </Stack.Navigator>
)

export default MainNavigation