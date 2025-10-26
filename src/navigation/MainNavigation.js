import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { DrawerNavigation } from './DrawerNavigation';
import { MainScreen } from '@/screens/MainScreen';
import { VentasScreen } from '@/screens/VentasScreen';
import { ArchivosScreen } from '@/screens/ArchivosScreen';
import { StockScreen } from '@/screens/StockScreen';
import { GestionScreen } from '@/screens/GestionScreen';
import { RegistroScreen } from '@/screens/RegistroScreen';
import { HerramientasScreen } from '@/screens/HerramientasScreen';
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';


const Stack = createNativeStackNavigator();  

export const MainNavigation = () => {
    const isLargeScreen = useIsLargeScreen();

    if (!isLargeScreen) return <DrawerNavigation/>;
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Inicio" component={MainScreen} />
                <Stack.Screen name="Ventas" component={VentasScreen} />
                <Stack.Screen name="Archivos" component={ArchivosScreen}/>
                <Stack.Screen name="Stock" component={StockScreen}/>
                <Stack.Screen name="Gestion" component={GestionScreen} />
                <Stack.Screen name="Registro" component={RegistroScreen}/>
                <Stack.Screen name="Herramientas" component={HerramientasScreen}/>
            </Stack.Navigator>
    )
}
