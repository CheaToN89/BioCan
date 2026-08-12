import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import { Especie, Subgrupo } from '../data/types';
import { FichaEspecieOrigen, FichaEspecieParams } from '../navigation/types';

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

type Props = {
  especie: Especie;
  avistada?: boolean;
  origen: FichaEspecieOrigen;
  navigation: {
    navigate: (screen: 'FichaEspecie', params: FichaEspecieParams) => void;
  };
};

export default function SpeciesCard({
  especie,
  avistada = false,
  origen,
  navigation,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={() =>
        navigation.navigate('FichaEspecie', {
          id: especie.id,
          origen,
        })
      }
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          {especie.imagen ? (
            <Image
              source={{ uri: especie.imagen }}
              style={styles.image}
            />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>
                {obtenerEmojiSubgrupo(especie.subgrupo)}
              </Text>
            </View>
          )}

          {avistada && (
            <View style={styles.sello}>
              <Text style={styles.selloTexto}>
                ✓
              </Text>
            </View>
          )}
        </View>

        <Text
          style={styles.nombre}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {especie.nombreComun}
        </Text>

        <Text
          style={styles.cientifico}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {especie.nombreCientifico}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },

  card: {
    width: 160,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    margin: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  imageContainer: {
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },

  placeholder: {
    width: '100%',
    height: 130,
    borderRadius: 15,
    backgroundColor: '#d9edf7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderText: {
    fontSize: 55,
  },

  sello: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#dcefd8',
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },

  selloTexto: {
    fontWeight: 'bold',
  },

  nombre: {
    marginTop: 10,
    minHeight: 44,
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 22,
    textAlign: 'center',
  },

  cientifico: {
    marginTop: 4,
    minHeight: 16,
    fontSize: 12,
    lineHeight: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
