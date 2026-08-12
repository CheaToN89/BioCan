import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InicioStackParamList } from '../../navigation/types';

type MarinosNavigationProp = NativeStackNavigationProp<InicioStackParamList, 'Marinos'>;

type Props = {
  navigation: MarinosNavigationProp;
};

export default function Marinos({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.icon}>
        🌊
      </Text>

      <Text style={styles.title}>
        Marinos
      </Text>

      <Text style={styles.subtitle}>
        Fauna marina de Canarias
      </Text>


      <View style={styles.cardsContainer}>


        <Pressable
          style={[styles.card, styles.peces]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Marinos',
              subgrupo: 'Peces',
              titulo: 'Peces',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐠
          </Text>

          <Text style={styles.cardTitle}>
            Peces
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.tiburones]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Marinos',
              subgrupo: 'Tiburones',
              titulo: 'Tiburones y rayas',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🦈
          </Text>

          <Text style={styles.cardTitle}>
            Tiburones y rayas
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.cetaceos]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Marinos',
              subgrupo: 'Cetáceos',
              titulo: 'Cetáceos',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐋
          </Text>

          <Text style={styles.cardTitle}>
            Cetáceos
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.tortugas]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Marinos',
              subgrupo: 'Tortugas',
              titulo: 'Tortugas',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐢
          </Text>

          <Text style={styles.cardTitle}>
            Tortugas
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.cefalopodos]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Marinos',
              subgrupo: 'Cefalópodos',
              titulo: 'Cefalópodos',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🐙
          </Text>

          <Text style={styles.cardTitle}>
            Cefalópodos
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.invertebrados]}
          onPress={() =>
            navigation.navigate('EspeciesLista', {
              categoria: 'Fauna',
              grupo: 'Marinos',
              subgrupo: 'Invertebrados',
              titulo: 'Invertebrados',
            })
          }
        >
          <Text style={styles.cardIcon}>
            🦀
          </Text>

          <Text style={styles.cardTitle}>
            Invertebrados
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


  peces: {
    backgroundColor: '#d9edf7',
  },


  tiburones: {
    backgroundColor: '#e5e5e5',
  },


  cetaceos: {
    backgroundColor: '#dcefd8',
  },


  tortugas: {
    backgroundColor: '#d8f3dc',
  },


  cefalopodos: {
    backgroundColor: '#f3e4c1',
  },


  invertebrados: {
    backgroundColor: '#f7d6e0',
  },

});