import { CategoriasScreen } from '@/screens/CategoriasScreen';
import { RapidoScreen } from '@/screens/RapidoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
     <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Categorías') {
            iconName = 'grid';
          } else if (route.name === 'Rápidos') {
            iconName = 'flash';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: 'gray',
        
      })}
    >
      <Tab.Screen name="Categorías" component={CategoriasScreen} />
      <Tab.Screen name="Rápidos" component={RapidoScreen} />
    </Tab.Navigator>
  )
}
