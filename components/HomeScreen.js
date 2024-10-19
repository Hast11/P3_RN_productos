import React, { useEffect, useState } from 'react'; // Importa React y los hooks useEffect y useState
import { Alert, Image, StyleSheet, View } from 'react-native'; // Importa componentes necesarios desde react-native
import Header from './Header'; // Importa el componente Header
import SearchPage from './SearchPage'; // Importa el componente SearchPage
import { mockdata } from './constants/products.js'; // Importa datos simulados desde el archivo products.js
import CONFIG from './config/config'; // Importa la configuración desde el archivo config
import { Button } from 'react-native-web';

// Componente funcional HomeScreen
export default function HomeScreen(props) {
  // Configuración del servidor y tiempo de espera para la carga
  const USE_SERVER = CONFIG.use_server; // Variable para determinar si se usa el servidor
  const SERVER_URL = CONFIG.server_url; // URL del servidor
  const LOADING_TIMEOUT = CONFIG.loading_timeout_ms; // Tiempo de espera para la carga

  // Estado para los productos y el indicador de carga (spinner)
  const [products, setproducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  const [verImagen, setVerImagen] = useState(false);

  // Función para descargar los datos de productos
  const fetchProducts = async () => {
    if (USE_SERVER) {
      // Si se usa el servidor, intenta obtener los datos del servidor
      try {
        const response = await fetch(SERVER_URL); // Realiza la petición al servidor
        const data = await response.json(); // Convierte la respuesta a JSON
        setproducts(data.products); // Almacena los productos en el estado
      } catch (error) {
        Alert.alert('No se ha obtenido información.'); // Muestra una alerta en caso de error
      }
    } else {
      // Si no se usa el servidor, utiliza los datos simulados
      setproducts(mockdata.products); // Almacena los productos simulados en el estado
    }
  };

  // Efecto para descargar los datos al montar el componente
  useEffect(() => {
    async function fetchData() {
      await fetchProducts(); // Llama a la función para obtener los productos
      setTimeout(() => {
        setLoading(false); // Desactiva el indicador de carga después del tiempo de espera
      }, LOADING_TIMEOUT);
    }
    fetchData(); // Llama a la función fetchData al montar el componente
  }, []);

  return (
    <View style={styles.screen}>
      <Header /> {/* Renderiza el componente Header */}
      
      {loading ? (
        <Image
          testID="loading"
          style={styles.loadingImage}
          source={require('./../assets/loading.gif')}
        /> // Muestra una imagen de carga si el estado loading es true
      ) : (
        <SearchPage theproducts={products} navigation={props.navigation} />
        // Renderiza el componente SearchPage con los productos y la navegación si el estado loading es false
      )}
    </View>
  );
}

// Estilos para el componente HomeScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
    backgroundColor: '#ffffff', // Color de fondo blanco
    alignproducts: 'center', // Alinea los elementos hijos al centro horizontalmente
    justifyContent: 'center', // Alinea los elementos hijos al centro verticalmente
  },
  loadingImage: {
    width: 100, // Ancho de la imagen de carga
    height: 100, // Altura de la imagen de carga
  },
});
