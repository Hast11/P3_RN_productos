import { Image, View, StyleSheet, Text } from 'react-native';

// Componente funcional Header
export default function Header(props) {
  return (
    // Contenedor principal de la cabecera
    <View testID="cabecera" style={styles.header}>
      {/* Imagen del logo */}
      <Image
        testID="logo"
        style={styles.logo}
        source={require('./../assets/favicon.png')}
      />
      {/* Texto de la cabecera */}
      <Text testID="mensaje" style={styles.headerText}>
        Página de Andrés Gil
      </Text>
    </View>
  );
}

// Definición de estilos para el componente Header
const styles = StyleSheet.create({
  // Estilo para el contenedor principal de la cabecera
  header: {
    flexDirection: 'row', // Alinea los hijos en una fila
    alignItems: 'center', // Alinea los elementos hijos al centro verticalmente
    backgroundColor: '#f8f8f8', // Color de fondo de la cabecera
    padding: 10, // Espaciado interno del contenedor
  },
  // Estilo para la imagen del logo
  logo: {
    width: 50, // Ancho de la imagen
    height: 50, // Altura de la imagen
    marginRight: 10, // Margen derecho de la imagen
  },
  // Estilo para el texto de la cabecera
  headerText: {
    fontSize: 18, // Tamaño de la fuente
    color: '#333', // Color del texto
    fontWeight: 'bold', // Peso de la fuente
  },
});
