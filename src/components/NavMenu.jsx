import { View,Text,TouchableOpacity } from "react-native"
export const NavMenu = ({navigation}) => {
  return (
    <View className="bg-white px-4 py-3 shadow-md flex-row justify-between items-center">
            {['Inicio','Archivos', 'Gestion','Ventas','Stock', 'Registro', 'Herramientas'].map((seccion) => (
                <TouchableOpacity key={seccion} onPress={() => navigation.navigate(seccion)}>
                    <Text className="text-black-400 font-bold">{seccion}</Text>
                </TouchableOpacity>
            ))}
    </View>
  )
}
