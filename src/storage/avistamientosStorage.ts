import AsyncStorage from '@react-native-async-storage/async-storage';

import { Avistamiento } from '../user/types';


const STORAGE_KEY = '@biocan/avistamientos';


export async function loadAvistamientos(): Promise<Avistamiento[]> {
  let raw: string | null;

  try {
    raw = await AsyncStorage.getItem(STORAGE_KEY);
  } catch (error) {
    throw new Error('No se pudo leer el almacenamiento de avistamientos', { cause: error });
  }

  if (!raw) {
    return [];
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error('Los avistamientos guardados están corruptos', { cause: error });
  }

  if (!Array.isArray(parsed)) {
    throw new Error('Formato inválido de avistamientos guardados');
  }

  return parsed as Avistamiento[];
}


export async function saveAvistamientos(avistamientos: Avistamiento[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(avistamientos));
  } catch (error) {
    throw new Error('No se pudieron guardar los avistamientos', { cause: error });
  }
}
