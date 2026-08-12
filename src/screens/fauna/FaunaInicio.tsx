import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { InicioStackParamList } from '../../navigation/types';

type FaunaNavigationProp = NativeStackNavigationProp<InicioStackParamList, 'Fauna'>;

type Props = {
  navigation: FaunaNavigationProp;
};

export default function FaunaInicio({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.icon}>
        🐾
      </Text>

      <Text style={styles.title}>
        Fauna de Canarias
      </Text>

      <Text style={styles.subtitle}>
        Explora las especies animales de las islas
      </Text>


      <View style={styles.cardsContainer}>


        <Pressable
          style={[styles.card, styles.marinos]}
          onPress={() => navigation.navigate('Marinos')}
        >
          <Text style={styles.cardIcon}>
            🌊
          </Text>

          <Text style={styles.cardTitle}>
            Marinos
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.aves]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Aves',
              subgrupo: 'Aves',
              titulo: 'Aves',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐦
          </Text>

          <Text style={styles.cardTitle}>
            Aves
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.terrestres]}
          onPress={() => navigation.navigate('Terrestres')}
        >
          <Text style={styles.cardIcon}
          >
            🌍
          </Text>

          <Text style={styles.cardTitle}>
            Terrestres
          </Text>
        </Pressable>


      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },


  icon: {
    fontSize: 55,
    marginBottom: 15,
  },


  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },


  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },


  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },


  card: {
    width: 150,
    height: 150,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },


  marinos: {
    backgroundColor: '#d9edf7',
  },


  aves: {
    backgroundColor: '#f7e9c8',
  },


  terrestres: {
    backgroundColor: '#dcefd8',
  },


  cardIcon: {
    fontSize: 45,
    marginBottom: 12,
  },


  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
  },

});