import React, { useState } from 'react'; // Importa React y useState desde react
import { FlatList, Button, Text, TextInput, Image, StyleSheet, View } from 'react-native'; // Importa componentes necesarios desde react-native

// Componente funcional SearchPage
export default function SearchPage(props) {
  // Estados para los productos filtrados y el texto de búsqueda
  const [prodFiltrado, setProdFiltrado] = useState(props.theproducts); // Estado para almacenar los productos filtrados
  const [filtro, setfiltro] = useState(""); // Estado para almacenar el texto de búsqueda

  // Función para actualizar el texto de búsqueda
  const filtrar = (text) => {
    setfiltro(text); // Actualiza el estado con el texto de búsqueda
  };

  // Función para filtrar los productos según el texto de búsqueda
  const filtrado = () => {
    let filt = props.theproducts.filter((product) =>
      product.title.toLowerCase().trim().includes(filtro.toLowerCase().trim())
    ); // Filtra los productos según el título que incluya el texto de búsqueda
    setProdFiltrado(filt); // Actualiza el estado de productos filtrados
  };

  // Renderiza cada elemento de la lista de productos
  const renderItem = ({ item }) => (
    <View key={item.id} testID={'item_' + item.id} style={styles.unproducto}>
      {/* Muestra la imagen del producto */}
      <Image style={styles.imagen} source={{ uri: item.images[0] }} />
      {/* Muestra el título y descripción del producto */}
      <Text testID={'title_' + item.id}>{item.title}</Text>
      <Text>{item.description}</Text>
      {/* Botón para ver detalles del producto */}
      <Button
        testID={'button_' + item.id}
        title="VER"
        onPress={() =>
          props.navigation.navigate('Product', {
            productDesc: item.description,
            productPrice: item.price,
            productTitle: item.title,
            productIm: item.images[0],
            productId: item.id,
          })
        }
        style={styles.showButton}
      />
    </View>
  );

  return (
    <View id="searchPage" style={styles.container}>
      {/* Encabezado del catálogo */}
      <Text testID="catalogo" style={styles.boldText}>
        Catálogo
      </Text>
      {/* Input de búsqueda */}
      <TextInput
        testID="filtro"
        placeholder="Filtro de busqueda"
        value={filtro}
        onChangeText={filtrar}
        style={styles.input}
      />
      {/* Botón para realizar la búsqueda */}
      <Button testID="buscador" title="Buscar" onPress={() => filtrado()} />
      {/* Lista de productos filtrados */}
      <FlatList data={prodFiltrado} renderItem={renderItem} />
    </View>
  );
}

// Estilos para el componente SearchPage
const styles = StyleSheet.create({
  container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
    alignItems: 'center', // Alinea los elementos hijos al centro horizontalmente
    paddingTop: 20, // Espaciado superior del contenedor
    paddingHorizontal: 10, // Espaciado horizontal del contenedor
    backgroundColor: '#FFFFFF', // Color de fondo blanco
  },
  unproducto: {
    alignItems: 'center', // Alinea los elementos hijos al centro horizontalmente
    marginBottom: 10, // Margen inferior del producto
  },
  imagen: {
    width: 200, // Ancho de la imagen del producto
    height: 200, // Altura de la imagen del producto
  },
  input: {
    height: 40, // Altura del input de búsqueda
    borderColor: 'gray', // Color del borde del input
    borderWidth: 1, // Ancho del borde del input
    paddingHorizontal: 10, // Espaciado horizontal del input
    marginBottom: 10, // Margen inferior del input
    width: '100%', // Ancho del input al 100%
  },
  showButton: {
    backgroundColor: 'blue', // Color de fondo del botón
    padding: 10, // Relleno interno del botón
    borderRadius: 5, // Borde redondeado del botón
    alignSelf: 'flex-start', // Alineación del botón a la izquierda
    alignItems: 'center', // Alinea los elementos hijos al centro horizontalmente
    marginTop: 10, // Margen superior del botón
  },
  boldText: {
    fontSize: 16, // Tamaño de la fuente del texto en negrita
    fontWeight: 'bold', // Peso de la fuente en negrita
    marginBottom: 10, // Margen inferior del texto en negrita
  },
});

