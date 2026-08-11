import { StyleSheet, Text, View } from 'react-native';

export default function MiDex() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📖</Text>
      <Text style={styles.title}>Mi DEX</Text>
      <Text style={styles.subtitle}>
        Tus especies descubiertas
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
    fontSize: 50,
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