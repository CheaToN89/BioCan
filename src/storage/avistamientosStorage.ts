import AsyncStorage from '@react-native-async-storage/async-storage';

import { Avistamiento } from '../user/types';


const STORAGE_KEY = '@biocan/avistamientos';


export async function loadAvistamientos(): Promise<Avistamiento[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as Avistamiento[];
  } catch {
    return [];
  }
}


export async function saveAvistamientos(avistamientos: Avistamiento[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(avistamientos));
}
