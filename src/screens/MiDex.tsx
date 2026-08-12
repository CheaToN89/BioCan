import { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SpeciesCard from '../components/SpeciesCard';
import { useAvistamientos } from '../context/AvistamientosContext';
import { getEspecieById } from '../data';
import { Especie } from '../data/types';
import { MiDexStackParamList } from '../navigation/types';


type Props = {
  navigation: NativeStackNavigationProp<MiDexStackParamList, 'MiDexInicio'>;
};


function obtenerEspeciesDescubiertas(avistamientos: { especieId: string; createdAt: string }[]): Especie[] {
  const primeraDescubierta = new Map<string, string>();

  for (const avistamiento of avistamientos) {
    const existente = primeraDescubierta.get(avistamiento.especieId);

    if (!existente || avistamiento.createdAt < existente) {
      primeraDescubierta.set(avistamiento.especieId, avistamiento.createdAt);
    }
  }

  const idsOrdenados = [...primeraDescubierta.entries()]
    .sort(([, a], [, b]) => a.localeCompare(b))
    .map(([especieId]) => especieId);

  return idsOrdenados
    .map((especieId) => getEspecieById(especieId))
    .filter((especie): especie is Especie => especie !== undefined);
}


export default function MiDex({ navigation }: Props) {
  const { avistamientos, isLoading } = useAvistamientos();

  const especiesDescubiertas = useMemo(
    () => obtenerEspeciesDescubiertas(avistamientos),
    [avistamientos],
  );


  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a7c59" />

        <Text style={styles.loadingText}>
          Cargando tu DEX...
        </Text>
      </View>
    );
  }


  if (especiesDescubiertas.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>
          📖
        </Text>

        <Text style={styles.emptyTitle}>
          Mi DEX está vacío
        </Text>

        <Text style={styles.emptyText}>
          Aún no has descubierto ninguna especie.
        </Text>

        <Text style={styles.emptyHint}>
          Explora la biodiversidad de Canarias y empieza tu DEX.
        </Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={especiesDescubiertas}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <SpeciesCard
            especie={item}
            origen="dex"
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666666',
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444444',
    marginBottom: 10,
  },

  emptyHint: {
    fontSize: 15,
    textAlign: 'center',
    color: '#666666',
  },
});
