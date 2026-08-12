export type Categoria = "Fauna" | "Flora";

export type Grupo =
  | "Marinos"
  | "Terrestres"
  | "Aves"
  | "Flora terrestre"
  | "Flora marina";

export type Subgrupo =
  | "Peces"
  | "Tiburones"
  | "Cetáceos"
  | "Tortugas"
  | "Cefalópodos"
  | "Invertebrados"
  | "Anfibios"
  | "Mamíferos"
  | "Reptiles"
  | "Insectos"
  | "Árboles"
  | "Arbustos"
  | "Plantas"
  | "Flores"
  | "Hongos"
  | "Líquenes"
  | "Algas";

export interface Especie {
  id: string;

  categoria: Categoria;
  grupo: Grupo;
  subgrupo: Subgrupo;

  nombreComun: string;
  nombresAlternativos: string[];
  nombreCientifico: string;
  familia: string;

  descripcion: string;
  habitat: string;
  zonaCanarias: string;
  conservacion: string;
  curiosidades: string[];
  imagen: string;

  distribucion?: string;
  alimentacion?: string;
  interaccion?: string;
  observacion?: string;
  vida?: string;
  longitud?: string;
  peso?: string;
  profundidad?: string;
  altitud?: string;
  altura?: string;
  envergadura?: string;
  floracion?: string;
  epocaObservacion?: string;
  wikipedia?: string;
}
