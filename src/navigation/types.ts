import { Categoria, Especie, Grupo, Subgrupo } from '../data/types';

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

export type InicioStackParamList = {
  InicioPrincipal: undefined;
  Explorar: undefined;
  Fauna: undefined;
  Marinos: undefined;
  FichaEspecie: { especie: Especie };
  Terrestres: undefined;
  Flora: undefined;
  EspeciesLista: EspeciesListaParams;
};
