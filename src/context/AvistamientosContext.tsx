import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  loadAvistamientos,
  saveAvistamientos,
} from '../storage/avistamientosStorage';
import { Avistamiento } from '../user/types';


type RegistrarAvistamientoInput = {
  especieId: string;
  fecha?: string;
  notas?: string;
};


export type ResultadoRegistro = {
  yaRegistrada: boolean;
};


type AvistamientosContextValue = {
  avistamientos: Avistamiento[];
  isLoading: boolean;
  registrarAvistamiento: (input: RegistrarAvistamientoInput) => Promise<ResultadoRegistro>;
  quitarEspecieDelDex: (especieId: string) => Promise<void>;
  isDescubierta: (especieId: string) => boolean;
  getAvistamientosPorEspecie: (especieId: string) => Avistamiento[];
};


const AvistamientosContext = createContext<AvistamientosContextValue | null>(null);


function crearId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}


function fechaHoy(): string {
  return new Date().toISOString().slice(0, 10);
}


export function AvistamientosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [avistamientos, setAvistamientos] = useState<Avistamiento[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    loadAvistamientos()
      .then(setAvistamientos)
      .finally(() => setIsLoading(false));
  }, []);


  const registrarAvistamiento = useCallback(
    async ({ especieId, fecha, notas }: RegistrarAvistamientoInput): Promise<ResultadoRegistro> => {
      let yaRegistrada = false;
      let actualizados: Avistamiento[] = [];

      setAvistamientos((prev) => {
        if (prev.some((avistamiento) => avistamiento.especieId === especieId)) {
          yaRegistrada = true;
          return prev;
        }

        const nuevo: Avistamiento = {
          id: crearId(),
          especieId,
          fecha: fecha ?? fechaHoy(),
          notas,
          createdAt: new Date().toISOString(),
        };

        actualizados = [...prev, nuevo];
        return actualizados;
      });

      if (yaRegistrada) {
        return { yaRegistrada: true };
      }

      await saveAvistamientos(actualizados);

      return { yaRegistrada: false };
    },
    [],
  );


  const quitarEspecieDelDex = useCallback(async (especieId: string) => {
    let actualizados: Avistamiento[] = [];

    setAvistamientos((prev) => {
      actualizados = prev.filter((avistamiento) => avistamiento.especieId !== especieId);
      return actualizados;
    });

    await saveAvistamientos(actualizados);
  }, []);


  const isDescubierta = useCallback(
    (especieId: string) =>
      avistamientos.some((avistamiento) => avistamiento.especieId === especieId),
    [avistamientos],
  );


  const getAvistamientosPorEspecie = useCallback(
    (especieId: string) =>
      avistamientos.filter((avistamiento) => avistamiento.especieId === especieId),
    [avistamientos],
  );


  const value = useMemo(
    () => ({
      avistamientos,
      isLoading,
      registrarAvistamiento,
      quitarEspecieDelDex,
      isDescubierta,
      getAvistamientosPorEspecie,
    }),
    [
      avistamientos,
      isLoading,
      registrarAvistamiento,
      quitarEspecieDelDex,
      isDescubierta,
      getAvistamientosPorEspecie,
    ],
  );


  return (
    <AvistamientosContext.Provider value={value}>
      {children}
    </AvistamientosContext.Provider>
  );
}


export function useAvistamientos(): AvistamientosContextValue {
  const context = useContext(AvistamientosContext);

  if (!context) {
    throw new Error('useAvistamientos debe usarse dentro de AvistamientosProvider');
  }

  return context;
}
