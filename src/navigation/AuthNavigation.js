import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
export const AuthNavigation = () => {
  return (
   <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
   </Stack.Navigator> 
  )
}
