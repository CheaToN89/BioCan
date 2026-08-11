import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type FloraNavigationProp = NativeStackNavigationProp<{
  Arboles: undefined;
  Arbustos: undefined;
  Plantas: undefined;
  Flores: undefined;
  Marina: undefined;
  Hongos: undefined;
  Liquenes: undefined;
}>;

type Props = {
  navigation: FloraNavigationProp;
};

export default function FloraInicio({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.icon}>🌿</Text>

      <Text style={styles.title}>
        Flora de Canarias
      </Text>

      <Text style={styles.subtitle}>
        Explora la biodiversidad vegetal de las islas
      </Text>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Arboles')}
        >
          <Text style={styles.buttonIcon}>🌳</Text>
          <Text style={styles.buttonText}>Árboles</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Arbustos')}
        >
          <Text style={styles.buttonIcon}>🌿</Text>
          <Text style={styles.buttonText}>Arbustos</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Plantas')}
        >
          <Text style={styles.buttonIcon}>🌱</Text>
          <Text style={styles.buttonText}>Plantas</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Flores')}
        >
          <Text style={styles.buttonIcon}>🌸</Text>
          <Text style={styles.buttonText}>Flores</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Marina')}
        >
          <Text style={styles.buttonIcon}>🌊</Text>
          <Text style={styles.buttonText}>Flora marina</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Hongos')}
        >
          <Text style={styles.buttonIcon}>🍄</Text>
          <Text style={styles.buttonText}>Hongos</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Liquenes')}
        >
          <Text style={styles.buttonIcon}>🪨</Text>
          <Text style={styles.buttonText}>Líquenes</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginBottom: 30,
  },

  buttonsContainer: {
    width: '100%',
    gap: 10,
  },

  button: {
    height: 55,
    borderRadius: 15,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonIcon: {
    fontSize: 24,
    marginRight: 12,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});