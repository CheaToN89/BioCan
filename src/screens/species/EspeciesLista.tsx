import { View, StyleSheet, FlatList } from 'react-native';

import { especies } from "../../data";

import SpeciesCard from "../../components/SpeciesCard";


export default function EspeciesLista({ navigation }: any) {


  return (

    <View style={styles.container}>


      <FlatList

        data={especies}

        keyExtractor={(item) => item.id}


        numColumns={2}


        renderItem={({ item }) => (

          <SpeciesCard

            especie={item}

            navigation={navigation}

          />

        )}

      />


    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

    padding: 10,

  },

});