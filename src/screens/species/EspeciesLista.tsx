import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { getEspecies } from '../../data';
import { useAvistamientos } from '../../context/AvistamientosContext';
import { InicioStackParamList } from '../../navigation/types';
import SpeciesCard from '../../components/SpeciesCard';


type Props = {
  navigation: NativeStackNavigationProp<InicioStackParamList, 'EspeciesLista'>;
};


export default function EspeciesLista({ navigation }: Props) {
  const route = useRoute<RouteProp<InicioStackParamList, 'EspeciesLista'>>();
  const { categoria, grupo, subgrupo } = route.params;

  const { isDescubierta } = useAvistamientos();

  const especiesFiltradas = getEspecies({ categoria, grupo, subgrupo });


  if (especiesFiltradas.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          Sin especies todavía
        </Text>

        <Text style={styles.emptyText}>
          Pronto añadiremos especies en esta categoría.
        </Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={especiesFiltradas}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <SpeciesCard
            especie={item}
            avistada={isDescubierta(item.id)}
            origen="explorar"
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

  emptyContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    color: '#666666',
  },
});
