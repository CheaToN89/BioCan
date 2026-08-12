import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InicioStackParamList } from '../../navigation/types';

type TerrestresNavigationProp = NativeStackNavigationProp<
  InicioStackParamList,
  'Terrestres'
>;

type Props = {
  navigation: TerrestresNavigationProp;
};

export default function Terrestres({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.icon}>
        🌍
      </Text>

      <Text style={styles.title}>
        Terrestres
      </Text>

      <Text style={styles.subtitle}>
        Fauna terrestre de Canarias
      </Text>


      <View style={styles.cardsContainer}>


        <Pressable
          style={[styles.card, styles.mamiferos]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Terrestres',
              subgrupo: 'Mamíferos',
              titulo: 'Mamíferos',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐾
          </Text>

          <Text style={styles.cardTitle}>
            Mamíferos
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.reptiles]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Terrestres',
              subgrupo: 'Reptiles',
              titulo: 'Reptiles',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🦎
          </Text>

          <Text style={styles.cardTitle}>
            Reptiles
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.anfibios]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Terrestres',
              subgrupo: 'Anfibios',
              titulo: 'Anfibios',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐸
          </Text>

          <Text style={styles.cardTitle}>
            Anfibios
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.insectos]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Terrestres',
              subgrupo: 'Insectos',
              titulo: 'Insectos',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐜
          </Text>

          <Text style={styles.cardTitle}>
            Insectos
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
    marginBottom: 35,
  },


  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },


  card: {
    width: 110,
    height: 110,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },


  cardIcon: {
    fontSize: 35,
    marginBottom: 8,
  },


  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },


  mamiferos: {
    backgroundColor: '#e8dcc8',
  },


  reptiles: {
    backgroundColor: '#dcefd8',
  },


  anfibios: {
    backgroundColor: '#d9edf7',
  },


  insectos: {
    backgroundColor: '#f3e4c1',
  },

});
