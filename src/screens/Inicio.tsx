import { StyleSheet, Text, View, Pressable } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { InicioStackParamList, RootTabParamList } from '../navigation/types';

type InicioNavigationProp = NativeStackNavigationProp<
  InicioStackParamList,
  'InicioPrincipal'
>;

type Props = {
  navigation: InicioNavigationProp;
};

export default function Inicio({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        BioCan
      </Text>

      <Text style={styles.subtitle}>
        Biodiversidad de Canarias
      </Text>


      <View style={styles.cardsContainer}>

        <Pressable
          style={[styles.card, styles.explorar]}
          onPress={() => navigation.navigate('Explorar')}
        >
          <Text style={styles.icon}>
            🐾
          </Text>

          <Text style={styles.cardTitle}>
            Explorar
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.dex]}
          onPress={() =>
            navigation
              .getParent<BottomTabNavigationProp<RootTabParamList>>('RootTabs' as never)
              ?.navigate('Mi DEX')
          }
        >
          <Text style={styles.icon}>
            📖
          </Text>

          <Text style={styles.cardTitle}>
            Mi DEX
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.perfil]}
        >
          <Text style={styles.icon}>
            👤
          </Text>

          <Text style={styles.cardTitle}>
            Perfil
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


  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
  },


  subtitle: {
    fontSize: 18,
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


  explorar: {
    backgroundColor: '#dcefd8',
  },


  dex: {
    backgroundColor: '#f3e4c1',
  },


  perfil: {
    backgroundColor: '#dfe7f2',
  },


  icon: {
    fontSize: 45,
    marginBottom: 12,
  },


  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
  },

});