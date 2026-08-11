import { StyleSheet, Text, View } from 'react-native';

export default function Mas() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>☰</Text>
      <Text style={styles.title}>Más</Text>
      <Text style={styles.subtitle}>
        Configuración y opciones
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