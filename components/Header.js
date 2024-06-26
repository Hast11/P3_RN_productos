import { Image, StyleSheet, Text, View } from "react-native";
export default function Header(props) {
  return (
    <View testID="cabecera">
      <Image
        testID="logo"
        style={styles.image}
        source={require("./../assets/favicon.png")}
      />
      <Text testID="mensaje">
        Página de Andrés Gil
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
  },
});
