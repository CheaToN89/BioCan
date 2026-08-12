import { Alert, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useAvistamientos } from '../../context/AvistamientosContext';
import { getEspecieById } from '../../data';
import { FrecuenciaCanarias } from '../../data/types';
import { InicioStackParamList, MiDexStackParamList } from '../../navigation/types';

const FRECUENCIA_LABELS: Record<FrecuenciaCanarias, string> = {
  comun: 'Común',
  escaso: 'Escaso',
  raro: 'Raro',
};

export default function FichaEspecie() {
  const route = useRoute<
    RouteProp<InicioStackParamList | MiDexStackParamList, 'FichaEspecie'>
  >();
  const { id, origen } = route.params;
  const {
    registrarAvistamiento,
    quitarEspecieDelDex,
    isDescubierta,
    isLoading,
  } = useAvistamientos();
  const especie = getEspecieById(id);
  const descubierta = isDescubierta(id);

  const handleDexPress = () => {
    if (isLoading) {
      return;
    }

    if (descubierta) {
      Alert.alert(
        '¿Quieres quitar esta especie de Mi DEX?',
        undefined,
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Quitar',
            style: 'destructive',
            onPress: () => {
              void quitarEspecieDelDex(id);
            },
          },
        ],
      );
      return;
    }

    void (async () => {
      const resultado = await registrarAvistamiento({ especieId: id });

      if (!resultado.yaRegistrada) {
        Alert.alert('Especie añadida a Mi DEX');
      }
    })();
  };

  if (!especie) {
    return (
      <View style={styles.container}>
        <View style={styles.carta}>
          <Text style={styles.nombre}>
            Especie no encontrada
          </Text>

          <Text style={styles.descripcion}>
            No hemos podido cargar la información de esta especie.
          </Text>
        </View>
      </View>
    );
  }

  const tieneInfoCards =
    especie.alimentacion ||
    especie.interaccion ||
    especie.conservacion ||
    especie.frecuenciaCanarias;


  return (
    <ScrollView style={styles.container}>
      <View style={styles.carta}>
        <View style={styles.imagen}>
          <Text style={styles.imagenTexto}>
            🐟
          </Text>
        </View>

        <Text style={styles.nombre}>
          {especie.nombreComun}
        </Text>

        <Text style={styles.cientifico}>
          {especie.nombreCientifico}
        </Text>

        <Text style={styles.descripcion}>
          {especie.descripcion}
        </Text>

        {tieneInfoCards && (
          <View style={styles.infoGrid}>
            {especie.alimentacion && (
              <View style={[styles.infoCard, styles.alimentacion]}>
                <Text style={styles.icono}>
                  🍃
                </Text>

                <Text style={styles.tituloCard}>
                  ALIMENTACIÓN
                </Text>

                <Text style={styles.valorCard}>
                  {especie.alimentacion}
                </Text>
              </View>
            )}

            {especie.interaccion && (
              <View style={[styles.infoCard, styles.interaccion]}>
                <Text style={styles.icono}>
                  🛡
                </Text>

                <Text style={styles.tituloCard}>
                  INTERACCIÓN
                </Text>

                <Text style={styles.valorCard}>
                  {especie.interaccion}
                </Text>
              </View>
            )}

            {especie.conservacion && (
              <View style={[styles.infoCard, styles.conservacion]}>
                <Text style={styles.icono}>
                  🌱
                </Text>

                <Text style={styles.tituloCard}>
                  CONSERVACIÓN
                </Text>

                <Text style={styles.valorCard}>
                  {especie.conservacion}
                </Text>
              </View>
            )}

            {especie.frecuenciaCanarias && (
              <View
                style={[
                  styles.infoCard,
                  styles.frecuenciaCanarias,
                  especie.notaFrecuencia && styles.infoCardConNota,
                ]}
              >
                <Text style={styles.icono}>
                  👁
                </Text>

                <Text style={styles.tituloCard}>
                  FRECUENCIA EN CANARIAS
                </Text>

                <Text style={styles.valorCard}>
                  {FRECUENCIA_LABELS[especie.frecuenciaCanarias]}
                </Text>

                {especie.notaFrecuencia && (
                  <Text style={styles.notaFrecuenciaCard}>
                    {especie.notaFrecuencia}
                  </Text>
                )}
              </View>
            )}
          </View>
        )}

        <View style={styles.separador} />

        <Text style={styles.tituloSeccion}>
          📋 Datos destacados
        </Text>

        {especie.longitud && (
          <View style={styles.datoLinea}>
            <Text>
              📏 Longitud
            </Text>

            <Text>
              {especie.longitud}
            </Text>
          </View>
        )}

        {especie.peso && (
          <View style={styles.datoLinea}>
            <Text>
              ⚖️ Peso
            </Text>

            <Text>
              {especie.peso}
            </Text>
          </View>
        )}

        {especie.profundidad && (
          <View style={styles.datoLinea}>
            <Text>
              🌊 Profundidad
            </Text>

            <Text>
              {especie.profundidad}
            </Text>
          </View>
        )}

        {especie.altura && (
          <View style={styles.datoLinea}>
            <Text>
              📐 Altura
            </Text>

            <Text>
              {especie.altura}
            </Text>
          </View>
        )}

        {especie.altitud && (
          <View style={styles.datoLinea}>
            <Text>
              ⛰ Altitud
            </Text>

            <Text>
              {especie.altitud}
            </Text>
          </View>
        )}

        {especie.envergadura && (
          <View style={styles.datoLinea}>
            <Text>
              🪽 Envergadura
            </Text>

            <Text>
              {especie.envergadura}
            </Text>
          </View>
        )}

        {especie.floracion && (
          <View style={styles.datoLinea}>
            <Text>
              🌸 Floración
            </Text>

            <Text>
              {especie.floracion}
            </Text>
          </View>
        )}

        {especie.epocaObservacion && (
          <View style={styles.datoLinea}>
            <Text>
              📅 Época de observación
            </Text>

            <Text>
              {especie.epocaObservacion}
            </Text>
          </View>
        )}

        <View style={styles.datoLinea}>
          <Text>
            🏠 Hábitat
          </Text>

          <Text>
            {especie.habitat}
          </Text>
        </View>

        <View style={styles.datoLinea}>
          <Text>
            ⏳ Vida
          </Text>

          <Text>
            {especie.vida}
          </Text>
        </View>

        <View style={styles.separador} />

        <Text style={styles.tituloSeccion}>
          ⭐ Curiosidades
        </Text>

        {especie.curiosidades.map((curiosidad: string, index: number) => (
          <Text
            key={index}
            style={styles.curiosidad}
          >
            • {curiosidad}
          </Text>
        ))}

        <Pressable style={styles.boton}>
          <Text style={styles.botonTexto}>
            Ver en Wikipedia
          </Text>
        </Pressable>

        {origen === 'explorar' && (
          <Pressable
            style={[
              styles.botonSecundario,
              isLoading && styles.botonDeshabilitado,
            ]}
            disabled={isLoading}
            onPress={handleDexPress}
          >
            <Text style={styles.botonTexto}>
              {descubierta ? '✓ En Mi DEX' : '+ Añadir a Mi DEX'}
            </Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  carta: {
    margin: 15,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  imagen: {
    height: 220,
    borderRadius: 20,
    backgroundColor: '#d9edf7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagenTexto: {
    fontSize: 80,
  },

  nombre: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cientifico: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  descripcion: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#444444',
  },

  infoGrid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },

  infoCard: {
    width: '48%',
    height: 140,
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icono: {
    fontSize: 32,
  },

  tituloCard: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },

  valorCard: {
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
  },

  alimentacion: {
    backgroundColor: '#e5f3dc',
  },

  interaccion: {
    backgroundColor: '#f8ebc9',
  },

  conservacion: {
    backgroundColor: '#dcecf8',
  },

  frecuenciaCanarias: {
    backgroundColor: '#eee6f7',
  },

  infoCardConNota: {
    height: undefined,
    minHeight: 140,
  },

  notaFrecuenciaCard: {
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
    color: '#555555',
    lineHeight: 16,
  },

  separador: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 20,
  },

  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  datoLinea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  curiosidad: {
    fontSize: 16,
    marginBottom: 10,
  },

  boton: {
    marginTop: 25,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#d9edf7',
    alignItems: 'center',
  },

  botonSecundario: {
    marginTop: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#dcefd8',
    alignItems: 'center',
  },

  botonDeshabilitado: {
    opacity: 0.5,
  },

  botonTexto: {
    fontWeight: 'bold',
  },
});
