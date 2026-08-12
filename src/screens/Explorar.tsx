import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ExplorarNavigationProp = NativeStackNavigationProp<any>;

type Props = {
  navigation: ExplorarNavigationProp;
};

export default function Explorar({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Explorar
      </Text>

      <Text style={styles.subtitle}>
        Descubre la biodiversidad de Canarias
      </Text>


      <View style={styles.cardsContainer}>

        <Pressable
          style={[styles.card, styles.fauna]}
          onPress={() => navigation.navigate('Fauna')}
        >
          <Text style={styles.icon}>
            🐾
          </Text>

          <Text style={styles.cardTitle}>
            Fauna
          </Text>

          <Text style={styles.description}>
            Animales de Canarias
          </Text>
        </Pressable>


        <Pressable
          style={[styles.card, styles.flora]}
          onPress={() => navigation.navigate('Flora')}
        >
          <Text style={styles.icon}>
            🌿
          </Text>

          <Text style={styles.cardTitle}>
            Flora
          </Text>

          <Text style={styles.description}>
            Plantas y hongos
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
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },


  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },


  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },


  card: {
    width: 150,
    height: 160,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },


  fauna: {
    backgroundColor: '#dcefd8',
  },


  flora: {
    backgroundColor: '#d9ead3',
  },


  icon: {
    fontSize: 45,
    marginBottom: 12,
  },


  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
  },


  description: {
    marginTop: 6,
    fontSize: 12,
    textAlign: 'center',
  },

});