import { StyleSheet, Text, View } from 'react-native';

export default function Marina() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🌊</Text>

      <Text style={styles.title}>
        Flora marina
      </Text>

      <Text style={styles.subtitle}>
        Algas y plantas marinas de Canarias
      </Text>
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
    fontSize: 17,
  },
});