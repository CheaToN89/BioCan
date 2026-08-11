import { StyleSheet, Text, View, Pressable } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type InicioNavigationProp = BottomTabNavigationProp<{
  Inicio: undefined;
  'Mi DEX': undefined;
  Más: undefined;
}>;

type Props = {
  navigation: InicioNavigationProp;
};

export default function Inicio({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BioCan</Text>

      <Text style={styles.subtitle}>
        Biodiversidad de Canarias
      </Text>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Fauna')}
        >
          <Text style={styles.buttonIcon}>🐾</Text>
          <Text style={styles.buttonText}>Fauna</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Flora')}
        >
          <Text style={styles.buttonIcon}>🌿</Text>
          <Text style={styles.buttonText}>Flora</Text>
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
    marginBottom: 50,
  },

  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  button: {
    width: 140,
    height: 140,
    borderRadius: 20,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonIcon: {
    fontSize: 45,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: '600',
  },
});