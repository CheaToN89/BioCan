import { Categoria, Grupo, Subgrupo } from '../data/types';

export type RootTabParamList = {
  Inicio: undefined;
  'Mi DEX': undefined;
  Más: undefined;
};

export type EspeciesListaParams = {
  categoria: Categoria;
  grupo: Grupo;
  subgrupo: Subgrupo;
  titulo: string;
};

export type FichaEspecieOrigen = 'explorar' | 'dex';

export type FichaEspecieParams = {
  id: string;
  origen: FichaEspecieOrigen;
};

export type InicioStackParamList = {
  InicioPrincipal: undefined;
  Explorar: undefined;
  Fauna: undefined;
  Marinos: undefined;
  FichaEspecie: FichaEspecieParams;
  Terrestres: undefined;
  Flora: undefined;
  EspeciesLista: EspeciesListaParams;
};

export type MiDexStackParamList = {
  MiDexInicio: undefined;
  FichaEspecie: FichaEspecieParams;
};
