import { Alert, Image, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAvistamientos } from '../../context/AvistamientosContext';
import { getEspecieById } from '../../data';
import { FrecuenciaCanarias, Subgrupo } from '../../data/types';
import { InicioStackParamList, MiDexStackParamList } from '../../navigation/types';

const FRECUENCIA_LABELS: Record<FrecuenciaCanarias, string> = {
  comun: 'Común',
  escaso: 'Escaso',
  raro: 'Raro',
};

const FRECUENCIA_COLOR: Record<FrecuenciaCanarias, string> = {
  comun: '#4a7c59',
  escaso: '#b8860b',
  raro: '#b85454',
};

const SUBGRUPO_EMOJI: Record<Subgrupo, string> = {
  Peces: '🐠',
  Tiburones: '🦈',
  Cetáceos: '🐋',
  Tortugas: '🐢',
  Cefalópodos: '🦑',
  Invertebrados: '🦐',
  Anfibios: '🐸',
  Mamíferos: '🐾',
  Reptiles: '🦎',
  Insectos: '🦋',
  Aves: '🐦',
  Árboles: '🌳',
  Arbustos: '🌿',
  Plantas: '🌱',
  Flores: '🌸',
  Hongos: '🍄',
  Líquenes: '🪨',
  Algas: '🌊',
};

function obtenerEmojiSubgrupo(subgrupo: Subgrupo): string {
  return SUBGRUPO_EMOJI[subgrupo] ?? '🐾';
}

function esEnlaceWikipediaValido(url?: string): boolean {
  if (!url) {
    return false;
  }

  try {
    const { hostname, pathname } = new URL(url);
    const esDominioWikipedia =
      hostname === 'wikipedia.org' || hostname.endsWith('.wikipedia.org');

    return (
      esDominioWikipedia &&
      pathname.startsWith('/wiki/') &&
      pathname.length > '/wiki/'.length
    );
  } catch {
    return false;
  }
}

type FichaEspecieNavigationProp = NativeStackNavigationProp<
  InicioStackParamList | MiDexStackParamList,
  'FichaEspecie'
>;

export default function FichaEspecie() {
  const route = useRoute<
    RouteProp<InicioStackParamList | MiDexStackParamList, 'FichaEspecie'>
  >();
  const navigation = useNavigation<FichaEspecieNavigationProp>();
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

  const handleMasInformacionPress = () => {
    if (!especie?.wikipedia || !esEnlaceWikipediaValido(especie.wikipedia)) {
      return;
    }

    navigation.navigate('FuenteExternaWebView', {
      url: especie.wikipedia,
      titulo: especie.nombreComun,
      fuente: 'wikipedia',
    });
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
          {especie.imagen ? (
            <Image
              source={{ uri: especie.imagen }}
              style={styles.imagenFoto}
            />
          ) : (
            <Text style={styles.imagenTexto}>
              {obtenerEmojiSubgrupo(especie.subgrupo)}
            </Text>
          )}
        </View>

        <Text style={styles.nombre}>
          {especie.nombreComun}
        </Text>

        <Text style={styles.cientifico}>
          {especie.nombreCientifico}
        </Text>

        {especie.nombresAlternativos.length > 0 && (
          <Text style={styles.nombresAlternativos}>
            También: {especie.nombresAlternativos.join(', ')}
          </Text>
        )}

        <Text style={styles.descripcion}>
          {especie.descripcion}
        </Text>

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

        {tieneInfoCards && (
          <View style={styles.infoGrid}>
            {especie.alimentacion && (
              <View style={[styles.infoCard, styles.infoCardElevada, styles.alimentacion]}>
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
              <View style={[styles.infoCard, styles.infoCardElevada, styles.interaccion]}>
                <Text style={styles.icono}>
                  🛡
                </Text>

                <Text style={[styles.tituloCard, styles.tituloCardCompacto]}>
                  INTERACCIÓN CON EL SER HUMANO
                </Text>

                <Text style={styles.valorCard}>
                  {especie.interaccion}
                </Text>
              </View>
            )}

            {especie.conservacion && (
              <View style={[styles.infoCard, styles.infoCardElevada, styles.conservacion]}>
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
              <View style={[styles.infoCard, styles.infoCardElevada, styles.frecuenciaCanarias]}>
                <Text style={styles.icono}>
                  👁
                </Text>

                <Text style={styles.tituloCard}>
                  FRECUENCIA DE AVISTAMIENTO
                </Text>

                <View style={styles.valorConIndicador}>
                  <View
                    style={[
                      styles.frecuenciaIndicador,
                      { backgroundColor: FRECUENCIA_COLOR[especie.frecuenciaCanarias] },
                    ]}
                  />

                  <Text style={[styles.valorCard, styles.valorCardInline]}>
                    {FRECUENCIA_LABELS[especie.frecuenciaCanarias]}
                  </Text>
                </View>
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

        {esEnlaceWikipediaValido(especie.wikipedia) && (
          <Pressable
            style={styles.boton}
            onPress={handleMasInformacionPress}
          >
            <Text style={styles.botonTexto}>
              Más información
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
    overflow: 'hidden',
  },

  imagenFoto: {
    width: '100%',
    height: '100%',
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

  nombresAlternativos: {
    marginTop: 6,
    fontSize: 14,
    color: '#777777',
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

  infoCardElevada: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
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

  tituloCardCompacto: {
    fontSize: 11,
    lineHeight: 14,
  },

  valorCard: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },

  valorCardInline: {
    marginTop: 0,
  },

  valorConIndicador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },

  frecuenciaIndicador: {
    width: 10,
    height: 10,
    borderRadius: 5,
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
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 6,
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
