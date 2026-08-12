import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import { Especie } from '../data/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type Props = {
  especie: Especie;
  avistada?: boolean;
  navigation: NativeStackNavigationProp<any>;
};


export default function SpeciesCard({
  especie,
  avistada = false,
  navigation,
}: Props) {

  return (

    <Pressable
      onPress={() =>
        navigation.navigate('FichaEspecie', {
          especie,
        })
      }
    >

      <View style={styles.card}>


        <View style={styles.imageContainer}>

          {especie.imagen ? (

            <Image
              source={{ uri: especie.imagen }}
              style={styles.image}
            />

          ) : (

            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>
                🐟
              </Text>
            </View>

          )}



          {avistada && (

            <View style={styles.sello}>

              <Text style={styles.selloTexto}>
                ✓
              </Text>

            </View>

          )}


        </View>



        <Text style={styles.nombre}>
          {especie.nombreComun}
        </Text>


        <Text style={styles.cientifico}>
          {especie.nombreCientifico}
        </Text>


      </View>


    </Pressable>

  );
}



const styles = StyleSheet.create({

  card: {
    width: 160,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    margin: 8,
  },


  imageContainer: {
    position: 'relative',
  },


  image: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },


  placeholder: {
    width: '100%',
    height: 130,
    borderRadius: 15,
    backgroundColor: '#d9edf7',
    alignItems: 'center',
    justifyContent: 'center',
  },


  placeholderText: {
    fontSize: 55,
  },


  sello: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#dcefd8',
    alignItems: 'center',
    justifyContent: 'center',
  },


  selloTexto: {
    fontWeight: 'bold',
  },


  nombre: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  cientifico: {
    marginTop: 4,
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },

});