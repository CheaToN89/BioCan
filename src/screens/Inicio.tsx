import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { InicioStackParamList } from '../navigation/types';

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

      <Pressable
        style={({ pressed }) => [
          styles.cta,
          pressed && styles.ctaPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Explora la fauna y flora de Canarias"
        onPress={() => navigation.navigate('Explorar')}
      >
        <Text style={styles.ctaIcon}>
          🌿🐾
        </Text>

        <Text style={styles.ctaText}>
          Explora la fauna y flora de Canarias
        </Text>
      </Pressable>
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
    marginBottom: 48,
    textAlign: 'center',
  },

  cta: {
    width: '100%',
    maxWidth: 340,
    minHeight: 180,
    borderRadius: 24,
    backgroundColor: '#dcefd8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 32,
  },

  ctaPressed: {
    backgroundColor: '#c8e4c0',
  },

  ctaIcon: {
    fontSize: 48,
    marginBottom: 16,
  },

  ctaText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 30,
    color: '#1a1a1a',
  },
});
