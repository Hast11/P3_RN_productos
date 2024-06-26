import React from 'react';
import { Button, Image, Text, View } from 'react-native';
export default function Product({props, route, navigation}) {
  const { productDesc,productPrice, productTitle, productIm, productId } = route.params;

  return (
    <View testID={productId}>
      <Image testID="imagendeproducto" source={{ uri: productIm}} style={{ width: 200, height: 200 }}/>
      <Text testID="detalle">Nombre: {productTitle}</Text>
      <View testID="caracteristicas">
        <Text>Descripción: {productDesc}</Text>
        <Text>Price: {productPrice} $</Text>
      </View>

        <Button testID="volver" title="Volver" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
}
