import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function FaunaInicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🐾</Text>

      <Text style={styles.title}>
        Fauna de Canarias
      </Text>

      <Text style={styles.subtitle}>
        Explora las especies animales de las islas
      </Text>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>🌊</Text>
          <Text style={styles.buttonText}>Marinos</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>🌍</Text>
          <Text style={styles.buttonText}>Terrestres</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>🐦</Text>
          <Text style={styles.buttonText}>Aves</Text>
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

  buttonsContainer: {
    gap: 15,
    width: '100%',
  },

  button: {
    height: 80,
    borderRadius: 18,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonIcon: {
    fontSize: 30,
    marginRight: 15,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: '600',
  },
});