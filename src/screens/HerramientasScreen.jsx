import { NavMenu } from '@/components/NavMenu'
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';
import React from 'react'
import { Text, View } from 'react-native'

export const HerramientasScreen = ({navigation}) => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <View>
             {(isLargeScreen) && (
        <View>
          <NavMenu navigation={navigation}/>
        </View>) }
        <Text>HerramientasScreen</Text>
    </View>
  )
}
