import { peces } from "./peces";
import { Categoria, Especie, Grupo, Subgrupo } from "./types";


// Aquí añadiremos posteriormente:
// import { aves } from "./aves";
// import { terrestres } from "./terrestres";
// import { flora } from "./flora";


export const especies: Especie[] = [

  ...peces,

];


export type FiltroEspecies = {
  categoria?: Categoria;
  grupo?: Grupo;
  subgrupo?: Subgrupo;
};


export function getEspecies(filtro: FiltroEspecies = {}): Especie[] {
  return especies.filter((especie) => {
    if (filtro.categoria !== undefined && especie.categoria !== filtro.categoria) {
      return false;
    }

    if (filtro.grupo !== undefined && especie.grupo !== filtro.grupo) {
      return false;
    }

    if (filtro.subgrupo !== undefined && especie.subgrupo !== filtro.subgrupo) {
      return false;
    }

    return true;
  });
}