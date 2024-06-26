import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Product from './components/Product';

// Crea un stack navigator y lo asigna a Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer envuelve el stack navigator para gestionar el estado de navegación
    <NavigationContainer>
      {/* Define el stack navigator con la ruta inicial "Home" */}
      <Stack.Navigator initialRouteName="Home">
        {/* Define una pantalla en el stack navigator llamada "Home" que renderiza el componente HomeScreen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define una pantalla en el stack navigator llamada "Details" que renderiza el componente Product */}
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Define los estilos para la aplicación
const styles = StyleSheet.create({
  Container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
    backgroundColor: '#fff', // Color de fondo del contenedor
    alignItems: 'center', // Alinea los elementos hijos al centro horizontalmente
    justifyContent: 'center', // Alinea los elementos hijos al centro verticalmente
  },
});
