import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import Header from "./Header";
import SearchPage from "./SearchPage";
import CONFIG from "./config/config";
import { mockdata } from "./constants/products.js";

export default function HomeScreen(props){

    const USE_SERVER = CONFIG.use_server;
    const SERVER_URL = CONFIG.server_url;
    const tout = CONFIG.loading_timeout_ms;

    const[products, setProducts]= useState([]);
    const [spinner, setSpinner] = useState(true);


    const download = async () => {
        if (USE_SERVER) {
          try {
            const res = await fetch(SERVER_URL);
            const data = await res.json();
            setProducts(data.products)
          } catch (e) {
            Alert.alert("No se ha podido recuperar la información.");
          }
        }
        else {
          setProducts(mockdata.products);
        }
    
      }

      useEffect(() => {
        async function fetchData() {
          await download();
          
            setTimeout(() => {
              setSpinner(false);
            }, tout);
        }
        fetchData();
      }, []);

    return(
        <View>
            <Header />
            {spinner ? 
            <Image testID="loading" style={styles.image} source={require('./../assets/loading.gif')} />
             :
            <SearchPage theproducts={products} navigation={props.navigation} />}
        </View>
      
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      justifyContent: 'center',

    }
});
