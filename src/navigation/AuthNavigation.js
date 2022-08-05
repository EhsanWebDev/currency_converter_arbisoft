import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Auth/Login/Login";
import { APP_ROUTES } from './AppRoutes';

const AuthStack = createNativeStackNavigator()

const AuthNavigation = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={APP_ROUTES.LOGIN_SCREEN} component={Login} />
    </AuthStack.Navigator>
)

export default AuthNavigation