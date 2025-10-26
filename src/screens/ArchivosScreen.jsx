import { NavMenu } from "@/components/NavMenu"
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen"
import { useState } from "react"
import { Text, View } from "react-native"

export const ArchivosScreen = ({navigation}) => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <View>
       {(isLargeScreen) && (
        <View>
          <NavMenu navigation={navigation}/>
        </View>) }
        <Text>ArchivosScreen</Text>
    </View>
  )
}
