import { Alert, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useAvistamientos } from '../../context/AvistamientosContext';
import { getEspecieById } from '../../data';
import { InicioStackParamList } from '../../navigation/types';

export default function FichaEspecie() {
  const route = useRoute<RouteProp<InicioStackParamList, 'FichaEspecie'>>();
  const { id } = route.params;
  const { registrarAvistamiento, isDescubierta } = useAvistamientos();
  const especie = getEspecieById(id);

  const handleRegistrarAvistamiento = async () => {
    const yaDescubierta = isDescubierta(id);

    await registrarAvistamiento({ especieId: id });

    Alert.alert(
      yaDescubierta ? 'Avistamiento registrado' : '¡Nueva especie descubierta!',
    );
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
    especie.observacion;


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

            {especie.observacion && (
              <View style={[styles.infoCard, styles.observacion]}>
                <Text style={styles.icono}>
                  👁
                </Text>

                <Text style={styles.tituloCard}>
                  OBSERVACIÓN
                </Text>

                <Text style={styles.valorCard}>
                  {especie.observacion}
                </Text>
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

        <Pressable style={styles.botonSecundario} onPress={handleRegistrarAvistamiento}>
          <Text style={styles.botonTexto}>
            Registrar avistamiento
          </Text>
        </Pressable>
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

  observacion: {
    backgroundColor: '#eee6f7',
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

  botonTexto: {
    fontWeight: 'bold',
  },
});
