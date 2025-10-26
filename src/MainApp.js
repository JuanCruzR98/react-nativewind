import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { RootNavigation } from './navigation/RootNavigation'

export const MainApp = () => {
  return (
    <NavigationContainer>
        <RootNavigation/>
    </NavigationContainer>
  )
}
