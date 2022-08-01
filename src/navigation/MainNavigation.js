import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

const Stack = createNativeStackNavigator()

const MainNavigation = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="App">
        <Stack.Screen name="Auth" component={AuthNavigation} />
        <Stack.Screen name="App" component={AppNavigation} />
    </Stack.Navigator>
)

export default MainNavigation