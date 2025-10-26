import { NavMenu } from '@/components/NavMenu'
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen'
import { TabNavigator } from '@/navigation/TabNavigator'
import React from 'react'
import { View,TouchableOpacity,Text } from 'react-native'

export const MainScreen = ({navigation}) => {
    const isLargeScreen = useIsLargeScreen();
    return (
    <View className="flex-1 bg-white p-0 m-0">
       {(isLargeScreen) && (
        <View>
          <NavMenu navigation={navigation}/>
        </View>) }
        <View className="flex-1 flex-row">
            <TabNavigator/>
        </View>
    </View>
  )
}
