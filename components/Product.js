import React from 'react'; // Importa React
import { Button, Image, Text, View } from 'react-native'; // Importa componentes necesarios desde react-native

// Componente funcional Product
export default function Product({ route, navigation }) {
  // Desestructura las propiedades del producto desde route.params
  const { productDesc, productPrice, productTitle, productIm, productId } = route.params;

  return (
    // Contenedor principal para la vista del producto
    <View testID={productId} style={styles.container}>
      {/* Muestra la imagen del producto */}
      <Image 
        testID="imagendeproducto" 
        source={{ uri: productIm }} 
        style={styles.productImage} 
      />
      {/* Muestra el nombre del producto */}
      <Text testID="detalle" style={styles.productTitle}>
        Nombre: {productTitle}
      </Text>
      {/* Contenedor para las características del producto */}
      <View testID="caracteristicas" style={styles.productDetails}>
        {/* Muestra la descripción del producto */}
        <Text style={styles.productDesc}>Descripción: {productDesc}</Text>
        {/* Muestra el precio del producto */}
        <Text style={styles.productPrice}>Precio: {productPrice} $</Text>
      </View>
      {/* Botón para volver a la pantalla de inicio */}
      <Button 
        testID="volver" 
        title="Volver" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

// Estilos para el componente Product
const styles = {
  container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
    alignItems: 'center', // Alinea los elementos hijos al centro horizontalmente
    justifyContent: 'center', // Alinea los elementos hijos al centro verticalmente
    padding: 20, // Espaciado interno del contenedor
  },
  productImage: {
    width: 200, // Ancho de la imagen del producto
    height: 200, // Altura de la imagen del producto
    marginBottom: 20, // Margen inferior de la imagen
  },
  productTitle: {
    fontSize: 20, // Tamaño de la fuente del título del producto
    fontWeight: 'bold', // Peso de la fuente del título del producto
    marginBottom: 10, // Margen inferior del título
  },
  productDetails: {
    alignItems: 'center', // Alinea los elementos hijos al centro horizontalmente
    marginBottom: 20, // Margen inferior del contenedor de detalles
  },
  productDesc: {
    fontSize: 16, // Tamaño de la fuente de la descripción del producto
    marginBottom: 10, // Margen inferior de la descripción
  },
  productPrice: {
    fontSize: 18, // Tamaño de la fuente del precio del producto
    fontWeight: 'bold', // Peso de la fuente del precio
    color: '#00C853', // Color del precio
  },
};
