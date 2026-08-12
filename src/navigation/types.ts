import { Categoria, Especie, Grupo, Subgrupo } from '../data/types';

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
  Aves: undefined;
  Flora: undefined;
  Arboles: undefined;
  Arbustos: undefined;
  Plantas: undefined;
  Flores: undefined;
  Marina: undefined;
  Hongos: undefined;
  Liquenes: undefined;
  EspeciesLista: EspeciesListaParams;
};
