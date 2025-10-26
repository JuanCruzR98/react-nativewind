import { ArchivosScreen } from '@/screens/ArchivosScreen'
import { GestionScreen } from '@/screens/GestionScreen'
import { HerramientasScreen } from '@/screens/HerramientasScreen'
import { MainScreen } from '@/screens/MainScreen'
import { RegistroScreen } from '@/screens/RegistroScreen'
import { StockScreen } from '@/screens/StockScreen'
import { VentasScreen } from '@/screens/VentasScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: true
        }}
    >
        <Drawer.Screen name="Inicio" component={MainScreen} />
        <Drawer.Screen name="Ventas" component={VentasScreen} />
        <Drawer.Screen name="Archivos" component={ArchivosScreen}/>
        <Drawer.Screen name="Stock" component={StockScreen}/>
        <Drawer.Screen name="Gestion" component={GestionScreen} />
        <Drawer.Screen name="Registro" component={RegistroScreen}/>
        <Drawer.Screen name="Herramientas" component={HerramientasScreen}/>
    </Drawer.Navigator>
  )
}
