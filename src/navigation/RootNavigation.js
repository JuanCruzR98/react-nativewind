import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { AuthNavigation } from './AuthNavigation';
import { MainNavigation } from './MainNavigation';
const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {isLoggedIn ? (
                <Stack.Screen name = "MainNavigator" component={MainNavigation}/>
            ):(
                <Stack.Screen name = "AuthNavigation" component={AuthNavigation}/>
            )}
        </Stack.Navigator>
    )
}
