import React, { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';


export default function SearchPage(props){
    
    const [prodFiltrado, setProdFiltrado]=useState(props.theproducts);
    const [textoBuscado, setTextoBuscado]=useState("");

    const cambiaTexto = (text) =>{ setTextoBuscado(text)}

    const filtrado = () => {
        let filt = props.theproducts.filter(product =>
            product.title.toLowerCase().trim().includes(textoBuscado.toLowerCase().trim()));
            setProdFiltrado(filt);
    }

    const renderItem = ({ item }) => (
      <View key={item.id} testID={'item_' + item.id} style={styles.unproducto}>
          <Image style={styles.imagen} source={{ uri: item.images[0] }} />
              <Text testID={'title_' + item.id}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Button testID={'button_' + item.id} title="VER" onPress={() => props.navigation.navigate('Product', {
                productDesc: item.description,
                productPrice: item.price,
                productTitle: item.title,
                productIm: item.images[0],
                productId: item.id
              })} style={styles.showButton} />
      </View>
      )



    return(
        <View id="searchPage">
            <Text testID="catalogo" style={styles.boldText}>Catálogo</Text>
            <TextInput testID="filtro" placeholder="Escriba lo que quiera buscar" value={textoBuscado} onChangeText={cambiaTexto} />
            <Button testID="buscador" title="Buscar" onPress={()=>filtrado()}/>
            <FlatList data={prodFiltrado} renderItem={renderItem} />
        </View>
  )
};

const styles = StyleSheet.create({
  unproducto: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imagen: {
    width: 200,
    height: 200,
  },
  descripcion: {
    marginLeft: 10,
    flex: 1,
  },
  showButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  showButtonText: {
    color: 'white',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

        
